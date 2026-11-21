// con105 - Module 3: Estimating Concrete Quantities
module.exports = {
  "number": 3,
  "slug": "estimating-concrete-quantities",
  "title": "Estimating Concrete Quantities",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute concrete volume for slabs, footings, walls, and columns.",
    "Convert cubic feet to cubic yards and add a waste factor.",
    "Estimate the number of bagged-mix bags for a small job.",
    "Explain how to order ready-mix: what to tell the plant and when.",
    "Check an estimate against the plan so the pour does not run short."
  ],
  "sections": [
    {
      "heading": "Volume: Length × Width × Depth",
      "html": "<p>Every concrete estimate starts the same way: volume equals length times width times depth, all in feet, giving cubic feet. A slab 24 feet by 18 feet and 6 inches deep is 24 × 18 × 0.5 = 216 cubic feet. A footing 54 feet long, 2 feet wide, and 1 foot deep is 54 × 2 × 1 = 108 cubic feet. A wall 27 feet long, 8 feet high, and 1 foot thick is 27 × 8 × 1 = 216 cubic feet. The formula never changes; only the shape does.</p>\n<p>The trap is the depth. Drawings give slab thickness in inches — 4 inches, 6 inches — and the math needs feet. Four inches is 1/3 of a foot, and 6 inches is 1/2 of a foot. Using 4 or 6 as the depth in feet would over-order by twelve times, so the first step of every estimate is converting inches to feet: divide by 12.</p>\n<p>For a round column or a footing pier, the volume is the area of the circle times the height: 3.14 × radius² × height. A 2-foot-diameter pier 4 feet deep is 3.14 × 1² × 4 = 12.56 cubic feet. Round numbers are fine for estimating, but the conversion to cubic yards must still be exact enough to order by.</p>"
    },
    {
      "heading": "Cubic Yards & the Waste Factor",
      "html": "<p>Ready-mix concrete is sold by the cubic yard, and one cubic yard is 27 cubic feet. To convert, divide the cubic feet by 27: a 216-cubic-foot slab is exactly 8 cubic yards. A 144-cubic-foot slab is 5-1/3 yards — and since the plant sells whole and partial yards, that order becomes 5-1/2 yards.</p>\n<p>No estimate is exact, so every order adds a waste factor — usually 10% — for spillage, over-excavation, uneven subgrade, and the concrete that stays in the pump and the truck. Eight yards plus 10% is 8.8, so the order is 9 yards. Ordering exactly the computed volume guarantees running short, and a short load means a cold joint where the second truck’s concrete meets the first truck’s setting concrete.</p>\n<p>The waste factor is not padding for sloppy work. It is the honest allowance for a real site: a footing trench that is an inch wider than the plan, a subgrade that dips, a wheelbarrow that spills. A good estimator adds the waste, orders the trucks, and still walks the site with a tape before the pour to check the numbers.</p>"
    },
    {
      "heading": "Bagged Mix for Small Jobs",
      "html": "<p>For small jobs — a fence post, a small pad, a repair — ready-mix trucks are too big, and bagged mix is the answer. An 80-pound bag of premixed concrete yields about 0.6 cubic feet when mixed with water. To find the bags, divide the job’s cubic feet by 0.6 and round up: a 4-by-4-foot pad 4 inches deep is 16 × 1/3 = 5.33 cubic feet, and 5.33 ÷ 0.6 = 8.9, so 9 bags.</p>\n<p>A 60-pound bag yields about 0.45 cubic feet, and a 40-pound bag about 0.3. The yield is printed on the bag, and it is the number to use — not a guess. Bagged mix is already proportioned, so the only field control is the water: add what the bag says, no more, and mix until it is uniform.</p>\n<p>Bagged mix costs far more per yard than ready-mix, so the crossover point matters: a job much over a cubic yard or two is usually cheaper by truck, even with the delivery charge. The estimator’s job is to run both numbers and pick the cheaper one that still gets the job done right.</p>"
    },
    {
      "heading": "Ordering Ready-Mix",
      "html": "<p>When you call the plant, the order has five parts: the mix designation and strength, the slump, the air content if it is exterior work, the total yards, and the delivery schedule — the time of the first truck and the spacing between trucks. A big pour needs trucks spaced so each arrives as the last one finishes, with no waiting and no gap.</p>\n<p>The schedule is the part most beginners get wrong. Trucks that arrive too close together sit and the concrete ages; trucks that arrive too far apart leave the crew standing and the first concrete setting before the next arrives. A good rule is to match the truck spacing to the placing rate: if the crew places a truckload in 20 minutes, the next truck comes every 20 minutes.</p>\n<p>Before the first truck arrives, the crew checks the forms, the rebar, the grade, and the access path, and stages the tools: screeds, floats, trowels, vibrators, and curing materials. The concrete waits for no one, and the cheapest minute on a pour is the minute spent checking before the truck arrives.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Volume is length × width × depth in feet; divide by 27 for cubic yards; add 10% for waste. Bagged mix: divide cubic feet by the bag yield and round up. Order by mix, slump, air, yards, and truck spacing — and check the forms before the first truck.</p>\n<p><strong>Common mistake:</strong> Using inches as feet for the depth. Four inches is 1/3 of a foot, not 4 feet — and the error over-orders by twelve times.</p>\n<p><strong>Common mistake:</strong> Ordering exactly the computed volume with no waste factor. The pour runs short and the second truck meets setting concrete at a cold joint.</p>\n<p><strong>Ready-to-Work link:</strong> If you can estimate a slab, a footing, and a wall in cubic yards with waste, and price the bagged alternative, you have this module. Module 4 builds the mold the concrete goes into: formwork.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cubic yard",
      "def": "A volume of 27 cubic feet; the unit ready-mix concrete is sold in."
    },
    {
      "term": "Waste factor",
      "def": "Extra concrete ordered beyond the computed volume, usually 10%, for spillage and uneven subgrade."
    },
    {
      "term": "Ready-mix",
      "def": "Concrete mixed at a batch plant and delivered by truck."
    },
    {
      "term": "Bagged mix",
      "def": "Premixed dry concrete in bags, mixed with water on site for small jobs."
    },
    {
      "term": "Yield",
      "def": "The volume of concrete one bag produces when mixed, about 0.6 cubic feet for an 80-pound bag."
    },
    {
      "term": "Cold joint",
      "def": "A weak seam where fresh concrete meets concrete that has already begun to set."
    },
    {
      "term": "Subgrade",
      "def": "The prepared soil or gravel surface a slab is poured on."
    },
    {
      "term": "Over-excavation",
      "def": "Digging deeper or wider than the plan, which increases the concrete needed."
    },
    {
      "term": "Slump",
      "def": "The inches a cone of fresh concrete settles; a measure of consistency."
    },
    {
      "term": "Air content",
      "def": "The percentage of tiny air bubbles in concrete for freeze-thaw protection."
    },
    {
      "term": "Placing rate",
      "def": "How fast a crew can place concrete, in cubic yards per hour or minutes per truck."
    },
    {
      "term": "Batch plant",
      "def": "The facility that proportions and mixes ready-mix concrete."
    },
    {
      "term": "Formwork",
      "def": "The molds that hold fresh concrete until it hardens."
    },
    {
      "term": "Footing",
      "def": "The widened base of a foundation that spreads the building’s load onto the soil."
    },
    {
      "term": "Pier",
      "def": "A round or square concrete column that carries a load down to a footing or soil."
    }
  ],
  "video": {
    "title": "How to Pour a Concrete Slab",
    "embedUrl": "https://www.youtube.com/embed/3vz7s0COJV0",
    "note": "A slab pour from start to finish: the mix, the placing, the screeding, and the finish. Watch the quantities in action — the crew’s volume math is what decides how many yards the truck brings, and the waste factor is what keeps the pour from running short.",
    "more": [
      {
        "title": "How to Install a Solid Concrete Slab",
        "url": "https://www.youtube.com/watch?v=si__JJXgjV0"
      },
      {
        "title": "Concrete Pad for Beginners",
        "url": "https://www.youtube.com/watch?v=2e-Qdy4W7Jg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A slab is 24 feet by 18 feet by 6 inches deep. What is its volume in cubic feet and cubic yards?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 6 inches = 0.5 feet. Volume = 24 × 18 × 0.5 = 216 cubic feet. Step 2: 216 ÷ 27 = 8 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same 8-cubic-yard slab needs a 10% waste factor. How many yards should be ordered?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 8 × 1.10 = 8.8 cubic yards. Step 2: Order 9 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A footing is 54 feet long, 2 feet wide, and 1 foot deep. How many cubic yards of concrete does it need?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Volume = 54 × 2 × 1 = 108 cubic feet. Step 2: 108 ÷ 27 = 4 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A small pad is 4 feet by 4 feet by 4 inches deep. How many 80-pound bags (0.6 cubic feet each) are needed?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Volume = 4 × 4 × 1/3 = 5.33 cubic feet. Step 2: 5.33 ÷ 0.6 = 8.9, so round up to 9 bags.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A wall is 27 feet long, 8 feet high, and 1 foot thick. How many cubic yards does it need, before waste?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Volume = 27 × 8 × 1 = 216 cubic feet. Step 2: 216 ÷ 27 = 8 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A crew places one truckload (9 cubic yards) every 30 minutes. How many cubic yards per hour is that, and how long will a 36-yard pour take?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 9 yards per 30 minutes = 18 yards per hour. Step 2: 36 ÷ 18 = 2 hours.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A slab 24 feet by 18 feet by 6 inches deep is how many cubic feet?",
      "choices": [
        "216",
        "432",
        "108",
        "2,592"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 24 × 18 × 0.5 = 216 cubic feet. (b) Uses 1 foot for the depth. (c) Uses 3 inches. (d) Uses 6 feet for the depth."
    },
    {
      "q": "216 cubic feet is how many cubic yards?",
      "choices": [
        "8",
        "216",
        "27",
        "5.33"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 216 ÷ 27 = 8. (b) Is the cubic-foot number. (c) Is the conversion factor. (d) Is 144 ÷ 27."
    },
    {
      "q": "The usual waste factor added to a concrete order is about:",
      "choices": [
        "0%",
        "10%",
        "50%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ten percent covers spillage and uneven subgrade. (a) Guarantees running short. (c) and (d) are far too much."
    },
    {
      "q": "Four inches expressed in feet is:",
      "choices": [
        "4 feet",
        "1/3 foot",
        "0.25 foot",
        "12 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 4 ÷ 12 = 1/3 foot. (a) Uses inches as feet. (c) Is 3 inches. (d) Inverts the conversion."
    },
    {
      "q": "An 80-pound bag of premixed concrete yields about:",
      "choices": [
        "0.6 cubic feet",
        "6 cubic feet",
        "27 cubic feet",
        "1 cubic yard"
      ],
      "answer": 0,
      "explanation": "Correct: (a). About 0.6 cubic feet per 80-pound bag. (b) Is ten times too much. (c) Is a cubic yard. (d) Is 27 cubic feet."
    },
    {
      "q": "A 4-by-4-foot pad 4 inches deep needs about how many 80-pound bags?",
      "choices": [
        "2",
        "5",
        "9",
        "27"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Volume is 5.33 cubic feet; 5.33 ÷ 0.6 = 8.9, so 9 bags. (a) and (b) are far too few. (d) Is the cubic-feet-per-yard number."
    },
    {
      "q": "Ordering exactly the computed volume with no waste factor risks:",
      "choices": [
        "A cold joint when the pour runs short",
        "Stronger concrete",
        "Faster setting",
        "Lower cost"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A short pour means the second truck meets setting concrete. (b) Waste does not change strength. (c) Waste does not change setting. (d) A short load costs more in delays and joints."
    },
    {
      "q": "When ordering ready-mix, the plant needs to know:",
      "choices": [
        "The mix, slump, air content, yards, and truck spacing",
        "Only the total yards",
        "Only the address",
        "The color of the truck"
      ],
      "answer": 0,
      "explanation": "Correct: (a). All five parts make the order work. (b) Yards alone leave the mix unspecified. (c) The address is needed but not enough. (d) Truck color is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Estimating Concrete — Quick Reference</h3>\n<p><strong>Core idea:</strong> Volume = length × width × depth in feet; ÷ 27 for cubic yards; add 10% for waste.</p>\n<ul>\n<li>Inches to feet first: 4 inches is 1/3 foot, 6 inches is 1/2 foot.</li><li>Bagged mix: cubic feet ÷ bag yield (0.6 for an 80-pound bag), round up.</li><li>Order by mix, slump, air, yards, and truck spacing matched to the placing rate.</li><li>A short pour makes a cold joint — the waste factor is not optional.</li>\n</ul>\n<div class=\"callout\"><strong>Watch out:</strong> Using inches as feet for the depth over-orders by twelve times.</div>\n<p><strong>Self-check:</strong> Estimate a slab, a footing, and a wall in cubic yards with waste, and price the bagged alternative.</p>\n"
};
