// bus221 - Module 6: Small Business Accounting & Cash Flow
module.exports = {
  number: 6,
  slug: "small-business-accounting-cash-flow",
  title: "Small Business Accounting & Cash Flow",
  estTime: "3–4 hours",
  objectives: [
    "Explain why profit and cash are different, and why a profitable business can still run out of money.",
    "Build a simple monthly cash-flow forecast from sales, collections, and payments.",
    "Use the accounting equation and the three financial statements at a small-business level.",
    "Choose between cash and accrual accounting and keep business money separate from personal money.",
    "Spot the early warning signs of a cash crunch and name the fix for each one."
  ],
  sections: [
    {
      heading: "Profit Is Not Cash",
      html: `
<p>The most dangerous sentence in small business is "we made a profit, so we must be fine." <strong>Profit</strong> is revenue minus expenses on paper. <strong>Cash</strong> is money actually in the bank. They differ for three ordinary reasons: customers who buy on credit and pay later, inventory bought before it is sold, and bills that arrive in a different month from the sales they belong to. A business can show a profit every month and still bounce a payment, because the profit is sitting in unpaid invoices and unsold stock.</p>
<p>Maya's cart is mostly cash, which makes the lesson easy to see. In a month she sells 1,500 cups for $7,500, spends $3,000 on supplies and $3,000 on fixed costs, and reports $1,500 of operating profit. But if she pays $1,800 for a new grinder that month, her bank balance falls by $300 even though the month was profitable: the bank sees $7,500 in and $7,800 out ($3,000 supplies + $3,000 fixed costs + $1,800 grinder). Profit measures the month; cash measures survival.</p>
<div class="callout"><strong>Key idea:</strong> Profit is an opinion about a period; cash is a fact about today. A business dies from lack of cash, not from lack of profit — so watch the bank balance as closely as the profit line.</div>
<p>That is why this module, and ACC 101 before it, treat the cash-flow statement as the owner's most important report. The income statement says whether the business model works. The balance sheet says what the business owns and owes. The cash-flow statement says whether the business can pay next week's bills. All three are needed, and the cash-flow statement is the one that kills you first if you ignore it.</p>`
    },
    {
      heading: "The Three Statements in Plain Language",
      html: `
<p>The <strong>income statement</strong> (profit and loss) covers a period — a month, a quarter, a year — and reports revenue, expenses, and profit. Maya's monthly income statement: revenue $7,500, variable costs $3,000, gross profit $4,500, fixed costs $3,000, operating profit $1,500. The <strong>balance sheet</strong> is a snapshot at one moment: what the business owns (assets: cash, cart, machine, inventory) equals what it owes (liabilities: the bank loan, the family loan, unpaid bills) plus what the owner has put in and kept (equity). The <strong>statement of cash flows</strong> explains how cash moved during the period, split into operating, investing, and financing activities.</p>
<p>The statements connect. Profit from the income statement flows into equity on the balance sheet. Buying the espresso machine appears as an investing cash outflow and as an asset on the balance sheet, not as an expense on the income statement — its cost is spread over its useful life as depreciation. Borrowing $5,000 appears as financing cash inflow and as a liability. If the three statements do not tie together, the books have an error, and finding it is cheaper now than at tax time or in front of a lender.</p>
<div class="callout"><strong>Key idea:</strong> Income statement = how the period went. Balance sheet = where the business stands right now. Cash-flow statement = how the cash got there. Learn to read all three, and never run a business on one alone.</div>
<p>The <strong>accounting equation</strong> holds it together: Assets = Liabilities + Equity. Maya's startup balance sheet: assets $19,800 (cart and equipment $12,700, inventory $1,800, cash reserve $3,000, plus $2,300 of other startup items), liabilities $9,800 ($5,000 bank loan + $4,800 family loan), equity $10,000 (her savings). Check: $9,800 + $10,000 = $19,800. The equation balances, which is the first test that the books are complete.</p>`
    },
    {
      heading: "Cash or Accrual? And Keep It Separate",
      html: `
<p>Under <strong>cash-basis accounting</strong>, income counts when the money arrives and expenses count when the money leaves. Under <strong>accrual-basis accounting</strong>, income counts when it is earned (when the sale is made) and expenses count when they are incurred, whether or not cash has moved. Most very small businesses use cash basis because it matches the bank balance; larger businesses and those with inventory generally use accrual because it matches revenue with the costs that produced it. The choice affects tax timing, so it is a decision to make with an accountant, and once chosen it should stay consistent.</p>
<p>Whatever the basis, one rule is absolute: <strong>keep business money separate from personal money.</strong> A separate business bank account and a separate card are not optional extras. Mixing the two makes the books unreliable, makes tax time miserable, and — for an LLC or corporation — can destroy the liability protection the structure was chosen for (Module 9). Maya pays herself a fixed monthly owner's draw from the business account and never buys groceries with the business card. If the business cannot afford the draw, that is information, not a reason to raid the till quietly.</p>
<div class="callout"><strong>Key idea:</strong> Separate accounts are the cheapest internal control a small business can buy. If you cannot tell in one minute whether a payment was business or personal, your books are already wrong.</div>
<p>Daily habits make the system work: record every sale and expense the day it happens, reconcile the bank account monthly, keep receipts, and review the three statements monthly — not at year end. Software such as QuickBooks Online can do the recording, but it only records what is entered; the discipline is the owner's job.</p>`
    },
    {
      heading: "Building a Cash-Flow Forecast",
      html: `
<p>A <strong>cash-flow forecast</strong> lists expected cash in and cash out by month, and the resulting bank balance. It is the owner's early-warning system. Build it from the same numbers as the plan: 1,500 cups a month at $5.00 is $7,500 cash in (the cart is cash sales), $3,000 for supplies, $3,000 for fixed costs, and any loan payments or equipment purchases in their own months. The forecast answers one question: in which month, if any, does the balance go below zero — and what will you do about it before it happens?</p>
<p><strong>Worked forecast — Maya's first three months.</strong> She starts with $3,000 of working-capital cash in the bank. Month 1: $7,500 in, $6,000 out, ending balance $4,500. Month 2: the grinder breaks and she spends $1,800 on a replacement, so $7,500 in, $7,800 out, ending balance $4,200. Month 3: she prepays $600 of insurance and buys $1,800 of extra inventory ahead of a festival, so $7,500 in, $8,400 out, ending balance $3,300. Every month was profitable on paper, yet the balance fell from $4,500 to $3,300 because cash timing is not profit timing. The forecast shows it coming; the income statement never would.</p>
<div class="callout"><strong>Key idea:</strong> Forecast cash monthly, not profit monthly. The forecast's job is to show the low month before it arrives, while there is still time to delay a purchase, speed up collections, or arrange a short-term cushion.</div>
<p>Common fixes for a forecast that goes negative: collect receivables faster (offer a small discount for early payment, invoice the day the work is done), delay a purchase that can wait, negotiate payment terms with a supplier, or arrange a line of credit before it is needed — banks lend to businesses that do not yet need the money. What does not fix it is selling more at a loss, or ignoring the forecast and hoping.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Profit is revenue minus expenses on paper; cash is money in the bank. They differ because of credit, inventory, and timing.</li>
<li>Three statements: income statement (the period), balance sheet (the moment), cash-flow statement (how cash moved).</li>
<li>Accounting equation: Assets = Liabilities + Equity. Maya's startup: $19,800 = $9,800 liabilities + $10,000 equity.</li>
<li>Cash basis counts money when it moves; accrual counts it when earned or incurred. Keep business and personal money separate, always.</li>
<li>A monthly cash-flow forecast is the early-warning system — it shows the low month before it arrives.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Spending profit that is not yet cash. A $1,500 monthly profit that is sitting in unpaid invoices cannot pay the rent — and the owner who spends it anyway discovers that at the worst moment.</div>
<div class="callout"><strong>Common mistake:</strong> Mixing personal and business money. It corrupts the books, complicates taxes, and can destroy an LLC's liability protection.</div>
<p><strong>Carry into the capstone:</strong> The capstone's financial modules build the full pro forma statements for your plan. Keep this module's discipline — one numbers page, monthly cash forecasts, separate accounts — and those statements will be built on truth, not hope.</p>`
    }
  ],
  keyTerms: [
    { term: "Profit", def: "Revenue minus expenses for a period, on paper — not the same as cash in the bank." },
    { term: "Cash flow", def: "Money actually moving into and out of the bank during a period." },
    { term: "Income statement", def: "A report for a period showing revenue, expenses, and profit (also called profit and loss)." },
    { term: "Balance sheet", def: "A snapshot at one moment showing what the business owns, owes, and the owner's equity." },
    { term: "Statement of cash flows", def: "A report explaining how cash moved during a period, split into operating, investing, and financing activities." },
    { term: "Accounting equation", def: "Assets = Liabilities + Equity; the balance sheet must always satisfy it." },
    { term: "Assets", def: "What the business owns: cash, equipment, inventory, and amounts customers owe it." },
    { term: "Liabilities", def: "What the business owes: loans, unpaid bills, and other obligations." },
    { term: "Equity", def: "The owner's stake: money put in plus profits kept in the business, minus withdrawals." },
    { term: "Cash-basis accounting", def: "Counting income when cash arrives and expenses when cash leaves." },
    { term: "Accrual-basis accounting", def: "Counting income when earned and expenses when incurred, whether or not cash has moved." },
    { term: "Cash-flow forecast", def: "A month-by-month projection of cash in, cash out, and the resulting bank balance." },
    { term: "Owner's draw", def: "A fixed, recorded payment the owner takes from the business, separate from business expenses." },
    { term: "Depreciation", def: "Spreading an asset's cost over its useful life as an expense, instead of expensing it all at purchase." }
  ],
  video: {
    title: "Cash Flow Statement Basics Explained",
    embedUrl: "https://www.youtube.com/embed/hMBN6yTIDb0",
    note: "A clear walk-through of the cash-flow statement's three sections and the indirect method, and how it ties back to the balance sheet. Watch it with Maya's three-month forecast in mind and note where each of her cash movements would land.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain in your own words why a business can report a profit and still run out of cash. Give two of the three reasons from this module.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Profit counts revenue when it is earned, but cash counts only when it arrives — customers who buy on credit leave profit on paper and no money in the bank. Step 2: Inventory is bought with cash before it is sold, so cash leaves months before the profit appears. Step 3: Either reason alone can empty the bank account while the income statement still shows a profit.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Maya's startup balance sheet shows assets of $19,800 and liabilities of $9,800 ($5,000 bank loan + $4,800 family loan). What is her equity, and how does it check against her $10,000 of savings?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Assets = Liabilities + Equity, so Equity = Assets − Liabilities. Step 2: $19,800 − $9,800 = <strong>$10,000</strong>. Step 3: That exactly matches her $10,000 of savings put into the business — the equation balances and the books are complete.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Maya starts a month with $3,000 in the bank. During the month she takes in $7,500 in cash sales and pays out $3,000 for supplies, $3,000 for fixed costs, and $1,800 for a replacement grinder. (a) What is her operating profit for the month (ignoring the grinder, which is an asset purchase)? (b) What is her ending bank balance?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Operating profit = $7,500 − $3,000 − $3,000 = <strong>$1,500</strong>. Step 2: Cash movement = $7,500 − $3,000 − $3,000 − $1,800 = −$300. Step 3: Ending balance = $3,000 − $300 = <strong>$2,700</strong>. Step 4: The month was profitable by $1,500 yet the bank balance fell by $300 — profit is not cash, exactly as the module warns.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A catering business invoices a client $2,400 in October, and the client pays in November. Under cash-basis accounting, in which month is the income counted? Under accrual-basis, in which month? Explain the difference in one sentence each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Cash basis — <strong>November</strong>, because income counts when the money arrives. Step 2: Accrual basis — <strong>October</strong>, because income counts when it is earned, when the catering was done. Step 3: The difference is timing only: lifetime profit is the same, but the two methods put the income in different months, which changes the tax year and the monthly reports.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Maya's three-month forecast: she starts with $3,000. Month 1: $7,500 in, $6,000 out. Month 2: $7,500 in, $7,800 out. Month 3: $7,500 in, $8,400 out. Compute the ending bank balance after each month.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Month 1: $3,000 + $7,500 − $6,000 = <strong>$4,500</strong>. Step 2: Month 2: $4,500 + $7,500 − $7,800 = <strong>$4,200</strong>. Step 3: Month 3: $4,200 + $7,500 − $8,400 = <strong>$3,300</strong>. Step 4: The balance falls each month after Month 1 despite profitable trading — the forecast, not the income statement, reveals the squeeze, and Maya should delay the festival inventory purchase or the grinder replacement if she can.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Name three early warning signs of a cash crunch and, for each one, name one fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Receivables growing while cash shrinks — fix: invoice the day work is done and offer a small discount for early payment. Step 2: Inventory piling up unsold — fix: stop reordering until stock falls and discount slow lines. Step 3: The forecast shows a negative month ahead — fix: delay a purchase, negotiate supplier terms, or arrange a line of credit before the month arrives, while the business still looks strong to a lender.</p>"
    }
  ],
  quiz: [
    {
      q: "A business can be profitable and still run out of cash mainly because:",
      choices: ["Profit is taxed at a higher rate", "Profit counts revenue when earned and ignores timing, while cash depends on when money actually moves", "Profit is always wrong", "Cash is not real money"],
      answer: 1,
      explanation: "Correct: (b). Credit sales, inventory, and timing separate profit from cash. (a) Tax rates do not create the gap. (c) Profit is a correct measure of the period — it is just not a measure of cash. (d) Cash is the most real money there is."
    },
    {
      q: "The accounting equation is:",
      choices: ["Assets = Liabilities − Equity", "Assets = Liabilities + Equity", "Profit = Revenue + Expenses", "Cash = Profit + Debt"],
      answer: 1,
      explanation: "Correct: (b). Assets always equal liabilities plus equity. (a) subtracts equity, which breaks the balance. (c) reverses the profit formula — profit is revenue minus expenses. (d) is not an accounting identity."
    },
    {
      q: "Maya's assets are $19,800 and liabilities $9,800. Her equity is:",
      choices: ["$29,600", "$10,000", "$9,800", "$5,000"],
      answer: 1,
      explanation: "Correct: (b). $19,800 − $9,800 = $10,000, matching her savings. (a) adds the two numbers. (c) repeats the liabilities. (d) is only the bank loan."
    },
    {
      q: "Under cash-basis accounting, income is counted when:",
      choices: ["The sale is made", "The money arrives", "The invoice is printed", "The tax return is filed"],
      answer: 1,
      explanation: "Correct: (b). Cash basis follows the money. (a) is accrual basis. (c) Printing an invoice earns nothing until paid. (d) Filing is a tax event, not an accounting trigger."
    },
    {
      q: "Maya starts with $3,000, takes in $7,500, and pays $3,000 + $3,000 + $1,800. Her ending balance is:",
      choices: ["$4,500", "$2,700", "$1,500", "$3,000"],
      answer: 1,
      explanation: "Correct: (b). $3,000 + $7,500 − $7,800 = $2,700. (a) ignores the grinder. (c) is the operating profit, not the cash balance. (d) assumes no net cash movement, which is false."
    },
    {
      q: "The statement that shows whether the business can pay next week's bills is the:",
      choices: ["Income statement", "Balance sheet", "Statement of cash flows", "Marketing plan"],
      answer: 2,
      explanation: "Correct: (c). It tracks actual cash movement. (a) shows profit for a period, not cash on hand. (b) shows a snapshot of what is owned and owed, not the flow. (d) is not a financial statement."
    },
    {
      q: "Keeping business and personal money separate matters most because:",
      choices: ["It looks professional", "Mixed money corrupts the books, complicates taxes, and can destroy an LLC's liability protection", "Banks require two accounts by law for all businesses", "It increases profit"],
      answer: 1,
      explanation: "Correct: (b). Those are the real consequences. (a) Appearance is a side benefit. (c) No universal law requires two accounts — but separation is essential practice. (d) Separation does not change profit; it reveals it accurately."
    },
    {
      q: "A cash-flow forecast's main job is to:",
      choices: ["Predict profit for the year", "Show the low month before it arrives, while there is still time to act", "Replace the income statement", "Set the selling price"],
      answer: 1,
      explanation: "Correct: (b). Early warning is the forecast's purpose. (a) is the income statement's job. (c) The forecast complements the statements; it does not replace them. (d) Pricing comes from costs, value, and competition."
    }
  ],
  studyGuide: `
<h3>Module 6 — Small Business Accounting & Cash Flow: Quick Reference</h3>
<p><strong>Core idea:</strong> Profit is an opinion about a period; cash is a fact about today. A business dies from lack of cash, not lack of profit.</p>
<p><strong>Three statements:</strong> Income statement (the period) · balance sheet (the moment) · cash-flow statement (how cash moved).</p>
<div class="formula">Assets = Liabilities + Equity &nbsp;|&nbsp; Maya: $19,800 = $9,800 + $10,000</div>
<p><strong>Cash vs accrual:</strong> Cash counts money when it moves; accrual counts it when earned or incurred. Choose with an accountant and stay consistent.</p>
<p><strong>Rules:</strong> Separate business and personal money, always. Record daily, reconcile monthly, forecast cash monthly.</p>
<p><strong>Watch out:</strong> Spending profit that is still sitting in unpaid invoices or unsold inventory is the classic cash-crunch mistake.</p>
<p><strong>Self-check:</strong> Write your own three-month cash forecast. If any month goes negative, name the fix now — not when the month arrives.</p>
`
};
