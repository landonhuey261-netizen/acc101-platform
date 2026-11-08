// plb102 - Module 12: Takeoff & Estimating Basics
module.exports = {
  "number": 12,
  "slug": "takeoff-estimating-basics",
  "title": "Takeoff & Estimating Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a takeoff is and what an estimate is built from.",
    "Count pipe, fittings, valves, and fixtures from a drawing.",
    "Calculate pipe lengths from center-to-center distances minus takeoffs.",
    "Add waste, labor, and overhead to a material list to build an estimate.",
    "Explain how to check an estimate and what to do when the price is too high."
  ],
  "sections": [
    {
      "heading": "Takeoff: Counting the Job",
      "html": "<p>A <strong>takeoff</strong> is the count of everything a job needs, taken from the drawings: every foot of pipe, every fitting, every valve, every fixture, every hanger. It is the first step of pricing a job, and it is done with a highlighter and a list, not from memory: go through the drawings system by system, count each item, and write it down with its size. A fitting missed in the takeoff is a fitting bought at retail on the day it is needed — or a job that stops while someone drives to the supply house.</p>\n<p>Count by system and by size. Water lines: list the pipe by diameter and the fittings by type and size. Drainage: the same, plus cleanouts and vents. Fixtures: by the schedule's marks (WC-1, LAV-2). Valves: by type and size. Hangers and supports: by the spacing the code and the spec require. The takeoff sheet is the job's shopping list and the estimate's foundation — keep it, because the as-built record and the next estimate both start from it.</p>\n<p>Count the breaks on an isometric the same way: every break is a fitting, every segment is a length of pipe. Module 10's isometric reading is the takeoff skill for pipe runs without a plan.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A takeoff is the job counted from the drawings, system by system, size by size. A missed fitting is a stopped job.</div>"
    },
    {
      "heading": "Pipe Lengths: Center-to-Center Minus Takeoffs",
      "html": "<p>Pipe is not ordered by the center-to-center distances on the drawing — it is ordered by the cut lengths, and the cut length is the center-to-center distance minus the fittings' takeoffs. Measure each run center-to-center, subtract the takeoff of each fitting on it (from the manufacturer's takeoff table or the fitting's published dimensions), and the result is the pipe to cut. Add the runs together for the total pipe of that size, then add waste.</p>\n<p><strong>Worked example — fitting takeoff:</strong> A run's center-to-center distance is 21 9/16 inches between a combination wye and a long-sweep 90. The wye's takeoff is 10 inches and the 90's is 4 15/16 inches. Total takeoff = 10 + 4 15/16 = 14 15/16 inches. Cut piece = 21 9/16 − 14 15/16: borrow to 20 25/16 − 14 15/16 = 6 10/16 = 6 5/8 inches. That is the piece to cut — and it is the same arithmetic as Module 1's takeoff problem, now on a real fitting table.</p>\n<p>Takeoff dimensions come from the manufacturer — Charlotte Pipe and other makers publish them for their fittings — and they differ by fitting type and size. Use the maker's table for the fittings you are installing, not a remembered number from another brand.</p>"
    },
    {
      "heading": "From Takeoff to Estimate: Waste, Labor, and Overhead",
      "html": "<p>An <strong>estimate</strong> turns the takeoff into a price: <strong>materials</strong> (the takeoff, priced from the supply house, plus a waste allowance — commonly 10% on pipe, less on fittings), <strong>labor</strong> (the hours the job will take, at the company's labor rate), and <strong>overhead and profit</strong> (the cost of running the business and the margin that keeps it alive). A price that covers materials but not labor or overhead is a price that loses money on every job.</p>\n<p><strong>Worked example:</strong> A small job's takeoff prices at $800 in materials. Waste at 10% adds $80, so materials are $880. Labor is estimated at 16 hours at $75 per hour = $1,200. Overhead and profit at 20% of the subtotal ($880 + $1,200 = $2,080) adds $416. Total estimate = $2,496. The numbers are the company's own — the labor rate, the waste allowance, and the overhead percentage come from its books, not from this course — but the structure is the same on every job: materials + waste, labor, overhead and profit.</p>\n<p>Write the estimate down with its assumptions: what is included, what is not, and how long the price holds. A written estimate is a promise the customer can hold you to — and a protection when the scope changes, because the change is priced against the same structure.</p>"
    },
    {
      "heading": "Checking the Estimate and the Price",
      "html": "<p>Check an estimate three ways before it goes out. <strong>First, the takeoff:</strong> re-count the big items — pipe by size, fixtures, water heater — because one missed main is a large error. <strong>Second, the arithmetic:</strong> re-add the columns and re-multiply the quantities; a slipped decimal is the most expensive typo in the trade. <strong>Third, the sense check:</strong> compare with a similar job you have done — if this estimate is double the last similar job, find out why before the customer does.</p>\n<p>When the price is too high for the customer, the options are to reduce the scope (a repair instead of a replacement, a standard fixture instead of a premium one), to phase the work, or to walk away. What you never do is cut the price by cutting the quality: cheaper pipe that does not meet the spec, a skipped test, or an unvented trap are not savings — they are callbacks and liabilities. A price the customer cannot afford is a job you do not take; a job done below standard is a job that follows you.</p>\n<div class=\"callout\"><strong>Key idea:</strong> An estimate is materials + waste, labor, overhead and profit — checked three ways: the takeoff, the arithmetic, and the sense check against a similar job.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Takeoff: count everything from the drawings, system by system, size by size. Every break on an isometric is a fitting.</li>\n<li>Cut length = center-to-center distance minus the fittings' takeoffs, from the manufacturer's table.</li>\n<li>Estimate = materials + waste allowance, labor (hours × rate), overhead and profit.</li>\n<li>Check three ways: re-count the big items, re-do the arithmetic, sense-check against a similar job.</li>\n<li>Too expensive? Reduce scope, phase the work, or walk away — never cut quality.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Ordering pipe by center-to-center distances. The cut length is center-to-center minus takeoffs — ordering the full distance buys pipe you cannot use.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Pricing materials only. Labor, overhead, and profit are part of the price — a materials-only price loses money on every job.</div>\n<p><strong>Ready-to-Work link:</strong> If you can take off a small drawing, work a fitting-takeoff cut length, and build an estimate with waste, labor, and overhead, you have this course — and the whole of plb102. The materials courses are next: plb111 starts with plastic pipe and copper tube.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Takeoff",
      "def": "The count of everything a job needs, taken from the drawings: pipe, fittings, valves, fixtures, and hangers."
    },
    {
      "term": "Estimate",
      "def": "A price for a job built from the takeoff: materials plus waste, labor, and overhead and profit."
    },
    {
      "term": "Fitting takeoff",
      "def": "The amount a fitting consumes of a pipe run — from the manufacturer's takeoff table, subtracted from the center-to-center distance."
    },
    {
      "term": "Center-to-center",
      "def": "The distance between the centers of two fittings — the starting point for a cut length."
    },
    {
      "term": "Waste allowance",
      "def": "Extra material ordered to cover offcuts and mistakes, commonly 10% on pipe."
    },
    {
      "term": "Labor",
      "def": "The hours a job will take, priced at the company's labor rate."
    },
    {
      "term": "Overhead",
      "def": "The cost of running the business — trucks, insurance, office, and tools — spread across jobs."
    },
    {
      "term": "Profit",
      "def": "The margin on a job that keeps the business alive and growing."
    },
    {
      "term": "Labor rate",
      "def": "The price charged per hour of labor, set by the company's costs."
    },
    {
      "term": "Supply house",
      "def": "A wholesaler that sells pipe, fittings, fixtures, and tools to the trade."
    },
    {
      "term": "As-built",
      "def": "The record of what was actually installed, as opposed to what the drawings showed."
    },
    {
      "term": "Scope",
      "def": "What the job includes — and what it does not. Changes to scope change the price."
    },
    {
      "term": "Sense check",
      "def": "Comparing an estimate with a similar completed job to catch large errors."
    },
    {
      "term": "Manufacturer's table",
      "def": "The maker's published fitting takeoff dimensions, used to calculate cut lengths."
    },
    {
      "term": "Hanger",
      "def": "A support that holds pipe in place, counted in the takeoff by the spacing the code and spec require."
    }
  ],
  "video": {
    "title": "How to Measure Fitting Takeoff | Advanced Plumbing",
    "embedUrl": "https://www.youtube.com/embed/FPPZKm7c6xw",
    "note": "Roger Wakefield measures fitting takeoffs from a manufacturer's table — a combination wye and a long-sweep 90 — and works the cut length. It is the module's worked example, done on real fittings.",
    "more": [
      {
        "title": "Measure a 45 Offset | Advanced Plumbing",
        "url": "https://www.youtube.com/watch?v=GZORiYBa-6U"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A run's center-to-center distance is 21 9/16 inches between a combination wye (takeoff 10 inches) and a long-sweep 90 (takeoff 4 15/16 inches). What is the cut piece?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total takeoff = 10 + 4 15/16 = 14 15/16 inches. Step 2: 21 9/16 − 14 15/16: borrow — 21 9/16 = 20 25/16. Step 3: 20 − 14 = 6; 25/16 − 15/16 = 10/16 = 5/8. Step 4: The cut piece is 6 5/8 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A job's takeoff prices at $800 in materials. Waste is 10%, labor is 16 hours at $75 per hour, and overhead and profit are 20% of the subtotal. What is the total estimate?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Waste = 0.10 × 800 = $80; materials = $880. Step 2: Labor = 16 × 75 = $1,200. Step 3: Subtotal = 880 + 1,200 = $2,080. Step 4: Overhead and profit = 0.20 × 2,080 = $416. Step 5: Total = 2,080 + 416 = $2,496.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> List the three checks on an estimate before it goes out, and give one error each check catches.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The takeoff — re-count the big items; catches a missed main or fixture. Step 2: The arithmetic — re-add and re-multiply; catches a slipped decimal. Step 3: The sense check — compare with a similar job; catches an estimate that is double (or half) what it should be.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A takeoff lists 100 feet of 2-inch pipe. Waste is 10%. How much pipe do you order, and why not exactly 100 feet?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Waste = 0.10 × 100 = 10 feet. Step 2: Order 110 feet. Step 3: Offcuts, mistakes, and fitting takeoffs consume pipe — ordering exactly 100 feet leaves the job short on the last run.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A customer says your $2,496 estimate is too high. Name three honest responses, and one response you must never give.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reduce the scope — a repair instead of a replacement, or a standard fixture instead of a premium one. Step 2: Phase the work — do the urgent part now and the rest later. Step 3: Walk away — a price the customer cannot afford is a job you do not take. Step 4: Never cut the price by cutting quality — cheaper pipe that fails the spec, a skipped test, or an unvented trap are callbacks and liabilities, not savings.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An isometric shows a run with 4 breaks and 5 segments. How many fittings and how many pipe pieces is that, and what is the takeoff for?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 4 breaks = 4 fittings to buy and install. Step 2: 5 segments = 5 pipe pieces to cut. Step 3: The takeoff is the material list for the job — the count that the estimate is built from.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A takeoff is:",
      "choices": [
        "A price for the job",
        "The count of everything a job needs, taken from the drawings",
        "A delivery schedule",
        "A drawing revision"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A takeoff counts pipe, fittings, valves, fixtures, and hangers from the drawings. (a) The price is the estimate, built from the takeoff. (c) Delivery is scheduling. (d) A revision is a drawing version."
    },
    {
      "q": "A run's center-to-center distance is 21 9/16 inches; the two fittings' takeoffs total 14 15/16 inches. The cut piece is:",
      "choices": [
        "6 5/8 inches",
        "7 1/8 inches",
        "36 1/2 inches",
        "14 15/16 inches"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 21 9/16 − 14 15/16 = 6 5/8 inches (borrow: 20 25/16 − 14 15/16 = 6 10/16). (b) That would be the answer without the borrow. (c) That adds instead of subtracting. (d) That is the takeoff total, not the cut piece."
    },
    {
      "q": "An estimate is built from:",
      "choices": [
        "Materials only",
        "Materials plus waste, labor, and overhead and profit",
        "Labor only",
        "The customer's budget"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Materials + waste, labor (hours × rate), overhead and profit. (a) Materials-only pricing loses money. (c) Labor-only pricing ignores materials. (d) The budget is the customer's limit, not the estimate's structure."
    },
    {
      "q": "A takeoff of $800 in materials with 10% waste is:",
      "choices": [
        "$800",
        "$880",
        "$720",
        "$900"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 800 + 80 = $880. (a) That ignores waste. (c) That subtracts waste. (d) That would be 12.5% waste."
    },
    {
      "q": "The three checks on an estimate are:",
      "choices": [
        "Takeoff, arithmetic, sense check against a similar job",
        "Price, color, weight",
        "Speed, strength, luck",
        "Drawing, legend, title block"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Re-count the big items, re-do the arithmetic, and compare with a similar job. (b) Color and weight are not estimate checks. (c) Those are not checks. (d) Those are drawing-reading steps."
    },
    {
      "q": "Fitting takeoff dimensions come from:",
      "choices": [
        "Memory",
        "The manufacturer's published takeoff table for those fittings",
        "The code book",
        "The customer's guess"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Takeoffs differ by fitting type, size, and brand — use the maker's table. (a) Memory mixes brands. (c) The code does not publish fitting dimensions. (d) The customer does not know them."
    },
    {
      "q": "When an estimate is too high for the customer, you should never:",
      "choices": [
        "Reduce the scope",
        "Phase the work",
        "Cut the price by cutting quality — skipping tests or using below-spec materials",
        "Walk away from the job"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Cutting quality creates callbacks and liabilities, not savings. (a), (b), and (d) are all honest responses."
    },
    {
      "q": "On an isometric, every break represents:",
      "choices": [
        "A mistake",
        "A fitting to count in the takeoff",
        "A hidden pipe",
        "A dimension"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each break is a fitting — an elbow, tee, or coupling — to buy and install. (a) Breaks are deliberate. (c) Hidden pipe is shown differently. (d) A dimension is a measurement."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Takeoff &amp; Estimating Basics: Quick Reference</h3>\n<p><strong>Takeoff:</strong> Count everything from the drawings, system by system, size by size. Every break on an isometric is a fitting.</p>\n<p><strong>Cut length:</strong> Center-to-center distance minus the fittings' takeoffs (manufacturer's table). Worked example: 21 9/16 − 14 15/16 = 6 5/8 in.</p>\n<p><strong>Estimate:</strong> Materials + waste (commonly 10% on pipe) + Labor (hours × rate) + Overhead and profit.</p>\n<p><strong>Worked estimate:</strong> $800 materials + $80 waste + $1,200 labor = $2,080 subtotal + 20% ($416) = $2,496.</p>\n<p><strong>Check three ways:</strong> Re-count the big items · Re-do the arithmetic · Sense-check against a similar job.</p>\n<p><strong>Too expensive?</strong> Reduce scope · Phase the work · Walk away. Never cut quality.</p>\n<p><strong>Self-check:</strong> Take off a small drawing and build its estimate. If the numbers close, you have this course — and plb102 is complete.</p>\n"
};
