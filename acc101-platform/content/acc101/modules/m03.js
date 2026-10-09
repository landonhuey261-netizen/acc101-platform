// ACC 101 - Module 3: Adjusting Entries
module.exports = {
  number: 3,
  slug: "adjusting-entries",
  title: "Adjusting Entries",
  estTime: "3–4 hours",
  objectives: [
    "Contrast the cash basis and the accrual basis of accounting and explain why GAAP requires accrual.",
    "Apply the revenue recognition principle, the matching (expense recognition) principle, and the time-period assumption.",
    "Classify adjustments as deferrals or accruals and identify which type a situation requires.",
    "Record adjusting entries for prepaid expenses and unearned revenues with correct computations.",
    "Record adjusting entries for accrued expenses and accrued revenues with correct computations.",
    "Explain depreciation as a cost-allocation process and prepare the adjusted trial balance."
  ],
  sections: [
    {
      heading: "Cash Basis vs. Accrual Basis",
      html: `
<p>So far, every transaction we recorded involved an exchange you could point to: cash paid, a bill received, a service performed. But real business life is messier. Insurance bought in December protects January too. Employees work the last three days of December but get paid in January. A customer pays in November for services you will deliver all next year. If we recorded only cash movements, December's statements would be fiction.</p>
<p>Under the <strong>cash basis</strong> of accounting, revenues are recorded when cash is <em>received</em> and expenses when cash is <em>paid</em>. It is simple — and it is what a household budget does. But it can wildly misstate performance: a company that collects a year's fees in advance looks spectacularly profitable in the collection month and broke for the next eleven, even though nothing about its real operations changed.</p>
<p>Under the <strong>accrual basis</strong>, revenues are recorded when <em>earned</em> and expenses when <em>incurred</em> — regardless of when cash moves. The landscaping company that finishes a job on December 28 records December revenue even if the customer pays January 15. The salaries its crew earned December 29–31 are December expenses even though payday is January 5. <strong>GAAP requires the accrual basis</strong> for published financial statements because it measures what actually happened in the period, not merely when cash happened to move.</p>
<div class="callout"><strong>Key idea:</strong> Cash basis answers "when did cash move?" Accrual basis answers "when did the economic event happen?" Investors need the second answer, because a company's performance in December is about December's work — not about which invoices cleared the bank that month.</div>
<p>Accrual accounting only works if we agree on <em>when</em> to record things. Three principles provide the rules, and the rest of this module is their application:</p>
<ul>
<li><strong>Time-period assumption:</strong> a company's endless life is sliced into artificial periods (months, quarters, years) so performance can be measured and reported regularly.</li>
<li><strong>Revenue recognition principle:</strong> record revenue when it is <em>earned</em> — when the company has substantially completed what it promised the customer — not when cash is received.</li>
<li><strong>Matching (expense recognition) principle:</strong> record expenses in the same period as the revenues they helped generate. The delivery truck's fuel is matched against this month's delivery revenue; the truck itself is matched gradually over its useful life.</li>
</ul>
<p>Because cash and economic events rarely coincide, the books at period-end are almost always <em>wrong</em> under these principles — some revenues earned but not recorded, some expenses incurred but not recorded, some recorded amounts that belong partly to future periods. <strong>Adjusting entries</strong> fix that: journal entries made at the end of an accounting period to bring revenues and expenses up to date on the accrual basis. They are the bridge between "what the cash records say" and "what accrual GAAP requires."</p>`
    },
    {
      heading: "The Four Types of Adjustments",
      html: `
<p>Every adjusting entry falls into one of four categories, organized by a simple grid: was cash involved <em>before</em> or <em>after</em> the revenue/expense event?</p>
<table class="jentry">
<thead><tr><th>Type</th><th>Cash moves…</th><th>Record now…</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Prepaid expense</strong> (deferral)</td><td>Before</td><td>An asset now; expense later</td><td>Paying a year of insurance in advance</td></tr>
<tr><td><strong>Unearned revenue</strong> (deferral)</td><td>Before</td><td>A liability now; revenue later</td><td>Collecting fees before performing the work</td></tr>
<tr><td><strong>Accrued expense</strong> (accrual)</td><td>After</td><td>Expense and liability now; cash later</td><td>Wages earned by employees but not yet paid</td></tr>
<tr><td><strong>Accrued revenue</strong> (accrual)</td><td>After</td><td>Revenue and receivable now; cash later</td><td>Services performed but not yet billed</td></tr>
</tbody>
</table>
<p><strong>Deferrals</strong> push recognition into the future: cash already changed hands, so we <em>defer</em> the revenue or expense until it is earned or incurred. Every deferral adjustment moves an amount <em>out of</em> a balance-sheet account (prepaid asset or unearned liability) and <em>into</em> the income statement. <strong>Accruals</strong> pull recognition into the present: the revenue or expense event already happened, so we <em>accrue</em> it now and settle cash later. Every accrual adjustment puts an amount <em>into</em> both the income statement and the balance sheet at once.</p>
<div class="callout"><strong>Key idea:</strong> Two rules cover every adjusting entry you will ever make: (1) <strong>an adjusting entry never involves Cash</strong> — cash already moved (deferrals) or hasn't moved yet (accruals); (2) <strong>every adjusting entry touches one income-statement account and one balance-sheet account</strong> — that is how it updates both performance and position for the period.</div>
<p>The next three sections work through each type with fully computed examples. Notice the pattern in every one: figure out how much belongs to <em>this</em> period, and adjust by the difference.</p>`
    },
    {
      heading: "Deferrals I — Prepaid Expenses",
      html: `
<p>A <strong>prepaid expense</strong> is a cost paid in advance for a future benefit: insurance, rent, office supplies. When paid, it is recorded as an <strong>asset</strong> (because a future benefit exists). As each period passes, the used-up portion becomes an <strong>expense</strong>. The adjusting entry moves that portion from the asset to the expense account.</p>
<p><strong>Worked Example 1 — Prepaid insurance.</strong> On December 1, Summit Designs pays $6,000 cash for a 12-month insurance policy effective immediately. The payment entry (a deferral — cash before expense):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 1</td><td>Prepaid Insurance</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">6,000</td></tr>
</tbody>
</table>
<p>At December 31, one month of the twelve has been used. Computation: $6,000 ÷ 12 months = <strong>$500 per month</strong>; 1 month used = <strong>$500</strong> of insurance expense for December. The adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Insurance Expense</td><td class="num">500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Prepaid Insurance</td><td class="num"></td><td class="num">500</td></tr>
</tbody>
</table>
<p>After posting: Insurance Expense = $500 (December's cost, matched to December), Prepaid Insurance = $5,500 (the remaining 11 months of future benefit, $6,000 − $500). Both statements are now right: the income statement shows what December used, the balance sheet shows what is left.</p>
<p><strong>Worked Example 2 — Supplies.</strong> On October 1, Summit buys $2,800 of office supplies (debit Supplies, credit Cash — recorded as an asset). At December 31, a physical count shows $900 of supplies still on hand. Computation: supplies used = $2,800 − $900 = <strong>$1,900</strong>. The adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Supplies Expense</td><td class="num">1,900</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Supplies</td><td class="num"></td><td class="num">1,900</td></tr>
</tbody>
</table>
<p>Supplies now reports $900 (what is actually on the shelf — verifiable by the count), and Supplies Expense reports $1,900 (what the quarter consumed). Note the method: for supplies we usually compute the <em>ending</em> asset by counting, then expense the difference. For insurance we computed the <em>used</em> portion directly. Either route lands on the same logic: asset = what remains, expense = what was used.</p>
<div class="mistake"><strong>Common mistake:</strong> Adjusting by the full prepaid amount. If you debit Insurance Expense for the whole $6,000 in December, you overstate December's expense by $5,500 and wipe out an asset the company still owns. Always compute the <em>portion belonging to this period</em> — months used, supplies consumed, rent expired — and adjust by that amount only.</div>`
    },
    {
      heading: "Deferrals II — Unearned Revenues",
      html: `
<p><strong>Unearned revenue</strong> is the mirror image: cash received <em>before</em> the work is done — a magazine subscription paid up front, a retainer, a gift card sold. Because the company now <em>owes</em> goods or services, the receipt is recorded as a <strong>liability</strong>. As the company performs, the earned portion moves from the liability to <strong>revenue</strong>.</p>
<p><strong>Worked Example 3 — Unearned service revenue.</strong> On November 1, Summit Designs receives $12,000 cash for a 12-month website maintenance contract, work to be performed evenly over the year. The receipt entry (cash before revenue — a deferral):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Nov 1</td><td>Cash</td><td class="num">12,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Unearned Service Revenue</td><td class="num"></td><td class="num">12,000</td></tr>
</tbody>
</table>
<p>At December 31, two months of service (November and December) have been performed. Computation: $12,000 ÷ 12 months = <strong>$1,000 per month</strong>; 2 months earned = <strong>$2,000</strong> of revenue for the period. The adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Unearned Service Revenue</td><td class="num">2,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Service Revenue</td><td class="num"></td><td class="num">2,000</td></tr>
</tbody>
</table>
<p>After posting: Service Revenue includes $2,000 earned under this contract (revenue recognition: earned, not merely received), and Unearned Service Revenue reports $10,000 ($12,000 − $2,000) — the company's remaining obligation for January through October. If Summit failed to adjust, revenue would be understated by $2,000 and liabilities overstated by $2,000.</p>
<div class="callout"><strong>Key idea:</strong> Deferrals always <em>reduce</em> a balance-sheet account created when cash moved early. Prepaid expense: asset → expense (asset down). Unearned revenue: liability → revenue (liability down). The income-statement account always <em>increases</em> — expense up for prepaid, revenue up for unearned.</div>`
    },
    {
      heading: "Accruals — Accrued Expenses and Accrued Revenues",
      html: `
<p><strong>Accruals</strong> handle the opposite timing: the economic event has happened, but cash has not moved yet and nothing was recorded. Both types of accrual <em>increase</em> the balance-sheet account — a new liability or a new receivable appears.</p>
<p><strong>Worked Example 4 — Accrued salaries (accrued expense).</strong> Summit's employees earn $600 per day and work Monday through Friday. Payday is Friday. At December 31 — a Wednesday — employees have worked 3 days (Monday–Wednesday) that will not be paid until January. Computation: 3 days × $600 = <strong>$1,800</strong> of December salary expense, and a $1,800 obligation at year-end. The adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Salaries Expense</td><td class="num">1,800</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Salaries Payable</td><td class="num"></td><td class="num">1,800</td></tr>
</tbody>
</table>
<p>Matching at work: the $1,800 belongs to December because December received the employees' labor. Without this entry, December expenses would be understated by $1,800 (net income overstated) and liabilities understated by $1,800. When payday arrives in January, the payment entry debits Salaries Payable $1,800 (clearing the liability), debits Salaries Expense for January's 2 days ($1,200), and credits Cash $3,000 — January is charged only for January's work.</p>
<p><strong>Worked Example 5 — Accrued service revenue (accrued revenue).</strong> In late December, Summit completes a $4,500 branding project but will not bill the client until January. The work is done — revenue is earned (revenue recognition) — but nothing was recorded and no cash arrived. The adjusting entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Accounts Receivable</td><td class="num">4,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Service Revenue</td><td class="num"></td><td class="num">4,500</td></tr>
</tbody>
</table>
<p>Both sides of the business grow: an asset (receivable) and revenue each rise $4,500. Without this entry, December revenue and assets would each be understated by $4,500. When the client pays in January, the entry is simply debit Cash $4,500, credit Accounts Receivable $4,500 — <em>no revenue in January</em>, because January did not earn it. Recording revenue again at collection is one of the most common beginner errors; the adjusting entry already captured it.</p>
<p>Accrued interest follows the same pattern and appears constantly in later modules. The formula: <strong>Interest = Principal × Annual Rate × Time (in years)</strong>. Example: on a $20,000, 6% note outstanding for 2 months at year-end, accrued interest = $20,000 × 0.06 × (2/12) = <strong>$200</strong> (debit Interest Expense, credit Interest Payable).</p>
<div class="callout"><strong>Key idea:</strong> Accruals always <em>create</em> a balance-sheet account that did not exist before: accrued expense → new liability (payable); accrued revenue → new asset (receivable). If the adjustment does not add a payable or a receivable, it is not an accrual.</div>`
    },
    {
      heading: "Depreciation and the Adjusted Trial Balance",
      html: `
<p><strong>Depreciation</strong> is the systematic allocation of a long-term asset's cost to expense over its useful life — the matching principle applied to big purchases. When Summit bought a $30,000 server expected to last 5 years, the purchase was not a $30,000 expense (Module 1's lesson). Instead, each year of use consumes $30,000 ÷ 5 = <strong>$6,000</strong> of that cost. The adjusting entry at year-end:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Depreciation Expense</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accumulated Depreciation — Equipment</td><td class="num"></td><td class="num">6,000</td></tr>
</tbody>
</table>
<p>Three things to notice. First, the credit goes not to Equipment directly but to <strong>Accumulated Depreciation</strong>, a <strong>contra-asset</strong> account — an asset account with a <em>credit</em> normal balance that offsets its partner. Keeping the original $30,000 cost visible preserves information; the balance sheet shows Equipment $30,000 less Accumulated Depreciation $6,000 = <strong>book value</strong> $24,000. Second, depreciation here is <em>not</em> about market value falling — it is cost allocation, a matching exercise, even if the server's resale value differs. Third, land is never depreciated (it does not wear out).</p>
<div class="formula">Book Value = Cost − Accumulated Depreciation = $30,000 − $6,000 = $24,000</div>
<p>After all adjusting entries are journalized and posted, the company prepares the <strong>adjusted trial balance</strong> — the same debit-equals-credit listing as Module 2, but now reflecting every accrual adjustment. It proves the ledger still balances <em>after</em> the adjustments and, crucially, it is the direct source for the financial statements: revenue and expense balances flow to the income statement, asset/liability/equity balances to the balance sheet. Here is a condensed adjusted trial balance for Summit Designs at December 31, after the five adjustments in this module (plus its regular December activity):</p>
<table class="jentry">
<thead><tr><th>Summit Designs — Adjusted Trial Balance, December 31</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td class="num">28,000</td><td class="num"></td></tr>
<tr><td>Accounts Receivable</td><td class="num">4,500</td><td class="num"></td></tr>
<tr><td>Supplies</td><td class="num">900</td><td class="num"></td></tr>
<tr><td>Prepaid Insurance</td><td class="num">5,500</td><td class="num"></td></tr>
<tr><td>Equipment</td><td class="num">30,000</td><td class="num"></td></tr>
<tr><td>Accumulated Depreciation — Equipment</td><td class="num"></td><td class="num">6,000</td></tr>
<tr><td>Accounts Payable</td><td class="num"></td><td class="num">7,200</td></tr>
<tr><td>Salaries Payable</td><td class="num"></td><td class="num">1,800</td></tr>
<tr><td>Unearned Service Revenue</td><td class="num"></td><td class="num">10,000</td></tr>
<tr><td>Common Stock</td><td class="num"></td><td class="num">20,000</td></tr>
<tr><td>Service Revenue</td><td class="num"></td><td class="num">38,500</td></tr>
<tr><td>Insurance Expense</td><td class="num">500</td><td class="num"></td></tr>
<tr><td>Supplies Expense</td><td class="num">1,900</td><td class="num"></td></tr>
<tr><td>Depreciation Expense</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td>Salaries Expense</td><td class="num">6,200</td><td class="num"></td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>83,500</strong></td><td class="num"><strong>83,500</strong></td></tr>
</tbody>
</table>
<p>Foot it: debits = 28,000 + 4,500 + 900 + 5,500 + 30,000 + 500 + 1,900 + 6,000 + 6,200 = 83,500; credits = 6,000 + 7,200 + 1,800 + 10,000 + 20,000 + 38,500 = 83,500. Balanced — and every balance now reflects accrual GAAP: Supplies at its counted $900, Prepaid Insurance at 11 months' $5,500, Unearned Revenue at the still-owed $10,000, Salaries Payable capturing the 3 unpaid days, revenue including the $4,500 earned-but-unbilled project. From here, preparing the financial statements is mechanical — that is Module 4's job.</p>
<div class="mistake"><strong>Common mistake:</strong> Including Cash in an adjusting entry. Adjusting entries <em>never</em> touch Cash — by definition, the cash for a deferral already moved (it was recorded when it moved) and the cash for an accrual has not moved yet. If your proposed adjusting entry debits or credits Cash, stop: you are recording a regular transaction, not an adjustment.</div>`
    }
  ],
  keyTerms: [
    { term: "Cash basis", def: "Basis of accounting that records revenues when cash is received and expenses when cash is paid." },
    { term: "Accrual basis", def: "Basis of accounting that records revenues when earned and expenses when incurred, regardless of cash flows; required by GAAP." },
    { term: "Time-period assumption", def: "The assumption that a company's continuous life is divided into artificial time periods (months, quarters, years) for reporting." },
    { term: "Revenue recognition principle", def: "The principle that revenue is recorded when it is earned (the company has substantially completed its obligation), not when cash is received." },
    { term: "Matching (expense recognition) principle", def: "The principle that expenses are recorded in the same period as the revenues they helped generate." },
    { term: "Adjusting entries", def: "Journal entries made at the end of an accounting period to bring revenues and expenses up to date on the accrual basis; they never involve Cash." },
    { term: "Deferral", def: "An adjustment for cash received or paid before the revenue is earned or the expense is incurred; it postpones recognition to a future period." },
    { term: "Prepaid expense", def: "A cost paid in advance for future benefit, recorded as an asset and later adjusted to expense as it is used (e.g., prepaid insurance, supplies)." },
    { term: "Unearned revenue", def: "Cash received before goods or services are provided, recorded as a liability and later adjusted to revenue as it is earned." },
    { term: "Accrual", def: "An adjustment for revenue earned or expenses incurred before cash changes hands; it recognizes the event in the current period." },
    { term: "Accrued expense", def: "An expense incurred but not yet paid or recorded, adjusted by debiting the expense and crediting a payable (e.g., salaries payable, interest payable)." },
    { term: "Accrued revenue", def: "Revenue earned but not yet received or recorded, adjusted by debiting a receivable and crediting revenue." },
    { term: "Depreciation", def: "The systematic allocation of a long-term tangible asset's cost to expense over its useful life; a matching-principle application, not a valuation." },
    { term: "Accumulated depreciation", def: "A contra-asset account with a normal credit balance that accumulates the depreciation charged against an asset over time." },
    { term: "Contra-asset account", def: "An asset account with a credit normal balance that offsets a related asset account (e.g., Accumulated Depreciation offsets Equipment)." },
    { term: "Book value", def: "An asset's cost minus its accumulated depreciation; the net amount reported on the balance sheet." },
    { term: "Adjusted trial balance", def: "A trial balance prepared after all adjusting entries are posted; proves debits still equal credits and supplies the figures for the financial statements." }
  ],
  video: {
    title: "Fundamentals of Accounting — Lecture Series (42 lectures)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML",
    note: "Watch Lectures 13–20, which cover every adjusting entry type in this module: prepaid expenses, unearned revenues, accrued expenses, accrued revenues, and depreciation, plus the adjusted trial balance.",
    more: [
      { title: "Khan Academy: Accounting and financial statements — accrual vs. cash accounting", url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HAHUM1CLDf4YnxpX-WmxKZi" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A consulting firm completes a $7,500 project on December 29 but will not be paid until January. Under the accrual basis, when is the revenue recorded, and what is the December 31 adjusting entry?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Under accrual, revenue is recorded when <em>earned</em> — December 29, when the work was completed — not when cash arrives. Step 2: Nothing was recorded yet, so this is an accrued revenue. Step 3: Debit Accounts Receivable $7,500 (new asset), credit Service Revenue $7,500. Step 4: January's cash collection will be debit Cash / credit Accounts Receivable — no January revenue.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On September 1, a company paid $9,000 for a 9-month insurance policy. Give the December 31 adjusting entry and the resulting Prepaid Insurance balance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Monthly cost = $9,000 ÷ 9 = $1,000 per month. Step 2: Months used by Dec 31: September, October, November, December = 4 months. Step 3: Insurance expense for the period = 4 × $1,000 = <strong>$4,000</strong>. Step 4: Adjusting entry — debit Insurance Expense $4,000, credit Prepaid Insurance $4,000. Step 5: Prepaid Insurance balance = $9,000 − $4,000 = <strong>$5,000</strong> (5 months of future coverage).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A law firm received a $24,000 retainer on October 1 for 6 months of legal services to be performed evenly. By December 31, how much revenue has been earned, and what is the adjusting entry?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Monthly earning rate = $24,000 ÷ 6 = $4,000 per month. Step 2: Months performed by Dec 31: October, November, December = 3 months. Step 3: Revenue earned = 3 × $4,000 = <strong>$12,000</strong>. Step 4: This is a deferral (unearned revenue): debit Unearned Service Revenue $12,000, credit Service Revenue $12,000. Step 5: Unearned balance remaining = $24,000 − $12,000 = $12,000 liability for January–March.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Employees earn $900 per day, Monday–Friday. December 31 falls on a Thursday, and payday is Friday, January 1. Give the December 31 adjusting entry. Then give the January 1 payday entry for the full 5-day week ($4,500).</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Days worked in December: Monday–Thursday = 4 days. Step 2: December expense = 4 × $900 = <strong>$3,600</strong>. Step 3: Dec 31 adjusting entry — debit Salaries Expense $3,600, credit Salaries Payable $3,600. Step 4: Jan 1 payday covers 5 days ($4,500): 4 days belong to December (already accrued), 1 day (Friday) belongs to January ($900). Entry — debit Salaries Payable $3,600 (clear the liability), debit Salaries Expense $900 (January's day), credit Cash $4,500. Step 5: Check — total debits $4,500 = credit $4,500, and each period bears only its own days.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A $30,000, 8% note payable has been outstanding for 5 months at year-end, and no interest has been recorded. Compute accrued interest and give the adjusting entry.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Interest = Principal × Rate × Time = $30,000 × 0.08 × (5/12). Step 2: $30,000 × 0.08 = $2,400 annual interest; $2,400 × 5/12 = <strong>$1,000</strong>. Step 3: This is an accrued expense — debit Interest Expense $1,000, credit Interest Payable $1,000.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Equipment costing $48,000 with an estimated 4-year useful life was purchased at the start of the year. Give the year-end depreciation adjusting entry and compute the equipment's book value.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Annual depreciation = $48,000 ÷ 4 = <strong>$12,000</strong>. Step 2: Adjusting entry — debit Depreciation Expense $12,000, credit Accumulated Depreciation — Equipment $12,000. Step 3: Book value = Cost − Accumulated Depreciation = $48,000 − $12,000 = <strong>$36,000</strong>. Step 4: Note the credit goes to the contra-asset, not directly to Equipment, so the original cost stays visible.</p>"
    },
    {
      prompt: "<p><strong>Problem 7.</strong> Classify each situation as (a) prepaid expense, (b) unearned revenue, (c) accrued expense, or (d) accrued revenue: (i) Three months' rent paid in advance on Dec 1. (ii) December utility bill to be paid in January. (iii) $6,000 received Dec 15 for January consulting work. (iv) December services completed but not yet billed.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: (i) Cash paid before the expense is incurred → <strong>(a) prepaid expense</strong>. Step 2: (ii) Expense incurred (December usage) before cash is paid → <strong>(c) accrued expense</strong>. Step 3: (iii) Cash received before the revenue is earned → <strong>(b) unearned revenue</strong>. Step 4: (iv) Revenue earned before cash is received → <strong>(d) accrued revenue</strong>. Memory check: cash-first = deferral; event-first = accrual.</p>"
    },
    {
      prompt: "<p><strong>Problem 8.</strong> Supplies had a $3,200 balance before adjustment. A December 31 count shows $750 on hand. Give the adjusting entry. If the bookkeeper forgot this entry entirely, what would be the effect on assets, expenses, and net income?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Supplies used = $3,200 − $750 = <strong>$2,450</strong>. Step 2: Adjusting entry — debit Supplies Expense $2,450, credit Supplies $2,450. Step 3: If omitted: assets (Supplies) would be <strong>overstated by $2,450</strong> (showing $3,200 instead of $750); expenses would be <strong>understated by $2,450</strong>; therefore net income would be <strong>overstated by $2,450</strong>. Step 4: Rule of thumb — every omitted adjustment misstates one income-statement and one balance-sheet account, always in the same dollar amount.</p>"
    },
    {
      prompt: "<p><strong>Problem 9.</strong> Which of the following statements about adjusting entries is FALSE?</p><p>(a) Every adjusting entry affects one income-statement account and one balance-sheet account<br>(b) Adjusting entries never include Cash<br>(c) Adjusting entries are made at the beginning of the accounting period<br>(d) The adjusted trial balance is prepared after adjusting entries are posted</p>",
      solution: "<p><strong>Answer: (c) is FALSE.</strong> Step 1: (a) is true — that pairing is what updates both performance and position. Step 2: (b) is true — cash for deferrals already moved and for accruals has not moved yet. Step 3: (d) is true — the adjusted trial balance follows posting of the adjustments. Step 4: (c) is false because adjusting entries are made at the <em>end</em> of the period, to bring the books up to date before statements are prepared.</p>"
    }
  ],
  quiz: [
    {
      q: "The main reason GAAP requires the accrual basis instead of the cash basis is that accrual accounting:",
      choices: ["Is simpler and cheaper to maintain", "Records revenues when earned and expenses when incurred, better measuring period performance", "Eliminates the need for adjusting entries", "Reports exactly how much cash the company has"],
      answer: 1,
      explanation: "Correct: (b). Accrual matches economic events to the period they belong to, so a period's profit reflects that period's actual operations. (a) is wrong — accrual is more complex than cash basis, not simpler. (c) is wrong — accrual <em>creates</em> the need for adjusting entries. (d) is wrong — the statement of cash flows reports cash; accrual income deliberately differs from cash flow."
    },
    {
      q: "On December 1, a company pays $3,600 for a 6-month insurance policy. The December 31 adjusting entry is:",
      choices: ["Debit Prepaid Insurance $600; credit Cash $600", "Debit Insurance Expense $600; credit Prepaid Insurance $600", "Debit Insurance Expense $3,600; credit Prepaid Insurance $3,600", "Debit Prepaid Insurance $3,000; credit Insurance Expense $3,000"],
      answer: 1,
      explanation: "Correct: (b). Monthly cost = $3,600 ÷ 6 = $600; one month used in December, so debit Insurance Expense $600 and credit Prepaid Insurance $600. (a) is wrong — Cash never appears in an adjusting entry. (c) is wrong — it expenses all six months in December instead of just the one used. (d) is wrong — it reverses the direction and adjusts the wrong amount."
    },
    {
      q: "A company receives $10,000 on November 1 for services to be performed evenly over 5 months. At December 31, the Unearned Revenue account balance should be:",
      choices: ["$10,000", "$4,000", "$6,000", "$0"],
      answer: 2,
      explanation: "Correct: (c). $10,000 ÷ 5 = $2,000 earned per month; 2 months (Nov–Dec) earned = $4,000 recognized as revenue, leaving $10,000 − $4,000 = $6,000 still unearned (a liability). (a) is wrong — it ignores the two months performed. (b) is wrong — $4,000 is the amount <em>earned</em>, not the remaining liability. (d) is wrong — three months of obligation remain."
    },
    {
      q: "Employees earn $500 per day. At year-end (Tuesday), they have worked 2 days since the last payday. The adjusting entry is:",
      choices: ["Debit Salaries Payable $1,000; credit Cash $1,000", "Debit Salaries Expense $1,000; credit Salaries Payable $1,000", "Debit Cash $1,000; credit Salaries Expense $1,000", "No entry until payday"],
      answer: 1,
      explanation: "Correct: (b). 2 × $500 = $1,000 of expense belongs to this year (matching), and the unpaid amount is a liability — an accrued expense. (a) is wrong — it records a payment that has not happened and wipes out a payable that was never set up. (c) is wrong — no cash was received, and it reduces expense instead of recording it. (d) is wrong — waiting until payday would understate this year's expenses and liabilities."
    },
    {
      q: "A company performs $2,200 of services in December but will not bill until January. The December 31 adjusting entry is:",
      choices: ["Debit Cash $2,200; credit Service Revenue $2,200", "Debit Accounts Receivable $2,200; credit Service Revenue $2,200", "Debit Service Revenue $2,200; credit Accounts Receivable $2,200", "Debit Unearned Revenue $2,200; credit Service Revenue $2,200"],
      answer: 1,
      explanation: "Correct: (b). Revenue is earned in December (revenue recognition) but unrecorded and unbilled — an accrued revenue: debit the new receivable, credit revenue. (a) is wrong — no cash arrived, and adjusting entries never touch Cash. (c) is wrong — it reverses the entry, decreasing revenue. (d) is wrong — Unearned Revenue is for cash received <em>before</em> earning; here no cash was received at all."
    },
    {
      q: "Equipment costs $25,000 and has a 5-year useful life. After recording one year of straight-line depreciation, the equipment's book value is:",
      choices: ["$25,000", "$20,000", "$5,000", "$0"],
      answer: 1,
      explanation: "Correct: (b). Annual depreciation = $25,000 ÷ 5 = $5,000; book value = $25,000 − $5,000 = $20,000. (a) is wrong — it ignores the depreciation entirely. (c) is wrong — $5,000 is the depreciation expense (and accumulated depreciation), not the book value. (d) is wrong — the asset is only partly used up after one of five years."
    },
    {
      q: "Which of the following is NOT true of adjusting entries?",
      choices: ["They are made at the end of the accounting period", "They always affect at least one revenue or expense account", "They always involve the Cash account", "They update accounts before financial statements are prepared"],
      answer: 2,
      explanation: "Correct: (c). Adjusting entries <em>never</em> involve Cash — that is their defining feature. (a) is true — they are period-end entries. (b) is true — every adjustment touches one income-statement account. (d) is true — their purpose is to update the books before statements are prepared."
    },
    {
      q: "The adjusted trial balance differs from the (unadjusted) trial balance in that it:",
      choices: ["Includes only balance-sheet accounts", "Is prepared before the adjusting entries are journalized", "Reflects all accrual-basis adjustments and is the source for the financial statements", "Proves that cash equals net income"],
      answer: 2,
      explanation: "Correct: (c). The adjusted trial balance is prepared after adjustments are posted, proves debits still equal credits, and provides the up-to-date balances used to build the statements. (a) is wrong — it includes all accounts, income-statement ones included. (b) is wrong — it comes <em>after</em> adjusting entries. (d) is wrong — cash and net income are different measures; no trial balance equates them."
    }
  ],
  studyGuide: `
<h3>Module 3 — Adjusting Entries: Quick Reference</h3>
<p><strong>Cash basis:</strong> record when cash moves. <strong>Accrual basis</strong> (GAAP): record when earned/incurred.</p>
<p><strong>Three principles:</strong> Time-period assumption (slice life into periods) → Revenue recognition (record when earned) → Matching (expenses follow their revenues).</p>
<p><strong>Two iron rules:</strong> adjusting entries NEVER touch Cash; every one hits ONE income-statement + ONE balance-sheet account.</p>
<table class="jentry"><thead><tr><th>Type</th><th>Adjusting entry</th><th>Effect</th></tr></thead><tbody>
<tr><td>Prepaid expense</td><td>Dr Expense / Cr Prepaid asset</td><td>Asset down</td></tr>
<tr><td>Unearned revenue</td><td>Dr Unearned liability / Cr Revenue</td><td>Liability down</td></tr>
<tr><td>Accrued expense</td><td>Dr Expense / Cr Payable</td><td>Liability up</td></tr>
<tr><td>Accrued revenue</td><td>Dr Receivable / Cr Revenue</td><td>Asset up</td></tr>
<tr><td>Depreciation</td><td>Dr Depreciation Expense / Cr Accumulated Depreciation</td><td>Contra-asset up</td></tr>
</tbody></table>
<p><strong>Deferrals:</strong> cash moved first → shrink a prepaid asset or unearned liability. <strong>Accruals:</strong> event happened first → create a payable or receivable.</p>
<p><strong>Computation pattern:</strong> find the amount belonging to THIS period (months used ÷ total months; count supplies; days worked × daily rate; P × R × T for interest).</p>
<div class="formula">Book Value = Cost − Accumulated Depreciation</div>
<p><strong>Adjusted trial balance:</strong> prepared after adjustments are posted; debits = credits; feeds the financial statements directly.</p>
<p><strong>Watch out:</strong> no Cash in adjustments; don't re-record revenue when the cash arrives; depreciation allocates cost, it does not track market value.</p>
`
}
