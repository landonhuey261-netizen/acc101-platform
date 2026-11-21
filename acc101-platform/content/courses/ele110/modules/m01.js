module.exports = {
  "number": 1,
  "slug": "low-voltage-systems-overview",
  "title": "Low-Voltage Systems Overview",
  "estTime": "3–4 hours",
  "objectives": [
    "Define low-voltage work and name the systems it includes.",
    "Explain the difference between power-limited and non-power-limited circuits.",
    "Describe how NEC Articles 725, 760, and 800 divide low-voltage work.",
    "Explain why low-voltage work still requires permits, inspections, and safe work practices.",
    "Identify the tools and test equipment a low-voltage technician uses."
  ],
  "sections": [
    {
      "heading": "What Counts as Low-Voltage Work",
      "html": "<p>Low-voltage work is the part of the electrical trade that carries information and signals instead of bulk power. When you install the network cable for an office, the smoke detectors in a school, the cameras on a warehouse, the card readers on an office door, or the nurse-call buttons in a hospital, you are doing low-voltage work. The voltages are small — often 12 or 24 volts DC, or the signaling voltages on a data cable — but the systems are not small in importance: a fire alarm that fails to sound or a hospital call system that fails to answer can cost lives.</p><p>Low voltage does not mean low skill. A low-voltage technician reads drawings, pulls and terminates cable, programs control panels, tests circuits, and troubleshoots systems that mix hardware, software, and networking. Many electricians specialize in low voltage for their whole career, and in Michigan the fire alarm specialty technician license is its own credential. The work is also a common entry point into the trade: an apprentice often starts by pulling data cable and mounting devices before moving on to line-voltage rough-in.</p><div class=\"callout\"><strong>Key idea:</strong> Low voltage means low power, not low consequence. A data cable that fails costs a business its network; a fire alarm circuit that fails costs lives. Install it like it matters — because it does.</div>"
    },
    {
      "heading": "Power-Limited Circuits: Class 1, 2, and 3",
      "html": "<p>The NEC divides the low-voltage world into classes. <strong>Class 1</strong> circuits are the higher-powered signaling circuits — remote-control and signaling circuits that are not power-limited, such as some motor-control and industrial signaling wiring. <strong>Class 2</strong> circuits are power-limited: the power source itself limits the energy the circuit can deliver, so the shock and fire risk stays low. Most of the work in this course — data, voice, video, security, access control, nurse call — runs on Class 2 or Class 3 circuits. <strong>Class 3</strong> circuits are also power-limited but may carry higher voltages than Class 2, and they are used where the circuit must be allowed to start a fire-safe but higher-energy signal, such as some paging and fire alarm notification circuits.</p><p>Why does the class matter? Because the class decides what wiring methods the NEC allows. Class 2 and Class 3 circuits can often be run without conduit and without the same separation rules as power wiring, which is what makes them economical to install — but only when the power source is a listed Class 2 or Class 3 source and the cable is listed for the use. Swap in a power supply that is not listed as Class 2, and the circuit is no longer a Class 2 circuit, no matter what the label on the box says.</p>"
    },
    {
      "heading": "The NEC Map: Articles 725, 760, and 800",
      "html": "<p>Three NEC articles organize almost all low-voltage work. <strong>Article 725</strong> covers remote-control, signaling, and power-limited circuits — the general rules for Class 1, 2, and 3 wiring, including cable types such as CL2, CL3, CL2R, and CL2P. <strong>Article 760</strong> covers fire alarm systems: power-limited fire alarm circuits (PLFA) and non-power-limited fire alarm circuits (NPLFA), including the special cable types FPL, FPLR, and FPLP. <strong>Article 800</strong> covers communications circuits — telephone, data, and network cabling — including the separation rules that keep communications cable away from power conductors.</p><p>Other articles fill in the picture: Article 770 covers optical fiber, Article 810 covers radio and television equipment, Article 820 covers community antenna television (cable TV) systems, and Article 830 covers network-powered broadband systems. You do not need to memorize every article today. You need to know that each system type has its own article, that the articles work together, and that the answer to any code question starts with finding the right article — not with guessing. In Michigan, the 2023 NEC applies together with the Michigan Part 8 amendments adopted March 12, 2024, and your local inspector enforces the adopted edition.</p>"
    },
    {
      "heading": "Safety: Low Voltage Is Not No Voltage",
      "html": "<p>The most dangerous sentence in low-voltage work is \"it's only low voltage.\" Low-voltage circuits are safer than line voltage, but they are not harmless: a 24-volt control circuit can still spark, a battery bank in a fire alarm panel can deliver a large fault current, and the real danger on most low-voltage jobs is not the circuit you are working on — it is the line-voltage circuit in the same box, the same ceiling, or the same panel. A technician pulling data cable above a drop ceiling can easily touch a live lighting circuit or a live junction box.</p><p>The safety rule for this whole program is absolute: never work on live or energized equipment. All practical guidance in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E. Before you open any panel, junction box, or enclosure, the circuit is de-energized, locked out, tagged out, and tested dead — and you verify it yourself with your own meter. Low-voltage work also has its own hazards: fiber shards in eyes and skin, ladder falls, cuts from cable and fish tape, and arc flash from the power supplies that feed the systems. PPE, ladders used correctly, and a clean work area are part of the job, not an extra.</p><div class=\"callout\"><strong>Safety hard line:</strong> Never instruct yourself or anyone else to work on live equipment. De-energize, lock out, tag out, test dead — every time, under a licensed supervisor.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Low-voltage work carries information and signals: data, voice, video, fire alarm, security, access control, and nurse call.</li><li>Class 2 and Class 3 circuits are power-limited by their source; Class 1 circuits are not.</li><li>Article 725 covers signaling circuits, Article 760 covers fire alarms, Article 800 covers communications, and Article 770 covers fiber.</li><li>All work in this program is anchored to the 2023 NEC plus Michigan Part 8 amendments adopted March 12, 2024.</li><li>Low voltage is not no voltage: de-energize, lock out, tag out, and test dead under a licensed supervisor, per NFPA 70E.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using any power supply and calling the circuit Class 2. The circuit is only Class 2 if the source is a listed Class 2 power supply. The listing, not the label, decides.</div><div class=\"callout\"><strong>Common mistake:</strong> Treating low-voltage work as unregulated because the voltage is low. Low-voltage work still needs permits and inspections in most Michigan jurisdictions, and fire alarm work is a licensed specialty.</div><p><strong>Ready-to-Work link:</strong> If you can name five low-voltage systems, explain Class 1, 2, and 3, and point to the right NEC article for a fire alarm circuit, you have this module. Module 2 goes hands-on with the cable itself: copper and fiber.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Low-voltage system",
      "def": "An electrical system that carries signals and information at low power, such as data, voice, video, fire alarm, security, and nurse call."
    },
    {
      "term": "Class 1 circuit",
      "def": "A remote-control or signaling circuit that is not power-limited, covered by NEC Article 725."
    },
    {
      "term": "Class 2 circuit",
      "def": "A power-limited circuit whose listed source limits the energy it can deliver; most data, security, and control wiring is Class 2."
    },
    {
      "term": "Class 3 circuit",
      "def": "A power-limited circuit that may carry higher voltage than Class 2, used for some paging and signaling circuits."
    },
    {
      "term": "NEC Article 725",
      "def": "The NEC article covering remote-control, signaling, and power-limited circuits."
    },
    {
      "term": "NEC Article 760",
      "def": "The NEC article covering fire alarm systems, both power-limited and non-power-limited."
    },
    {
      "term": "NEC Article 800",
      "def": "The NEC article covering communications circuits, including telephone and data cabling."
    },
    {
      "term": "NEC Article 770",
      "def": "The NEC article covering optical fiber cable and raceways."
    },
    {
      "term": "Power-limited",
      "def": "Limited by the power source so the circuit cannot deliver enough energy to start a fire or cause a serious shock."
    },
    {
      "term": "NFPA 70E",
      "def": "The standard for electrical safety in the workplace, including lockout/tagout and arc-flash protection."
    },
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "De-energizing equipment, locking the disconnect in the off position, tagging it, and testing dead before work begins."
    },
    {
      "term": "Fire alarm specialty technician",
      "def": "A Michigan specialty license for installing and servicing fire alarm systems."
    },
    {
      "term": "Listed",
      "def": "Tested and certified by a recognized laboratory (such as UL) for a specific use."
    },
    {
      "term": "Michigan Part 8 amendments",
      "def": "Michigan's amendments to the NEC, adopted with the 2023 NEC on March 12, 2024."
    }
  ],
  "video": {
    "title": "How to Choose Low Voltage Wire for Audio and Security",
    "embedUrl": "https://www.youtube.com/embed/cyzV_uv9_6I",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Copper vs Fiber vs Wireless | Networking Fundamentals",
        "url": "https://www.youtube.com/watch?v=wEsva1-2kp4"
      },
      {
        "title": "Network Cables — CompTIA A+ 220-1201",
        "url": "https://www.youtube.com/watch?v=29X5Ho3m2KU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Name five low-voltage systems found in a typical commercial building and, in one sentence each, say what each one does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Structured cabling/data network — carries voice, data, and video to workstations. Step 2: Fire alarm — detects fire and alerts occupants. Step 3: Security/access control — controls who can enter and records it. Step 4: CCTV — video surveillance of the building. Step 5: Nurse call (in health care) — lets patients summon staff. (Paging, intercom, and building automation are also acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the difference between a Class 1 circuit and a Class 2 circuit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A Class 1 circuit is not power-limited — the source can deliver enough energy to be a fire or shock hazard, so it needs wiring methods closer to power wiring. Step 2: A Class 2 circuit is power-limited by a listed Class 2 source, so the energy is limited and the wiring rules are less restrictive. Step 3: The class is decided by the listed power source, not by the voltage alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A coworker is about to pull data cable above a drop ceiling and says, \"It's only low voltage, so I don't need to check anything.\" What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Low voltage is not no voltage — the real danger above a ceiling is the live line-voltage lighting and power circuits sharing the space. Step 2: The circuit you touch may not be the one you think it is. Step 3: Work de-energized, locked out and tagged out, and test dead per NFPA 70E, under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Which NEC article covers fire alarm systems, and which covers communications circuits? What does each one govern?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 760 covers fire alarm systems — power-limited (PLFA) and non-power-limited (NPLFA) circuits, cable types, and installation rules. Step 2: Article 800 covers communications circuits — telephone and data cabling, including separation from power conductors. Step 3: Article 725 covers the general signaling and power-limited circuits that both build on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A power supply is labeled 24 V DC but is not a listed Class 2 source. Can the circuit it feeds be installed as a Class 2 circuit? Why or why not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: A circuit is Class 2 only when its source is a listed Class 2 power supply that limits the energy the circuit can deliver. Step 3: A 24 V label only states the voltage — without the listing, the circuit must be treated as Class 1 and wired to the stricter rules.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List the NEC articles a low-voltage technician should be able to find quickly, and say in one line what each covers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 725 — remote-control, signaling, and power-limited circuits (Class 1, 2, 3). Step 2: Article 760 — fire alarm systems. Step 3: Article 770 — optical fiber. Step 4: Article 800 — communications circuits. Step 5: Article 250 — grounding and bonding, which applies to low-voltage systems too.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which of these is a low-voltage system?",
      "choices": [
        "A 480 V motor feeder",
        "A nurse-call system in a hospital",
        "A 200 A service entrance",
        "A 240 V range circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A nurse-call system carries signals at low power — classic low-voltage work. (a) A 480 V motor feeder is line-voltage power work. (c) A service entrance is line-voltage power work. (d) A range circuit is line-voltage power work."
    },
    {
      "q": "A Class 2 circuit is best described as:",
      "choices": [
        "A circuit with no power source",
        "A power-limited circuit fed by a listed Class 2 source",
        "Any circuit under 120 volts",
        "A circuit that needs no inspection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Class 2 means power-limited by a listed Class 2 source. (a) Every circuit has a source. (c) Voltage alone does not make a circuit Class 2 — the listed source does. (d) Low-voltage work still needs permits and inspections."
    },
    {
      "q": "NEC Article 760 covers:",
      "choices": [
        "Communications circuits",
        "Fire alarm systems",
        "Optical fiber",
        "Service entrances"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 760 is the fire alarm article. (a) Communications circuits are Article 800. (c) Optical fiber is Article 770. (d) Service entrances are in Article 230."
    },
    {
      "q": "NEC Article 800 covers:",
      "choices": [
        "Fire alarm systems",
        "Grounding and bonding",
        "Communications circuits such as telephone and data",
        "Hazardous locations"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 800 covers communications circuits. (a) Fire alarms are Article 760. (b) Grounding and bonding are Article 250. (d) Hazardous locations are Articles 500–516."
    },
    {
      "q": "The Michigan code basis used in this program is:",
      "choices": [
        "The 2020 NEC with no amendments",
        "The 2023 NEC plus Michigan Part 8 amendments adopted March 12, 2024",
        "The 2026 NEC",
        "No code — low voltage is unregulated"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Michigan adopted the 2023 NEC with Part 8 amendments on March 12, 2024. (a) The 2020 NEC is not the adopted edition. (c) The 2026 NEC is not cited in this program. (d) Low-voltage work is regulated and inspected."
    },
    {
      "q": "Before opening any panel or enclosure, the safe sequence is to:",
      "choices": [
        "Open it and look inside first",
        "De-energize, lock out, tag out, and test dead",
        "Wear gloves and work live",
        "Ask a coworker to hold the door"
      ],
      "answer": 1,
      "explanation": "Correct: (b). De-energize, lockout/tagout, and test dead per NFPA 70E. (a) Opening a live panel first exposes you to energized parts. (c) Gloves alone do not make live work safe — this program never instructs live work. (d) A coworker holding the door is not a safety procedure."
    },
    {
      "q": "A Class 3 circuit differs from a Class 2 circuit mainly because it:",
      "choices": [
        "Carries no current at all",
        "May carry higher voltage while still being power-limited",
        "Is always run in conduit",
        "Uses only fiber optic cable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Class 3 circuits are power-limited but may operate at higher voltages than Class 2. (a) All circuits carry current. (c) Conduit is not the defining difference. (d) Class 3 circuits are copper signaling circuits, not fiber."
    },
    {
      "q": "Which cable article covers optical fiber?",
      "choices": [
        "Article 725",
        "Article 760",
        "Article 770",
        "Article 800"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 770 covers optical fiber cable and raceways. (a) Article 725 covers signaling and power-limited circuits. (b) Article 760 covers fire alarms. (d) Article 800 covers communications circuits."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Low-Voltage Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Low-voltage work carries information and signals — data, voice, video, fire alarm, security, access control, nurse call — at low power, but with high consequences when it fails.</p>\n<p><strong>Classes:</strong> Class 1 — not power-limited · Class 2 — power-limited by a listed source · Class 3 — power-limited, higher voltage allowed.</p>\n<p><strong>NEC map:</strong> 725 signaling/power-limited · 760 fire alarm · 770 fiber · 800 communications · 250 grounding and bonding.</p>\n<p><strong>Code basis:</strong> 2023 NEC (NFPA 70) + Michigan Part 8 amendments, adopted March 12, 2024.</p>\n<p><strong>Safety:</strong> Never work live. De-energize, lock out, tag out, test dead, under a licensed supervisor, per NFPA 70E.</p>\n<p><strong>Watch out:</strong> A circuit is Class 2 only if its source is a listed Class 2 supply — a voltage label alone does not make it so.</p>\n<p><strong>Self-check:</strong> Name five low-voltage systems and the NEC article for each, out loud, without looking. If you can, you have this module.</p>\n"
};
