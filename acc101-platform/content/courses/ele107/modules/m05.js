// ele107 - Module 5: Motor Nameplates & Connections
module.exports = {
  "number": 5,
  "slug": "motor-nameplates-connections",
  "title": "Motor Nameplates & Connections",
  "estTime": "3–4 hours",
  "objectives": [
    "Read every field on a motor nameplate: HP, volts, amps, phase, frequency, rpm, frame, service factor, and insulation class.",
    "Explain full-load amps (FLA), locked-rotor amps (LRA), and service factor (SF).",
    "Describe dual-voltage motor connections and how the leads are joined for low and high voltage.",
    "Explain wye and delta motor connections and when each is used.",
    "Use the nameplate to select overloads, conductors, and replacement motors."
  ],
  "sections": [
    {
      "heading": "The Nameplate Is the Motor's Identity Card",
      "html": "<p>Every motor carries a nameplate — a stamped metal plate that is the motor's complete specification in miniature. The fields you will use most are <strong>HP</strong> (rated horsepower), <strong>volts</strong> (rated voltage, often dual, such as 230/460), <strong>amps</strong> (full-load amps at each voltage), <strong>PH</strong> (phase: 1 or 3), <strong>HZ</strong> (frequency, 60 in North America), <strong>RPM</strong> (rated speed under full load), <strong>FRAME</strong> (the physical size and mounting), and <strong>DUTY</strong> (continuous or intermittent). Other fields include <strong>service factor (SF)</strong>, <strong>insulation class</strong>, <strong>enclosure type</strong>, <strong>efficiency</strong>, and the <strong>NEMA design letter</strong> from Module 4.</p>\n<p>The nameplate is not decoration — it is the document that sizes everything downstream. The full-load amps set the conductor size (NEC 430.22 requires conductors rated at least 125% of the nameplate FLA) and the overload setting. The voltage rating must match the supply. The frame number must match the machine's mounting. When a motor fails, the nameplate is what you copy onto the purchase order for its replacement, and a wrong field on that order is a wrong motor on the dock.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Never size anything from horsepower alone. The nameplate FLA, voltage, speed, frame, and design letter are all part of the specification — copy the whole plate when you order a replacement.</div>"
    },
    {
      "heading": "FLA, LRA, and Service Factor",
      "html": "<p><strong>Full-load amps (FLA)</strong> is the current the motor draws at its rated horsepower and rated voltage — the number you use for conductor and overload sizing. <strong>Locked-rotor amps (LRA)</strong>, sometimes shown as a code letter, is the inrush current at start, typically five to eight times FLA. The code letter (A through V) on the nameplate lets you look up the locked-rotor kVA per horsepower, which is what the supply and the starter must handle. <strong>Service factor (SF)</strong>, usually 1.0 or 1.15, is the amount of continuous overload the motor can carry: an SF of 1.15 on a 10 hp motor means it can carry 11.5 hp continuously without overheating — but service factor is a safety margin, not a rating to plan around, and running in the service factor range shortens the motor's life.</p>\n<p><strong>Insulation class</strong> (B, F, or H) tells you how hot the windings may run: class F insulation, common today, is rated for 155°C. <strong>Enclosure</strong> tells you what the motor can survive: open drip-proof (ODP) for clean indoor spaces, totally enclosed fan-cooled (TEFC) for dusty or wet locations, and explosion-proof for hazardous areas. Putting an ODP motor in a washdown area is a short road to a burned winding.</p>"
    },
    {
      "heading": "Dual-Voltage Connections: Low and High",
      "html": "<p>Most three-phase motors are wound for two voltages, such as 230/460 V, with nine leads (or twelve on larger motors) brought out to the terminal box. For the <strong>low-voltage connection</strong> (230 V), the windings are connected in parallel so each winding sees 230 V; for the <strong>high-voltage connection</strong> (460 V), the same windings are connected in series so each winding still sees 230 V while the line sees 460 V. The current at 230 V is double the current at 460 V for the same horsepower — that is why the nameplate shows two amp values, such as 13.4/6.7 A.</p>\n<p>The exact lead numbers for each connection are printed on the <strong>connection diagram</strong>, usually on the nameplate itself or inside the terminal box cover. A typical nine-lead low-voltage connection joins leads 4-7, 5-8, and 6-9, with the supply on 1, 2, and 3; the high-voltage connection joins 4-5-6 together, with the supply on 1, 2, and 3 and leads 7, 8, and 9 tied to 1, 2, and 3 respectively. The numbers vary by manufacturer — follow the diagram on that motor, never your memory of another motor's diagram. Connecting a motor for the wrong voltage is one of the fastest ways to destroy it: low voltage makes it draw excess current and overheat, and high voltage saturates the iron and burns the windings.</p>"
    },
    {
      "heading": "Wye and Delta Connections",
      "html": "<p>Three-phase windings can be connected in <strong>wye (Y)</strong> — one end of each winding joined at a common neutral point — or in <strong>delta (Δ)</strong> — the windings joined end to end in a triangle. In a wye connection, the line voltage is √3 (1.732) times the phase voltage, while the line current equals the phase current. In a delta connection, the line voltage equals the phase voltage, while the line current is √3 times the phase current. The same motor can often be connected either way, and the dual-voltage trick of the previous section is really a wye/delta or series/parallel choice made with the leads.</p>\n<p>For a technician, the practical rules are simple: the nameplate and the connection diagram decide the connection, not a rule of thumb; a motor connected in wye on a supply meant for delta will be undervolted, draw excess current, and run hot; and a motor connected in delta on a supply meant for wye will be overvolted and can fail quickly. When you open a terminal box, photograph the existing connections before you touch anything, and verify the new connection against the diagram twice — once before you tighten the nuts and once after.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting a remembered lead-number pattern instead of the diagram on the motor. Lead numbering and connection schemes vary by manufacturer and by motor size — the diagram on the nameplate or terminal-box lid is the only authority for that motor.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The nameplate lists HP, volts, amps, phase, Hz, rpm, frame, service factor, insulation class, enclosure, and design letter — copy all of it when ordering a replacement.</li>\n<li>FLA sizes conductors (125% per NEC 430.22) and overloads; LRA is the starting inrush; SF is a margin, not a rating to plan around.</li>\n<li>Dual-voltage motors connect windings in parallel for low voltage and in series for high voltage; current doubles at the low voltage.</li>\n<li>Wye: line voltage = √3 × phase voltage. Delta: line current = √3 × phase current.</li>\n<li>Always follow the connection diagram on that specific motor — never memory, never another motor's diagram.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing conductors from horsepower tables instead of the nameplate FLA. NEC Article 430 sizes motor conductors from the nameplate full-load current, and the table values are for when no nameplate is available.</div>\n<p><strong>Ready-to-Work link:</strong> If you can read a nameplate out loud, explain FLA versus LRA, and describe the low- and high-voltage lead connections, you have this module. Module 6 covers transformers.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Nameplate", "def": "The stamped plate on a motor listing its ratings: HP, volts, amps, phase, frequency, rpm, frame, and more." },
    { "term": "Full-load amps (FLA)", "def": "The current a motor draws at rated horsepower and voltage; used for conductor and overload sizing." },
    { "term": "Locked-rotor amps (LRA)", "def": "The inrush current at start, typically 5–8 times FLA; also shown as a code letter." },
    { "term": "Service factor (SF)", "def": "The continuous overload a motor can carry, such as 1.15; a margin, not a rating to plan around." },
    { "term": "Insulation class", "def": "The temperature rating of the winding insulation (B, F, or H); class F is rated 155°C." },
    { "term": "Enclosure", "def": "The motor's protection against its environment: ODP, TEFC, explosion-proof, and others." },
    { "term": "Frame", "def": "The standardized physical size and mounting dimensions of a motor." },
    { "term": "Dual-voltage motor", "def": "A motor wound to run on two voltages, such as 230/460 V, by changing the lead connections." },
    { "term": "Connection diagram", "def": "The diagram on the nameplate or terminal-box lid showing how to join the leads for each voltage." },
    { "term": "Wye (Y) connection", "def": "Three windings joined at a common neutral point; line voltage is √3 times phase voltage." },
    { "term": "Delta (Δ) connection", "def": "Three windings joined end to end in a triangle; line current is √3 times phase current." },
    { "term": "Code letter", "def": "A letter on the nameplate (A–V) giving locked-rotor kVA per horsepower." },
    { "term": "Duty", "def": "Whether a motor is rated for continuous running or intermittent service." },
    { "term": "Terminal box", "def": "The box on the motor where the supply conductors connect to the motor leads." }
  ],
  "video": {
    "title": "How to Read a Motor Nameplate (Before You Buy a Converter or VFD)",
    "embedUrl": "https://www.youtube.com/embed/2GKiSdZxkkc",
    "note": "A field-by-field walkthrough of a real motor nameplate — HP, volts, amps, phase, and frequency — with the five numbers you need before sizing anything downstream.",
    "more": [
      { "title": "What is a Nameplate for Electricians", "url": "https://www.youtube.com/watch?v=O7oxJGa6XvY" },
      { "title": "How To Size Electric Motors for Any Project: A Beginners Guide #085", "url": "https://www.youtube.com/watch?v=64Ky4mJE7bU" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor nameplate reads 230/460 V, 13.4/6.7 A. If it is connected for 230 V, what current does it draw at full load? If connected for 460 V?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The first number in each pair is the low-voltage value. Step 2: At 230 V the full-load current is 13.4 A. Step 3: At 460 V it is 6.7 A — half the current, because the same horsepower at double the voltage needs half the current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor's FLA is 14 A. What is the minimum conductor ampacity required by NEC 430.22?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NEC 430.22 requires conductors rated at least 125% of nameplate FLA. Step 2: 14 × 1.25 = 17.5 A. Step 3: The conductors must have an ampacity of at least 17.5 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 hp motor has a service factor of 1.15. How much horsepower can it carry continuously, and should you plan a load at that level?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 10 hp × 1.15 = 11.5 hp. Step 2: It can carry 11.5 hp continuously without immediate overheating. Step 3: No — service factor is a safety margin, not a rating to plan around; running in the SF range shortens the motor's life.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A dual-voltage motor is connected for 460 V but the supply is actually 230 V. What symptoms would you expect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each winding receives only half its design voltage. Step 2: The motor draws excess current trying to make rated torque, runs hot, and may fail to start the load. Step 3: The fix is to reconnect the leads for the low-voltage connection per the diagram — with the power off, locked out, and verified dead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In a wye connection, the phase voltage is 120 V. What is the line voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In wye, line voltage = √3 × phase voltage. Step 2: 1.732 × 120 = 208 V. Step 3: This is the familiar 208Y/120 V system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You are replacing a failed TEFC motor on an outdoor pump. The supplier offers an ODP motor of the same HP, speed, and frame at a lower price. Should you take it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: ODP (open drip-proof) is for clean indoor locations; an outdoor pump needs TEFC (totally enclosed fan-cooled) to keep out rain, dust, and washdown. Step 3: The ODP motor would fail early from contamination even though its electrical ratings match.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The nameplate value used to size motor conductors under NEC 430.22 is the:",
      "choices": [ "Horsepower", "Full-load amps (FLA)", "Locked-rotor amps", "Service factor" ],
      "answer": 1,
      "explanation": "Correct: (b). Conductors are sized at 125% of nameplate FLA. (a) Horsepower alone does not set conductor size. (c) LRA sizes the starter and the supply, not the conductors. (d) Service factor is a margin, not a sizing value."
    },
    {
      "q": "A motor nameplate reads 230/460 V, 13.4/6.7 A. At 460 V the full-load current is:",
      "choices": [ "13.4 A", "6.7 A", "20.1 A", "26.8 A" ],
      "answer": 1,
      "explanation": "Correct: (b). The second number is the high-voltage current — half the low-voltage current. (a) 13.4 A is the 230 V current. (c) and (d) are sums and doubles that do not apply."
    },
    {
      "q": "Service factor 1.15 on a 10 hp motor means it can carry:",
      "choices": [ "15 hp forever with no wear", "11.5 hp continuously, as a safety margin", "10 hp only if the voltage is 15% high", "1.15 hp at all times" ],
      "answer": 1,
      "explanation": "Correct: (b). 10 × 1.15 = 11.5 hp, a margin not a planning rating. (a) Running in the SF range shortens life. (c) Service factor has nothing to do with voltage. (d) 1.15 is a multiplier, not a horsepower."
    },
    {
      "q": "For the low-voltage connection of a dual-voltage motor, the windings are connected in:",
      "choices": [ "Series", "Parallel", "Short circuit", "Open circuit" ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel for low voltage, so each winding sees the low voltage. (a) Series is the high-voltage connection. (c) A short circuit is a fault. (d) An open circuit carries no current."
    },
    {
      "q": "In a wye connection, the line voltage equals:",
      "choices": [ "The phase voltage", "√3 times the phase voltage", "Half the phase voltage", "Three times the phase voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). Line voltage = 1.732 × phase voltage in wye. (a) That is true in delta, not wye. (c) and (d) are not the wye relationship."
    },
    {
      "q": "The connection diagram you must follow is found:",
      "choices": [ "In any textbook", "On the nameplate or inside the terminal-box lid of that specific motor", "On the breaker panel door", "In the NEC" ],
      "answer": 1,
      "explanation": "Correct: (b). The diagram on that motor is the only authority for its leads. (a) Textbooks show examples, not your motor. (c) The panel door does not carry motor diagrams. (d) The NEC does not publish motor lead diagrams."
    },
    {
      "q": "A TEFC enclosure is chosen over ODP when the motor will be:",
      "choices": [ "In a clean indoor office", "Outdoors or in a dusty or wet location", "Running at half speed", "Connected for low voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). TEFC keeps out dust and water. (a) ODP is fine in a clean indoor space. (c) Speed does not set the enclosure. (d) Voltage does not set the enclosure."
    },
    {
      "q": "Locked-rotor amps (LRA) on a nameplate tell you:",
      "choices": [ "The running current at full load", "The inrush current at start, typically 5–8 times FLA", "The current when the motor is off", "The ground-fault current" ],
      "answer": 1,
      "explanation": "Correct: (b). LRA is the starting inrush. (a) That is FLA. (c) A stopped motor draws no current. (d) Ground-fault current is a fault value, not a nameplate value."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Motor Nameplates &amp; Connections: Quick Reference</h3>\n<p><strong>Core idea:</strong> The nameplate is the whole specification — HP, volts, amps, phase, Hz, rpm, frame, SF, insulation, enclosure, design letter.</p>\n<p><strong>FLA:</strong> Sizes conductors (125% per NEC 430.22) and overloads. <strong>LRA:</strong> Starting inrush, 5–8× FLA. <strong>SF:</strong> Margin (e.g., 1.15), not a planning rating.</p>\n<p><strong>Dual voltage:</strong> Parallel windings for low voltage, series for high voltage; current doubles at the low voltage.</p>\n<p><strong>Wye:</strong> Line V = √3 × phase V. <strong>Delta:</strong> Line I = √3 × phase I.</p>\n<p><strong>Watch out:</strong> Follow the diagram on that motor, never memory; photograph leads before touching them.</p>\n<p><strong>Self-check:</strong> Read a nameplate out loud and explain FLA, LRA, and SF. If you can, you have this module.</p>\n"
};
