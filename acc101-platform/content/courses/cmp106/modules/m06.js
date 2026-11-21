// cmp106 - Module 6: Power Supply & Cooling
module.exports = {
  "number": 6,
  "slug": "power-supply-and-cooling",
  "title": "Power Supply & Cooling",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a power supply does and what wattage means.",
    "Work out roughly how much power a computer needs.",
    "Explain why a cheap power supply is a false saving.",
    "Explain how fans and airflow keep a computer cool.",
    "State the safety rule about never opening a power supply."
  ],
  "sections": [
    {
      "heading": "Turning Wall Power Into Computer Power",
      "html": "<p>Wall sockets supply mains electricity: high voltage, alternating current. Computer parts need low-voltage direct current — 12 volts, 5 volts, 3.3 volts. The power supply unit (PSU) is the metal box that does the conversion, and it feeds each part through its own cable: a big one for the motherboard, one for the CPU, and others for the graphics card and drives.</p>\n<p>A power supply's wattage is the most power it can deliver: 550 W, 750 W, 1,000 W. Add up what the CPU and graphics card draw at full load, add headroom for the rest, and pick a supply comfortably above the total. A typical everyday computer is fine with 550 W; a gaming computer with a big graphics card often needs 650 to 750 W.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The power supply converts mains electricity into safe low voltages for the parts. </div></p>\n"
    },
    {
      "heading": "Why a Good Power Supply Matters",
      "html": "<p>The power supply touches every part in the computer, so a bad one can damage everything. Cheap, unbranded supplies may claim a wattage they cannot truly deliver, or fail in a way that harms other parts. A good supply from a known maker, with an 80 PLUS rating (a mark of efficiency), costs more but protects the whole machine.</p>\n<p>Signs of a failing power supply include random shutdowns, a computer that restarts under heavy load, and a burning smell. If you smell burning, switch the computer off at the wall and do not switch it back on until the cause is found. Power problems are not a job to guess at.</p>\n"
    },
    {
      "heading": "Cooling: Moving the Heat Out",
      "html": "<p>Every part makes heat, and heat must leave the case or the parts slow down and wear out. Fans do the moving: cool air comes in at the front or bottom, passes over the hot parts, and warm air leaves at the back or top. That flow is called airflow, and it only works if the path is clear — a case stuffed with cables, or vents blocked by dust, chokes it.</p>\n<p>Most computers have at least two fans: one on the CPU cooler and one or two in the case. Bigger fans can move the same air more slowly and quietly. Dust is the enemy of cooling: it clogs fans and blankets heatsinks, so a dusty computer runs hotter and louder than a clean one.</p>\n"
    },
    {
      "heading": "Safety: Never Open a Power Supply",
      "html": "<p>This rule is absolute: never open a power supply unit. Inside it are capacitors — parts that store electricity — that can hold a dangerous charge long after the computer is unplugged. There is nothing inside a power supply that a user can fix, and opening one can seriously injure you. If a power supply is faulty, replace the whole unit.</p>\n<p>The same caution applies to the inside of a monitor, which also holds a charge. Power supplies and monitors are replace, not repair, for everyone except trained technicians. Module 10 repeats this rule, because it is the one safety rule in this course that must never be bent.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Never open a power supply. Its capacitors can hold a dangerous charge long after it is unplugged. Replace it; do not repair it.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>The PSU converts mains power to safe low voltages; its wattage is the most it can deliver.</li>\n<li>Add up the CPU and graphics card, leave headroom, and buy a known brand.</li>\n<li>Fans move cool air in and warm air out; dust chokes that flow.</li>\n<li>Never open a power supply or a monitor. Replace, do not repair.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying the cheapest power supply. It touches every part, and a bad one can damage them all.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Blocking the vents or letting dust build up, then wondering why the computer is hot and loud.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Power supply",
      "def": "The part that turns wall electricity into safe low-voltage power for the computer's parts."
    },
    {
      "term": "Wattage",
      "def": "The most power a power supply can deliver, measured in watts (W)."
    },
    {
      "term": "Mains electricity",
      "def": "The high-voltage alternating current from a wall socket."
    },
    {
      "term": "Direct current",
      "def": "Low-voltage electricity flowing one way, which computer parts use."
    },
    {
      "term": "80 PLUS",
      "def": "A mark of efficiency on a power supply; a rated supply wastes less power as heat."
    },
    {
      "term": "Capacitor",
      "def": "A part that stores an electric charge; inside a power supply it can stay dangerous after unplugging."
    },
    {
      "term": "Fan",
      "def": "A spinning part that moves air over a heatsink to carry heat away."
    },
    {
      "term": "Airflow",
      "def": "The path of cool air in and warm air out of a computer case."
    },
    {
      "term": "Heatsink",
      "def": "A metal block with fins that carries heat away from a CPU."
    },
    {
      "term": "Dust",
      "def": "The main enemy of cooling; it clogs fans and blankets heatsinks."
    },
    {
      "term": "Cable",
      "def": "A wire carrying power or data between parts inside a computer."
    },
    {
      "term": "Shutdown",
      "def": "A computer switching itself off, sometimes to protect itself from heat or a power fault."
    },
    {
      "term": "Restart",
      "def": "A computer switching off and on again by itself, often a sign of a power or heat problem."
    },
    {
      "term": "Efficiency",
      "def": "How much of the power a supply takes in is delivered to the parts, rather than wasted as heat."
    },
    {
      "term": "Voltage",
      "def": "The pressure of electricity, measured in volts; computer parts use 12, 5, and 3.3 volts."
    }
  ],
  "video": {
    "title": "How to Choose A Power Supply for Beginners",
    "embedUrl": "https://www.youtube.com/embed/SS7P63fLE_8",
    "note": "Watch how to choose the right wattage, and work out the rough total for a computer with a mid-range graphics card.",
    "more": [
      {
        "title": "Check this Before Buying a PC Power Supply! PSU Quality, efficiency, safety, compatible connectors..",
        "url": "https://www.youtube.com/watch?v=JdYT_KNZNno"
      },
      {
        "title": "Choosing the Correct PSU Wattage for a PC",
        "url": "https://www.youtube.com/watch?v=07Rkx7CCmG4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Power supply” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power supply — The part that turns wall electricity into safe low-voltage power for the computer's parts. Step 2: It matters because it is part of: Explain what a power supply does and what wattage means. Step 3: An example from the module is the way power supply shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Wattage” and “Mains electricity”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wattage — The most power a power supply can deliver, measured in watts (W). Step 2: Mains electricity — The high-voltage alternating current from a wall socket. Step 3: They differ because the first is about wattage while the second is about mains electricity; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Work out roughly how much power a computer needs.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Work out roughly how much power a computer needs. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Direct current” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Direct current — Low-voltage electricity flowing one way, which computer parts use. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 80 PLUS — A mark of efficiency on a power supply; a rated supply wastes less power as heat. Step 2: Capacitor — A part that stores an electric charge; inside a power supply it can stay dangerous after unplugging. Step 3: Fan — A spinning part that moves air over a heatsink to carry heat away. Step 4: Wattage — The most power a power supply can deliver, measured in watts (W). (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why a cheap power supply is a false saving. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Power supply” mean?",
      "choices": [
        "The part that turns wall electricity into safe low-voltage power for the computer's parts.",
        "The most power a power supply can deliver, measured in watts (W).",
        "The high-voltage alternating current from a wall socket.",
        "Low-voltage electricity flowing one way, which computer parts use."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Power supply means: The part that turns wall electricity into safe low-voltage power for the computer's parts. (b) is the definition of Wattage, not of Power supply. (c) is the definition of Mains electricity, not of Power supply. (d) is the definition of Direct current, not of Power supply."
    },
    {
      "q": "What does the term “Wattage” mean?",
      "choices": [
        "The part that turns wall electricity into safe low-voltage power for the computer's parts.",
        "The most power a power supply can deliver, measured in watts (W).",
        "The high-voltage alternating current from a wall socket.",
        "Low-voltage electricity flowing one way, which computer parts use."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Wattage means: The most power a power supply can deliver, measured in watts (W). (a) is the definition of Power supply, not of Wattage. (c) is the definition of Mains electricity, not of Wattage. (d) is the definition of Direct current, not of Wattage."
    },
    {
      "q": "What does the term “Mains electricity” mean?",
      "choices": [
        "The part that turns wall electricity into safe low-voltage power for the computer's parts.",
        "The most power a power supply can deliver, measured in watts (W).",
        "The high-voltage alternating current from a wall socket.",
        "Low-voltage electricity flowing one way, which computer parts use."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Mains electricity means: The high-voltage alternating current from a wall socket. (a) is the definition of Power supply, not of Mains electricity. (b) is the definition of Wattage, not of Mains electricity. (d) is the definition of Direct current, not of Mains electricity."
    },
    {
      "q": "What does the term “Direct current” mean?",
      "choices": [
        "The part that turns wall electricity into safe low-voltage power for the computer's parts.",
        "The most power a power supply can deliver, measured in watts (W).",
        "The high-voltage alternating current from a wall socket.",
        "Low-voltage electricity flowing one way, which computer parts use."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Direct current means: Low-voltage electricity flowing one way, which computer parts use. (a) is the definition of Power supply, not of Direct current. (b) is the definition of Wattage, not of Direct current. (c) is the definition of Mains electricity, not of Direct current."
    },
    {
      "q": "Which term means: A mark of efficiency on a power supply; a rated supply wastes less power as heat.",
      "choices": [
        "80 PLUS",
        "Power supply",
        "Wattage",
        "Mains electricity"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 80 PLUS is the term for: A mark of efficiency on a power supply; a rated supply wastes less power as heat. (b) Power supply means The part that turns wall electricity into safe low-voltage power for the computer's parts. (c) Wattage means The most power a power supply can deliver, measured in watts (W). (d) Mains electricity means The high-voltage alternating current from a wall socket."
    },
    {
      "q": "Which term means: A part that stores an electric charge; inside a power supply it can stay dangerous after unplugging.",
      "choices": [
        "Power supply",
        "Capacitor",
        "Wattage",
        "Mains electricity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitor is the term for: A part that stores an electric charge; inside a power supply it can stay dangerous after unplugging. (a) Power supply means The part that turns wall electricity into safe low-voltage power for the computer's parts. (c) Wattage means The most power a power supply can deliver, measured in watts (W). (d) Mains electricity means The high-voltage alternating current from a wall socket."
    },
    {
      "q": "Which term means: A spinning part that moves air over a heatsink to carry heat away.",
      "choices": [
        "Power supply",
        "Wattage",
        "Fan",
        "Mains electricity"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Fan is the term for: A spinning part that moves air over a heatsink to carry heat away. (a) Power supply means The part that turns wall electricity into safe low-voltage power for the computer's parts. (b) Wattage means The most power a power supply can deliver, measured in watts (W). (d) Mains electricity means The high-voltage alternating current from a wall socket."
    },
    {
      "q": "Which term means: The path of cool air in and warm air out of a computer case.",
      "choices": [
        "Power supply",
        "Wattage",
        "Mains electricity",
        "Airflow"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Airflow is the term for: The path of cool air in and warm air out of a computer case. (a) Power supply means The part that turns wall electricity into safe low-voltage power for the computer's parts. (b) Wattage means The most power a power supply can deliver, measured in watts (W). (c) Mains electricity means The high-voltage alternating current from a wall socket."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Power Supply & Cooling: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a power supply does and what wattage means.</p>\n<p><strong>Key terms:</strong> Power supply · Wattage · Mains electricity · Direct current · 80 PLUS · Capacitor · Fan · Airflow.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a power supply does and what wattage means.</li>\n<li>Work out roughly how much power a computer needs.</li>\n<li>Explain why a cheap power supply is a false saving.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
