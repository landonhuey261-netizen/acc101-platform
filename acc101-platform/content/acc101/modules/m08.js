module.exports = {
  number: 8,
  slug: "receivables",
  title: "Receivables",
  estTime: "3–4 hours",
  objectives: [
    "Identify the major types of receivables and explain how each arises.",
    "Explain why GAAP requires the allowance method instead of the direct write-off method.",
    "Estimate uncollectible accounts using the percent-of-sales method.",
    "Estimate uncollectible accounts using the aging-of-receivables method.",
    "Journalize the write-off and the recovery of an uncollectible account.",
    "Account for notes receivable and compute interest using P × R × T.",
    "Compute and interpret accounts receivable turnover and days' sales in receivables."
  ],
  sections: [
    {
      heading: "Types of Receivables",
      html: `<p><strong>Receivables</strong> are amounts owed to a company by customers and others — the flip side of the payables you saw in earlier modules. They arise when a company delivers goods or services before collecting cash, which is nearly every business-to-business sale in the economy. The three main types are:</p>
<p><strong>Accounts receivable (trade receivables).</strong> Amounts customers owe for goods or services sold on open account in the normal course of business. They are usually due within 30–60 days, carry no written promise and no interest, and are classified as current assets. A wholesaler shipping $50,000 of merchandise to a retailer on terms 2/10, n/30 creates an account receivable.</p>
<p><strong>Notes receivable.</strong> Amounts owed that are supported by a formal written promise — a <strong>promissory note</strong> — in which the maker promises to pay a definite sum (the <strong>principal</strong> or face value) on a definite date (the <strong>maturity date</strong>), usually with interest. Notes often arise when a company needs stronger evidence of a debt: converting an overdue account receivable into a note, financing a large equipment sale, or lending money to an employee or affiliate.</p>
<p><strong>Other receivables.</strong> A catch-all for non-trade receivables: interest receivable, tax refunds receivable, advances to employees, and receivables from officers. These are reported separately from trade receivables on the balance sheet.</p>
<div class="callout"><strong>Key idea:</strong> The accounting challenge with receivables is <em>collectibility</em>. A receivable is only as good as the customer's willingness and ability to pay, so companies must estimate — before year-end — how much of their receivables will never be collected, and report receivables at the amount they actually expect to receive (<strong>net realizable value</strong>).</div>`
    },
    {
      heading: "The Allowance Method vs. the Direct Write-Off Method",
      html: `<p>Not every credit sale is collected. Suppose a company makes $850,000 of credit sales this year and learns next year that $17,000 of it will never be paid. There are two ways to account for that loss:</p>
<p><strong>Direct write-off method.</strong> Record Bad Debt Expense only when a specific account is judged uncollectible: debit Bad Debt Expense, credit Accounts Receivable. Simple — but flawed. The expense is recorded in a <em>later</em> period than the sale that caused it, violating the <strong>matching principle</strong>, and Accounts Receivable is overstated in the meantime because it includes amounts the company already suspects are worthless.</p>
<p><strong>Allowance method.</strong> <em>Estimate</em> the uncollectible amount at the end of each period and record it immediately: debit Bad Debt Expense, credit <strong>Allowance for Doubtful Accounts</strong> (a <strong>contra-asset</strong> account deducted from Accounts Receivable on the balance sheet). When specific accounts later prove worthless, write them off against the allowance: debit Allowance for Doubtful Accounts, credit Accounts Receivable — no expense is recorded at write-off time, because the expense was already recognized in the estimate.</p>
<p><strong>GAAP requires the allowance method</strong> for financial reporting for two reasons. First, the <strong>matching principle</strong>: bad debt expense belongs in the same period as the credit sales that generated it, which only the estimate accomplishes. Second, receivables must be reported at <strong>net realizable value</strong> — the cash amount the company realistically expects to collect — and only the allowance method reduces the receivable to that amount before year-end.</p>
<div class="callout"><strong>Key idea:</strong> Under the allowance method there are <em>two</em> separate events: (1) the year-end <strong>estimate</strong> (debit Bad Debt Expense, credit Allowance), and (2) the later <strong>write-off</strong> of a specific account (debit Allowance, credit Accounts Receivable). The write-off does not touch the income statement — it merely moves an amount from the allowance to the receivable.</div>
<div class="mistake"><strong>Common mistake:</strong> Debiting Bad Debt Expense when writing off a specific account. Under the allowance method, the write-off entry is <strong>Allowance for Doubtful Accounts (debit) / Accounts Receivable (credit)</strong>. Bad Debt Expense is debited only for the year-end estimate.</div>`
    },
    {
      heading: "Estimating Uncollectibles: Percent-of-Sales Method (Worked)",
      html: `<p>The <strong>percent-of-sales method</strong> (also called the income-statement approach) estimates bad debt expense as a percentage of <strong>credit sales</strong> for the period, based on the company's collection history. Management picks a rate — say 2% — from past experience or industry data, and the existing balance in the Allowance account is <em>ignored</em>: the computed amount is simply added to whatever is already there.</p>
<p><strong>Worked example.</strong> Canyon Supply had credit sales of $850,000 this year. Based on five years of history, about 2% of credit sales prove uncollectible. Estimated bad debts = $850,000 × 2% = <strong>$17,000</strong>. The year-end adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Bad Debt Expense</td><td class="num">17,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">17,000</td></tr>
</tbody></table>
<p>Suppose the Allowance account already had a $2,400 credit balance before this entry; it now has a $19,400 credit balance. If Accounts Receivable is $210,000, the balance sheet reports:</p>
<table class="taccount">
<thead><tr><th colspan="2">Accounts Receivable (partial balance sheet presentation)</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accounts receivable, gross: $210,000</td><td></td></tr>
<tr><td></td><td>Less: Allowance for doubtful accounts: ($19,400)</td></tr>
<tr><td><strong>Net realizable value: $190,600</strong></td><td></td></tr>
</tbody></table>
<div class="formula">Bad Debt Expense (percent-of-sales) = Credit sales × Estimated uncollectible rate</div>
<p>The percent-of-sales method emphasizes getting the <em>expense</em> right (matching). Its weakness: it never checks whether the resulting Allowance balance is sensible — an unusually large existing allowance could make the balance-sheet figure unrealistic. That is why many companies use the aging method instead, or use both.</p>`
    },
    {
      heading: "Estimating Uncollectibles: Aging-of-Receivables Method (Worked)",
      html: `<p>The <strong>aging-of-receivables method</strong> (the balance-sheet approach) estimates uncollectibles by classifying each customer's balance by how long it has been outstanding — the <strong>aging schedule</strong> — and applying a higher loss percentage to older, riskier balances. The total is the <strong>desired ending balance</strong> in the Allowance account, so unlike the percent-of-sales method, the existing allowance balance <em>does</em> matter: the adjusting entry brings the allowance <em>up (or down) to</em> the desired balance.</p>
<p><strong>Worked example.</strong> At December 31, Mesa Outfitters prepares this aging schedule:</p>
<table class="jentry">
<thead><tr><th>Age Category</th><th>Balance</th><th>Est. % Uncollectible</th><th>Estimated Amount</th></tr></thead>
<tbody>
<tr><td>Not yet due</td><td class="num">180,000</td><td class="num">1%</td><td class="num">1,800</td></tr>
<tr><td>1–30 days past due</td><td class="num">60,000</td><td class="num">3%</td><td class="num">1,800</td></tr>
<tr><td>31–60 days past due</td><td class="num">28,000</td><td class="num">8%</td><td class="num">2,240</td></tr>
<tr><td>61–90 days past due</td><td class="num">15,000</td><td class="num">15%</td><td class="num">2,250</td></tr>
<tr><td>Over 90 days past due</td><td class="num">9,000</td><td class="num">40%</td><td class="num">3,600</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>292,000</strong></td><td></td><td class="num"><strong>11,690</strong></td></tr>
</tbody></table>
<p>Check the math: 180,000 × 1% = 1,800; 60,000 × 3% = 1,800; 28,000 × 8% = 2,240; 15,000 × 15% = 2,250; 9,000 × 40% = 3,600. Sum: 1,800 + 1,800 + 2,240 + 2,250 + 3,600 = <strong>$11,690</strong> desired allowance balance.</p>
<p>The Allowance account currently has a $2,100 <em>credit</em> balance. The adjustment needed = desired balance − existing balance = 11,690 − 2,100 = <strong>$9,590</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Bad Debt Expense</td><td class="num">9,590</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">9,590</td></tr>
</tbody></table>
<p>After posting, the Allowance has the desired $11,690 credit balance (2,100 + 9,590). Net realizable value of receivables = 292,000 − 11,690 = <strong>$280,310</strong>.</p>
<div class="callout"><strong>Key idea:</strong> Percent-of-sales computes the <em>expense</em> (ignore the existing allowance). Aging computes the <em>ending allowance balance</em> (adjust the existing allowance to reach it). If the existing allowance had a <em>debit</em> balance, you would <em>add</em> it: desired balance + debit balance = adjustment.</div>`
    },
    {
      heading: "Writing Off and Recovering Accounts",
      html: `<p>Continuing the Mesa Outfitters example: in February, customer J. Hart's $2,400 balance is judged uncollectible and written off. The entry removes the specific receivable and reduces the allowance — <em>no expense</em> is recorded:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Feb 14</td><td>Allowance for Doubtful Accounts</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Receivable (J. Hart)</td><td class="num"></td><td class="num">2,400</td></tr>
</tbody></table>
<p>Notice what happens to net realizable value: before the write-off, receivables were $292,000 with an $11,690 allowance (net $280,310). After the write-off, both drop by $2,400 — $289,600 and $9,290 — and the net is still <strong>$280,310</strong>. A write-off under the allowance method never changes net realizable value.</p>
<p><strong>Recovery.</strong> In May, J. Hart unexpectedly pays the full $2,400. The company must first <em>reinstate</em> the account (reversing the write-off), then record the cash collection — two entries:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>May 3</td><td>Accounts Receivable (J. Hart)</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">2,400</td></tr>
<tr><td>May 3</td><td>Cash</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Receivable (J. Hart)</td><td class="num"></td><td class="num">2,400</td></tr>
</tbody></table>
<p>The two-step recovery keeps the customer's payment history accurate and restores the allowance, which now correctly reflects the improved collectibility.</p>`
    },
    {
      heading: "Notes Receivable and Interest (Worked)",
      html: `<p>A <strong>promissory note</strong> names the <strong>maker</strong> (borrower), the <strong>payee</strong> (lender), the <strong>principal</strong> (face amount), the <strong>interest rate</strong>, and the <strong>maturity date</strong>. Interest is the price of using someone else's money, computed with the simple formula:</p>
<div class="formula">Interest = Principal × Rate × Time (P × R × T)<br>Time is expressed in <em>years</em> (or a fraction of a year, e.g., 90/360 days)</div>
<p>By convention, most notes use a <strong>360-day year</strong> for the time fraction.</p>
<p><strong>Worked example.</strong> On November 1, Canyon Supply accepts a $12,000, 90-day, 8% note from a customer in exchange for merchandise sold. First, record the note:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Nov 1</td><td>Notes Receivable</td><td class="num">12,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Sales Revenue</td><td class="num"></td><td class="num">12,000</td></tr>
</tbody></table>
<p><strong>Interest at maturity:</strong> I = 12,000 × 8% × 90/360 = 12,000 × 0.08 × 0.25 = <strong>$240</strong>. The <strong>maturity value</strong> (what the customer pays) = 12,000 + 240 = <strong>$12,240</strong>.</p>
<p><strong>Year-end accrual.</strong> Canyon's fiscal year ends December 31, when 60 of the 90 days have passed. Accrued interest = 12,000 × 8% × 60/360 = <strong>$160</strong> (960 × 60/360 = 160):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Interest Receivable</td><td class="num">160</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Interest Revenue</td><td class="num"></td><td class="num">160</td></tr>
</tbody></table>
<p><strong>Collection at maturity</strong> (January 30): the remaining 30 days of interest = 12,000 × 8% × 30/360 = <strong>$80</strong> (160 + 80 = 240 total — it ties out):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 30</td><td>Cash</td><td class="num">12,240</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Notes Receivable</td><td class="num"></td><td class="num">12,000</td></tr>
<tr><td></td><td class="indent">Interest Receivable</td><td class="num"></td><td class="num">160</td></tr>
<tr><td></td><td class="indent">Interest Revenue</td><td class="num"></td><td class="num">80</td></tr>
</tbody></table>
<p>Check: debits 12,240 = credits 12,000 + 160 + 80 = 12,240. If a note is <strong>dishonored</strong> (not paid at maturity), the company transfers the maturity value — principal plus all interest — to Accounts Receivable and keeps trying to collect.</p>`
    },
    {
      heading: "Analyzing Receivables: Turnover Ratios (Worked)",
      html: `<p>Two ratios reveal how well a company manages its receivables:</p>
<div class="formula">Accounts Receivable Turnover = Net Credit Sales ÷ Average Accounts Receivable<br>Days' Sales in Receivables = 365 ÷ Accounts Receivable Turnover</div>
<p><strong>Accounts receivable turnover</strong> measures how many times per year the company collects its average receivable — higher is generally better, since cash comes in faster. <strong>Days' sales in receivables</strong> (the average collection period) translates that into days: roughly how long a dollar of sales sits uncollected.</p>
<p><strong>Worked example.</strong> Harbor Marine Supply reports net credit sales of $980,000, beginning accounts receivable of $86,000, and ending accounts receivable of $104,000.</p>
<p>Step 1 — Average receivables = (86,000 + 104,000) ÷ 2 = <strong>$95,000</strong>.<br>
Step 2 — Turnover = 980,000 ÷ 95,000 = <strong>10.32 times</strong>.<br>
Step 3 — Days' sales in receivables = 365 ÷ 10.32 = <strong>35.4 days</strong> (about 35 days).</p>
<p>Interpretation: Harbor collects its receivables about 10 times a year, waiting roughly 35 days per sale. If its credit terms are net 30, a 35-day collection period is slightly slow — a nudge to tighten credit policy or collections. If competitors average 45 days, Harbor is actually outperforming them. Ratios mean little in isolation; compare against the company's own terms, its history, and its industry.</p>
<div class="callout"><strong>Module recap:</strong> Receivables are reported at net realizable value using the <strong>allowance method</strong>, which GAAP requires for matching. Estimate uncollectibles with <strong>percent-of-sales</strong> (computes the expense; ignore the existing allowance) or <strong>aging-of-receivables</strong> (computes the desired allowance balance; adjust to reach it). Write off specific accounts against the allowance (no expense), reinstate on recovery, account for notes with <strong>P × R × T</strong>, and watch <strong>receivables turnover</strong> to judge collection efficiency.</div>`
    }
  ],
  keyTerms: [
    { term: "Receivables", def: "Amounts owed to a company by customers and others, arising when goods or services are delivered before cash is collected." },
    { term: "Accounts receivable", def: "Amounts customers owe on open account for goods or services sold in the normal course of business; usually due within 30–60 days with no written promise or interest." },
    { term: "Notes receivable", def: "Amounts owed that are supported by a formal written promissory note specifying principal, interest rate, and maturity date." },
    { term: "Promissory note", def: "A written promise in which the maker agrees to pay a definite sum (principal), usually with interest, to the payee on a definite maturity date." },
    { term: "Net realizable value", def: "The amount of receivables a company realistically expects to collect in cash: gross receivables minus the allowance for doubtful accounts." },
    { term: "Allowance method", def: "The GAAP-required method of accounting for uncollectibles: estimate bad debts each period (debit Bad Debt Expense, credit Allowance for Doubtful Accounts) and later write off specific accounts against the allowance." },
    { term: "Direct write-off method", def: "Recording bad debt expense only when a specific account is judged uncollectible; violates the matching principle and is not permitted under GAAP for financial reporting." },
    { term: "Allowance for Doubtful Accounts", def: "A contra-asset account deducted from Accounts Receivable on the balance sheet, representing the estimated portion of receivables that will not be collected." },
    { term: "Percent-of-sales method", def: "An income-statement approach to estimating uncollectibles: Bad Debt Expense = credit sales × estimated uncollectible rate; the existing allowance balance is ignored." },
    { term: "Aging-of-receivables method", def: "A balance-sheet approach to estimating uncollectibles: receivables are grouped by age, a loss rate is applied to each group, and the total is the desired ending allowance balance; the adjusting entry brings the allowance to that balance." },
    { term: "Aging schedule", def: "A schedule classifying each customer's receivable balance by the length of time it has been outstanding (not yet due, 1–30 days past due, etc.)." },
    { term: "Write-off", def: "Removing a specific uncollectible account from the books: debit Allowance for Doubtful Accounts, credit Accounts Receivable; under the allowance method it does not affect expense or net realizable value." },
    { term: "Recovery", def: "Collection of an account previously written off; recorded in two steps: reinstate the receivable (reverse the write-off), then record the cash collection." },
    { term: "Interest (P × R × T)", def: "The cost of borrowing, computed as Principal × annual interest Rate × Time in years (or fraction of a year, typically over 360 days)." },
    { term: "Maturity value", def: "The total amount due on a note at maturity: principal plus all accrued interest." },
    { term: "Dishonored note", def: "A note not paid at maturity; the maker has defaulted, so the payee transfers the maturity value (principal plus interest) to Accounts Receivable." },
    { term: "Accounts receivable turnover", def: "Net credit sales divided by average accounts receivable; measures how many times per year receivables are collected — higher generally means faster collection." },
    { term: "Days' sales in receivables", def: "365 divided by accounts receivable turnover; the average number of days a dollar of credit sales remains uncollected (the average collection period)." }
  ],
  video: {
    title: "Complete Financial Accounting Course — receivables chapters",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_",
    note: "Watch the chapters on receivables: the allowance method vs. direct write-off, both estimation methods (percent-of-sales and aging), notes receivable, and computing interest — with step-by-step numeric examples.",
    more: [
      { title: "Accounting Stuff channel — bite-size topic refreshers", url: "https://www.youtube.com/@AccountingStuff" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>Problem 1 (multiple choice).</strong> Why does GAAP require the allowance method rather than the direct write-off method for uncollectible accounts?</p><ol type="a"><li>The direct write-off method is too difficult to apply in practice.</li><li>The allowance method matches bad debt expense to the period of the related sales and reports receivables at net realizable value.</li><li>The allowance method always produces a lower bad debt expense.</li><li>The direct write-off method is only allowed for service companies.</li></ol>`,
      solution: `<p><strong>Answer: (b).</strong></p><p>Step 1 — Recall the two GAAP justifications: the matching principle (expense in the same period as the credit sale) and balance-sheet valuation at net realizable value. Step 2 — The direct write-off method records the expense in a later period than the sale and leaves worthless amounts in receivables, violating both. Step 3 — (a) is wrong: direct write-off is actually simpler. Step 4 — (c) is wrong: the allowance method does not systematically lower expense; it changes its timing. Step 5 — (d) is wrong: the restriction has nothing to do with company type. Therefore (b) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 2 (computational).</strong> Beacon Hardware had credit sales of $620,000 this year and estimates that 1.5% will prove uncollectible. Using the percent-of-sales method, (a) compute bad debt expense and (b) prepare the year-end adjusting entry.</p>`,
      solution: `<p><strong>Answer: (a) $9,300. (b) Entry below.</strong></p><p>Step 1 — Bad Debt Expense = credit sales × rate = 620,000 × 1.5% = <strong>$9,300</strong>. Step 2 — Under percent-of-sales, the existing Allowance balance is ignored; the computed amount is simply added to it:</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Dec 31</td><td>Bad Debt Expense</td><td class="num">9,300</td><td class="num"></td></tr><tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">9,300</td></tr></tbody></table><p>Step 3 — If the Allowance had a $1,100 credit balance before the entry, it now has a $10,400 credit balance (1,100 + 9,300).</p>`
    },
    {
      prompt: `<p><strong>Problem 3 (computational).</strong> At December 31, Larkspur Co. prepares this aging schedule: Not yet due $140,000 (2%); 1–30 days past due $45,000 (5%); 31–60 days past due $18,000 (12%); 61–90 days past due $9,000 (25%); over 90 days past due $6,000 (50%). The Allowance for Doubtful Accounts currently has a $1,700 credit balance. (a) Compute the desired ending allowance balance. (b) Compute the adjusting entry amount and prepare the entry.</p>`,
      solution: `<p><strong>Answer: (a) $12,460. (b) $10,760 adjustment.</strong></p><p>Step 1 — Apply each rate: 140,000 × 2% = 2,800; 45,000 × 5% = 2,250; 18,000 × 12% = 2,160; 9,000 × 25% = 2,250; 6,000 × 50% = 3,000. Step 2 — Sum: 2,800 + 2,250 + 2,160 + 2,250 + 3,000 = <strong>$12,460</strong> desired ending balance. Step 3 — Adjustment = desired − existing credit balance = 12,460 − 1,700 = <strong>$10,760</strong>:</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Dec 31</td><td>Bad Debt Expense</td><td class="num">10,760</td><td class="num"></td></tr><tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">10,760</td></tr></tbody></table><p>Step 4 — Verify: 1,700 + 10,760 = 12,460, the desired balance. Net realizable value = total receivables (218,000) − 12,460 = $205,540.</p>`
    },
    {
      prompt: `<p><strong>Problem 4 (journal entries).</strong> On March 10, Beacon Hardware writes off customer D. Voss's $3,100 account as uncollectible. On June 22, Voss unexpectedly pays the full amount. Prepare (a) the write-off entry and (b) the two recovery entries.</p>`,
      solution: `<p><strong>Entries:</strong></p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Mar 10</td><td>Allowance for Doubtful Accounts</td><td class="num">3,100</td><td class="num"></td></tr><tr><td></td><td class="indent">Accounts Receivable (D. Voss)</td><td class="num"></td><td class="num">3,100</td></tr><tr><td>Jun 22</td><td>Accounts Receivable (D. Voss)</td><td class="num">3,100</td><td class="num"></td></tr><tr><td></td><td class="indent">Allowance for Doubtful Accounts</td><td class="num"></td><td class="num">3,100</td></tr><tr><td>Jun 22</td><td>Cash</td><td class="num">3,100</td><td class="num"></td></tr><tr><td></td><td class="indent">Accounts Receivable (D. Voss)</td><td class="num"></td><td class="num">3,100</td></tr></tbody></table><p>Step 1 — The write-off debits the Allowance (not Bad Debt Expense — the expense was recognized in the year-end estimate) and credits the receivable. Step 2 — The recovery first reinstates the account (reversing the write-off) so the customer's payment history is accurate, then records the cash collection. Step 3 — Note the write-off leaves net realizable value unchanged: both gross receivables and the allowance fall by $3,100.</p>`
    },
    {
      prompt: `<p><strong>Problem 5 (multiple choice).</strong> Under the allowance method, writing off a specific uncollectible account:</p><ol type="a"><li>Increases Bad Debt Expense and decreases net income.</li><li>Decreases both Accounts Receivable and the Allowance by the same amount, leaving net realizable value unchanged.</li><li>Decreases net realizable value of receivables by the write-off amount.</li><li>Has no effect on any account until the account is recovered.</li></ol>`,
      solution: `<p><strong>Answer: (b).</strong></p><p>Step 1 — The write-off entry is debit Allowance for Doubtful Accounts, credit Accounts Receivable — gross receivables and the contra-asset both fall by the same amount. Step 2 — Net realizable value = gross − allowance, so subtracting the same number from both leaves it unchanged. Step 3 — (a) is wrong because Bad Debt Expense is debited only for the year-end estimate, never for a write-off. Step 4 — (c) contradicts the arithmetic in step 2. Step 5 — (d) is wrong because the write-off immediately removes the receivable and reduces the allowance. Therefore (b) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 6 (computational).</strong> On September 1, Crestline Co. lends $20,000 cash to a supplier in exchange for a 120-day, 9% promissory note. (a) Compute the interest at maturity and the maturity value. (b) Prepare the entries on September 1 (issuance) and at maturity (December 30).</p>`,
      solution: `<p><strong>Answer: (a) Interest $600; maturity value $20,600. (b) Entries below.</strong></p><p>Step 1 — Interest = P × R × T = 20,000 × 9% × 120/360 = 20,000 × 0.09 × (1/3) = <strong>$600</strong>. Step 2 — Maturity value = 20,000 + 600 = <strong>$20,600</strong>. Step 3 — September 1 issuance:</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Sep 1</td><td>Notes Receivable</td><td class="num">20,000</td><td class="num"></td></tr><tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">20,000</td></tr><tr><td>Dec 30</td><td>Cash</td><td class="num">20,600</td><td class="num"></td></tr><tr><td></td><td class="indent">Notes Receivable</td><td class="num"></td><td class="num">20,000</td></tr><tr><td></td><td class="indent">Interest Revenue</td><td class="num"></td><td class="num">600</td></tr></tbody></table><p>Step 4 — At maturity the company collects principal plus interest; check: 20,000 + 600 = 20,600 credited total, matching the cash debit.</p>`
    },
    {
      prompt: `<p><strong>Problem 7 (multiple choice).</strong> A $5,000, 60-day, 6% note receivable is dishonored at maturity. The payee should:</p><ol type="a"><li>Debit Cash and credit Notes Receivable for $5,000.</li><li>Debit Accounts Receivable for the maturity value ($5,050) and credit Notes Receivable for $5,000 and Interest Revenue for $50.</li><li>Write off the $5,000 as Bad Debt Expense immediately.</li><li>Do nothing; the note remains outstanding indefinitely.</li></ol>`,
      solution: `<p><strong>Answer: (b).</strong></p><p>Step 1 — Dishonor means the maker failed to pay; the payee still has a claim, so the amount is transferred to Accounts Receivable. Step 2 — The claim is the maturity value: interest = 5,000 × 6% × 60/360 = $50, so maturity value = 5,050. Step 3 — Entry: debit Accounts Receivable 5,050; credit Notes Receivable 5,000 (remove the note) and credit Interest Revenue 50 (the interest earned). Step 4 — (a) is wrong because no cash was received. Step 5 — (c) is wrong because the amount is not yet judged uncollectible; collection efforts continue. Step 6 — (d) is wrong because the note no longer exists as a note — it must be reclassified. Therefore (b) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 8 (computational).</strong> Summit Distributors reports net credit sales of $1,200,000, beginning accounts receivable of $130,000, and ending accounts receivable of $170,000. Compute (a) accounts receivable turnover and (b) days' sales in receivables (round to one decimal place).</p>`,
      solution: `<p><strong>Answer: (a) 8.0 times. (b) 45.6 days.</strong></p><p>Step 1 — Average receivables = (130,000 + 170,000) ÷ 2 = <strong>$150,000</strong>. Step 2 — Turnover = net credit sales ÷ average receivables = 1,200,000 ÷ 150,000 = <strong>8.0 times</strong>. Step 3 — Days' sales in receivables = 365 ÷ 8.0 = <strong>45.6 days</strong>. Step 4 — Interpretation: Summit collects its receivables about 8 times per year, with the average sale outstanding roughly 46 days — reasonable if its terms are net 45, slow if its terms are net 30.</p>`
    },
    {
      prompt: `<p><strong>Problem 9 (multiple choice).</strong> When using the percent-of-sales method to estimate uncollectibles, the existing balance in Allowance for Doubtful Accounts is:</p><ol type="a"><li>Subtracted from the computed bad debt expense.</li><li>Added to the computed bad debt expense.</li><li>Ignored; the computed amount is simply added to the allowance.</li><li>Reported as a separate line item on the income statement.</li></ol>`,
      solution: `<p><strong>Answer: (c).</strong></p><p>Step 1 — Percent-of-sales is an income-statement approach: it computes the period's Bad Debt Expense directly (credit sales × rate), so the existing allowance balance plays no role in the calculation. Step 2 — The adjusting entry simply credits the Allowance for the computed amount, whatever balance it already has. Step 3 — (a) and (b) describe the logic of the aging method (adjust to a desired balance), not percent-of-sales. Step 4 — (d) is wrong because the allowance is a balance-sheet contra-asset, never an income-statement line. Therefore (c) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 10 (journal entry).</strong> On December 1, Larkspur Co. accepts a $15,000, 90-day, 8% note from a customer for an overdue account. Larkspur's fiscal year ends December 31. Prepare the December 31 adjusting entry for accrued interest.</p>`,
      solution: `<p><strong>Entry:</strong></p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Dec 31</td><td>Interest Receivable</td><td class="num">100</td><td class="num"></td></tr><tr><td></td><td class="indent">Interest Revenue</td><td class="num"></td><td class="num">100</td></tr></tbody></table><p>Step 1 — Days elapsed by year-end: December 1 to December 31 = 30 days. Step 2 — Accrued interest = P × R × T = 15,000 × 8% × 30/360 = 15,000 × 0.08 × (1/12) = <strong>$100</strong>. Step 3 — This is an accrued revenue: the company has earned 30 days of interest but will not collect it until the note matures, so debit Interest Receivable and credit Interest Revenue $100. (The remaining 60 days of interest, $200, will be recognized when the note matures.)</p>`
    }
  ],
  quiz: [
    {
      q: "Which statement best explains why GAAP requires the allowance method?",
      choices: [
        "It is simpler to apply than the direct write-off method.",
        "It matches bad debt expense to the period of the related credit sales and reports receivables at net realizable value.",
        "It guarantees that every receivable will eventually be collected.",
        "It eliminates the need for an aging schedule."
      ],
      answer: 1,
      explanation: "Correct: (b). The allowance method satisfies the matching principle (expense estimated in the sale period) and the net-realizable-value valuation of receivables. (a) is wrong because direct write-off is actually simpler; GAAP chooses the allowance method despite its complexity. (c) is wrong because no method guarantees collection — the allowance is an estimate, not a guarantee. (d) is wrong because aging schedules are often used with the allowance method."
    },
    {
      q: "A company has $400,000 of credit sales and estimates 2% will be uncollectible. Under the percent-of-sales method, Bad Debt Expense is:",
      choices: [
        "$8,000, and the existing Allowance balance is ignored.",
        "$8,000 minus the existing Allowance credit balance.",
        "$8,000 plus the existing Allowance debit balance.",
        "$4,000, because only half the sales are at risk."
      ],
      answer: 0,
      explanation: "Correct: (a). 400,000 × 2% = $8,000, and under percent-of-sales the existing allowance balance is ignored — the $8,000 is simply added to it. (b) and (c) are wrong because they apply aging-method logic (adjusting to a desired balance), which percent-of-sales never uses. (d) is wrong because the 2% estimate already reflects the expected loss on the full $400,000 of credit sales."
    },
    {
      q: "An aging schedule produces a desired allowance balance of $22,000. The Allowance account currently has a $3,000 credit balance. The adjusting entry debits Bad Debt Expense for:",
      choices: [
        "$22,000",
        "$25,000",
        "$19,000",
        "$3,000"
      ],
      answer: 2,
      explanation: "Correct: (c). Under the aging method the adjustment brings the allowance to the desired balance: 22,000 − 3,000 existing credit = $19,000. (a) is wrong because $22,000 is the target balance, not the adjustment — recording it would double-count the existing $3,000. (b) is wrong because adding the existing credit balance overstates the entry. (d) is wrong because $3,000 is the balance already on the books, not the needed change."
    },
    {
      q: "On August 5, a company writes off a $1,800 account deemed uncollectible. The correct entry is:",
      choices: [
        "Debit Bad Debt Expense $1,800; credit Accounts Receivable $1,800.",
        "Debit Allowance for Doubtful Accounts $1,800; credit Accounts Receivable $1,800.",
        "Debit Accounts Receivable $1,800; credit Allowance for Doubtful Accounts $1,800.",
        "Debit Cash $1,800; credit Bad Debt Expense $1,800."
      ],
      answer: 1,
      explanation: "Correct: (b). Under the allowance method the write-off removes the specific receivable against the allowance; the expense was already recognized in the year-end estimate. (a) is wrong because debiting Bad Debt Expense at write-off time records the expense twice. (c) is wrong because it is the recovery-reinstatement entry, not the write-off. (d) is wrong because no cash is involved and Bad Debt Expense is not reversed."
    },
    {
      q: "A customer whose $900 account was written off last year now pays in full. The company should:",
      choices: [
        "Debit Cash $900 and credit Bad Debt Expense $900.",
        "Debit Cash $900 and credit Allowance for Doubtful Accounts $900.",
        "First reinstate the receivable (debit Accounts Receivable, credit Allowance), then record the cash collection.",
        "Do nothing, since the account was already written off."
      ],
      answer: 2,
      explanation: "Correct: (c). GAAP practice is a two-step recovery: reinstate the account by reversing the write-off, then debit Cash and credit Accounts Receivable for the collection. (a) is wrong because Bad Debt Expense is never credited on recovery — the expense estimate stands. (b) is wrong because it skips reinstating the customer's account, leaving the payment history inaccurate. (d) is wrong because the cash receipt must be recorded."
    },
    {
      q: "A $10,000, 90-day, 12% note is issued on March 1. Interest at maturity is:",
      choices: [
        "$1,200",
        "$300",
        "$100",
        "$10,300"
      ],
      answer: 1,
      explanation: "Correct: (b). Interest = 10,000 × 12% × 90/360 = 10,000 × 0.12 × 0.25 = $300. (a) is wrong because it uses a full year of time (10,000 × 12%) instead of 90 days. (c) is wrong because it appears to use 30 days rather than 90. (d) is wrong because $10,300 is the maturity value (principal + interest), not the interest alone."
    },
    {
      q: "Net credit sales are $600,000, beginning accounts receivable $55,000, and ending accounts receivable $65,000. Days' sales in receivables is approximately:",
      choices: [
        "36.5 days",
        "39.7 days",
        "60.8 days",
        "10.0 days"
      ],
      answer: 0,
      explanation: "Correct: (a). Average receivables = (55,000 + 65,000) ÷ 2 = $60,000; turnover = 600,000 ÷ 60,000 = 10.0 times; days = 365 ÷ 10 = 36.5 days. (b) is wrong because it results from using ending receivables ($65,000) instead of the average. (c) is wrong because it uses only beginning receivables in a misarranged computation. (d) is wrong because 10.0 is the turnover in times per year, not the collection period in days."
    },
    {
      q: "Which of the following is classified as a note receivable rather than an account receivable?",
      choices: [
        "A customer's $2,000 balance on open account due in 30 days.",
        "A $2,000 balance supported by a signed 60-day, 8% promissory note.",
        "An employee's $2,000 travel advance to be settled next week.",
        "A $2,000 income tax refund due from the government."
      ],
      answer: 1,
      explanation: "Correct: (b). A note receivable requires a formal written promissory note specifying principal, rate, and maturity — exactly what (b) describes. (a) is wrong because an open-account balance with no written promise is an account receivable. (c) is wrong because a travel advance is an 'other receivable,' not a note. (d) is wrong because a tax refund is also an other receivable, with no promissory note involved."
    }
  ],
  studyGuide: `<h3>Module 8 Study Guide — Receivables</h3>
<h3>Receivable types</h3>
<ul><li><strong>Accounts receivable:</strong> open-account trade balances, 30–60 days, no interest, no written promise.</li><li><strong>Notes receivable:</strong> formal promissory note — maker, payee, principal, rate, maturity date.</li><li><strong>Other receivables:</strong> interest, tax refunds, employee advances — reported separately.</li></ul>
<h3>Allowance method (GAAP-required)</h3>
<ul><li><strong>Estimate</strong> (year-end): Dr Bad Debt Expense, Cr Allowance for Doubtful Accounts.</li><li><strong>Write-off</strong> (specific account): Dr Allowance, Cr Accounts Receivable — <em>no expense</em>, net realizable value unchanged.</li><li><strong>Recovery:</strong> (1) reinstate (reverse write-off), (2) record cash collection.</li><li>Direct write-off violates matching — not allowed for financial reporting.</li></ul>
<h3>Two estimation methods</h3>
<ul><li><strong>Percent-of-sales:</strong> Expense = credit sales × rate. <em>Ignore</em> the existing allowance balance.</li><li><strong>Aging-of-receivables:</strong> group balances by age, apply rates, sum = <em>desired ending allowance</em>. Adjustment = desired − existing credit balance (add if the existing balance is a debit).</li></ul>
<h3>Notes and interest</h3>
<ul><li><strong>I = P × R × T</strong> (time in years; use 360-day year: days/360).</li><li><strong>Maturity value</strong> = principal + total interest.</li><li>Crossing year-end: accrue (Dr Interest Receivable, Cr Interest Revenue); at maturity, split revenue between accrued and current-period portions.</li><li><strong>Dishonored note:</strong> transfer maturity value to Accounts Receivable.</li></ul>
<h3>Ratios</h3>
<ul><li><strong>AR turnover</strong> = net credit sales ÷ average AR (higher = faster collection).</li><li><strong>Days' sales in receivables</strong> = 365 ÷ turnover (compare to credit terms and industry).</li></ul>`
};
