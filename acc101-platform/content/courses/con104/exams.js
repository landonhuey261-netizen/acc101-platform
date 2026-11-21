// con104 — Midterm and Final exams.
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
        "q": "A site plan is drawn at 1 inch = 10 feet. A patio measures 3.5 inches on the paper. How long is it on the ground?",
        "choices": [
          "3.5 feet",
          "35 feet",
          "350 feet",
          "10 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3.5 × 10 = 35 feet. (a) Forgets the scale. (c) Multiplies by 100. (d) Is the scale itself, not the length."
      },
      {
        "module": 1,
        "q": "A lot is 100 feet wide with side setbacks of 15 feet on each side. How wide is the buildable area?",
        "choices": [
          "70 feet",
          "85 feet",
          "100 feet",
          "130 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 100 − 15 − 15 = 70 feet. (b) Subtracts only one setback. (c) Ignores the setbacks. (d) Adds instead of subtracting."
      },
      {
        "module": 1,
        "q": "Two contour lines 2 feet apart in elevation are 10 feet apart on the ground. What is the slope?",
        "choices": [
          "5%",
          "10%",
          "20%",
          "2%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 2 ÷ 10 = 0.20, or 20%. (a) Divides the wrong way. (b) Uses 1 foot of rise. (d) Is the rise alone as a percent."
      },
      {
        "module": 1,
        "q": "A spot elevation at a house is 205.00 feet and at the street is 203.50 feet, 50 feet away. What is the slope from the house to the street?",
        "choices": [
          "1.5%",
          "3%",
          "5%",
          "15%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fall is 1.50 feet over 50 feet: 1.50 ÷ 50 = 0.03, or 3%. (a) Is the fall in feet, not the slope. (c) Uses the wrong run. (d) Multiplies by 10."
      },
      {
        "module": 2,
        "q": "A tape pulled down a slope without breaking tape records a distance that is:",
        "choices": [
          "Shorter than the true horizontal distance",
          "Longer than the true horizontal distance",
          "Exactly the horizontal distance",
          "Unrelated to the slope"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The tape follows the slope — the hypotenuse — which is longer than the level distance. (a) Reverses the geometry. (c) Only true if the tape is level. (d) Slope directly changes the reading."
      },
      {
        "module": 2,
        "q": "On a laser level receiver, a fast beep means:",
        "choices": [
          "Move the receiver up",
          "Move the receiver down",
          "The receiver is level with the beam",
          "The battery is dead"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fast beep means the beam is below the receiver, so move down. (a) A slow beep means move up. (c) A solid beep means level. (d) A dead battery gives no beep."
      },
      {
        "module": 2,
        "q": "Survey-grade GPS works poorly:",
        "choices": [
          "In an open field",
          "Under heavy tree cover where the sky is blocked",
          "On flat ground",
          "On a calm day"
        ],
        "answer": 1,
        "explanation": "Correct: (b). GPS needs a clear view of satellites. (a) Open sky is ideal for GPS. (c) Flat ground is ideal. (d) Calm weather does not affect GPS."
      },
      {
        "module": 2,
        "q": "A builder’s level is dropped on the job. Before trusting it again, the crew should:",
        "choices": [
          "Use it anyway — levels are tough",
          "Check it against a known benchmark or with a two-peg test",
          "Leave it in the sun to dry",
          "Buy a new tripod"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A knock can shift the line of sight, so the level must be proven true. (a) Trusting a possibly false level bakes errors into the work. (c) Sun does not fix alignment. (d) The tripod is not the problem."
      },
      {
        "module": 3,
        "q": "A benchmark is 200.00 feet and the backsight reads 5.00 feet. The HI is:",
        "choices": [
          "195.00 feet",
          "200.00 feet",
          "205.00 feet",
          "210.00 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). HI = 200.00 + 5.00 = 205.00. (a) Subtracts. (b) Forgets the backsight. (d) Adds the backsight twice."
      },
      {
        "module": 3,
        "q": "With an HI of 205.00 feet, a foresight of 7.50 feet gives an elevation of:",
        "choices": [
          "197.50 feet",
          "212.50 feet",
          "205.00 feet",
          "200.00 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 205.00 − 7.50 = 197.50. (b) Adds instead of subtracting. (c) Forgets the foresight. (d) Uses the benchmark instead of the HI."
      },
      {
        "module": 3,
        "q": "The ground at a stake is 98.00 feet and the finished grade is 98.75 feet. The stake should read:",
        "choices": [
          "CUT 0.75",
          "FILL 0.75",
          "CUT 1.75",
          "FILL 1.75"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The ground is below grade, so fill 98.75 − 98.00 = 0.75 feet. (a) Cut is the opposite. (c) and (d) use the wrong difference."
      },
      {
        "module": 3,
        "q": "A leveling run starts at a benchmark of 100.00 feet and closes back at 100.02 feet. The closing error is:",
        "choices": [
          "0.00 feet",
          "0.02 feet",
          "0.20 feet",
          "2.00 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 100.02 − 100.00 = 0.02 feet. (a) Would mean a perfect closure. (c) Is ten times too big. (d) Is a hundred times too big."
      },
      {
        "module": 4,
        "q": "A 9-12-15 check is run at a corner. The diagonal between the 9-foot and 12-foot marks should measure:",
        "choices": [
          "12 feet",
          "15 feet",
          "21 feet",
          "9 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 9² + 12² = 81 + 144 = 225, and √225 = 15. (a) Is one side. (c) Adds the sides. (d) Is the other side."
      },
      {
        "module": 4,
        "q": "A 3-4-5 check gives a diagonal of 5 feet 6 inches. The corner is:",
        "choices": [
          "Square",
          "Open — wider than 90 degrees",
          "Pinched — narrower than 90 degrees",
          "Impossible to judge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A long diagonal means the corner is open. (a) Square reads exactly 5 feet. (c) A pinched corner reads short. (d) The reading tells you exactly what is wrong."
      },
      {
        "module": 4,
        "q": "A rectangle is 12 feet by 16 feet. Each diagonal should measure:",
        "choices": [
          "28 feet",
          "20 feet",
          "14 feet",
          "32 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). √(12² + 16²) = √400 = 20 feet. (a) Adds the sides. (c) Is half of 28. (d) Doubles 16."
      },
      {
        "module": 4,
        "q": "The two diagonals of a building layout measure 41 feet 2 inches and 41 feet 0 inches. The layout is:",
        "choices": [
          "Square",
          "A parallelogram leaning toward the long diagonal",
          "Too small to use",
          "Ready to pour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Unequal diagonals mean the rectangle is leaning. (a) Square layouts have equal diagonals. (c) Size is not the issue. (d) Never pour on a failed check."
      },
      {
        "module": 5,
        "q": "A crew sets batter boards 4 feet back from the building corners. The building is 30 feet by 40 feet. How far apart are the batter boards on the 40-foot side?",
        "choices": [
          "40 feet",
          "44 feet",
          "48 feet",
          "36 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The boards sit 4 feet past each corner, so 40 + 4 + 4 = 48 feet. (a) Ignores the setback. (b) Adds only one setback. (d) Subtracts the setback instead of adding it."
      },
      {
        "module": 5,
        "q": "String positions on batter boards should be marked with:",
        "choices": [
          "A pencil note",
          "A saw kerf, nail, or paint mark",
          "A loose knot",
          "Chalk that washes off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A permanent mark survives rain and handling. (a) Pencil washes off. (c) A knot is not a position mark. (d) Chalk washes off."
      },
      {
        "module": 5,
        "q": "A string line runs between two batter boards at the top of the foundation. A plumb bob is hung from the line at the corner mark. What does the bob point to?",
        "choices": [
          "The corner stake below, exactly under the line",
          "The center of the building",
          "The benchmark",
          "The top of the batter board"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The plumb bob hangs straight down, so it transfers the line’s corner point to the ground. (b) The bob points straight down, not to the center. (c) The benchmark is a fixed elevation point, not under the line. (d) The bob hangs below the line, not at the board top."
      },
      {
        "module": 5,
        "q": "The tops of batter boards on a job are usually set:",
        "choices": [
          "At random heights",
          "Level with each other, at top-of-foundation height",
          "Below the footing",
          "At ground level"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Level boards mean the strings carry one true height. (a) Random heights make the strings wrong. (c) Below the footing is useless. (d) Ground level varies across the site."
      },
      {
        "module": 6,
        "q": "A footing carries 9,000 pounds on 6 square feet of soil. The bearing pressure is:",
        "choices": [
          "1,500 psf",
          "9,000 psf",
          "54,000 psf",
          "6 psf"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 9,000 ÷ 6 = 1,500 psf. (b) Forgets to divide by the area. (c) Multiplies instead of dividing. (d) Divides the wrong way."
      },
      {
        "module": 6,
        "q": "A footing must sit below the frost line because:",
        "choices": [
          "Concrete cannot set above it",
          "Freezing ground above the line would heave the footing",
          "It marks the property line",
          "Inspectors like deep trenches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Water in the soil freezes, expands, and lifts the footing. (a) Concrete sets at any depth. (c) The frost line is a depth, not a boundary. (d) Inspector preference is not the reason."
      },
      {
        "module": 6,
        "q": "Fill should be compacted in lifts of:",
        "choices": [
          "6 to 8 inches",
          "3 to 4 feet",
          "One lift for the whole depth",
          "1 inch"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Thin lifts let compaction reach the bottom of each layer. (b) A 3-foot lift compacts only on top. (c) One deep lift leaves the bottom soft. (d) One-inch lifts are impractical and unnecessary."
      },
      {
        "module": 6,
        "q": "Topsoil must be stripped before building because:",
        "choices": [
          "It is the wrong color",
          "It is full of organic matter that rots and settles",
          "It is too strong",
          "It costs too much"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rotting organic matter keeps settling for years. (a) Color is irrelevant. (c) Topsoil is weak, not strong. (d) Stripping is standard, not a cost issue."
      },
      {
        "module": 6,
        "q": "Expansive clay is a problem because it:",
        "choices": [
          "Never changes",
          "Swells when wet and shrinks when dry, moving the ground",
          "Drains too fast",
          "Is impossible to dig"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The seasonal swelling and shrinking moves foundations. (a) Change is the whole problem. (c) Clay drains slowly, not fast. (d) Clay is diggable; movement is the issue."
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
        "q": "A site plan at 1 inch = 20 feet shows a building 1.5 inches wide. The building is really:",
        "choices": [
          "1.5 feet wide",
          "20 feet wide",
          "30 feet wide",
          "40 feet wide"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 1.5 × 20 = 30 feet. (a) Forgets the scale. (b) Is one inch worth. (d) Uses 2 inches instead of 1.5."
      },
      {
        "module": 1,
        "q": "A site plan shows a 10-foot-wide utility easement along the rear of a 100-foot-wide lot. How much of the lot width is free of the easement?",
        "choices": [
          "100 feet",
          "90 feet",
          "10 feet",
          "110 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 100 − 10 = 90 feet are outside the easement. (a) Ignores the easement. (c) Is the easement width itself. (d) Adds instead of subtracting."
      },
      {
        "module": 1,
        "q": "Contour lines that are far apart mean the ground is:",
        "choices": [
          "Steep",
          "Nearly flat",
          "Below sea level",
          "Wet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Far-apart contours mean little height change over distance. (a) Close contours mean steep. (c) Elevation, not spacing, gives height above sea level. (d) Wetness is not shown by contours."
      },
      {
        "module": 2,
        "q": "On a slope, the crew breaks tape into short level steps because:",
        "choices": [
          "It is faster",
          "A tape on the slope measures the longer slope distance, not the horizontal distance",
          "The tape is too short",
          "The surveyor requires it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Level steps give the true horizontal distance. (a) Breaking tape is slower but accurate. (c) Tape length is not the issue. (d) It is geometry, not a preference."
      },
      {
        "module": 2,
        "q": "On a laser receiver, a solid beep means:",
        "choices": [
          "Move up",
          "Move down",
          "The receiver is level with the beam",
          "The battery is low"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A solid beep means the receiver is on grade. (a) A slow beep means move up. (b) A fast beep means move down. (d) A low battery gives no beep or a warning light."
      },
      {
        "module": 2,
        "q": "A total station measures to a prism because:",
        "choices": [
          "The prism is heavy",
          "The prism reflects the instrument’s beam back so distance can be measured",
          "The prism is colorful",
          "The prism holds the rod upright"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The reflected beam lets the instrument measure distance. (a) Weight is irrelevant. (c) Color does not matter. (d) The rod holder is a different job."
      },
      {
        "module": 3,
        "q": "A benchmark is 50.00 feet and the backsight reads 3.25 feet. The HI is:",
        "choices": [
          "46.75 feet",
          "50.00 feet",
          "53.25 feet",
          "56.50 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). HI = 50.00 + 3.25 = 53.25. (a) Subtracts. (b) Forgets the backsight. (d) Adds the backsight twice."
      },
      {
        "module": 3,
        "q": "With an HI of 53.25 feet, a foresight of 4.75 feet gives an elevation of:",
        "choices": [
          "48.50 feet",
          "58.00 feet",
          "53.25 feet",
          "49.00 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 53.25 − 4.75 = 48.50. (b) Adds instead of subtracting. (c) Forgets the foresight. (d) Uses the wrong subtraction."
      },
      {
        "module": 3,
        "q": "A turning point sinks 0.10 feet between the two readings. Every elevation after it will be:",
        "choices": [
          "Correct",
          "Wrong by 0.10 feet",
          "Wrong by 1.00 foot",
          "Wrong by the height of the instrument"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The second setup starts from a point 0.10 feet lower, so the error carries forward. (a) A moved turning point breaks the chain. (c) Ten times too big. (d) The HI does not set the error."
      },
      {
        "module": 4,
        "q": "A 6-8-10 check is run at a corner. The diagonal between the 6-foot and 8-foot marks should measure:",
        "choices": [
          "8 feet",
          "10 feet",
          "14 feet",
          "6 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6² + 8² = 36 + 64 = 100, and √100 = 10. (a) Is one side. (c) Adds the sides. (d) Is the other side."
      },
      {
        "module": 4,
        "q": "A 3-4-5 check gives a diagonal of 4 feet 9 inches. The corner is:",
        "choices": [
          "Square",
          "Open",
          "Pinched — narrower than 90 degrees",
          "Too big to check"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A short diagonal means the corner is pinched. (a) Square reads exactly 5 feet. (b) An open corner reads long. (d) Size does not prevent the check."
      },
      {
        "module": 4,
        "q": "A rectangle is 20 feet by 15 feet. Each diagonal should measure:",
        "choices": [
          "35 feet",
          "25 feet",
          "17.5 feet",
          "50 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). √(20² + 15²) = √625 = 25 feet. (a) Adds the sides. (c) Is half of 35. (d) Doubles the answer."
      },
      {
        "module": 5,
        "q": "All the batter boards on a job are set with their tops at elevation 102.00 feet. A string is stretched between two boards. What is the elevation of the string?",
        "choices": [
          "102.00 feet",
          "100.00 feet",
          "104.00 feet",
          "It cannot be known"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The string sits on the board tops, so it is at 102.00 feet. (b) and (c) add or subtract a phantom amount. (d) The string elevation is exactly the board-top elevation."
      },
      {
        "module": 5,
        "q": "Two string lines cross at a corner of a building layout. The crew drops a plumb bob from the crossing point and drives a stake. What does the stake mark?",
        "choices": [
          "The building corner",
          "The center of the lot",
          "The benchmark",
          "The batter board"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The crossing of the two lines is the corner, and the plumb bob transfers it to the ground. (b) The center is not marked this way. (c) The benchmark is a separate fixed point. (d) The batter board is offset from the corner."
      },
      {
        "module": 5,
        "q": "A crew wants to pull the batter boards on a job. The foundation walls are poured and the corners are marked on the walls. Can the boards come down?",
        "choices": [
          "Yes — the corners are now marked on the foundation itself",
          "No — batter boards must stay for the whole job",
          "Yes — batter boards are only needed for one day",
          "No — the boards hold the foundation up"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Once the corners are transferred to the foundation, the boards have done their job. (b) The boards are temporary layout tools, not permanent. (c) They are needed until the layout is transferred, which takes more than a day. (d) Batter boards do not support anything."
      },
      {
        "module": 6,
        "q": "Which soil drains the fastest?",
        "choices": [
          "Clay",
          "Silt",
          "Sand",
          "Topsoil"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Sand’s large grains let water pass quickly. (a) Clay holds water. (b) Silt holds water longer than sand. (d) Topsoil holds water in its organic matter."
      },
      {
        "module": 6,
        "q": "A fill is tested at 95% of Proctor maximum and the specification requires 95%. The fill:",
        "choices": [
          "Fails — it must be 100%",
          "Passes — it meets the specification",
          "Must be removed",
          "Needs water only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Meeting the specified percentage is a pass. (a) 100% is not the specification. (c) Removal is for failed or unknown fill, not a pass. (d) Water alone does not change density."
      },
      {
        "module": 6,
        "q": "The water table is:",
        "choices": [
          "The top of the foundation wall",
          "The depth below which the ground is saturated with water",
          "A table used for surveying",
          "The level of the nearest lake"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It is the saturation depth found in the soil report. (a) That is a building height. (c) No such table exists. (d) A lake level is not the water table."
      },
      {
        "module": 7,
        "q": "A dig is 27 feet by 12 feet by 6 feet deep. Its volume in cubic yards is:",
        "choices": [
          "72",
          "1,944",
          "27",
          "324"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 27 × 12 × 6 = 1,944 cubic feet; 1,944 ÷ 27 = 72 cubic yards. (b) Is the cubic-foot number. (c) Is the conversion factor. (d) Is a different dig’s volume."
      },
      {
        "module": 7,
        "q": "One hundred bank cubic yards of soil swell 20% when dug. The loose volume is:",
        "choices": [
          "80 cubic yards",
          "100 cubic yards",
          "120 cubic yards",
          "200 cubic yards"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 100 × 1.20 = 120 loose yards. (a) Swell increases volume, not decreases it. (b) Ignores the swell. (d) Doubles instead of adding 20%."
      },
      {
        "module": 7,
        "q": "The best machine for spreading fill and shaping the rough grade across a large pad is:",
        "choices": [
          "A mini-excavator",
          "A bulldozer",
          "A backhoe",
          "A dump truck"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dozer’s wide blade pushes and grades large areas. (a) A mini-excavator digs precisely but slowly grades. (c) A backhoe is for mixed small jobs. (d) A dump truck hauls, it does not grade."
      },
      {
        "module": 7,
        "q": "Spoil piles must be kept at least how far from an excavation edge?",
        "choices": [
          "6 inches",
          "2 feet",
          "10 feet",
          "25 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two feet keeps the weight off the wall and material from falling in. (a) Six inches is far too close. (c) and (d) are not the rule."
      },
      {
        "module": 8,
        "q": "A trench 8 feet deep in Type A soil is sloped at 3/4 to 1. Each wall is cut back:",
        "choices": [
          "8 feet",
          "6 feet",
          "12 feet",
          "4 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 8 × 0.75 = 6 feet. (a) Is the 1:1 cutback. (c) Is the Type C cutback. (d) Is half the depth."
      },
      {
        "module": 8,
        "q": "A trench is exactly 5 feet deep. A protective system is:",
        "choices": [
          "Not required",
          "Required",
          "Required only in Type C soil",
          "Required only after 20 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At 5 feet or deeper, protection is mandatory unless the cut is in solid rock. (a) Under 5 feet is the exception. (c) All soil types need protection at 5 feet. (d) Twenty feet triggers an engineer’s design, not the first protection."
      },
      {
        "module": 8,
        "q": "Shoring must be installed:",
        "choices": [
          "From inside the trench, bottom up",
          "From outside the trench, top down",
          "After the workers are in",
          "Only on weekends"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Installing from the top down keeps workers out of the unprotected trench. (a) Bottom-up from inside puts workers in danger. (c) Workers enter only after protection is in. (d) Timing of the week is irrelevant."
      },
      {
        "module": 8,
        "q": "A trench box rated for 10 feet is on site and the trench is 12 feet deep. The crew should:",
        "choices": [
          "Use it — 2 feet over is close enough",
          "Not use it; get a box rated for the depth or another system",
          "Use it only at the shallow end",
          "Stack two boxes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A box rated below the trench depth leaves workers unprotected. (a) Ratings are maximums, not suggestions. (c) The deep end is where the danger is. (d) Stacking boxes is not an approved field fix."
      },
      {
        "module": 9,
        "q": "A grade falls 4 feet over a run of 80 feet. The slope is:",
        "choices": [
          "4%",
          "5%",
          "20%",
          "0.5%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4 ÷ 80 = 0.05, or 5%. (a) Is the fall in feet. (c) Uses the wrong run. (d) Is ten times too small."
      },
      {
        "module": 9,
        "q": "The standard fall away from a foundation in the first 10 feet is at least:",
        "choices": [
          "6 inches",
          "6 feet",
          "1 inch",
          "2 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Six inches in ten feet is about a 5% slope. (b) Six feet is absurdly steep. (c) One inch is too flat to move water. (d) Two feet is far more than the rule."
      },
      {
        "module": 9,
        "q": "A French drain collects:",
        "choices": [
          "Roof water from gutters",
          "Groundwater through perforated pipe in gravel",
          "Sewage",
          "Drinking water"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The perforated pipe gathers water through the gravel. (a) Gutters drain to downspouts. (c) Sewage runs in a sealed lateral. (d) Drinking water runs in a pressurized service."
      },
      {
        "module": 9,
        "q": "A dry well is:",
        "choices": [
          "A well that has run dry",
          "A buried stone pit that lets water soak into the ground",
          "A basement sump",
          "A type of swale"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The stone pit stores water and releases it slowly into the soil. (a) That is a failed water well. (c) A sump collects water to pump it out. (d) A swale is an open surface channel."
      },
      {
        "module": 10,
        "q": "Blue utility markings mean:",
        "choices": [
          "Gas",
          "Electric",
          "Water",
          "Sewer"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Blue is water. (a) Gas is yellow. (b) Electric is red. (d) Sewer is green."
      },
      {
        "module": 10,
        "q": "Inside the tolerance zone around a marked utility line, digging must be:",
        "choices": [
          "By machine, quickly",
          "By hand or vacuum excavation",
          "With a bulldozer",
          "Skipped entirely"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hand digging cannot cut a line the way a bucket can. (a) Machine digging inside the zone causes strikes. (c) A bulldozer is the worst tool near a line. (d) The work still has to be done — carefully."
      },
      {
        "module": 10,
        "q": "A sewer lateral 48 feet long must fall 1/4 inch per foot. Its total fall is:",
        "choices": [
          "4 inches",
          "12 inches",
          "48 inches",
          "1 inch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 48 × 0.25 = 12 inches. (a) Uses 1/12 inch per foot. (c) Is the length in feet, not the fall. (d) Is one foot’s worth."
      },
      {
        "module": 10,
        "q": "Orange utility markings mean:",
        "choices": [
          "Water",
          "Gas",
          "Communications (phone, cable, fiber)",
          "Sewer"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Orange is communications. (a) Water is blue. (b) Gas is yellow. (d) Sewer is green."
      },
      {
        "module": 11,
        "q": "A silt fence is installed on a slope to catch sediment. The stakes are driven on the downhill side of the fabric. Why?",
        "choices": [
          "So the water pressure pushes the fabric against the stakes",
          "So the stakes are easier to see",
          "So the fence is taller",
          "So the stakes do not get wet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Water flowing downhill presses the fabric into the stakes, which hold it. (b) Visibility is not the reason. (c) Stake side does not change the height. (d) Stakes get wet either way."
      },
      {
        "module": 11,
        "q": "A silt fence 2 feet high has sediment 12 inches deep behind it. The crew should:",
        "choices": [
          "Leave it — it is only half full",
          "Clean it out now, since it has reached half its height",
          "Wait until it is full",
          "Remove the fence"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Half full is the service point; beyond that it overtops. (a) Half full is exactly when service is due. (c) A full fence has already failed. (d) The fence is still needed."
      },
      {
        "module": 11,
        "q": "A storm drain inlet sits at the low corner of a construction lot. The crew places a fabric barrier around it. What is the barrier for?",
        "choices": [
          "To keep sediment out of the storm drain",
          "To keep rain out of the lot",
          "To mark the property line",
          "To hold the inlet in place"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Inlet protection traps sediment before it enters the drain. (b) Rain cannot be kept out of a lot. (c) Property lines are marked by survey, not by barriers. (d) The inlet is set in concrete, not held by fabric."
      },
      {
        "module": 12,
        "q": "The 811 call happens:",
        "choices": [
          "After the foundation is poured",
          "Before any digging, so utilities can be marked",
          "Only on commercial jobs",
          "After the first utility strike"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The call is legally required before excavation. (a) By then the digging is done. (c) The call is required on every dig. (d) After a strike is far too late."
      },
      {
        "module": 12,
        "q": "The sitework crew finishes the pad and hands the lot to the concrete crew. The pad is graded, the stakes are set, and the utilities are marked. What else must the handoff include?",
        "choices": [
          "The benchmark elevation and the grade stakes, so the concrete crew can check elevations",
          "Nothing — the pad is enough",
          "The silt fence rolls",
          "The excavator keys"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The concrete crew needs the benchmark and stakes to set forms and pour to grade. (b) Elevations are essential to the pour. (c) Silt fence is the sitework crew’s job. (d) Keys are not part of a handoff."
      },
      {
        "module": 12,
        "q": "A student finishes this course and wants to run an excavator on a real job the next day. What should the student know?",
        "choices": [
          "The course taught planning and calculation, not hands-on equipment skill — that comes from training and supervised practice",
          "The course certifies the student to operate equipment",
          "The labs grade hands-on skill",
          "No further training is needed"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The labs are planning and calculation exercises; hands-on skill needs real training and practice. (b) The app does not certify anyone. (c) The labs do not grade hands-on skill. (d) Real equipment work needs real training."
      }
    ]
  }
};
