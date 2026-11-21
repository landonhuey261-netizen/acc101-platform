// con103 - Module 11: Dimensions, Tolerances & Takeoff Basics
module.exports = {
  "number": 11,
  "slug": "dimensions-tolerances-takeoff-basics",
  "title": "Dimensions, Tolerances & Takeoff Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between a nominal dimension and an actual dimension.",
    "Describe tolerances: what they are and why they exist.",
    "Explain how to read a dimension string and check it against the overall dimension.",
    "Describe the takeoff process: measuring quantities from drawings for an estimate.",
    "Explain how to do a simple material takeoff: studs, drywall, and flooring."
  ],
  "sections": [
    {
      "heading": "Nominal vs. Actual Dimensions",
      "html": "<p>Construction has two kinds of dimensions, and confusing them is one of the most common beginner errors. A <strong>nominal</strong> dimension is the name of a thing: a 2x4 is called a 2x4, but it actually measures 1 1/2 inches by 3 1/2 inches. A 2x6 actually measures 1 1/2 by 5 1/2 inches, and a 2x12 actually measures 1 1/2 by 11 1/4 inches. The nominal size is the name the lumberyard uses; the actual size is the size the wood really is. A wall framed with 2x4 studs is 3 1/2 inches thick, not 4 inches \u2014 and a room dimensioned to the face of the stud is measured to the 3 1/2-inch face, not to a 4-inch face that does not exist.</p>\n<p>Nominal and actual differ in other materials too: a concrete block is nominally 8 x 8 x 16 inches but actually 7 5/8 x 7 5/8 x 15 5/8 inches, so that the mortar joint makes up the difference. A brick is nominally 4 x 8 inches but actually 3 5/8 x 7 5/8 inches. A sheet of plywood is nominally 4 x 8 feet but actually 48 x 96 inches \u2014 plywood is one of the few materials where the nominal and the actual agree. The rule is: the nominal size is the name, the actual size is the measurement, and the drawing's dimensions are always actual unless they say otherwise.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Nominal is the name, actual is the measurement. A 2x4 is really 1 1/2 x 3 1/2 inches \u2014 and a wall framed with 2x4s is 3 1/2 inches thick, not 4.</div>"
    },
    {
      "heading": "Tolerances: How Close Is Close Enough?",
      "html": "<p>A <strong>tolerance</strong> is the amount a measurement is allowed to be off and still be acceptable. No building is built to the exact inch in every place \u2014 wood shrinks, concrete moves, and hands are not machines \u2014 so the drawings and the specs set tolerances: a floor may be out of level by 1/4 inch in 10 feet, a wall may be out of plumb by 1/8 inch in 8 feet, and a concrete slab may be 1/4 inch thicker or thinner than the drawing says. A tolerance is not permission to be sloppy; it is the line between acceptable and unacceptable, and the builder's job is to stay inside it.</p>\n<p>Tolerances are written in the specs (Part 3 \u2014 Execution) and sometimes on the drawings. A concrete spec might say the slab's flatness tolerance is 1/8 inch in 10 feet; a framing spec might say a wall's plumb tolerance is 1/4 inch in 8 feet. The tolerance is checked with a level, a straightedge, and a tape: a 10-foot straightedge laid on a slab, with a feeler gauge under the low spots, tells you whether the slab is within tolerance. A wall that is 1/2 inch out of plumb in 8 feet is outside tolerance and must be fixed \u2014 and fixing it after the drywall is on is far more expensive than fixing it during framing.</p>\n<p>The most important tolerance for a beginner is the <strong>dimension tolerance</strong>: when a drawing says a wall is 12'-0\" long, the wall is allowed to be 12'-0\" plus or minus a small amount \u2014 usually 1/4 inch for a room, 1/2 inch for a building. A wall that is 11'-11\" or 12'-1\" is fine; a wall that is 11'-6\" is not. The tolerance is the reason the overall dimension and the dimension string can disagree by a small amount without being an error \u2014 but a disagreement of 6 inches is not a tolerance, it is a mistake.</p>"
    },
    {
      "heading": "Reading a Dimension String & Checking It",
      "html": "<p>A <strong>dimension string</strong> is a chain of small dimensions along one side of a plan that adds up to an <strong>overall dimension</strong>. The string gives the parts \u2014 each room width, each wall thickness \u2014 and the overall dimension gives the whole. Always add the parts and check them against the overall: if the string adds to 40'-0\" and the overall says 40'-0\", the dimensions are consistent. If the string adds to 40'-0\" and the overall says 40'-6\", something is wrong, and the plan needs an RFI. The overall dimension is the one to trust when the two disagree \u2014 but only after the designer confirms it.</p>\n<p>Dimensions are given to a reference: the <strong>face of the stud</strong> (the usual reference for interior dimensions), the <strong>centerline</strong> of a column or a wall, or the <strong>face of concrete</strong> for a foundation. The general notes say which reference is used, and the reference matters: a room dimensioned 12'-0\" to the face of the stud is 12 feet of clear space inside the framing, but once the drywall is on (1/2 inch on each side), the room is 11'-11\" of clear space. A cabinet that is 12 feet long will not fit in a room that is 11'-11\" clear \u2014 and that is a mistake caught by reading the dimension reference, not by measuring the room.</p>\n<p>Three dimension habits: first, always read the dimension string, not just the overall \u2014 the string shows where each wall goes. Second, always check the parts against the whole. Third, always know the reference \u2014 face of stud, centerline, or face of concrete \u2014 because the same number means a different wall position depending on the reference.</p>"
    },
    {
      "heading": "Takeoff Basics: Measuring Quantities for an Estimate",
      "html": "<p>A <strong>takeoff</strong> is the process of measuring quantities from the drawings so an estimator can price the job. The estimator counts and measures everything the building needs \u2014 studs, sheets of drywall, square feet of flooring, cubic yards of concrete, linear feet of trim \u2014 and the takeoff is the list of those quantities. A takeoff is not a guess: it is a careful, written count, done in a standard order, with the waste factor added at the end.</p>\n<p>The order is always the same: start with the <strong>concrete and the foundation</strong>, then the <strong>framing</strong>, then the <strong>roof</strong>, then the <strong>exterior</strong>, then the <strong>interior</strong> (drywall, flooring, trim, paint), then the <strong>doors and windows</strong>, and finally the <strong>mechanical, electrical, and plumbing</strong>. Working in order keeps the takeoff organized and makes it easy to check: if the framing takeoff is done before the drywall takeoff, the drywall quantities can be checked against the framing quantities, because the drywall covers the walls the framing built.</p>\n<p>A simple takeoff uses three kinds of measurement: <strong>count</strong> (how many doors, windows, fixtures), <strong>length</strong> (linear feet of trim, baseboard, or pipe), and <strong>area</strong> (square feet of flooring, drywall, or roofing) or <strong>volume</strong> (cubic yards of concrete). Each quantity is written with its unit, its location, and its calculation, so anyone can check it: \"Bedroom 2 floor: 12 ft x 14 ft = 168 sq ft\". A takeoff that cannot be checked is a takeoff that cannot be trusted.</p>"
    },
    {
      "heading": "A Simple Material Takeoff: Studs, Drywall & Flooring",
      "html": "<p>Here is a takeoff you can do yourself. <strong>Studs:</strong> a wall 20 feet long with studs 16 inches on center needs the length in inches (20 feet x 12 = 240 inches) divided by the spacing (16 inches) plus one for the end stud: 240 / 16 = 15, plus 1 = 16 studs. Add one stud for each corner and each opening, and add 10% for waste and culls: 16 studs plus 2 for a door opening is 18, plus 10% is about 20 studs. The formula is: studs = (wall length in inches / spacing) + 1, plus openings, plus waste.</p>\n<p><strong>Drywall:</strong> a room 12 feet by 14 feet with 8-foot ceilings has a wall area of the perimeter times the height: the perimeter is 2 x (12 + 14) = 52 feet, times 8 feet = 416 square feet of wall. The ceiling is 12 x 14 = 168 square feet. The total is 416 + 168 = 584 square feet. A sheet of drywall is 4 x 8 feet = 32 square feet, so the room needs 584 / 32 = 18.25 sheets \u2014 round up to 19, plus 10% waste is about 21 sheets. Subtract the area of doors and windows if you want a tighter number, but most estimators do not bother for a small room \u2014 the waste factor covers it.</p>\n<p><strong>Flooring:</strong> a room 12 feet by 14 feet is 168 square feet. Flooring is ordered by the square foot, plus 10% waste for cuts: 168 x 1.10 = 184.8, round up to 185 square feet. For a room with an angle or a bay, add 15% waste instead of 10%, because more pieces are cut at angles. The waste factor is the estimator's insurance: it is cheaper to have a few extra boards than to run short and wait a week for a delivery.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the waste factor. A takeoff without waste is a takeoff that runs short \u2014 and running short costs more than the extra material would have.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain nominal vs. actual, check a dimension string, and take off studs for one wall, you have this module. Module 12 puts it all together on a full set.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Nominal dimension",
      "def": "The name of a material's size, such as 2x4 \u2014 not its actual measurement."
    },
    {
      "term": "Actual dimension",
      "def": "The real measurement of a material: a 2x4 is really 1 1/2 x 3 1/2 inches."
    },
    {
      "term": "Tolerance",
      "def": "The amount a measurement is allowed to be off and still be acceptable."
    },
    {
      "term": "Dimension string",
      "def": "A chain of small dimensions along one side of a plan that adds up to an overall dimension."
    },
    {
      "term": "Overall dimension",
      "def": "The total dimension of a building or a run, given at the end of a dimension string."
    },
    {
      "term": "Face of stud",
      "def": "The face of the framing member \u2014 the usual reference for interior dimensions."
    },
    {
      "term": "Centerline",
      "def": "The center of a column or wall, used as a dimension reference."
    },
    {
      "term": "Takeoff",
      "def": "Measuring quantities from drawings so an estimator can price a job."
    },
    {
      "term": "Waste factor",
      "def": "Extra material added to a takeoff for cuts, damage, and culls \u2014 usually 10%."
    },
    {
      "term": "Linear foot",
      "def": "A measurement of length: one foot of material, such as trim or pipe."
    },
    {
      "term": "Square foot",
      "def": "A measurement of area: one foot by one foot."
    },
    {
      "term": "Cubic yard",
      "def": "A measurement of volume: 27 cubic feet, used for concrete and soil."
    },
    {
      "term": "Plumb",
      "def": "Perfectly vertical."
    },
    {
      "term": "Level",
      "def": "Perfectly horizontal."
    },
    {
      "term": "Feeler gauge",
      "def": "A thin blade used to measure a gap, such as under a straightedge on a slab."
    },
    {
      "term": "Straightedge",
      "def": "A long, straight tool used to check flatness."
    },
    {
      "term": "Culls",
      "def": "Lumber rejected for defects such as warping, knots, or splits."
    },
    {
      "term": "RFI",
      "def": "Request for Information \u2014 a written question to the designer about a conflict or missing information."
    }
  ],
  "video": {
    "title": "How to Measure Fitting Takeoff | Advanced Plumbing",
    "embedUrl": "https://www.youtube.com/embed/FPPZKm7c6xw",
    "note": "A takeoff demonstration: measuring fittings and pipe from a drawing to build a material list. The trade is plumbing, but the habit is universal \u2014 measure in order, write the quantity with its unit and its calculation, and add the waste factor. Watch how each measurement is written down so it can be checked.",
    "more": [
      {
        "title": "How to Read an Architect's Scale",
        "url": "https://www.youtube.com/watch?v=PrbjWgyZlFc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 2x4 stud is nominally 2 x 4 inches. What is its actual size, and how thick is a wall framed with 2x4 studs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A 2x4 actually measures 1 1/2 inches by 3 1/2 inches. Step 2: A wall framed with 2x4 studs is 3 1/2 inches thick (plus drywall on each side). Step 3: The nominal size is the name; the actual size is the measurement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A wall is 20 feet long with studs 16 inches on center, plus one door opening. How many studs do you need, including 10% waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 20 feet = 240 inches. 240 / 16 = 15, plus 1 for the end stud = 16 studs. Step 2: Add 2 studs for the door opening = 18 studs. Step 3: Add 10% waste: 18 x 1.10 = 19.8, round up to 20 studs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A room is 12 feet by 14 feet with 8-foot ceilings. What is the total drywall area (walls plus ceiling), and how many 4x8 sheets do you need before waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Perimeter = 2 x (12 + 14) = 52 feet. Wall area = 52 x 8 = 416 sq ft. Step 2: Ceiling area = 12 x 14 = 168 sq ft. Total = 416 + 168 = 584 sq ft. Step 3: A 4x8 sheet is 32 sq ft. 584 / 32 = 18.25, so round up to 19 sheets before waste.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A room is 12 feet by 14 feet. How many square feet of flooring do you order, including 10% waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Floor area = 12 x 14 = 168 sq ft. Step 2: Add 10% waste: 168 x 1.10 = 184.8 sq ft. Step 3: Round up and order 185 square feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A dimension string reads 10'-0\", 12'-0\", 10'-0\", and the overall dimension reads 32'-0\". Are the dimensions consistent?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Add the parts: 10 + 12 + 10 = 32'-0\". Step 2: The overall dimension is 32'-0\". Step 3: Yes \u2014 the parts add up to the whole, so the dimensions are consistent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A concrete spec says the slab's flatness tolerance is 1/8 inch in 10 feet. A 10-foot straightedge on the slab shows a 1/4-inch gap under it. Is the slab within tolerance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The tolerance is 1/8 inch in 10 feet. Step 2: The measured gap is 1/4 inch \u2014 twice the tolerance. Step 3: No, the slab is outside tolerance and must be fixed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 2x4 stud actually measures:",
      "choices": [
        "2 inches by 4 inches",
        "1 1/2 inches by 3 1/2 inches",
        "1 3/4 inches by 3 3/4 inches",
        "2 inches by 3 1/2 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 2x4 is really 1 1/2 x 3 1/2 inches. (a) That is the nominal size, the name \u2014 not the measurement. (c) Those are not the actual dimensions. (d) The width is 1 1/2 inches, not 2."
    },
    {
      "q": "A wall framed with 2x4 studs is:",
      "choices": [
        "4 inches thick",
        "3 1/2 inches thick",
        "2 inches thick",
        "5 inches thick"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The stud is 3 1/2 inches deep, so the wall is 3 1/2 inches thick before drywall. (a) 4 inches is the nominal depth. (c) 2 inches is the nominal width. (d) 5 inches is the thickness with drywall on both sides plus a little."
    },
    {
      "q": "A tolerance is:",
      "choices": [
        "Permission to be sloppy",
        "The amount a measurement is allowed to be off and still be acceptable",
        "A type of fastener",
        "The same as a dimension"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tolerance is the allowed deviation. (a) A tolerance is a limit, not permission to be sloppy. (c) A fastener is a nail, screw, or bolt. (d) A dimension is the target size; the tolerance is how far off it may be."
    },
    {
      "q": "A wall 20 feet long with studs 16 inches on center needs, before openings and waste:",
      "choices": [
        "15 studs",
        "16 studs",
        "20 studs",
        "13 studs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 240 inches / 16 = 15, plus 1 for the end stud = 16. (a) 15 forgets the end stud. (c) 20 is the count after openings and waste. (d) 13 is the count at 19.2-inch spacing."
    },
    {
      "q": "A room 12 feet by 14 feet with 8-foot ceilings has a wall area of:",
      "choices": [
        "168 square feet",
        "416 square feet",
        "584 square feet",
        "52 square feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Perimeter 52 ft x 8 ft = 416 sq ft. (a) 168 is the ceiling area. (c) 584 is walls plus ceiling. (d) 52 is the perimeter in feet."
    },
    {
      "q": "A room 12 feet by 14 feet needs how much flooring with 10% waste?",
      "choices": [
        "168 square feet",
        "185 square feet",
        "200 square feet",
        "150 square feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 168 x 1.10 = 184.8, round up to 185 sq ft. (a) 168 is the area with no waste. (c) 200 is about 19% waste. (d) 150 is less than the room's area."
    },
    {
      "q": "A takeoff is:",
      "choices": [
        "A guess at the cost",
        "Measuring quantities from drawings so an estimator can price a job",
        "A list of workers",
        "A type of drawing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A takeoff is a careful, written count of quantities. (a) A takeoff is measured, not guessed. (c) Workers are not in a takeoff. (d) A takeoff is a list, not a drawing."
    },
    {
      "q": "If a dimension string adds to 40'-0\" but the overall dimension says 40'-6\", you should:",
      "choices": [
        "Build to the parts",
        "Build to the overall",
        "Send an RFI and do not build until it is answered",
        "Split the difference"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A 6-inch mismatch is a conflict, not a tolerance. (a) and (b) assume one value is right without proof. (d) Splitting the difference invents a dimension that is in neither place."
    }
  ],
  "studyGuide": "\n<h3>Module 11 \u2014 Dimensions, Tolerances & Takeoff Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Nominal is the name, actual is the measurement. A 2x4 is really 1 1/2 x 3 1/2 inches.</p>\n<p><strong>Tolerance:</strong> How far off a measurement may be and still be acceptable \u2014 e.g., 1/8 in in 10 ft for a slab. A tolerance is a limit, not permission to be sloppy.</p>\n<p><strong>Dimension string:</strong> The parts must add up to the overall dimension. Dimensions are usually to the face of the stud.</p>\n<p><strong>Takeoff:</strong> Measure quantities in order \u2014 concrete, framing, roof, exterior, interior, doors/windows, MEP \u2014 and add 10% waste.</p>\n<p><strong>Studs:</strong> (wall length in inches / spacing) + 1, plus openings, plus waste. <strong>Drywall:</strong> (perimeter x height) + ceiling, divided by 32 sq ft per sheet.</p>\n<p><strong>Self-check:</strong> Explain nominal vs. actual, check a dimension string, and take off studs for one wall. If you can, you have this module.</p>\n"
};
