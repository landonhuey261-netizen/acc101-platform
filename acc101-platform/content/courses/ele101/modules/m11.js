// ele101 - Module 11: Materials: Wire, Cable & Devices Overview
module.exports = {
  "number": 11,
  "slug": "materials-wire-cable-and-devices-overview",
  "title": "Materials: Wire, Cable & Devices Overview",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what AWG wire sizes mean and how wire size relates to ampacity.",
    "Describe the common cable types: NM, MC, AC, and UF.",
    "Explain the difference between copper and aluminum conductors.",
    "Describe conduit types and when each is used.",
    "Name the common devices: receptacles, switches, and their special types."
  ],
  "sections": [
    {
      "heading": "Wire Size & Ampacity",
      "html": "<p>Wire is sized by the <strong>American Wire Gauge (AWG)</strong>: the smaller the number, the larger the wire. A 14 AWG wire is smaller than a 12 AWG wire, which is smaller than a 10 AWG wire. The size matters because a wire can only carry so much current safely — its <strong>ampacity</strong>, the maximum current it can carry continuously without overheating. The 2023 NEC gives ampacity in Table 310.16: a 14 AWG copper conductor is rated 15 amps, a 12 AWG copper conductor 20 amps, and a 10 AWG copper conductor 30 amps, at the common 60°C and 75°C ratings used in building wiring.</p>\n<p>The rule that follows is simple: the breaker protects the wire. A 14 AWG wire gets a 15-amp breaker, a 12 AWG wire gets a 20-amp breaker, and a 10 AWG wire gets a 30-amp breaker. A bigger breaker on a smaller wire lets the wire overheat before the breaker trips — and overheated wire is a fire. The wire size, the breaker size, and the load are a matched set, and the NEC tables are what match them.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The breaker protects the wire, not the load. Size the wire for the current, then size the breaker to protect that wire.</div>"
    },
    {
      "heading": "Cable Types: NM, MC, AC & UF",
      "html": "<p>Most residential wiring uses <strong>NM cable</strong> (nonmetallic-sheathed cable, often called Romex): two or three insulated conductors plus a bare ground, wrapped in a plastic sheath. It is used in dry, interior locations and is fast to install. <strong>MC cable</strong> (metal-clad cable) wraps the same conductors in a flexible metal armor, and is used in commercial work and where the cable needs physical protection. <strong>AC cable</strong> (armored cable) is similar to MC but with a bonding strip in the armor. <strong>UF cable</strong> (underground feeder) looks like NM but is rated for direct burial and wet locations.</p>\n<p>Each cable is labeled with its size and number of conductors: 14/2 means 14 AWG with two insulated conductors (plus ground), and 14/3 means 14 AWG with three. The color of the NM sheath is a quick guide — white for 14 AWG, yellow for 12 AWG, orange for 10 AWG — but the printing on the sheath is the authority. Cable is chosen by the location and the code: NM cable is not used in wet or exposed locations, and UF cable is not a substitute for conduit where physical protection is required.</p>"
    },
    {
      "heading": "Copper, Aluminum & Conduit",
      "html": "<p><strong>Copper</strong> is the standard conductor in building wiring: it conducts well, it is easy to work with, and its connections stay tight. <strong>Aluminum</strong> is lighter and cheaper, and it is used for large feeders and service conductors, where its larger size is not a problem. Aluminum needs special care at terminations — devices and lugs must be rated for aluminum, and the connections must be made correctly — because aluminum expands and contracts more than copper and can loosen over time. Small-branch-circuit aluminum wiring from decades ago is a known fire hazard and is handled only by qualified electricians.</p>\n<p><strong>Conduit</strong> is the raceway that protects conductors. <strong>EMT</strong> (electrical metallic tubing) is the thin-wall steel conduit used indoors in commercial work. <strong>Rigid metal conduit (RMC)</strong> is heavy-wall steel for harsh and outdoor locations. <strong>PVC conduit</strong> is plastic, used underground and in wet or corrosive locations. <strong>Flexible metal conduit (FMC)</strong> bends around obstacles and connects to motors and equipment that vibrate. The conduit is chosen by the location, and the conductors inside are pulled after the conduit is installed.</p>"
    },
    {
      "heading": "Devices: Receptacles & Switches",
      "html": "<p><strong>Receptacles</strong> are the outlets that supply power to plug-in equipment. The standard duplex receptacle has two outlets; a <strong>GFCI receptacle</strong> has built-in ground-fault protection and is required by the 2023 NEC in kitchens, bathrooms, garages, outdoors, and other wet or grounded locations; an <strong>AFCI receptacle</strong> or breaker provides arc-fault protection, required in most living areas; a <strong>tamper-resistant receptacle</strong> has shutters that keep children from inserting objects, and is required in homes. A <strong>20-amp receptacle</strong> is used on 20-amp circuits; a 15-amp receptacle is used on 15-amp circuits.</p>\n<p><strong>Switches</strong> control lights and equipment. A <strong>single-pole switch</strong> controls a light from one location. A <strong>three-way switch</strong> works in a pair to control a light from two locations, such as the top and bottom of a stairway. A <strong>four-way switch</strong> is added between two three-way switches to control a light from three or more locations. A <strong>dimmer</strong> varies the light level. Devices are mounted in boxes, and the box must be sized for the number of conductors and devices inside it — box fill is covered by the 2023 NEC, and an overfilled box is a fire and inspection failure.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>AWG: smaller number means larger wire. 14 AWG = 15 amps, 12 AWG = 20 amps, 10 AWG = 30 amps (copper, 2023 NEC Table 310.16).</li>\n<li>The breaker protects the wire: match breaker size to wire size.</li>\n<li>Cable types: NM (dry interior), MC (armored, commercial), AC (armored with bonding strip), UF (direct burial, wet).</li>\n<li>Copper is standard; aluminum is for large feeders and needs aluminum-rated terminations.</li>\n<li>Conduit: EMT (indoor commercial), RMC (harsh/outdoor), PVC (underground/wet), FMC (flexible, vibrating equipment).</li>\n<li>Devices: duplex, GFCI, AFCI, tamper-resistant receptacles; single-pole, three-way, four-way, and dimmer switches.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Putting a 20-amp breaker on 14 AWG wire. The wire overheats before the breaker trips — the breaker must match the wire, not the load you wish you had.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading the NM sheath color instead of the printing. The color is a guide; the printing on the sheath is the authority.</div>\n<p><strong>Ready-to-Work link:</strong> If you can state the 14/12/10 ampacities, name the cable types and conduit types, and explain GFCI and three-way switches, you have this module. Module 12 covers apprenticeship, school, and the first job.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "American Wire Gauge (AWG)",
      "def": "The system for sizing wire; a smaller number means a larger wire."
    },
    {
      "term": "Ampacity",
      "def": "The maximum current a conductor can carry continuously without overheating."
    },
    {
      "term": "NM cable",
      "def": "Nonmetallic-sheathed cable (Romex) for dry, interior locations."
    },
    {
      "term": "MC cable",
      "def": "Metal-clad cable: conductors wrapped in flexible metal armor, used in commercial work."
    },
    {
      "term": "AC cable",
      "def": "Armored cable, similar to MC but with a bonding strip in the armor."
    },
    {
      "term": "UF cable",
      "def": "Underground feeder cable, rated for direct burial and wet locations."
    },
    {
      "term": "Copper conductor",
      "def": "The standard conductor in building wiring; conducts well and holds connections tight."
    },
    {
      "term": "Aluminum conductor",
      "def": "A lighter, cheaper conductor used for large feeders; needs aluminum-rated terminations."
    },
    {
      "term": "EMT",
      "def": "Electrical metallic tubing: thin-wall steel conduit used indoors in commercial work."
    },
    {
      "term": "Rigid metal conduit (RMC)",
      "def": "Heavy-wall steel conduit for harsh and outdoor locations."
    },
    {
      "term": "PVC conduit",
      "def": "Plastic conduit used underground and in wet or corrosive locations."
    },
    {
      "term": "Flexible metal conduit (FMC)",
      "def": "Flexible metal raceway that bends around obstacles and connects vibrating equipment."
    },
    {
      "term": "GFCI receptacle",
      "def": "A receptacle with built-in ground-fault protection, required in wet and grounded locations."
    },
    {
      "term": "AFCI",
      "def": "Arc-fault circuit interrupter protection, required in most living areas of homes."
    },
    {
      "term": "Tamper-resistant receptacle",
      "def": "A receptacle with shutters that prevent children from inserting objects."
    },
    {
      "term": "Three-way switch",
      "def": "A switch used in a pair to control a light from two locations."
    }
  ],
  "video": {
    "title": "What's the Difference Between All These Wire Types?!?!",
    "embedUrl": "https://www.youtube.com/embed/RBYtSDBGgmk",
    "note": "A walkthrough of wire and cable types. As you watch, match each cable shown to a location from this module and note its AWG marking.",
    "more": [
      {
        "title": "Understanding Wire Gauges | Ask This Old House",
        "url": "https://www.youtube.com/watch?v=O2XOCy2zHG0"
      },
      {
        "title": "Types of Romex Explained - 14/2 14/3 12/2 and 12/3 - WIRING BASICS",
        "url": "https://www.youtube.com/watch?v=bX7BYxa24TA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 14 AWG copper conductor is rated 15 amps and a 12 AWG copper conductor is rated 20 amps. What breaker size goes on each?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The breaker protects the wire, so it matches the wire's ampacity. Step 2: 14 AWG gets a 15-amp breaker. Step 3: 12 AWG gets a 20-amp breaker.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A homeowner wants a 20-amp breaker on an existing 14 AWG circuit \"for more power.\" What do you say?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the wire would overheat before the breaker trips. Step 2: The breaker must match the wire: 14 AWG gets 15 amps. Step 3: For 20 amps, the circuit must be re-wired with 12 AWG.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What does \"14/2\" mean on a roll of NM cable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 14 is the AWG size. Step 2: 2 is the number of insulated conductors (plus a bare ground). Step 3: So 14/2 is 14 AWG cable with two insulated conductors and a ground.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Which cable would you choose for a direct-burial run to a yard light, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: UF cable. Step 2: UF is rated for direct burial and wet locations. Step 3: NM cable is for dry interior locations only and must not be buried.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A stairway light must be controlled from the top and the bottom of the stairs. What switches are needed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two three-way switches. Step 2: A three-way switch works in a pair to control one light from two locations. Step 3: A single-pole switch can only control it from one location.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Name two locations where the 2023 NEC requires GFCI protection, and explain what a GFCI does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Kitchens and bathrooms (garages and outdoors are also acceptable). Step 2: A GFCI cuts power in a fraction of a second when current leaks to ground through a person. Step 3: It protects people from shock where water and grounded surfaces are nearby.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In AWG sizing, a smaller number means:",
      "choices": [
        "A smaller wire",
        "A larger wire",
        "A shorter wire",
        "A cheaper wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In AWG, a smaller number is a larger wire. (a) A larger number is a smaller wire. (c) Length is not part of AWG. (d) Price is not part of AWG."
    },
    {
      "q": "A 12 AWG copper conductor is rated for:",
      "choices": [
        "15 amps",
        "20 amps",
        "30 amps",
        "40 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 AWG copper is rated 20 amps per 2023 NEC Table 310.16. (a) 15 amps is 14 AWG. (c) 30 amps is 10 AWG. (d) 40 amps is 8 AWG."
    },
    {
      "q": "The breaker protects:",
      "choices": [
        "The load",
        "The wire",
        "The meter",
        "The utility"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The breaker is sized to protect the wire from overheating. (a) The load is protected by its own design and by the breaker indirectly. (c) The meter is protected by the service equipment. (d) The utility protects its own system."
    },
    {
      "q": "NM cable is used in:",
      "choices": [
        "Dry, interior locations",
        "Direct burial",
        "Underwater",
        "Hazardous locations"
      ],
      "answer": 0,
      "explanation": "Correct: (a). NM cable is for dry interior locations. (b) Direct burial needs UF cable or conduit. (c) Underwater needs special wiring methods. (d) Hazardous locations need special wiring methods."
    },
    {
      "q": "MC cable differs from NM cable because it has:",
      "choices": [
        "A plastic sheath only",
        "A flexible metal armor around the conductors",
        "No ground wire",
        "A larger diameter only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MC cable wraps the conductors in flexible metal armor. (a) A plastic sheath is NM cable. (c) MC cable includes a ground. (d) Diameter is not the defining difference."
    },
    {
      "q": "Aluminum conductors need:",
      "choices": [
        "No special care",
        "Terminations rated for aluminum, made correctly",
        "Smaller wire sizes than copper",
        "Only indoor use"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Aluminum needs aluminum-rated terminations because it expands and contracts more than copper. (a) Aluminum needs special care at terminations. (c) Aluminum needs larger sizes than copper for the same current. (d) Aluminum is used outdoors for feeders and services."
    },
    {
      "q": "A three-way switch is used to:",
      "choices": [
        "Control a light from two locations",
        "Control three lights at once",
        "Switch three circuits",
        "Provide GFCI protection"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Two three-way switches control one light from two locations. (b) The number of lights is not what \"three-way\" means. (c) A three-way switch controls one circuit from two places. (d) GFCI protection is a separate device."
    },
    {
      "q": "EMT conduit is:",
      "choices": [
        "Heavy-wall steel for harsh locations",
        "Thin-wall steel conduit used indoors in commercial work",
        "Plastic conduit for underground use",
        "Flexible conduit for motors only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EMT is thin-wall steel for indoor commercial work. (a) Heavy-wall steel is rigid metal conduit. (c) Plastic conduit is PVC. (d) Flexible conduit for motors is FMC, not EMT."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Materials: Wire, Cable & Devices: Quick Reference</h3>\n<p><strong>Core idea:</strong> The breaker protects the wire — size the wire for the current, then the breaker to protect that wire.</p>\n<p><strong>Ampacity (copper, 2023 NEC Table 310.16):</strong> 14 AWG = 15 A · 12 AWG = 20 A · 10 AWG = 30 A.</p>\n<p><strong>Cables:</strong> NM (dry interior) · MC (armored, commercial) · AC (armored with bonding strip) · UF (direct burial, wet).</p>\n<p><strong>Conductors:</strong> Copper is standard; aluminum is for large feeders and needs aluminum-rated terminations.</p>\n<p><strong>Conduit:</strong> EMT (indoor commercial) · RMC (harsh/outdoor) · PVC (underground/wet) · FMC (flexible, vibrating equipment).</p>\n<p><strong>Devices:</strong> GFCI (wet locations) · AFCI (living areas) · Tamper-resistant (homes) · Single-pole, three-way, four-way, dimmer.</p>\n<p><strong>Self-check:</strong> State the 14/12/10 ampacities, name the cable and conduit types, and explain GFCI and three-way switches, without looking.</p>\n"
};
