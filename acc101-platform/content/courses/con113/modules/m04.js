// con113 - Module 4: Trade Math & Structural Drawings
module.exports = {
  "number": 4,
  "slug": "trade-math-and-structural-drawings",
  "title": "Trade Math & Structural Drawings",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a structural drawing set the way an ironworker does: plan, elevation, section, detail, and schedule, in that order.",
    "Use the title block, the drawing scale, and the revision notes to know which sheet is current and what it covers.",
    "Explain why the written dimension on a drawing governs — never measure the paper with a ruler and scale it up.",
    "Add and subtract feet, inches, and fractions the way ironworkers do on the job.",
    "Count bolts and members from a spacing, and work out elevations from a datum, without guessing."
  ],
  "sections": [
    {
      "heading": "The Drawing Set Is the Job in Paper Form",
      "html": "<p>Before a single piece of steel goes up, the whole building exists on paper — or on a screen — as a set of structural drawings. The ironworker reads that set the way a cook reads a recipe: it says what goes where, how big it is, how it connects, and in what order. If you cannot read the drawings, you cannot do the work, because every column, beam, bolt, and weld in the building starts as a line and a number on a sheet.</p>\n<p>A structural drawing set has several kinds of sheets, and each kind answers a different question. The <strong>plan</strong> is a view from above, like looking down at the building from a helicopter: it shows where columns and beams sit on each floor. The <strong>elevation</strong> is a view from the side: it shows how tall things are and at what height each floor and beam sits. The <strong>section</strong> is a cut through the building, like slicing a cake and looking at the inside: it shows how parts stack up and connect through the height. <strong>Details</strong> are close-up drawings of one connection, drawn big so every bolt and plate is visible. <strong>Schedules</strong> are tables — for example, a column schedule lists every column in the building, its size, and its steel grade, row by row.</p>\n<p>Read the set in order, not at random. Start with the plan to learn where things are, then the elevation to learn how high they are, then the section and the details to learn how they connect, and check the schedules for the exact sizes. A detail makes no sense until you know which beam it belongs to, and the plan tells you that.</p>\n"
    },
    {
      "heading": "The Title Block, the Scale, and the Revision",
      "html": "<p>Every sheet has a <strong>title block</strong>, usually in the bottom right corner. It is the sheet's identity card: the project name, the sheet number, the drawing title, the date, and who drew and checked it. The sheet number tells you where the sheet belongs in the set — structural sheets often start with the letter S, so S-101 might be a framing plan and S-501 a connection detail. Always check the title block first, because it also carries the <strong>revision</strong> — a letter or number, with a date, showing the latest change. If the revision on your sheet is older than the one the foreman has, you are working from the wrong drawing.</p>\n<p>The title block also states the <strong>scale</strong>, such as 1/4 inch = 1 foot. The scale tells you how much smaller the drawing is than the real building. It is useful for getting a rough sense of size, but it is never how you measure. Paper stretches, printers shrink things, and a photocopy can change the scale without changing the printed number. That is why the ironworker's rule is absolute: <strong>the written dimension governs</strong>. If the drawing says a beam is 24 feet 6 inches long, it is 24 feet 6 inches long, even if your ruler on the paper says something slightly different. Never scale a dimension off the paper. If a dimension is missing or two dimensions disagree, stop and ask — do not guess and do not measure the sheet.</p>\n<p>General notes live on the first sheets of the set. They are the rules for the whole job: what steel grade to use, what bolts are required, how welds are called out, and what to do when something does not fit. Read them once, slowly, before you start on the details. A single general note can change how every connection on the job is made.</p>\n"
    },
    {
      "heading": "Feet, Inches, and Fractions",
      "html": "<p>Ironworkers measure in feet, inches, and fractions of an inch — and the fractions are almost always halves, quarters, eighths, and sixteenths. A dimension like 12 ft 7-3/8 in reads as twelve feet, seven inches, and three-eighths of an inch. Learning to add and subtract these numbers cleanly is the core math of the trade, and it is done in steps: handle the fractions first, then the inches, then the feet.</p>\n<p>To add two dimensions, add the fractions first. If the fractions add up to more than a whole inch, carry the whole inches over. Then add the inches; if they reach 12 or more, carry a foot. Then add the feet. Example: 6 ft 4-3/4 in plus 3 ft 9-1/2 in. Fractions first: 3/4 + 1/2 = 3/4 + 2/4 = 5/4 = 1-1/4 in, so carry 1 inch and keep 1/4. Inches: 4 + 9 = 13, plus the carried 1 = 14 inches, which is 1 foot 2 inches, so carry 1 foot and keep 2 inches. Feet: 6 + 3 = 9, plus the carried 1 = 10 feet. Answer: 10 ft 2-1/4 in. Check it by converting to inches: 6 ft 4-3/4 in is 76-3/4 in, 3 ft 9-1/2 in is 45-1/2 in, and 76-3/4 + 45-1/2 = 122-1/4 in, which is 10 ft 2-1/4 in. It matches.</p>\n<p>To subtract, work the same way in reverse, borrowing when you need to. Example: 10 ft 2-1/4 in minus 6 ft 4-3/4 in. The fraction 1/4 is smaller than 3/4, so borrow 1 inch from the 2 inches: 2-1/4 becomes 1-5/4 (since 1/4 + 4/4 = 5/4). Now 5/4 − 3/4 = 2/4 = 1/2. Inches: 1 − 4 will not work, so borrow 1 foot from the 10 feet: 10 ft becomes 9 ft and the inches become 1 + 12 = 13. Then 13 − 4 = 9 inches. Feet: 9 − 6 = 3 feet. Answer: 3 ft 9-1/2 in. Check: 3 ft 9-1/2 in plus 6 ft 4-3/4 in is 10 ft 2-1/4 in, which is where we started.</p>\n<p>Two habits keep this math honest. First, always convert fractions to a common denominator before adding or subtracting — halves become quarters, quarters become eighths. Second, check your answer by working backward or by converting everything to inches. A tape measure does not forgive a wrong foot, and neither does a steel frame.</p>\n"
    },
    {
      "heading": "Bolt Patterns, Elevations, and Counting from a Spacing",
      "html": "<p>Drawings show bolt patterns as a row of holes with a spacing dimension between them, and the ironworker has to turn that spacing into a count. The trick is to count <strong>spaces</strong> first, then add one. A plate 18 inches long with bolts spaced 3 inches apart, the first bolt 3 inches from each end, has bolts at 3, 6, 9, 12, and 15 inches — that is 4 spaces of 3 inches between 5 bolts. The general rule: number of spaces = (length − end distance − end distance) ÷ spacing, and number of bolts = spaces + 1. Here (18 − 3 − 3) ÷ 3 = 4 spaces, plus 1 = 5 bolts. If you forget the +1, you will order one bolt short and the connection will not be complete.</p>\n<p><strong>Elevations</strong> are heights measured from a fixed reference point called a <strong>datum</strong>. A drawing might say the top of steel for the second floor is at elevation 102 ft 6 in. That is a height above the datum, not a measurement you take with a tape from the ground. To find the bottom of a beam, subtract the beam's depth from its top elevation: a beam 2 feet deep with its top at 102 ft 6 in has its bottom at 100 ft 6 in. To find the top of a column, add the column's length to its base elevation. Elevations are how the whole crew agrees on height — the surveyor, the steel erector, and the deck crew all work from the same numbers.</p>\n<p><strong>Bolt patterns</strong> also appear in elevation views. A column splice shown in elevation will list how many bolts are in each row and how many rows there are — for example, 3 rows of 4 bolts is 12 bolts per side. Multiply rows by bolts per row, and count both sides of the connection if the drawing shows a splice on each face. When the drawing says \"typical,\" it means the same pattern repeats at every matching connection, so one detail covers many joints — but count them all before you order bolts.</p>\n<p>One more drawing habit: look for the <strong>grid lines</strong>. Plans are laid out on a grid — letters one way (A, B, C) and numbers the other (1, 2, 3) — and every column sits at a grid intersection, like B-3. When the foreman says \"the column at C-4,\" the grid tells you exactly where to go. The grid is the building's address system.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> A structural set is read in order — plan for location, elevation for height, section and details for connections, schedules for sizes. The title block gives the sheet number, date, and revision; the revision tells you whether your sheet is current. The written dimension always governs — never scale a measurement off the paper. Feet-inches-fractions math is done in steps: fractions, then inches, then feet, carrying as you go. Counting bolts from a spacing means counting spaces first, then adding one. Elevations are heights above a datum: subtract the beam depth from the top elevation to get the bottom.</p>\n<p><strong>Common mistake:</strong> Measuring the paper with a ruler and scaling it up. Paper stretches and printers shrink things, and the printed scale can be wrong. The written dimension is the only measurement that counts — if it is missing or disagrees with another dimension, stop and ask.</p>\n<p><strong>Common mistake:</strong> Forgetting the +1 when counting bolts from a spacing. Four spaces of 3 inches hold five bolts, not four — the first bolt sits at the start of the first space. Count the spaces, then add one, or the connection comes up a bolt short.</p>\n<p><strong>Ready-to-Work link:</strong> If you can read a plan and an elevation, explain why the written dimension governs, and add 6 ft 4-3/4 in to 3 ft 9-1/2 in without guessing, you have this module. Module 5 covers fastening and bolting — the A325 and A490 bolts, washers and nuts, and how a bolt is tensioned.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Plan",
      "def": "A drawing viewed from above, showing where columns, beams, and walls sit on a floor."
    },
    {
      "term": "Elevation",
      "def": "A drawing viewed from the side, showing heights and vertical positions; also, a height above a datum."
    },
    {
      "term": "Section",
      "def": "A drawing made by cutting through the building and looking at the inside, showing how parts stack and connect."
    },
    {
      "term": "Detail",
      "def": "A large-scale close-up drawing of one connection, showing every bolt, plate, and weld."
    },
    {
      "term": "Schedule",
      "def": "A table on the drawings listing members — for example, a column schedule listing each column's size and grade."
    },
    {
      "term": "Title block",
      "def": "The box on a sheet, usually bottom right, giving the project name, sheet number, title, date, and revision."
    },
    {
      "term": "Revision",
      "def": "A letter or number with a date showing the latest change to a drawing sheet; always work from the current revision."
    },
    {
      "term": "Scale",
      "def": "The ratio between the drawing and the real building, such as 1/4 inch = 1 foot; for reference only, never for measuring."
    },
    {
      "term": "Written dimension governs",
      "def": "The rule that the number printed on the drawing is the true size — never measure the paper and scale it up."
    },
    {
      "term": "Datum",
      "def": "The fixed reference point, usually at ground level, from which all elevations on a job are measured."
    },
    {
      "term": "Grid line",
      "def": "The lettered and numbered lines on a plan that locate every column at an intersection, such as B-3."
    },
    {
      "term": "Bolt pattern",
      "def": "The arrangement of bolt holes in a connection, given as rows, columns, and spacing."
    },
    {
      "term": "Spacing",
      "def": "The distance between the centers of adjacent bolts in a row."
    },
    {
      "term": "General notes",
      "def": "The rules on the first sheets of a drawing set that apply to the whole job, such as steel grades and bolt types."
    },
    {
      "term": "Typical",
      "def": "A note meaning the detail shown applies the same way at every matching connection on the job."
    }
  ],
  "video": {
    "title": "How to Read Structural Steel Drawings: A Practical 7-Step Workflow",
    "embedUrl": "https://www.youtube.com/embed/tFxZCUBqaMw",
    "note": "A step-by-step walkthrough of reading a structural steel drawing set — document control, framing plans, elevations, sections, load paths, connection information, and revisions — exactly the workflow this module teaches. Watch it once, then re-read the module and notice how each step matches a section here.",
    "more": [
      {
        "title": "How to Read Structural Steel Drawings",
        "url": "https://www.youtube.com/watch?v=iB-m9oUEV_Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Add 6 ft 4-3/4 in and 3 ft 9-1/2 in. Show each step, then check your answer by converting both numbers to inches.</p>",
      "solution": "<p><strong>Answer: 10 ft 2-1/4 in.</strong> Step 1: Add the fractions: 3/4 + 1/2 = 3/4 + 2/4 = 5/4 = 1-1/4 in. Carry 1 inch, keep 1/4. Step 2: Add the inches: 4 + 9 = 13, plus the carried 1 = 14 inches = 1 ft 2 in. Carry 1 foot, keep 2 inches. Step 3: Add the feet: 6 + 3 = 9, plus the carried 1 = 10 feet. Answer: 10 ft 2-1/4 in. Check: 6 ft 4-3/4 in = 76-3/4 in and 3 ft 9-1/2 in = 45-1/2 in; 76-3/4 + 45-1/2 = 122-1/4 in = 10 ft 2-1/4 in. It matches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Subtract 6 ft 4-3/4 in from 10 ft 2-1/4 in. Show the borrowing steps, then check by adding your answer back.</p>",
      "solution": "<p><strong>Answer: 3 ft 9-1/2 in.</strong> Step 1: The fraction 1/4 is smaller than 3/4, so borrow 1 inch from the 2 inches: 2-1/4 becomes 1-5/4. Then 5/4 − 3/4 = 2/4 = 1/2. Step 2: The inches are now 1, which is smaller than 4, so borrow 1 foot from the 10 feet: 10 ft becomes 9 ft and the inches become 1 + 12 = 13. Then 13 − 4 = 9 inches. Step 3: Feet: 9 − 6 = 3 feet. Answer: 3 ft 9-1/2 in. Check: 3 ft 9-1/2 in + 6 ft 4-3/4 in = 10 ft 2-1/4 in. It matches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A connection plate is 18 inches long. Bolts are spaced 3 inches apart, with the first bolt 3 inches from each end. How many bolts are on the plate? Show the spaces-first method.</p>",
      "solution": "<p><strong>Answer: 5 bolts.</strong> Step 1: Find the number of spaces: (18 − 3 − 3) ÷ 3 = 12 ÷ 3 = 4 spaces. Step 2: Number of bolts = spaces + 1 = 4 + 1 = 5. Step 3: List the positions to check: 3, 6, 9, 12, and 15 inches — five positions, with the last bolt 3 inches from the far end, as drawn.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The top of steel for a floor is at elevation 102 ft 6 in. A beam on that floor is 2 ft 0 in deep. What is the elevation of the bottom of the beam? A second beam is 1 ft 6 in deep — what is its bottom elevation?</p>",
      "solution": "<p><strong>Answer: 100 ft 6 in and 101 ft 0 in.</strong> Step 1: First beam: 102 ft 6 in − 2 ft 0 in = 100 ft 6 in. Step 2: Second beam: 102 ft 6 in − 1 ft 6 in = 101 ft 0 in. Step 3: Check: the deeper beam hangs lower, so 100 ft 6 in is below 101 ft 0 in — that makes sense.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A column splice is shown in elevation with 3 rows of 4 bolts on each face of the column, and the splice has two faces. How many bolts are in the whole splice? A second splice has 4 rows of 3 bolts on each of two faces — how many bolts is that?</p>",
      "solution": "<p><strong>Answer: 24 bolts and 24 bolts.</strong> Step 1: First splice: 3 rows × 4 bolts = 12 bolts per face. Step 2: Two faces: 12 × 2 = 24 bolts. Step 3: Second splice: 4 rows × 3 bolts = 12 per face, × 2 faces = 24 bolts. Both splices use 24 bolts — the same total arranged differently.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drawing dimension reads 7 ft 3 in, but when you hold a ruler to the paper the beam measures out to about 7 ft 6 in at the printed scale. What do you do, and why? What if the written dimension is missing entirely?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use the written dimension — 7 ft 3 in. The written dimension governs, and the paper measurement is unreliable because paper stretches and printers shrink. Step 2: Do not cut or order steel at 7 ft 6 in. Step 3: If the written dimension is missing entirely, stop and ask the foreman or the detailer. Never guess a dimension and never measure the sheet.</p>"
    }
  ],
  "quiz": [
    {
      "q": "On a structural drawing set, which view shows the building from above?",
      "choices": [
        "The elevation",
        "The section",
        "The plan",
        "The detail"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The plan is a top-down view showing where columns and beams sit on a floor. (a) is wrong: \"The elevation\" — an elevation is a side view showing heights. (b) is wrong: \"The section\" — a section is a cut through the building. (d) is wrong: \"The detail\" — a detail is a close-up of one connection."
    },
    {
      "q": "Where on a sheet do you find the sheet number, the date, and the revision?",
      "choices": [
        "In the general notes",
        "In the title block",
        "In the column schedule",
        "On the grid lines"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The title block, usually bottom right, carries the project name, sheet number, date, and revision. (a) is wrong: \"In the general notes\" — general notes carry job-wide rules, not the sheet's identity. (c) is wrong: \"In the column schedule\" — a schedule lists member sizes, not sheet information. (d) is wrong: \"On the grid lines\" — grid lines locate columns, not sheet data."
    },
    {
      "q": "A drawing says a beam is 24 ft 6 in long, but your ruler on the paper measures it at about 24 ft 9 in. What is the beam's length?",
      "choices": [
        "24 ft 6 in, because the written dimension governs",
        "24 ft 9 in, because you measured it",
        "The average, 24 ft 7-1/2 in",
        "Whichever the foreman guesses"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The written dimension governs; paper stretches and printers shrink, so scaling off the sheet is unreliable. (b) is wrong: \"24 ft 9 in, because you measured it\" — measuring the paper is exactly what the rule forbids. (c) is wrong: \"The average, 24 ft 7-1/2 in\" — you never average a written dimension with a paper measurement. (d) is wrong: \"Whichever the foreman guesses\" — nobody guesses a dimension; the written number is the answer."
    },
    {
      "q": "What is 6 ft 4-3/4 in + 3 ft 9-1/2 in?",
      "choices": [
        "9 ft 14-1/4 in",
        "10 ft 1-1/4 in",
        "9 ft 2-1/4 in",
        "10 ft 2-1/4 in"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Fractions: 3/4 + 1/2 = 1-1/4, carry 1 inch. Inches: 4 + 9 + 1 = 14 = 1 ft 2 in. Feet: 6 + 3 + 1 = 10 ft. Total 10 ft 2-1/4 in. (a) is wrong: \"9 ft 14-1/4 in\" — 14 inches must be carried into feet; 9 ft 14-1/4 in is the un-carried total. (b) is wrong: \"10 ft 1-1/4 in\" — the inches were added without the carried inch. (c) is wrong: \"9 ft 2-1/4 in\" — the carried foot was dropped."
    },
    {
      "q": "A plate is 18 inches long with bolts spaced 3 inches apart, the first bolt 3 inches from each end. How many bolts are on the plate?",
      "choices": [
        "4",
        "6",
        "5",
        "3"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Spaces = (18 − 3 − 3) ÷ 3 = 4, and bolts = spaces + 1 = 5, at 3, 6, 9, 12, and 15 inches. (a) is wrong: \"4\" — that is the number of spaces, not the number of bolts. (b) is wrong: \"6\" — that would need five spaces, which would run past the end of the plate. (d) is wrong: \"3\" — that would be only two spaces, far too few for an 18-inch plate at 3-inch spacing."
    },
    {
      "q": "The top of steel is at elevation 102 ft 6 in and a beam is 2 ft 0 in deep. What is the bottom of the beam?",
      "choices": [
        "100 ft 6 in",
        "104 ft 6 in",
        "102 ft 4 in",
        "100 ft 4 in"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 102 ft 6 in − 2 ft 0 in = 100 ft 6 in. (b) is wrong: \"104 ft 6 in\" — that adds the depth instead of subtracting it. (c) is wrong: \"102 ft 4 in\" — that subtracts only 2 inches, not 2 feet. (d) is wrong: \"100 ft 4 in\" — that subtracts 2 ft 2 in, two inches too much."
    },
    {
      "q": "What does the note \"typical\" mean on a connection detail?",
      "choices": [
        "The detail is only an example and should not be built",
        "The same detail applies at every matching connection on the job",
        "The detail is the hardest one in the set",
        "The detail was drawn first"
      ],
      "answer": 1,
      "explanation": "Correct: (b). \"Typical\" means the detail repeats at every matching connection, so one detail covers many joints. (a) is wrong: \"The detail is only an example and should not be built\" — a typical detail is built everywhere it applies. (c) is wrong: \"The detail is the hardest one in the set\" — typical says nothing about difficulty. (d) is wrong: \"The detail was drawn first\" — typical describes repetition, not drawing order."
    },
    {
      "q": "A column is located at grid intersection C-4. What do the letter and the number tell you?",
      "choices": [
        "The column's size and its steel grade",
        "The column's height and its weight",
        "The number of bolts in the column base",
        "The column's position on the plan grid — the C line one way and the 4 line the other"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Grid lines are the building's address system: letters run one way, numbers the other, and C-4 is where those two lines cross. (a) is wrong: \"The column's size and its steel grade\" — size and grade come from the column schedule, not the grid. (b) is wrong: \"The column's height and its weight\" — height comes from elevations and weight from the schedule. (c) is wrong: \"The number of bolts in the column base\" — bolt counts come from the base detail, not the grid."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Trade Math & Structural Drawings: Quick Reference</h3>\n<p><strong>Reading order:</strong> Plan (where) · Elevation (how high) · Section (how it stacks) · Details (how it connects) · Schedules (exact sizes).</p>\n<p><strong>Title block:</strong> Sheet number, date, revision — always work from the current revision. <strong>Written dimension governs</strong> — never measure the paper.</p>\n<p><strong>Feet-inches-fractions:</strong> Fractions first, then inches, then feet; carry whole inches into feet (12 in = 1 ft). Check by converting to inches.</p>\n<p><strong>Bolt count from spacing:</strong> Spaces = (length − end distances) ÷ spacing; bolts = spaces + 1.</p>\n<p><strong>Elevations:</strong> Bottom of beam = top elevation − beam depth. Columns sit at grid intersections (letters one way, numbers the other).</p>\n<p><strong>Self-check:</strong> Add 6 ft 4-3/4 in + 3 ft 9-1/2 in, and count the bolts on an 18-inch plate at 3-inch spacing with 3-inch end distances.</p>\n"
};
