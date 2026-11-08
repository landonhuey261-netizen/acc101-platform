// bus221 - Module 8: Pro Forma Financial Statements & Break-Even
module.exports = {
  number: 8,
  slug: "pro-forma-financial-statements-break-even",
  title: "Pro Forma Financial Statements & Break-Even",
  estTime: "3–4 hours",
  objectives: [
    "Build a Year 1 pro forma income statement from unit sales, price, variable costs, and fixed costs.",
    "Compute break-even in units and in dollars, and explain what moves it.",
    "Compute contribution margin, gross margin, and operating margin from a pro forma statement.",
    "Build a simple pro forma balance sheet and cash-flow summary that tie to the income statement.",
    "Use break-even and margin analysis to test a price change or a cost change before making it."
  ],
  sections: [
    {
      heading: "What 'Pro Forma' Means",
      html: `
<p><strong>Pro forma</strong> means "as a matter of form" — projected, forward-looking financial statements, built from assumptions instead of history. A new business has no history, so its financials are all pro forma: a projected income statement, a projected balance sheet, and a projected cash-flow statement for Year 1 (and usually Years 2 and 3 as well). Lenders and investors read them to answer one question: if the assumptions hold, does this business make money and repay what it owes?</p>
<p>Pro forma statements are built from the same numbers page as the rest of the plan. Every assumption must be visible and defensible: the price ($5.00), the volume (1,500 cups a month), the variable cost ($2.00), the fixed costs ($3,000 a month), the startup cost ($19,800). A projection whose assumptions are hidden is not a forecast; it is a guess with a spreadsheet around it. Show the assumptions on the face of the statement, so a reader can change one and see what happens.</p>
<div class="callout"><strong>Key idea:</strong> A pro forma statement is an assumption with arithmetic. Its value is not the final profit number — it is the visible chain from assumption to result, which lets a reader test the business by changing the assumptions.</div>
<p>The three pro forma statements must tie together, just like historical ones. Profit from the income statement flows into retained earnings on the balance sheet. The cash-flow statement starts from that profit and adjusts for equipment purchases, loan payments, and changes in inventory. If the income statement says the business earns $18,000 in Year 1 but the cash-flow statement shows the bank balance falling, something in the chain is wrong — usually an equipment purchase or a loan repayment that was left out.</p>`
    },
    {
      heading: "Maya's Year 1 Pro Forma Income Statement",
      html: `
<p>Build it from the top down. Monthly: revenue is 1,500 cups × $5.00 = $7,500, plus $300 of bean and catering sales, for $7,800. Variable costs are 1,500 × $2.00 = $3,000 for cups, plus $120 for the beans and catering supplies, for $3,120. Gross profit is $7,800 − $3,120 = $4,680. Fixed costs are $3,000. Operating profit is $4,680 − $3,000 = $1,680 a month. Annualized (× 12): revenue $93,600, variable costs $37,440, gross profit $56,160, fixed costs $36,000, operating profit $20,160.</p>
<p>Check the annual figures two ways. Cups alone: 18,000 cups a year × $5.00 = $90,000 revenue; variable $36,000; contribution $54,000; minus $36,000 fixed = $18,000. Add the extras: bean and catering revenue $3,600 a year, costs $1,440, contribution $2,160. Total: $18,000 + $2,160 = $20,160. Both routes agree — which is exactly the check a lender will do.</p>
<div class="callout"><strong>Key idea:</strong> Annualize by multiplying the monthly statement by 12, then re-derive the annual figures from the yearly volumes as a cross-check. If the two routes disagree, the monthly statement has an error.</div>
<p>Three margins summarize the statement. <strong>Gross margin</strong> = gross profit ÷ revenue = $56,160 ÷ $93,600 = 60%. <strong>Operating margin</strong> = operating profit ÷ revenue = $20,160 ÷ $93,600 = 21.5% (21.54% unrounded). <strong>Contribution margin ratio</strong> for cups = ($5.00 − $2.00) ÷ $5.00 = 60%. These percentages let a reader compare Maya's cart with any other business, regardless of size.</p>`
    },
    {
      heading: "Break-Even: In Units and in Dollars",
      html: `
<p><strong>Break-even</strong> is the volume at which revenue exactly covers all costs — operating profit is zero. In units: Break-even units = fixed costs ÷ contribution margin per unit. For cups alone: $3,000 ÷ $3.00 = 1,000 cups a month. In dollars: Break-even revenue = fixed costs ÷ contribution margin ratio = $3,000 ÷ 0.60 = $5,000 a month. Check: 1,000 cups × $5.00 = $5,000. Both measures agree, as they must.</p>
<p>Break-even moves when its inputs move. Raise the price to $5.50 and contribution becomes $3.50, so break-even falls to $3,000 ÷ $3.50 = 857 cups a month (857.14, so 858 whole cups to be safely above break-even). Raise variable cost to $2.50 and contribution falls to $2.50, so break-even rises to $3,000 ÷ $2.50 = 1,200 cups. Add $500 of fixed costs and break-even rises to $3,500 ÷ $3.00 = 1,167 cups. Every pricing and cost decision in the business is, underneath, a break-even decision.</p>
<div class="callout"><strong>Key idea:</strong> Break-even is the business's danger line. Everything above it is profit; everything below it is loss. Know your number, and know what would move it, before you change a price or sign a cost.</div>
<p><strong>Margin of safety</strong> measures how far above break-even the business actually operates: (actual sales − break-even sales) ÷ actual sales. At 1,500 cups against a 1,000-cup break-even: (1,500 − 1,000) ÷ 1,500 = 33.3%. Sales could fall by a third before the cart loses money on cups. A thin margin of safety means a fragile business; a wide one means room to survive a bad month.</p>`
    },
    {
      heading: "The Pro Forma Balance Sheet and Cash Flow",
      html: `
<p>The Year 1 pro forma balance sheet starts from the startup balance sheet (assets $19,800 = liabilities $9,800 + equity $10,000) and rolls it forward. During Year 1 the business earns $20,160 of operating profit (before loan interest and taxes, which this teaching case sets aside — see the note below), repays $2,400 of the family loan ($200 × 12) and $2,713.68 on the bank loan (12 payments of $226.14, of which about $2,400 is principal and about $313 is interest in the first year), and holds equipment that depreciates. The simplified teaching version: cash rises by the year's cash profit, loans fall by the principal repaid, and equity rises by the profit kept in the business.</p>
<p>The pro forma cash-flow summary for Year 1: operating cash in is the $20,160 operating profit (the cart is cash sales, so profit and operating cash are close); investing cash out is $0 in Year 1 (the equipment was bought at startup); financing cash out is $2,400 family loan repayment plus $2,713.68 of bank loan payments, totaling $5,113.68. Net cash change is about $20,160 − $5,114 = $15,046 added to the bank balance over the year. The cart ends Year 1 with far more cash than it started with — which is what a lender wants to see, and what the Module 6 forecast would have shown month by month.</p>
<div class="callout"><strong>Key idea:</strong> The three pro forma statements must tell the same story. Profit without cash is a warning; cash without profit is a countdown. When all three agree, the plan is believable.</div>
<p><strong>Honesty note:</strong> This teaching case sets aside income tax and the exact loan-amortization split between interest and principal, and it treats the $300 monthly extras as already net of their $120 supply cost in the margin math. A real plan would show tax and a full amortization schedule; the capstone's financial modules do exactly that for your own plan. The simplification is stated here so nobody mistakes a teaching model for a tax return.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Pro forma statements are projected financials built from visible, defensible assumptions.</li>
<li>Maya's Year 1: revenue $93,600, variable costs $37,440, gross profit $56,160 (60% margin), fixed costs $36,000, operating profit $20,160 (21.5% margin).</li>
<li>Break-even (cups): 1,000 units a month, or $5,000 a month in revenue. Margin of safety at 1,500 cups: 33.3%.</li>
<li>Break-even falls when price rises or variable cost falls, and rises when fixed costs rise.</li>
<li>The three pro forma statements must tie together; profit, cash, and the balance sheet must tell the same story.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Projecting revenue without projecting the costs that produce it. Revenue of $93,600 with no variable costs shown is not a forecast — it is a wish.</div>
<div class="callout"><strong>Common mistake:</strong> Hiding the assumptions. If a reader cannot find the price, the volume, and the costs behind the profit, they cannot trust the profit — and neither should you.</div>
<p><strong>Carry into the capstone:</strong> The capstone's Modules 7 and 8 are the financial plan — startup costs, funding, and these same pro forma statements for your business. The lab in this course (Business Plan Financials) is the practice run: build Maya's workpaper first, then build your own.</p>`
    }
  ],
  keyTerms: [
    { term: "Pro forma", def: "Projected, forward-looking financial statements built from assumptions rather than history." },
    { term: "Break-even point", def: "The sales volume at which revenue exactly covers all costs and operating profit is zero." },
    { term: "Break-even units", def: "Fixed costs divided by contribution margin per unit." },
    { term: "Break-even revenue", def: "Fixed costs divided by the contribution margin ratio." },
    { term: "Contribution margin", def: "Price minus variable cost per unit." },
    { term: "Contribution margin ratio", def: "Contribution margin divided by price — the share of each sales dollar available for fixed costs and profit." },
    { term: "Gross profit", def: "Revenue minus variable (cost of goods) costs." },
    { term: "Gross margin", def: "Gross profit divided by revenue." },
    { term: "Operating profit", def: "Gross profit minus fixed (operating) costs." },
    { term: "Operating margin", def: "Operating profit divided by revenue." },
    { term: "Margin of safety", def: "How far actual sales sit above break-even, as a percentage of actual sales." },
    { term: "Assumption", def: "A stated input to a forecast — price, volume, cost — that must be visible and defensible." },
    { term: "Amortization (loan)", def: "The split of each loan payment between interest and principal over the life of the loan." },
    { term: "Retained earnings", def: "Profits kept in the business rather than paid out to the owner." }
  ],
  video: {
    title: "Coffee Shop Financial Projections Template Tutorial | Dr. Paul Borosky, DBA, MBA",
    embedUrl: "https://www.youtube.com/embed/YcXuYQ9BdKI",
    note: "Dr. Paul Borosky builds five-year projected income statements, a 12-month profit-and-loss forecast, and a break-even analysis for a coffee shop — the same statements and the same break-even math as this module, on a business very like Maya's cart.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Maya's monthly figures: revenue $7,800, variable costs $3,120, fixed costs $3,000. (a) What is monthly gross profit? (b) What is monthly operating profit? (c) Annualize both by multiplying by 12.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Gross profit = $7,800 − $3,120 = <strong>$4,680 a month</strong>. Step 2: Operating profit = $4,680 − $3,000 = <strong>$1,680 a month</strong>. Step 3: Annual gross profit = $4,680 × 12 = <strong>$56,160</strong>. Step 4: Annual operating profit = $1,680 × 12 = <strong>$20,160</strong>. Step 5: Cross-check against the yearly route: 18,000 cups × $3.00 = $54,000 cup contribution, plus $2,160 extras contribution = $56,160 gross profit; minus $36,000 fixed = $20,160. Both routes agree.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using Maya's Year 1 figures (revenue $93,600, gross profit $56,160, operating profit $20,160), compute (a) gross margin and (b) operating margin as percentages.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Gross margin = $56,160 ÷ $93,600 = 0.60 = <strong>60%</strong>. Step 2: Operating margin = $20,160 ÷ $93,600 = 0.2154 = <strong>21.5%</strong> (21.54% unrounded). Step 3: The gross margin equals the cup contribution ratio because cups dominate the mix; the operating margin is lower because $36,000 of fixed costs sits between gross and operating profit.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Maya's fixed costs are $3,000 a month, price $5.00, variable cost $2.00. (a) Break-even in cups per month? (b) Break-even revenue per month? (c) Margin of safety at 1,500 cups a month?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Contribution = $5.00 − $2.00 = $3.00. Step 2: Break-even units = $3,000 ÷ $3.00 = <strong>1,000 cups</strong>. Step 3: Contribution ratio = $3.00 ÷ $5.00 = 0.60; break-even revenue = $3,000 ÷ 0.60 = <strong>$5,000</strong>. Step 4: Check: 1,000 × $5.00 = $5,000. Step 5: Margin of safety = (1,500 − 1,000) ÷ 1,500 = 500 ÷ 1,500 = <strong>33.3%</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Maya raises her price to $5.50, with variable cost unchanged at $2.00 and fixed costs unchanged at $3,000. (a) What is the new contribution per cup? (b) What is the new break-even in cups? (c) If volume falls to 1,200 cups at the new price, what is monthly operating profit from cups alone?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: New contribution = $5.50 − $2.00 = <strong>$3.50</strong>. Step 2: New break-even = $3,000 ÷ $3.50 = 857.14, so <strong>858 cups</strong> (the first whole-cup volume above break-even). Step 3: At 1,200 cups, contribution = 1,200 × $3.50 = $4,200; operating profit = $4,200 − $3,000 = <strong>$1,200 a month</strong>. Step 4: Compare with the old price at 1,500 cups ($1,500 profit): the price rise helps only if volume does not fall too far — at 1,200 cups she earns less than before, which is why a price change must be tested, not assumed.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A supplier raises Maya's variable cost to $2.50 a cup (price still $5.00, fixed costs $3,000). (a) What is the new break-even in cups? (b) At 1,500 cups, what is monthly operating profit from cups alone?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: New contribution = $5.00 − $2.50 = <strong>$2.50</strong>. Step 2: Break-even = $3,000 ÷ $2.50 = <strong>1,200 cups</strong>. Step 3: At 1,500 cups, contribution = 1,500 × $2.50 = $3,750; operating profit = $3,750 − $3,000 = <strong>$750 a month</strong>. Step 4: The cost rise costs her $750 a month of profit (from $1,500 to $750) — the same $0.50 per cup, times 1,500 cups.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Maya adds $500 a month of fixed costs for a second market pitch (fixed costs become $3,500; price $5.00, variable cost $2.00). (a) New break-even in cups? (b) At 1,500 cups, operating profit from cups alone? (c) Is the second pitch worth it if it adds only 100 cups a month?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Break-even = $3,500 ÷ $3.00 = 1,166.67, so <strong>1,167 cups</strong>. Step 2: At 1,500 cups, contribution = $4,500; profit = $4,500 − $3,500 = <strong>$1,000 a month</strong>, down from $1,500. Step 3: The pitch adds 100 cups × $3.00 = $300 of contribution but costs $500, so it <strong>loses $200 a month</strong> — not worth it unless it adds at least 167 cups ($500 ÷ $3.00 = 166.67). Step 4: Break-even thinking turns a vague 'more locations' idea into a number: 167 extra cups.</p>"
    }
  ],
  quiz: [
    {
      q: "'Pro forma' financial statements are:",
      choices: ["Historical statements from last year", "Projected statements built from stated assumptions", "Tax returns", "Bank statements"],
      answer: 1,
      explanation: "Correct: (b). Pro forma means forward-looking, assumption-based. (a) describes historical statements. (c) and (d) are different documents entirely."
    },
    {
      q: "Maya's Year 1 operating profit is:",
      choices: ["$18,000", "$20,160", "$56,160", "$93,600"],
      answer: 1,
      explanation: "Correct: (b). Monthly operating profit $1,680 × 12 = $20,160. (a) is the cup-only profit, ignoring the $2,160 extras contribution. (c) is gross profit. (d) is revenue."
    },
    {
      q: "Gross margin for Maya's Year 1 is:",
      choices: ["21.5%", "60%", "33.3%", "100%"],
      answer: 1,
      explanation: "Correct: (b). $56,160 ÷ $93,600 = 60%. (a) is the operating margin. (c) is the margin of safety. (d) would mean no costs at all."
    },
    {
      q: "Break-even revenue for Maya (fixed $3,000, contribution ratio 60%) is:",
      choices: ["$3,000", "$5,000", "$7,500", "$1,800"],
      answer: 1,
      explanation: "Correct: (b). $3,000 ÷ 0.60 = $5,000, matching 1,000 cups × $5.00. (a) is the fixed cost alone. (c) is revenue at 1,500 cups. (d) is unrelated."
    },
    {
      q: "If the price rises to $5.50 with variable cost $2.00, the new break-even is about:",
      choices: ["1,200 cups", "1,000 cups", "858 cups", "600 cups"],
      answer: 2,
      explanation: "Correct: (c). Contribution $3.50; $3,000 ÷ $3.50 = 857.14, so 858 whole cups. (a) is the break-even if variable cost rose to $2.50. (b) is the old break-even. (d) would need a $5.00 contribution."
    },
    {
      q: "Margin of safety at 1,500 cups against a 1,000-cup break-even is:",
      choices: ["50%", "33.3%", "66.7%", "25%"],
      answer: 1,
      explanation: "Correct: (b). (1,500 − 1,000) ÷ 1,500 = 33.3%. (a) computes (1,500 − 1,000) ÷ 1,000, the wrong base. (c) is 1,000 ÷ 1,500, the break-even share, not the safety margin. (d) has no basis in these numbers."
    },
    {
      q: "A second pitch costing $500 a month needs how many extra cups to pay for itself (contribution $3.00)?",
      choices: ["100 cups", "167 cups", "500 cups", "1,000 cups"],
      answer: 1,
      explanation: "Correct: (b). $500 ÷ $3.00 = 166.67, so 167 cups. (a) adds only $300, losing $200. (c) confuses dollars with cups. (d) is the whole break-even volume."
    },
    {
      q: "The most important quality of a pro forma statement is that:",
      choices: ["It shows a large profit", "Its assumptions are visible and defensible, so a reader can test them", "It is printed on one page", "It never changes"],
      answer: 1,
      explanation: "Correct: (b). Visible assumptions make the forecast testable and trustworthy. (a) A large profit with hidden assumptions is worthless. (c) Length is irrelevant. (d) Projections should be updated as evidence arrives."
    }
  ],
  studyGuide: `
<h3>Module 8 — Pro Forma Financial Statements & Break-Even: Quick Reference</h3>
<p><strong>Core idea:</strong> A pro forma statement is an assumption with arithmetic. Show the assumptions; let the reader test them.</p>
<p><strong>Maya Year 1:</strong> Revenue $93,600 · variable $37,440 · gross profit $56,160 (60%) · fixed $36,000 · operating profit $20,160 (21.5%).</p>
<div class="formula">Break-even units = fixed costs ÷ contribution per unit &nbsp;|&nbsp; Break-even revenue = fixed costs ÷ contribution ratio &nbsp;|&nbsp; Margin of safety = (actual − break-even) ÷ actual</div>
<p><strong>Maya break-even:</strong> $3,000 ÷ $3.00 = 1,000 cups/month; $3,000 ÷ 0.60 = $5,000/month; margin of safety at 1,500 cups = 33.3%.</p>
<p><strong>What moves break-even:</strong> Price up → break-even down. Variable cost up → break-even up. Fixed costs up → break-even up.</p>
<p><strong>Watch out:</strong> Revenue without its costs is a wish, and hidden assumptions are untrustworthy. The three statements must tie together.</p>
<p><strong>Self-check:</strong> Change one assumption in Maya's statement — price, volume, or a cost — and recompute break-even and profit. That is how a lender will test your plan.</p>
`
};
