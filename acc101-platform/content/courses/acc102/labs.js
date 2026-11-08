// ACC 102 — Spreadsheet workpaper labs.
// Each lab renders as a fill-in table: rows carry static cell HTML plus checked inputs.
// Input shape: { col, key, expected, hint } where col is the 1-based data column (label column excluded).
// Grading tolerance is 0.01, so two-decimal answers are safe.

module.exports = [
  {
    id: "cvp-break-even",
    title: "Cost-Volume-Profit & Break-Even Workpaper",
    introHtml: "<p>Cedar Lane Candle Co. sells one product — a hand-poured candle — for <strong>$25</strong>. Each candle costs <strong>$15</strong> in variable cost (wax, wick, jar, and packaging), and the shop's fixed costs are <strong>$60,000</strong> per year (rent, insurance, and the owner's salary). The owner wants to know: how many candles must we sell to break even, how many to earn a $20,000 profit, and how much cushion do we have at current sales?</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> The first row below is the framing decision: read the case, then choose the question Cedar Lane is actually trying to answer. Enter <strong>1</strong>, <strong>2</strong>, or <strong>3</strong>.</p><p><strong>Worked example (different numbers, already solved):</strong> A shop sells mugs at $20 with variable cost $12 and fixed cost $40,000. Contribution margin = 20 − 12 = <strong>$8</strong>. CM ratio = 8 ÷ 20 = <strong>40%</strong>. Break-even = 40,000 ÷ 8 = <strong>5,000 units</strong>. Break-even sales = 5,000 × $20 = <strong>$100,000</strong>. Now do the same steps for Cedar Lane.</p><ol><li>Compute the contribution margin per unit and the contribution margin ratio.</li><li>Compute the break-even point in units and in sales dollars.</li><li>Compute the units and sales dollars needed to earn the $20,000 target profit.</li><li>Compute the profit at 7,000 units and the margin of safety at 7,500 units.</li></ol>",
    headers: ["Item", "Amount"],
    rows: [
      { label: "Step 0 — Framing decision: Which question is Cedar Lane trying to answer? (1) What price should we charge? (2) How many candles must we sell to cover costs and reach our profit goal? (3) Should we close the shop?", cells: [""], inputs: [
        { col: 1, key: "cvp_frame", expected: 2, hint: "The case asks for a break-even point and a target-profit volume — the question is how many candles must be sold. Enter 2." } ] },
      { label: "Contribution margin per unit ($)", cells: [""], inputs: [
        { col: 1, key: "cvp_cm", expected: 10, hint: "Selling price $25 minus variable cost $15." } ] },
      { label: "Contribution margin ratio (%)", cells: [""], inputs: [
        { col: 1, key: "cvp_cmr", expected: 40, hint: "Contribution margin $10 divided by selling price $25, as a percent." } ] },
      { label: "Break-even point (units)", cells: [""], inputs: [
        { col: 1, key: "cvp_be_units", expected: 6000, hint: "Fixed cost $60,000 divided by contribution margin $10 per unit." } ] },
      { label: "Break-even point (sales $)", cells: [""], inputs: [
        { col: 1, key: "cvp_be_sales", expected: 150000, hint: "Break-even units 6,000 times price $25 — or fixed cost $60,000 divided by the 40% CM ratio." } ] },
      { label: "Units to earn $20,000 target profit", cells: [""], inputs: [
        { col: 1, key: "cvp_target_units", expected: 8000, hint: "(Fixed cost $60,000 + target profit $20,000) divided by contribution margin $10." } ] },
      { label: "Sales dollars to earn $20,000 target profit", cells: [""], inputs: [
        { col: 1, key: "cvp_target_sales", expected: 200000, hint: "Target units 8,000 times price $25 — or ($60,000 + $20,000) divided by the 40% CM ratio." } ] },
      { label: "Sales dollars at 7,500 units", cells: [""], inputs: [
        { col: 1, key: "cvp_sales_7500", expected: 187500, hint: "7,500 units times price $25." } ] },
      { label: "Profit at 7,000 units ($)", cells: [""], inputs: [
        { col: 1, key: "cvp_profit_7000", expected: 10000, hint: "7,000 units times contribution margin $10, minus fixed cost $60,000: 70,000 − 60,000." } ] },
      { label: "Margin of safety at 7,500 units ($)", cells: [""], inputs: [
        { col: 1, key: "cvp_mos_dollars", expected: 37500, hint: "Sales at 7,500 units ($187,500) minus break-even sales ($150,000)." } ] },
      { label: "Margin of safety at 7,500 units (%)", cells: [""], inputs: [
        { col: 1, key: "cvp_mos_pct", expected: 20, hint: "Margin of safety $37,500 divided by sales $187,500, as a percent." } ] }
    ],
    passing: 70,
    csvFilename: "cvp-break-even-workpaper.csv",
    csv: "Item,Amount\nStep 0 - Framing decision (enter 1, 2, or 3),\nContribution margin per unit ($),\nContribution margin ratio (%),\nBreak-even point (units),\nBreak-even point (sales $),\nUnits to earn $20000 target profit,\nSales dollars to earn $20000 target profit,\nSales dollars at 7500 units,\nProfit at 7000 units ($),\nMargin of safety at 7500 units ($),\nMargin of safety at 7500 units (%),"
  },
  {
    id: "master-budget",
    title: "Master Budget Build Workpaper",
    introHtml: "<p>Maple Street Bakery is building its Quarter 1 master budget. It expects to sell <strong>5,000</strong> loaves in Q1 at <strong>$20</strong> each and <strong>6,000</strong> loaves in Q2 at the same price. Desired ending inventory is <strong>1,200</strong> loaves; beginning inventory is <strong>1,000</strong> loaves. Each loaf needs <strong>2 pounds</strong> of flour at <strong>$3.00</strong> per pound and <strong>0.5 direct labor hours</strong> at <strong>$16.00</strong> per hour. 70% of sales are collected in the quarter of sale; the rest is collected next quarter. Beginning accounts receivable is <strong>$28,000</strong> and beginning cash is <strong>$20,000</strong>. Planned cash payments in Q1 are <strong>$95,000</strong>. Unit product cost is direct materials <strong>$6</strong> + direct labor <strong>$8</strong> + variable manufacturing overhead <strong>$4</strong> = <strong>$18</strong>. Selling and administrative expense for Q1 is <strong>$6,000</strong>.</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> The first row below is the framing decision: in a master budget, one budget is always built first because every other budget depends on it. Enter <strong>1</strong>, <strong>2</strong>, or <strong>3</strong>.</p><p><strong>Worked example (different numbers, already solved):</strong> A shop expects to sell 1,000 units at $10, so sales revenue = <strong>$10,000</strong>. Production = 1,000 + 200 desired ending − 100 beginning = <strong>1,100 units</strong>. Materials = 1,100 × 1 lb × $2 = <strong>$2,200</strong>. Labor = 1,100 × 0.5 hr × $10 = <strong>$5,500</strong>. Collections = 60% × $10,000 + $1,000 prior receivables = <strong>$7,000</strong>. Now build Maple Street's Q1 budgets the same way.</p><ol><li>Build the sales budget (Q1 sales revenue).</li><li>Build the production budget (Q1 units to produce).</li><li>Build the direct materials and direct labor budgets.</li><li>Build the cash budget (collections, cash available, ending cash).</li><li>Build the budgeted income statement (unit cost, cost of goods sold, gross profit, operating income).</li></ol>",
    headers: ["Budget line", "Amount"],
    rows: [
      { label: "Step 0 — Framing decision: Which budget is built first in a master budget? (1) Cash budget (2) Sales budget (3) Production budget", cells: [""], inputs: [
        { col: 1, key: "mb_frame", expected: 2, hint: "The sales budget comes first — production, materials, labor, and cash all depend on the sales forecast. Enter 2." } ] },
      { label: "Q1 sales revenue ($)", cells: [""], inputs: [
        { col: 1, key: "mb_sales", expected: 100000, hint: "5,000 loaves times $20 each." } ] },
      { label: "Q1 production (units)", cells: [""], inputs: [
        { col: 1, key: "mb_production", expected: 5200, hint: "Sales 5,000 + desired ending 1,200 − beginning 1,000." } ] },
      { label: "Direct materials cost, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_materials", expected: 31200, hint: "5,200 units × 2 lb × $3.00 per pound." } ] },
      { label: "Direct labor cost, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_labor", expected: 41600, hint: "5,200 units × 0.5 hours × $16.00 per hour (2,600 hours)." } ] },
      { label: "Cash collections, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_collections", expected: 98000, hint: "70% of Q1 sales ($70,000) plus beginning receivables $28,000." } ] },
      { label: "Cash available, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_cash_avail", expected: 118000, hint: "Beginning cash $20,000 plus collections $98,000." } ] },
      { label: "Ending cash, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_ending_cash", expected: 23000, hint: "Cash available $118,000 minus planned payments $95,000." } ] },
      { label: "Unit product cost ($)", cells: [""], inputs: [
        { col: 1, key: "mb_unit_cost", expected: 18, hint: "Direct materials $6 + direct labor $8 + variable manufacturing overhead $4." } ] },
      { label: "Cost of goods sold, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_cogs", expected: 90000, hint: "5,000 units sold times unit cost $18." } ] },
      { label: "Gross profit, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_gross_profit", expected: 10000, hint: "Sales $100,000 minus cost of goods sold $90,000." } ] },
      { label: "Operating income, Q1 ($)", cells: [""], inputs: [
        { col: 1, key: "mb_op_income", expected: 4000, hint: "Gross profit $10,000 minus selling and administrative expense $6,000." } ] }
    ],
    passing: 70,
    csvFilename: "master-budget-workpaper.csv",
    csv: "Budget line,Amount\nStep 0 - Framing decision (enter 1, 2, or 3),\nQ1 sales revenue ($),\nQ1 production (units),\nDirect materials cost Q1 ($),\nDirect labor cost Q1 ($),\nCash collections Q1 ($),\nCash available Q1 ($),\nEnding cash Q1 ($),\nUnit product cost ($),\nCost of goods sold Q1 ($),\nGross profit Q1 ($),\nOperating income Q1 ($),"
  }
];
