// ele104 - Module 9: RMC, IMC & PVC Conduit
module.exports = {
  "number": 9,
  "slug": "rmc-imc-pvc-conduit",
  "title": "RMC, IMC & PVC Conduit",
  "estTime": "3–4 hours",
  "objectives": [
    "Compare RMC, IMC, and PVC conduit: construction, articles, and permitted uses.",
    "Explain threading, reaming, and bending rules for rigid metal conduit.",
    "Apply PVC support distances and expansion-joint rules from Article 352.",
    "Choose the right conduit for severe physical damage, corrosive, and underground jobs.",
    "Explain how each conduit type is grounded and bonded."
  ],
  "sections": [
    {
      "heading": "Rigid Metal Conduit (Article 344)",
      "html": "<p>Rigid Metal Conduit (RMC), Article 344, is heavy-wall threaded steel conduit — the toughest raceway in the Code. It is permitted in all atmospheric conditions and occupancies, including hazardous locations when installed per Article 500, and it is the raceway of choice where severe physical damage is expected: loading docks, parking garages, and industrial floors. Its wall is thick enough to be threaded, and its fittings are threaded couplings and conduit bodies.</p><p>RMC is bent with a hydraulic or mechanical bender for larger sizes, or a hand bender for 1/2- and 3/4-inch sizes, and every cut end must be reamed to remove burrs that would cut conductor insulation (344.28). The minimum bending radius comes from Chapter 9, Table 2: for 1/2-inch RMC the minimum radius is 4 inches, and it grows with trade size. RMC must be supported within 3 feet of every box and at intervals of not more than 10 feet (344.30), the same spacing as EMT.</p><p>Because RMC is threaded steel, it is an excellent equipment grounding conductor when its joints are made up tight. In hazardous locations, threaded joints are required to contain an explosion inside the raceway. The trade-off is weight and cost: RMC is the heaviest and most expensive common raceway, and it is slow to install, so it is used where its toughness is actually needed.</p><div class=\"callout\"><strong>Key idea:</strong> RMC (Article 344) is the toughest raceway: threaded heavy-wall steel for severe physical damage and hazardous locations. Ream every cut.</div>"
    },
    {
      "heading": "Intermediate Metal Conduit (Article 342)",
      "html": "<p>Intermediate Metal Conduit (IMC), Article 342, is the middle ground between EMT and RMC: a threaded steel conduit with a thinner wall than RMC but thicker than EMT. It weighs about a third less than RMC, costs less, and is permitted in all the same locations as RMC, including hazardous locations when installed per Article 500. For most jobs that need threaded rigid conduit, IMC is the economical choice.</p><p>IMC is threaded, bent, reamed, and supported the same way as RMC: support within 3 feet of every box and at intervals of not more than 10 feet (342.30), minimum bending radius from Chapter 9, Table 2, and threaded fittings made up tight. The wall is thinner, so it bends more easily than RMC but still needs a proper bender — never bend it over a knee or a post.</p><p>The choice between RMC and IMC is usually about the specification or the environment. A job specification may call out RMC by name; a corrosive environment may need galvanized RMC; and a budget-conscious job that still needs threaded conduit will usually take IMC. Both serve as equipment grounding conductors when their joints are tight.</p><ul><li>IMC (Article 342): threaded steel, thinner wall than RMC, lighter and cheaper.</li><li>Permitted everywhere RMC is permitted, including hazardous locations per Article 500.</li><li>Support within 3 ft of every box, intervals of not more than 10 ft (342.30).</li></ul>"
    },
    {
      "heading": "PVC Conduit (Article 352)",
      "html": "<p>Rigid Polyvinyl Chloride Conduit (PVC), Article 352, is a nonmetallic raceway made of plastic. It will not corrode, it is light and cheap, and it is the standard raceway for underground work, corrosive environments, and direct burial. Schedule 40 is the standard wall; Schedule 80 has a thicker wall and is required where the conduit is subject to physical damage (352.10(F)). PVC is joined with solvent cement, and every joint must be made with the approved cement and allowed to set before conductors are pulled.</p><p>PVC has two rules that surprise beginners. First, support distances are much shorter than metal conduit: 352.30 requires support within 3 feet of every box and at intervals of not more than 3 feet for 1/2- and 1-inch sizes, 5 feet for 1-1/4- to 2-inch, 6 feet for 2-1/2- to 3-inch, 7 feet for 3-1/2- to 5-inch, and 8 feet for 6-inch. Second, PVC expands and contracts with temperature far more than steel: 352.44 requires expansion fittings where the temperature change will cause more than 1/4 inch of movement, and Table 352.44 gives the expansion per 100 feet per degree — about 3.38 inches per 100 feet for a 50°F change.</p><p>PVC is not a grounding conductor. Because it is plastic, a separate equipment grounding conductor must be pulled in every PVC run (352.60). PVC also has a bend limit like every raceway — no more than 360 degrees between pull points (352.26) — and bends are made with a hot box or a heating blanket, never an open flame, which scorches the plastic and releases toxic fumes.</p><div class=\"callout\"><strong>Key idea:</strong> PVC (Article 352) never corrodes and is the underground standard, but it needs closer supports, expansion fittings, and a separate grounding conductor in every run.</div>"
    },
    {
      "heading": "Choosing Between Them",
      "html": "<p>The decision starts with the environment. Severe physical damage points to RMC or IMC. Corrosive soil or a chemical plant points to PVC (or coated RMC). Underground points to PVC. A hazardous location points to threaded RMC or IMC. An exposed commercial run at normal height points to EMT, covered in Module 8. Cost and weight push the same way: PVC is cheapest and lightest, EMT is next, IMC is next, and RMC is the most expensive and heaviest.</p><p>Temperature matters for PVC: it gets brittle in the cold and soft in the heat, and long outdoor runs need expansion fittings. It also matters for metal conduit in corrosive atmospheres: galvanized RMC resists corrosion better than EMT, and PVC resists it best of all. Check the specification and the listing before you choose — the engineer or the AHJ may have already decided.</p><p>Grounding is the other decision point. Metal raceways ground themselves when their joints are tight. PVC never does, so the EGC must be sized and pulled with the circuit conductors. Forgetting the ground wire in a PVC run is one of the most common and most dangerous mistakes in the trade.</p><ul><li>Severe damage → RMC/IMC. Corrosive or underground → PVC. Hazardous location → threaded RMC/IMC.</li><li>Metal raceways ground themselves when tight; PVC always needs a separate EGC.</li><li>PVC: expansion fittings where movement exceeds 1/4 in. (352.44).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>RMC (344): heavy-wall threaded steel, toughest raceway, for severe damage and hazardous locations.</li><li>IMC (342): threaded steel, thinner than RMC, lighter and cheaper, same permitted uses.</li><li>PVC (352): nonmetallic, corrosion-proof, underground standard; Schedule 80 where subject to damage.</li><li>PVC supports: 3 ft for 1/2–1 in., up to 8 ft for 6 in.; expansion fittings per 352.44.</li><li>PVC is not a grounding conductor — pull a separate EGC in every run (352.60).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Bending PVC with an open flame. It scorches the plastic, weakens the conduit, and releases toxic fumes — use a hot box or heating blanket.</div><div class=\"callout\"><strong>Common mistake:</strong> Supporting PVC at EMT distances. PVC needs supports every 3 feet for small sizes, not every 10 feet.</div><p><strong>Ready-to-Work link:</strong> If you can pick the right conduit for an underground run, a loading dock, and a corrosive room, and state the PVC support distances, you have this module. Module 10 covers cable tray, raceways, and wireways.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "RMC",
      "def": "Rigid Metal Conduit — heavy-wall threaded steel raceway, Article 344."
    },
    {
      "term": "IMC",
      "def": "Intermediate Metal Conduit — threaded steel raceway with a thinner wall than RMC, Article 342."
    },
    {
      "term": "PVC conduit",
      "def": "Rigid Polyvinyl Chloride Conduit — nonmetallic raceway, Article 352."
    },
    {
      "term": "Schedule 40",
      "def": "Standard-wall PVC conduit."
    },
    {
      "term": "Schedule 80",
      "def": "Thick-wall PVC conduit, required where subject to physical damage (352.10(F))."
    },
    {
      "term": "Reaming",
      "def": "Removing burrs from a cut conduit end so they cannot cut conductor insulation."
    },
    {
      "term": "Expansion fitting",
      "def": "A fitting that lets PVC conduit lengthen and shorten with temperature (352.44)."
    },
    {
      "term": "Solvent cement",
      "def": "The approved adhesive used to join PVC conduit."
    },
    {
      "term": "Hot box",
      "def": "A heater used to soften PVC conduit for bending; never use an open flame."
    },
    {
      "term": "352.30",
      "def": "PVC support distances: within 3 ft of every box, intervals by size from 3 ft to 8 ft."
    },
    {
      "term": "352.60",
      "def": "PVC is not a grounding conductor — a separate EGC must be installed."
    },
    {
      "term": "Chapter 9, Table 2",
      "def": "Minimum bending radii for conduit and tubing."
    }
  ],
  "video": {
    "title": "Master AM2S Steel Conduit in One Piece",
    "embedUrl": "https://www.youtube.com/embed/dJ7x-E9rzl8",
    "note": "This steel-conduit masterclass shows a complete conduit run made in one piece, from measuring to bending to fitting. Watch how the bends are planned before any cutting happens.",
    "more": [
      {
        "title": "How to bend Electrical Conduit Pipe",
        "url": "https://www.youtube.com/watch?v=SAj-URwITwc"
      },
      {
        "title": "Conduit Fill / Different Insulation types",
        "url": "https://www.youtube.com/watch?v=6W7uTCHAA3g"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A conduit run will be buried underground in corrosive soil. Which conduit do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PVC conduit (Article 352). Step 2: PVC will not corrode in soil, unlike steel. Step 3: Remember to pull a separate equipment grounding conductor in the run, because PVC is not a grounding conductor (352.60).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A loading dock needs conduit at forklift height. Which conduit, and why not EMT?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: RMC or IMC. Step 2: EMT is not permitted where subject to severe physical damage (358.12). Step 3: RMC is the toughest choice; IMC is the lighter, cheaper threaded alternative with the same permitted uses.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How often must 1-inch PVC conduit be supported, and how far from a box?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Within 3 feet of every box. Step 2: At intervals of not more than 3 feet for 1/2- to 1-inch PVC (352.30). Step 3: That is much closer than EMT's 10-foot interval — PVC sags without close support.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 100-foot outdoor PVC run will see a 50°F temperature swing. How much will it expand, and what does the Code require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 352.44 gives about 3.38 inches of expansion per 100 feet for a 50°F change. Step 2: That exceeds the 1/4-inch threshold in 352.44. Step 3: Expansion fittings must be installed to absorb the movement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must every cut end of RMC be reamed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cutting leaves a sharp burr inside the conduit. Step 2: The burr can cut conductor insulation during the pull. Step 3: Section 344.28 requires reaming to remove burrs and sharp edges.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A PVC run has no equipment grounding conductor pulled in it. What is wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PVC is not a grounding conductor, so the equipment has no fault path. Step 2: Section 352.60 requires an equipment grounding conductor in every PVC run. Step 3: The fix is to pull a properly sized EGC (Table 250.122) with the circuit conductors — with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    }
  ],
  "quiz": [
    {
      "q": "RMC is governed by NEC Article:",
      "choices": [
        "342",
        "344",
        "352",
        "358"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RMC is Article 344. (a) 342 is IMC. (c) 352 is PVC. (d) 358 is EMT."
    },
    {
      "q": "IMC differs from RMC mainly in that it has:",
      "choices": [
        "A thicker wall and higher cost",
        "A thinner wall, less weight, and lower cost",
        "A plastic wall",
        "No threads"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IMC is thinner, lighter, and cheaper than RMC, with the same permitted uses. (a) That describes RMC. (c) Plastic describes PVC. (d) IMC is threaded like RMC."
    },
    {
      "q": "Schedule 80 PVC is required where the conduit is:",
      "choices": [
        "Underground",
        "Subject to physical damage",
        "In a ceiling",
        "In a damp location"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 352.10(F) requires Schedule 80 where subject to physical damage. (a) Schedule 40 is fine underground. (c) and (d) Ceilings and damp locations do not require Schedule 80."
    },
    {
      "q": "PVC conduit 1 inch in trade size must be supported at intervals of not more than:",
      "choices": [
        "3 feet",
        "5 feet",
        "8 feet",
        "10 feet"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 352.30: 1/2- to 1-inch PVC is supported every 3 feet. (b) 5 feet is for 1-1/4- to 2-inch. (c) 8 feet is for 6-inch. (d) 10 feet is the EMT and RMC interval."
    },
    {
      "q": "PVC conduit expands with temperature, so the Code requires expansion fittings when the movement will exceed:",
      "choices": [
        "1/16 inch",
        "1/4 inch",
        "1 inch",
        "3 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 352.44: expansion fittings where movement exceeds 1/4 inch. (a) 1/16 inch is below the threshold. (c) and (d) 1 and 3 inches are far above it."
    },
    {
      "q": "PVC conduit must be bent using:",
      "choices": [
        "An open flame",
        "A hot box or heating blanket",
        "A hand bender only",
        "Boiling water only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A hot box or heating blanket softens PVC evenly. (a) An open flame scorches the plastic and releases toxic fumes. (c) A hand bender is for metal conduit. (d) Boiling water is not the approved field method."
    },
    {
      "q": "In a PVC conduit run, the equipment grounding conductor must be:",
      "choices": [
        "Omitted, because PVC is plastic",
        "Pulled separately, because PVC is not a grounding conductor",
        "Connected only at one end",
        "The same size as the largest hot conductor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 352.60 requires a separate EGC in every PVC run. (a) Omitting it leaves no fault path. (c) An EGC must be continuous and bonded at both ends. (d) The EGC is sized by Table 250.122, not by the hot conductor."
    },
    {
      "q": "The minimum bending radius for conduit is found in:",
      "choices": [
        "Table 310.16",
        "Chapter 9, Table 2",
        "Table 250.66",
        "Article 90"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Chapter 9, Table 2 gives minimum bending radii. (a) Table 310.16 is ampacity. (c) Table 250.66 sizes the GEC. (d) Article 90 is the introduction."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — RMC, IMC &amp; PVC: Quick Reference</h3>\n<p><strong>Core idea:</strong> Match the conduit to the environment: RMC/IMC for damage and hazardous locations, PVC for corrosion and underground, EMT for ordinary commercial runs.</p>\n<p><strong>RMC (344):</strong> Heavy-wall threaded steel, toughest raceway. <strong>IMC (342):</strong> Thinner threaded steel, lighter and cheaper, same permitted uses.</p>\n<p><strong>PVC (352):</strong> Schedule 40 standard, Schedule 80 where subject to damage. Supports: 1/2–1 in. every 3 ft · 1-1/4–2 in. every 5 ft · 2-1/2–3 in. every 6 ft · 3-1/2–5 in. every 7 ft · 6 in. every 8 ft.</p>\n<p><strong>PVC expansion:</strong> Fittings required where movement exceeds 1/4 in. (352.44); about 3.38 in. per 100 ft per 50°F. Bend with a hot box, never a flame.</p>\n<p><strong>Grounding:</strong> Metal raceways ground themselves when tight; PVC always needs a separate EGC (352.60).</p>\n<p><strong>Self-check:</strong> Pick the conduit for an underground run, a loading dock, and a chemical room, and state the PVC support distance for 2-inch conduit.</p>\n"
};
