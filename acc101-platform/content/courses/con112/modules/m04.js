// con112 - Module 4: Quantity Takeoff: Framing, Drywall, and Finishes
module.exports = {
  "number": 4,
  "slug": "quantity-takeoff-framing-drywall-finishes",
  "title": "Quantity Takeoff: Framing, Drywall, and Finishes",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the three takeoff measurements: linear, area, and count.",
    "Calculate lumber quantities: studs, plates, joists, and rafters.",
    "Calculate drywall sheets from wall and ceiling areas, including openings.",
    "Calculate flooring, paint, and trim from areas and lengths.",
    "Explain how openings, waste, and pattern matching change a takeoff."
  ],
  "sections": [
    {
      "heading": "Linear, Area, and Count",
      "html": "<p>Every takeoff measurement is one of three kinds. <strong>Linear</strong> measures a length — feet of wall, feet of trim, feet of pipe. <strong>Area</strong> measures a surface — square feet of floor, drywall, roofing, or paint. <strong>Count</strong> measures items — each door, each window, each fixture. The estimator picks the right measurement for the item: a wall is linear for its plates and area for its drywall; a door is a count; a floor is an area.</p>\n<p>The unit follows the measurement. Linear items are bought by the foot or by the piece — a 2×4 stud is bought by the piece, a baseboard by the foot. Area items are bought by the square foot or by the sheet — drywall by the sheet, flooring by the square foot. Count items are bought each — a door is one door. A takeoff that measures an area item by count, or a count item by area, cannot be priced.</p>\n<p>Takeoff software has three tools that match the three measurements: a linear tool for lengths, an area tool for surfaces, and a count tool for items. The estimator uses the tool that matches the item, and the software adds the measurements up by division. On paper, the same three measurements are done with a scale ruler and a calculator — the tools change, the measurements do not.</p>\n"
    },
    {
      "heading": "Lumber: Studs, Plates, Joists, Rafters",
      "html": "<p>Framing lumber is counted by the piece, and the count comes from the spacing. A wall 40 feet long with studs at 16 inches on center has 40 × 12 ÷ 16 + 1 = 31 studs — the length in inches divided by the spacing, plus one for the end stud. The plates are linear: a wall has a bottom plate and a top plate, and often a double top plate, so a 40-foot wall has 40 × 3 = 120 linear feet of plate, bought in 8-, 10-, or 12-foot lengths.</p>\n<p>Joists and rafters are counted the same way, from their spacing. A floor 30 feet wide with joists at 16 inches on center has 30 × 12 ÷ 16 + 1 = 24 joists (rounded up from 23.5). The joist length is the span plus the bearing — the part that sits on the wall — and the estimator reads the span from the drawings, not from a guess. Rafters are counted from the roof's length and their spacing, and their length comes from the slope: a rafter on a 6-in-12 roof is longer than the horizontal run it covers.</p>\n<p>Lumber also needs a waste factor — usually 5% to 10% — for cutting, for warped pieces that are rejected, and for mistakes. A wall that needs 31 studs is ordered as 34, because three of them will be cut, warped, or wrong. The waste factor is not padding; it is the reality of working with a natural material.</p>\n"
    },
    {
      "heading": "Drywall: Area Minus Openings",
      "html": "<p>Drywall is measured in square feet, then converted to sheets. A wall 40 feet long and 8 feet high is 320 square feet; a standard drywall sheet is 4 feet by 8 feet, or 32 square feet, so the wall needs 320 ÷ 32 = 10 sheets — before waste. A ceiling is measured the same way, by its area. The takeoff measures each wall and ceiling, adds them up, and divides by the sheet size.</p>\n<p>Openings are handled by a rule: small openings are not deducted, large ones are. A door or a window under about 15 square feet is usually not deducted, because the drywall cut out of the opening is used elsewhere and the cutting labor costs more than the material saved. A large opening — a garage door, a big window wall — is deducted, because the saved material is real. The estimator follows the company's rule and states it, because the rule changes the count.</p>\n<p>Drywall waste is higher than lumber waste — usually 10% to 15% — because sheets are cut to fit, offcuts are often unusable, and a damaged sheet is a lost sheet. A room that needs 10 sheets is ordered as 11 or 12. The estimator also counts the finish: joint compound, tape, and screws are priced by the square foot of drywall, so the drywall area drives the finish quantities too.</p>\n"
    },
    {
      "heading": "Flooring, Paint, and Trim",
      "html": "<p>Flooring is measured by area, with a waste factor for the pattern. A room 12 feet by 15 feet is 180 square feet; hardwood with a straight pattern needs about 5% waste, so 189 square feet; a diagonal pattern needs 10% to 15%, because more boards are cut at angles. Carpet is measured by the square yard — 180 square feet is 20 square yards — and the waste depends on the roll width and the room's shape. Tile is measured by the square foot plus 10% for cuts and breakage.</p>\n<p>Paint is measured by area, and the coverage is on the can: a gallon of paint covers about 350 square feet per coat, so a room with 500 square feet of wall needs about 1.5 gallons per coat, and two coats need 3 gallons. The estimator measures the wall area, subtracts large openings, divides by the coverage, and multiplies by the coats. Primer is a separate coat with its own coverage.</p>\n<p>Trim is linear: baseboard, casing, and crown molding are measured in linear feet along the walls they run on, and the takeoff adds a waste factor for joints and cuts — usually 5% to 10%. A room 12 by 15 feet has a perimeter of 54 feet, so it needs 54 linear feet of baseboard, plus waste, minus the door openings where baseboard does not run. The estimator measures the perimeter, not the area, because trim is bought by the foot.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Takeoff measurements are linear (length), area (surface), and count (items). Lumber is counted from spacing: length in inches ÷ spacing + 1. Drywall is area ÷ sheet size, with waste 10–15%. Flooring is area plus pattern waste; paint is area ÷ coverage × coats; trim is linear feet of perimeter minus openings.</p>\n<p><strong>Common mistake:</strong> Forgetting the +1 in a spacing count. Studs at 16 inches over 40 feet are 31, not 30 — the first stud starts the count and the last one closes it.</p>\n<p><strong>Common mistake:</strong> Deducting small openings from drywall. A door under about 15 square feet is usually not deducted, because the cut-out is reused and the cutting labor costs more than the material saved.</p>\n<p><strong>Ready-to-Work link:</strong> If you can count studs from spacing, calculate drywall sheets from an area, and price paint from coverage, you have this module. Module 5 covers labor and material costing.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Linear takeoff",
      "def": "Measuring a length — feet of wall, trim, or pipe."
    },
    {
      "term": "Area takeoff",
      "def": "Measuring a surface — square feet of floor, drywall, roofing, or paint."
    },
    {
      "term": "Count takeoff",
      "def": "Counting items — each door, window, or fixture."
    },
    {
      "term": "Stud",
      "def": "A vertical framing member in a wall, spaced 16 or 24 inches on center."
    },
    {
      "term": "Plate",
      "def": "The horizontal framing member at the top or bottom of a wall; a wall has a bottom plate and one or two top plates."
    },
    {
      "term": "Joist",
      "def": "A horizontal framing member that carries a floor, spaced 16 or 24 inches on center."
    },
    {
      "term": "Rafter",
      "def": "A sloped framing member that carries a roof."
    },
    {
      "term": "On center",
      "def": "Measured from the center of one member to the center of the next."
    },
    {
      "term": "Drywall sheet",
      "def": "A standard sheet, usually 4 feet by 8 feet (32 square feet), used for walls and ceilings."
    },
    {
      "term": "Opening",
      "def": "A door or window hole in a wall; small openings are usually not deducted from drywall, large ones are."
    },
    {
      "term": "Waste factor",
      "def": "A percentage added for cutting, damage, and rejected pieces — 5–10% for lumber, 10–15% for drywall."
    },
    {
      "term": "Coverage",
      "def": "How much area a gallon of paint covers, usually about 350 square feet per coat."
    },
    {
      "term": "Perimeter",
      "def": "The total length around a room, used to measure trim such as baseboard."
    },
    {
      "term": "Board foot",
      "def": "A lumber volume unit: 1 foot by 1 foot by 1 inch."
    },
    {
      "term": "Pattern waste",
      "def": "Extra material needed when flooring is laid diagonally or in a pattern that cuts more boards."
    }
  ],
  "video": {
    "title": "PlanSwift Tutorial 2025 | Complete Takeoff Guide for Beginners (Area, Linear, Count Tools)",
    "embedUrl": "https://www.youtube.com/embed/JNgDVclmeWk",
    "note": "PlanSwift for beginners: area takeoff, linear takeoff, and count tools. Watch the three tools — area for floors and drywall, linear for walls and trim, count for doors and fixtures — because those three measurements cover almost every takeoff in this module.",
    "more": [
      {
        "title": "How to Calculate Quantity of Straight Wall",
        "url": "https://www.youtube.com/watch?v=mU6AXGp9m-U"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A wall is 40 feet long with studs at 16 inches on center. How many studs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Length in inches = 40 × 12 = 480 inches. Step 2: 480 ÷ 16 = 30 spaces. Step 3: Studs = 30 + 1 = 31 studs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A wall is 40 feet long and 8 feet high. How many 4×8 drywall sheets does it need, before waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 40 × 8 = 320 square feet. Step 2: One sheet = 4 × 8 = 32 square feet. Step 3: Sheets = 320 ÷ 32 = 10 sheets.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A room is 12 feet by 15 feet. How many square feet of hardwood flooring, with 5% waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 12 × 15 = 180 square feet. Step 2: Waste = 180 × 0.05 = 9 square feet. Step 3: Order = 180 + 9 = 189 square feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A room has 500 square feet of wall to paint, two coats, and a gallon covers 350 square feet per coat. How many gallons?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Per coat = 500 ÷ 350 = about 1.43 gallons. Step 2: Two coats = 1.43 × 2 = about 2.86 gallons. Step 3: Round up to 3 gallons — paint is bought by the gallon.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A room is 12 feet by 15 feet. How many linear feet of baseboard, before waste and before deducting doors?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Perimeter = 2 × (12 + 15) = 54 feet. Step 2: Baseboard runs the perimeter, so 54 linear feet before waste. Step 3: Add waste (5–10%) and deduct the door openings where baseboard does not run.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why are small door openings usually not deducted from a drywall takeoff?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drywall cut out of a small opening is often reused elsewhere on the job. Step 2: The labor to cut around the opening costs more than the material saved. Step 3: Large openings are deducted because the saved material is real — the rule is about size, and the estimator states the rule used.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A wall is measured for its plates by:",
      "choices": [
        "Area",
        "Linear feet",
        "Count",
        "Weight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Plates are horizontal members measured by length — linear feet. (a) Area is for drywall and floors. (c) Count is for doors and fixtures. (d) Weight is for rebar."
    },
    {
      "q": "Studs at 16 inches on center over a 40-foot wall number:",
      "choices": [
        "30",
        "31",
        "32",
        "40"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 40 × 12 ÷ 16 = 30 spaces, plus 1 = 31 studs. (a) 30 is the number of spaces, not studs. (c) 32 would be 15-inch spacing. (d) 40 is the length in feet, not the count."
    },
    {
      "q": "A standard drywall sheet is:",
      "choices": [
        "4×8 feet, 32 square feet",
        "8×8 feet, 64 square feet",
        "2×4 feet, 8 square feet",
        "4×4 feet, 16 square feet"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A standard sheet is 4 by 8 feet, 32 square feet. (b) That is not a standard sheet. (c) That is too small. (d) That is half a sheet."
    },
    {
      "q": "A wall 40 ft by 8 ft needs how many drywall sheets before waste?",
      "choices": [
        "8",
        "10",
        "12",
        "16"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 320 square feet ÷ 32 per sheet = 10 sheets. (a) 8 sheets would be 256 square feet. (c) 12 sheets would be 384 square feet. (d) 16 sheets would be 512 square feet."
    },
    {
      "q": "Paint coverage is usually about:",
      "choices": [
        "100 square feet per gallon per coat",
        "350 square feet per gallon per coat",
        "1,000 square feet per gallon per coat",
        "50 square feet per gallon per coat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 350 square feet per gallon per coat, as printed on the can. (a) 100 is far too low. (c) 1,000 is far too high. (d) 50 is far too low."
    },
    {
      "q": "Baseboard is measured by:",
      "choices": [
        "Area",
        "Linear feet of perimeter",
        "Count",
        "Weight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Trim is bought by the foot, measured along the walls it runs on. (a) Area is for floors and drywall. (c) Count is for doors. (d) Weight is for rebar."
    },
    {
      "q": "Drywall waste is usually:",
      "choices": [
        "0%",
        "10–15%",
        "50%",
        "1%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Drywall waste is 10–15% for cutting and damage. (a) 0% ignores cutting entirely. (c) 50% is far too high. (d) 1% is far too low."
    },
    {
      "q": "A floor 30 feet wide with joists at 16 inches on center needs about:",
      "choices": [
        "19 joists",
        "24 joists",
        "30 joists",
        "16 joists"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 30 × 12 ÷ 16 = 22.5 spaces, plus 1 = 23.5, rounded up to 24 joists. (a) 19 would be 19-inch spacing. (c) 30 is the width in feet. (d) 16 is the spacing, not the count."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Takeoff: Framing, Drywall & Finishes: Quick Reference</h3>\n<p><strong>Measurements:</strong> Linear (length) · Area (surface) · Count (items). Pick the one that matches how the item is bought.</p>\n<p><strong>Lumber:</strong> Count = length in inches ÷ spacing + 1. Plates are linear feet. Waste 5–10%.</p>\n<p><strong>Drywall:</strong> Area ÷ 32 sq ft per sheet. Waste 10–15%. Small openings (under ~15 sq ft) usually not deducted.</p>\n<p><strong>Finishes:</strong> Flooring = area + pattern waste · Paint = area ÷ 350 sq ft per gallon × coats · Trim = perimeter in linear feet minus door openings.</p>\n<p><strong>Self-check:</strong> Count studs from spacing and drywall sheets from an area.</p>\n"
};
