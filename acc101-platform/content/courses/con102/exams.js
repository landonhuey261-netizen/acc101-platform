// con102 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "On a tape measure, the mark halfway between 3/8 inch and 1/2 inch is:",
        "choices": [
          "7/16 inch",
          "5/16 inch",
          "3/4 inch",
          "1/4 inch"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Halfway between 6/16 and 8/16 is 7/16. (b) 5/16 is below 3/8. (c) 3/4 is 12/16, well above 1/2. (d) 1/4 is 4/16, below 3/8."
      },
      {
        "module": 1,
        "q": "A measurement reads 5 feet 7 inches. In inches, that is:",
        "choices": [
          "57 inches",
          "67 inches",
          "72 inches",
          "60 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 5 feet is 60 inches, plus 7 = 67 inches. (a) 57 would be 4 feet 9 inches. (c) 72 is 6 feet. (d) 60 is 5 feet exactly."
      },
      {
        "module": 1,
        "q": "The smallest mark on a standard 16ths tape measure is:",
        "choices": [
          "1/8 inch",
          "1/16 inch",
          "1/32 inch",
          "1/4 inch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 16ths tape is divided into sixteenths of an inch. (a) 1/8 is every other 16th. (c) 1/32 tapes exist but are not the standard. (d) 1/4 is every fourth 16th."
      },
      {
        "module": 1,
        "q": "To measure an inside dimension, the best method is to:",
        "choices": [
          "Guess from the outside",
          "Burn an inch: hold the tape at 1 inch and add 1 inch to the reading",
          "Bend the tape into the corner",
          "Measure diagonally"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Burning an inch gives a clean reading from a known mark. (a) Guessing is not measuring. (c) Bending the tape makes the reading wrong. (d) A diagonal is longer than the straight dimension."
      },
      {
        "module": 2,
        "q": "3/8 + 5/16 =",
        "choices": [
          "8/16",
          "11/16",
          "8/24",
          "3/4"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3/8 = 6/16, and 6/16 + 5/16 = 11/16. (a) 8/16 adds the numerators without a common denominator. (c) 8/24 adds numerators and denominators, which is wrong. (d) 3/4 is 12/16, one sixteenth too big."
      },
      {
        "module": 2,
        "q": "7/8 - 3/16 =",
        "choices": [
          "4/16",
          "11/16",
          "1/2",
          "5/8"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 7/8 = 14/16, and 14/16 - 3/16 = 11/16. (a) 4/16 subtracts numerators without a common denominator. (c) 1/2 is 8/16, too small. (d) 5/8 is 10/16, one sixteenth too small."
      },
      {
        "module": 2,
        "q": "5/16 + 1/2 =",
        "choices": [
          "6/18",
          "13/16",
          "3/4",
          "1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1/2 = 8/16, and 5/16 + 8/16 = 13/16. (a) 6/18 adds numerators and denominators, which is wrong. (c) 3/4 is 12/16, one sixteenth too small. (d) 1 is 16/16, too big."
      },
      {
        "module": 2,
        "q": "Simplify 12/16 to lowest terms:",
        "choices": [
          "6/8",
          "3/4",
          "1/2",
          "12/16 is already simplest"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Divide top and bottom by 4: 12/16 = 3/4. (a) 6/8 is correct but not lowest \u2014 it can still be divided by 2. (c) 1/2 is 8/16, not 12/16. (d) 12/16 can be reduced, so it is not simplest."
      },
      {
        "module": 3,
        "q": "0.625 as a fraction in lowest terms is:",
        "choices": [
          "5/8",
          "3/5",
          "5/16",
          "7/8"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.625 = 625/1000 = 5/8. (b) 3/5 is 0.6. (c) 5/16 is 0.3125. (d) 7/8 is 0.875."
      },
      {
        "module": 3,
        "q": "2.5 feet is how many inches?",
        "choices": [
          "25 inches",
          "30 inches",
          "24 inches",
          "35 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 feet is 24 inches, plus 0.5 foot (6 inches) = 30 inches. (a) 25 confuses the decimal with inches. (c) 24 is 2 feet exactly. (d) 35 is 2 feet 11 inches."
      },
      {
        "module": 3,
        "q": "50.8 millimeters is equal to:",
        "choices": [
          "1 inch",
          "2 inches",
          "5 inches",
          "25.4 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1 inch = 25.4 mm, so 50.8 mm = 2 inches. (a) 1 inch is 25.4 mm. (c) 5 inches is 127 mm. (d) 25.4 inches is over 600 mm."
      },
      {
        "module": 3,
        "q": "A board is 1.75 feet long. In feet and inches, that is:",
        "choices": [
          "1 foot 7 inches",
          "1 foot 9 inches",
          "1 foot 5 inches",
          "2 feet 7 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0.75 foot x 12 = 9 inches, so 1.75 feet is 1 foot 9 inches. (a) 1 foot 7 inches is 1.58 feet. (c) 1 foot 5 inches is 1.42 feet. (d) 2 feet 7 inches is 2.58 feet."
      },
      {
        "module": 4,
        "q": "A wall is measured at 10 feet 3 inches. A second measurement reads 10 feet 3 1/4 inches. The best action is to:",
        "choices": [
          "Use the first measurement",
          "Measure a third time and use the reading that repeats",
          "Average the two",
          "Use the larger one"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Measure again \u2014 the reading that repeats is the right one. (a) The first reading may be the wrong one. (c) Averaging two readings hides the error. (d) The larger reading is not automatically right."
      },
      {
        "module": 4,
        "q": "When measuring a long run with a 25-foot tape, the most accurate method is to:",
        "choices": [
          "Stretch the tape tight and measure in one pull",
          "Measure in short segments, marking each one",
          "Let the tape sag",
          "Measure with the tape at an angle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Short segments with marks keep the tape straight and the error small. (a) A long pull sags and bends, adding error. (c) Sag adds length. (d) An angle measures longer than the straight distance."
      },
      {
        "module": 4,
        "q": "An outside measurement of a building is 40 feet 0 inches. The inside measurement of the same wall is 39 feet 5 inches. The difference is most likely:",
        "choices": [
          "A measuring error",
          "The thickness of the two walls",
          "The tape stretching",
          "The building settling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Outside minus inside equals the two wall thicknesses \u2014 7 inches is two 3 1/2-inch walls. (a) A 7-inch error is too big for a tape mistake. (c) A tape does not stretch 7 inches. (d) Settling does not change a wall's thickness."
      },
      {
        "module": 4,
        "q": "A tape measure's hook moves slightly in and out. That movement is there to:",
        "choices": [
          "Make the tape cheaper",
          "Account for the thickness of the hook in inside and outside measurements",
          "Let the tape bend",
          "Hold the tape in place"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The hook slides by its own thickness so inside and outside measurements are both correct. (a) It is a feature, not a cost saving. (c) The hook does not bend the tape. (d) The hook does not hold the tape in place."
      },
      {
        "module": 5,
        "q": "A room is 14 feet by 18 feet. Its area is:",
        "choices": [
          "32 square feet",
          "252 square feet",
          "64 square feet",
          "196 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 14 x 18 = 252 sq ft. (a) 32 is the sum of 14 and 18. (c) 64 is the perimeter divided by 1. (d) 196 is 14 x 14."
      },
      {
        "module": 5,
        "q": "A room is 14 feet by 18 feet. Its perimeter is:",
        "choices": [
          "252 feet",
          "64 feet",
          "32 feet",
          "56 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 x (14 + 18) = 64 feet. (a) 252 is the area. (c) 32 is 14 + 18, one side pair only. (d) 56 is 14 + 18 + 12 + 12 \u2014 not the perimeter."
      },
      {
        "module": 5,
        "q": "A triangle has a base of 8 feet and a height of 6 feet. Its area is:",
        "choices": [
          "48 square feet",
          "24 square feet",
          "14 square feet",
          "28 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 1/2 x base x height = 1/2 x 8 x 6 = 24 sq ft. (a) 48 is base x height without the half. (c) 14 is base + height. (d) 28 is not the area."
      },
      {
        "module": 5,
        "q": "A circle has a diameter of 10 feet. Its area is about:",
        "choices": [
          "31.4 square feet",
          "78.5 square feet",
          "314 square feet",
          "62.8 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Radius is 5 feet; area = 3.14 x 5 x 5 = 78.5 sq ft. (a) 31.4 is the circumference. (c) 314 uses the diameter as the radius. (d) 62.8 is twice the circumference."
      },
      {
        "module": 5,
        "q": "A rectangle is 12 feet long and 9 feet wide. Its diagonal is:",
        "choices": [
          "21 feet",
          "15 feet",
          "18 feet",
          "10 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The diagonal is the square root of 12^2 + 9^2 = 144 + 81 = 225, and the square root of 225 is 15 feet. (a) 21 is length + width. (c) 18 is not the diagonal. (d) 10 is too short."
      },
      {
        "module": 6,
        "q": "A slab is 16 feet by 20 feet and 4 inches thick. Its volume in cubic feet is about:",
        "choices": [
          "80 cubic feet",
          "106.7 cubic feet",
          "320 cubic feet",
          "64 cubic feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 16 x 20 x 1/3 foot = 106.7 cu ft. (a) 80 uses the wrong thickness. (c) 320 is the area times 1 foot. (d) 64 is 16 x 4."
      },
      {
        "module": 6,
        "q": "A slab needs 3.95 cubic yards of concrete. With 10% waste, the order should be:",
        "choices": [
          "3.95 cubic yards",
          "4.5 cubic yards",
          "4.0 cubic yards",
          "5.0 cubic yards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3.95 x 1.10 = 4.35, and concrete is ordered by the half yard, so round up to 4.5 cu yd. (a) 3.95 has no waste. (c) 4.0 is below 4.35. (d) 5.0 is more than needed."
      },
      {
        "module": 6,
        "q": "A footing is 50 feet long, 16 inches wide, and 10 inches deep. Its volume in cubic yards is about:",
        "choices": [
          "2.06 cubic yards",
          "1.5 cubic yards",
          "3.0 cubic yards",
          "0.74 cubic yards"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 50 x 4/3 x 5/6 = 55.6 cu ft, and 55.6 / 27 = 2.06 cu yd. (b) 1.5 is too small. (c) 3.0 is too big. (d) 0.74 is the volume of a 30-foot footing 12 inches by 8 inches."
      },
      {
        "module": 6,
        "q": "An 80-pound bag of concrete mix yields 0.6 cubic feet. How many bags are needed for 6 cubic feet?",
        "choices": [
          "6 bags",
          "10 bags",
          "12 bags",
          "8 bags"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6 / 0.6 = 10 bags. (a) 6 bags would give 3.6 cu ft. (c) 12 bags would give 7.2 cu ft. (d) 8 bags would give 4.8 cu ft."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A tape measure reads 2 feet 4 3/8 inches. In inches, that is:",
        "choices": [
          "24 3/8 inches",
          "28 3/8 inches",
          "27 3/8 inches",
          "26 3/8 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 feet is 24 inches, plus 4 3/8 = 28 3/8 inches. (a) 24 3/8 forgets the 4 inches. (c) 27 3/8 is one inch short. (d) 26 3/8 is two inches short."
      },
      {
        "module": 1,
        "q": "The mark 1/16 inch past 5/8 inch is:",
        "choices": [
          "9/16 inch",
          "11/16 inch",
          "5/8 inch",
          "3/4 inch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 5/8 is 10/16, plus 1/16 = 11/16. (a) 9/16 is one sixteenth below 5/8. (c) 5/8 is the starting mark. (d) 3/4 is 12/16, two sixteenths past."
      },
      {
        "module": 2,
        "q": "1/2 + 3/8 =",
        "choices": [
          "7/8",
          "5/8",
          "4/10",
          "1"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1/2 = 4/8, and 4/8 + 3/8 = 7/8. (b) 5/8 is 1/2 + 1/8. (c) 4/10 adds numerators and denominators, which is wrong. (d) 1 is 8/8, too big."
      },
      {
        "module": 2,
        "q": "Simplify 10/12 to lowest terms:",
        "choices": [
          "5/6",
          "2/3",
          "1/2",
          "5/12"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Divide top and bottom by 2: 10/12 = 5/6. (b) 2/3 is 8/12. (c) 1/2 is 6/12. (d) 5/12 is not 10/12."
      },
      {
        "module": 3,
        "q": "0.375 as a fraction in lowest terms is:",
        "choices": [
          "3/8",
          "3/5",
          "1/3",
          "5/8"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.375 = 375/1000 = 3/8. (b) 3/5 is 0.6. (c) 1/3 is about 0.333. (d) 5/8 is 0.625."
      },
      {
        "module": 3,
        "q": "1 meter is about:",
        "choices": [
          "3.28 feet",
          "1.5 feet",
          "12 feet",
          "39.37 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1 meter is 3.28 feet. (b) 1.5 feet is about 0.46 meters. (c) 12 feet is about 3.66 meters. (d) 39.37 is the number of inches in a meter, not feet."
      },
      {
        "module": 4,
        "q": "A room measures 12 feet 0 inches on one wall and 11 feet 11 1/2 inches on the opposite wall. The most likely cause is:",
        "choices": [
          "The tape is broken",
          "The walls are not parallel, or one measurement is off by a half inch",
          "The room is a perfect rectangle",
          "The floor is level"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Opposite walls should measure the same \u2014 a half-inch difference means the walls are not parallel or one reading is off. (a) A broken tape would give a bigger error. (c) A perfect rectangle would measure the same on both sides. (d) A level floor does not affect wall length."
      },
      {
        "module": 4,
        "q": "When measuring a long wall, the tape should be:",
        "choices": [
          "Allowed to sag in the middle",
          "Pulled straight and taut, level, with the hook flat against the end",
          "Held at an angle",
          "Measured from the middle out"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Straight, taut, level, hook flat \u2014 that is an accurate measurement. (a) Sag adds length. (c) An angle measures longer than the straight distance. (d) Measuring from the middle adds two readings and two errors."
      },
      {
        "module": 5,
        "q": "A floor is 20 feet by 25 feet. How many square feet of flooring are needed, before waste?",
        "choices": [
          "45 square feet",
          "500 square feet",
          "90 square feet",
          "450 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 20 x 25 = 500 sq ft. (a) 45 is the sum of 20 and 25. (c) 90 is 2 x (20 + 25). (d) 450 is 18 x 25."
      },
      {
        "module": 5,
        "q": "A triangular gable has a base of 24 feet and a height of 9 feet. Its area is:",
        "choices": [
          "216 square feet",
          "108 square feet",
          "66 square feet",
          "144 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1/2 x 24 x 9 = 108 sq ft. (a) 216 is base x height without the half. (c) 66 is base + height times 2. (d) 144 is 12 x 12."
      },
      {
        "module": 6,
        "q": "A round footing is 3 feet in diameter and 2 feet deep. Its volume is about:",
        "choices": [
          "14.1 cubic feet",
          "28.3 cubic feet",
          "9.4 cubic feet",
          "18.8 cubic feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Radius is 1.5 feet; area = 3.14 x 1.5 x 1.5 = 7.07 sq ft; times 2 feet deep = 14.1 cu ft. (b) 28.3 uses the diameter as the radius. (c) 9.4 is the area of a 3-foot circle times 1.33. (d) 18.8 is the circumference times 2."
      },
      {
        "module": 6,
        "q": "A box is 4 feet long, 3 feet wide, and 2 feet deep. Its volume is:",
        "choices": [
          "9 cubic feet",
          "24 cubic feet",
          "12 cubic feet",
          "18 cubic feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4 x 3 x 2 = 24 cu ft. (a) 9 is 4 + 3 + 2. (c) 12 is 4 x 3. (d) 18 is 3 x 2 x 3."
      },
      {
        "module": 7,
        "q": "A 2x6 that is 8 feet long has how many board feet?",
        "choices": [
          "6 board feet",
          "8 board feet",
          "12 board feet",
          "16 board feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Board feet = thickness x width x length / 12 = 2 x 6 x 8 / 12 = 8. (a) 6 is the width alone. (c) 12 is the length times 1.5. (d) 16 is 2 x 8."
      },
      {
        "module": 7,
        "q": "A 2x8 that is 10 feet long has how many board feet?",
        "choices": [
          "10 board feet",
          "13.33 board feet",
          "16 board feet",
          "8 board feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 x 8 x 10 / 12 = 160 / 12 = 13.33. (a) 10 is the length alone. (c) 16 is 2 x 8. (d) 8 is the width alone."
      },
      {
        "module": 7,
        "q": "Engineered wood (LVL, glulam) is used instead of solid lumber when:",
        "choices": [
          "The span is long or the load is heavy and a solid beam would be too big or too weak",
          "The wood will be hidden",
          "The budget is tight",
          "The beam is short"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Engineered wood is stronger and more consistent for long spans and heavy loads. (b) Hidden wood can be solid lumber. (c) Engineered wood costs more, not less. (d) Short beams are fine in solid lumber."
      },
      {
        "module": 7,
        "q": "A wall 24 feet long needs studs 16 inches on center. How many studs, before openings and waste?",
        "choices": [
          "18 studs",
          "19 studs",
          "24 studs",
          "16 studs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 24 feet = 288 inches; 288 / 16 = 18, plus 1 for the end stud = 19. (a) 18 forgets the end stud. (c) 24 is one stud per foot. (d) 16 is the spacing, not the count."
      },
      {
        "module": 8,
        "q": "A concrete mix is specified as 4,000 psi. That number is the concrete's:",
        "choices": [
          "Weight per cubic yard",
          "Compressive strength after 28 days",
          "Slump",
          "Air content"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Psi is the compressive strength, tested at 28 days. (a) Weight is in pounds per cubic foot. (c) Slump is the measure of workability. (d) Air content is a percentage."
      },
      {
        "module": 8,
        "q": "A 60-pound bag of concrete mix yields 0.45 cubic feet. How many bags are needed for 4.5 cubic feet?",
        "choices": [
          "10 bags",
          "6 bags",
          "9 bags",
          "12 bags"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 4.5 / 0.45 = 10 bags. (b) 6 bags would give 2.7 cu ft. (c) 9 bags would give 4.05 cu ft. (d) 12 bags would give 5.4 cu ft."
      },
      {
        "module": 8,
        "q": "A steel beam is labeled W8x31. The 8 means the beam is about:",
        "choices": [
          "8 inches deep",
          "8 feet long",
          "8 pounds per foot",
          "8 inches wide"
        ],
        "answer": 0,
        "explanation": "Correct: (a). In a W-shape label, the first number is the nominal depth in inches. (b) Length is not in the label. (c) The 31 is the weight per foot. (d) Width is the flange width, not given by the first number."
      },
      {
        "module": 8,
        "q": "A concrete block wall needs mortar joints of 3/8 inch. A block is actually 15 5/8 inches long. With one joint, the block plus joint measures:",
        "choices": [
          "15 5/8 inches",
          "16 inches",
          "15 inches",
          "16 3/8 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 15 5/8 + 3/8 = 16 inches \u2014 the nominal module. (a) That is the block alone. (c) 15 is too short. (d) 16 3/8 adds the joint twice."
      },
      {
        "module": 9,
        "q": "A 16d common nail is used for:",
        "choices": [
          "Finish work",
          "Framing",
          "Roofing shingles",
          "Drywall"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 16d common nails are framing nails. (a) Finish work uses finish nails. (c) Roofing uses roofing nails. (d) Drywall uses drywall screws or nails."
      },
      {
        "module": 9,
        "q": "A lag screw is best for:",
        "choices": [
          "Hanging a picture",
          "Attaching a heavy ledger board to a wall",
          "Fastening drywall",
          "Nailing shingles"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lag screws are heavy-duty fasteners for ledgers and heavy connections. (a) A picture needs a small nail or hook. (c) Drywall uses drywall screws. (d) Shingles use roofing nails."
      },
      {
        "module": 9,
        "q": "A joist hanger is used to:",
        "choices": [
          "Hang a picture",
          "Connect a joist to a beam or ledger with a metal bracket",
          "Hold a saw blade",
          "Support a roof truss only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A joist hanger is a metal bracket connecting a joist to a beam or ledger. (a) Pictures use hooks. (c) A saw blade is held by the saw. (d) Hangers are used for joists, not only trusses."
      },
      {
        "module": 10,
        "q": "A hand saw cuts on the push stroke. The teeth should point:",
        "choices": [
          "Away from the handle",
          "Toward the handle",
          "Up",
          "Down"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A Western hand saw cuts on the push stroke, so the teeth point away from the handle. (b) Teeth pointing toward the handle would cut on the pull. (c) and (d) Up and down are not the cutting direction."
      },
      {
        "module": 10,
        "q": "A level is checked for accuracy by:",
        "choices": [
          "Dropping it",
          "Flipping it end for end on the same surface and checking the bubble reads the same",
          "Reading it once",
          "Weighing it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Flip the level end for end \u2014 if the bubble reads the same both ways, the level is true. (a) Dropping a level damages it. (c) One reading cannot prove accuracy. (d) Weight has nothing to do with accuracy."
      },
      {
        "module": 10,
        "q": "A combination square is used to:",
        "choices": [
          "Measure long distances",
          "Check 90-degree and 45-degree angles and mark lines",
          "Cut wood",
          "Drive nails"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A combination square checks 90 and 45 degrees and marks lines. (a) Long distances need a tape. (c) A square does not cut. (d) A square does not drive nails."
      },
      {
        "module": 11,
        "q": "A circular saw's blade guard must:",
        "choices": [
          "Be removed for better visibility",
          "Be in place and snap back to cover the blade after a cut",
          "Be tied back for all cuts",
          "Be removed when cutting thin material"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The guard must be in place and return to cover the blade. (a), (c), and (d) Removing or tying back the guard leaves the blade exposed."
      },
      {
        "module": 11,
        "q": "A drill bit that is smoking and turning blue is:",
        "choices": [
          "Working well",
          "Overheating \u2014 stop, let it cool, and use cutting oil or a slower speed",
          "Too sharp",
          "The wrong color"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Smoke and blueing mean the bit is overheating \u2014 stop and cool it. (a) Smoking is a sign of failure, not good work. (c) A sharp bit does not smoke. (d) Color is the symptom, not the problem."
      },
      {
        "module": 11,
        "q": "Before changing a blade on a power saw, you must:",
        "choices": [
          "Leave it plugged in",
          "Unplug it (or remove the battery) and wait for the blade to stop",
          "Hold the blade with your hand",
          "Change it while it is running"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Unplug or remove the battery and wait for a full stop. (a) A plugged-in saw can start. (c) Never hold a blade by hand. (d) Never change a blade on a running saw."
      },
      {
        "module": 12,
        "q": "A sling is lifting 800 pounds with two legs at a 60-degree angle from horizontal. The load on each leg is about:",
        "choices": [
          "400 pounds",
          "462 pounds",
          "800 pounds",
          "200 pounds"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At 60 degrees, each leg carries 800 / (2 x sin 60) = 800 / 1.732 = 462 pounds. (a) 400 assumes the legs are vertical. (c) 800 is the total load, not per leg. (d) 200 is a quarter of the load."
      },
      {
        "module": 12,
        "q": "A sling is lifting 800 pounds with two legs at a 30-degree angle from horizontal. The load on each leg is:",
        "choices": [
          "400 pounds",
          "462 pounds",
          "800 pounds",
          "566 pounds"
        ],
        "answer": 2,
        "explanation": "Correct: (c). At 30 degrees, each leg carries 800 / (2 x sin 30) = 800 / 1 = 800 pounds \u2014 the full load on each leg. (a) 400 assumes vertical legs. (b) 462 is the load at 60 degrees. (d) 566 is the load at 45 degrees."
      },
      {
        "module": 12,
        "q": "The lower the sling angle, the:",
        "choices": [
          "Lower the load on each leg",
          "Higher the load on each leg",
          "Lighter the load",
          "Shorter the sling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A lower angle means each leg carries more \u2014 at 30 degrees each leg carries the full load. (a) The opposite is true. (c) The load does not change. (d) Angle and length are different things."
      },
      {
        "module": 12,
        "q": "A rigger gives a hand signal with one arm raised and the index finger making a small circle. That signal means:",
        "choices": [
          "Stop",
          "Hoist (raise the load)",
          "Lower the load",
          "Emergency stop"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A raised arm with a circling finger is the hoist signal. (a) Stop is an arm extended horizontally. (c) Lower is an arm extended down with a circling finger. (d) Emergency stop is both arms extended horizontally."
      },
      {
        "module": 12,
        "q": "A 3-4-5 triangle is used to check:",
        "choices": [
          "A level",
          "That a corner is square",
          "A plumb wall",
          "A roof pitch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 3-4-5 triangle (or 6-8-10, 9-12-15) checks that a corner is 90 degrees. (a) A level checks level, not square. (c) A plumb bob checks plumb. (d) A pitch gauge checks roof pitch."
      },
      {
        "module": 12,
        "q": "A load's center of gravity matters in rigging because:",
        "choices": [
          "It determines the color of the sling",
          "The load must be lifted from above its center of gravity or it will tip",
          "It determines the load's weight",
          "It is not important"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lift above the center of gravity or the load tips. (a) Color has nothing to do with it. (c) Weight is separate from balance. (d) Balance is one of the most important rigging factors."
      },
      {
        "module": 12,
        "q": "A wire rope sling with broken wires and a kink should be:",
        "choices": [
          "Used carefully",
          "Removed from service",
          "Used for light loads only",
          "Straightened and used"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Broken wires and kinks mean the sling is damaged and must be removed from service. (a) Careful use does not fix damage. (c) Light loads still use the damaged sling. (d) Straightening a kink does not restore strength."
      },
      {
        "module": 5,
        "q": "A deck is 12 feet by 16 feet. Its area is:",
        "choices": [
          "28 square feet",
          "192 square feet",
          "56 square feet",
          "144 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 12 x 16 = 192 sq ft. (a) 28 is the sum of 12 and 16. (c) 56 is 2 x (12 + 16). (d) 144 is 12 x 12."
      },
      {
        "module": 6,
        "q": "A cylinder has a radius of 2 feet and a height of 5 feet. Its volume is about:",
        "choices": [
          "31.4 cubic feet",
          "62.8 cubic feet",
          "20 cubic feet",
          "125.6 cubic feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Volume = 3.14 x 2 x 2 x 5 = 62.8 cu ft. (a) 31.4 is the area of the base times 1 foot. (c) 20 is radius times height times 2. (d) 125.6 doubles the volume."
      },
      {
        "module": 7,
        "q": "A 2x6 that is 12 feet long has how many board feet?",
        "choices": [
          "12 board feet",
          "6 board feet",
          "10 board feet",
          "24 board feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2 x 6 x 12 / 12 = 12 board feet. (b) 6 is the width alone. (c) 10 is not the calculation. (d) 24 is 2 x 12."
      },
      {
        "module": 3,
        "q": "A dimension of 100 millimeters is about:",
        "choices": [
          "4 inches",
          "10 inches",
          "1 inch",
          "2.5 inches"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 100 mm / 25.4 = 3.94 inches, about 4 inches. (b) 10 inches is 254 mm. (c) 1 inch is 25.4 mm. (d) 2.5 inches is 63.5 mm."
      }
    ]
  }
};
