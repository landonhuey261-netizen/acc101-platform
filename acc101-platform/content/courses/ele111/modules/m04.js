module.exports = {
  "number": 4,
  "slug": "inverters-string-micro-hybrid",
  "title": "Inverters: String, Micro & Hybrid",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an inverter does and why a PV system needs one.",
    "Compare string, microinverter, and hybrid inverters.",
    "Explain maximum power point tracking (MPPT).",
    "Explain inverter sizing: DC-to-AC ratio and clipping.",
    "Describe rapid shutdown and how inverters provide it."
  ],
  "sections": [
    {
      "heading": "What an Inverter Does",
      "html": "<p>A PV array makes direct current (DC) — current that flows in one direction at a voltage set by the modules. A house and the utility grid use alternating current (AC) — current that reverses direction 60 times a second at 120/240 volts. The <strong>inverter</strong> is the device that converts the array's DC into the grid's AC, and it does far more than just convert: it tracks the array's maximum power point, synchronizes with the grid's voltage and frequency, watches for grid faults, and shuts down when the grid goes down.</p><p>The inverter is the most complex electronic device in a PV system, and it is the one most likely to be replaced during the system's life — a typical string inverter lasts 10–15 years, while the modules last 25–30. That is why the inverter's location matters: it should be accessible, shaded from direct sun, ventilated, and protected from weather. An inverter baking in direct sun on a south wall will run hot, make less power, and fail sooner than one mounted in the shade.</p>"
    },
    {
      "heading": "String Inverters: One Inverter for the Whole Array",
      "html": "<p>A <strong>string inverter</strong> takes the DC from one or more strings and converts it to AC in a single box, usually mounted on the wall near the service panel. String inverters are the most common and the least expensive per watt, and they are simple to service — one box to check, one box to replace. Their weakness is that the whole string shares one maximum power point: if one module in the string is shaded, dirty, or facing a different direction, the entire string's output drops to the level of its weakest module.</p><p>That weakness is managed in two ways. First, the array is laid out so that each string faces the same direction and has the same shading — no mixing a shaded string with an unshaded one. Second, <strong>power optimizers</strong> can be added: a small DC-to-DC converter on the back of each module that lets each module run at its own maximum power point while the string inverter still does the DC-to-AC conversion. Optimizers add cost but recover the lost production on a partially shaded or multi-direction roof, and they also provide module-level rapid shutdown.</p>"
    },
    {
      "heading": "Microinverters: One Inverter per Module",
      "html": "<p>A <strong>microinverter</strong> is a small inverter mounted under each module, converting that module's DC to AC right on the roof. Each module runs at its own maximum power point, so shading on one module affects only that module — the rest of the array keeps producing at full power. Microinverters also make the system easy to expand: add a module and a microinverter, and the system grows by one module. And because the roof wiring is AC at 240 volts instead of high-voltage DC, the DC arc-fault and rapid-shutdown concerns of a string system are greatly reduced.</p><p>The trade-offs are cost and access: microinverters cost more per watt than a string inverter, and replacing one means going up on the roof. They also put electronics on the roof, in the heat, which is a harsher environment than a wall-mounted box. The choice between string and microinverters comes down to the roof: a simple, unshaded, single-direction roof favors a string inverter; a complex roof with multiple directions, chimneys, and trees favors microinverters or optimizers.</p><div class=\"callout\"><strong>Key idea:</strong> String = one inverter for the array, cheapest, but one shaded module drags the whole string down. Micro = one inverter per module, each module independent, but more cost and roof work to service.</div>"
    },
    {
      "heading": "Hybrid Inverters, MPPT, and Clipping",
      "html": "<p>A <strong>hybrid inverter</strong> does the string inverter's job plus battery management: it converts the array's DC to AC, charges and discharges the battery, and manages the flow between the array, the battery, the house, and the grid. Hybrid inverters are the heart of a hybrid system, and they are sized for both the array and the battery — the technician must check both ratings, not just the AC output.</p><p>Every modern inverter uses <strong>maximum power point tracking (MPPT)</strong>: it continuously adjusts the voltage it draws from the array to find the point where voltage times current is greatest. The array's maximum power point moves with sunlight and temperature, so the inverter hunts for it many times a second. A string inverter may have one, two, or three MPPT inputs, and each input should have strings that face the same direction — strings on different roof faces belong on different MPPT inputs. Finally, <strong>clipping</strong> happens when the array can make more DC power than the inverter can convert: the inverter caps its output at its AC rating and the extra power is lost. A DC-to-AC ratio of 1.1 to 1.3 is common — a little clipping on the sunniest hours is cheaper than buying a bigger inverter.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>An inverter converts the array's DC to the grid's AC, tracks the maximum power point, synchronizes with the grid, and shuts down on grid loss.</li><li>String inverters are cheapest per watt but share one MPPT per string; optimizers fix the shading weakness.</li><li>Microinverters give each module its own MPPT and AC output on the roof, at higher cost per watt.</li><li>Hybrid inverters add battery management and backup power to the string inverter's job.</li><li>MPPT finds the array's maximum power point continuously; clipping is the inverter capping output at its AC rating.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Putting strings from different roof directions on the same MPPT input. Each MPPT input should have strings that face the same direction — different directions need different inputs or microinverters.</div><div class=\"callout\"><strong>Common mistake:</strong> Mounting a string inverter in direct sun on a south wall. Heat cuts its output and shortens its life — mount it shaded, ventilated, and accessible.</div><p><strong>Ready-to-Work link:</strong> If you can compare string, micro, and hybrid inverters, explain MPPT, and explain clipping, you have this module. Module 5 covers the code that governs all of it: NEC Article 690.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Inverter",
      "def": "The device that converts a PV array's DC into AC for the house and the grid."
    },
    {
      "term": "String inverter",
      "def": "A single inverter converting the DC from one or more strings to AC."
    },
    {
      "term": "Microinverter",
      "def": "A small inverter mounted under each module, converting that module's DC to AC on the roof."
    },
    {
      "term": "Hybrid inverter",
      "def": "An inverter that converts DC to AC and manages battery charging, discharging, and backup power."
    },
    {
      "term": "Power optimizer",
      "def": "A DC-to-DC converter on a module that lets it run at its own maximum power point in a string system."
    },
    {
      "term": "Maximum power point tracking (MPPT)",
      "def": "The inverter's continuous adjustment of the voltage it draws from the array to find the greatest power output."
    },
    {
      "term": "Clipping",
      "def": "Lost production when the array can make more DC power than the inverter can convert to AC."
    },
    {
      "term": "DC-to-AC ratio",
      "def": "The array's DC rating divided by the inverter's AC rating, commonly 1.1 to 1.3."
    },
    {
      "term": "Rapid shutdown",
      "def": "The NEC requirement that PV conductors de-energize to safe levels within 30 seconds of shutdown."
    },
    {
      "term": "Anti-islanding",
      "def": "The requirement that a grid-tied inverter shut down when the grid goes down."
    },
    {
      "term": "AC coupling",
      "def": "Connecting a battery system to a PV system on the AC side, through a separate battery inverter."
    },
    {
      "term": "DC coupling",
      "def": "Connecting a battery system to a PV system on the DC side, sharing the inverter."
    }
  ],
  "video": {
    "title": "Solar Inverters Explained: Types, Repairs and Wiring",
    "embedUrl": "https://www.youtube.com/embed/ICmVahjz_lI",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Choosing a Solar Inverter: Hybrid vs Microinverter",
        "url": "https://www.youtube.com/watch?v=OzvSJsUzE_k"
      },
      {
        "title": "Solar Inverters: Types, Benefits, and How They Work",
        "url": "https://www.youtube.com/watch?v=ip4ECSkSGgY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A roof has two faces: south and west, with a chimney shading part of the west face. Which inverter approach do you recommend — string, string with optimizers, or microinverters — and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend microinverters, or a string inverter with optimizers. Step 2: The two faces need separate MPPT treatment, and the chimney shading would drag a plain string down. Step 3: Microinverters give each module its own MPPT, so the shaded modules affect only themselves; optimizers do the same job in a string system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An array is rated 8,000 W DC and the inverter is rated 6,000 W AC. What is the DC-to-AC ratio, and will the system clip?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 8,000 ÷ 6,000 = 1.33. Step 2: Yes, the system will clip on the sunniest hours, when the array can make more than 6,000 W AC. Step 3: A ratio of 1.33 is at the high end of common practice — some clipping is expected and is usually cheaper than a bigger inverter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain MPPT in two sentences a homeowner could understand.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A solar array makes its most power at one particular voltage, and that voltage moves as the sun and temperature change. Step 2: MPPT is the inverter constantly adjusting to find that best voltage, many times a second, so the array always makes as much power as it can.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A string inverter has two MPPT inputs. The array has a south string and an east string. How should they be connected, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Put the south string on one MPPT input and the east string on the other. Step 2: Strings facing different directions have different maximum power points at different times of day. Step 3: Sharing one input would force both strings to the same point, and one of them would lose production.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A customer wants to add batteries to an existing grid-tied system with a string inverter. What are the two coupling options?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: AC coupling — add a separate battery inverter on the AC side; the existing string inverter stays as it is. Step 2: DC coupling — replace the string inverter with a hybrid inverter and connect the batteries on the DC side. Step 3: AC coupling is usually simpler as a retrofit; DC coupling is usually more efficient on a new system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A string inverter is mounted in direct sun on a south-facing wall and keeps shutting down on hot afternoons. What is the likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inverter is overheating — heat cuts its output and can trigger a thermal shutdown. Step 2: Move it to a shaded, ventilated location, or add a shade structure with airflow. Step 3: Check that the ventilation clearances the manufacturer requires are kept, and confirm the derating is gone after the move.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An inverter's main job is to:",
      "choices": [
        "Store electricity in a battery",
        "Convert the array's DC into AC for the house and grid",
        "Mount the modules on the roof",
        "Measure sunlight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The inverter converts DC to AC. (a) Storage is the battery's job. (c) Mounting is the racking's job. (d) Measuring sunlight is a sensor's job."
    },
    {
      "q": "A string inverter's main weakness is that:",
      "choices": [
        "It is too expensive",
        "One shaded module can drag down the whole string's output",
        "It has no MPPT",
        "It cannot connect to the grid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A string shares one maximum power point, so the weakest module limits the string. (a) String inverters are the cheapest per watt. (c) String inverters have MPPT. (d) String inverters connect to the grid."
    },
    {
      "q": "Microinverters help on a shaded roof because:",
      "choices": [
        "They are cheaper",
        "Each module has its own MPPT, so shading on one module affects only that module",
        "They need no wiring",
        "They work at night"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each module is independent with its own inverter. (a) Microinverters cost more per watt. (c) They need AC wiring. (d) No inverter works at night without a battery."
    },
    {
      "q": "MPPT stands for:",
      "choices": [
        "Maximum power point tracking",
        "Minimum power protection test",
        "Maximum panel placement tool",
        "Meter power point test"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Maximum power point tracking — the inverter continuously finds the array's best voltage. (b), (c), and (d) are not real terms."
    },
    {
      "q": "Clipping happens when:",
      "choices": [
        "The array is too small",
        "The array can make more DC power than the inverter can convert to AC",
        "A wire is cut",
        "The sun sets"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clipping is the inverter capping output at its AC rating. (a) A small array never clips. (c) A cut wire is a fault, not clipping. (d) At sunset there is no power to clip."
    },
    {
      "q": "A hybrid inverter differs from a string inverter because it:",
      "choices": [
        "Has no MPPT",
        "Manages batteries and backup power as well as converting DC to AC",
        "Is mounted on the roof",
        "Uses no AC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A hybrid inverter adds battery management and backup power. (a) It has MPPT. (c) It is usually wall-mounted like a string inverter. (d) It produces AC."
    },
    {
      "q": "Power optimizers are used to:",
      "choices": [
        "Replace the inverter",
        "Let each module in a string run at its own maximum power point",
        "Charge the battery",
        "Measure the roof"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Optimizers give each module its own MPPT in a string system. (a) The string inverter still does the DC-to-AC conversion. (c) Charging is the charge controller's or hybrid inverter's job. (d) Optimizers do not measure the roof."
    },
    {
      "q": "Strings facing different roof directions should be:",
      "choices": [
        "On the same MPPT input",
        "On separate MPPT inputs, or on microinverters",
        "Wired in parallel without an inverter",
        "Left disconnected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Different directions have different maximum power points and need separate MPPT treatment. (a) Sharing one input forces both to the same point and loses production. (c) All strings need an inverter. (d) Leaving them disconnected wastes the array."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Inverters: Quick Reference</h3>\n<p><strong>Core idea:</strong> The inverter converts the array's DC to the grid's AC, tracks the maximum power point, synchronizes with the grid, and shuts down on grid loss.</p>\n<p><strong>String:</strong> One inverter for the array, cheapest per watt, but one shaded module drags the whole string down. Optimizers fix that. <strong>Micro:</strong> One inverter per module, each independent, higher cost, roof service. <strong>Hybrid:</strong> String inverter + battery management + backup power.</p>\n<p><strong>MPPT:</strong> The inverter continuously finds the array's maximum power point. Each MPPT input should have strings facing the same direction.</p>\n<p><strong>Clipping:</strong> The inverter caps output at its AC rating. DC-to-AC ratio commonly 1.1–1.3.</p>\n<p><strong>Self-check:</strong> Pick the inverter type for a simple unshaded roof and for a complex shaded roof, and explain why. If you can, you have this module.</p>\n"
};
