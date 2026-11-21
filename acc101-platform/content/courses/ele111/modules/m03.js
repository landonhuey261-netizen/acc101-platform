module.exports = {
  "number": 3,
  "slug": "pv-modules-arrays-racking",
  "title": "PV Modules, Arrays & Racking",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe how a PV module is built and what its datasheet tells you.",
    "Explain series and parallel connections and how they change voltage and current.",
    "Describe roof-mounted and ground-mounted racking.",
    "Explain firefighter access and setback rules for rooftop arrays.",
    "Describe what to check when receiving and handling modules."
  ],
  "sections": [
    {
      "heading": "Inside a Module: From Cells to a Sealed Panel",
      "html": "<p>A PV module is a sandwich built to survive 25–30 years outdoors. The solar cells are wired together in series, then sealed between a sheet of tempered glass on the front and a backsheet (or a second sheet of glass in bifacial modules) on the back, with an encapsulant layer (usually EVA) bonding it all together. An aluminum frame gives the module its strength and its mounting points, and a junction box on the back holds the bypass diodes and the output cables with their MC4 connectors. The whole assembly is tested at the factory and given a nameplate rating in watts at STC.</p><p>The module's datasheet is the technician's reference. It lists the rated power (Pmax), Voc, Isc, the voltage and current at maximum power (Vmp and Imp), the temperature coefficients, the maximum system voltage, and the maximum series fuse rating. It also lists the mechanical facts: the module's size and weight, the frame, and the mounting points. A technician who cannot read a datasheet cannot size a string, cannot check a fuse, and cannot verify that a module matches the design — so reading a datasheet is a skill this module expects you to practice.</p>"
    },
    {
      "heading": "Series and Parallel: Building a String and an Array",
      "html": "<p>Modules are wired together in <strong>strings</strong> and <strong>arrays</strong>, and the wiring decides the voltage and the current. In a <strong>series</strong> connection, the positive of one module connects to the negative of the next: the voltages add and the current stays the same. Ten 40-volt modules in series make a 400-volt string at the same current as one module. In a <strong>parallel</strong> connection, the positives connect together and the negatives connect together: the currents add and the voltage stays the same. Two 10-amp strings in parallel make 20 amps at the same voltage.</p><p>Most residential systems use series strings: the string voltage is chosen to match the inverter's input window, and the strings are combined in parallel at a combiner box (or at the inverter) to add their currents. The string voltage must be calculated for the coldest expected day, because a cold module makes higher voltage — and if the string's cold-weather voltage exceeds the inverter's maximum input voltage, the inverter can be damaged. That calculation, using the temperature coefficient and the local record low temperature, is a Module 5 skill, but the principle belongs here: series adds voltage, parallel adds current, and the cold day sets the maximum.</p><div class=\"callout\"><strong>Key idea:</strong> Series adds voltage, parallel adds current. A string's voltage must be checked on the coldest day — cold modules make higher voltage, and too much voltage can damage the inverter.</div>"
    },
    {
      "heading": "Racking: Roof-Mounted and Ground-Mounted",
      "html": "<p><strong>Roof-mounted</strong> racking attaches the modules to the roof on rails, with flashing at every roof penetration to keep water out. The racking must hold the modules against wind and snow loads, keep the modules a small distance above the roof for airflow and cooling (the NEC requires an airspace under roof-mounted modules unless the module is listed for direct contact), and leave the pathways firefighters need. The roof itself must be checked before the racking goes on: its age, its condition, and its structure — a roof that needs replacing in five years should be replaced before the array goes on, not after.</p><p><strong>Ground-mounted</strong> racking holds the modules on posts in the ground, which makes the array easier to install, clean, and service, and lets the modules run cooler because air flows freely underneath. Ground mounts need a foundation, a fence or barrier in many jurisdictions, and protection from damage — and they need the same electrical rules as a roof array. The choice between roof and ground is made by the site: a good south-facing roof with a sound structure favors a roof mount, and a shaded roof or a large open lot favors a ground mount.</p>"
    },
    {
      "heading": "Firefighter Access, Setbacks, and Handling",
      "html": "<p>A rooftop array must leave room for firefighters. The International Fire Code requires access pathways on the roof — typically a clear pathway along the ridge and setbacks at the edges — so that firefighters can reach the roof, ventilate it, and work around the array. The exact dimensions are set by the local code and the fire marshal, and the array layout must show them. A layout that covers the whole roof with no pathways will fail the plan review, and it will be redesigned — so the pathways are drawn first, and the array is fitted around them.</p><p>Modules must also be handled correctly. They are glass and aluminum, not lumber: they are carried by the frame, never by the junction box or the cables, they are not walked on, they are not stacked flat without protection, and they are not installed with a cracked or damaged module. A cracked module is removed from service — it can be an electrical and a fire hazard. And remember the safety rule that governs all PV work: modules in sunlight are energized, so handling is done with the connectors open and the work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>A module is cells sealed between glass and backsheet in an aluminum frame, with a junction box holding bypass diodes and MC4 connectors.</li><li>The datasheet lists Pmax, Voc, Isc, Vmp, Imp, temperature coefficients, maximum system voltage, and maximum series fuse rating.</li><li>Series adds voltage; parallel adds current. String voltage is checked on the coldest day.</li><li>Roof mounts need flashing, airflow under the modules, and firefighter pathways; ground mounts need foundations and protection.</li><li>Handle modules by the frame, never walk on them, and never install a cracked module.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing a string from the nameplate voltage without the cold-weather correction. Cold modules make higher voltage — check the string on the coldest day or the inverter can be damaged.</div><div class=\"callout\"><strong>Common mistake:</strong> Covering the whole roof with modules and leaving no firefighter pathways. The pathways are drawn first; the array fits around them.</div><p><strong>Ready-to-Work link:</strong> If you can read a module datasheet, wire a string in series, and explain roof vs ground racking, you have this module. Module 4 covers the device that turns the array's DC into the AC the house uses: the inverter.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Module (panel)",
      "def": "A sealed assembly of solar cells in an aluminum frame, rated in watts."
    },
    {
      "term": "Bifacial module",
      "def": "A module that makes power from light on both its front and its back."
    },
    {
      "term": "Junction box",
      "def": "The box on the back of a module holding the bypass diodes and the output cables."
    },
    {
      "term": "MC4 connector",
      "def": "The standard locking connector on PV module cables."
    },
    {
      "term": "String",
      "def": "Modules wired in series to reach the voltage an inverter needs."
    },
    {
      "term": "Array",
      "def": "All the modules and strings of a PV system together."
    },
    {
      "term": "Vmp / Imp",
      "def": "The voltage and current at a module's maximum power point."
    },
    {
      "term": "Maximum system voltage",
      "def": "The highest voltage a module is listed for, which the string voltage must not exceed."
    },
    {
      "term": "Maximum series fuse rating",
      "def": "The largest fuse allowed in series with a module string, from the datasheet."
    },
    {
      "term": "Combiner box",
      "def": "A box where parallel strings are combined, with overcurrent protection for each string."
    },
    {
      "term": "Racking",
      "def": "The rails, mounts, and hardware that hold modules to a roof or the ground."
    },
    {
      "term": "Flashing",
      "def": "The weatherproofing at a roof penetration that keeps water out."
    },
    {
      "term": "Firefighter access pathway",
      "def": "A clear path on a roof required by the fire code so firefighters can work around an array."
    },
    {
      "term": "Encapsulant",
      "def": "The layer (usually EVA) that bonds the cells between the glass and the backsheet."
    }
  ],
  "video": {
    "title": "Residential Solar PV Installations",
    "embedUrl": "https://www.youtube.com/embed/_BZv5KrXlXU",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How a Solar Panel Is Made, From Sand to Electricity",
        "url": "https://www.youtube.com/watch?v=rr4uxTI3FS8"
      },
      {
        "title": "How Do Solar Panels Work? — TED-Ed",
        "url": "https://www.youtube.com/watch?v=xKxrkht7CpY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A module's datasheet lists Pmax 400 W, Voc 48 V, Isc 10.5 A, Vmp 40 V, Imp 10 A. What is the difference between Voc and Vmp, and between Isc and Imp?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voc (48 V) is the voltage with nothing connected; Vmp (40 V) is the voltage when the module is making its maximum power. Step 2: Isc (10.5 A) is the current with the terminals shorted; Imp (10 A) is the current at maximum power. Step 3: The module never makes Voc and Isc at the same time — maximum power is Vmp × Imp = 40 × 10 = 400 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Eight modules in series, each with Voc 48 V. What is the string's open-circuit voltage? If the inverter's maximum input is 600 V, is the string within limits at STC?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Series adds voltage: 8 × 48 = 384 V. Step 2: 384 V is within the 600 V maximum at STC. Step 3: The string must also be checked on the coldest day, when the voltage will be higher — that check is in Module 5.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Three strings in parallel, each producing 10 A. What is the total current at the combiner box? What stays the same?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel adds current: 3 × 10 = 30 A total. Step 2: The voltage stays the same as one string. Step 3: The combiner box and its overcurrent devices must be sized for 30 A (with the NEC's 125% sizing from Module 5).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A roof is 15 years old and will need replacing in about 5 years. The customer wants solar now. What do you recommend?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend replacing the roof first, or at least the section under the array. Step 2: Removing and reinstalling an array to replace a roof costs far more than doing the roof first. Step 3: If the customer insists, document the recommendation and the future cost in writing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A module arrives with a cracked glass. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not install it. Step 2: Set it aside, label it damaged, and report it for replacement. Step 3: A cracked module can be an electrical and fire hazard — it is not a cosmetic issue.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a rooftop array needs an airspace underneath the modules.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Airflow under the modules cools them. Step 2: Cooler modules make more voltage and more power. Step 3: The NEC requires the airspace unless the module is listed for direct contact with the roof surface.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a series string of modules:",
      "choices": [
        "Currents add and voltage stays the same",
        "Voltages add and current stays the same",
        "Both voltage and current stay the same",
        "Power is lost completely"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series adds voltage; current stays the same. (a) That is a parallel connection. (c) Series changes the voltage. (d) Power is not lost — it is the sum of the modules' power."
    },
    {
      "q": "In a parallel connection of strings:",
      "choices": [
        "Voltages add and current stays the same",
        "Currents add and voltage stays the same",
        "Both add together",
        "Nothing changes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel adds current; voltage stays the same. (a) That is a series connection. (c) Only current adds in parallel. (d) The current changes."
    },
    {
      "q": "Vmp is:",
      "choices": [
        "The voltage with nothing connected",
        "The voltage at the module's maximum power point",
        "The voltage of the battery",
        "The voltage of the grid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vmp is the voltage at maximum power. (a) That is Voc. (c) Battery voltage is a separate system value. (d) Grid voltage is the utility's AC voltage."
    },
    {
      "q": "The junction box on a module holds:",
      "choices": [
        "The inverter",
        "The bypass diodes and the output cables",
        "The battery",
        "The roof flashing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The junction box holds the bypass diodes and the module's output cables. (a) The inverter is a separate device. (c) The battery is part of a storage system. (d) Flashing is the roof weatherproofing."
    },
    {
      "q": "A rooftop array needs firefighter access pathways because:",
      "choices": [
        "They look neat",
        "Firefighters need to reach the roof, ventilate it, and work around the array",
        "They make the array produce more power",
        "The panels need the space to cool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fire code requires pathways so firefighters can work on the roof. (a) Neatness is not the reason. (c) Pathways do not increase production. (d) Cooling is the airspace under the modules, not the pathways."
    },
    {
      "q": "A cracked PV module should be:",
      "choices": [
        "Installed anyway — glass is cosmetic",
        "Removed from service and replaced",
        "Covered with tape and installed",
        "Installed on the ground only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A cracked module is an electrical and fire hazard and must not be installed. (a) Cracked glass is not cosmetic. (c) Tape does not repair a cracked module. (d) A cracked module is not safe on the ground either."
    },
    {
      "q": "Ground-mounted racking is often preferred when:",
      "choices": [
        "The roof is shaded or the lot is large and open",
        "The roof is brand new",
        "The customer wants the cheapest possible install",
        "The array is small"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A shaded roof or an open lot favors a ground mount. (b) A new roof favors a roof mount. (c) Ground mounts are often more expensive, not cheaper. (d) Array size alone does not decide the mounting."
    },
    {
      "q": "String voltage must be checked on the coldest day because:",
      "choices": [
        "Cold modules make higher voltage, which could exceed the inverter's maximum",
        "Cold modules make no voltage",
        "The inverter works better cold",
        "Snow covers the panels"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Cold increases voltage — the string's maximum voltage occurs on the coldest day. (b) Cold modules still make voltage, and more of it. (c) Inverter performance is not the reason. (d) Snow is a production issue, not a voltage calculation issue."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — PV Modules, Arrays & Racking: Quick Reference</h3>\n<p><strong>Core idea:</strong> A module is cells sealed between glass and backsheet in an aluminum frame, with a junction box holding bypass diodes and MC4 connectors. Read the datasheet — it is the reference for everything.</p>\n<p><strong>Wiring:</strong> Series adds voltage · Parallel adds current. Check string voltage on the coldest day — cold modules make higher voltage.</p>\n<p><strong>Datasheet:</strong> Pmax, Voc, Isc, Vmp, Imp, temperature coefficients, maximum system voltage, maximum series fuse rating.</p>\n<p><strong>Racking:</strong> Roof mounts need flashing, airflow underneath, and firefighter pathways. Ground mounts need foundations and protection.</p>\n<p><strong>Handling:</strong> Carry by the frame, never walk on modules, never install a cracked module.</p>\n<p><strong>Self-check:</strong> Wire a 10-module string in series from a datasheet and state its Voc. If you can, you have this module.</p>\n"
};
