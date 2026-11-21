// con102 - Module 6: Geometry II: Volume & Concrete Quantities
module.exports = {
  "number": 6,
  "slug": "geometry-volume-concrete-quantities",
  "title": "Geometry II: Volume & Concrete Quantities",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate the volume of rectangular prisms, cylinders, and slabs.",
    "Convert cubic inches to cubic feet and cubic feet to cubic yards.",
    "Work out concrete quantities for a slab, a footing, and a wall.",
    "Apply a waste factor to a concrete order and round up to the nearest half yard.",
    "Explain why concrete is ordered in cubic yards and how slump affects the pour."
  ],
  "sections": [
    {
      "heading": "Volume: Length \u00d7 Width \u00d7 Height",
      "html": "<p><strong>Volume</strong> is how much space a three-dimensional shape holds, and for a rectangular shape it is length \u00d7 width \u00d7 height. A box 2 feet long, 2 feet wide, and 2 feet high holds 8 cubic feet. Volume is always in cubic units: cubic inches, cubic feet, or cubic yards. The conversions are the cubes of the linear ones: 1 cubic foot = 12 \u00d7 12 \u00d7 12 = 1,728 cubic inches, and 1 cubic yard = 3 \u00d7 3 \u00d7 3 = 27 cubic feet.</p>\n<p>To convert cubic inches to cubic feet, divide by 1,728. To convert cubic feet to cubic yards, divide by 27. A volume of 54 cubic feet is 54 \u00f7 27 = 2 cubic yards exactly. A volume of 40 cubic feet is 40 \u00f7 27 = 1.48 cubic yards \u2014 and since concrete is ordered in whole or half yards, that order becomes 1.5 cubic yards before waste, or 2 cubic yards with a 10% waste factor (1.48 \u00d7 1.10 = 1.63, rounded up to 2).</p>\n<div class=\"callout\"><strong>Key idea:</strong> Volume is length \u00d7 width \u00d7 height. 1 cubic foot = 1,728 cubic inches and 1 cubic yard = 27 cubic feet \u2014 never 12 and never 3.</div>"
    },
    {
      "heading": "Slabs: The Most Common Concrete Calculation",
      "html": "<p>A concrete slab is a flat rectangular prism: its volume is length \u00d7 width \u00d7 thickness, with every measurement in the same unit. A slab 20 feet long, 12 feet wide, and 4 inches thick is worked out in feet: 4 inches is 4/12 = 1/3 foot (0.333 feet), so the volume is 20 \u00d7 12 \u00d7 0.333 = 80 cubic feet, which is 80 \u00f7 27 = 2.96 cubic yards. With 10% waste that is 2.96 \u00d7 1.10 = 3.26 cubic yards, ordered as 3.5 cubic yards.</p>\n<p>The thickness conversion is where most slab errors happen. 4 inches is 1/3 foot, 6 inches is 1/2 foot, and 3 inches is 1/4 foot. A fast method is to work in inches and divide by 1,728 at the end, or to use the shortcut that a 4-inch slab covers about 81 square feet per cubic yard, and a 6-inch slab covers about 54 square feet per cubic yard. Check: 20 \u00d7 12 = 240 square feet at 4 inches is 240 \u00f7 81 = 2.96 cubic yards \u2014 the same answer, which is the point of having two methods.</p>\n<p>Slabs are rarely exactly the designed thickness: the ground settles, the forms flex, and the subgrade is uneven. That is why the waste factor exists \u2014 10% is standard for a slab on grade, and more if the subgrade is rough. Ordering short is the expensive mistake: a second truck for half a yard costs more than the extra half yard on the first truck.</p>"
    },
    {
      "heading": "Footings, Walls & Cylinders",
      "html": "<p>A <strong>footing</strong> is a long rectangular prism: length \u00d7 width \u00d7 depth. A footing 40 feet long, 16 inches (1 1/3 feet) wide, and 8 inches (2/3 foot) deep has a volume of 40 \u00d7 1.333 \u00d7 0.667 = 35.6 cubic feet, which is 35.6 \u00f7 27 = 1.32 cubic yards. A <strong>wall</strong> is the same shape standing up: a wall 30 feet long, 8 inches thick, and 8 feet high is 30 \u00d7 0.667 \u00d7 8 = 160 cubic feet, or 5.93 cubic yards.</p>\n<p>A <strong>cylinder</strong> \u2014 a round footing, a column, or a sonotube \u2014 has a volume of \u03c0 \u00d7 radius\u00b2 \u00d7 height. A round footing 2 feet across and 3 feet deep has a radius of 1 foot and a volume of 3.14 \u00d7 1 \u00d7 3 = 9.42 cubic feet, or 0.35 cubic yards. Four of them need 1.4 cubic yards. The radius mistake is the classic error here too: a 2-foot diameter is a 1-foot radius, and using the diameter as the radius quadruples the answer.</p>\n<p>For a whole job, the volumes are added: slab plus footings plus walls, then the waste factor is applied to the total, then the order is rounded up to the nearest half yard. Concrete is batched in cubic yards and delivered by the truck, and a truck typically carries 8 to 10 cubic yards \u2014 so a 3.5-yard order is a partial load, and a 12-yard order is two trucks or one large one, depending on the supplier.</p>"
    },
    {
      "heading": "Slump, Strength & Ordering",
      "html": "<p>Concrete is specified by its <strong>strength</strong> (in psi \u2014 pounds per square inch, commonly 3,000 psi for a slab or 4,000 psi for a driveway) and its <strong>slump</strong>, which measures how wet and workable the mix is. Slump is tested by filling a cone, lifting it, and measuring how far the concrete slumps down: a 4-inch slump is a stiff mix for a slab, a 6-inch slump is a workable mix for a pour with reinforcement. Adding water on site to make a stiff mix easier to place weakens the concrete \u2014 the water-cement ratio is the strength, and extra water is a permanent strength loss.</p>\n<p>When you order concrete, you give the supplier the strength, the slump, the total cubic yards, the aggregate size, and any admixtures such as air entrainment for freeze-thaw climates. You also give the delivery time, the access route, and the pour rate \u2014 a truck that waits too long on site starts to set, and a pour that outruns the finishing crew leaves a slab that cannot be finished properly.</p>\n<p>These are planning and calculation exercises. Placing, finishing, and curing concrete are hands-on skills learned on site with an experienced crew \u2014 this module teaches you to order the right amount, not to finish a slab by reading about it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Volume = length \u00d7 width \u00d7 height. 1 cubic foot = 1,728 cubic inches; 1 cubic yard = 27 cubic feet.</li>\n<li>Slab: convert thickness to feet first (4 in = 1/3 ft, 6 in = 1/2 ft), then multiply, divide by 27, add 10% waste, round up to the nearest half yard.</li>\n<li>Footings and walls are rectangular prisms; cylinders are \u03c0 \u00d7 radius\u00b2 \u00d7 height.</li>\n<li>Check a slab two ways: the multiplication and the square-feet-per-yard shortcut (4 in \u2248 81 sq ft per yard).</li>\n<li>Slump measures workability; adding water on site weakens concrete permanently.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using inches for thickness with feet for length and width. Convert everything to the same unit before multiplying.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the diameter as the radius in a cylinder. Halve the diameter first \u2014 using the diameter quadruples the volume.</div>\n<p><strong>Ready-to-Work link:</strong> If you can order concrete for a 20 \u00d7 12-foot, 4-inch slab with 10% waste, you have this module. Module 7 covers lumber and engineered wood.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Volume",
      "def": "The amount of space inside a three-dimensional shape, measured in cubic units."
    },
    {
      "term": "Cubic foot",
      "def": "A volume 12 \u00d7 12 \u00d7 12 inches; 1 cubic foot = 1,728 cubic inches."
    },
    {
      "term": "Cubic yard",
      "def": "A volume 3 \u00d7 3 \u00d7 3 feet; 1 cubic yard = 27 cubic feet."
    },
    {
      "term": "Slab",
      "def": "A flat concrete pad, such as a floor or patio, poured on grade or on a deck."
    },
    {
      "term": "Footing",
      "def": "The wide concrete base that spreads a building's weight onto the soil."
    },
    {
      "term": "Slump",
      "def": "A test of how wet and workable fresh concrete is, measured in inches of drop."
    },
    {
      "term": "PSI",
      "def": "Pounds per square inch \u2014 the measure of concrete's compressive strength."
    },
    {
      "term": "Waste factor",
      "def": "Extra material allowed for uneven subgrade, spills, and over-excavation, usually 10%."
    },
    {
      "term": "Subgrade",
      "def": "The prepared ground beneath a slab or footing."
    },
    {
      "term": "Cylinder",
      "def": "A round solid; its volume is \u03c0 \u00d7 radius\u00b2 \u00d7 height."
    },
    {
      "term": "Sonotube",
      "def": "A round cardboard form used to pour concrete columns and footings."
    },
    {
      "term": "Air entrainment",
      "def": "Tiny air bubbles added to concrete to protect it from freeze-thaw damage."
    },
    {
      "term": "Water-cement ratio",
      "def": "The ratio of water to cement in a mix; more water means weaker concrete."
    },
    {
      "term": "Batch",
      "def": "A single load of concrete mixed at the plant."
    },
    {
      "term": "On grade",
      "def": "Poured directly on the prepared ground, as a slab on grade."
    }
  ],
  "video": {
    "title": "How to Prep, Form & Pour a Concrete Slab for beginners \u2014 Start to Finish",
    "embedUrl": "https://www.youtube.com/embed/3vz7s0COJV0",
    "note": "A start-to-finish slab pour: prep, formwork, rebar, pouring, and finishing. Watch the quantities in play \u2014 a 12 \u00d7 14-foot, 6-inch slab \u2014 and work out its volume in cubic yards yourself before the pour starts.",
    "more": [
      {
        "title": "How to Pour a Concrete Slab for Beginners DIY",
        "url": "https://www.youtube.com/watch?v=k1XFWNT7pAM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A slab is 20 feet long, 12 feet wide, and 4 inches thick. How many cubic yards of concrete does it need before waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 4 inches = 4/12 = 1/3 foot (0.333 ft). Step 2: Volume = 20 \u00d7 12 \u00d7 0.333 = 80 cubic feet. Step 3: 80 \u00f7 27 = 2.96 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the answer to Problem 1, how much concrete should be ordered with 10% waste, rounded up to the nearest half yard?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 2.96 \u00d7 1.10 = 3.26 cubic yards. Step 2: The nearest half yard above 3.26 is 3.5 cubic yards. Step 3: Order 3.5 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A footing is 40 feet long, 16 inches wide, and 8 inches deep. Work out its volume in cubic yards.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert to feet: 16 in = 1 1/3 ft (1.333), 8 in = 2/3 ft (0.667). Step 2: Volume = 40 \u00d7 1.333 \u00d7 0.667 = 35.6 cubic feet. Step 3: 35.6 \u00f7 27 = 1.32 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A round footing is 2 feet across and 3 feet deep. What is its volume in cubic feet (use \u03c0 = 3.14)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Radius = 2 \u00f7 2 = 1 foot. Step 2: Volume = 3.14 \u00d7 1\u00b2 \u00d7 3 = 9.42 cubic feet. Step 3: In cubic yards that is 9.42 \u00f7 27 = 0.35 cubic yards.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A wall is 30 feet long, 8 inches thick, and 8 feet high. How many cubic yards of concrete does it need, and how much with 10% waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 8 inches = 2/3 foot (0.667). Step 2: Volume = 30 \u00d7 0.667 \u00d7 8 = 160 cubic feet = 160 \u00f7 27 = 5.93 cubic yards. Step 3: With 10% waste: 5.93 \u00d7 1.10 = 6.52 cubic yards, ordered as 7.0 cubic yards (the next half yard up).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 12 \u00d7 14-foot slab is 6 inches thick. Use the square-feet-per-yard shortcut (6-inch slab \u2248 54 sq ft per cubic yard) to estimate the concrete, then check it by multiplication.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 12 \u00d7 14 = 168 square feet. Step 2: Shortcut: 168 \u00f7 54 = 3.11 cubic yards. Step 3: Check: 6 inches = 1/2 foot; 168 \u00d7 0.5 = 84 cubic feet; 84 \u00f7 27 = 3.11 cubic yards. Both methods agree.</p>"
    }
  ],
  "quiz": [
    {
      "q": "One cubic yard equals:",
      "choices": [
        "3 cubic feet",
        "9 cubic feet",
        "27 cubic feet",
        "144 cubic feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A cubic yard is 3 \u00d7 3 \u00d7 3 = 27 cubic feet. (a) 3 is the number of feet in a yard. (b) 9 is square feet in a square yard. (d) 144 is square inches in a square foot."
    },
    {
      "q": "A slab 20 feet by 12 feet by 4 inches thick needs, before waste:",
      "choices": [
        "2.96 cubic yards",
        "8 cubic yards",
        "80 cubic yards",
        "0.33 cubic yards"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 20 \u00d7 12 \u00d7 1/3 = 80 cubic feet; 80 \u00f7 27 = 2.96 cubic yards. (b) 8 is the volume in tens of cubic feet, not yards. (c) 80 is cubic feet, not yards. (d) 0.33 is the thickness in feet."
    },
    {
      "q": "With 10% waste, 2.96 cubic yards should be ordered as:",
      "choices": [
        "2.96 cubic yards",
        "3.0 cubic yards",
        "3.5 cubic yards",
        "3.26 cubic yards exactly"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 2.96 \u00d7 1.10 = 3.26, rounded up to the nearest half yard = 3.5. (a) That is no waste. (b) 3.0 is less than the waste-adjusted amount. (d) Concrete is ordered in half-yard increments, not to two decimals."
    },
    {
      "q": "4 inches in feet is:",
      "choices": [
        "0.25 feet",
        "1/3 foot",
        "0.5 feet",
        "4 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 4 \u00f7 12 = 1/3 foot (0.333). (a) 0.25 feet is 3 inches. (c) 0.5 feet is 6 inches. (d) 4 feet is 48 inches."
    },
    {
      "q": "A cylinder's volume uses:",
      "choices": [
        "Diameter \u00d7 height",
        "\u03c0 \u00d7 radius\u00b2 \u00d7 height",
        "\u03c0 \u00d7 diameter \u00d7 height",
        "Length \u00d7 width \u00d7 height"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cylinder volume is \u03c0 \u00d7 radius\u00b2 \u00d7 height. (a) Diameter without squaring or pi is wrong. (c) Using the diameter instead of the radius squared quadruples the answer. (d) That is a rectangular prism's volume."
    },
    {
      "q": "A round footing 2 feet across and 3 feet deep holds:",
      "choices": [
        "18.84 cubic feet",
        "9.42 cubic feet",
        "37.68 cubic feet",
        "3.14 cubic feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Radius 1 foot: 3.14 \u00d7 1 \u00d7 3 = 9.42 cubic feet. (a) That uses the diameter as the radius (3.14 \u00d7 4 \u00d7 3 = 37.68 is (c)). (c) That is the diameter-as-radius error. (d) That is pi alone."
    },
    {
      "q": "One cubic foot equals:",
      "choices": [
        "12 cubic inches",
        "144 cubic inches",
        "1,728 cubic inches",
        "27 cubic inches"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A cubic foot is 12 \u00d7 12 \u00d7 12 = 1,728 cubic inches. (a) 12 is inches in a foot. (b) 144 is square inches in a square foot. (d) 27 is cubic feet in a cubic yard."
    },
    {
      "q": "Adding water to a concrete mix on site:",
      "choices": [
        "Makes it stronger",
        "Has no effect",
        "Weakens it permanently by raising the water-cement ratio",
        "Makes it set faster"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Extra water raises the water-cement ratio and permanently reduces strength. (a) Water does the opposite. (b) Water changes the mix. (d) Extra water slows setting and weakens the concrete."
    }
  ],
  "studyGuide": "\n<h3>Module 6 \u2014 Geometry II: Volume & Concrete: Quick Reference</h3>\n<p><strong>Core idea:</strong> Volume is length \u00d7 width \u00d7 height. Convert everything to the same unit first, then divide by 27 for cubic yards.</p>\n<p><strong>Conversions:</strong> 1 cu ft = 1,728 cu in \u00b7 1 cu yd = 27 cu ft \u00b7 4 in = 1/3 ft \u00b7 6 in = 1/2 ft.</p>\n<p><strong>Slab:</strong> L \u00d7 W \u00d7 thickness (ft) \u2192 \u00f7 27 \u2192 \u00d7 1.10 waste \u2192 round up to the nearest half yard.</p>\n<p><strong>Shortcuts:</strong> 4-in slab \u2248 81 sq ft per cu yd \u00b7 6-in slab \u2248 54 sq ft per cu yd. <strong>Cylinder:</strong> \u03c0 \u00d7 radius\u00b2 \u00d7 height (halve the diameter first).</p>\n<p><strong>Slump:</strong> Measures workability. Adding water on site weakens concrete permanently.</p>\n<p><strong>Self-check:</strong> Order concrete for a 20 \u00d7 12-foot, 4-inch slab with 10% waste. If you can, you have this module.</p>\n"
};
