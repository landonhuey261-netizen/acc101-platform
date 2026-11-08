// ACC 102 - Module 6: Budgeting: The Master Budget, Step by Step
module.exports = {
  number: 6,
  slug: "budgeting-master-budget",
  title: "Budgeting: The Master Budget, Step by Step",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a master budget is and the order its budgets are built in.",
    "Prepare a sales budget, production budget, and direct materials budget.",
    "Prepare a cash budget and a budgeted income statement.",
    "Explain why the sales budget drives every other budget.",
    "Distinguish a static budget from a flexible budget."
  ],
  sections: [
    {
      heading: "The Master Budget: One Plan, Many Budgets",
      html: `
<p>A <strong>master budget</strong> is the company's complete financial plan for a period: a set of linked budgets that starts with sales and ends with budgeted financial statements. It has two halves. The <strong>operating budgets</strong> cover the business itself: sales, production, direct materials, direct labor, manufacturing overhead, selling and administrative expense. The <strong>financial budgets</strong> cover the money: the cash budget, the budgeted income statement, and the budgeted balance sheet.</p>
<p>The order matters because each budget feeds the next. You cannot plan production until you know sales; you cannot plan materials until you know production; you cannot plan cash until you know sales, purchases, and expenses. Building the master budget out of order is like building a house starting with the roof.</p>
<div class="callout"><strong>Key idea:</strong> The master budget is a chain, and the sales budget is the first link. Every error in the sales forecast ripples through production, purchasing, labor, and cash.</div>`
    },
    {
      heading: "Sales, Production, and Materials Budgets",
      html: `
<p>The <strong>sales budget</strong> states expected unit sales and the selling price: units × price = budgeted sales revenue. The <strong>production budget</strong> then answers how many units to make: units to produce = budgeted sales + desired ending finished goods inventory − beginning finished goods inventory. The <strong>direct materials budget</strong> answers how much material to buy: materials to purchase = materials needed for production + desired ending materials inventory − beginning materials inventory, valued at the purchase price.</p>
<p><strong>Worked example:</strong> Q1 budgeted sales 5,000 units at $20 = $100,000. Desired ending finished goods inventory is 1,200 units (20% of Q2's 6,000-unit sales) and beginning inventory is 1,000 units. Production for Q1 = 5,000 + 1,200 − 1,000 = <strong>5,200 units</strong>. Each unit needs 2 pounds of material at $3 per pound. Materials needed for production = 5,200 × 2 = 10,400 pounds, costing 10,400 × 3 = <strong>$31,200</strong>. (If ending and beginning materials inventories are equal, purchases equal usage.) Direct labor: 0.5 hour per unit at $16 per hour → 5,200 × 0.5 × 16 = <strong>$41,600</strong>.</p>`
    },
    {
      heading: "The Cash Budget: Will We Have the Cash?",
      html: `
<p>A company can be profitable and still run out of cash, because sales on credit arrive weeks after the sale while suppliers and payroll demand cash now. The <strong>cash budget</strong> tracks that timing: beginning cash + cash collections − cash payments = ending cash. Collections depend on the credit policy — for example, 70% of sales collected in the quarter of sale and 30% in the following quarter.</p>
<p><strong>Worked example:</strong> Beginning cash $20,000. Q1 sales $100,000; collections in Q1 are 70% of Q1 sales ($70,000) plus $28,000 collected from prior-quarter sales, for <strong>$98,000</strong> total collections. Cash available = 20,000 + 98,000 = $118,000. If Q1 cash payments (materials, labor, overhead, selling and administrative) total $95,000, ending cash = 118,000 − 95,000 = <strong>$23,000</strong>. If ending cash falls below the company's minimum, the budget signals borrowing before the shortfall arrives — which is the whole point of budgeting cash instead of discovering the shortage on payday.</p>
<div class="callout"><strong>Key idea:</strong> Profit is an opinion about the period; cash is a fact about the bank account. The cash budget is where the master budget meets reality.</div>`
    },
    {
      heading: "Budgeted Income Statement and Flexible Budgets",
      html: `
<p>Once the operating budgets are done, the <strong>budgeted income statement</strong> assembles them: budgeted sales minus budgeted cost of goods sold equals budgeted gross profit, minus budgeted selling and administrative expense equals budgeted operating income. With the module's numbers, cost per unit is direct materials $6.00 (2 lb × $3) + direct labor $8.00 (0.5 hr × $16) + variable manufacturing overhead $4.00 = <strong>$18.00</strong>. Q1 cost of goods sold = 5,000 units sold × 18 = $90,000; gross profit = 100,000 − 90,000 = $10,000; less selling and administrative expense of $6,000, budgeted operating income = <strong>$4,000</strong>.</p>
<p>Finally, a <strong>static budget</strong> is fixed at the planned activity level, while a <strong>flexible budget</strong> is restated for the actual activity level. Comparing actual results with a static budget when volume changed mixes volume effects with efficiency effects; a flexible budget separates them. Module 7 uses flexible budgets to compute variances fairly.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Master budget order: sales → production → materials, labor, overhead → selling and administrative → cash → budgeted statements.</li>
<li>Production = sales + desired ending inventory − beginning inventory.</li>
<li>Cash budget: beginning cash + collections − payments = ending cash; collections follow the credit policy.</li>
<li>Budgeted operating income = sales − cost of goods sold − selling and administrative expense.</li>
<li>Static budgets are fixed at planned volume; flexible budgets adjust to actual volume.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Budgeting production equal to sales. Production must also cover the change in finished goods inventory — otherwise the company ends the period with the wrong stock.</div>
<div class="callout"><strong>Common mistake:</strong> Treating budgeted sales as cash. Sales on credit arrive later; the cash budget, not the sales budget, tells you what is in the bank.</div>
<p><strong>Ready-to-work link:</strong> The Master Budget Build lab rebuilds this module's numbers in a spreadsheet workpaper. If you can build the Q1 chain by hand — sales, production, materials, labor, cash, income — the lab is the same chain with a better tool.</p>`
    }
  ],
  keyTerms: [
    { term: "Master budget", def: "The complete set of linked budgets for a period, ending in budgeted financial statements." },
    { term: "Operating budgets", def: "Budgets for sales, production, materials, labor, overhead, and selling and administrative expense." },
    { term: "Financial budgets", def: "Budgets for cash, the budgeted income statement, and the budgeted balance sheet." },
    { term: "Sales budget", def: "Expected unit sales times selling price — the first and driving budget of the master budget." },
    { term: "Production budget", def: "Units to produce: budgeted sales plus desired ending finished goods inventory minus beginning inventory." },
    { term: "Direct materials budget", def: "Materials to purchase: materials needed for production plus desired ending inventory minus beginning inventory." },
    { term: "Direct labor budget", def: "Labor hours and cost needed for planned production." },
    { term: "Cash budget", def: "Beginning cash plus collections minus payments equals ending cash; shows whether the company will have enough cash." },
    { term: "Budgeted income statement", def: "The income statement built from the operating budgets, showing budgeted operating income." },
    { term: "Static budget", def: "A budget fixed at the planned activity level, not adjusted for actual volume." },
    { term: "Flexible budget", def: "A budget restated for the actual activity level, used for fair variance comparisons." },
    { term: "Cash collections", def: "Cash received from sales, following the company's credit and collection policy." },
    { term: "Desired ending inventory", def: "The inventory a company plans to hold at period end, often a percentage of next period's sales or production." },
    { term: "Budget slack", def: "Padding a budget — understating revenues or overstating costs — to make targets easier to hit." }
  ],
  video: {
    title: "Introduction to Budgeting (Managerial Accounting)",
    embedUrl: "https://www.youtube.com/embed/pCwLhz0ltlE",
    note: "Edspira explains what a budget is and why the budgeting process is useful to organizations. Watch it, then trace the chain in this module: sales drives production, production drives materials and labor, and everything drives cash.",
    more: [
      { title: "The Sales Budget", url: "https://www.youtube.com/watch?v=frCX_bsFsao" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Q1 budgeted sales are 5,000 units at $20 and Q2 sales are 6,000 units at $20. Compute (a) Q1 sales revenue and (b) Q2 sales revenue.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Q1 = 5,000 × 20 = <strong>$100,000</strong>. Step 2: Q2 = 6,000 × 20 = <strong>$120,000</strong>. Total for the half-year = $220,000.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Q1 budgeted sales are 5,000 units. Desired ending finished goods inventory is 1,200 units and beginning inventory is 1,000 units. (a) How many units must be produced in Q1? (b) If each unit needs 2 pounds of material at $3 per pound, what is the direct materials cost of Q1 production?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Production = 5,000 + 1,200 − 1,000 = <strong>5,200 units</strong>. Step 2: Materials = 5,200 × 2 × 3 = 10,400 pounds × $3 = <strong>$31,200</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Q1 production is 5,200 units. Each unit needs 0.5 direct labor hour at $16 per hour. Compute (a) total direct labor hours and (b) total direct labor cost.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Hours = 5,200 × 0.5 = <strong>2,600 hours</strong>. Step 2: Cost = 2,600 × 16 = <strong>$41,600</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Beginning cash is $20,000. Q1 collections are $98,000 (70% of Q1 sales of $100,000 plus $28,000 from prior-quarter sales). Q1 cash payments total $95,000. Compute (a) cash available and (b) ending cash.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cash available = 20,000 + 98,000 = <strong>$118,000</strong>. Step 2: Ending cash = 118,000 − 95,000 = <strong>$23,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Cost per unit is $18.00 (materials $6 + labor $8 + variable overhead $4). Q1 sells 5,000 units at $20 for $100,000 of sales, and selling and administrative expense is $6,000. Compute (a) cost of goods sold, (b) gross profit, and (c) budgeted operating income.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cost of goods sold = 5,000 × 18 = <strong>$90,000</strong>. Step 2: Gross profit = 100,000 − 90,000 = <strong>$10,000</strong>. Step 3: Operating income = 10,000 − 6,000 = <strong>$4,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A company budgeted 10,000 units of sales but actually sold 12,000 units, and actual costs were higher than the static budget. Explain why comparing actual costs with the static budget is misleading, and what comparison should be used instead.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The static budget was built for 10,000 units, so it expects the costs of 10,000 units — but the company actually made and sold 12,000, which legitimately costs more. Step 2: The comparison mixes a volume difference with an efficiency difference. Step 3: Use a <strong>flexible budget</strong> restated for 12,000 units, so the comparison isolates whether costs were controlled at the volume actually achieved.</p>"
    }
  ],
  quiz: [
    {
      q: "The master budget is built in this order:",
      choices: ["Cash budget first, then sales", "Sales first, then production, materials, labor, and cash", "Budgeted balance sheet first", "Selling expense first, then sales"],
      answer: 1,
      explanation: "Correct: (b). Sales drives production, which drives materials and labor, which drive cash and the budgeted statements. (a) and (c) and (d) start with outputs that depend on sales."
    },
    {
      q: "Production needed equals:",
      choices: ["Budgeted sales only", "Budgeted sales + desired ending inventory − beginning inventory", "Budgeted sales − desired ending inventory + beginning inventory", "Beginning inventory + ending inventory"],
      answer: 1,
      explanation: "Correct: (b). Production must cover sales plus the inventory build (or minus the drawdown). (a) ignores inventory change. (c) reverses the inventory signs. (d) omits sales entirely."
    },
    {
      q: "Q1 sales 5,000 units, ending inventory 1,200, beginning inventory 1,000. Production is:",
      choices: ["5,000 units", "7,200 units", "5,200 units", "4,800 units"],
      answer: 2,
      explanation: "Correct: (c). 5,000 + 1,200 − 1,000 = 5,200. (a) ignores inventory. (b) adds beginning inventory. (d) subtracts the ending build instead of adding it."
    },
    {
      q: "At 5,200 units, 2 pounds per unit at $3 per pound, direct materials cost is:",
      choices: ["$10,400", "$31,200", "$15,600", "$20,800"],
      answer: 1,
      explanation: "Correct: (b). 5,200 × 2 × 3 = $31,200. (a) is the pounds, not the dollars. (c) is the cost at $1.50 per pound. (d) is the cost at 2 pounds for 3,467 units."
    },
    {
      q: "Beginning cash $20,000, collections $98,000, payments $95,000. Ending cash is:",
      choices: ["$3,000", "$23,000", "$118,000", "$193,000"],
      answer: 1,
      explanation: "Correct: (b). 20,000 + 98,000 − 95,000 = $23,000. (a) subtracts beginning cash. (c) is cash available before payments. (d) adds payments."
    },
    {
      q: "Cost per unit $18, 5,000 units sold at $20, selling and administrative expense $6,000. Budgeted operating income is:",
      choices: ["$10,000", "$4,000", "$100,000", "$90,000"],
      answer: 1,
      explanation: "Correct: (b). Sales $100,000 − COGS $90,000 = gross profit $10,000; minus $6,000 = $4,000. (a) is gross profit before selling expense. (c) is sales. (d) is cost of goods sold."
    },
    {
      q: "A flexible budget differs from a static budget because it:",
      choices: ["Is never compared with actual results", "Is restated for the actual activity level", "Ignores variable costs", "Is prepared only at year-end"],
      answer: 1,
      explanation: "Correct: (b). A flexible budget adjusts budgeted costs to actual volume so variances measure control, not volume. (a) is false — that comparison is its purpose. (c) and (d) are false."
    },
    {
      q: "Budget slack is:",
      choices: ["Extra cash kept in the bank", "Padding a budget by understating revenues or overstating costs to make targets easier", "The time allowed to prepare a budget", "A flexible budget with no fixed costs"],
      answer: 1,
      explanation: "Correct: (b). Slack is deliberate padding, usually to make performance look better against an easy target. (a) is a cash policy. (c) is a schedule. (d) is not a real term."
    }
  ],
  studyGuide: `
<h3>Module 6 — Budgeting: The Master Budget: Quick Reference</h3>
<p><strong>Order:</strong> Sales → production → direct materials → direct labor → overhead → selling & administrative → cash → budgeted income statement.</p>
<div class="formula">Production = Sales + Desired ending FG inventory − Beginning FG inventory</div>
<div class="formula">Cash: Beginning cash + Collections − Payments = Ending cash</div>
<p><strong>Anchor numbers (Q1):</strong> Sales 5,000 × $20 = $100,000. Production 5,200 units. Materials 5,200 × 2 lb × $3 = $31,200. Labor 5,200 × 0.5 hr × $16 = $41,600. Collections $98,000; ending cash $23,000. Unit cost $18.00; COGS $90,000; gross profit $10,000; operating income $4,000.</p>
<p><strong>Watch out:</strong> Production is not sales (inventory change matters), and sales are not cash (credit policy delays collections). Use flexible budgets when volume changes.</p>
<p><strong>Self-check:</strong> Rebuild the Q1 chain from the sales budget alone, without looking. If you can reach the $4,000 operating income and the $23,000 ending cash, you have the master budget.</p>
`
};
