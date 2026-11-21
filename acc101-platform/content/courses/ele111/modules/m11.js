module.exports = {
  "number": 11,
  "slug": "commissioning-monitoring-maintenance",
  "title": "Commissioning, Monitoring & Maintenance",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the commissioning steps for a new PV system.",
    "Explain the electrical tests performed at commissioning.",
    "Describe how monitoring works and what it shows.",
    "Describe a maintenance schedule for a PV system.",
    "Troubleshoot common PV faults: low production, inverter faults, and ground faults."
  ],
  "sections": [
    {
      "heading": "Commissioning: Proving the System Works",
      "html": "<p><strong>Commissioning</strong> is the process of proving a new PV system works as designed before it is handed over. It starts with a visual inspection: the racking, the flashing, the wiring, the disconnects, the labels, and the grounding are all checked against the plans. Then the electrical tests are run: the open-circuit voltage and short-circuit current of each string are measured and compared with the expected values from the datasheet and the design; the insulation resistance of the circuits is tested; the grounding continuity is verified; and the inverter is started and its output is checked against the expected production for the conditions.</p><p>Commissioning also includes the safety tests: rapid shutdown is initiated and the conductor voltages are measured to confirm they drop to the required levels within 30 seconds; the disconnects are operated to confirm they isolate the system; and the anti-islanding function is verified so the inverter shuts down when the grid is lost. Every test is documented on a commissioning report, and the system is not handed over until every test passes. A system that is not commissioned is a system nobody has proven — and the first person to discover a fault will be the customer, on a day when the system should have been making power.</p>"
    },
    {
      "heading": "Monitoring: Watching the System Every Day",
      "html": "<p>Modern PV systems are monitored continuously through the inverter's portal or app: the customer and the installer can see the system's production in real time, by the day, the month, and the year, and can compare it with what the system should be making. Monitoring shows the production of each string or each module (with microinverters or optimizers), the inverter's status, and any faults — and it sends an alert when production drops or a fault appears. That alert is the difference between a fault found in a day and a fault found in a year, when the customer notices the electric bill has gone back up.</p><p>The technician's job in monitoring is to set it up correctly at commissioning — the system registered, the customer shown how to read it, the alerts configured — and to use it as a troubleshooting tool. A string that produces less than its neighbors, a module that produces nothing, an inverter that reports a fault code: the monitoring portal shows all of it, and the technician reads it before going to the site, so the visit is planned instead of a guess. A system that is not monitored is a system that fails silently.</p><div class=\"callout\"><strong>Key idea:</strong> Monitoring turns a silent failure into an alert. Set it up at commissioning, show the customer how to read it, and check it before every service visit.</div>"
    },
    {
      "heading": "Maintenance: Keeping the System Making Power",
      "html": "<p>A PV system needs little maintenance, but it needs some, on a schedule. The modules should be inspected for damage, cracking, and soiling — dirt, pollen, and bird droppings reduce production, and in most of Michigan the rain cleans the modules well enough that washing is rarely needed, but a visual check is part of every visit. The racking and flashing should be inspected for loosening and for water entry. The electrical connections should be checked for heat damage and tightness, the inverter's filters and fans cleaned, and the battery system (if any) checked for its state of health and its connections.</p><p>The maintenance schedule is written down and followed: a visual inspection and a production check at least annually, a full electrical test every few years, and a battery check on the manufacturer's schedule. The maintenance visit is also a chance to check the monitoring — is it still reporting, are the alerts still configured, does the customer still know how to read it? A system that is maintained is a system that makes its expected power for 25 years; a system that is ignored is a system that slowly stops making power and nobody notices.</p>"
    },
    {
      "heading": "Troubleshooting: The Common Faults",
      "html": "<p>Most PV faults fall into a few categories. <strong>Low production</strong> is the most common complaint: the system makes less than expected. The causes, in order of likelihood, are shading that was not in the design, soiling on the modules, a string that is down (a blown fuse, an open connector, a failed optimizer), or an inverter that is clipping or derating from heat. The technician checks the monitoring first, then the string voltages and currents, then the physical array — and the fault is usually found in that order.</p><p><strong>Inverter faults</strong> show as fault codes on the inverter's display or portal: a grid fault (the inverter sees a grid problem and shuts down), an isolation fault (a ground fault in the DC wiring), or an over-temperature fault. The fault code is the starting point, not the answer — the technician reads the code, checks the manual, and tests the circuit the code points to. <strong>Ground faults</strong> in the DC wiring are the most serious: a damaged conductor touching a grounded frame can cause a fire, and the inverter's ground-fault protection will shut the system down. A ground fault is found by isolating strings one at a time and measuring insulation resistance, and it is repaired by replacing the damaged conductor — never by bypassing the protection. And the safety rule applies to every fault: the system is de-energized, locked out and tagged out, and tested dead before any hands go into a combiner box or an inverter, under a licensed supervisor, per NFPA 70E.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Commissioning proves the system: visual inspection, string Voc and Isc tests, insulation and grounding tests, rapid shutdown and anti-islanding verification, documented on a commissioning report.</li><li>Monitoring shows production and faults in real time and sends alerts — set it up at commissioning and teach the customer to read it.</li><li>Maintenance is a schedule: annual visual and production checks, periodic electrical tests, battery checks on the manufacturer's schedule.</li><li>Low production is usually shading, soiling, a string down, or inverter heat derating. Inverter fault codes are the starting point, not the answer.</li><li>Ground faults are found by isolating strings and measuring insulation resistance — never by bypassing the protection.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Handing over a system without setting up monitoring or teaching the customer to read it. The first fault will then be found a year later, on the electric bill.</div><div class=\"callout\"><strong>Common mistake:</strong> Bypassing ground-fault protection to get a system running. A ground fault is a fire risk — find it, fix the damaged conductor, and restore the protection.</div><p><strong>Ready-to-Work link:</strong> If you can describe commissioning, explain monitoring, outline a maintenance schedule, and troubleshoot low production, you have this module. Module 12 closes the course with NABCEP PV Associate exam review.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Commissioning",
      "def": "The process of proving a new PV system works as designed, with tests documented on a commissioning report."
    },
    {
      "term": "Commissioning report",
      "def": "The documented record of a system's commissioning tests and results."
    },
    {
      "term": "Monitoring portal",
      "def": "The inverter's online portal or app showing a system's production and faults in real time."
    },
    {
      "term": "Insulation resistance test",
      "def": "A test measuring the insulation of PV circuits to find damaged conductors and ground faults."
    },
    {
      "term": "String Voc / Isc test",
      "def": "Measuring a string's open-circuit voltage and short-circuit current at commissioning and comparing with the design."
    },
    {
      "term": "Ground fault (PV)",
      "def": "An unintended path from a PV circuit to ground, which the inverter's protection detects and shuts down on."
    },
    {
      "term": "Isolation fault",
      "def": "An inverter fault code reporting a ground fault in the DC wiring."
    },
    {
      "term": "Derating",
      "def": "An inverter reducing its output because of heat or another limit."
    },
    {
      "term": "Soiling",
      "def": "Dirt, pollen, and bird droppings on modules that reduce production."
    },
    {
      "term": "State of health",
      "def": "How much of its original capacity a battery still holds."
    },
    {
      "term": "Fault code",
      "def": "A code an inverter displays or reports identifying a fault condition."
    },
    {
      "term": "Production check",
      "def": "Comparing a system's actual production with its expected production for the conditions."
    }
  ],
  "video": {
    "title": "Commercial Solar Installation Masterclass BEST OF - Learn every step of renewable installations",
    "embedUrl": "https://www.youtube.com/embed/lsrQNZwWtGg",
    "note": "This masterclass follows a commercial solar and battery install from the first day on site through final testing and commissioning. As you watch, focus on the testing and commissioning segment — the safety checks, polarity and voltage tests, and monitoring setup that prove the system is ready to hand over.",
    "more": [
      {
        "title": "How to Test Fiber Optic Cable Using an OTDR",
        "url": "https://www.youtube.com/watch?v=fsIrKGci_gU"
      },
      {
        "title": "What Components Do You Need for Net Metering?",
        "url": "https://www.youtube.com/watch?v=sbT2FL2QOLQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A new system is ready for commissioning. List the tests in order, from visual inspection to handover.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Visual inspection — racking, flashing, wiring, disconnects, labels, grounding against the plans. Step 2: String Voc and Isc tests, compared with the design. Step 3: Insulation resistance and grounding continuity tests. Step 4: Rapid shutdown and anti-islanding verification. Step 5: Inverter start-up and production check. Step 6: Document everything on the commissioning report and hand over.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A system's monitoring shows one string producing half as much as the others. What is your troubleshooting order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the monitoring for the string's history — when did it drop? Step 2: Measure the string's Voc and Isc and compare with the design and with the other strings. Step 3: Inspect the string physically — shading, soiling, a blown fuse, an open connector, a failed optimizer. Step 4: Fix, re-test, and confirm the production recovers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An inverter reports an isolation fault and shuts down. What does that mean, and how do you find the cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An isolation fault means a ground fault in the DC wiring — a conductor touching a grounded frame. Step 2: Isolate the strings one at a time and measure insulation resistance to find the faulty string. Step 3: Find and replace the damaged conductor, then restore the protection and re-test. Never bypass the ground-fault protection.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A customer says their system \"makes less power than it used to.\" The monitoring shows a slow decline over two years. What are the three most likely causes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Soiling — dirt and pollen building up on the modules. Step 2: Shading — a tree that has grown since the system was installed. Step 3: A string or module that has degraded or failed. (Check the monitoring per string, inspect the array, and compare with the expected production.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is monitoring set up at commissioning rather than later, and what must the customer be shown?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Monitoring set up at commissioning means the system is watched from its first day — a fault is found in a day, not a year. Step 2: The customer must be shown how to read production, how to spot a problem, and who to call. Step 3: The alerts must be configured so a fault reaches someone, not just a dashboard nobody opens.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An inverter keeps derating on hot afternoons. What is the likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inverter is overheating — it reduces its output to protect itself. Step 2: Check the mounting: is it in direct sun, is the ventilation blocked, are the filters and fans clean? Step 3: Move it to shade, clear the ventilation, clean the filters, and confirm the derating is gone.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Commissioning is:",
      "choices": [
        "Selling the system",
        "Proving a new system works as designed, with documented tests",
        "Cleaning the modules",
        "Installing the meter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Commissioning is the documented proof that the system works. (a) Selling happens before installation. (c) Cleaning is maintenance. (d) The meter is the utility's work."
    },
    {
      "q": "At commissioning, a string's Voc and Isc are measured to:",
      "choices": [
        "Check the weather",
        "Compare them with the design values and find a wiring or module fault",
        "Charge the battery",
        "Set the tilt"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voc and Isc are compared with the expected values to find faults. (a) Weather is not measured this way. (c) Charging is the battery system's job. (d) Tilt is set by the racking."
    },
    {
      "q": "Monitoring is valuable because it:",
      "choices": [
        "Makes the system produce more power",
        "Turns a silent failure into an alert, so a fault is found in a day instead of a year",
        "Replaces the inverter",
        "Cleans the modules"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Monitoring reports production and faults in real time. (a) Monitoring does not increase production. (c) It does not replace the inverter. (d) It does not clean modules."
    },
    {
      "q": "The most likely causes of low production, in order, are:",
      "choices": [
        "A broken inverter, then a fallen tree, then a hailstorm",
        "Shading, soiling, a string down, or inverter heat derating",
        "The wrong color modules, then a dirty roof",
        "A missing label, then a bad wire map"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shading, soiling, a string down, and heat derating are the common causes. (a) Those are rarer and more dramatic. (c) Module color does not affect production. (d) Labels and wire maps are data and fire alarm matters, not PV production."
    },
    {
      "q": "An isolation fault on an inverter means:",
      "choices": [
        "The inverter is too hot",
        "A ground fault in the DC wiring",
        "The grid is down",
        "The monitoring is offline"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An isolation fault reports a ground fault in the DC wiring. (a) Over-temperature is a different fault. (c) A grid fault is a different code. (d) Monitoring being offline is not an inverter fault code."
    },
    {
      "q": "A ground fault in PV wiring must be fixed by:",
      "choices": [
        "Bypassing the ground-fault protection",
        "Finding and replacing the damaged conductor, then restoring the protection",
        "Ignoring it",
        "Turning the inverter off forever"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Find the damaged conductor, replace it, restore the protection. (a) Bypassing protection is a fire risk. (c) Ignoring a ground fault is dangerous. (d) Turning the inverter off forever is not a repair."
    },
    {
      "q": "A PV maintenance schedule includes:",
      "choices": [
        "Nothing — PV systems need no maintenance",
        "Annual visual and production checks, periodic electrical tests, and battery checks on the manufacturer's schedule",
        "Daily washing of the modules",
        "Replacing the modules every year"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PV systems need scheduled inspection and testing. (a) They need maintenance, just not much. (c) Daily washing is unnecessary — rain usually suffices. (d) Modules last 25–30 years."
    },
    {
      "q": "Rapid shutdown is verified at commissioning by:",
      "choices": [
        "Looking at the labels",
        "Initiating rapid shutdown and measuring conductor voltages to confirm they drop to the required levels within 30 seconds",
        "Turning off the sun",
        "Asking the customer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rapid shutdown is proven by test — initiate it and measure the voltages. (a) Labels alone do not prove it works. (c) The sun cannot be turned off. (d) The customer cannot verify rapid shutdown."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Commissioning, Monitoring & Maintenance: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commissioning proves the system, monitoring watches it every day, and maintenance keeps it making power for 25 years.</p>\n<p><strong>Commissioning:</strong> Visual inspection · string Voc/Isc vs design · insulation & grounding tests · rapid shutdown & anti-islanding verification · documented on a commissioning report.</p>\n<p><strong>Monitoring:</strong> Production and faults in real time, with alerts. Set it up at commissioning; teach the customer to read it.</p>\n<p><strong>Maintenance:</strong> Annual visual & production checks, periodic electrical tests, battery checks on schedule. Rain usually cleans modules.</p>\n<p><strong>Faults:</strong> Low production — shading, soiling, string down, heat derating · Isolation fault — ground fault in DC wiring, find by isolating strings, never bypass protection.</p>\n<p><strong>Self-check:</strong> List the commissioning tests in order and troubleshoot a string at half production. If you can, you have this module.</p>\n"
};
