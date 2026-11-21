module.exports = {
  "number": 10,
  "slug": "net-metering-interconnection-permits",
  "title": "Net Metering, Interconnection & Permits",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain net metering and how it differs from net billing.",
    "Describe the utility interconnection process step by step.",
    "Describe the permit process: building, electrical, and utility approvals.",
    "Explain what happens at the meter: bi-directional metering and export.",
    "Explain the technician's role in the paperwork and the inspections."
  ],
  "sections": [
    {
      "heading": "Net Metering: The Grid as a Battery (on Paper)",
      "html": "<p><strong>Net metering</strong> (net energy metering, or NEM) is a billing arrangement in which the utility credits a customer for the electricity their PV system exports to the grid. When the array makes more than the house is using, the extra flows out to the grid and the meter records the export; when the house uses more than the array makes, the house draws from the grid and the meter records the import. At the end of the billing period, the customer is charged only for the net difference — the imports minus the exports. In effect, the grid acts as a battery on paper: the customer banks daytime production and draws it back at night.</p><p>Net metering is not the only arrangement. In <strong>net billing</strong>, exports are credited at a lower rate than the retail rate the customer pays for imports — often the utility's avoided cost, which is much less than the retail price. In a <strong>buy-all/sell-all</strong> arrangement, the customer sells all of the array's production to the utility and buys all of their consumption back. The arrangement in force depends on the utility and the state, and it changes over time — California's move from NEM 2.0 to NEM 3.0 is the best-known example. The technician must know which arrangement applies to the job in front of them, because it changes the economics of the system and the customer's expectations — and the technician must never promise a rate or a credit the utility has not agreed to.</p>"
    },
    {
      "heading": "The Interconnection Process, Step by Step",
      "html": "<p>The utility interconnection process has a fixed order, and the technician must know where the job is in it. <strong>Step 1</strong> is the application: the installer submits the system size, the equipment listings, the one-line diagram, and the site information to the utility. <strong>Step 2</strong> is the utility's review: the utility checks that the system can connect safely to its grid, and issues an approval to install (or asks for changes). <strong>Step 3</strong> is the installation and the electrical inspection by the authority having jurisdiction. <strong>Step 4</strong> is the utility's permission to operate (PTO): the utility verifies the installation, installs or programs the bi-directional meter, and gives written permission for the system to export power.</p><p>The system must not export before Step 4. Running a system before permission to operate violates the interconnection agreement, and it can be dangerous: a system exporting into a grid that the utility does not know about can energize a line the utility believes is dead. The technician's job is to know the process, to keep the paperwork in order, and to tell the customer plainly that the system will be switched on only when the utility says so — and that the wait is normal, not a failure.</p><div class=\"callout\"><strong>Key idea:</strong> Application → approval to install → installation and inspection → permission to operate. Never export before PTO — the utility must know the system is there before it feeds the grid.</div>"
    },
    {
      "heading": "Permits: Building, Electrical, and Utility",
      "html": "<p>A PV system needs more than one approval. The <strong>building permit</strong> covers the structure: the racking, the roof penetrations, the wind and snow loads, and the firefighter access pathways. The <strong>electrical permit</strong> covers the wiring: the circuits, the disconnects, the grounding, and the interconnection, inspected against the 2023 NEC and the Michigan Part 8 amendments. And the <strong>utility interconnection</strong> covers the connection to the grid, as described above. In some jurisdictions a zoning or historic-district approval is also needed, and in Detroit the licensing and permitting rules are the city's own — the learner must check Detroit's own requirements.</p><p>The permit process is the technician's paperwork discipline: the plans must show the array layout, the stringing, the conductor sizes, the overcurrent devices, the disconnects, the labeling, and the interconnection method, and the plans must match what is installed. An inspector who finds a system that does not match its plans will fail it, and the fix is to change the system or change the plans — both cost time and money. The habit of building to the plans, and of updating the plans when the field forces a change, is what makes a permit process smooth instead of a series of failed inspections.</p>"
    },
    {
      "heading": "The Meter, the Export, and the Customer's Bill",
      "html": "<p>At the meter, the interconnection is simple to describe and important to understand. A <strong>bi-directional meter</strong> records electricity flowing in both directions: imports from the grid and exports to the grid. The inverter's anti-islanding protection ensures the system stops exporting the moment the grid goes down, so the meter never sees export into a dead grid. The customer's bill then reflects the net metering or net billing arrangement in force: under net metering, exports offset imports at or near the retail rate; under net billing, exports are credited at a lower rate, which makes self-consumption — using the solar power in the house as it is made — more valuable, and which is one reason customers add batteries.</p><p>The technician's role at the meter is limited and clear: the meter is the utility's equipment, and only the utility touches it. The technician's work ends at the service equipment and the disconnects, and the technician never opens, bypasses, or tampers with a meter. If the meter is not recording correctly, the technician reports it to the utility. That boundary — the utility's equipment is the utility's — is a professional rule as well as a legal one.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Net metering credits exports at or near the retail rate; net billing credits them at a lower rate; buy-all/sell-all sells all production and buys all consumption back.</li><li>The interconnection process is: application, approval to install, installation and inspection, permission to operate — never export before PTO.</li><li>A PV system needs a building permit, an electrical permit, and utility interconnection — and in Detroit, the city's own requirements must be checked.</li><li>The bi-directional meter records imports and exports; the meter is the utility's equipment and only the utility touches it.</li><li>Plans must match what is installed, or the inspection fails.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Promising a customer a net-metering credit the utility has not agreed to. The arrangement depends on the utility and the state and it changes — check what applies to this job, and say only what the utility has confirmed.</div><div class=\"callout\"><strong>Common mistake:</strong> Energizing a system before permission to operate. The wait is normal, and exporting early is a violation and a hazard to utility workers.</div><p><strong>Ready-to-Work link:</strong> If you can explain net metering vs net billing, walk through the interconnection process, and name the three permits, you have this module. Module 11 covers what happens after the switch is thrown: commissioning, monitoring, and maintenance.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Net metering (NEM)",
      "def": "A billing arrangement crediting a customer for exported electricity at or near the retail rate."
    },
    {
      "term": "Net billing",
      "def": "A billing arrangement crediting exports at a lower rate than the retail rate for imports."
    },
    {
      "term": "Buy-all/sell-all",
      "def": "An arrangement in which the customer sells all production to the utility and buys all consumption back."
    },
    {
      "term": "Interconnection",
      "def": "The process of connecting a PV system to the utility grid, with the utility's approval."
    },
    {
      "term": "Permission to operate (PTO)",
      "def": "The utility's approval for a PV system to export power to the grid."
    },
    {
      "term": "Bi-directional meter",
      "def": "A utility meter recording both imported and exported electricity."
    },
    {
      "term": "Self-consumption",
      "def": "Using solar power in the house as it is made, instead of exporting it."
    },
    {
      "term": "Building permit",
      "def": "The permit covering the structure: racking, roof penetrations, loads, and firefighter access."
    },
    {
      "term": "Electrical permit",
      "def": "The permit covering the wiring, inspected against the NEC and Michigan Part 8."
    },
    {
      "term": "Approval to install",
      "def": "The utility's approval, after reviewing the application, for the system to be installed."
    },
    {
      "term": "One-line diagram",
      "def": "A simplified drawing showing the system's equipment and connections in a single line."
    },
    {
      "term": "Avoided cost",
      "def": "The utility's cost of the power it does not have to generate — often the rate used for net-billing export credits."
    }
  ],
  "video": {
    "title": "Net Metering — 10 Things to Know When Buying Solar",
    "embedUrl": "https://www.youtube.com/embed/XrM06CjqhiQ",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Net Metering Explained: Selling Solar Back to the Grid",
        "url": "https://www.youtube.com/watch?v=_VlxzDXtKuM"
      },
      {
        "title": "What Is Net Metering? Solar Billing Explained",
        "url": "https://www.youtube.com/watch?v=saGUbyHc8L4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer imports 500 kWh and exports 400 kWh in a month under net metering. What is their net billed usage? What would it be under a net-billing arrangement that credits exports at half the retail rate?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under net metering, net usage = 500 − 400 = 100 kWh billed. Step 2: Under net billing at half rate, the exports are worth 400 × 0.5 = 200 kWh of credit, so the billed usage is 500 − 200 = 300 kWh. Step 3: The same system costs the customer more under net billing — which is why self-consumption and batteries matter more under net billing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> List the four steps of the utility interconnection process in order, and say what happens at each step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Application — the installer submits the system size, listings, one-line diagram, and site information. Step 2: Approval to install — the utility reviews and approves (or asks for changes). Step 3: Installation and electrical inspection by the AHJ. Step 4: Permission to operate — the utility verifies, installs or programs the bi-directional meter, and gives written permission to export.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A system is installed and inspected, but the customer wants it switched on today and the utility has not given permission to operate. What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The system must not export before permission to operate — it violates the interconnection agreement and can be dangerous to utility workers. Step 2: The wait is normal and the utility's process takes its course. Step 3: The system will be switched on the day the utility gives permission and the bi-directional meter is in place.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A PV system needs three approvals. Name them and say in one line what each covers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Building permit — the structure: racking, roof penetrations, loads, firefighter access. Step 2: Electrical permit — the wiring, inspected against the 2023 NEC and Michigan Part 8. Step 3: Utility interconnection — the connection to the grid, ending in permission to operate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Under net billing, why does using solar power in the house as it is made (self-consumption) become more valuable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under net billing, exported power is credited at a lower rate than the retail rate for imported power. Step 2: A kilowatt-hour used in the house avoids buying a kilowatt-hour at the full retail rate, while a kilowatt-hour exported earns only the lower credit. Step 3: Self-consumption — and batteries that store daytime power for evening use — are worth more under net billing than under net metering.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The inspector finds that the installed system does not match the approved plans — one string was moved to a different roof face. What happens, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inspection fails, because the installation must match the plans. Step 2: The fix is to change the system back to the plans, or to submit revised plans showing the new string layout and get them approved. Step 3: The habit is to build to the plans and update the plans when the field forces a change — before the inspector arrives.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Net metering means:",
      "choices": [
        "The customer pays for all electricity used, with no credit for exports",
        "The utility credits exported electricity at or near the retail rate, and the customer is billed for the net difference",
        "The customer sells all production and buys all consumption back",
        "The utility gives solar away for free"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Net metering offsets imports with exports at or near retail. (a) That is no net metering at all. (c) That is buy-all/sell-all. (d) The utility does not give solar away."
    },
    {
      "q": "Net billing differs from net metering because:",
      "choices": [
        "Exports are credited at a lower rate than the retail rate",
        "Exports are credited at a higher rate",
        "There is no meter",
        "The customer pays nothing"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Net billing credits exports below the retail rate. (b) Exports are not credited above retail. (c) A meter is still used. (d) The customer still pays for net imports."
    },
    {
      "q": "The utility interconnection process ends with:",
      "choices": [
        "The application",
        "Permission to operate",
        "The building permit",
        "The first sunny day"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Permission to operate is the final step before export. (a) The application is the first step. (c) The building permit is a separate approval. (d) Sunshine does not authorize export."
    },
    {
      "q": "A PV system must not export power before:",
      "choices": [
        "The modules are installed",
        "The utility gives permission to operate",
        "The customer asks",
        "The sun comes up"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Export before PTO violates the interconnection agreement and can endanger utility workers. (a) Installation alone does not authorize export. (c) The customer cannot authorize export. (d) Sunrise does not authorize export."
    },
    {
      "q": "A bi-directional meter records:",
      "choices": [
        "Only imports",
        "Both imports and exports",
        "Only the solar array's output",
        "Only the battery's charge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A bi-directional meter records flow in both directions. (a) A standard meter records imports only. (c) The array's output is measured by the inverter. (d) Battery charge is measured by the battery system."
    },
    {
      "q": "The building permit for a PV system covers:",
      "choices": [
        "The wiring only",
        "The structure: racking, roof penetrations, loads, and firefighter access",
        "The utility's rates",
        "The inverter's warranty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The building permit covers the structural work. (a) The wiring is the electrical permit. (c) Rates are the utility's tariff. (d) The warranty is the manufacturer's guarantee."
    },
    {
      "q": "If an installed system does not match its approved plans:",
      "choices": [
        "It passes anyway",
        "The inspection fails, and the system or the plans must be corrected",
        "The inspector ignores it",
        "The utility fixes it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The installation must match the plans or the plans must be revised and approved. (a) A mismatch does not pass. (c) Inspectors do not ignore mismatches. (d) The utility does not fix installations."
    },
    {
      "q": "The meter is:",
      "choices": [
        "The installer's equipment to open and adjust",
        "The utility's equipment — only the utility touches it",
        "Part of the inverter",
        "Optional"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The meter belongs to the utility. (a) The technician never opens or tampers with a meter. (c) The meter is separate from the inverter. (d) A meter is required."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Net Metering, Interconnection & Permits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Net metering credits exports at or near retail; net billing credits them lower; buy-all/sell-all sells everything and buys everything back. The arrangement depends on the utility and the state — never promise a rate the utility has not confirmed.</p>\n<p><strong>Process:</strong> Application → approval to install → installation and inspection → permission to operate. Never export before PTO.</p>\n<p><strong>Permits:</strong> Building (structure) · Electrical (wiring, 2023 NEC + Michigan Part 8) · Utility interconnection. In Detroit, check the city's own requirements.</p>\n<p><strong>Meter:</strong> Bi-directional, records imports and exports. The meter is the utility's equipment — only the utility touches it.</p>\n<p><strong>Self-check:</strong> Walk through the four interconnection steps and explain net metering vs net billing to a customer. If you can, you have this module.</p>\n"
};
