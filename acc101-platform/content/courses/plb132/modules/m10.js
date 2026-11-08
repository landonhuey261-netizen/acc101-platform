// Plumbing 132 - Module 10: Potable Water Treatment
module.exports = {
  "number": 10,
  "slug": "potable-water-treatment",
  "title": "Potable Water Treatment",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what hardness is and how it is measured in grains per gallon and ppm.",
    "Describe how an ion-exchange water softener works and how to size one.",
    "Describe filtration, carbon filtration, and reverse osmosis and what each removes.",
    "Explain how to test water and how to read a water test report.",
    "Describe the plumbing requirements for treatment equipment: drains, backflow protection, and bypass valves."
  ],
  "sections": [
    {
      "heading": "What's in the Water",
      "html": "\n<p>Potable water is water safe to drink, and a plumber is often the first person a homeowner calls when the water tastes wrong, stains fixtures, or leaves spots on dishes. The most common problem is <strong>hardness</strong>: dissolved calcium and magnesium. Hard water is not a health hazard, but it leaves scale in water heaters and pipes, spots on fixtures, and soap that will not lather. Water is classed by hardness: <strong>soft</strong> is 0–60 parts per million (ppm), <strong>moderately hard</strong> is 61–120 ppm, <strong>hard</strong> is 121–180 ppm, and <strong>very hard</strong> is over 180 ppm (USGS scale).</p>\n<p>Hardness is measured two ways: <strong>parts per million (ppm)</strong>, as calcium carbonate, and <strong>grains per gallon (gpg)</strong>. One grain per gallon equals 17.1 ppm. A water test report that says 171 ppm is saying 10 gpg — hard water. Other things a test report shows: <strong>iron</strong> (which stains fixtures orange and feeds iron bacteria), <strong>manganese</strong> (black stains), <strong>pH</strong> (acidic water below 7.0 corrodes copper and brass), <strong>total dissolved solids (TDS)</strong>, and <strong>chlorine</strong> (the disinfectant the city adds, which affects taste and odor).</p>\n<div class=\"callout\"><strong>Key idea:</strong> 1 gpg = 17.1 ppm. Divide a ppm hardness number by 17.1 to get grains per gallon — and grains per gallon is the number a softener is sized in.</div>\n<p>The plumber's job is not to be a water chemist. It is to test the water, read the report, match the problem to the right equipment, and install that equipment so it works and so it cannot contaminate the drinking water. The last part is the plumber's special responsibility: every treatment device connects to the potable supply, so every one needs backflow protection.</p>"
    },
    {
      "heading": "Water Softeners: Ion Exchange",
      "html": "\n<p>A <strong>water softener</strong> removes hardness by <strong>ion exchange</strong>. Hard water flows through a tank of resin beads that are charged with sodium. The beads swap their sodium for the calcium and magnesium in the water — the hardness sticks to the beads and the sodium goes into the water. The water that comes out is soft. When the beads are full of hardness, the softener <strong>regenerates</strong>: it flushes the beads with a strong salt brine, which swaps the hardness back off and recharges the beads with sodium, and the hardness goes down the drain.</p>\n<p>Softener sizing is a multiplication. <strong>Grains of hardness per day = hardness (gpg) × people × 75 gallons per person per day.</strong> Then multiply by the days between regenerations (usually 7) to get the capacity the softener must hold. Worked example: a family of 4, hardness 15 gpg, regenerating every 7 days: 15 × 4 × 75 = 4,500 grains per day; 4,500 × 7 = <strong>31,500 grains</strong> — so a 32,000-grain softener is the right size, and a 24,000-grain unit would regenerate too often and waste salt and water.</p>\n<p>Iron matters in sizing: clear-water iron adds to the hardness load, roughly <strong>4 grains per gallon for every 1 ppm of iron</strong> (some sources say 5 — the point is that iron counts). Iron above about 2–3 ppm should be removed by an iron filter before the softener, because iron fouls the resin. A softener also adds a small amount of sodium to the water — a consideration for people on very low-sodium diets, who may want a reverse-osmosis tap at the kitchen sink for drinking water.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Grains per day = gpg × people × 75. Times 7 days = the capacity to buy. Iron counts as hardness — about 4 gpg per 1 ppm of iron.</div>"
    },
    {
      "heading": "Filtration, Carbon, and Reverse Osmosis",
      "html": "\n<p><strong>Filtration</strong> removes particles. A <strong>sediment filter</strong> catches sand, rust, and grit and protects the equipment downstream — it belongs first in line, before a softener or a carbon filter. Filters are rated by micron size: a 5-micron filter catches finer particles than a 20-micron filter, and a finer filter clogs faster and needs changing more often.</p>\n<p><strong>Carbon filtration</strong> removes chlorine, taste, and odor. Activated carbon adsorbs chlorine and organic chemicals onto its surface. A whole-house carbon filter protects fixtures and makes every tap taste better; a carbon filter ahead of a reverse-osmosis unit protects the RO membrane, because chlorine destroys the membrane. Carbon filters must be changed on schedule — a spent carbon filter can grow bacteria.</p>\n<p><strong>Reverse osmosis (RO)</strong> pushes water through a semi-permeable membrane that blocks dissolved solids: salts, minerals, lead, arsenic, and most other contaminants. An RO unit is a point-of-use device, usually under the kitchen sink, producing a few gallons a day for drinking and cooking. It wastes water — several gallons down the drain for every gallon produced — and it removes the good minerals along with the bad, so the water tastes flat. RO water is also aggressive to metal: the product water should run in plastic tubing, not copper.</p>"
    },
    {
      "heading": "Installing Treatment Equipment",
      "html": "\n<p>Every treatment device connects to the potable water supply, so every installation has the same three plumbing requirements. <strong>First, backflow protection.</strong> A softener's brine tank, an RO unit's drain connection, and a filter housing must never be able to siphon contaminated water back into the drinking supply — the installation needs the backflow preventer or air gap the code requires for that device. <strong>Second, a drain.</strong> Softeners discharge brine and rinse water on regeneration, and RO units discharge reject water continuously — the drain connection must have an air gap and must not be able to back up into the device.</p>\n<p><strong>Third, a bypass.</strong> Every softener and whole-house filter needs a bypass valve (or a bypass built into its valve head) so the house still has water while the device is serviced, and so the device can be isolated without shutting off the house. The bypass is also how the installer fills and flushes a new softener without sending resin beads into the house plumbing.</p>\n<p>Install the equipment where it can be serviced: a softener needs floor space, a drain nearby, a power outlet for its control valve, and room to carry in salt. A whole-house filter needs clearance to unscrew its housing. Test the water after the installation — hardness at the softened taps should read near zero — and show the homeowner how to add salt, change the filter, and use the bypass.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Hardness is calcium and magnesium. USGS: soft 0–60 ppm, moderately hard 61–120, hard 121–180, very hard over 180. 1 gpg = 17.1 ppm.</li>\n<li>Softener sizing: grains per day = gpg × people × 75; × 7 days = capacity. Iron adds about 4 gpg per 1 ppm.</li>\n<li>Ion exchange swaps calcium and magnesium for sodium; regeneration flushes the resin with brine and sends the hardness to the drain.</li>\n<li>Sediment filter first (protects everything downstream), carbon removes chlorine/taste/odor, RO removes dissolved solids at a point of use and wastes water.</li>\n<li>Every treatment install needs backflow protection, a drain with an air gap, and a bypass valve.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a softener by the number of bathrooms or the size of the house. Capacity is set by hardness, people, and water use — not by square footage.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Connecting a softener or RO drain directly to a drain line with no air gap. A backed-up drain can push contaminated water back into the treatment device and into the drinking supply. Air gap, always.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER 02303, Water Pressure, is the companion to this module; treatment is tested on the Michigan journeyman exam under water supply and cross-connection control. If you can size a softener and list the three installation requirements, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Potable water",
      "def": "Water safe to drink."
    },
    {
      "term": "Hardness",
      "def": "Dissolved calcium and magnesium in water; causes scale, spots, and poor soap lather."
    },
    {
      "term": "Grains per gallon (gpg)",
      "def": "A unit of hardness; 1 gpg = 17.1 ppm as calcium carbonate."
    },
    {
      "term": "ppm",
      "def": "Parts per million; a unit for the concentration of a substance in water."
    },
    {
      "term": "Ion exchange",
      "def": "The softening process: resin beads swap sodium for calcium and magnesium."
    },
    {
      "term": "Regeneration",
      "def": "Flushing a softener's resin with salt brine to recharge it with sodium and send the hardness to the drain."
    },
    {
      "term": "Resin",
      "def": "The beads in a softener tank that hold sodium and capture hardness."
    },
    {
      "term": "Sediment filter",
      "def": "A filter that removes particles — sand, rust, grit — and protects downstream equipment."
    },
    {
      "term": "Carbon filter",
      "def": "A filter of activated carbon that removes chlorine, taste, and odor."
    },
    {
      "term": "Reverse osmosis (RO)",
      "def": "Pushing water through a semi-permeable membrane that blocks dissolved solids; a point-of-use treatment."
    },
    {
      "term": "Iron",
      "def": "Dissolved iron in water; stains fixtures orange and fouls softener resin."
    },
    {
      "term": "pH",
      "def": "How acidic or alkaline water is; water below pH 7.0 is acidic and can corrode copper and brass."
    },
    {
      "term": "TDS",
      "def": "Total dissolved solids — the total of all dissolved minerals and salts in the water."
    },
    {
      "term": "Air gap",
      "def": "A physical separation between a drain connection and the drain, so a backup cannot siphon contaminated water back into the supply."
    },
    {
      "term": "Bypass valve",
      "def": "A valve that lets water flow around a treatment device so the house still has water while the device is serviced."
    }
  ],
  "video": {
    "title": "How Does a Water Softener Work? Explained Simply",
    "embedUrl": "https://www.youtube.com/embed/18Lu58g4v4I",
    "note": "Ion exchange in plain language: resin beads, the sodium swap, regeneration, and the brine tank — the softener's whole cycle in a few minutes.",
    "more": [
      {
        "title": "What is reverse osmosis? #science #water",
        "url": "https://www.youtube.com/watch?v=-_sr7mzhVsE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A water test reports hardness of 171 ppm. Convert it to grains per gallon and classify the water.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 1 gpg = 17.1 ppm. Step 2: 171 ÷ 17.1 = <strong>10 gpg</strong>. Step 3: 10 gpg × 17.1 = 171 ppm, which is in the 61–120 ppm range — <strong>moderately hard</strong> (and 10 gpg is on the hard side of moderate).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A family of 5 has water at 20 gpg and wants to regenerate every 7 days. What softener capacity do they need?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Grains per day = gpg × people × 75 = 20 × 5 × 75 = 7,500 grains per day. Step 2: × 7 days = 7,500 × 7 = <strong>52,500 grains</strong>. Step 3: Buy a softener rated at least 52,500 grains — a 48,000-grain unit would regenerate too often.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A softener is sized for 10 gpg, but the water also has 2 ppm of clear-water iron. How much extra hardness load does the iron add?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Iron adds about 4 gpg per 1 ppm. Step 2: 2 ppm × 4 = <strong>8 gpg</strong> of extra load. Step 3: The softener should be sized for 10 + 8 = 18 gpg — or, better, an iron filter should remove the iron before the softener, since iron above about 2–3 ppm fouls the resin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A homeowner's new RO unit is installed under the kitchen sink, but the product water runs through copper tubing to the faucet. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: RO product water has almost no dissolved minerals, so it is aggressive to metal. Step 2: It will corrode copper tubing and pick up copper. Step 3: The product water should run in the plastic tubing supplied with the unit, not in copper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A whole-house carbon filter has not been changed in three years. The homeowner says the water tastes fine. What is the risk?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A spent carbon filter stops removing chlorine and can become a place for bacteria to grow. Step 2: Taste alone does not prove the filter is working — the carbon is exhausted even if the water still tastes acceptable. Step 3: Change carbon filters on the manufacturer's schedule, and test the water after the change.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You are installing a water softener. List the three plumbing requirements the installation must meet, and explain why each matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Backflow protection</strong> — the brine tank and drain connections must not be able to siphon contaminated water into the drinking supply. Step 2: <strong>A drain with an air gap</strong> — the softener discharges brine on regeneration, and a backed-up drain must not push water back into the device. Step 3: <strong>A bypass valve</strong> — so the house still has water while the softener is serviced and so the device can be isolated without shutting off the house.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Hardness is caused by dissolved:",
      "choices": [
        "Sodium and potassium",
        "Calcium and magnesium",
        "Iron and manganese only",
        "Chlorine and fluoride"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Calcium and magnesium are the hardness minerals. (a) Sodium and potassium are the softening agents, not the hardness. (c) Iron and manganese cause staining, not hardness. (d) Chlorine and fluoride are additives, not hardness."
    },
    {
      "q": "171 ppm of hardness equals:",
      "choices": [
        "1 gpg",
        "10 gpg",
        "17.1 gpg",
        "171 gpg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 171 ÷ 17.1 = 10 gpg. (a) 1 gpg is 17.1 ppm. (c) 17.1 is the conversion factor, not the answer. (d) ppm and gpg are not the same unit."
    },
    {
      "q": "A water softener removes hardness by:",
      "choices": [
        "Filtering out particles",
        "Ion exchange — resin beads swap sodium for calcium and magnesium",
        "Boiling the water",
        "Adding chlorine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ion exchange is the softening process. (a) Filtration removes particles, not dissolved hardness. (c) Boiling does not soften water. (d) Chlorine disinfects; it does not soften."
    },
    {
      "q": "A family of 4 at 15 gpg regenerating every 7 days needs a softener of about:",
      "choices": [
        "24,000 grains",
        "31,500 grains",
        "45,000 grains",
        "10,000 grains"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 15 × 4 × 75 = 4,500 grains per day; × 7 = 31,500 grains. (a) is too small and would regenerate too often. (c) is oversized for this load. (d) is far too small."
    },
    {
      "q": "A carbon filter's job is to:",
      "choices": [
        "Remove hardness",
        "Remove chlorine, taste, and odor",
        "Remove dissolved salts",
        "Soften the water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Activated carbon adsorbs chlorine and the chemicals that cause taste and odor. (a) and (d) are the softener's job. (c) is reverse osmosis's job."
    },
    {
      "q": "Reverse osmosis is best used as:",
      "choices": [
        "A whole-house softener",
        "A point-of-use device at the kitchen sink for drinking water",
        "A replacement for a sediment filter",
        "A drain treatment"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RO produces a few gallons a day for drinking and cooking. (a) RO cannot supply a whole house. (c) RO needs a sediment filter ahead of it, not instead of one. (d) RO is a supply treatment, not a drain treatment."
    },
    {
      "q": "Every water treatment installation needs:",
      "choices": [
        "A larger water heater",
        "Backflow protection, a drain with an air gap, and a bypass valve",
        "A new water meter",
        "A pressure tank"
      ],
      "answer": 1,
      "explanation": "Correct: (b). These three protect the drinking supply, handle the discharge, and allow service. (a) Treatment does not require a larger heater. (c) A meter is not part of the treatment install. (d) A pressure tank is for well systems, not treatment."
    },
    {
      "q": "Clear-water iron adds to the softener load at about:",
      "choices": [
        "1 gpg per 1 ppm",
        "4 gpg per 1 ppm",
        "17.1 gpg per 1 ppm",
        "75 gpg per 1 ppm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 4 grains per gallon for every 1 ppm of iron. (a) understates the load. (c) 17.1 is the ppm-to-gpg conversion factor, not the iron factor. (d) 75 is the gallons-per-person-per-day figure, not an iron factor."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Potable Water Treatment: Quick Reference</h3>\n<p><strong>Hardness:</strong> Calcium and magnesium. USGS: soft 0–60 ppm, moderately hard 61–120, hard 121–180, very hard &gt;180. 1 gpg = 17.1 ppm.</p>\n<p><strong>Softener sizing:</strong> Grains/day = gpg × people × 75 gal/person/day. × 7 days = capacity. Iron adds ~4 gpg per 1 ppm.</p>\n<p><strong>Ion exchange:</strong> Resin beads swap sodium for hardness; regeneration flushes the resin with brine and sends hardness to the drain.</p>\n<p><strong>Filtration:</strong> Sediment filter first (protects downstream) · Carbon removes chlorine/taste/odor · RO removes dissolved solids at a point of use, wastes water, and its product water runs in plastic, not copper.</p>\n<p><strong>Installation:</strong> Backflow protection · drain with an air gap · bypass valve. Test the water after the install — softened taps should read near zero hardness.</p>\n<p><strong>Watch out:</strong> Size by hardness, people, and water use — not by the size of the house. Change carbon filters on schedule.</p>\n<p><strong>Self-check:</strong> Size a softener for a family of 4 at 15 gpg, and list the three installation requirements, without notes.</p>\n"
};
