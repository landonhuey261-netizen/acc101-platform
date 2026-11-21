// con102 - Module 3: Decimals, Conversions & the Metric System
module.exports = {
  "number": 3,
  "slug": "decimals-conversions-metric",
  "title": "Decimals, Conversions & the Metric System",
  "estTime": "3–4 hours",
  "objectives": [
    "Convert fractions to decimals and decimals to fractions.",
    "Convert between feet, inches, and yards.",
    "Convert between inches and millimeters/centimeters and meters.",
    "Round measurements correctly to the precision the job needs.",
    "Add and subtract decimal measurements and check the result."
  ],
  "sections": [
    {
      "heading": "Fractions to Decimals and Back",
      "html": "<p>A decimal is just another way to write a fraction: divide the top by the bottom. 1/2 = 1 \u00f7 2 = 0.5. 1/4 = 0.25. 3/4 = 0.75. 1/8 = 0.125. 3/8 = 0.375. 5/8 = 0.625. 7/8 = 0.875. On a tape marked in sixteenths, the key decimals are 1/16 = 0.0625, 3/16 = 0.1875, 5/16 = 0.3125, 7/16 = 0.4375, 9/16 = 0.5625, 11/16 = 0.6875, 13/16 = 0.8125, and 15/16 = 0.9375. Learn the eighths first \u2014 they are the ones you will use daily \u2014 and look up the sixteenths when you need them.</p>\n<p>Going the other way \u2014 decimal to fraction \u2014 multiply by 16 and round to the nearest whole number, because the tape's smallest mark is a sixteenth. 0.31 \u00d7 16 = 4.96, which rounds to 5, so 0.31 inch is about 5/16 inch. 0.72 \u00d7 16 = 11.52, which rounds to 12, so 0.72 inch is about 12/16 = 3/4 inch. The answer is approximate when the decimal does not land exactly on a sixteenth, and a good carpenter says so: \"about three-quarters\" is honest; \"exactly three-quarters\" is not, unless the decimal was exactly 0.75.</p>\n<div class=\"callout\"><strong>Key idea:</strong> To turn a fraction into a decimal, divide. To turn a decimal into a tape fraction, multiply by 16 and round to the nearest sixteenth.</div>"
    },
    {
      "heading": "Feet, Inches & Yards",
      "html": "<p>The imperial conversions a builder uses every day are: 12 inches = 1 foot, 3 feet = 1 yard, 36 inches = 1 yard. To turn inches into feet, divide by 12: 84 inches \u00f7 12 = 7 feet. To turn feet into inches, multiply by 12: 7 1/2 feet \u00d7 12 = 90 inches. To turn feet into yards, divide by 3: 27 feet \u00f7 3 = 9 yards. A measurement in feet and inches converts to inches by multiplying the feet by 12 and adding the inches: 5 feet 6 inches = 60 + 6 = 66 inches.</p>\n<p>Decimal feet are common on drawings and in estimating: 6.5 feet means 6 feet 6 inches, because 0.5 \u00d7 12 = 6 inches. 6.25 feet is 6 feet 3 inches (0.25 \u00d7 12 = 3), and 6.75 feet is 6 feet 9 inches (0.75 \u00d7 12 = 9). The mistake to avoid is reading 6.5 feet as 6 feet 5 inches \u2014 the decimal is a fraction of a foot, not a count of inches. Always multiply the decimal part by 12 to get the inches.</p>\n<p>When a job needs a total in one unit, convert everything to that unit first. Adding 3 feet 6 inches and 2 feet 9 inches is easiest in inches: 42 + 33 = 75 inches = 6 feet 3 inches. Adding them as written invites the classic error of adding feet to inches as if they were the same unit.</p>"
    },
    {
      "heading": "The Metric System",
      "html": "<p>Some materials, tools, and drawings use metric units, so a builder needs the conversions both ways. The key facts are: 1 inch = 25.4 millimeters exactly, 1 foot = 304.8 millimeters, 1 meter = 39.37 inches (about 3 feet 3 3/8 inches), and 1 meter = 100 centimeters = 1,000 millimeters. To turn inches into millimeters, multiply by 25.4: 4 inches \u00d7 25.4 = 101.6 millimeters. To turn millimeters into inches, divide by 25.4: 100 millimeters \u00f7 25.4 = 3.94 inches, about 3 15/16 inches.</p>\n<p>Metric is decimal all the way down, which makes its arithmetic easy: 1.5 meters is 150 centimeters is 1,500 millimeters, and adding 250 millimeters to 1.25 meters is 1.5 meters. The trap is mixing the systems \u2014 a drawing in millimeters and a tape in inches. Pick one system for the calculation, convert everything into it, and write the unit on every number so the next person knows which system you used.</p>\n<p>Some materials are sold in metric sizes that do not match imperial ones exactly: a sheet of plywood sold as 1220 \u00d7 2440 millimeters is 4 \u00d7 8 feet near enough, but not exactly \u2014 1220 millimeters is 48.03 inches. For rough work the difference does not matter; for precision work, measure the actual sheet.</p>"
    },
    {
      "heading": "Rounding & Precision",
      "html": "<p>Rounding is choosing how precise an answer needs to be, and the job sets the precision. Framing is usually measured to the nearest 1/16 inch; finish carpentry to the nearest 1/32 or 1/64 inch; concrete and earthwork to the nearest inch or half inch. Rounding to more precision than the job needs wastes time; rounding to less precision than the job needs wastes material.</p>\n<p>The rounding rule is simple: look at the next digit. To round 0.4375 to two decimal places, look at the third digit (7) \u2014 it is 5 or more, so round up: 0.44. To round 7/16 (0.4375) to the nearest eighth, compare it with 3/8 (0.375) and 1/2 (0.5): 0.4375 is closer to 0.5, so it rounds to 1/2 \u2014 wait, check: 0.4375 \u2212 0.375 = 0.0625, and 0.5 \u2212 0.4375 = 0.0625. It is exactly halfway, so the trade convention is to round up to 1/2. Exact halves are rare in real measurements, and when one appears, rounding up is the safe convention.</p>\n<p>Always carry one extra digit through a calculation and round only at the end. Rounding at every step compounds the error: three roundings of 1/32 inch each can move a total by nearly 1/8 inch, which is a visible gap in finish work.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Fraction to decimal: divide top by bottom. Decimal to tape fraction: multiply by 16, round to the nearest sixteenth.</li>\n<li>Key decimals: 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75, 1/8 = 0.125, 3/8 = 0.375, 5/8 = 0.625, 7/8 = 0.875.</li>\n<li>12 inches = 1 foot, 3 feet = 1 yard. Decimal feet: multiply the decimal part by 12 to get inches (6.5 ft = 6 ft 6 in).</li>\n<li>Metric: 1 inch = 25.4 mm exactly; 1 meter = 39.37 inches. Convert everything to one system before calculating.</li>\n<li>Round only at the end of a calculation; carry one extra digit through the steps.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading 6.5 feet as 6 feet 5 inches. The .5 is half a foot \u2014 6 inches \u2014 so 6.5 feet is 6 feet 6 inches.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Rounding at every step. Carry one extra digit and round once, at the end.</div>\n<p><strong>Ready-to-Work link:</strong> If you can convert 3/8 to a decimal, 0.72 to a tape fraction, and 6.5 feet to feet and inches, you have this module. Module 4 covers measuring accurately in the field.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Decimal",
      "def": "A number written with a decimal point, e.g. 0.75, used to express parts of a whole."
    },
    {
      "term": "Convert",
      "def": "Changing a measurement from one unit or form to another without changing its value."
    },
    {
      "term": "Millimeter (mm)",
      "def": "A metric unit of length; 25.4 mm = 1 inch exactly."
    },
    {
      "term": "Centimeter (cm)",
      "def": "A metric unit; 100 cm = 1 meter, and 2.54 cm = 1 inch."
    },
    {
      "term": "Meter (m)",
      "def": "The metric base unit of length; 1 m = 39.37 inches."
    },
    {
      "term": "Yard",
      "def": "An imperial unit: 3 feet, or 36 inches."
    },
    {
      "term": "Decimal feet",
      "def": "Feet written as a decimal, e.g. 6.5 ft = 6 ft 6 in."
    },
    {
      "term": "Rounding",
      "def": "Reducing a number to fewer digits, following the rule that 5 or more rounds up."
    },
    {
      "term": "Precision",
      "def": "How fine a measurement is: to the nearest 1/16 inch, 1/32 inch, and so on."
    },
    {
      "term": "Sixteenth",
      "def": "One sixteenth of an inch \u2014 the smallest mark on most tapes."
    },
    {
      "term": "Exact conversion",
      "def": "A conversion with no rounding, e.g. 1 inch = 25.4 mm exactly."
    },
    {
      "term": "Approximate",
      "def": "Close to the true value but not exact, e.g. a decimal rounded to the nearest sixteenth."
    },
    {
      "term": "Imperial system",
      "def": "The feet, inches, and yards system used in U.S. construction."
    },
    {
      "term": "Metric system",
      "def": "The meters, centimeters, and millimeters system used in most of the world."
    },
    {
      "term": "Unit",
      "def": "The label on a number that says what it measures: inches, feet, millimeters, meters."
    }
  ],
  "video": {
    "title": "Fractions and Decimals on an Inch Tape Measure",
    "embedUrl": "https://www.youtube.com/embed/dx4Bg97Y_bI",
    "note": "How fractions and decimals work on an inch tape measure, including converting both ways. Work the conversions on paper as the video shows them \u2014 divide to get decimals, multiply by 16 to get back to fractions.",
    "more": [
      {
        "title": "How to Read a Tape Measure and Figure Inches and Fractions",
        "url": "https://www.youtube.com/watch?v=fFw1HYcJt2c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Convert 3/8, 5/16, and 7/8 to decimals.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3 \u00f7 8 = 0.375. Step 2: 5 \u00f7 16 = 0.3125. Step 3: 7 \u00f7 8 = 0.875.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Convert 0.72 inch to the nearest sixteenth of an inch, and simplify the answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0.72 \u00d7 16 = 11.52. Step 2: 11.52 rounds to 12 sixteenths. Step 3: 12/16 simplifies to 3/4 inch \u2014 so 0.72 inch is about 3/4 inch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Convert 6.5 feet to feet and inches, and convert 5 feet 9 inches to inches only.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 6.5 feet: 0.5 \u00d7 12 = 6 inches, so 6 feet 6 inches. Step 2: 5 feet 9 inches = (5 \u00d7 12) + 9 = 60 + 9 = 69 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Convert 4 inches to millimeters and 100 millimeters to inches (to two decimal places).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 4 \u00d7 25.4 = 101.6 millimeters. Step 2: 100 \u00f7 25.4 = 3.937 inches, which rounds to 3.94 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Add 3 feet 6 inches and 2 feet 9 inches. Show the work in inches and give the answer in feet and inches.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3 feet 6 inches = 42 inches; 2 feet 9 inches = 33 inches. Step 2: 42 + 33 = 75 inches. Step 3: 75 \u00f7 12 = 6 feet with 3 inches left, so 6 feet 3 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drawing dimension reads 0.4375 inch. What tape fraction is that exactly, and what would it round to at the nearest eighth?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0.4375 \u00d7 16 = 7, so it is exactly 7/16 inch. Step 2: At the nearest eighth, 7/16 sits exactly halfway between 3/8 (0.375) and 1/2 (0.5). Step 3: By convention it rounds up to 1/2 inch \u2014 but on a tape you would use 7/16, because the tape has that mark.</p>"
    }
  ],
  "quiz": [
    {
      "q": "3/4 as a decimal is:",
      "choices": [
        "0.34",
        "0.75",
        "0.43",
        "3.4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3 \u00f7 4 = 0.75. (a) 0.34 is a different number. (c) 0.43 is not 3/4. (d) 3.4 is larger than 3."
    },
    {
      "q": "0.125 on the tape is:",
      "choices": [
        "1/4 inch",
        "1/8 inch",
        "1/2 inch",
        "1/16 inch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 \u00f7 8 = 0.125. (a) 1/4 is 0.25. (c) 1/2 is 0.5. (d) 1/16 is 0.0625."
    },
    {
      "q": "6.5 feet is the same as:",
      "choices": [
        "6 feet 5 inches",
        "6 feet 6 inches",
        "6 feet 50 inches",
        "5 feet 6 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.5 \u00d7 12 = 6 inches. (a) 6 feet 5 inches is 6.42 feet, not 6.5. (c) 50 inches is not a fraction of a foot. (d) 5 feet 6 inches is 5.5 feet."
    },
    {
      "q": "1 inch equals how many millimeters?",
      "choices": [
        "2.54 mm",
        "25.4 mm",
        "254 mm",
        "0.254 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 inch = 25.4 millimeters exactly. (a) 2.54 is centimeters per inch. (c) 254 mm is 10 inches. (d) 0.254 mm is a hundredth of an inch."
    },
    {
      "q": "84 inches is:",
      "choices": [
        "6 feet",
        "7 feet",
        "8 feet",
        "9 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 84 \u00f7 12 = 7 feet. (a) 6 feet is 72 inches. (c) 8 feet is 96 inches. (d) 9 feet is 108 inches."
    },
    {
      "q": "To convert a decimal to the nearest tape fraction, you:",
      "choices": [
        "Divide by 16",
        "Multiply by 16 and round to the nearest whole number",
        "Add 16",
        "Subtract 16"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Multiplying by 16 gives the number of sixteenths; rounding gives the nearest mark. (a) Dividing by 16 goes the wrong way. (c) and (d) Adding or subtracting 16 does not convert anything."
    },
    {
      "q": "5 feet 6 inches in inches only is:",
      "choices": [
        "56 inches",
        "66 inches",
        "60 inches",
        "65 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 5 \u00d7 12 = 60, plus 6 = 66 inches. (a) 56 inches is 4 feet 8 inches. (c) 60 inches is exactly 5 feet. (d) 65 inches is 5 feet 5 inches."
    },
    {
      "q": "27 feet in yards is:",
      "choices": [
        "3 yards",
        "9 yards",
        "12 yards",
        "81 yards"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 27 \u00f7 3 = 9 yards. (a) 3 yards is 9 feet. (c) 12 yards is 36 feet. (d) 81 is 27 \u00d7 3, the wrong operation."
    }
  ],
  "studyGuide": "\n<h3>Module 3 \u2014 Decimals & Conversions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Divide to get a decimal; multiply by 16 and round to get back to a tape fraction.</p>\n<p><strong>Key decimals:</strong> 1/2 = 0.5 \u00b7 1/4 = 0.25 \u00b7 3/4 = 0.75 \u00b7 1/8 = 0.125 \u00b7 3/8 = 0.375 \u00b7 5/8 = 0.625 \u00b7 7/8 = 0.875 \u00b7 1/16 = 0.0625.</p>\n<p><strong>Imperial:</strong> 12 in = 1 ft \u00b7 3 ft = 1 yd. Decimal feet: multiply the decimal part by 12 (6.5 ft = 6 ft 6 in).</p>\n<p><strong>Metric:</strong> 1 in = 25.4 mm exactly \u00b7 1 m = 39.37 in. Convert everything to one system first.</p>\n<p><strong>Rounding:</strong> Carry one extra digit through the calculation; round once, at the end.</p>\n<p><strong>Self-check:</strong> Convert 5/16 to a decimal, 0.72 to a tape fraction, and 84 inches to feet. If you can, you have this module.</p>\n"
};
