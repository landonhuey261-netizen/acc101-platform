// ele108 - Module 10: Industrial Wiring Methods & Panels
module.exports = {
  "number": 10,
  "slug": "industrial-wiring-methods-panels",
  "title": "Industrial Wiring Methods & Panels",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the wiring methods used in industrial work: conduit, cable tray, and raceways.",
    "Compare EMT, rigid metal conduit, PVC conduit, and flexible conduit and where each is used.",
    "Explain conductor sizing, ampacity, and derating for industrial circuits.",
    "Describe panelboards, disconnects, and motor control centers (MCCs).",
    "Explain working clearances around electrical equipment under NEC 110.26."
  ],
  "sections": [
    {
      "heading": "Wiring Methods: Conduit, Tray & Raceway",
      "html": "<p>Industrial wiring is usually run in <strong>conduit</strong> — metal or plastic pipe that protects the conductors and lets them be pulled, replaced, and added to later. The common types are <strong>EMT</strong> (electrical metallic tubing, the thin-wall steel tube used indoors), <strong>rigid metal conduit (RMC)</strong> (heavy-wall steel for harsh locations and threaded connections), <strong>intermediate metal conduit (IMC)</strong> (between EMT and RMC in weight), <strong>PVC conduit</strong> (plastic, for corrosive and underground locations), and <strong>flexible metal conduit</strong> (for short runs to motors and equipment that vibrate or move). <strong>Cable tray</strong> carries large numbers of cables in an open, ventilated support system, common in plants where cables must be added and changed often. <strong>Wireways and raceways</strong> are enclosed channels for conductors in panels and along walls.</p>\n<p>Each method is governed by its own NEC article (Chapter 3), and each has rules for supports, bends, fill, and grounding. Conduit fill is limited so conductors can be pulled without damage and can dissipate heat — too many conductors in a conduit overheat and cannot be pulled. Bends are limited (no more than 360 degrees of bend between pull points) so the conductors can be pulled through without damage. These are installation rules that a technician must know even when a licensed electrician does the work, because the technician is the one who finds the faults they cause.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Conduit protects conductors and lets them be replaced. Fill limits, bend limits, and support rules exist so conductors can be pulled without damage and can shed heat.</div>"
    },
    {
      "heading": "Conductors: Sizing, Ampacity & Derating",
      "html": "<p>Conductor sizing starts with <strong>ampacity</strong> — the current a conductor can carry continuously without exceeding its temperature rating — from NEC Table 310.16. The table's 75°C column is the usual basis for industrial work, and the conductor's insulation type (THHN, XHHW, and others) sets which column applies. Two adjustments then apply. <strong>Ambient temperature correction</strong> reduces the ampacity when the conductors run in a hot location, such as a boiler room or a sun-baked rooftop. <strong>Adjustment for more than three current-carrying conductors</strong> (derating) reduces the ampacity when many conductors share a conduit, because they heat each other — for example, 4–6 conductors are derated to 80% of the table value.</p>\n<p>Motor circuits add their own rules from NEC Article 430: motor branch-circuit conductors are sized at 125% of the nameplate full-load current, and the branch-circuit short-circuit and ground-fault protection is sized separately from the overload protection. Feeder conductors that supply several motors are sized from the sum of the loads plus 125% of the largest motor's FLA. The conductor must also be large enough that the voltage drop over its length stays within limits — usually 3% for a branch circuit and 5% total — because a long run of small wire starves the motor of voltage and makes it draw excess current.</p>"
    },
    {
      "heading": "Panelboards, Disconnects & Motor Control Centers",
      "html": "<p>A <strong>panelboard</strong> is the distribution point that divides a feeder into branch circuits, each with its own breaker. It is labeled with a schedule that says what each breaker feeds, and the schedule must be kept accurate — an inaccurate schedule is a hazard, because the next person to work on a circuit trusts it. A <strong>disconnect switch</strong> is a switch that visibly opens a circuit so equipment can be locked out for work; the disconnect for a motor must be within sight of the motor (NEC 430.102) so the person working on the motor can see that it is open. A <strong>motor control center (MCC)</strong> is a large assembly that puts many motor starters, their disconnects, and their controls in one lineup of plug-in buckets, common in plants with dozens of motors.</p>\n<p>The MCC is the industrial answer to the panelboard: instead of a starter in a separate box by each motor, the starters live together in the MCC, fed from a common bus, with each bucket containing a disconnect, a starter, and an overload relay for one motor. The buckets can be pulled out and replaced without shutting down the whole lineup, which keeps a plant running during maintenance. Working in an MCC is qualified-person work under NFPA 70E, with the same lockout, PPE, and arc-flash rules as any other energized equipment — the bus behind those buckets carries the full fault current of the plant.</p>"
    },
    {
      "heading": "Working Clearances, Grounding & Bonding",
      "html": "<p><strong>NEC 110.26</strong> requires working clearances around electrical equipment so a person can work on it safely: the depth of the clear space depends on the voltage and the conditions (from 3 feet at 0–150 V to 4 feet at higher voltages in the usual conditions), the width is at least 30 inches or the width of the equipment, and the height is at least 6.5 feet. The space must be kept clear — it is not storage space, and a panel blocked by boxes or pallets is a code violation and a real hazard, because the person who needs to open that panel in an emergency cannot get to it.</p>\n<p><strong>Grounding and bonding</strong> tie all the metal parts of the system together and to the earth, so a fault to a metal enclosure has a low-impedance path back to the source and the overcurrent device clears it quickly. The <strong>equipment grounding conductor</strong> runs with the circuit conductors in the conduit; the <strong>grounding electrode system</strong> connects the service to the earth; and the <strong>bonding</strong> of conduit, panels, and equipment enclosures makes them all one conductive system. A loose or missing ground is one of the most dangerous faults in a plant, because it leaves an enclosure energized with nothing to trip the breaker — and it is found by inspection and testing, not by waiting for a shock.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the working clearance in front of a panel as storage space. NEC 110.26 requires that space to be kept clear — a blocked panel is a code violation and a hazard in an emergency.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Industrial wiring runs in conduit (EMT, RMC, IMC, PVC, flexible) or on cable tray, each governed by its own NEC Chapter 3 article.</li>\n<li>Conductor ampacity comes from Table 310.16 (75°C column usually), adjusted for ambient temperature and for more than three conductors in a conduit.</li>\n<li>Motor conductors: 125% of nameplate FLA (NEC 430.22). Voltage drop: 3% branch circuit, 5% total.</li>\n<li>Panelboards divide a feeder into branch circuits; disconnects must be within sight of the motor (NEC 430.102); MCCs group many starters in plug-in buckets on a common bus.</li>\n<li>Working clearances (NEC 110.26): 3–4 feet deep, at least 30 inches wide, 6.5 feet high — and kept clear, never used for storage.</li>\n<li>Grounding and bonding give faults a low-impedance path so the overcurrent device clears them; a missing ground leaves an enclosure energized.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a conductor from the breaker size instead of the load and the ampacity table. The breaker protects the conductor; the load and the table set the conductor size.</div>\n<p><strong>Ready-to-Work link:</strong> If you can name the conduit types, explain derating, and state the working clearance rules, you have this module. Module 11 covers troubleshooting control circuits.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Conduit", "def": "Pipe that protects conductors and lets them be pulled and replaced; EMT, RMC, IMC, PVC, and flexible types." },
    { "term": "EMT", "def": "Electrical metallic tubing; thin-wall steel conduit for indoor use." },
    { "term": "Rigid metal conduit (RMC)", "def": "Heavy-wall steel conduit for harsh locations and threaded connections." },
    { "term": "PVC conduit", "def": "Plastic conduit for corrosive and underground locations." },
    { "term": "Cable tray", "def": "An open support system that carries large numbers of cables in a plant." },
    { "term": "Ampacity", "def": "The current a conductor can carry continuously without exceeding its temperature rating." },
    { "term": "Derating", "def": "Reducing a conductor's ampacity for high ambient temperature or for many conductors in one conduit." },
    { "term": "Panelboard", "def": "A distribution point that divides a feeder into branch circuits, each with its own breaker." },
    { "term": "Disconnect switch", "def": "A switch that visibly opens a circuit so equipment can be locked out; must be within sight of the motor." },
    { "term": "Motor control center (MCC)", "def": "A large assembly of many motor starters in plug-in buckets on a common bus." },
    { "term": "Working clearance (NEC 110.26)", "def": "The clear space required around electrical equipment: 3–4 feet deep, at least 30 inches wide, 6.5 feet high." },
    { "term": "Equipment grounding conductor", "def": "The conductor that runs with the circuit conductors and bonds equipment enclosures to ground." },
    { "term": "Voltage drop", "def": "The loss of voltage along a conductor; limited to 3% for a branch circuit and 5% total." },
    { "term": "Conduit fill", "def": "The limit on how many conductors may be installed in a conduit, so they can be pulled and can shed heat." },
    { "term": "Bucket", "def": "A plug-in unit in an MCC containing the disconnect, starter, and overload for one motor." }
  ],
  "video": {
    "title": "Suitable Wiring Methods [110.8], 2023 NEC, (6min:45sec)",
    "embedUrl": "https://www.youtube.com/embed/tRObutlpOew",
    "note": "A focused look at NEC 110.8 and suitable wiring methods — which wiring methods the Code recognizes and how the choice is made for a given location.",
    "more": [
      { "title": "Commercial Electric Knowledge, understanding 277-480V Wiring, and Parallel Feeds #electrican", "url": "https://www.youtube.com/watch?v=MCmuFDhBfIo" },
      { "title": "Inside a Massive Commercial Electrical Project — Job Walkthrough", "url": "https://www.youtube.com/watch?v=cqdS1oQ073c" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A panel is blocked by stacked boxes so a worker cannot stand in front of it. Which NEC rule is violated, and what is the required clear depth at 480 V in usual conditions?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NEC 110.26 (working clearances) is violated. Step 2: The required clear depth is 3 to 4 feet depending on conditions (3.5–4 feet at 480 V in the usual conditions). Step 3: The space must be kept clear — it is not storage space.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor's nameplate FLA is 14 A. What is the minimum ampacity for its branch-circuit conductors per NEC 430.22?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 125% of FLA. Step 2: 14 × 1.25 = 17.5 A. Step 3: The conductors must have an ampacity of at least 17.5 A before any derating.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Six current-carrying conductors run in one conduit. What derating factor applies, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 4–6 conductors are derated to 80% of the Table 310.16 ampacity. Step 2: The conductors heat each other in the shared conduit. Step 3: The derated ampacity must still carry the load — if it does not, use larger conductors or another conduit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A motor is installed in a corrosive washdown area. Which conduit type fits, and which does not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PVC conduit fits — it resists corrosion. Step 2: EMT (thin-wall steel) does not fit — it corrodes in a washdown area. Step 3: Rigid metal conduit with proper fittings could also work, but PVC is the usual choice for corrosive locations.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A plant has 40 motors. Why would it use a motor control center (MCC) instead of 40 separate starter boxes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An MCC groups all the starters in one lineup on a common bus, with a disconnect, starter, and overload for each motor in a plug-in bucket. Step 2: A bucket can be pulled and replaced without shutting down the whole lineup. Step 3: It saves space, simplifies wiring, and keeps maintenance fast.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor's disconnect switch is installed in another room, out of sight of the motor. What is wrong with this?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NEC 430.102 requires the disconnect to be within sight of the motor. Step 2: The person working on the motor must be able to see that the disconnect is open. Step 3: A disconnect out of sight cannot be verified by the worker, so the motor must be locked out at a disconnect the worker can see — or the installation must be corrected.</p>"
    }
  ],
  "quiz": [
    {
      "q": "EMT is:",
      "choices": ["Heavy-wall steel conduit for harsh locations", "Thin-wall steel conduit for indoor use", "Plastic conduit for corrosive locations", "An open cable support system"],
      "answer": 1,
      "explanation": "Correct: (b). EMT is thin-wall steel tubing for indoor use. (a) That is rigid metal conduit. (c) That is PVC conduit. (d) That is cable tray."
    },
    {
      "q": "Conductor ampacity is found in:",
      "choices": ["NEC Table 310.16", "NEC Table 240.6(A)", "NEC Article 700", "The motor's nameplate"],
      "answer": 0,
      "explanation": "Correct: (a). Table 310.16 lists conductor ampacities. (b) Table 240.6(A) lists standard overcurrent device sizes. (c) Article 700 covers emergency systems. (d) The nameplate gives FLA, not conductor ampacity."
    },
    {
      "q": "When 4–6 current-carrying conductors share a conduit, their ampacity is derated to:",
      "choices": ["100%", "80%", "50%", "125%"],
      "answer": 1,
      "explanation": "Correct: (b). The adjustment factor for 4–6 conductors is 80%. (a) 100% applies to 1–3 conductors. (c) 50% applies to 21–30 conductors. (d) 125% is a sizing factor, not a derating factor."
    },
    {
      "q": "The disconnect for a motor must be:",
      "choices": ["In the main office", "Within sight of the motor, per NEC 430.102", "At least 100 feet away", "Inside the motor terminal box"],
      "answer": 1,
      "explanation": "Correct: (b). Within sight, so the worker can see it is open. (a) The office is not within sight. (c) Distance is not the rule — sight is. (d) The disconnect is a separate device."
    },
    {
      "q": "NEC 110.26 working clearances require the space in front of electrical equipment to be:",
      "choices": ["Used for storage", "Kept clear, at least 30 inches wide and 6.5 feet high", "Painted yellow", "Locked at all times"],
      "answer": 1,
      "explanation": "Correct: (b). The space must be kept clear for safe work. (a) Storage in the clearance is a violation. (c) Paint color is not the rule. (d) Locking is not the rule."
    },
    {
      "q": "A motor control center (MCC) is:",
      "choices": ["A single motor starter", "A large assembly of many motor starters in plug-in buckets on a common bus", "A type of conduit", "A VFD"],
      "answer": 1,
      "explanation": "Correct: (b). An MCC groups many starters in one lineup. (a) A single starter is a starter, not an MCC. (c) Conduit is a wiring method. (d) A VFD is a speed control device."
    },
    {
      "q": "The equipment grounding conductor's job is to:",
      "choices": ["Carry the normal load current", "Provide a low-impedance fault path so the overcurrent device clears a ground fault", "Increase the voltage", "Cool the conductors"],
      "answer": 1,
      "explanation": "Correct: (b). It bonds enclosures to ground so faults clear quickly. (a) Normal current flows in the phase conductors, not the ground. (c) Grounding does not raise voltage. (d) Grounding does not cool conductors."
    },
    {
      "q": "Voltage drop on a branch circuit is usually limited to:",
      "choices": ["3%", "10%", "25%", "50%"],
      "answer": 0,
      "explanation": "Correct: (a). 3% for a branch circuit, 5% total. (b), (c), and (d) are far too large and would starve the motor of voltage."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Industrial Wiring Methods &amp; Panels: Quick Reference</h3>\n<p><strong>Core idea:</strong> Conduit protects conductors and lets them be replaced. Fill limits, bend limits, and support rules keep conductors pullable and cool.</p>\n<p><strong>Conduit:</strong> EMT (thin-wall, indoor) · RMC (heavy-wall, harsh) · IMC (in between) · PVC (corrosive, underground) · Flexible (vibration, short runs). Cable tray for many cables.</p>\n<p><strong>Ampacity:</strong> Table 310.16 (75°C column usually), derated for ambient temperature and for more than three conductors (4–6 = 80%). Motor conductors: 125% of FLA. Voltage drop: 3% branch, 5% total.</p>\n<p><strong>Equipment:</strong> Panelboard (branch distribution) · Disconnect (within sight of the motor, NEC 430.102) · MCC (many starters in plug-in buckets on a common bus).</p>\n<p><strong>Clearances (NEC 110.26):</strong> 3–4 ft deep, ≥30 in wide, 6.5 ft high — kept clear, never storage.</p>\n<p><strong>Self-check:</strong> Name the conduit types and state the working clearance rules. If you can, you have this module.</p>\n"
};
