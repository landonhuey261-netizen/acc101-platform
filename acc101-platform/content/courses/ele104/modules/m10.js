// ele104 - Module 10: Cable Tray, Raceways & Wireways
module.exports = {
  "number": 10,
  "slug": "cable-tray-raceways-wireways",
  "title": "Cable Tray, Raceways & Wireways",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a cable tray is and where Article 392 permits it.",
    "Compare metal and nonmetallic wireways (Articles 376 and 378).",
    "Apply the fill limits for wireways and the cable-tray fill rules.",
    "Explain how conductors are supported and protected in cable tray.",
    "Choose between cable tray, wireway, and conduit for a given job."
  ],
  "sections": [
    {
      "heading": "Cable Tray (Article 392)",
      "html": "<p>A cable tray, Article 392, is an open support system for cables and raceways: a ladder, trough, or solid-bottom tray that carries cables through a building like a highway carries cars. It is the standard distribution method in large commercial and industrial buildings, data centers, and warehouses, where hundreds of cables need to run together and be accessible for changes. Cables lie in the tray, secured and supported, instead of being pulled through conduit.</p><p>Cable tray is permitted for many cable types, including MC, AC, and TC (tray cable), and for single conductors 1/0 AWG and larger in some installations. The tray itself must be grounded and bonded: metal cable tray is an equipment grounding conductor when properly installed, and 392.60 requires bonding of tray sections. The tray must be supported at the intervals in 392.30 and protected from physical damage where it passes through traffic areas.</p><p>Fill in cable tray is about cross-sectional area, not conductor count. For multiconductor cables, Table 392.22(A) limits the fill by the tray width and the cable diameters; for single conductors, the sum of the conductor areas must not exceed the percentages in Table 392.22(B). The practical rule is to leave room: a tray filled to the limit cannot accept the next cable, and the next cable always comes.</p><div class=\"callout\"><strong>Key idea:</strong> Cable tray (Article 392) is an open highway for cables in large buildings. Fill is by cross-sectional area, and the tray must be bonded.</div>"
    },
    {
      "heading": "Wireways (Articles 376 and 378)",
      "html": "<p>A wireway is a sheet-metal (Article 376) or nonmetallic (Article 378) trough with a removable cover, used to carry conductors between panels, gutters, and equipment. The classic application is the auxiliary gutter above a row of panelboards or below a group of disconnects: conductors enter through one end, run along the trough, and tap off to each panel. The removable cover makes the whole run accessible without pulling wire.</p><p>The fill limit for wireways is simple and strict: the sum of the cross-sectional areas of all conductors must not exceed 20% of the wireway's interior cross-sectional area (376.22). Derating also applies: when more than 30 current-carrying conductors are in a wireway at one cross section, the adjustment factors of Table 310.15(C)(1) apply. A wireway is not a raceway you can pack full — it is a distribution trough with room to work.</p><p>Wireways must be supported at intervals of not more than 5 feet for metal wireways (376.30) and must be grounded and bonded: metal wireways are equipment grounding conductors when properly installed, and nonmetallic wireways need a separate EGC. Covers must be accessible and secured, and the wireway must not be used where subject to severe physical damage unless listed for it.</p><ul><li>Metal wireway (376) · nonmetallic wireway (378).</li><li>Fill limit: conductors ≤ 20% of the interior cross-sectional area (376.22).</li><li>Support metal wireways at intervals of not more than 5 ft (376.30).</li></ul>"
    },
    {
      "heading": "Surface Raceways and Other Methods",
      "html": "<p>Surface raceways (Article 386 metal, Article 388 nonmetallic) are shallow channels mounted on a wall surface to add circuits to a finished room without opening the wall. They are common in offices, classrooms, and retail spaces where a new receptacle or data outlet is needed on a finished wall. Conductors in a surface raceway follow the same fill and derating rules as other raceways, and the raceway must be grounded when metal.</p><p>Busways (Article 368) are factory-assembled conductor bars in a metal housing, used to distribute large amounts of power in industrial and high-rise buildings. A busway run can feed plug-in units along its length, so a new machine can be connected without a new conduit run. Busways are supported per the manufacturer's instructions and must be accessible for inspection.</p><p>Underfloor raceways (Article 390) and cellular floor raceways are built into the floor of large open spaces such as offices, letting receptacles rise from the floor wherever a desk sits. Each of these methods has its own article because each solves a different distribution problem — the skill is matching the method to the building.</p><div class=\"callout\"><strong>Key idea:</strong> Surface raceways add circuits to finished walls; busways distribute big power in industrial buildings; underfloor raceways feed open office floors.</div>"
    },
    {
      "heading": "Choosing the Distribution Method",
      "html": "<p>Conduit protects conductors best and is the default for exposed runs, hazardous locations, and anywhere conductors need mechanical protection. Cable tray wins when there are many cables that change often, because cables can be laid in and lifted out without pulling. Wireways win at panelboards and disconnect groups, where conductors need to tap off along a short run with a removable cover. Surface raceways win in finished spaces where opening the wall is not an option.</p><p>Cost follows the same logic: conduit is labor-heavy, tray is material-heavy but fast to fill, and wireways are cheap for short distribution runs. The inspector's question is always the same — is the method listed for this use, is the fill within limits, and is the system grounded and supported? Answer those three and the method choice usually defends itself.</p><p>One rule covers all of them: the system must be complete and grounded before conductors are energized, and all work in this program assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E.</p><ul><li>Conduit: best protection, most labor. Tray: many cables, frequent changes. Wireway: panel distribution, removable cover. Surface raceway: finished walls.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Cable tray (392) carries cables in the open in large buildings; fill is by cross-sectional area; tray must be bonded.</li><li>Wireways (376/378) are troughs with removable covers for panel distribution; fill ≤ 20% of interior area.</li><li>Metal wireways are supported every 5 ft (376.30).</li><li>Surface raceways (386/388) add circuits to finished walls; busways (368) distribute big power.</li><li>Match the method to the building: protection, change frequency, and access.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Packing a wireway past 20% fill. The 20% limit leaves room to work and to dissipate heat — a full wireway is a violation.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting to bond cable tray sections together. An unbonded tray is not an effective ground-fault current path.</div><p><strong>Ready-to-Work link:</strong> If you can state the wireway fill limit, explain when cable tray beats conduit, and name the support distance for metal wireways, you have this module. Module 11 is conduit bending math and practice.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cable tray",
      "def": "An open support system (ladder, trough, or solid bottom) for cables and raceways, Article 392."
    },
    {
      "term": "Wireway",
      "def": "A sheet-metal or nonmetallic trough with a removable cover for carrying conductors, Articles 376 and 378."
    },
    {
      "term": "Auxiliary gutter",
      "def": "A wireway used above or below panelboards to distribute conductors to them."
    },
    {
      "term": "Surface raceway",
      "def": "A shallow channel mounted on a wall surface to add circuits to a finished room, Articles 386 and 388."
    },
    {
      "term": "Busway",
      "def": "Factory-assembled conductor bars in a metal housing for distributing large power, Article 368."
    },
    {
      "term": "Tray cable (TC)",
      "def": "Cable listed for use in cable tray."
    },
    {
      "term": "376.22",
      "def": "Wireway fill limit: conductors must not exceed 20% of the interior cross-sectional area."
    },
    {
      "term": "376.30",
      "def": "Metal wireway support: intervals of not more than 5 feet."
    },
    {
      "term": "392.60",
      "def": "Cable tray must be bonded and grounded."
    },
    {
      "term": "392.22",
      "def": "Cable tray fill tables by tray width and cable type."
    },
    {
      "term": "Underfloor raceway",
      "def": "A raceway built into the floor for open-space power distribution, Article 390."
    },
    {
      "term": "Fill",
      "def": "The proportion of a raceway or tray's interior area occupied by conductors."
    }
  ],
  "video": {
    "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
    "embedUrl": "https://www.youtube.com/embed/_SbQcswuzns",
    "note": "This commercial panel-wiring walkthrough shows conductors, conduit fill, and panel layout in a real commercial job. Watch how the conductors are grouped and how the panel is laid out for access.",
    "more": [
      {
        "title": "3 Phase Distribution Board Connection Diagram",
        "url": "https://www.youtube.com/watch?v=c1vTsixAdxQ"
      },
      {
        "title": "Conduit Fill / Different Insulation types",
        "url": "https://www.youtube.com/watch?v=6W7uTCHAA3g"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A metal wireway has an interior cross-sectional area of 20 square inches. What is the maximum total conductor area allowed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fill limit is 20% of the interior area (376.22). Step 2: 20 × 0.20 = 4 square inches. Step 3: The sum of the conductors' cross-sectional areas must not exceed 4 in².</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A warehouse needs to run 200 cables that will change often. Do you choose conduit or cable tray, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cable tray (Article 392). Step 2: Cables can be laid in and lifted out of a tray without pulling, so changes are fast. Step 3: Conduit would require pulling every cable and would fill up long before 200 cables fit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How often must a metal wireway be supported?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 376.30 requires support at intervals of not more than 5 feet. Step 2: The wireway must also be supported within the distance the listing requires at its ends. Step 3: A 20-foot wireway needs at least four supports.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A row of four panelboards needs a distribution trough above them with a removable cover. What wiring method is this, and what article governs it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A metal wireway, also called an auxiliary gutter. Step 2: Article 376 governs metal wireways. Step 3: The fill limit is 20% of the interior area, and the cover gives access for tapping off to each panel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An office needs two new receptacles on a finished wall, and opening the wall is not allowed. What method do you use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A surface raceway (Article 386 metal or 388 nonmetallic). Step 2: It mounts on the wall surface and carries the conductors to the new receptacles. Step 3: Metal surface raceway must be grounded; conductors follow normal fill and derating rules.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Cable tray sections are bolted together but the bonding jumpers were never installed. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 392.60 requires cable tray to be bonded and grounded. Step 2: Bolted joints alone may not provide a reliable low-impedance path. Step 3: The fix is to install the bonding jumpers the tray manufacturer specifies, so the tray is an effective ground-fault current path.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Cable tray is governed by NEC Article:",
      "choices": [
        "368",
        "376",
        "392",
        "396"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Cable tray is Article 392. (a) 368 is busways. (b) 376 is metal wireways. (d) 396 is messenger-supported wiring."
    },
    {
      "q": "The fill limit for conductors in a metal wireway is:",
      "choices": [
        "20% of the interior cross-sectional area",
        "40% of the interior cross-sectional area",
        "53% of the interior cross-sectional area",
        "100% of the interior cross-sectional area"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 376.22 limits conductors to 20% of the interior area. (b) 40% is the conduit-fill limit for more than two conductors. (c) 53% is the one-conductor conduit-fill limit. (d) A full wireway is a violation."
    },
    {
      "q": "Metal wireways must be supported at intervals of not more than:",
      "choices": [
        "3 feet",
        "5 feet",
        "8 feet",
        "10 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 376.30: not more than 5 feet. (a) 3 feet is the PVC support distance for small sizes. (c) 8 feet is a PVC distance for large sizes. (d) 10 feet is the EMT interval."
    },
    {
      "q": "Cable tray is the best choice when:",
      "choices": [
        "Conductors need maximum mechanical protection",
        "Many cables must run together and change often",
        "The run is underground",
        "The run is in a hazardous location"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tray wins for many cables that change often. (a) Conduit gives maximum protection. (c) Underground runs use PVC or direct-buried cable. (d) Hazardous locations need threaded rigid conduit."
    },
    {
      "q": "A wireway above a row of panelboards is also called:",
      "choices": [
        "A busway",
        "An auxiliary gutter",
        "A surface raceway",
        "A cable tray"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An auxiliary gutter distributes conductors to panelboards. (a) A busway is factory conductor bars. (c) A surface raceway mounts on a finished wall. (d) Cable tray is an open support system."
    },
    {
      "q": "Metal cable tray must be:",
      "choices": [
        "Left ungrounded",
        "Bonded and grounded per 392.60",
        "Painted only",
        "Filled to 100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 392.60 requires bonding and grounding. (a) Ungrounded tray is not an effective fault path. (c) Paint is not bonding. (d) Tray fill is limited by Table 392.22."
    },
    {
      "q": "Surface raceways are used to:",
      "choices": [
        "Distribute 480-volt power in a factory",
        "Add circuits to a finished wall without opening it",
        "Carry cables underground",
        "Replace panelboards"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Surface raceways add circuits on finished walls. (a) Busways distribute big power in factories. (c) Underground runs use PVC or UF cable. (d) Raceways do not replace panelboards."
    },
    {
      "q": "Busways are governed by NEC Article:",
      "choices": [
        "368",
        "376",
        "386",
        "392"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Busways are Article 368. (b) 376 is metal wireways. (c) 386 is metal surface raceways. (d) 392 is cable tray."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Cable Tray, Raceways &amp; Wireways: Quick Reference</h3>\n<p><strong>Core idea:</strong> Match the distribution method to the job: conduit for protection, tray for many changing cables, wireway for panel distribution, surface raceway for finished walls.</p>\n<p><strong>Cable tray (392):</strong> Open support system for cables; fill by cross-sectional area (Table 392.22); must be bonded (392.60).</p>\n<p><strong>Wireway (376 metal / 378 nonmetallic):</strong> Trough with removable cover; fill ≤ 20% of interior area (376.22); support every 5 ft (376.30).</p>\n<p><strong>Surface raceway (386/388):</strong> Adds circuits to finished walls. <strong>Busway (368):</strong> Factory conductor bars for large power distribution.</p>\n<p><strong>Self-check:</strong> State the wireway fill limit and support distance, and pick the method for 200 changing cables in a warehouse.</p>\n"
};
