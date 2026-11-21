// ele104 - Module 7: Wiring Methods Overview (Articles 300, 334–396)
module.exports = {
  "number": 7,
  "slug": "wiring-methods-overview",
  "title": "Wiring Methods Overview (Articles 300, 334–396)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the general wiring-method rules of Article 300.",
    "Compare NM, AC, MC, UF, and SE cable types and where each may be used.",
    "Explain where NM cable may not be used under 334.12.",
    "Describe raceway wiring methods and the 360-degree bend limit.",
    "Choose the right wiring method for a residential, commercial, or damp-location job."
  ],
  "sections": [
    {
      "heading": "Article 300: The Rules for Every Wiring Method",
      "html": "<p>Article 300 is the general chapter for wiring methods: it applies to every cable and raceway in the Code unless a specific article says otherwise. It covers how conductors are installed and protected, how they pass through framing, how they are supported, and how different systems are separated. A wiring method that satisfies its own article but violates Article 300 still fails inspection.</p><p>Three Article 300 rules come up constantly. Section 300.4 requires protection where cables pass through framing: bored holes must be at least 1-1/4 inches from the edge of the wood member, or a steel plate must protect the cable. Section 300.11 requires raceways and cables to be secured and supported. Section 300.3 requires all conductors of the same circuit to be in the same raceway or cable, so the magnetic fields cancel and the circuit works as designed.</p><p>Section 300.5 covers underground installations: burial depths by wiring method and location, from 18 inches for direct-buried cable under a driveway to 24 inches for most raceways, with GFCI protection and warning tape in some cases. Section 300.6 covers protection against corrosion and deterioration, and 300.7 covers expansion in long raceway runs.</p><div class=\"callout\"><strong>Key idea:</strong> Article 300 applies to every wiring method. A method that passes its own article but breaks Article 300 still fails.</div>"
    },
    {
      "heading": "Cable Wiring Methods: NM, AC, MC, UF, SE",
      "html": "<p>Nonmetallic-sheathed cable (NM, Article 334) is the standard house wire: two or more insulated conductors plus a bare ground inside a plastic sheath. It is fast to install and cheap, which is why it dominates residential work. Its ampacity is limited to the 60°C column (334.80), and it may not be used in some places, covered below.</p><p>Armored cable (AC, Article 320) wraps the conductors in a flexible metal armor and is common in older homes and some commercial work. Metal-clad cable (MC, Article 330) is similar but has a full-size grounding conductor and a tougher armor, and it is the standard cable for commercial work where conduit is not required. Underground feeder cable (UF, Article 340) is NM's outdoor cousin: it may be direct-buried. Service-entrance cable (SE, Article 338) is used for service-entrance conductors.</p><p>The choice is driven by the building and the exposure. NM is fine inside dry residential walls. MC is the commercial default where cable is allowed. UF goes underground. AC appears in retrofits and older buildings. Each type has its own article with its own permitted and prohibited uses — read the article, not the habit.</p><ul><li>NM (334): residential standard; 60°C ampacity limit.</li><li>AC (320): armored cable; older homes, some commercial.</li><li>MC (330): metal-clad; commercial standard where cable is allowed.</li><li>UF (340): direct burial. SE (338): service entrances.</li></ul>"
    },
    {
      "heading": "Where NM Cable May Not Be Used",
      "html": "<p>Section 334.12 lists where NM cable is not permitted, and the list is an exam favorite. NM may not be used in commercial buildings of certain construction types, in dropped or suspended ceilings in some occupancies, embedded in poured cement or aggregate, in hazardous locations, or where exposed to corrosive fumes or vapors. It may not be used as service-entrance cable, and it may not be run where it is subject to physical damage unless protected.</p><p>The practical consequence is that a house wired in NM and a store wired in NM are different jobs. In a commercial building, the default is MC cable or a raceway method such as EMT, and NM is the exception, not the rule. An apprentice who pulls NM through a commercial ceiling because “it worked in a house” has created a violation that the inspector will catch and the contractor will pay to fix.</p><p>Damp and wet locations matter too: NM is not listed for wet locations, and in damp locations it needs protection. UF cable, by contrast, is rated for direct burial and wet locations. When in doubt about the exposure, check the cable's listing and the article's permitted-uses section.</p><div class=\"callout\"><strong>Common mistake:</strong> Pulling NM cable in a commercial building because it worked in a house. NM is restricted in commercial work under 334.12 — MC or raceway is the commercial default.</div>"
    },
    {
      "heading": "Raceways and the 360-Degree Rule",
      "html": "<p>A raceway is an enclosed channel for conductors: conduit, tubing, wireways, cable tray, and busways. The raceway articles live in Chapter 3, Articles 342 through 396: IMC (342), RMC (344), FMC (348), LFMC (350), PVC (352), EMT (358), ENT (362), wireways (376, 378), cable tray (392), and more. Each article gives permitted uses, prohibited uses, sizes, supports, and bending rules for that raceway type.</p><p>One rule applies to nearly every raceway: no more than 360 degrees of bends total between pull points (for example, 358.26 for EMT, 344.26 for RMC, 352.26 for PVC). Four 90-degree bends is the maximum, and most electricians plan for fewer, because every bend adds pulling friction and risks damaging the conductors. A run with five 90s is a violation even if the wire physically fits.</p><p>Raceways must be complete before conductors are pulled, must be supported within the distances their article requires, and must be reamed or bushed so sharp edges cannot cut insulation. A raceway is a system: one loose coupling breaks the grounding path in a metal raceway, and one sharp edge can fail the whole pull.</p><ul><li>Raceway articles: 342 IMC · 344 RMC · 348 FMC · 350 LFMC · 352 PVC · 358 EMT · 376/378 wireways · 392 cable tray.</li><li>Maximum bends between pull points: 360° total (four 90s).</li><li>Raceway must be complete before conductors are pulled; ream or bush sharp edges.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Article 300 applies to all wiring methods: protection through framing (300.4), support (300.11), same-circuit conductors together (300.3).</li><li>NM (334) is residential; MC (330) is commercial; UF (340) is direct burial; SE (338) is service entrances.</li><li>NM is restricted by 334.12 — not in many commercial buildings, not embedded in concrete, not where subject to damage.</li><li>Raceway bend limit: 360° total between pull points.</li><li>Choose the method by building type and exposure, not by habit.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Running NM cable where it will be subject to physical damage without protection. Physical damage needs a raceway or a listed guard.</div><div class=\"callout\"><strong>Common mistake:</strong> Exceeding 360 degrees of bends between pull points. Count every bend, including offsets, before you pull.</div><p><strong>Ready-to-Work link:</strong> If you can name five wiring methods, say where NM may not be used, and state the bend limit, you have this module. Module 8 covers EMT in detail.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Wiring method",
      "def": "The system used to install conductors: a cable type or a raceway type, governed by Chapter 3."
    },
    {
      "term": "Raceway",
      "def": "An enclosed channel for conductors: conduit, tubing, wireway, cable tray, or busway."
    },
    {
      "term": "NM cable",
      "def": "Nonmetallic-sheathed cable (Romex); residential standard, Article 334."
    },
    {
      "term": "AC cable",
      "def": "Armored cable; conductors wrapped in flexible metal armor, Article 320."
    },
    {
      "term": "MC cable",
      "def": "Metal-clad cable; armored cable with a full-size grounding conductor, Article 330."
    },
    {
      "term": "UF cable",
      "def": "Underground feeder cable; rated for direct burial, Article 340."
    },
    {
      "term": "SE cable",
      "def": "Service-entrance cable, Article 338."
    },
    {
      "term": "300.4",
      "def": "Protection of cables where they pass through framing: 1-1/4 in. from the edge or a steel plate."
    },
    {
      "term": "300.3",
      "def": "All conductors of the same circuit must be in the same raceway or cable."
    },
    {
      "term": "360-degree rule",
      "def": "No more than 360° of bends total between pull points in a raceway run."
    },
    {
      "term": "334.12",
      "def": "Uses not permitted for NM cable, including many commercial buildings."
    },
    {
      "term": "Pull point",
      "def": "A box, conduit body, or other point where conductors can be pulled or accessed."
    },
    {
      "term": "Physical damage",
      "def": "Exposure to damage from traffic, tools, or the environment; requires protection or a raceway."
    }
  ],
  "video": {
    "title": "Simple house wiring — simple house wiring connection",
    "embedUrl": "https://www.youtube.com/embed/8i64KVsvxqs",
    "note": "This house-wiring walkthrough shows NM cable run through framing, boxes, and panels. As you watch, spot the Article 300 rules in action: protection through framing, support, and same-circuit conductors together.",
    "more": [
      {
        "title": "DIY Electrical Wiring Tips for Home Electrical Wiring Projects - Vol 1",
        "url": "https://www.youtube.com/watch?v=-9Uh48uRX4o"
      },
      {
        "title": "How to wire a new house",
        "url": "https://www.youtube.com/watch?v=qFOqV3_paFw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A cable passes through a stud 1 inch from the edge of the wood. What does 300.4 require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bored holes must be at least 1-1/4 inches from the edge of the wood member. Step 2: At 1 inch, the cable needs a steel plate at least 1/16 inch thick protecting it. Step 3: The plate must cover the cable's path through the framing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the five cable types covered in this module and the article for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NM, Article 334. Step 2: AC, Article 320. Step 3: MC, Article 330. Step 4: UF, Article 340. Step 5: SE, Article 338.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A contractor wants to wire a small commercial shop in NM cable because it is cheaper. What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NM is restricted in commercial buildings by 334.12. Step 2: The commercial default is MC cable or a raceway method such as EMT. Step 3: The inspector will fail NM in a commercial building where the Code does not permit it, and the rework costs more than the savings.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A conduit run has two 90-degree bends, one 45-degree bend, and two offsets made of two 30-degree bends each. How many degrees total, and is the run compliant?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two 90s = 180°. Step 2: One 45 = 45°. Step 3: Two offsets × two 30s each = 120°. Step 4: Total = 345°, which is under the 360° limit, so the run is compliant — but only just, and pulling will be hard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must all conductors of the same circuit be in the same raceway or cable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 300.3 requires it so the magnetic fields of the hot and neutral cancel. Step 2: Separated conductors create inductive heating in the metal raceway and can overheat it. Step 3: It also keeps the circuit's fault path intact so the breaker trips correctly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Which wiring method would you choose for a direct-buried run to a detached garage, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: UF cable (Article 340) or conductors in PVC conduit. Step 2: NM is not rated for direct burial or wet locations. Step 3: UF is listed for direct burial; PVC conduit with THWN-2 conductors also works and is easier to replace later.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Article 300 applies to:",
      "choices": [
        "NM cable only",
        "Every wiring method, unless a specific article says otherwise",
        "Raceways only",
        "Commercial work only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 300 is the general wiring-method chapter. (a) It covers far more than NM. (c) It covers cables and raceways. (d) It applies to residential and commercial work alike."
    },
    {
      "q": "Under 300.4, a bored hole for cable must be at least how far from the edge of the wood member?",
      "choices": [
        "1/2 inch",
        "3/4 inch",
        "1-1/4 inches",
        "2 inches"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1-1/4 inches, or a steel plate must protect the cable. (a) and (b) 1/2 and 3/4 inch are too close. (d) 2 inches exceeds the minimum but is not the rule."
    },
    {
      "q": "The standard residential cable, NM, is governed by:",
      "choices": [
        "Article 320",
        "Article 330",
        "Article 334",
        "Article 340"
      ],
      "answer": 2,
      "explanation": "Correct: (c). NM is Article 334. (a) 320 is AC cable. (b) 330 is MC cable. (d) 340 is UF cable."
    },
    {
      "q": "The standard commercial cable where cable is allowed is:",
      "choices": [
        "NM",
        "AC",
        "MC",
        "UF"
      ],
      "answer": 2,
      "explanation": "Correct: (c). MC cable (Article 330) is the commercial default. (a) NM is restricted in commercial buildings by 334.12. (b) AC is used in older buildings and some commercial work but is not the standard. (d) UF is for direct burial."
    },
    {
      "q": "NM cable may NOT be used:",
      "choices": [
        "Inside dry residential walls",
        "Embedded in poured cement",
        "In a single-family home",
        "For a 15-ampere lighting circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 334.12 prohibits NM embedded in poured cement or aggregate. (a), (c), and (d) NM is permitted inside dry residential walls, in homes, and on lighting circuits."
    },
    {
      "q": "The maximum total bends between pull points in a raceway run is:",
      "choices": [
        "180 degrees",
        "270 degrees",
        "360 degrees",
        "540 degrees"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 360 degrees total — four 90s. (a) and (b) 180 and 270 are below the limit. (d) 540 exceeds it."
    },
    {
      "q": "UF cable is rated for:",
      "choices": [
        "Direct burial",
        "Use as service-entrance cable",
        "Hazardous locations",
        "Embedding in concrete only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). UF (Article 340) is rated for direct burial. (b) SE cable is for service entrances. (c) Hazardous locations need classified wiring methods. (d) UF is not limited to concrete."
    },
    {
      "q": "Section 300.3 requires all conductors of the same circuit to be in the same raceway or cable because:",
      "choices": [
        "It looks neater",
        "Their magnetic fields cancel and inductive heating is avoided",
        "It saves wire",
        "Inspectors prefer it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Together, the fields cancel; separated, they cause inductive heating in metal raceways. (a) Neatness is a side benefit, not the reason. (c) It does not save wire. (d) Inspectors enforce it because of the heating and fault-path reasons."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Wiring Methods: Quick Reference</h3>\n<p><strong>Core idea:</strong> Article 300 governs every wiring method; each cable and raceway has its own article with permitted and prohibited uses.</p>\n<p><strong>Cables:</strong> NM 334 (residential) · AC 320 · MC 330 (commercial) · UF 340 (direct burial) · SE 338 (service entrance).</p>\n<p><strong>Article 300:</strong> 300.4 framing protection (1-1/4 in. or steel plate) · 300.11 support · 300.3 same-circuit conductors together · 300.5 burial depths.</p>\n<p><strong>NM limits (334.12):</strong> Not in many commercial buildings, not in concrete, not where subject to damage, not in hazardous locations.</p>\n<p><strong>Bend limit:</strong> 360° total between pull points in any raceway run.</p>\n<p><strong>Self-check:</strong> Name five wiring methods with their articles, and state the bend limit and the framing-protection distance.</p>\n"
};
