// ele107 - Module 6: Transformers: Principles & Single-Phase
module.exports = {
  "number": 6,
  "slug": "transformers-principles-single-phase",
  "title": "Transformers: Principles & Single-Phase",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a transformer transfers energy by electromagnetic induction without moving parts.",
    "Use the turns ratio to calculate secondary voltage and current.",
    "Explain step-up and step-down transformers and where each is used.",
    "Describe transformer construction: core, windings, insulation, and cooling.",
    "Explain transformer losses: copper loss, core loss, and efficiency."
  ],
  "sections": [
    {
      "heading": "A Static Machine: How Transformers Work",
      "html": "<p>A transformer is the only major electrical machine with no moving parts. It has two or more windings — the <strong>primary</strong> and the <strong>secondary</strong> — wrapped around a shared laminated iron core. When alternating current flows in the primary, it creates a changing magnetic field in the core, and that changing field induces a voltage in the secondary (Faraday's law, from Module 1). Energy passes from one circuit to the other through the magnetic field, with no electrical connection between them. That isolation is itself useful: it lets one side be grounded differently from the other and blocks DC and many disturbances.</p>\n<p>Because transformers only work with changing fields, they only work on alternating current — a transformer on DC does nothing but draw a large current through the primary's low resistance. That is why the whole power grid is AC: transformers let us step voltage up for efficient long-distance transmission and step it down for safe use, something DC systems cannot do with a simple static device.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A transformer moves energy through magnetism, not through wires. Two windings share one core, and the changing field in the core is the link between them.</div>"
    },
    {
      "heading": "The Turns Ratio: Voltage Up, Current Down",
      "html": "<p>The whole behavior of a transformer is set by one number: the <strong>turns ratio</strong>, the number of turns in the primary divided by the number in the secondary (Np/Ns). Voltage follows the turns ratio directly: Vs/Vp = Ns/Np. A transformer with 1,000 turns on the primary and 100 on the secondary steps 480 V down to 48 V. The same ratio, inverted, sets the current: Is/Ip = Np/Ns. Step the voltage down by a factor of ten and the available current goes up by a factor of ten (minus small losses), because power in roughly equals power out.</p>\n<p>A <strong>step-down transformer</strong> has fewer secondary turns than primary turns and lowers the voltage — the common case in buildings, where 480 V is stepped down to 208Y/120 V or 120/240 V. A <strong>step-up transformer</strong> has more secondary turns and raises the voltage — used at power plants to send electricity over long distances at high voltage and low current, which keeps line losses small. The terms primary and secondary describe which side is fed and which side feeds the load, not which side has more turns.</p>"
    },
    {
      "heading": "Construction: Core, Windings, and Cooling",
      "html": "<p>The <strong>core</strong> is a stack of laminated silicon steel that carries the magnetic field from the primary to the secondary with as little loss as possible. The laminations, like those in a motor, break up eddy currents. The <strong>windings</strong> are copper (or aluminum) coils, insulated from each other and from the core, and the whole assembly is held in a tank or enclosure. Small transformers (under about 15 kVA) are usually <strong>dry-type</strong>, cooled by air; larger ones may be <strong>liquid-filled</strong>, with oil that both insulates and carries heat to radiators on the tank.</p>\n<p>Most distribution transformers have <strong>taps</strong> on the primary — extra connection points that let the turns ratio be adjusted by a few percent (commonly ±2.5% and ±5%) to compensate for a supply voltage that runs a little high or low. Changing a tap changes the secondary voltage by the same percentage. Taps are set with the transformer de-energized, and the setting should be recorded on the transformer and in the job file, because the next person to work on it needs to know where it is set.</p>"
    },
    {
      "heading": "Losses, Efficiency, and the 120/240 V Secondary",
      "html": "<p>No transformer is perfectly efficient. <strong>Copper loss</strong> (I²R loss) is the heat made by current in the windings; it grows with the square of the load current, so it is largest at full load. <strong>Core loss</strong> (hysteresis and eddy-current loss in the steel) happens whenever the transformer is energized, even with no load — it is the reason a transformer hums and feels warm on an empty building. Together they make a typical distribution transformer about 97–99% efficient at full load. Efficiency is highest near full load, which is one reason oversizing a transformer wastes energy: a lightly loaded transformer still pays its full core loss.</p>\n<p>The most familiar single-phase transformer in North America is the pole or pad transformer that feeds a house with <strong>120/240 V</strong>. Its secondary is <strong>center-tapped</strong>: the center tap is grounded and becomes the neutral, giving 120 V from either end to the neutral and 240 V across the whole winding. That is why a home has both 120 V circuits for lights and receptacles and 240 V circuits for the range, dryer, and air conditioner — all from one transformer and one center tap.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a transformer's kVA rating is its output in watts. kVA is apparent power — volts times amps — and the real power in watts depends on the load's power factor. Size transformers in kVA, not watts.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A transformer transfers energy through a changing magnetic field in a shared core — no moving parts, no electrical connection between windings, AC only.</li>\n<li>Turns ratio sets everything: Vs/Vp = Ns/Np, and current changes inversely.</li>\n<li>Step-down lowers voltage and raises available current; step-up does the opposite.</li>\n<li>Taps adjust the ratio a few percent to match the real supply voltage; set them de-energized and record the setting.</li>\n<li>Losses: copper loss (load-dependent) and core loss (always present when energized); efficiency peaks near full load.</li>\n<li>A center-tapped secondary gives 120/240 V: 120 V line-to-neutral, 240 V line-to-line.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Energizing a transformer on DC, or expecting a DC input to transform. A steady DC field induces nothing in the secondary — the transformer will draw a heavy current and overheat.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work out a secondary voltage from a turns ratio, explain step-up versus step-down, and say where 120/240 V comes from, you have this module. Module 7 covers three-phase transformer connections.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Transformer", "def": "A static device that changes AC voltage and current levels through a shared magnetic core." },
    { "term": "Primary winding", "def": "The winding connected to the supply; it creates the changing magnetic field." },
    { "term": "Secondary winding", "def": "The winding in which voltage is induced; it feeds the load." },
    { "term": "Turns ratio", "def": "The ratio of primary turns to secondary turns (Np/Ns); it sets the voltage and current ratios." },
    { "term": "Step-down transformer", "def": "A transformer with fewer secondary turns than primary turns; it lowers the voltage." },
    { "term": "Step-up transformer", "def": "A transformer with more secondary turns than primary turns; it raises the voltage." },
    { "term": "Core", "def": "The laminated steel that carries the magnetic field between the windings." },
    { "term": "Taps", "def": "Extra connection points on a winding that adjust the turns ratio by a few percent." },
    { "term": "Copper loss", "def": "Heat lost in the windings (I²R); it grows with the square of the load current." },
    { "term": "Core loss", "def": "Hysteresis and eddy-current loss in the steel; present whenever the transformer is energized." },
    { "term": "Center tap", "def": "A connection at the middle of a secondary winding, grounded as the neutral to give 120/240 V." },
    { "term": "Dry-type transformer", "def": "A transformer cooled by air, common for small indoor units." },
    { "term": "Liquid-filled transformer", "def": "A transformer cooled and insulated by oil, common for larger units." },
    { "term": "kVA", "def": "Kilovolt-amperes, the apparent-power rating of a transformer." },
    { "term": "Isolation", "def": "The lack of an electrical connection between primary and secondary, which blocks DC and separates grounding systems." }
  ],
  "video": {
    "title": "How does a Transformer work ?",
    "embedUrl": "https://www.youtube.com/embed/vh_aCAHThTQ",
    "note": "A clear animation of the primary, the core, and the secondary — watch the changing field in the core induce voltage in the secondary winding, and note how the turns ratio sets the output.",
    "more": [
      { "title": "Transformers Explained | A-Level Physics", "url": "https://www.youtube.com/watch?v=2EHD2dS6uYs" },
      { "title": "25. EQUIVALENT ELECTRICAL CIRCUIT OF SINGLE PHASE TRANSFORMER", "url": "https://www.youtube.com/watch?v=VVVjB2YML6U" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A transformer has 480 turns on the primary and 120 turns on the secondary. The primary is fed with 240 V. What is the secondary voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vs = Vp × (Ns/Np). Step 2: Vs = 240 × (120/480) = 240 × 0.25 = 60 V. Step 3: This is a step-down transformer with a 4:1 ratio.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A step-down transformer is rated 5 kVA, 480 V to 120 V, single-phase. What is the full-load secondary current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Secondary current I = kVA × 1,000 / V. Step 2: I = 5,000 / 120 = 41.7 A. Step 3: The secondary conductors and protection must be sized for about 42 A at full load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A transformer delivers 100 A at 120 V on the secondary. Its turns ratio is 4:1 (primary to secondary). What is the primary current, ignoring losses?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current changes inversely to voltage: Ip = Is × (Ns/Np). Step 2: Ip = 100 × (1/4) = 25 A. Step 3: The primary carries one-quarter of the secondary current because it works at four times the voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A building's supply measures 492 V but the transformer is tapped for 480 V, and the secondary voltage is running high. Which tap change fixes this, and how?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The supply is about 2.5% high (492/480 = 1.025). Step 2: Move the primary tap to the +2.5% tap, which adds turns to the primary. Step 3: More primary turns lowers the volts per turn, bringing the secondary back to its rated voltage. Make the change de-energized and record it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does a transformer hum and feel warm even when nothing is connected to its secondary?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Core loss — hysteresis and eddy currents in the steel — happens whenever the transformer is energized. Step 2: The magnetizing current keeps the core's field alternating, which makes the hum and the heat. Step 3: Copper loss is near zero at no load, but core loss is always there.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A home is fed by a center-tapped 120/240 V transformer. What voltage does a bedroom receptacle get, and what voltage does the electric range get?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The bedroom receptacle connects from one end of the secondary to the grounded center tap (neutral): 120 V. Step 2: The range connects across the whole secondary, end to end: 240 V. Step 3: Both voltages come from the same winding and the same center tap.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A transformer transfers energy from primary to secondary by:",
      "choices": [ "A direct wire connection", "A changing magnetic field in a shared core", "A rotating shaft", "A stream of electrons through the air" ],
      "answer": 1,
      "explanation": "Correct: (b). Energy passes through the magnetic field in the core. (a) There is no electrical connection between windings. (c) Transformers have no moving parts. (d) Electrons do not travel through the air."
    },
    {
      "q": "A transformer with 1,000 primary turns and 250 secondary turns fed with 480 V gives a secondary voltage of:",
      "choices": [ "480 V", "240 V", "120 V", "60 V" ],
      "answer": 2,
      "explanation": "Correct: (c). Vs = 480 × (250/1,000) = 120 V. (a) That would be a 1:1 ratio. (b) That would be a 2:1 ratio. (d) That would be an 8:1 ratio."
    },
    {
      "q": "When a transformer steps voltage down, the available current:",
      "choices": [ "Goes down by the same ratio", "Goes up by the same ratio", "Stays the same", "Goes to zero" ],
      "answer": 1,
      "explanation": "Correct: (b). Power is roughly conserved, so lower voltage means higher current. (a) That describes stepping voltage up. (c) Current must change to keep power balanced. (d) Current does not vanish."
    },
    {
      "q": "A transformer will not work on DC because:",
      "choices": [ "DC has too much voltage", "A steady DC field does not change, so nothing is induced in the secondary", "The core melts instantly", "DC cannot flow through copper" ],
      "answer": 1,
      "explanation": "Correct: (b). Induction needs a changing field. (a) Voltage level is not the issue. (c) The core does not melt; the winding overheats from excess current. (d) DC flows through copper easily."
    },
    {
      "q": "Copper loss in a transformer:",
      "choices": [ "Is present even with no load", "Grows with the square of the load current", "Happens only in the core", "Decreases as load increases" ],
      "answer": 1,
      "explanation": "Correct: (b). Copper loss is I²R loss. (a) That describes core loss. (c) Copper loss is in the windings. (d) It increases with load."
    },
    {
      "q": "Taps on a transformer are used to:",
      "choices": [ "Adjust the turns ratio a few percent to match the actual supply voltage", "Connect the transformer to the load", "Cool the windings", "Measure the core loss" ],
      "answer": 0,
      "explanation": "Correct: (a). Taps fine-tune the voltage ratio. (b) Load connections are made at the terminals. (c) Cooling is done by air or oil. (d) Core loss is measured by testing, not by taps."
    },
    {
      "q": "In a 120/240 V residential service, the 240 V comes from:",
      "choices": [ "A separate transformer", "Across the whole center-tapped secondary winding", "The neutral to ground", "A step-up transformer in the house" ],
      "answer": 1,
      "explanation": "Correct: (b). 240 V is end to end across the secondary. (a) One transformer supplies both voltages. (c) Neutral to ground is near zero volts. (d) No step-up transformer is in the house."
    },
    {
      "q": "A transformer's kVA rating is:",
      "choices": [ "Its output in watts", "Its apparent-power rating: volts times amps", "Its weight in kilograms", "Its efficiency percentage" ],
      "answer": 1,
      "explanation": "Correct: (b). kVA is apparent power. (a) Watts depend on the load's power factor. (c) Weight is not a power rating. (d) Efficiency is a separate percentage."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Transformers: Principles &amp; Single-Phase: Quick Reference</h3>\n<p><strong>Core idea:</strong> Energy crosses a shared core as a changing magnetic field. No moving parts, AC only, no electrical connection between windings.</p>\n<p><strong>Turns ratio:</strong> Vs/Vp = Ns/Np; current changes inversely (Is/Ip = Np/Ns).</p>\n<p><strong>Step-down:</strong> Fewer secondary turns, lower voltage, higher current. <strong>Step-up:</strong> The reverse.</p>\n<p><strong>Losses:</strong> Copper loss (I²R, load-dependent) · Core loss (hysteresis + eddy currents, always present when energized).</p>\n<p><strong>120/240 V:</strong> Center-tapped secondary — 120 V line-to-neutral, 240 V line-to-line.</p>\n<p><strong>Taps:</strong> ±2.5%/±5% ratio adjustment; set de-energized and record the setting.</p>\n<p><strong>Self-check:</strong> Work out a secondary voltage from a turns ratio and explain core loss vs copper loss. If you can, you have this module.</p>\n"
};
