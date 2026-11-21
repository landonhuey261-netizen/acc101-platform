// ele104 - Module 5: Grounding & Bonding (Article 250)
module.exports = {
  "number": 5,
  "slug": "grounding-bonding",
  "title": "Grounding & Bonding (Article 250)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between grounding and bonding and why both are needed.",
    "Identify grounding electrodes and size the grounding electrode conductor from Table 250.66.",
    "Size the equipment grounding conductor from Table 250.122.",
    "Explain the main bonding jumper and why neutral and ground separate after the service.",
    "Describe bonding requirements for metal raceways, enclosures, and water piping."
  ],
  "sections": [
    {
      "heading": "Grounding vs. Bonding: Two Jobs",
      "html": "<p>Grounding connects the electrical system to the earth. Bonding connects metal parts together so they stay at the same voltage. They work as a team: bonding creates a low-impedance path back to the source so a fault trips the breaker fast, and grounding connects that bonded system to the earth to limit voltage from lightning, line surges, and contact with higher-voltage lines.</p><p>The key insight is that the earth is not the fault path. Dirt is a poor conductor, and fault current does not reliably flow through the earth back to the transformer. The fault path is the equipment grounding conductor and the bonded metal raceway system — a deliberate, low-resistance copper (or steel) road back to the source. A ground rod alone will not clear a fault; the breaker trips because the bonding path is low-impedance, not because a rod is in the dirt.</p><p>Article 250 is the longest article in the NEC because it covers both jobs in detail: system grounding (Part II), grounding electrode systems (Part III), enclosure and equipment grounding (Part IV), bonding (Part V), and equipment grounding conductors (Part VI). This module teaches the parts you will use every day.</p><div class=\"callout\"><strong>Key idea:</strong> Bonding clears the fault by giving it a low-impedance road home. Grounding connects that system to the earth. A ground rod alone never clears a fault.</div>"
    },
    {
      "heading": "Grounding Electrodes and the GEC",
      "html": "<p>A grounding electrode is a conductive object in contact with the earth: a ground rod, a concrete-encased electrode (Ufer), a metal water pipe, a ground ring, or a plate. Section 250.52 lists the permitted electrodes, and 250.50 requires all electrodes present at a building to be bonded together into one grounding electrode system — you do not get to pick just one and ignore the rest.</p><p>The grounding electrode conductor (GEC) connects the service equipment to the electrode system, and Table 250.66 sizes it by the size of the largest ungrounded service-entrance conductor. For a 200-ampere service with 2/0 copper service conductors, Table 250.66 calls for a 4 AWG copper GEC. For a 400-ampere service with 400 kcmil copper, it calls for a 1/0 copper GEC.</p><p>Three caps in Table 250.66 are exam favorites: a GEC to a ground rod never needs to be larger than 6 AWG copper; to a concrete-encased (Ufer) electrode never larger than 4 AWG copper; and to a ground ring never larger than 2 AWG copper. Section 250.64 covers installation: the GEC must be protected from physical damage, run in a continuous length or spliced only by irreversible methods, and secured to the surface.</p><ul><li>All electrodes present must be bonded into one system (250.50).</li><li>GEC size comes from Table 250.66, by the largest service-entrance conductor.</li><li>Caps: rod 6 AWG Cu · Ufer 4 AWG Cu · ground ring 2 AWG Cu.</li></ul>"
    },
    {
      "heading": "Equipment Grounding Conductors (Table 250.122)",
      "html": "<p>The equipment grounding conductor (EGC) is the bare or green conductor that bonds equipment enclosures back to the service. Table 250.122 sizes it by the rating of the overcurrent device protecting the circuit: 15 A → 14 AWG Cu, 20 A → 12 AWG Cu, 30 A → 10 AWG Cu, 40–60 A → 10 AWG Cu, 100 A → 8 AWG Cu, 200 A → 6 AWG Cu, 400 A → 3 AWG Cu. Notice the EGC follows the breaker, not the load — because its job is to carry fault current until that breaker trips.</p><p>If the ungrounded conductors are increased in size — for voltage drop, for example — the EGC must be increased proportionally under 250.122(B). Upsizing the hot wires without upsizing the ground leaves a fault path too small for the fault current, and the breaker may not trip fast enough.</p><p>Metal raceways can serve as the EGC themselves when the Code permits: EMT, RMC, and IMC are all listed as equipment grounding conductors when properly installed with tight fittings (250.118). That is why a commercial EMT run often carries no separate green wire — the conduit is the ground path, and every coupling and connector must be tight enough to keep it that way.</p><ul><li>EGC size follows the overcurrent device (Table 250.122).</li><li>Upsize the circuit conductors → upsize the EGC proportionally (250.122(B)).</li><li>EMT, RMC, and IMC may serve as the EGC when properly installed (250.118).</li></ul>"
    },
    {
      "heading": "The Main Bonding Jumper and Separating Neutral and Ground",
      "html": "<p>At the service, the grounded (neutral) conductor and the equipment grounding system are connected by the main bonding jumper — a screw, strap, or busbar sized by Table 250.102(C)(1). This is the one place where neutral and ground meet. It is the reference point that makes the whole grounding system work: fault current flows from the fault, through the EGC, through the main bonding jumper, onto the neutral, and back to the transformer.</p><p>After the service disconnect, neutral and ground must be separate. In a subpanel, the neutral bus is isolated from the enclosure and the ground bus is bonded to it — never the reverse. If neutral and ground are bonded in a subpanel, normal neutral current splits onto the grounding conductors and metal raceways, energizing enclosures and creating shock and fire hazards. Inspectors check this on every job, and it is one of the most common violations in the trade.</p><p>The same rule applies to a separately derived system, such as a transformer or generator: the neutral-to-ground bond happens at the source, and only there. Every downstream panel keeps them apart.</p><div class=\"callout\"><strong>Key idea:</strong> Neutral and ground meet exactly once: at the service, through the main bonding jumper. Everywhere downstream, they stay separate.</div>"
    },
    {
      "heading": "Bonding Metal Systems",
      "html": "<p>Bonding is not only for the electrical system. Metal water piping must be bonded to the service equipment or the grounding electrode system under 250.104(A), using a bonding jumper sized by Table 250.102(C)(1). Metal gas piping must be bonded under 250.104(B), usually through the equipment grounding conductor of the circuit serving the gas equipment. Structural steel, metal raceways, and enclosures are bonded through their connections and, where needed, bonding jumpers sized by Table 250.102(C)(1) or 250.122.</p><p>The reason is equal potential: if a hot wire faults to a water pipe, the pipe must be at the same potential as the rest of the bonded system so the breaker trips instead of the pipe sitting energized, waiting for someone to touch it and a faucet at the same time. An unbonded metal system is a shock waiting for a second fault.</p><p>Practical work note: bonding connections must be made with listed clamps and lugs, on clean metal, and torqued to the manufacturer's values. A bonding jumper draped over paint or rust is not a bond. All practical work in this program assumes the circuit is de-energized and locked out/tagged out under a licensed supervisor, per NFPA 70E — never work on live equipment.</p><div class=\"callout\"><strong>Common mistake:</strong> Bonding the neutral and ground together in a subpanel. Normal current then flows on the grounding system, and enclosures can become energized.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Grounding",
      "def": "Connecting the electrical system to the earth to limit voltage from lightning, surges, and contact with higher-voltage lines."
    },
    {
      "term": "Bonding",
      "def": "Connecting metal parts together so they stay at the same voltage and provide a low-impedance fault path."
    },
    {
      "term": "Grounding electrode",
      "def": "A conductive object in contact with the earth: rod, Ufer, water pipe, ground ring, or plate (250.52)."
    },
    {
      "term": "Grounding electrode system",
      "def": "All electrodes present at a building, bonded together (250.50)."
    },
    {
      "term": "Grounding electrode conductor (GEC)",
      "def": "The conductor connecting the service equipment to the grounding electrode system; sized by Table 250.66."
    },
    {
      "term": "Equipment grounding conductor (EGC)",
      "def": "The bare or green conductor bonding equipment back to the service; sized by Table 250.122."
    },
    {
      "term": "Main bonding jumper",
      "def": "The connection between the grounded conductor and the equipment grounding system at the service; sized by Table 250.102(C)(1)."
    },
    {
      "term": "Ufer electrode",
      "def": "A concrete-encased grounding electrode, typically 20 feet of rebar or bare copper in a footing."
    },
    {
      "term": "Ground rod",
      "def": "An 8-foot rod driven into the earth; a single rod needs a supplemental electrode if its resistance exceeds 25 ohms (250.53(A)(2))."
    },
    {
      "term": "Table 250.66",
      "def": "The table sizing the grounding electrode conductor by the largest service-entrance conductor."
    },
    {
      "term": "Table 250.122",
      "def": "The table sizing the equipment grounding conductor by the overcurrent device rating."
    },
    {
      "term": "Effective ground-fault current path",
      "def": "The intentionally constructed, low-impedance path that fault current follows back to the source."
    },
    {
      "term": "Separately derived system",
      "def": "A system whose power comes from a source other than the service, such as a transformer or generator; it gets its own neutral-to-ground bond."
    },
    {
      "term": "Bonding jumper",
      "def": "A conductor that connects metal parts to keep them at the same potential."
    }
  ],
  "video": {
    "title": "Journeyman Electrician Exam Prep (NEC 2023) — Table 250.66 Explained: Grounding Electrode Conductor",
    "embedUrl": "https://www.youtube.com/embed/gfVWZ5YpLUE",
    "note": "This lesson works Table 250.66 step by step, including the three caps (rod 6 AWG, Ufer 4 AWG, ring 2 AWG). Follow along with your own Table 250.66 and check each worked example before the presenter gives the answer.",
    "more": [
      {
        "title": "Passing Your 200A Service Inspection: Sizing Main Bonding Jumpers!",
        "url": "https://www.youtube.com/watch?v=0m0gkGakPRc"
      },
      {
        "title": "120V 240V Electricity explained - Split phase 3 wire electrician",
        "url": "https://www.youtube.com/watch?v=fJeRabV5hNU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In one sentence each, explain what grounding does and what bonding does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Grounding connects the electrical system to the earth to limit voltage from lightning, surges, and contact with higher-voltage lines. Step 2: Bonding connects metal parts together so they stay at the same voltage and provide a low-impedance path for fault current back to the source so the breaker trips.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 200-ampere service has 2/0 copper service-entrance conductors. What size copper GEC does Table 250.66 require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Find the 2/0 copper row in Table 250.66. Step 2: The table calls for a 4 AWG copper grounding electrode conductor. Step 3: Check the caps — if the only electrode is a ground rod, 6 AWG copper would be the maximum required, but for a water-pipe or Ufer electrode the full 4 AWG applies.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What size copper EGC does a 100-ampere circuit need, and what size for a 20-ampere circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 250.122 — a 100-ampere overcurrent device calls for an 8 AWG copper EGC. Step 2: A 20-ampere device calls for a 12 AWG copper EGC. Step 3: The EGC follows the breaker rating, not the load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The circuit conductors for a 100-ampere feeder are upsized from 3 AWG to 1 AWG copper for voltage drop. What must happen to the EGC?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 250.122(B) requires the EGC to be increased proportionally. Step 2: The conductor cross-section grew from 3 AWG to 1 AWG, so the EGC must grow by the same proportion. Step 3: The standard 8 AWG copper EGC for 100 amperes must be upsized accordingly — do not leave the original 8 AWG in place.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Where is the main bonding jumper, and where must neutral and ground be kept separate?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The main bonding jumper is at the service, connecting the grounded (neutral) conductor to the equipment grounding system. Step 2: After the service disconnect — in every subpanel and downstream panel — neutral and ground must be separate. Step 3: In a subpanel the neutral bus is isolated and the ground bus is bonded to the enclosure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A metal water pipe enters a building. What does Article 250 require, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 250.104(A) requires the metal water piping to be bonded to the service equipment or grounding electrode system. Step 2: The bonding jumper is sized by Table 250.102(C)(1). Step 3: The reason is equal potential — if a fault energizes the pipe, the bond gives fault current a path home so the breaker trips instead of the pipe sitting energized.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The main job of bonding is to:",
      "choices": [
        "Connect the system to the earth",
        "Create a low-impedance fault path back to the source so the breaker trips",
        "Reduce the electric bill",
        "Protect against lightning only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bonding creates the low-impedance fault path that clears faults. (a) Connecting to the earth is grounding. (c) Bonding has nothing to do with the electric bill. (d) Lightning protection is one grounding function, not bonding's main job."
    },
    {
      "q": "Fault current returns to the source mainly through:",
      "choices": [
        "The earth",
        "The equipment grounding conductor and bonded metal system",
        "The ground rod",
        "The water pipe"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The EGC and bonded metal system are the deliberate low-impedance path. (a) The earth is a poor conductor and is not the fault path. (c) A ground rod alone will not clear a fault. (d) A water pipe is bonded for equal potential, but it is not the designed fault path."
    },
    {
      "q": "Table 250.66 sizes the grounding electrode conductor by:",
      "choices": [
        "The breaker rating",
        "The size of the largest ungrounded service-entrance conductor",
        "The load in amperes",
        "The length of the run"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 250.66 keys on the largest service-entrance conductor. (a) The breaker rating sizes the EGC in Table 250.122, not the GEC. (c) The load does not size the GEC. (d) Length does not enter Table 250.66."
    },
    {
      "q": "A GEC to a ground rod never needs to be larger than:",
      "choices": [
        "2 AWG copper",
        "4 AWG copper",
        "6 AWG copper",
        "8 AWG copper"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The rod cap in Table 250.66 is 6 AWG copper. (a) 2 AWG is the ground-ring cap. (b) 4 AWG is the Ufer cap. (d) 8 AWG is smaller than the cap allows."
    },
    {
      "q": "Table 250.122 sizes the equipment grounding conductor by:",
      "choices": [
        "The size of the service conductors",
        "The rating of the overcurrent device protecting the circuit",
        "The voltage of the circuit",
        "The length of the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 250.122 keys on the overcurrent device rating. (a) Service conductor size keys Table 250.66. (c) Voltage does not size the EGC. (d) Length does not enter Table 250.122."
    },
    {
      "q": "The EGC for a 20-ampere circuit is:",
      "choices": [
        "14 AWG copper",
        "12 AWG copper",
        "10 AWG copper",
        "8 AWG copper"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 250.122: 20 A → 12 AWG copper. (a) 14 AWG is for 15 A. (c) 10 AWG is for 30–60 A. (d) 8 AWG is for 100 A."
    },
    {
      "q": "Neutral and ground are connected together:",
      "choices": [
        "In every panel",
        "Only at the service, through the main bonding jumper",
        "In every subpanel",
        "At every receptacle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). They meet exactly once, at the service. (a), (c), and (d) Bonding them downstream lets neutral current flow on grounding conductors and energize enclosures."
    },
    {
      "q": "Metal water piping in a building must be:",
      "choices": [
        "Left unbonded",
        "Bonded to the service equipment or grounding electrode system per 250.104(A)",
        "Used as the only grounding electrode",
        "Bonded only in commercial buildings"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 250.104(A) requires bonding the metal water piping. (a) Unbonded pipe is a shock hazard. (c) A water pipe may be an electrode, but it is not the only one and must be bonded into the system. (d) The rule applies to dwellings and commercial buildings alike."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Grounding &amp; Bonding: Quick Reference</h3>\n<p><strong>Core idea:</strong> Bonding clears faults (low-impedance path home); grounding connects the system to the earth. The earth is not the fault path.</p>\n<p><strong>GEC (Table 250.66):</strong> Sized by the largest service-entrance conductor. Caps: rod 6 AWG Cu · Ufer 4 AWG Cu · ring 2 AWG Cu. All electrodes present must be bonded together (250.50).</p>\n<p><strong>EGC (Table 250.122):</strong> Sized by the overcurrent device: 15 A → 14 · 20 A → 12 · 30–60 A → 10 · 100 A → 8 · 200 A → 6 · 400 A → 3 AWG Cu. Upsize conductors → upsize the EGC (250.122(B)).</p>\n<p><strong>Main bonding jumper:</strong> Neutral and ground meet exactly once, at the service. Subpanels keep them separate.</p>\n<p><strong>Bonding:</strong> Metal water piping (250.104(A)), gas piping (250.104(B)), raceways, and enclosures — all for equal potential.</p>\n<p><strong>Self-check:</strong> Size a GEC for a 200 A service and an EGC for a 100 A circuit, and explain why a subpanel neutral must be isolated.</p>\n"
};
