// con102 - Module 2: Fractions: Adding, Subtracting & Simplifying
module.exports = {
  "number": 2,
  "slug": "fractions-adding-subtracting-simplifying",
  "title": "Fractions: Adding, Subtracting & Simplifying",
  "estTime": "3–4 hours",
  "objectives": [
    "Simplify fractions to lowest terms.",
    "Add and subtract fractions with the same denominator and with different denominators.",
    "Add and subtract mixed numbers (feet and inches) correctly.",
    "Multiply and divide fractions, including dividing a length into equal pieces.",
    "Apply fractions to real layout problems: spacing, cutting, and leftover material."
  ],
  "sections": [
    {
      "heading": "What a Fraction Means on Site",
      "html": "<p>A fraction is a part of a whole, and on a jobsite the whole is usually an inch, a foot, or a board. The bottom number \u2014 the <strong>denominator</strong> \u2014 says how many equal parts the whole is cut into, and the top number \u2014 the <strong>numerator</strong> \u2014 says how many of those parts you have. In 3/4 inch, the inch is cut into 4 parts and you have 3 of them. In 5/16 inch, the inch is cut into 16 parts and you have 5.</p>\n<p>Two fractions can name the same length: 1/2, 2/4, 4/8, and 8/16 are all the same distance. That is why simplifying matters \u2014 it lets everyone on site use the same name for the same length. To simplify, divide the top and bottom by the same number until no number except 1 divides both. For 12/16, divide top and bottom by 4 to get 3/4. For 10/16, divide by 2 to get 5/8. If the top is odd and the bottom is 16, the fraction is already simplest \u2014 5/16, 7/16, 11/16, and 13/16 cannot be reduced.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Never add tops and bottoms. 1/2 + 1/4 is not 2/6 \u2014 it is 3/4. Fractions are added by making the denominators the same first.</div>"
    },
    {
      "heading": "Adding & Subtracting Fractions",
      "html": "<p>When the denominators match, adding and subtracting is easy: add or subtract the tops and keep the bottom. 3/8 + 2/8 = 5/8. 7/16 \u2212 3/16 = 4/16, which simplifies to 1/4. When the denominators do not match, convert one or both fractions so they do: 1/2 + 1/4 becomes 2/4 + 1/4 = 3/4, and 3/4 \u2212 1/8 becomes 6/8 \u2212 1/8 = 5/8. The trick is to find the smallest denominator both fractions can use \u2014 usually 16 on a tape measure, because every tape fraction converts to sixteenths.</p>\n<p>Mixed numbers \u2014 a whole number plus a fraction, like 2 and 3/4 \u2014 are added by adding the wholes and the fractions separately, then combining. 2 3/4 + 1 1/2 = (2 + 1) + (3/4 + 1/2) = 3 + (3/4 + 2/4) = 3 + 5/4 = 4 1/4. When the fraction sum passes 1, carry the whole: 5/4 is 1 and 1/4, so 3 + 5/4 is 4 1/4. Subtraction sometimes needs borrowing: 3 1/4 \u2212 1 3/4 = 2 5/4 \u2212 1 3/4 = 1 2/4 = 1 1/2, because 3 1/4 is the same as 2 5/4.</p>\n<p>On site, the most common fraction arithmetic is adding measurements: two boards end to end, a cut plus a waste allowance, a run of studs. The fastest reliable method is to convert everything to sixteenths, add the sixteenths, and convert back. 2 3/8 + 1 5/16 = 38/16 + 21/16 = 59/16 = 3 11/16. It looks like more work, but it is one method that never fails.</p>"
    },
    {
      "heading": "Multiplying & Dividing Fractions",
      "html": "<p>Multiplying fractions is the simplest operation: multiply the tops, multiply the bottoms, then simplify. 2/3 \u00d7 3/4 = 6/12 = 1/2. On site, multiplication appears when you scale a length: half of 3/4 inch is 1/2 \u00d7 3/4 = 3/8 inch, and three pieces of 2 1/2 feet are 3 \u00d7 2 1/2 = 7 1/2 feet.</p>\n<p>Dividing fractions means flipping the second fraction and multiplying: 3/4 \u00f7 1/2 = 3/4 \u00d7 2/1 = 6/4 = 1 1/2. The real site question is usually \"how many pieces?\": a 10-foot board cut into 2 1/2-foot pieces gives 10 \u00f7 2 1/2 = 10 \u00f7 5/2 = 10 \u00d7 2/5 = 4 pieces exactly. A 12-foot board cut into 3 3/4-foot pieces gives 12 \u00f7 15/4 = 12 \u00d7 4/15 = 48/15 = 3 1/5 pieces \u2014 so 3 full pieces with 3/4 foot (9 inches) left over, because 3 \u00d7 3 3/4 = 11 1/4 feet and 12 \u2212 11 1/4 = 3/4 foot.</p>\n<p>Always check a division answer by multiplying back: pieces \u00d7 piece length must equal the board length (or less, with a leftover). If 4 pieces \u00d7 2 1/2 feet is 10 feet, the division was right. If the numbers do not multiply back, the division was wrong \u2014 and it is cheaper to find out on paper than at the saw.</p>"
    },
    {
      "heading": "Fractions in Layout: Spacing & Leftovers",
      "html": "<p>Spacing problems are fraction problems. Studs 16 inches on center across a 10-foot (120-inch) wall: the studs sit at 0, 16, 32, 48, 64, 80, 96, and 112 inches, with the last stud at 120 inches \u2014 8 spaces and 9 studs including both ends. The leftover question is always the same: does the spacing divide evenly, and if not, where does the short piece go? A good layout puts the short piece where it matters least \u2014 at the end of a run, or split evenly between both ends so the layout looks centered.</p>\n<p>Cutting problems are leftover problems. A 8-foot board (96 inches) cut into 22 1/2-inch pieces: 96 \u00f7 22 1/2 = 96 \u00f7 45/2 = 96 \u00d7 2/45 = 192/45 = 4 12/45 = 4 4/15 pieces, so 4 full pieces using 90 inches, with 6 inches left over. The saw kerf \u2014 the width the blade removes, about 1/8 inch per cut \u2014 eats a little more on real cuts, so a careful carpenter allows for it: 4 cuts at 1/8 inch is 1/2 inch of kerf, leaving 5 1/2 inches of real leftover.</p>\n<p>The habit that ties this module together is to do the arithmetic before the cut, write the numbers down, and check them by multiplying back. A cut list with wrong fractions wastes the board; a cut list with checked fractions wastes nothing.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Simplify by dividing top and bottom by the same number; even tops on a 16-denominator simplify, odd tops do not.</li>\n<li>Add/subtract: make denominators the same first \u2014 never add tops and bottoms.</li>\n<li>Mixed numbers: add wholes and fractions separately; borrow when subtracting a larger fraction.</li>\n<li>Multiply: tops \u00d7 tops, bottoms \u00d7 bottoms. Divide: flip the second fraction and multiply.</li>\n<li>Check division by multiplying back: pieces \u00d7 piece length = board length (or less, with a leftover).</li>\n<li>Allow for the saw kerf (about 1/8 inch per cut) on real cuts.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding tops and bottoms: 1/2 + 1/4 is 3/4, never 2/6. Convert to a common denominator first.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the kerf. Four cuts at 1/8 inch remove 1/2 inch of material \u2014 the leftover is smaller than the paper math says.</div>\n<p><strong>Ready-to-Work link:</strong> If you can add 2 3/8 + 1 5/16 and divide a 10-foot board into 2 1/2-foot pieces without a calculator, you have this module. Module 3 covers decimals and conversions.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Numerator",
      "def": "The top number of a fraction: how many parts you have."
    },
    {
      "term": "Denominator",
      "def": "The bottom number of a fraction: how many equal parts the whole is cut into."
    },
    {
      "term": "Simplify",
      "def": "Reducing a fraction to lowest terms by dividing top and bottom by the same number."
    },
    {
      "term": "Common denominator",
      "def": "A denominator shared by two fractions so they can be added or subtracted."
    },
    {
      "term": "Mixed number",
      "def": "A whole number plus a fraction, e.g. 2 and 3/4."
    },
    {
      "term": "Improper fraction",
      "def": "A fraction whose top is larger than its bottom, e.g. 5/4."
    },
    {
      "term": "Kerf",
      "def": "The width of material a saw blade removes, about 1/8 inch per cut."
    },
    {
      "term": "On center (O.C.)",
      "def": "Measured from the center of one member to the center of the next."
    },
    {
      "term": "Leftover",
      "def": "The material remaining after cutting full pieces from a board."
    },
    {
      "term": "Cut list",
      "def": "A written list of the pieces to cut, with lengths and quantities."
    },
    {
      "term": "Borrowing",
      "def": "Converting a whole number into fraction form to subtract a larger fraction, e.g. 3 1/4 = 2 5/4."
    },
    {
      "term": "Reciprocal",
      "def": "A fraction flipped over, e.g. the reciprocal of 1/2 is 2/1; used when dividing fractions."
    },
    {
      "term": "Stud",
      "def": "A vertical framing member in a wall."
    },
    {
      "term": "Spacing",
      "def": "The distance between repeating members such as studs or joists."
    },
    {
      "term": "Sixteenths",
      "def": "Sixteenths of an inch \u2014 the smallest division on most tape measures."
    }
  ],
  "video": {
    "title": "How To Read A Tape Measure and Figure Inches and Fractions: An Easy-to-Follow Tutorial",
    "embedUrl": "https://www.youtube.com/embed/fFw1HYcJt2c",
    "note": "A tutorial on reading a tape and working out inches and fractions. Follow along with your own tape and work each example on paper before the presenter gives the answer.",
    "more": [
      {
        "title": "Fractions and Decimals on an Inch Tape Measure",
        "url": "https://www.youtube.com/watch?v=dx4Bg97Y_bI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Simplify 14/16 and 10/16. Show the division you used.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 14/16 \u2014 divide top and bottom by 2: 7/8. Step 2: 10/16 \u2014 divide top and bottom by 2: 5/8. Step 3: Both tops are now odd, so neither simplifies further.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Add 2 3/8 + 1 5/16. Show the conversion to sixteenths and the final answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 2 3/8 = 2 6/16 = 38/16. Step 2: 1 5/16 = 21/16. Step 3: 38/16 + 21/16 = 59/16 = 3 11/16 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Subtract 3 1/4 \u2212 1 3/4. Show the borrowing step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3 1/4 = 2 5/4 (borrow 1 whole = 4/4, so 1/4 + 4/4 = 5/4). Step 2: 2 5/4 \u2212 1 3/4 = 1 2/4. Step 3: Simplify 2/4 to 1/2: the answer is 1 1/2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 10-foot board is cut into 2 1/2-foot pieces. How many pieces, and is there a leftover?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 10 \u00f7 2 1/2 = 10 \u00f7 5/2 = 10 \u00d7 2/5 = 4 pieces. Step 2: Check: 4 \u00d7 2 1/2 = 10 feet exactly. Step 3: No leftover \u2014 4 pieces use the whole board (before kerf).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An 8-foot board (96 inches) is cut into 22 1/2-inch pieces. How many full pieces, and how many inches are left over (ignore kerf)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 96 \u00f7 22 1/2 = 96 \u00d7 2/45 = 192/45 = 4 4/15 pieces. Step 2: 4 full pieces use 4 \u00d7 22 1/2 = 90 inches. Step 3: Leftover is 96 \u2212 90 = 6 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Studs are spaced 16 inches on center across a 120-inch wall, starting at 0. List the stud positions and say how many studs there are including both ends.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Positions are 0, 16, 32, 48, 64, 80, 96, 112, and 120 inches. Step 2: That is 120 \u00f7 16 = 7.5 spaces, so the last space is 8 inches short \u2014 the final stud sits at 120 inches, the end of the wall. Step 3: Counting both ends: 9 studs.</p>"
    }
  ],
  "quiz": [
    {
      "q": "1/2 + 1/4 equals:",
      "choices": [
        "2/6",
        "3/4",
        "2/4",
        "1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Convert 1/2 to 2/4, then 2/4 + 1/4 = 3/4. (a) Adding tops and bottoms is never correct. (c) 2/4 is only the converted first fraction. (d) The sum is less than 1."
    },
    {
      "q": "3/8 + 2/8 equals:",
      "choices": [
        "5/16",
        "5/8",
        "1",
        "5/4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Same denominator: add the tops, 3 + 2 = 5, keep the 8. (a) Adding the denominators is wrong. (c) 5/8 is less than 1. (d) 5/4 would come from adding denominators wrongly."
    },
    {
      "q": "7/16 \u2212 3/16 equals:",
      "choices": [
        "4/16, which simplifies to 1/4",
        "4/32",
        "10/16",
        "1/2"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Same denominator: 7 \u2212 3 = 4, so 4/16 = 1/4. (b) Subtracting denominators is wrong. (c) 10/16 is the sum, not the difference. (d) 1/2 is 8/16, not 4/16."
    },
    {
      "q": "2/3 \u00d7 3/4 equals:",
      "choices": [
        "5/7",
        "1/2",
        "1",
        "2/3"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 \u00d7 3 = 6 over 3 \u00d7 4 = 12, reduced to 1/2. (a) Adding tops and bottoms is wrong. (c) The product is not 1. (d) That is the first fraction, not the product."
    },
    {
      "q": "A 10-foot pipe cut into 2 1/2-foot pieces gives:",
      "choices": [
        "3 pieces with 2 1/2 feet left",
        "4 pieces exactly",
        "5 pieces",
        "2 pieces with 5 feet left"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 \u00f7 2 1/2 = 4 pieces, and 4 \u00d7 2 1/2 = 10 feet. (a) 3 pieces is 7 1/2 feet. (c) 5 pieces would need 12 1/2 feet. (d) 2 pieces is 5 feet."
    },
    {
      "q": "14/16 simplifies to:",
      "choices": [
        "7/16",
        "7/8",
        "3/4",
        "1/2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Divide top and bottom by 2: 14 \u00f7 2 = 7, 16 \u00f7 2 = 8. (a) 7/16 is a different value. (c) 3/4 is 12/16. (d) 1/2 is 8/16."
    },
    {
      "q": "2 3/4 + 1 1/2 equals:",
      "choices": [
        "3 5/4",
        "4 1/4",
        "3 1/4",
        "4 3/4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Wholes: 2 + 1 = 3; fractions: 3/4 + 2/4 = 5/4 = 1 1/4; total 4 1/4. (a) 3 5/4 is not simplified to a mixed number. (c) 3 1/4 forgets the carried whole. (d) 4 3/4 adds the fractions wrongly."
    },
    {
      "q": "The saw kerf is:",
      "choices": [
        "The blade's brand name",
        "The width of material a saw blade removes, about 1/8 inch per cut",
        "The saw's weight",
        "The length of the blade"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each cut removes about 1/8 inch of material. (a) Brand is not kerf. (c) Weight is not kerf. (d) Blade length is not kerf."
    }
  ],
  "studyGuide": "\n<h3>Module 2 \u2014 Fractions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Never add tops and bottoms \u2014 make denominators the same first, then add the tops.</p>\n<p><strong>Simplify:</strong> Divide top and bottom by the same number. Even tops on 16 simplify; odd tops do not.</p>\n<p><strong>Add/subtract:</strong> Same denominator \u2192 add/subtract tops. Different \u2192 convert first (sixteenths work for all tape fractions).</p>\n<p><strong>Mixed numbers:</strong> Add wholes and fractions separately; borrow when subtracting a larger fraction (3 1/4 = 2 5/4).</p>\n<p><strong>Multiply:</strong> Tops \u00d7 tops, bottoms \u00d7 bottoms. <strong>Divide:</strong> Flip the second fraction and multiply. Check by multiplying back.</p>\n<p><strong>Kerf:</strong> About 1/8 in per cut \u2014 allow for it on real cuts.</p>\n<p><strong>Self-check:</strong> Add 2 3/8 + 1 5/16 and divide 10 ft by 2 1/2 ft without a calculator. If you can, you have this module.</p>\n"
};
