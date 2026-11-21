module.exports = {
  "number": 6,
  "slug": "nec-705-interconnected-sources",
  "title": "NEC Article 705: Interconnected Sources",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the scope of NEC Article 705 and what an interconnected source is.",
    "Explain how a PV system connects to the service panel and the 120% rule.",
    "Describe the requirements for labeling and disconnects at the point of interconnection.",
    "Explain how Article 705 works with Articles 690 and 706.",
    "Describe the utility interconnection process and the role of the AHJ."
  ],
  "sections": [
    {
      "heading": "Article 705: When Two Sources Feed One Panel",
      "html": "<p><strong>NEC Article 705</strong> governs interconnected electric power production sources — systems that generate power and connect to the premises wiring alongside the utility, such as a PV system, a battery system, or a generator. The article's job is to make sure the two sources can share the building's wiring safely: the conductors, the busbars, and the overcurrent devices must not be overloaded by the sum of what both sources can deliver, and either source must be able to be isolated for service without the other one creating a hazard.</p><p>Article 705 works with Article 690 (the PV system itself) and Article 706 (energy storage systems). Article 690 gets the power from the array to the inverter; Article 705 gets the inverter's output into the building's electrical system and governs how it interacts with the utility; Article 706 governs the batteries. A technician who understands all three can trace a system from the module to the meter — and that is the level of understanding this module expects.</p>"
    },
    {
      "heading": "The Point of Interconnection and the 120% Rule",
      "html": "<p>Most residential PV systems connect to the utility through the service panel, using a dedicated breaker — this is the <strong>point of interconnection</strong>. The question the code asks is: how much current can the panel's busbar carry, and how much current can the two sources together push through it? The utility breaker and the PV breaker both feed the same busbar, so the busbar can see the sum of both. Article 705 answers with the <strong>120% rule</strong>: the sum of the main breaker rating and the PV breaker rating must not exceed 120% of the busbar's rating.</p><p>An example makes it concrete. A panel has a 200-amp busbar and a 200-amp main breaker. 120% of 200 is 240 amps, so the PV breaker may be up to 40 amps (240 − 200 = 40). A PV system whose inverter output needs a breaker larger than 40 amps cannot connect to that panel with a load-side breaker — it needs a different interconnection method, such as a supply-side connection (a tap ahead of the main breaker) or a panel upgrade. The 120% rule is a hard limit, and it is checked on the plans and by the inspector before the system is energized.</p><div class=\"callout\"><strong>Key idea:</strong> The 120% rule: main breaker + PV breaker ≤ 120% of the busbar rating. If the PV breaker does not fit, the interconnection method must change — or the panel must be upgraded.</div>"
    },
    {
      "heading": "Supply-Side Connections and Other Methods",
      "html": "<p>When the 120% rule does not fit, the most common alternative is a <strong>supply-side connection</strong> (sometimes called a line-side tap): the PV system connects to the service conductors ahead of the main breaker, so its current never flows through the panel's busbar at all. A supply-side connection needs its own disconnect and overcurrent protection, it must be installed in a listed manner, and the service equipment must be suitable for the tap. It is more work and more hardware than a load-side breaker, but it lets a larger system connect to a panel that cannot take it on the load side.</p><p>Other interconnection methods include connecting at a subpanel, using a dedicated PV panel, or replacing the service panel with one that has a larger busbar. The choice is made by the designer, approved by the authority having jurisdiction, and agreed with the utility — because the utility must approve any interconnection, and the utility's requirements (in Michigan, the utility's interconnection tariff and application) are a separate process from the electrical inspection. A system that is code-compliant but not utility-approved cannot be energized, and a system that is utility-approved but not code-compliant cannot pass inspection. Both approvals are needed.</p>"
    },
    {
      "heading": "Labeling, Disconnects, and the Utility Process",
      "html": "<p>Article 705 requires the point of interconnection to be labeled and the disconnects to be accessible and marked, so that anyone working on the system — the technician, the inspector, the utility worker — can see that there are two sources and can isolate either one. The AC disconnect for the PV system must be visible and lockable where the utility requires it, and the service panel must carry a label warning that it is fed by two sources. The labels are permanent and legible, and they are checked at inspection.</p><p>The utility interconnection process runs in parallel with the electrical work: the installer submits an application with the system size, the equipment listings, and the one-line diagram; the utility reviews it and issues an approval to install; the system is installed and inspected; and the utility then gives permission to operate and installs the bi-directional meter (or programs the existing meter). The system must not be energized for export until the utility gives permission to operate — running a system before that permission is a violation of the interconnection agreement, and it can be dangerous to utility workers. The technician's job is to know where the system is in that process and never to energize early.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Article 705 governs interconnected sources — PV, batteries, and generators feeding the premises wiring alongside the utility.</li><li>The 120% rule: main breaker + PV breaker must not exceed 120% of the busbar rating.</li><li>When the 120% rule does not fit, a supply-side (line-side) connection or a panel upgrade is used.</li><li>The point of interconnection must be labeled, the disconnects accessible and lockable, and the panel marked as fed by two sources.</li><li>The utility's permission to operate is required before the system exports power — code approval and utility approval are both needed.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Adding a PV breaker to a panel without checking the 120% rule. If the sum exceeds 120% of the busbar rating, the installation fails inspection and must be redone.</div><div class=\"callout\"><strong>Common mistake:</strong> Energizing a system before the utility gives permission to operate. The system must not export until the utility approves it and the bi-directional meter is in place.</div><p><strong>Ready-to-Work link:</strong> If you can apply the 120% rule, explain a supply-side connection, and describe the utility interconnection process, you have this module. Module 7 covers the systems that store the power: batteries and energy storage.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "NEC Article 705",
      "def": "The NEC article governing interconnected electric power production sources."
    },
    {
      "term": "Interconnected source",
      "def": "A power source, such as PV or a battery, connected to the premises wiring alongside the utility."
    },
    {
      "term": "Point of interconnection",
      "def": "The point where a PV or storage system connects to the premises wiring or the service."
    },
    {
      "term": "120% rule",
      "def": "The rule that the main breaker plus the PV breaker must not exceed 120% of the panel busbar rating."
    },
    {
      "term": "Busbar",
      "def": "The conductor inside a panel that distributes power to the breakers."
    },
    {
      "term": "Supply-side (line-side) connection",
      "def": "A PV connection made ahead of the main breaker, so its current does not flow through the panel busbar."
    },
    {
      "term": "Load-side connection",
      "def": "A PV connection made through a breaker in the panel, on the load side of the main breaker."
    },
    {
      "term": "Permission to operate (PTO)",
      "def": "The utility's approval for a PV system to export power to the grid."
    },
    {
      "term": "Bi-directional meter",
      "def": "A utility meter that records both electricity imported from and exported to the grid."
    },
    {
      "term": "Interconnection agreement",
      "def": "The agreement between the system owner and the utility governing the connection."
    },
    {
      "term": "NEC Article 706",
      "def": "The NEC article governing energy storage systems."
    },
    {
      "term": "Authority having jurisdiction (AHJ)",
      "def": "The official or agency that enforces the code and approves the installation."
    }
  ],
  "video": {
    "title": "Code Corner: NEC Article 690 Scope",
    "embedUrl": "https://www.youtube.com/embed/HAB-7zNv0dg",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Code Corner: 2023 NEC 690.7 and 690.31(G)",
        "url": "https://www.youtube.com/watch?v=vDq6hUVYOdo"
      },
      {
        "title": "Net Metering — 10 Things to Know When Buying Solar",
        "url": "https://www.youtube.com/watch?v=XrM06CjqhiQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A panel has a 200-amp busbar and a 200-amp main breaker. What is the largest PV breaker allowed under the 120% rule? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 120% of 200 A = 240 A. Step 2: PV breaker ≤ 240 − 200 = 40 A. Step 3: The largest PV breaker allowed is 40 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A panel has a 225-amp busbar and a 200-amp main breaker. What is the largest PV breaker allowed? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 120% of 225 A = 270 A. Step 2: PV breaker ≤ 270 − 200 = 70 A. Step 3: The largest PV breaker allowed is 70 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A PV system needs a 60-amp breaker, but the panel's 120% rule allows only 40 amps. Name two options and explain each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Supply-side (line-side) connection — connect ahead of the main breaker so the PV current never flows through the busbar. Step 2: Panel upgrade — replace the panel with one that has a larger busbar, so the 120% rule allows a 60-amp breaker. (A dedicated PV panel is also a possible option.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain the 120% rule in two sentences a homeowner could understand.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The metal bar inside your electrical panel can only carry so much current, and both the utility and the solar system feed into it. Step 2: The code allows the two breakers together to reach 120% of what the bar is rated for — any more, and the bar could overheat, so a bigger solar system needs a different connection or a bigger panel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A system is installed and inspected, but the utility has not yet given permission to operate. Can the system be turned on to export power? Why or why not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Exporting before permission to operate violates the interconnection agreement and can be dangerous to utility workers. Step 3: The system waits for the utility's permission and the bi-directional meter before it exports.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What labels must the service panel carry when a PV system is connected, and who are they for?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A label warning that the panel is fed by two sources, plus the PV system's ratings. Step 2: They are for the technician, the inspector, and the utility worker — anyone who opens the panel must know there are two sources and be able to isolate either one.</p>"
    }
  ],
  "quiz": [
    {
      "q": "NEC Article 705 governs:",
      "choices": [
        "Fire alarm systems",
        "Interconnected electric power production sources",
        "Data cabling",
        "Health-care facilities"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 705 covers PV, batteries, and generators connected alongside the utility. (a) Fire alarms are Article 760. (c) Data cabling is Article 800 and TIA-568. (d) Health-care facilities are Article 517."
    },
    {
      "q": "The 120% rule says:",
      "choices": [
        "The PV breaker alone must not exceed 120% of the busbar",
        "The main breaker plus the PV breaker must not exceed 120% of the busbar rating",
        "The busbar must be 120% bigger than the main breaker",
        "The inverter must be 120% efficient"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Main + PV ≤ 120% of the busbar rating. (a) The rule sums both breakers, not the PV breaker alone. (c) The busbar is not made 120% bigger. (d) Inverter efficiency is a separate matter."
    },
    {
      "q": "A panel has a 200 A busbar and a 200 A main breaker. The largest PV breaker is:",
      "choices": [
        "20 A",
        "40 A",
        "60 A",
        "200 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 120% of 200 = 240; 240 − 200 = 40 A. (a) 20 A is below the allowed maximum. (c) 60 A exceeds it. (d) 200 A would far exceed it."
    },
    {
      "q": "A supply-side (line-side) connection is used when:",
      "choices": [
        "The 120% rule allows the PV breaker easily",
        "The PV breaker does not fit under the 120% rule on the load side",
        "There is no utility",
        "The system has no inverter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A supply-side connection bypasses the busbar when the 120% rule does not fit. (a) If the rule fits, a load-side breaker is used. (c) No utility means an off-grid system, not a supply-side connection. (d) Every grid-tied system has an inverter."
    },
    {
      "q": "Permission to operate (PTO) is:",
      "choices": [
        "The building permit",
        "The utility's approval for a PV system to export power",
        "The inspector's approval",
        "The manufacturer's warranty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PTO is the utility's permission to export. (a) The building permit is a separate approval. (c) The inspector approves the installation, not the export. (d) The warranty is the manufacturer's guarantee."
    },
    {
      "q": "A bi-directional meter:",
      "choices": [
        "Measures only imported electricity",
        "Records both imported and exported electricity",
        "Measures only the solar array",
        "Is not needed for a grid-tied system"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A bi-directional meter records import and export. (a) A standard meter records import only. (c) The array is measured by the inverter, not the utility meter. (d) A bi-directional meter (or a programmed meter) is needed to credit exports."
    },
    {
      "q": "The service panel of a PV-equipped building must be labeled to show:",
      "choices": [
        "The panel's color",
        "That it is fed by two sources",
        "The installer's name only",
        "Nothing — labels are optional"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The panel must warn that it has two sources. (a) Color is not a label requirement. (c) The installer's name alone does not warn of two sources. (d) Labels are required, not optional."
    },
    {
      "q": "Article 705 works with Article 690 and Article 706 because:",
      "choices": [
        "They are all about fire alarms",
        "690 covers the PV system, 705 covers the interconnection, and 706 covers the batteries",
        "They are the same article",
        "They are all about data cabling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690 is the PV system, 705 is the interconnection, 706 is energy storage. (a) Fire alarms are Article 760. (c) They are three different articles. (d) Data cabling is Article 800."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — NEC Article 705: Quick Reference</h3>\n<p><strong>Core idea:</strong> Article 705 governs interconnected sources — PV, batteries, generators — feeding the premises wiring alongside the utility. 690 is the PV system, 705 is the interconnection, 706 is the batteries.</p>\n<p><strong>120% rule:</strong> Main breaker + PV breaker ≤ 120% of the busbar rating. If it does not fit, use a supply-side (line-side) connection or upgrade the panel.</p>\n<p><strong>Labels:</strong> The panel must warn it is fed by two sources; disconnects must be accessible and lockable.</p>\n<p><strong>Utility process:</strong> Application → approval to install → installation and inspection → permission to operate + bi-directional meter. Never export before PTO.</p>\n<p><strong>Self-check:</strong> Apply the 120% rule to a 200 A panel and to a 225 A busbar panel from memory. If you can, you have this module.</p>\n"
};
