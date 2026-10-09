module.exports = {
  number: 4,
  slug: "completing-the-accounting-cycle",
  title: "Completing the Accounting Cycle",
  estTime: "3\u20134 hours",
  objectives: [
    "Prepare an income statement, a statement of retained earnings, and a classified balance sheet from an adjusted trial balance.",
    "Explain why financial statements must be prepared in a specific order.",
    "Distinguish temporary accounts from permanent accounts and explain why the distinction matters at year-end.",
    "Journalize and post all four closing entries and explain the role of the Income Summary account.",
    "Prepare a post-closing trial balance and explain what it proves.",
    "Describe reversing entries and identify which adjusting entries are candidates for reversal.",
    "List the eight steps of the accounting cycle and explain how each step connects to the next."
  ],
  sections: [
    {
      heading: "From Adjusted Trial Balance to Financial Statements",
      html: `
<p>In Module 3 you learned how adjusting entries bring every account up to date, and the <strong>adjusted trial balance</strong> proved that total debits still equal total credits after those adjustments. That adjusted trial balance is the single source from which the financial statements are built. Every balance on it lands in exactly one place: revenue and expense accounts go to the income statement, dividends go to the statement of retained earnings, and asset, liability, and stockholders' equity accounts go to the balance sheet.</p>
<p>The three statements must be prepared in a fixed order, because each one feeds the next:</p>
<ol>
<li><strong>Income statement first.</strong> It computes net income (revenues minus expenses), which you do not yet know.</li>
<li><strong>Statement of retained earnings second.</strong> It needs net income from step 1 to compute ending retained earnings.</li>
<li><strong>Balance sheet last.</strong> It needs ending retained earnings from step 2, since retained earnings is part of stockholders' equity.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> The income statement measures performance <em>over a period of time</em> ("For the Year Ended December 31"), while the balance sheet reports financial position <em>at a single point in time</em> ("As of December 31"). The statement of retained earnings is the bridge between them: it carries the period's net income into the point-in-time equity section.</div>
<p>The balance sheet in this module is a <strong>classified</strong> balance sheet, meaning assets and liabilities are grouped into subsections that help readers judge liquidity:</p>
<ul>
<li><strong>Current assets</strong> — cash and anything expected to be converted to cash, sold, or used up within one year or the operating cycle, whichever is longer: cash, accounts receivable, supplies, prepaid insurance, merchandise inventory.</li>
<li><strong>Long-term investments</strong> — assets held for investment rather than operations, such as stocks or bonds of other companies held more than a year.</li>
<li><strong>Property, plant, and equipment</strong> — long-lived tangible assets used in operations: land, buildings, equipment, less accumulated depreciation (a contra asset).</li>
<li><strong>Intangible assets</strong> — long-lived assets without physical substance: patents, trademarks, copyrights, goodwill.</li>
<li><strong>Current liabilities</strong> — obligations due within one year: accounts payable, wages payable, unearned revenue, notes payable due within a year.</li>
<li><strong>Long-term liabilities</strong> — obligations due beyond one year: mortgages payable, bonds payable.</li>
<li><strong>Stockholders' equity</strong> — common stock plus retained earnings (for a corporation).</li>
</ul>
<p>Classifying this way lets a reader compute working capital (current assets minus current liabilities) and assess whether the company can meet its short-term obligations — the reason the classified format is standard in practice.</p>
<div class="mistake"><strong>Common mistake:</strong> Putting the <em>beginning</em> retained earnings balance on the balance sheet. The balance sheet always reports <em>ending</em> retained earnings, which comes from the statement of retained earnings — never copy the retained earnings line straight from the adjusted trial balance.</div>`
    },
    {
      heading: "Worked Example: A Full Set of Financial Statements",
      html: `
<p>Blue Harbor Surf Shop has completed its adjusting entries. Here is its adjusted trial balance at December 31, 2026:</p>
<table>
<thead><tr><th>Blue Harbor Surf Shop — Adjusted Trial Balance — December 31, 2026</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td class="num">$18,400</td><td class="num"></td></tr>
<tr><td>Accounts receivable</td><td class="num">7,600</td><td class="num"></td></tr>
<tr><td>Supplies</td><td class="num">1,200</td><td class="num"></td></tr>
<tr><td>Prepaid insurance</td><td class="num">1,800</td><td class="num"></td></tr>
<tr><td>Equipment</td><td class="num">42,000</td><td class="num"></td></tr>
<tr><td>Accumulated depreciation — Equipment</td><td class="num"></td><td class="num">$9,600</td></tr>
<tr><td>Accounts payable</td><td class="num"></td><td class="num">6,300</td></tr>
<tr><td>Wages payable</td><td class="num"></td><td class="num">1,900</td></tr>
<tr><td>Unearned service revenue</td><td class="num"></td><td class="num">2,400</td></tr>
<tr><td>Common stock</td><td class="num"></td><td class="num">30,000</td></tr>
<tr><td>Retained earnings (beginning)</td><td class="num"></td><td class="num">12,000</td></tr>
<tr><td>Dividends</td><td class="num">5,000</td><td class="num"></td></tr>
<tr><td>Service revenue</td><td class="num"></td><td class="num">84,000</td></tr>
<tr><td>Wages expense</td><td class="num">45,000</td><td class="num"></td></tr>
<tr><td>Rent expense</td><td class="num">18,000</td><td class="num"></td></tr>
<tr><td>Insurance expense</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td>Supplies expense</td><td class="num">1,600</td><td class="num"></td></tr>
<tr><td>Depreciation expense</td><td class="num">3,200</td><td class="num"></td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>$146,200</strong></td><td class="num"><strong>$146,200</strong></td></tr>
</tbody>
</table>
<p>Check the footing: debits = 18,400 + 7,600 + 1,200 + 1,800 + 42,000 + 5,000 + 45,000 + 18,000 + 2,400 + 1,600 + 3,200 = $146,200. Credits = 9,600 + 6,300 + 1,900 + 2,400 + 30,000 + 12,000 + 84,000 = $146,200. It balances, so we proceed.</p>
<h4>Step 1 — Income statement</h4>
<table>
<thead><tr><th>Blue Harbor Surf Shop — Income Statement — For the Year Ended December 31, 2026</th><th></th><th></th></tr></thead>
<tbody>
<tr><td>Revenues:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Service revenue</td><td class="num"></td><td class="num">$84,000</td></tr>
<tr><td>Expenses:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Wages expense</td><td class="num">$45,000</td><td class="num"></td></tr>
<tr><td class="indent">Rent expense</td><td class="num">18,000</td><td class="num"></td></tr>
<tr><td class="indent">Insurance expense</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td class="indent">Supplies expense</td><td class="num">1,600</td><td class="num"></td></tr>
<tr><td class="indent">Depreciation expense</td><td class="num">3,200</td><td class="num"></td></tr>
<tr><td class="indent">Total expenses</td><td class="num"></td><td class="num">70,200</td></tr>
<tr><td><strong>Net income</strong></td><td class="num"></td><td class="num"><strong>$13,800</strong></td></tr>
</tbody>
</table>
<p>Total expenses = 45,000 + 18,000 + 2,400 + 1,600 + 3,200 = $70,200. Net income = 84,000 − 70,200 = <strong>$13,800</strong>.</p>
<h4>Step 2 — Statement of retained earnings</h4>
<table>
<thead><tr><th>Blue Harbor Surf Shop — Statement of Retained Earnings — For the Year Ended December 31, 2026</th><th></th></tr></thead>
<tbody>
<tr><td>Retained earnings, January 1, 2026</td><td class="num">$12,000</td></tr>
<tr><td>Add: Net income</td><td class="num">13,800</td></tr>
<tr><td></td><td class="num">25,800</td></tr>
<tr><td>Less: Dividends</td><td class="num">(5,000)</td></tr>
<tr><td><strong>Retained earnings, December 31, 2026</strong></td><td class="num"><strong>$20,800</strong></td></tr>
</tbody>
</table>
<p>Ending retained earnings = 12,000 + 13,800 − 5,000 = <strong>$20,800</strong>.</p>
<h4>Step 3 — Classified balance sheet</h4>
<table>
<thead><tr><th>Blue Harbor Surf Shop — Balance Sheet — December 31, 2026</th><th></th><th></th></tr></thead>
<tbody>
<tr><td><strong>Assets</strong></td><td class="num"></td><td class="num"></td></tr>
<tr><td>Current assets:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Cash</td><td class="num">$18,400</td><td class="num"></td></tr>
<tr><td class="indent">Accounts receivable</td><td class="num">7,600</td><td class="num"></td></tr>
<tr><td class="indent">Supplies</td><td class="num">1,200</td><td class="num"></td></tr>
<tr><td class="indent">Prepaid insurance</td><td class="num">1,800</td><td class="num"></td></tr>
<tr><td class="indent">Total current assets</td><td class="num"></td><td class="num">29,000</td></tr>
<tr><td>Property, plant, and equipment:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Equipment</td><td class="num">42,000</td><td class="num"></td></tr>
<tr><td class="indent">Less: Accumulated depreciation</td><td class="num">(9,600)</td><td class="num"></td></tr>
<tr><td class="indent"></td><td class="num"></td><td class="num">32,400</td></tr>
<tr><td><strong>Total assets</strong></td><td class="num"></td><td class="num"><strong>$61,400</strong></td></tr>
<tr><td><strong>Liabilities and Stockholders' Equity</strong></td><td class="num"></td><td class="num"></td></tr>
<tr><td>Current liabilities:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Accounts payable</td><td class="num">$6,300</td><td class="num"></td></tr>
<tr><td class="indent">Wages payable</td><td class="num">1,900</td><td class="num"></td></tr>
<tr><td class="indent">Unearned service revenue</td><td class="num">2,400</td><td class="num"></td></tr>
<tr><td class="indent">Total current liabilities</td><td class="num"></td><td class="num">10,600</td></tr>
<tr><td>Stockholders' equity:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Common stock</td><td class="num">30,000</td><td class="num"></td></tr>
<tr><td class="indent">Retained earnings</td><td class="num">20,800</td><td class="num"></td></tr>
<tr><td class="indent">Total stockholders' equity</td><td class="num"></td><td class="num">50,800</td></tr>
<tr><td><strong>Total liabilities and stockholders' equity</strong></td><td class="num"></td><td class="num"><strong>$61,400</strong></td></tr>
</tbody>
</table>
<p>Footing check: current assets = 18,400 + 7,600 + 1,200 + 1,800 = $29,000; equipment net = 42,000 − 9,600 = $32,400; total assets = $61,400. Current liabilities = 6,300 + 1,900 + 2,400 = $10,600; equity = 30,000 + 20,800 = $50,800; total = $61,400. The accounting equation balances: 61,400 = 10,600 + 50,800.</p>
<div class="callout"><strong>Key idea:</strong> Notice that every number on the three statements traces back to the adjusted trial balance — nothing is invented. The income statement and retained earnings statement simply reorganize the temporary accounts and dividends; the balance sheet reorganizes the permanent accounts. This is why the adjusted trial balance is the great crossroads of the accounting cycle.</div>`
    },
    {
      heading: "Closing the Books: Temporary vs. Permanent Accounts",
      html: `
<p>After the financial statements are prepared, the books must be made ready for the next accounting period. Revenues earned in 2026 must not be mixed with revenues earned in 2027, so all <strong>temporary accounts</strong> — revenues, expenses, and dividends — are closed to zero at year-end. <strong>Permanent accounts</strong> — all assets, liabilities, and stockholders' equity accounts (including retained earnings) — carry their balances forward untouched.</p>
<p>The transfer happens through four <strong>closing entries</strong>, made in this order:</p>
<ol>
<li><strong>Close revenue accounts</strong> to Income Summary. Debit each revenue account for its balance; credit Income Summary for the total.</li>
<li><strong>Close expense accounts</strong> to Income Summary. Debit Income Summary for the total; credit each expense account for its balance.</li>
<li><strong>Close Income Summary</strong> to Retained Earnings. After entries 1 and 2, the Income Summary balance equals net income (credit balance) or net loss (debit balance). Transfer it to Retained Earnings.</li>
<li><strong>Close Dividends</strong> to Retained Earnings. Debit Retained Earnings; credit Dividends. (Dividends bypass Income Summary because they are a distribution, not an expense.)</li>
</ol>
<p><strong>Income Summary</strong> is a temporary holding account that exists only during the closing process. Its balance after the first two entries must equal the net income (or net loss) reported on the income statement — a built-in self-check. If Income Summary shows $13,800 credit and your income statement shows $13,800 net income, the closing is on track.</p>
<div class="mistake"><strong>Common mistake:</strong> Closing Dividends into Income Summary along with the expenses. Dividends are not an expense and never touch Income Summary — they reduce retained earnings directly in the fourth closing entry. Putting dividends through Income Summary would understate net income.</div>
<div class="callout"><strong>Key idea:</strong> Closing entries do two jobs at once: they reset every temporary account to zero so the new period starts clean, and they update Retained Earnings for the period's net income (or loss) and dividends — the same update shown on the statement of retained earnings.</div>`
    },
    {
      heading: "Worked Example: The Four Closing Entries and Post-Closing Trial Balance",
      html: `
<p>Continuing with Blue Harbor Surf Shop (net income $13,800, dividends $5,000), here are the four closing entries dated December 31, 2026:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec. 31</td><td>Service Revenue</td><td class="num">84,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Income Summary</td><td class="num"></td><td class="num">84,000</td></tr>
<tr><td></td><td colspan="3"><em>(1) To close revenue accounts</em></td></tr>
<tr><td>Dec. 31</td><td>Income Summary</td><td class="num">70,200</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Wages Expense</td><td class="num"></td><td class="num">45,000</td></tr>
<tr><td></td><td class="indent">Rent Expense</td><td class="num"></td><td class="num">18,000</td></tr>
<tr><td></td><td class="indent">Insurance Expense</td><td class="num"></td><td class="num">2,400</td></tr>
<tr><td></td><td class="indent">Supplies Expense</td><td class="num"></td><td class="num">1,600</td></tr>
<tr><td></td><td class="indent">Depreciation Expense</td><td class="num"></td><td class="num">3,200</td></tr>
<tr><td></td><td colspan="3"><em>(2) To close expense accounts</em></td></tr>
<tr><td>Dec. 31</td><td>Income Summary</td><td class="num">13,800</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Retained Earnings</td><td class="num"></td><td class="num">13,800</td></tr>
<tr><td></td><td colspan="3"><em>(3) To close Income Summary (net income) to retained earnings</em></td></tr>
<tr><td>Dec. 31</td><td>Retained Earnings</td><td class="num">5,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Dividends</td><td class="num"></td><td class="num">5,000</td></tr>
<tr><td></td><td colspan="3"><em>(4) To close dividends to retained earnings</em></td></tr>
</tbody>
</table>
<p>Posting these to T-accounts confirms the mechanics. Watch Income Summary collect net income, then empty itself:</p>
<table class="taccount">
<thead><tr><th colspan="2">Income Summary</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num">(2) 70,200</td><td class="num">(1) 84,000</td></tr>
<tr><td class="num">(3) 13,800</td><td class="num"></td></tr>
<tr><td class="num"><strong>Balance: 0</strong></td><td class="num"></td></tr>
</tbody>
</table>
<p>After entry (1), Income Summary has a credit of $84,000; after entry (2), a credit of 84,000 − 70,200 = $13,800 — exactly the net income on the income statement. Entry (3) debits the full $13,800, leaving a zero balance.</p>
<table class="taccount">
<thead><tr><th colspan="2">Retained Earnings</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num"></td><td class="num">Beg. bal. 12,000</td></tr>
<tr><td class="num">(4) 5,000</td><td class="num">(3) 13,800</td></tr>
<tr><td class="num"></td><td class="num"><strong>End. bal. 20,800</strong></td></tr>
</tbody>
</table>
<p>Ending retained earnings = 12,000 + 13,800 − 5,000 = $20,800 — exactly the figure on the statement of retained earnings and the balance sheet. Every temporary account (Service Revenue, all five expenses, Dividends, Income Summary) now has a zero balance.</p>
<p>The <strong>post-closing trial balance</strong> lists only permanent accounts and proves the ledger is still in balance and ready for the new period:</p>
<table>
<thead><tr><th>Blue Harbor Surf Shop — Post-Closing Trial Balance — December 31, 2026</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td class="num">$18,400</td><td class="num"></td></tr>
<tr><td>Accounts receivable</td><td class="num">7,600</td><td class="num"></td></tr>
<tr><td>Supplies</td><td class="num">1,200</td><td class="num"></td></tr>
<tr><td>Prepaid insurance</td><td class="num">1,800</td><td class="num"></td></tr>
<tr><td>Equipment</td><td class="num">42,000</td><td class="num"></td></tr>
<tr><td>Accumulated depreciation — Equipment</td><td class="num"></td><td class="num">$9,600</td></tr>
<tr><td>Accounts payable</td><td class="num"></td><td class="num">6,300</td></tr>
<tr><td>Wages payable</td><td class="num"></td><td class="num">1,900</td></tr>
<tr><td>Unearned service revenue</td><td class="num"></td><td class="num">2,400</td></tr>
<tr><td>Common stock</td><td class="num"></td><td class="num">30,000</td></tr>
<tr><td>Retained earnings</td><td class="num"></td><td class="num">20,800</td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>$71,000</strong></td><td class="num"><strong>$71,000</strong></td></tr>
</tbody>
</table>
<p>Footing check: debits = 18,400 + 7,600 + 1,200 + 1,800 + 42,000 = $71,000. Credits = 9,600 + 6,300 + 1,900 + 2,400 + 30,000 + 20,800 = $71,000. Balanced — the books are ready for January.</p>
<div class="mistake"><strong>Common mistake:</strong> Leaving a temporary account (or the Dividends account) on the post-closing trial balance. If any revenue, expense, dividend, or Income Summary balance appears there, a closing entry was missed or mis-posted — go back and find it before starting the new period.</div>`
    },
    {
      heading: "Reversing Entries: An Optional Shortcut",
      html: `
<p>Some companies make <strong>reversing entries</strong> on the first day of the new period. A reversing entry is the exact opposite of an adjusting entry: it zeroes out the payable or receivable created by the adjustment and puts the offset into the related expense or revenue account. Reversing entries are entirely <strong>optional</strong> — the financial statements are identical with or without them. Their only purpose is bookkeeping convenience.</p>
<p>Consider Blue Harbor's accrued wages: at December 31 the adjusting entry was debit Wages Expense $1,900, credit Wages Payable $1,900. On January 1, the reversing entry flips it:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan. 1</td><td>Wages Payable</td><td class="num">1,900</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Wages Expense</td><td class="num"></td><td class="num">1,900</td></tr>
<tr><td></td><td colspan="3"><em>Reversing entry for accrued wages</em></td></tr>
</tbody>
</table>
<p>Why bother? Suppose the January 5 payroll totals $6,400, of which $1,900 was earned in December. <em>Without</em> a reversing entry, the bookkeeper must carefully split the payment: debit Wages Payable $1,900, debit Wages Expense $4,500, credit Cash $6,400. <em>With</em> the reversing entry, Wages Payable is already zero and Wages Expense carries a $1,900 credit; the bookkeeper simply records debit Wages Expense $6,400, credit Cash $6,400, and the expense nets to the correct $4,500 (6,400 − 1,900). One simple entry instead of one careful split.</p>
<p>Only <strong>accrual-type</strong> adjusting entries are reversed — accrued expenses and accrued revenues where cash will move in the new period. Never reverse deferral adjustments (prepaid expenses, unearned revenue) or depreciation: reversing those would corrupt the asset and liability balances.</p>
<div class="callout"><strong>Key idea:</strong> Reversing entries change no reported numbers. They exist purely so that routine new-period transactions (like paying a payroll) can be recorded in the most natural way, without remembering which slice belonged to last period.</div>`
    },
    {
      heading: "The 8-Step Accounting Cycle: Putting It All Together",
      html: `
<p>You have now walked the entire accounting cycle across Modules 1–4. Here are the eight steps in order, with where each lives in the course:</p>
<ol>
<li><strong>Analyze transactions.</strong> Identify each transaction's effect on the accounting equation (Module 1).</li>
<li><strong>Journalize.</strong> Record each transaction chronologically in the general journal using debits and credits (Module 2).</li>
<li><strong>Post.</strong> Transfer journal entries to the accounts in the general ledger (Module 2).</li>
<li><strong>Prepare an unadjusted trial balance.</strong> List all ledger balances to check that debits equal credits (Module 2).</li>
<li><strong>Adjust.</strong> Record adjusting entries for deferrals and accruals so revenues and expenses land in the right period (Module 3).</li>
<li><strong>Prepare an adjusted trial balance.</strong> Prove equality of debits and credits after adjusting (Module 3).</li>
<li><strong>Prepare financial statements.</strong> Build the income statement, statement of retained earnings, and balance sheet from the adjusted trial balance (this module).</li>
<li><strong>Close.</strong> Journalize and post closing entries, then prepare the post-closing trial balance (this module).</li>
</ol>
<p>Then the cycle begins again: January's transactions are analyzed, journalized, and posted into a ledger whose permanent accounts carry forward their December 31 balances and whose temporary accounts start at zero. That clean separation — enforced by closing entries — is what makes each period's income statement meaningful on its own.</p>
<div class="callout"><strong>Key idea:</strong> The accounting cycle is a <em>cycle</em>, not a line. Every period repeats the same eight steps, and the post-closing trial balance of one period becomes the opening position of the next. Master this loop and every later topic — merchandising, inventory, receivables — is just new kinds of transactions flowing through the same machinery.</div>`
    },
    {
      heading: "Chapter Recap",
      html: `
<ul>
<li>Financial statements are prepared from the <strong>adjusted trial balance</strong> in a fixed order: income statement, then statement of retained earnings, then classified balance sheet.</li>
<li>The <strong>classified balance sheet</strong> groups assets and liabilities into current, long-term, and other sections to reveal liquidity.</li>
<li><strong>Temporary accounts</strong> (revenues, expenses, dividends) are closed to zero each period; <strong>permanent accounts</strong> (assets, liabilities, equity) carry forward.</li>
<li>The four <strong>closing entries</strong> move revenues and expenses through <strong>Income Summary</strong> into Retained Earnings, then move Dividends directly into Retained Earnings.</li>
<li>The <strong>post-closing trial balance</strong> contains only permanent accounts and proves the ledger balances going into the new period.</li>
<li><strong>Reversing entries</strong> (optional, first day of the new period) undo accrual-type adjustments to simplify new-period bookkeeping.</li>
<li>The <strong>eight steps</strong> — analyze, journalize, post, unadjusted trial balance, adjust, adjusted trial balance, financial statements, close — repeat every period.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Adjusted trial balance", def: "A trial balance prepared after all adjusting entries have been journalized and posted; it proves debit-credit equality and serves as the direct source for the financial statements." },
    { term: "Income statement", def: "A financial statement reporting a company's revenues, expenses, and resulting net income or net loss for a specific period of time." },
    { term: "Statement of retained earnings", def: "A financial statement showing changes in retained earnings during a period: beginning balance, plus net income (or minus net loss), minus dividends, equals ending balance." },
    { term: "Classified balance sheet", def: "A balance sheet that groups assets and liabilities into meaningful subsections — current assets, long-term investments, property plant and equipment, intangibles, current liabilities, and long-term liabilities — to aid liquidity analysis." },
    { term: "Current assets", def: "Cash and other assets expected to be converted to cash, sold, or consumed within one year or the operating cycle, whichever is longer." },
    { term: "Current liabilities", def: "Obligations expected to be paid or settled within one year or the operating cycle, whichever is longer, typically using current assets." },
    { term: "Closing entries", def: "Journal entries made at the end of an accounting period to transfer the balances of temporary accounts to permanent accounts and reset temporary accounts to zero." },
    { term: "Temporary accounts", def: "Revenue, expense, and dividend accounts whose balances relate to a single accounting period and are closed to zero at period-end. Also called nominal accounts." },
    { term: "Permanent accounts", def: "Asset, liability, and stockholders' equity accounts whose balances carry forward from one period to the next. Also called real accounts." },
    { term: "Income Summary", def: "A temporary account used only during the closing process to accumulate revenues and expenses; its balance after the first two closing entries equals net income or net loss, and it is then closed to Retained Earnings." },
    { term: "Post-closing trial balance", def: "A trial balance prepared after closing entries, listing only permanent accounts, proving the ledger is balanced and ready for the next period." },
    { term: "Reversing entries", def: "Optional journal entries made on the first day of a new accounting period that reverse selected adjusting entries (accruals) to simplify recording routine transactions in the new period." },
    { term: "Accounting cycle", def: "The eight-step sequence — analyze, journalize, post, unadjusted trial balance, adjust, adjusted trial balance, financial statements, close — performed each accounting period." },
    { term: "Contra asset", def: "An account with a credit balance, such as Accumulated Depreciation, that is deducted from a related asset account on the balance sheet." },
    { term: "Operating cycle", def: "The average time between purchasing inventory and collecting cash from selling it; used alongside one year as the cutoff for classifying current items." },
    { term: "Working capital", def: "Current assets minus current liabilities; a measure of short-term liquidity made visible by the classified balance sheet." }
  ],
  video: {
    title: "ACCOUNTING BASICS: a Guide to (Almost) Everything (Accounting Stuff)",
    embedUrl: "https://www.youtube.com/embed/yYX4bvQSqbo",
    note: "A 13-minute walkthrough of the full 8-step accounting cycle. Watch the whole thing as a recap, then replay the closing-entries section closely — it mirrors the four closing entries worked in this module.",
    more: [
      { title: "Fundamentals of Accounting — Lectures 21\u201329: worksheet, financial statements, closing entries", url: "http://www.youtube.com/playlist?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>1.</strong> Classify each account as <strong>temporary</strong> or <strong>permanent</strong>: (a) Service Revenue, (b) Accounts Payable, (c) Dividends, (d) Accumulated Depreciation, (e) Rent Expense, (f) Common Stock, (g) Unearned Revenue, (h) Income Summary.</p>",
      solution: "<p>Temporary accounts are closed each period (revenues, expenses, dividends, Income Summary); permanent accounts carry forward (assets, liabilities, equity).</p><ul><li>(a) Service Revenue — temporary</li><li>(b) Accounts Payable — permanent</li><li>(c) Dividends — temporary</li><li>(d) Accumulated Depreciation — permanent (contra asset)</li><li>(e) Rent Expense — temporary</li><li>(f) Common Stock — permanent</li><li>(g) Unearned Revenue — permanent (liability)</li><li>(h) Income Summary — temporary</li></ul>"
    },
    {
      prompt: "<p><strong>2.</strong> Cedar Designs has the following adjusted balances: Service Revenue $96,000; Salaries Expense $52,000; Rent Expense $15,000; Supplies Expense $4,000; Depreciation Expense $5,000. Compute net income. Show your work.</p>",
      solution: "<p>Total expenses = 52,000 + 15,000 + 4,000 + 5,000 = $76,000. Net income = Revenues \u2212 Expenses = 96,000 \u2212 76,000 = <strong>$20,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>3.</strong> Cedar Designs (from problem 2) began the year with retained earnings of $18,000, earned net income of $20,000, and declared dividends of $9,000. Compute ending retained earnings.</p>",
      solution: "<p>Ending retained earnings = Beginning + Net income \u2212 Dividends = 18,000 + 20,000 \u2212 9,000 = <strong>$29,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>4.</strong> Using the Cedar Designs data (Service Revenue $96,000; total expenses $76,000; net income $20,000; dividends $9,000), journalize all four closing entries. Assume expenses are closed in one compound entry with Income Summary debited for the total.</p>",
      solution: "<p><strong>(1)</strong> Dr Service Revenue 96,000; Cr Income Summary 96,000 (close revenues). <strong>(2)</strong> Dr Income Summary 76,000; Cr Salaries Expense 52,000; Cr Rent Expense 15,000; Cr Supplies Expense 4,000; Cr Depreciation Expense 5,000 (close expenses). <strong>(3)</strong> Dr Income Summary 20,000; Cr Retained Earnings 20,000 (Income Summary credit balance = 96,000 \u2212 76,000 = 20,000 = net income). <strong>(4)</strong> Dr Retained Earnings 9,000; Cr Dividends 9,000 (close dividends directly to retained earnings).</p>"
    },
    {
      prompt: "<p><strong>5.</strong> A company's adjusted trial balance totals $210,000 in debits. Its temporary accounts are: revenues $88,000 (credit), expenses $61,000 (debit), dividends $7,000 (debit). What will the post-closing trial balance total? Explain.</p>",
      solution: "<p>Closing entries remove all temporary-account balances from the ledger, so the post-closing trial balance excludes them. Temporary debits removed: 61,000 + 7,000 = 68,000. Temporary credits removed: 88,000. Post-closing debits = 210,000 \u2212 68,000 = $142,000; post-closing credits = 210,000 \u2212 88,000 = $122,000? No — wait. Check: the Income Summary close moves the net 27,000 (88,000 \u2212 61,000) into Retained Earnings (credit), and dividends move 7,000 into Retained Earnings (debit). Net change to credits: \u221288,000 (revenue closed) + 27,000 (net income to RE) = \u221261,000. Net change to debits: \u221261,000 (expenses) \u2212 7,000 (dividends) + 7,000 (dividends to RE debit) = \u221261,000. Both sides fall by 61,000: 210,000 \u2212 61,000 = <strong>$149,000</strong> each side. Shortcut: post-closing total = adjusted total minus total expenses (the one temporary amount that leaves both sides equally), since revenues, Income Summary, and dividends net through Retained Earnings. Here: 210,000 \u2212 61,000 = $149,000.</p>"
    },
    {
      prompt: "<p><strong>6.</strong> Classify each as a current asset (CA), property plant and equipment (PPE), current liability (CL), long-term liability (LTL), or stockholders' equity (SE): (a) Prepaid Rent, (b) Mortgage Payable (due in 10 years), (c) Office Equipment, (d) Salaries Payable, (e) Patents, (f) Common Stock, (g) Accounts Receivable, (h) Unearned Revenue.</p>",
      solution: "<ul><li>(a) Prepaid Rent — CA</li><li>(b) Mortgage Payable — LTL</li><li>(c) Office Equipment — PPE</li><li>(d) Salaries Payable — CL</li><li>(e) Patents — intangible asset (reported in its own section; accept \u201cintangible\u201d)</li><li>(f) Common Stock — SE</li><li>(g) Accounts Receivable — CA</li><li>(h) Unearned Revenue — CL</li></ul>"
    },
    {
      prompt: "<p><strong>7.</strong> After the first two closing entries, a company's Income Summary account shows debits of $45,000 and credits of $52,000. (a) What was net income or net loss? (b) Give the third closing entry.</p>",
      solution: "<p>(a) Income Summary credit balance = 52,000 \u2212 45,000 = $7,000 credit \u2192 <strong>net income of $7,000</strong>. (b) Third closing entry: Dr Income Summary 7,000; Cr Retained Earnings 7,000.</p>"
    },
    {
      prompt: "<p><strong>8.</strong> On December 31, a company accrues $3,200 of interest expense (debit Interest Expense, credit Interest Payable). (a) Give the reversing entry made on January 1. (b) On January 15 the company pays $5,000 of interest. Give the payment entry <em>with</em> the reversing entry in place, and show that interest expense for January is correctly stated.</p>",
      solution: "<p>(a) Jan. 1 reversing entry: Dr Interest Payable 3,200; Cr Interest Expense 3,200. (b) Jan. 15 payment: Dr Interest Expense 5,000; Cr Cash 5,000. January interest expense nets to 5,000 \u2212 3,200 = <strong>$1,800</strong>, which is exactly the interest belonging to January (the $3,200 belonged to December and was already expensed there).</p>"
    },
    {
      prompt: "<p><strong>9.</strong> Put the following in the correct order of the accounting cycle: (a) prepare financial statements, (b) post to the ledger, (c) prepare post-closing trial balance, (d) journalize transactions, (e) prepare adjusted trial balance, (f) analyze transactions, (g) journalize closing entries, (h) journalize adjusting entries, (i) prepare unadjusted trial balance.</p>",
      solution: "<p>Correct order: (f) analyze transactions \u2192 (d) journalize transactions \u2192 (b) post to the ledger \u2192 (i) prepare unadjusted trial balance \u2192 (h) journalize adjusting entries \u2192 (e) prepare adjusted trial balance \u2192 (a) prepare financial statements \u2192 (g) journalize closing entries \u2192 (c) prepare post-closing trial balance.</p>"
    },
    {
      prompt: "<p><strong>10.</strong> Which of the following would appear on a post-closing trial balance? (a) Service Revenue, (b) Cash, (c) Dividends, (d) Accounts Payable, (e) Depreciation Expense, (f) Retained Earnings, (g) Income Summary, (h) Prepaid Insurance. Explain the rule.</p>",
      solution: "<p>Rule: the post-closing trial balance lists <strong>only permanent accounts</strong> (assets, liabilities, equity). Appear: (b) Cash, (d) Accounts Payable, (f) Retained Earnings, (h) Prepaid Insurance. Do NOT appear (all temporary, closed to zero): (a) Service Revenue, (c) Dividends, (e) Depreciation Expense, (g) Income Summary.</p>"
    }
  ],
  quiz: [
    {
      q: "Which financial statement reports a company's revenues and expenses for a period of time?",
      choices: ["Balance sheet", "Income statement", "Statement of retained earnings", "Post-closing trial balance"],
      answer: 1,
      explanation: "The income statement is correct: it reports revenues minus expenses = net income for a period. The balance sheet is wrong because it reports financial position at a single point in time. The statement of retained earnings is wrong because it reports changes in retained earnings, not revenues and expenses. The post-closing trial balance is wrong because it is an internal list of permanent-account balances, not a financial statement at all."
    },
    {
      q: "Blue Harbor Surf Shop reports Service Revenue of $84,000 and total expenses of $70,200. Its net income is:",
      choices: ["$70,200", "$84,000", "$154,200", "$13,800"],
      answer: 3,
      explanation: "$13,800 is correct: net income = revenues \u2212 expenses = 84,000 \u2212 70,200 = 13,800. $70,200 is wrong because that is total expenses, not income. $84,000 is wrong because that is revenue before subtracting expenses. $154,200 is wrong because it adds revenues and expenses instead of subtracting."
    },
    {
      q: "The first closing entry closes:",
      choices: ["Expense accounts to Income Summary", "Revenue accounts to Income Summary", "Income Summary to Retained Earnings", "Dividends to Retained Earnings"],
      answer: 1,
      explanation: "Revenue accounts to Income Summary is correct: closing entries always begin by debiting each revenue account and crediting Income Summary. Expense accounts to Income Summary is wrong because that is the second entry. Income Summary to Retained Earnings is wrong because that is the third entry. Dividends to Retained Earnings is wrong because that is the fourth and final entry."
    },
    {
      q: "After all four closing entries are journalized and posted, the balance of the Income Summary account is:",
      choices: ["Equal to net income (a credit balance)", "Equal to total expenses (a debit balance)", "Zero", "Equal to ending retained earnings"],
      answer: 2,
      explanation: "Zero is correct: the third closing entry transfers Income Summary's entire balance to Retained Earnings, leaving it at zero. Net income as a credit balance is wrong because that describes Income Summary after only the first two entries, before the third. Total expenses as a debit balance is wrong because expenses were already moved out by the second entry. Ending retained earnings is wrong because that balance lives in the Retained Earnings account, not Income Summary."
    },
    {
      q: "Which of the following appears on the post-closing trial balance?",
      choices: ["Service Revenue", "Dividends", "Wages Payable", "Depreciation Expense"],
      answer: 2,
      explanation: "Wages Payable is correct: it is a permanent (liability) account, and the post-closing trial balance lists only permanent accounts. Service Revenue is wrong because it is a temporary account closed to zero. Dividends is wrong because it is a temporary account closed to Retained Earnings. Depreciation Expense is wrong because it is a temporary account closed through Income Summary."
    },
    {
      q: "On a classified balance sheet, Supplies (on hand at year-end) is reported as:",
      choices: ["A current asset", "An expense on the income statement", "Property, plant, and equipment", "An intangible asset"],
      answer: 0,
      explanation: "A current asset is correct: supplies on hand will be used up within the coming year. An expense is wrong because the adjusting entry already moved the used-up portion to Supplies Expense; only the remaining asset sits on the balance sheet. Property, plant, and equipment is wrong because that section holds long-lived tangible operating assets like equipment and buildings. An intangible asset is wrong because intangibles lack physical substance (patents, trademarks) and are long-lived."
    },
    {
      q: "Reversing entries are:",
      choices: ["Required at the end of every period", "Optional entries made on the first day of the new period that undo accrual-type adjustments", "The entries that close revenue and expense accounts", "Entries that correct errors in the ledger"],
      answer: 1,
      explanation: "Optional entries made on the first day of the new period that undo accrual-type adjustments is correct: they simplify new-period bookkeeping and change no reported numbers. Required at the end of every period is wrong because reversing entries are never required and are made at the start, not the end, of a period. Entries that close revenue and expense accounts is wrong because that describes closing entries. Entries that correct errors is wrong because reversing entries are planned and routine, not error corrections."
    },
    {
      q: "In the eight-step accounting cycle, which step comes immediately after preparing the adjusted trial balance?",
      choices: ["Journalize adjusting entries", "Post to the ledger", "Prepare financial statements", "Journalize closing entries"],
      answer: 2,
      explanation: "Prepare financial statements is correct: step 7 follows the adjusted trial balance (step 6), because the statements are built directly from it. Journalize adjusting entries is wrong because that is step 5, which comes before the adjusted trial balance. Post to the ledger is wrong because that is step 3, near the start of the cycle. Journalize closing entries is wrong because that is step 8, which comes after the financial statements are prepared."
    }
  ],
  studyGuide: `
<h3>M4 Study Guide — Completing the Accounting Cycle</h3>
<h4>Statement order (each feeds the next)</h4>
<ol>
<li><strong>Income statement:</strong> Revenues \u2212 Expenses = Net income (for a <em>period</em>).</li>
<li><strong>Statement of retained earnings:</strong> Beg. RE + Net income \u2212 Dividends = End. RE.</li>
<li><strong>Classified balance sheet:</strong> Assets = Liabilities + Stockholders' equity (<em>at a point in time</em>), using <em>ending</em> retained earnings.</li>
</ol>
<h4>Classified balance sheet sections</h4>
<p>Assets: Current assets \u2192 Long-term investments \u2192 Property, plant, and equipment (net of accumulated depreciation) \u2192 Intangible assets. Then: Current liabilities \u2192 Long-term liabilities \u2192 Stockholders' equity (Common stock + Retained earnings).</p>
<h4>The four closing entries (in order)</h4>
<ol>
<li>Dr Revenues / Cr Income Summary</li>
<li>Dr Income Summary / Cr each Expense</li>
<li>Dr Income Summary / Cr Retained Earnings (for the net income balance)</li>
<li>Dr Retained Earnings / Cr Dividends</li>
</ol>
<p>Temporary = revenues, expenses, dividends, Income Summary (closed to zero). Permanent = assets, liabilities, equity (carry forward).</p>
<h4>Post-closing trial balance</h4>
<p>Only permanent accounts; debits = credits; proves the ledger is balanced for the new period.</p>
<h4>Reversing entries</h4>
<p>Optional; first day of new period; reverse only <em>accrual</em> adjustments (accrued expenses/revenues). Never reverse deferrals or depreciation.</p>
<h4>8-step cycle</h4>
<p>Analyze \u2192 Journalize \u2192 Post \u2192 Unadjusted TB \u2192 Adjust \u2192 Adjusted TB \u2192 Financial statements \u2192 Close.</p>
<h4>Self-check numbers (Blue Harbor)</h4>
<p>Net income $13,800 = 84,000 \u2212 70,200. Ending RE $20,800 = 12,000 + 13,800 \u2212 5,000. Total assets $61,400 = 29,000 current + 32,400 equipment net. Post-closing TB totals $71,000 each side.</p>`
};
