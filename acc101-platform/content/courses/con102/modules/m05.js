// con102 - Module 5: Geometry I: Area & Perimeter
module.exports = {
  "number": 5,
  "slug": "geometry-area-perimeter",
  "title": "Geometry I: Area & Perimeter",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate the area and perimeter of rectangles and squares.",
    "Calculate the area of triangles and circles.",
    "Work out the area of an L-shaped room by splitting it into rectangles.",
    "Convert square inches to square feet and square feet to square yards.",
    "Apply area and perimeter to flooring, drywall, paint, and fencing takeoffs."
  ],
  "sections": [
    {
      "heading": "Rectangles & Squares: Area and Perimeter",
      "html": "<p>Most rooms are rectangles, and the two numbers that matter are <strong>area</strong> \u2014 how much surface there is \u2014 and <strong>perimeter</strong> \u2014 how far around it is. For a rectangle, area is length \u00d7 width, and perimeter is 2 \u00d7 (length + width). A room 12 feet by 15 feet has an area of 12 \u00d7 15 = 180 square feet and a perimeter of 2 \u00d7 (12 + 15) = 54 feet. A square is a rectangle with all sides equal: a 10-foot square room has an area of 100 square feet and a perimeter of 40 feet.</p>\n<p>Area is always in square units: square inches, square feet, or square yards. A square foot is a square 12 inches by 12 inches, which is 144 square inches \u2014 not 12. That is the most common conversion error in construction: 1 square foot = 144 square inches, and 1 square yard = 9 square feet. To convert square inches to square feet, divide by 144: 1,728 square inches \u00f7 144 = 12 square feet. To convert square feet to square yards, divide by 9: 180 square feet \u00f7 9 = 20 square yards.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Area is length \u00d7 width, in square units. 1 square foot = 144 square inches and 1 square yard = 9 square feet \u2014 never 12 and never 3.</div>"
    },
    {
      "heading": "Triangles & Circles",
      "html": "<p>A triangle's area is half the base times the height: area = 1/2 \u00d7 base \u00d7 height. The height is measured at right angles to the base, not along the sloping side. A gable end that is a triangle 24 feet wide at the base and 6 feet tall has an area of 1/2 \u00d7 24 \u00d7 6 = 72 square feet \u2014 the siding for that gable is ordered from that number, plus waste. A right triangle is half of a rectangle: a triangle 3 feet by 4 feet has an area of 1/2 \u00d7 3 \u00d7 4 = 6 square feet.</p>\n<p>A circle's area is \u03c0 \u00d7 radius\u00b2, where \u03c0 is about 3.14 and the radius is half the diameter. A circular patio 10 feet across has a radius of 5 feet and an area of 3.14 \u00d7 25 = 78.5 square feet. The circumference \u2014 the distance around the circle \u2014 is \u03c0 \u00d7 diameter: 3.14 \u00d7 10 = 31.4 feet. Circles appear on site as columns, footings, pipes, and round patios, and the radius-versus-diameter mix-up is the classic error: always halve the diameter first.</p>\n<p>For a right triangle, the <strong>Pythagorean theorem</strong> relates the sides: a\u00b2 + b\u00b2 = c\u00b2, where c is the longest side (the hypotenuse). A 3-4-5 triangle is the builder's favorite: 3\u00b2 + 4\u00b2 = 9 + 16 = 25 = 5\u00b2. That is how a foundation is checked for square: measure 3 feet along one wall and 4 feet along the other, and the diagonal between the marks must be exactly 5 feet. If it is not, the corner is not square.</p>"
    },
    {
      "heading": "L-Shapes & Irregular Rooms",
      "html": "<p>Real rooms are rarely perfect rectangles. An L-shaped room is handled by splitting it into two rectangles, working out each area, and adding them. An L-shape made of a 12 \u00d7 10-foot rectangle and an 8 \u00d7 6-foot rectangle has an area of 120 + 48 = 168 square feet. The split can be drawn either way \u2014 the total is the same, and checking it both ways is a good verification habit.</p>\n<p>The same method works for a room with a closet bump-out, a bay window, or a notch: split the shape into rectangles and triangles, add the areas, and subtract any openings that are not floored or covered. A floor with a 3 \u00d7 4-foot fireplace hearth that gets no flooring has its hearth area subtracted: a 180-square-foot room minus a 12-square-foot hearth is 168 square feet of flooring.</p>\n<p>Perimeter of an L-shape is found by adding all the side lengths \u2014 including the inside corner sides. The shortcut is that the perimeter of an L-shape equals the perimeter of the rectangle that encloses it, as long as every inside corner is a right angle: an L-shape inside a 20 \u00d7 15-foot box has a perimeter of 2 \u00d7 (20 + 15) = 70 feet, whatever the notch is. That shortcut is useful for baseboard and fencing takeoffs.</p>"
    },
    {
      "heading": "Area in Takeoffs: Flooring, Paint & Fencing",
      "html": "<p>Area drives material orders. Flooring is ordered by area plus waste: a 180-square-foot room at 10% waste needs 180 \u00d7 1.10 = 198 square feet of flooring. Paint is ordered by area divided by coverage: a wall 12 feet long and 8 feet high is 96 square feet, and at 350 square feet per gallon one gallon covers it with paint to spare \u2014 but two coats double the area to 192 square feet, which still fits in one gallon with 158 square feet left over. Drywall is ordered by area divided by sheet area: a 180-square-foot ceiling needs 180 \u00f7 32 = 5.625 sheets of 4 \u00d7 8-foot drywall, so 6 sheets.</p>\n<p>Perimeter drives linear materials: baseboard, trim, and fencing. A room with a 54-foot perimeter and 3 feet of door openings needs 54 \u2212 3 = 51 feet of baseboard, plus waste for cuts \u2014 at 10% waste, 51 \u00d7 1.10 = 56.1 feet, so 57 feet (or the next full board length up). Fencing a yard 60 feet by 40 feet needs a perimeter of 2 \u00d7 (60 + 40) = 200 feet of fence, minus the gate opening.</p>\n<p>Always add waste, and always round up to whole units: you cannot buy 5.625 sheets of drywall, and you cannot buy 56.1 feet of baseboard. The waste factor covers cuts, mistakes, and damaged pieces \u2014 10% is the standard allowance for flooring and drywall, and paint waste is covered by the coverage rate itself.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Rectangle: area = length \u00d7 width; perimeter = 2 \u00d7 (length + width). Triangle: area = 1/2 \u00d7 base \u00d7 height. Circle: area = \u03c0 \u00d7 radius\u00b2, circumference = \u03c0 \u00d7 diameter.</li>\n<li>1 square foot = 144 square inches; 1 square yard = 9 square feet.</li>\n<li>3-4-5 triangle checks a corner for square: 3\u00b2 + 4\u00b2 = 5\u00b2.</li>\n<li>L-shapes: split into rectangles, add the areas. Perimeter of an L-shape equals the enclosing rectangle's perimeter.</li>\n<li>Takeoffs: area + waste for flooring/drywall/paint; perimeter minus openings + waste for baseboard/fencing; always round up to whole units.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying 1 square foot is 12 square inches. A square foot is 12 \u00d7 12 = 144 square inches.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the diameter as the radius in a circle area. Halve the diameter first: area = \u03c0 \u00d7 radius\u00b2.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work out a 12 \u00d7 15-foot room's area and perimeter, check a corner with 3-4-5, and order flooring with 10% waste, you have this module. Module 6 covers volume and concrete quantities.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Area",
      "def": "The amount of surface inside a shape, measured in square units."
    },
    {
      "term": "Perimeter",
      "def": "The distance around the outside of a shape, measured in linear units."
    },
    {
      "term": "Square foot",
      "def": "An area 12 inches by 12 inches; 1 square foot = 144 square inches."
    },
    {
      "term": "Square yard",
      "def": "An area 3 feet by 3 feet; 1 square yard = 9 square feet."
    },
    {
      "term": "Radius",
      "def": "The distance from the center of a circle to its edge \u2014 half the diameter."
    },
    {
      "term": "Diameter",
      "def": "The distance across a circle through its center \u2014 twice the radius."
    },
    {
      "term": "Pi (\u03c0)",
      "def": "The ratio of a circle's circumference to its diameter, about 3.14."
    },
    {
      "term": "Circumference",
      "def": "The distance around a circle: \u03c0 \u00d7 diameter."
    },
    {
      "term": "Hypotenuse",
      "def": "The longest side of a right triangle, opposite the right angle."
    },
    {
      "term": "Pythagorean theorem",
      "def": "a\u00b2 + b\u00b2 = c\u00b2 for a right triangle, where c is the hypotenuse."
    },
    {
      "term": "3-4-5 triangle",
      "def": "A right triangle with sides 3, 4, and 5 \u2014 used to check a corner for square."
    },
    {
      "term": "Waste factor",
      "def": "Extra material allowed for cuts, mistakes, and damage, usually 10%."
    },
    {
      "term": "Takeoff",
      "def": "A quantity of material worked out from drawings or measurements."
    },
    {
      "term": "Right angle",
      "def": "A 90-degree angle \u2014 the corner of a square or rectangle."
    },
    {
      "term": "L-shape",
      "def": "A shape formed by two rectangles joined at a right angle."
    }
  ],
  "video": {
    "title": "How to Read a Tape Measure \u2013 MT Copeland",
    "embedUrl": "https://www.youtube.com/embed/YKESH0opRJ4",
    "note": "Builder Jordan Smith shows how to use a tape measure like a pro, including the measurements that feed every area calculation in this module. As you watch, note each measurement he takes and work out what area it would give for a 12-foot wall.",
    "more": [
      {
        "title": "How to Read a Tape Measure (Inches)",
        "url": "https://www.youtube.com/watch?v=LQ0_301xzLg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A room is 12 feet by 15 feet. What is its area and its perimeter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 12 \u00d7 15 = 180 square feet. Step 2: Perimeter = 2 \u00d7 (12 + 15) = 2 \u00d7 27 = 54 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A gable end is a triangle 24 feet wide at the base and 6 feet tall. What is its area?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 1/2 \u00d7 base \u00d7 height = 1/2 \u00d7 24 \u00d7 6. Step 2: 1/2 \u00d7 24 = 12; 12 \u00d7 6 = 72 square feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A circular patio is 10 feet across. What is its area (use \u03c0 = 3.14) and its circumference?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Radius = 10 \u00f7 2 = 5 feet. Step 2: Area = 3.14 \u00d7 5\u00b2 = 3.14 \u00d7 25 = 78.5 square feet. Step 3: Circumference = 3.14 \u00d7 10 = 31.4 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Check a foundation corner for square: you measure 3 feet along one wall and 4 feet along the other. What must the diagonal be, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: By the Pythagorean theorem, 3\u00b2 + 4\u00b2 = 9 + 16 = 25, and the square root of 25 is 5. Step 2: The diagonal must be exactly 5 feet. Step 3: If it is not 5 feet, the corner is not a right angle and the foundation is out of square.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An L-shaped room is made of a 12 \u00d7 10-foot rectangle and an 8 \u00d7 6-foot rectangle. What is its area, and how much flooring is needed at 10% waste?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Areas are 120 and 48 square feet, totaling 168 square feet. Step 2: Waste is 168 \u00d7 1.10 = 184.8 square feet. Step 3: Order 185 square feet of flooring (rounded up).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A room has a perimeter of 54 feet with 3 feet of door openings. How much baseboard is needed at 10% waste, rounded up to whole feet?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Baseboard length is 54 \u2212 3 = 51 feet. Step 2: With waste: 51 \u00d7 1.10 = 56.1 feet. Step 3: Round up to 57 feet.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A room 12 feet by 15 feet has an area of:",
      "choices": [
        "27 square feet",
        "54 square feet",
        "180 square feet",
        "270 square feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 12 \u00d7 15 = 180 square feet. (a) 27 is the sum of the sides. (b) 54 is the perimeter. (d) 270 is 12 \u00d7 15 plus 90 \u2014 a multiplication error."
    },
    {
      "q": "The perimeter of a 12 by 15-foot room is:",
      "choices": [
        "27 feet",
        "54 feet",
        "180 feet",
        "90 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 \u00d7 (12 + 15) = 54 feet. (a) 27 is half the perimeter. (c) 180 is the area. (d) 90 has no basis in the numbers."
    },
    {
      "q": "One square foot equals:",
      "choices": [
        "12 square inches",
        "144 square inches",
        "9 square inches",
        "1,000 square inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A square foot is 12 \u00d7 12 = 144 square inches. (a) 12 is the number of inches in a foot, not square inches. (c) 9 is square feet in a square yard. (d) 1,000 is far too many."
    },
    {
      "q": "A triangle with base 24 feet and height 6 feet has an area of:",
      "choices": [
        "144 square feet",
        "72 square feet",
        "30 square feet",
        "288 square feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1/2 \u00d7 24 \u00d7 6 = 72 square feet. (a) 144 forgets the half. (c) 30 is the sum of the numbers. (d) 288 doubles the answer."
    },
    {
      "q": "A circle 10 feet across has a radius of:",
      "choices": [
        "10 feet",
        "5 feet",
        "20 feet",
        "3.14 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The radius is half the diameter: 10 \u00f7 2 = 5 feet. (a) 10 feet is the diameter. (c) 20 feet is twice the diameter. (d) 3.14 is pi, not a length."
    },
    {
      "q": "In a 3-4-5 triangle, the diagonal must be:",
      "choices": [
        "3 feet",
        "4 feet",
        "5 feet",
        "7 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 3\u00b2 + 4\u00b2 = 25 = 5\u00b2, so the hypotenuse is 5 feet. (a) and (b) are the legs. (d) 7 is the sum of 3 and 4, not the hypotenuse."
    },
    {
      "q": "180 square feet of flooring at 10% waste needs:",
      "choices": [
        "180 square feet",
        "190 square feet",
        "198 square feet",
        "200 square feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 180 \u00d7 1.10 = 198 square feet. (a) That is no waste at all. (b) 190 is only about 5.5% waste. (d) 200 is more than 10% waste."
    },
    {
      "q": "A 180-square-foot ceiling needs how many 4 \u00d7 8-foot drywall sheets?",
      "choices": [
        "5 sheets",
        "6 sheets",
        "4 sheets",
        "8 sheets"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each sheet is 32 square feet; 180 \u00f7 32 = 5.625, rounded up to 6 sheets. (a) 5 sheets cover only 160 square feet. (c) 4 sheets cover 128. (d) 8 sheets is two more than needed."
    }
  ],
  "studyGuide": "\n<h3>Module 5 \u2014 Geometry I: Area & Perimeter: Quick Reference</h3>\n<p><strong>Core idea:</strong> Area is length \u00d7 width in square units; perimeter is the distance around. Convert square units carefully \u2014 1 sq ft = 144 sq in.</p>\n<p><strong>Formulas:</strong> Rectangle area = L \u00d7 W \u00b7 perimeter = 2(L + W) \u00b7 triangle area = 1/2 \u00d7 base \u00d7 height \u00b7 circle area = \u03c0 \u00d7 radius\u00b2 \u00b7 circumference = \u03c0 \u00d7 diameter.</p>\n<p><strong>Conversions:</strong> 1 sq ft = 144 sq in \u00b7 1 sq yd = 9 sq ft.</p>\n<p><strong>3-4-5:</strong> 3\u00b2 + 4\u00b2 = 5\u00b2 \u2014 the corner-square check.</p>\n<p><strong>L-shapes:</strong> Split into rectangles and add. <strong>Takeoffs:</strong> Area + 10% waste, round up to whole units.</p>\n<p><strong>Self-check:</strong> Work out a 12 \u00d7 15-foot room's area and perimeter and the flooring needed at 10% waste. If you can, you have this module.</p>\n"
};
