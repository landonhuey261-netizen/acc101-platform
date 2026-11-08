// BUS 121 - Module 2: Spreadsheets for Business: Formulas, Functions & Tables
module.exports = {
  number: 2,
  slug: "spreadsheets-for-business",
  title: "Spreadsheets for Business: Formulas, Functions & Tables",
  estTime: "3–4 hours",
  objectives: [
    "Build a spreadsheet with formulas that reference cells, not typed numbers.",
    "Use SUM, AVERAGE, MIN, MAX, COUNT, and COUNTIF correctly.",
    "Use IF, VLOOKUP/XLOOKUP, and SUMIF to answer business questions.",
    "Use absolute vs. relative references so formulas copy correctly.",
    "Design a spreadsheet table that another person can audit and use."
  ],
  sections: [
    {
      heading: "Formulas Reference Cells, Never Typed Numbers",
      html: `
<p>A spreadsheet's power is that it recalculates. Put a price in cell B2 and a quantity in cell C2, and the revenue formula is <code>=B2*C2</code> — not <code>=40*7500</code>. When the price changes, every dependent cell updates. A formula with typed numbers inside it is a calculator with a memory problem: it cannot update, and nobody can tell where its numbers came from.</p>
<p>Every formula starts with <code>=</code>. Operators are <code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, and <code>^</code> for powers. Order of operations follows ordinary arithmetic: powers first, then multiplication and division, then addition and subtraction — use parentheses to make your intent explicit. A clean spreadsheet shows its inputs in one place, its formulas in another, and its results clearly labeled.</p>
<div class="callout"><strong>Key idea:</strong> A cell should contain either an input (a number someone typed) or a formula (a calculation). A cell that contains both — a typed number that looks like a result — is the most common spreadsheet error in business.</div>`
    },
    {
      heading: "The Core Functions: SUM, AVERAGE, MIN, MAX, COUNT",
      html: `
<p>Functions are named calculations. <code>=SUM(B2:B13)</code> adds a column of monthly sales. <code>=AVERAGE(B2:B13)</code> gives the mean month. <code>=MIN</code> and <code>=MAX</code> find the extremes. <code>=COUNT</code> counts numbers; <code>=COUNTA</code> counts non-empty cells. <code>=COUNTIF(B2:B13, \">1000\")</code> counts the months above $1,000.</p>
<p><strong>Worked example:</strong> Monthly sales of $4,200, $4,800, $5,100, $4,500 total <code>=SUM</code> = $18,600. <code>=AVERAGE</code> = 18,600 ÷ 4 = $4,650. <code>=MAX</code> = $5,100, <code>=MIN</code> = $4,200, and the range is 5,100 − 4,200 = $900. These five functions answer most first-pass business questions about a column of numbers, and they are the same functions the statistics labs in this course use to describe data.</p>`
    },
    {
      heading: "IF, SUMIF, and Lookups: Answering Questions",
      html: `
<p><code>=IF</code> makes a decision: <code>=IF(B2>=10000, \"Target met\", \"Below target\")</code>. <code>=SUMIF</code> adds only the rows that meet a condition: <code>=SUMIF(A2:A13, \"North\", B2:B13)</code> totals sales for the North region only. <code>=VLOOKUP</code> (or the newer <code>=XLOOKUP</code>) finds a value in a table: given a product code, return its price from a price list, instead of typing the price by hand and risking a typo.</p>
<p><strong>Worked example:</strong> A price list has codes A101 ($40), A102 ($55), A103 ($70). An order for 100 units of A102 should use <code>=VLOOKUP(\"A102\", price_table, 2, FALSE) * 100</code> = 55 × 100 = <strong>$5,500</strong>. If the price list changes, the order updates automatically. Typing $55 into the order instead would leave a stale price the day the list changes.</p>
<div class="callout"><strong>Key idea:</strong> A lookup turns a table into a single source of truth. Change the price once, in the price list, and every order, quote, and forecast that references it is correct.</div>`
    },
    {
      heading: "Relative vs. Absolute References",
      html: `
<p>When you copy a formula down a column, its references move with it — that is a <strong>relative reference</strong>. <code>=B2*C2</code> copied down becomes <code>=B3*C3</code>, <code>=B4*C4</code>, and so on. That is exactly what you want for a column of line totals. But a reference to a single input — a tax rate in cell $B$1, a discount rate, a fixed cost — must not move. Put dollar signs on it: <code>=$B$1</code> is an <strong>absolute reference</strong> that stays put when copied. <code>=B2*(1-$B$1)</code> applies the same discount down a whole column.</p>
<p><strong>Worked example:</strong> A price column B2:B6 and a 10% discount rate in $B$1 = 0.10. The discounted price in C2 is <code>=B2*(1-$B$1)</code>. Copy it down: C3 becomes <code>=B3*(1-$B$1)</code> — the price reference moves, the rate does not. Forget the dollar signs and C3 becomes <code>=B3*(1-B2)</code>, which subtracts the previous price instead of the rate — a silent, plausible-looking error.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Formulas reference cells; inputs live in labeled cells, not inside formulas.</li>
<li>SUM, AVERAGE, MIN, MAX, COUNT/COUNTIF describe a column; IF, SUMIF, and lookups answer conditional questions.</li>
<li>Relative references move when copied; absolute references ($B$1) stay put. Use each where it belongs.</li>
<li>A spreadsheet is a document someone else must audit: label inputs, show units, and keep one source of truth per fact.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Typing numbers inside formulas. The formula works today and lies tomorrow, when the input changes and the formula does not.</div>
<div class="callout"><strong>Common mistake:</strong> Copying a formula that references a rate or a fixed cost without locking it with $. The first row is right and every row after it is wrong — and the error is easy to miss because the numbers look plausible.</div>
<p><strong>Ready-to-work link:</strong> The two spreadsheet labs in this course are built on exactly these tools: SUM and AVERAGE for the statistics lab, and formulas with absolute references for the forecasting lab. If you can build a clean price-times-quantity table with a lookup, you are ready.</p>`
    }
  ],
  keyTerms: [
    { term: "Spreadsheet", def: "A grid of cells where inputs, formulas, and results are linked so that changing an input updates every dependent result." },
    { term: "Cell reference", def: "The address of a cell (e.g., B2) used inside a formula instead of a typed number." },
    { term: "Formula", def: "A calculation in a cell, beginning with =, that references other cells." },
    { term: "Function", def: "A named, built-in calculation such as SUM, AVERAGE, IF, or VLOOKUP." },
    { term: "Relative reference", def: "A cell reference that moves when a formula is copied to another cell." },
    { term: "Absolute reference", def: "A cell reference with $ signs (e.g., $B$1) that does not move when copied." },
    { term: "SUM", def: "Adds a range of cells." },
    { term: "AVERAGE", def: "Returns the arithmetic mean of a range." },
    { term: "COUNTIF", def: "Counts cells in a range that meet a condition." },
    { term: "SUMIF", def: "Adds cells in a range that meet a condition." },
    { term: "IF", def: "Returns one value if a condition is true and another if it is false." },
    { term: "VLOOKUP / XLOOKUP", def: "Finds a value in a table by a key and returns a value from the same row." },
    { term: "Range", def: "A rectangular block of cells, written like B2:B13." },
    { term: "Source of truth", def: "The one place a fact is stored; every other use references it so it can never go stale." },
    { term: "Audit trail", def: "The visible chain from inputs through formulas to results, so another person can check the work." }
  ],
  video: {
    title: "Excel Formulas and Functions Tutorial",
    embedUrl: "https://www.youtube.com/embed/Jl0Qk63z2ZY",
    note: "Kevin Stratvert walks through Excel formulas and functions — SUM, MIN, MAX, COUNT, AVERAGE, IF, COUNTIF, VLOOKUP, and SUMIF — the exact toolkit this module teaches. Follow along in your own spreadsheet and build the examples as he does.",
    more: [
      { title: "Excel: Intro to Formulas", url: "https://www.youtube.com/watch?v=xc14gFFyiTw" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Monthly sales are $4,200, $4,800, $5,100, and $4,500. Compute (a) the total, (b) the average, (c) the maximum, (d) the minimum, and (e) the range.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total = 4,200 + 4,800 + 5,100 + 4,500 = <strong>$18,600</strong>. Step 2: Average = 18,600 ÷ 4 = <strong>$4,650</strong>. Step 3: Maximum = <strong>$5,100</strong>. Step 4: Minimum = <strong>$4,200</strong>. Step 5: Range = 5,100 − 4,200 = <strong>$900</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A price list has A101 = $40, A102 = $55, A103 = $70. An order is for 100 units of A102. (a) What formula returns the unit price from the list? (b) What is the order total?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The lookup formula is <code>=VLOOKUP(\"A102\", price_table, 2, FALSE)</code>, which returns <strong>$55</strong>. Step 2: Order total = 55 × 100 = <strong>$5,500</strong>. Because the price comes from the list, a price change updates the order automatically.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A discount rate of 10% is stored in cell $B$1. Prices are in B2:B6. (a) Write the formula for the discounted price in C2. (b) What does the formula become when copied to C3? (c) What goes wrong if the $ signs are left off?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: C2 = <code>=B2*(1-$B$1)</code>. Step 2: Copied to C3 it becomes <code>=B3*(1-$B$1)</code> — the price moves, the rate stays. Step 3: Without $ signs it becomes <code>=B3*(1-B2)</code>, subtracting the previous price instead of the 10% rate — a silent error.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Sales by region: North $12,000, South $8,000, North $15,000, South $9,000. (a) What SUMIF formula totals North sales? (b) What is the total? (c) What is the average sale across all four rows?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The formula is <code>=SUMIF(region_range, \"North\", sales_range)</code>. Step 2: North total = 12,000 + 15,000 = <strong>$27,000</strong>. Step 3: Average across all four = (12,000 + 8,000 + 15,000 + 9,000) ÷ 4 = 44,000 ÷ 4 = <strong>$11,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A formula reads =B2*40 where B2 is quantity and 40 is the price. Explain two problems with this formula and write a better version.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The price 40 is typed inside the formula, so it cannot update when the price changes and nobody can tell where 40 came from. Step 2: The formula hides an input inside a calculation, so an auditor cannot find the price without reading every formula. Step 3: Better version: put the price in a labeled cell (say $B$1) and use <code>=B2*$B$1</code> — or reference a price-list lookup.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A target is $10,000 of monthly sales. Write the IF formula that returns \"Target met\" when sales in B2 reach the target and \"Below target\" otherwise, and evaluate it for B2 = $12,000 and B2 = $8,500.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The formula is <code>=IF(B2>=10000, \"Target met\", \"Below target\")</code>. Step 2: For $12,000 it returns <strong>\"Target met\"</strong>. Step 3: For $8,500 it returns <strong>\"Below target\"</strong>.</p>"
    }
  ],
  quiz: [
    {
      q: "The most important rule for spreadsheet formulas is:",
      choices: ["Type all numbers directly into formulas", "Reference cells for inputs, never type numbers into formulas", "Use as many functions as possible", "Never use absolute references"],
      answer: 1,
      explanation: "Correct: (b). Cell references let the spreadsheet recalculate when inputs change; typed numbers go stale. (a) is the error this module warns against. (c) is style, not a rule. (d) is wrong — absolute references are essential for rates and fixed inputs."
    },
    {
      q: "Monthly sales $4,200, $4,800, $5,100, $4,500. The average is:",
      choices: ["$4,650", "$4,800", "$18,600", "$900"],
      answer: 0,
      explanation: "Correct: (a). 18,600 ÷ 4 = $4,650. (b) is one month's sales. (c) is the total. (d) is the range."
    },
    {
      q: "The range of the same sales data is:",
      choices: ["$4,650", "$900", "$18,600", "$5,100"],
      answer: 1,
      explanation: "Correct: (b). 5,100 − 4,200 = $900. (a) is the average. (c) is the total. (d) is the maximum."
    },
    {
      q: "A discount rate in $B$1 must use an absolute reference because:",
      choices: ["It makes the formula longer", "It must stay fixed when the formula is copied down a column", "Relative references are not allowed for rates", "It prevents the rate from ever changing"],
      answer: 1,
      explanation: "Correct: (b). The rate is one input used by every row; copying must not move it. (a) is not a reason. (c) is false — relative references are allowed, just wrong here. (d) is false — the rate can still be edited in $B$1."
    },
    {
      q: "=B2*(1-$B$1) copied from C2 to C3 becomes:",
      choices: ["=B3*(1-$B$1)", "=B3*(1-B2)", "=B2*(1-$B$1)", "=C3*(1-$B$1)"],
      answer: 0,
      explanation: "Correct: (a). The relative reference B2 moves to B3; the absolute reference $B$1 stays. (b) is what happens without the dollar signs. (c) is the uncopied formula. (d) changes the wrong reference."
    },
    {
      q: "SUMIF is used to:",
      choices: ["Add all cells in a range", "Add only the cells that meet a condition", "Count cells that meet a condition", "Find a value in a table"],
      answer: 1,
      explanation: "Correct: (b). SUMIF adds conditionally, e.g., sales for one region. (a) is SUM. (c) is COUNTIF. (d) is VLOOKUP/XLOOKUP."
    },
    {
      q: "A VLOOKUP on a price list is better than typing the price into an order because:",
      choices: ["It is faster to type", "The price list is a single source of truth — a price change updates every order automatically", "It hides the price from the customer", "It works without a price list"],
      answer: 1,
      explanation: "Correct: (b). One source of truth prevents stale prices. (a) is false — typing is faster once. (c) is not the purpose. (d) is false — a lookup needs a table."
    },
    {
      q: "=IF(B2>=10000, \"Target met\", \"Below target\") with B2 = $8,500 returns:",
      choices: ["Target met", "Below target", "10000", "An error"],
      answer: 1,
      explanation: "Correct: (b). 8,500 is below 10,000, so the false branch returns. (a) would require B2 ≥ 10,000. (c) is the threshold, not a result. (d) is wrong — the formula is valid."
    }
  ],
  studyGuide: `
<h3>Module 2 — Spreadsheets for Business: Quick Reference</h3>
<p><strong>Golden rule:</strong> Inputs live in labeled cells; formulas reference cells. Never type a number into a formula.</p>
<p><strong>Core functions:</strong> SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, COUNTIF, SUMIF, IF, VLOOKUP/XLOOKUP.</p>
<p><strong>References:</strong> Relative (B2) moves when copied; absolute ($B$1) stays. Lock rates and fixed inputs with $.</p>
<p><strong>Anchor:</strong> Sales $4,200, $4,800, $5,100, $4,500 → total $18,600, average $4,650, max $5,100, min $4,200, range $900.</p>
<p><strong>Lookup anchor:</strong> A102 at $55 × 100 units = $5,500, priced from the list, not typed into the order.</p>
<p><strong>Watch out:</strong> A formula that looks right on the first row and is wrong on every later row is almost always a missing $ sign.</p>
<p><strong>Self-check:</strong> Build a small table — price, quantity, line total, region, SUMIF by region — with the price in one locked cell, and change the price to confirm every total updates.</p>
`
};
