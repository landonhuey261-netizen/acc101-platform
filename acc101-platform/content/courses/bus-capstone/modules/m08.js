// Business Capstone — Module 8: Financial Plan II: Pro Forma Statements & Break-Even
module.exports = {
  "number": 8,
  "slug": "financial-plan-pro-forma-break-even",
  "title": "Financial Plan II: Pro Forma Statements & Break-Even",
  "estTime": "3–4 hours",
  "objectives": [
    "Build a Year-1 pro forma income statement from the plan's numbers.",
    "Explain the difference between profit and cash.",
    "Compute break-even in units and in dollars, and the margin of safety.",
    "Run a sensitivity check: what if price, volume, or costs move?",
    "Write the pro forma and break-even section of the plan."
  ],
  "sections": [
    {
      "heading": "The Pro Forma Income Statement",
      "html": "<p>A <strong>pro forma income statement</strong> is a forecast: sales minus costs equals profit, for a future period, using the plan's own assumptions. Maple Street's Year 1: sales of 1,200 tune-ups × $65 = $78,000; variable cost 1,200 × $20 = $24,000; gross profit $78,000 − $24,000 = $54,000; fixed costs $3,600 × 12 = $43,200; operating profit $54,000 − $43,200 = <strong>$10,800</strong>. The gross margin is $54,000 ÷ $78,000 = 69.2%, and the operating margin is $10,800 ÷ $78,000 = 13.8%.</p><p>Every line must trace to an assumption stated elsewhere in the plan: 1,200 tune-ups is the SOM from Module 2, $65 is the price from Module 4, $20 is the parts cost from Module 5, and $3,600 a month is the fixed cost from Modules 6 and 7. A forecast whose lines cannot be traced is a wish list with a dollar sign. The statement also shows the monthly shape: the first months run below break-even and lose money, the later months above it — the year is profitable only because the good months outweigh the bad ones.</p>"
    },
    {
      "heading": "Profit Is Not Cash",
      "html": "<p>A business can be profitable on paper and still run out of cash, because profit and cash move at different times. Maple Street buys $3,000 of parts before the first sale — cash out, no sale yet. A customer who pays by card settles in a day or two, but a fleet customer on 30-day terms pays a month after the work. The loan payment of $405.53 is cash out every month, while the van's cost was cash out once, at the start.</p><p>That is why the plan also needs a <strong>pro forma cash-flow statement</strong>: cash in minus cash out, month by month, showing the lowest cash balance of the year. If the lowest balance goes below zero, the business needs more working capital or a slower start — however profitable the year looks. The $6,500 of working capital exists to cover exactly the months when cash out runs ahead of cash in.</p>"
    },
    {
      "heading": "Break-Even and the Margin of Safety",
      "html": "<p>Break-even in units is fixed costs ÷ contribution: $3,600 ÷ $45 = <strong>80 tune-ups a month</strong>. Break-even in dollars is 80 × $65 = <strong>$5,200 a month</strong>, or $62,400 a year. The <strong>margin of safety</strong> measures how far sales can fall before losses begin: at the planned 100 tune-ups a month, it is (100 − 80) ÷ 100 = <strong>20%</strong>. In Year-1 terms, sales of $78,000 against break-even sales of $62,400 give a margin of safety of ($78,000 − $62,400) ÷ $78,000 = 20% as well.</p><p>A 20% margin of safety means the business can lose a fifth of its planned sales and still break even. A plan with a 2% margin of safety is a plan that fails on one bad month. Lenders look at this number because it is the plan's shock absorber, stated as a percentage anyone can understand.</p><div class=\"callout\"><strong>Key idea:</strong> Break-even is the floor, not the goal. The margin of safety is how far above the floor the plan stands — and 20% is a floor worth standing on.</div>"
    },
    {
      "heading": "Sensitivity: What If the Plan Is Wrong?",
      "html": "<p>Every forecast is wrong in some detail; the question is whether the business survives being wrong. Run three changes and watch the profit. <strong>Price falls to $60:</strong> contribution becomes $40, Year-1 gross becomes 1,200 × $40 = $48,000, profit $48,000 − $43,200 = $4,800. <strong>Volume falls to 1,000 tune-ups:</strong> sales $65,000, gross 1,000 × $45 = $45,000, profit $45,000 − $43,200 = $1,800. <strong>Fixed costs rise $200 a month</strong> ($2,400 a year): profit $10,800 − $2,400 = $8,400.</p><p>The business survives all three single changes — that is the point of the exercise. But combine two of them (price $60 <em>and</em> volume 1,000) and profit becomes 1,000 × $40 − $43,200 = −$3,200, a loss. The plan's answer is written down in advance: if two bad things happen together, cut the marketing that is not producing bookings, defer the part-time technician's extra hours, and renegotiate parts prices before touching the price.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Year 1: sales $78,000, gross $54,000 (69.2%), operating profit $10,800 (13.8%); profit is not cash — the cash-flow statement shows the lowest balance; break-even 80 a month, $5,200 a month, $62,400 a year; margin of safety 20%; the business survives any one bad change, but not two at once.</p><div class=\"callout\"><strong>Common mistake:</strong> Showing a Year-1 profit and stopping there. A profitable year with a cash hole in month 3 still fails. The cash-flow statement is not optional.</div><div class=\"callout\"><strong>Common mistake:</strong> A forecast with untraceable lines. Every number must point to the module that produced it — SOM, price, parts cost, fixed cost — or it is invented.</div><p><strong>Plan link:</strong> This module's assignment is the pro forma and break-even section. It is the section a lender checks with a calculator, so every line must add up.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Pro forma income statement",
      "def": "A forecast income statement: sales minus variable and fixed costs equals operating profit. Year 1: $78,000 − $24,000 − $43,200 = $10,800."
    },
    {
      "term": "Gross profit",
      "def": "Sales minus variable cost. Here $78,000 − $24,000 = $54,000."
    },
    {
      "term": "Operating profit",
      "def": "Gross profit minus fixed costs. Here $54,000 − $43,200 = $10,800."
    },
    {
      "term": "Gross margin",
      "def": "Gross profit as a share of sales. Here $54,000 ÷ $78,000 = 69.2%."
    },
    {
      "term": "Operating margin",
      "def": "Operating profit as a share of sales. Here $10,800 ÷ $78,000 = 13.8%."
    },
    {
      "term": "Pro forma cash-flow statement",
      "def": "A month-by-month forecast of cash in minus cash out, showing the lowest cash balance of the year."
    },
    {
      "term": "Break-even (dollars)",
      "def": "Break-even units × price. Here 80 × $65 = $5,200 a month, $62,400 a year."
    },
    {
      "term": "Margin of safety",
      "def": "How far sales can fall before losses begin: (planned sales − break-even sales) ÷ planned sales. Here 20%."
    },
    {
      "term": "Sensitivity analysis",
      "def": "Recomputing profit after changing one assumption at a time — price, volume, or costs — to see what the business can survive."
    },
    {
      "term": "Fixed costs (annual)",
      "def": "Monthly fixed costs × 12. Here $3,600 × 12 = $43,200."
    },
    {
      "term": "Contribution (annual)",
      "def": "Contribution per unit × units. Here $45 × 1,200 = $54,000, which equals gross profit."
    },
    {
      "term": "Balance sheet (pro forma)",
      "def": "A projected snapshot of what the business owns and owes at a future date — assets, liabilities, and owner's equity."
    },
    {
      "term": "Assumption",
      "def": "A stated belief behind a forecast number — for example, 1,200 tune-ups is the SOM — that must be traceable to its source."
    }
  ],
  "video": {
    "title": "Margin of Safety (Breakeven) | A-Level, IB & BTEC Business | tutor2u",
    "embedUrl": "https://www.youtube.com/embed/QpVVN3VpOlU",
    "note": "Builds a break-even calculation and adds the margin of safety: how far sales can fall before the business loses money. Work along with the sample business's numbers.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Plan section: Year-1 pro forma income statement.</strong> Build it: sales, variable cost, gross profit, fixed costs, operating profit, with gross and operating margins.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sales = 1,200 × $65 = <strong>$78,000</strong>. Step 2: Variable cost = 1,200 × $20 = <strong>$24,000</strong>. Step 3: Gross profit = $78,000 − $24,000 = <strong>$54,000</strong>; margin $54,000 ÷ $78,000 = <strong>69.2%</strong>. Step 4: Fixed = $3,600 × 12 = <strong>$43,200</strong>. Step 5: Operating profit = $54,000 − $43,200 = <strong>$10,800</strong>; margin $10,800 ÷ $78,000 = <strong>13.8%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Break-even in dollars.</strong> Break-even is 80 tune-ups a month at $65. (a) What is break-even in monthly dollars? (b) In annual dollars? (c) What is the Year-1 margin of safety in dollars and as a percentage?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 80 × $65 = <strong>$5,200</strong> a month. Step 2: (b) $5,200 × 12 = <strong>$62,400</strong> a year. Step 3: (c) $78,000 − $62,400 = <strong>$15,600</strong>; $15,600 ÷ $78,000 = <strong>20%</strong>. Step 4: The business can lose $15,600 of planned sales and still break even.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Price sensitivity.</strong> If the price fell to $60 with the same $20 variable cost and 1,200 tune-ups, what would contribution, gross profit, and operating profit be?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Contribution = $60 − $20 = <strong>$40</strong>. Step 2: Gross = 1,200 × $40 = <strong>$48,000</strong>. Step 3: Operating profit = $48,000 − $43,200 = <strong>$4,800</strong>. Step 4: A $5 price cut costs $6,000 of profit (1,200 × $5) — price is the most powerful lever in the plan, and the most dangerous to cut.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Volume sensitivity.</strong> If volume fell to 1,000 tune-ups at $65, what would sales, gross profit, and operating profit be? Is the business still profitable?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sales = 1,000 × $65 = <strong>$65,000</strong>. Step 2: Gross = 1,000 × $45 = <strong>$45,000</strong>. Step 3: Operating profit = $45,000 − $43,200 = <strong>$1,800</strong>. Step 4: Yes — barely. At 960 tune-ups the business breaks even exactly (960 × $45 = $43,200), so 1,000 leaves only 40 tune-ups of cushion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Two bad things at once.</strong> Price $60 and volume 1,000 together: compute operating profit. What does the plan do first if this happens?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Contribution = $60 − $20 = $40. Step 2: Gross = 1,000 × $40 = $40,000. Step 3: Operating profit = $40,000 − $43,200 = <strong>−$3,200, a loss</strong>. Step 4: The plan's first moves are written in advance: cut marketing that is not producing bookings, defer the part-time technician's extra hours, and renegotiate parts prices — before touching the price again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Profit vs. cash.</strong> In January the business buys $3,000 of parts, does 60 tune-ups at $65, and pays $3,600 of fixed costs. (a) What is January's operating profit? (b) Why might January's cash be worse than its profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Sales = 60 × $65 = $3,900; variable cost = 60 × $20 = $1,200; gross = $2,700; profit = $2,700 − $3,600 = <strong>−$900</strong>. Step 2: (b) Cash is worse because the $3,000 parts purchase is cash out in January while those parts are sold over later months — and any customer paying on 30-day terms has not paid yet. Step 3: This is why the $6,500 working capital exists.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Year-1 gross profit is:",
      "choices": [
        "$78,000",
        "$54,000",
        "$43,200",
        "$10,800"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $78,000 − $24,000 = $54,000. (a) is sales. (c) is annual fixed costs. (d) is operating profit after fixed costs."
    },
    {
      "q": "Operating margin is 13.8% because:",
      "choices": [
        "$10,800 ÷ $78,000",
        "$54,000 ÷ $78,000",
        "$43,200 ÷ $78,000",
        "$10,800 ÷ $54,000"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Operating profit divided by sales. (b) is the gross margin, 69.2%. (c) is fixed costs as a share of sales. (d) divides operating profit by gross profit, which is not a margin."
    },
    {
      "q": "Break-even in annual dollars is:",
      "choices": [
        "$5,200",
        "$62,400",
        "$78,000",
        "$43,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $5,200 a month × 12 = $62,400. (a) is monthly break-even dollars. (c) is planned Year-1 sales. (d) is annual fixed costs."
    },
    {
      "q": "The margin of safety is 20% because:",
      "choices": [
        "($78,000 − $62,400) ÷ $78,000",
        "$10,800 ÷ $54,000",
        "80 ÷ 100",
        "$5,200 ÷ $65"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (Planned sales − break-even sales) ÷ planned sales = $15,600 ÷ $78,000 = 20%. (b) is operating profit over gross profit. (c) is 80%, the break-even share of planned volume, not the margin of safety. (d) is break-even units, 80."
    },
    {
      "q": "At a $60 price and 1,200 tune-ups, operating profit is:",
      "choices": [
        "$10,800",
        "$4,800",
        "$1,800",
        "−$3,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Contribution $40 × 1,200 = $48,000 gross; $48,000 − $43,200 = $4,800. (a) is profit at $65. (c) is profit at 1,000 tune-ups and $65. (d) is the loss when price and volume both fall."
    },
    {
      "q": "At 1,000 tune-ups and $65, operating profit is:",
      "choices": [
        "$10,800",
        "$4,800",
        "$1,800",
        "−$900"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Gross 1,000 × $45 = $45,000; $45,000 − $43,200 = $1,800. (a) is profit at 1,200 tune-ups. (b) is profit at a $60 price. (d) is January's loss in Problem 6."
    },
    {
      "q": "Profit and cash differ because:",
      "choices": [
        "Parts are bought before they are sold and some customers pay later",
        "Profit is always larger than cash",
        "Cash is never counted",
        "The bank hides the cash"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Timing: cash goes out for parts and fixed costs before the related sales are collected. (b) is wrong: profit can be smaller than cash in a month too. (c) is wrong: cash is the cash-flow statement. (d) is wrong: the bank does not hide cash."
    },
    {
      "q": "January's operating profit on 60 tune-ups is:",
      "choices": [
        "$3,900",
        "$2,700",
        "−$900",
        "$10,800"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Sales $3,900 − variable $1,200 = gross $2,700; $2,700 − $3,600 = −$900. (a) is January sales. (b) is January gross profit. (d) is Year-1 operating profit."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Financial Plan II: Pro Forma Statements &amp; Break-Even: Quick Reference</h3>\n<p><strong>Core idea:</strong> A forecast is only as good as its traceable assumptions. Every line points to the module that produced it.</p>\n<p><strong>Year 1:</strong> Sales $78,000 · Variable $24,000 · Gross $54,000 (69.2%) · Fixed $43,200 · Operating profit $10,800 (13.8%).</p>\n<p><strong>Break-even:</strong> 80 tune-ups/month · $5,200/month · $62,400/year. Margin of safety ($78,000 − $62,400) ÷ $78,000 = 20%.</p>\n<div class=\"formula\">Operating profit = (Price − Variable cost) × Units − Fixed costs &nbsp;|&nbsp; Margin of safety = (Planned − Break-even) ÷ Planned</div>\n<p><strong>Sensitivity:</strong> Price $60 alone → profit $4,800. Volume 1,000 alone → profit $1,800. Both together → loss of $3,200. Profit is not cash: parts are bought before they are sold, and some customers pay later.</p>\n<p><strong>Self-check:</strong> Rebuild the Year-1 statement from the four traced numbers — 1,200 units, $65, $20, $3,600 a month — and recompute break-even and the margin of safety.</p>\n"
};
