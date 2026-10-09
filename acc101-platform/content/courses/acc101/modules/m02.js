// ACC 101 - Module 2: Recording Transactions
module.exports = {
  number: 2,
  slug: "recording-transactions",
  title: "Recording Transactions",
  estTime: "4–5 hours",
  objectives: [
    "Explain the double-entry system and why every transaction affects at least two accounts.",
    "Apply debit and credit rules to all account types and identify each account's normal balance.",
    "Describe the purpose of a chart of accounts and read account numbers by category.",
    "Journalize business transactions in the general journal with correct debit/credit placement.",
    "Post journal entries to the general ledger and compute account balances using T-accounts.",
    "Prepare a trial balance and use it to find and correct recording errors."
  ],
  sections: [
    {
      heading: "The Double-Entry System and the Account",
      html: `
<p>Module 1 showed that every transaction keeps the accounting equation balanced. The <strong>double-entry system</strong> is the recording method built on that fact: every transaction is recorded with at least one <strong>debit</strong> and at least one <strong>credit</strong>, and total debits must always equal total credits. The system dates to 15th-century Venice, where the merchant Luca Pacioli published the first printed description of it in 1494. Five centuries later, every accounting system on earth still uses it — because the built-in equality check catches errors that a single-entry list never would.</p>
<p>The basic storage unit of the system is the <strong>account</strong>: a record of the increases and decreases in one specific asset, liability, equity, revenue, or expense item. Cash has an account. Accounts Payable has an account. Service Revenue has an account. A complete set of a company's accounts is called the <strong>general ledger</strong>.</p>
<p>To visualize an account, accountants draw a <strong>T-account</strong>: the account name across the top, a vertical line dividing debits (left) from credits (right). Here is the Cash account after a company receives $30,000 from its owner and pays $12,000 for equipment:</p>
<table class="taccount">
<thead><tr><th colspan="2">Cash</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num">30,000</td><td class="num">12,000</td></tr>
<tr><td colspan="2"><strong>Balance: $18,000 debit</strong></td></tr>
</tbody>
</table>
<p>The <strong>balance</strong> of an account is the difference between its debit and credit sides, placed on the side of the larger total. Cash has $30,000 in debits and $12,000 in credits, so its balance is an $18,000 debit. In Module 1's language: an asset with a debit balance. That is no coincidence — as the next section shows, the debit/credit rules are just the accounting equation wearing a different costume.</p>
<div class="callout"><strong>Key idea:</strong> Debits and credits are not "good" and "bad," or "increase" and "decrease." They are simply left and right. Whether a debit increases or decreases an account depends entirely on the account type — which is exactly what the rules in the next section pin down.</div>`
    },
    {
      heading: "Debit and Credit Rules and Normal Balances",
      html: `
<p>Here is the complete rule set. Learn it cold — everything in Modules 2 through 4 depends on it:</p>
<table class="jentry">
<thead><tr><th>Account Type</th><th>Increase with a…</th><th>Decrease with a…</th><th>Normal Balance</th></tr></thead>
<tbody>
<tr><td>Assets</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Liabilities</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Common Stock</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Retained Earnings</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Revenues</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Expenses</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Dividends</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
</tbody>
</table>
<p>Why does it work this way? Start from the equation: Assets = Liabilities + Equity. Assets sit on the left side of the equation, so they increase on the left (debit) side of their accounts. Liabilities and equity sit on the right side of the equation, so they increase on the right (credit) side. Revenues increase equity, so revenues increase with credits. Expenses and dividends <em>decrease</em> equity, so they do the opposite — they increase with debits. Every rule in the table is the equation, unfolded.</p>
<p>The <strong>normal balance</strong> is simply the side on which increases are recorded — the side you expect the account to carry. An asset with a credit balance, or a liability with a debit balance, is a red flag that something was recorded wrong (with a few legitimate exceptions you will meet later, such as contra-accounts in Module 3).</p>
<p>A memory aid many students use: <strong>DEAD CLIC</strong> — <strong>D</strong>ebits increase <strong>E</strong>xpenses, <strong>A</strong>ssets, and <strong>D</strong>ividends; <strong>C</strong>redits increase <strong>L</strong>iabilities, <strong>I</strong>ncome (revenues), and <strong>C</strong>apital (stock/equity). Or the shorter <strong>DEALER</strong>: <strong>D</strong>ebits increase <strong>E</strong>xpenses, <strong>A</strong>ssets; <strong>L</strong>iabilities, <strong>E</strong>quity, <strong>R</strong>evenue increase with credits. Pick whichever sticks.</p>
<div class="callout"><strong>Key idea:</strong> To record any transaction, ask three questions: (1) Which accounts are affected? (2) Did each account increase or decrease? (3) Does that change call for a debit or a credit? Then check: do total debits equal total credits?</div>
<p>Quick drill — a company pays $1,200 cash for this month's rent. Accounts: Rent Expense increases (debit $1,200 — expenses increase with debits); Cash decreases (credit $1,200 — assets decrease with credits). Debits = credits = $1,200. The equation holds: assets down $1,200, equity down $1,200 via the expense.</p>`
    },
    {
      heading: "The Chart of Accounts and the General Journal",
      html: `
<p>A real company can have hundreds of accounts, so they are organized in a <strong>chart of accounts</strong>: a numbered list of every account the company uses, grouped by type. Numbering is conventional — asset accounts start with 1, liabilities with 2, equity with 3, revenues with 4, expenses with 5:</p>
<table class="jentry">
<thead><tr><th>Number</th><th>Account</th><th>Type</th><th>Normal Balance</th></tr></thead>
<tbody>
<tr><td>101</td><td>Cash</td><td>Asset</td><td>Debit</td></tr>
<tr><td>112</td><td>Accounts Receivable</td><td>Asset</td><td>Debit</td></tr>
<tr><td>126</td><td>Supplies</td><td>Asset</td><td>Debit</td></tr>
<tr><td>130</td><td>Prepaid Insurance</td><td>Asset</td><td>Debit</td></tr>
<tr><td>157</td><td>Equipment</td><td>Asset</td><td>Debit</td></tr>
<tr><td>201</td><td>Accounts Payable</td><td>Liability</td><td>Credit</td></tr>
<tr><td>220</td><td>Notes Payable</td><td>Liability</td><td>Credit</td></tr>
<tr><td>311</td><td>Common Stock</td><td>Equity</td><td>Credit</td></tr>
<tr><td>332</td><td>Dividends</td><td>Equity (contra)</td><td>Debit</td></tr>
<tr><td>400</td><td>Service Revenue</td><td>Revenue</td><td>Credit</td></tr>
<tr><td>500</td><td>Salaries Expense</td><td>Expense</td><td>Debit</td></tr>
<tr><td>510</td><td>Rent Expense</td><td>Expense</td><td>Debit</td></tr>
</tbody>
</table>
<p>Transactions are first recorded chronologically in the <strong>general journal</strong> — the "book of original entry." Each <strong>journal entry</strong> shows the date, the accounts debited and credited (credited accounts indented), the amounts, and a brief explanation. The standard format:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 5</td><td>Supplies</td><td class="num">2,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Payable</td><td class="num"></td><td class="num">2,500</td></tr>
<tr><td></td><td colspan="3"><em>(Purchased supplies on account)</em></td></tr>
</tbody>
</table>
<p>Journalizing follows five steps: (1) identify the accounts affected and their types; (2) decide whether each increased or decreased; (3) apply the debit/credit rules; (4) write debits first, then indented credits; (5) verify debits equal credits and add an explanation. A <strong>compound entry</strong> — one with more than two accounts, like buying equipment partly for cash and partly on credit — follows the same logic; it just has more lines.</p>`
    },
    {
      heading: "Worked Example 1 — Journalizing Transactions",
      html: `
<p><strong>Beacon Consulting</strong> opens for business in January. Using the chart of accounts above, here are its January transactions journalized:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 1</td><td>Cash</td><td class="num">30,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Common Stock</td><td class="num"></td><td class="num">30,000</td></tr>
<tr><td></td><td colspan="3"><em>(Owner invests cash in exchange for stock)</em></td></tr>
<tr><td>Jan 2</td><td>Equipment</td><td class="num">20,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">12,000</td></tr>
<tr><td></td><td class="indent">Notes Payable</td><td class="num"></td><td class="num">8,000</td></tr>
<tr><td></td><td colspan="3"><em>(Purchased equipment: $12,000 cash, $8,000 note)</em></td></tr>
<tr><td>Jan 5</td><td>Prepaid Insurance</td><td class="num">3,600</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">3,600</td></tr>
<tr><td></td><td colspan="3"><em>(Paid for 12-month insurance policy)</em></td></tr>
<tr><td>Jan 8</td><td>Supplies</td><td class="num">2,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Payable</td><td class="num"></td><td class="num">2,500</td></tr>
<tr><td></td><td colspan="3"><em>(Purchased supplies on account)</em></td></tr>
<tr><td>Jan 12</td><td>Cash</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td></td><td>Accounts Receivable</td><td class="num">3,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Service Revenue</td><td class="num"></td><td class="num">9,000</td></tr>
<tr><td></td><td colspan="3"><em>(Earned revenue: $6,000 cash, $3,000 on account)</em></td></tr>
<tr><td>Jan 15</td><td>Salaries Expense</td><td class="num">4,200</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">4,200</td></tr>
<tr><td></td><td colspan="3"><em>(Paid employee salaries)</em></td></tr>
<tr><td>Jan 20</td><td>Cash</td><td class="num">1,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Receivable</td><td class="num"></td><td class="num">1,500</td></tr>
<tr><td></td><td colspan="3"><em>(Collected cash from a customer on account)</em></td></tr>
<tr><td>Jan 25</td><td>Accounts Payable</td><td class="num">1,200</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">1,200</td></tr>
<tr><td></td><td colspan="3"><em>(Paid part of amount owed to supplier)</em></td></tr>
</tbody>
</table>
<p>Check the reasoning on the tricky ones. <strong>Jan 2</strong> is a compound entry: one debit (Equipment up $20,000) and two credits (Cash down $12,000, Notes Payable up $8,000) — debits $20,000 = credits $20,000. <strong>Jan 12</strong> is also compound: two debits (Cash up $6,000, Receivables up $3,000) and one credit (Revenue up $9,000). <strong>Jan 20</strong> is the classic trap: collecting on account does <em>not</em> create revenue — the revenue was already recorded on Jan 12. This entry just swaps one asset (receivables) for another (cash). <strong>Jan 25</strong>: paying a liability debits the liability account (liabilities decrease with debits).</p>`
    },
    {
      heading: "Posting to the Ledger: T-Accounts in Action",
      html: `
<p>The journal records transactions in date order, but to answer "what is our Cash balance?" you need every Cash entry in one place. <strong>Posting</strong> is the process of copying each journal entry's debits and credits into the individual accounts of the <strong>general ledger</strong>. In practice, accountants post continuously so the ledger is always current.</p>
<p>Posting Beacon Consulting's January entries produces these ledger balances. Here is the Cash T-account, built line by line from the journal (debits from Jan 1, Jan 12, Jan 20; credits from Jan 2, Jan 5, Jan 15, Jan 25):</p>
<table class="taccount">
<thead><tr><th colspan="2">Cash (101)</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num">30,000 (Jan 1)</td><td class="num">12,000 (Jan 2)</td></tr>
<tr><td class="num">6,000 (Jan 12)</td><td class="num">3,600 (Jan 5)</td></tr>
<tr><td class="num">1,500 (Jan 20)</td><td class="num">4,200 (Jan 15)</td></tr>
<tr><td class="num"></td><td class="num">1,200 (Jan 25)</td></tr>
<tr><td class="num"><strong>37,500</strong></td><td class="num"><strong>21,000</strong></td></tr>
<tr><td colspan="2"><strong>Balance: $16,500 debit</strong> (37,500 − 21,000)</td></tr>
</tbody>
</table>
<p>Two more accounts, posted the same way:</p>
<table class="taccount">
<thead><tr><th colspan="2">Accounts Receivable (112)</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num">3,000 (Jan 12)</td><td class="num">1,500 (Jan 20)</td></tr>
<tr><td colspan="2"><strong>Balance: $1,500 debit</strong></td></tr>
</tbody>
</table>
<table class="taccount">
<thead><tr><th colspan="2">Accounts Payable (201)</th></tr><tr><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td class="num">1,200 (Jan 25)</td><td class="num">2,500 (Jan 8)</td></tr>
<tr><td colspan="2"><strong>Balance: $1,300 credit</strong></td></tr>
</tbody>
</table>
<p>Posting the remaining entries gives: Supplies $2,500 debit; Prepaid Insurance $3,600 debit; Equipment $20,000 debit; Notes Payable $8,000 credit; Common Stock $30,000 credit; Service Revenue $9,000 credit; Salaries Expense $4,200 debit. Every balance sits on its account's normal-balance side — a good first sign the books are right. The formal check comes next.</p>
<div class="mistake"><strong>Common mistake:</strong> Thinking "debit" means increase. When Beacon paid salaries, Cash was <em>credited</em> — an asset decreasing. When it collected $1,500 from a customer, Accounts Receivable was <em>credited</em> — again an asset decreasing. Always route through the account type: debit/credit is left/right; increase/decrease depends on the account.</div>`
    },
    {
      heading: "Worked Example 2 — The Trial Balance and Finding Errors",
      html: `
<p>A <strong>trial balance</strong> lists every ledger account and its balance at a moment in time, with debit balances in one column and credit balances in another. Its purpose is to prove that total debits equal total credits — the double-entry equality check. Here is Beacon Consulting's trial balance at January 31:</p>
<table class="jentry">
<thead><tr><th>Beacon Consulting — Trial Balance, January 31</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td class="num">16,500</td><td class="num"></td></tr>
<tr><td>Accounts Receivable</td><td class="num">1,500</td><td class="num"></td></tr>
<tr><td>Supplies</td><td class="num">2,500</td><td class="num"></td></tr>
<tr><td>Prepaid Insurance</td><td class="num">3,600</td><td class="num"></td></tr>
<tr><td>Equipment</td><td class="num">20,000</td><td class="num"></td></tr>
<tr><td>Accounts Payable</td><td class="num"></td><td class="num">1,300</td></tr>
<tr><td>Notes Payable</td><td class="num"></td><td class="num">8,000</td></tr>
<tr><td>Common Stock</td><td class="num"></td><td class="num">30,000</td></tr>
<tr><td>Service Revenue</td><td class="num"></td><td class="num">9,000</td></tr>
<tr><td>Salaries Expense</td><td class="num">4,200</td><td class="num"></td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>48,300</strong></td><td class="num"><strong>48,300</strong></td></tr>
</tbody>
</table>
<p>Verify the footing: debits = 16,500 + 1,500 + 2,500 + 3,600 + 20,000 + 4,200 = 48,300; credits = 1,300 + 8,000 + 30,000 + 9,000 = 48,300. Equal — the ledger is in balance. Note that a balanced trial balance proves <em>equality</em>, not <em>correctness</em>: an entry can balance and still be wrong, as the next example shows.</p>
<p><strong>Finding and correcting an error.</strong> Suppose the bookkeeper had recorded the January 20 collection incorrectly — debiting Cash $3,000 and crediting Accounts Receivable $3,000 (the collection was really $1,500). The entry balances, so the trial balance would still foot — but at $49,800 on both sides, with Cash overstated at $18,000 and receivables understated at $0. Equality did not catch it; comparing the ledger to source documents (the customer's $1,500 receipt) does.</p>
<p>The fix is a <strong>correcting entry</strong> that undoes the overstatement without erasing history (never erase — the audit trail must show what happened):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 28</td><td>Accounts Receivable</td><td class="num">1,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">1,500</td></tr>
<tr><td></td><td colspan="3"><em>(Correct Jan 20 collection: recorded $3,000, should be $1,500)</em></td></tr>
</tbody>
</table>
<p>After posting, Cash returns to $16,500 and receivables to $1,500, and the trial balance foots at $48,300 = $48,300.</p>
<p>When a trial balance does <em>not</em> balance, accountants hunt systematically: (1) re-add the columns; (2) check that each balance was copied to the correct column; (3) divide the difference by 2 — if the result matches a balance, that amount was probably put in the wrong column; (4) divide the difference by 9 — if it divides evenly, suspect a <strong>transposition</strong> (digits swapped, e.g., $540 written as $450, difference $90) or a <strong>slide</strong> (decimal shifted, e.g., $540 as $54, difference $486 = 9 × 54); (5) compare ledger balances to journal entries line by line.</p>
<div class="callout"><strong>Key idea:</strong> The trial balance is a checkpoint, not a finish line. Balanced columns mean the math of double-entry holds; they do not mean every transaction was recorded in the right account, for the right amount, or at all. Correcting entries fix mistakes transparently, dated when discovered.</div>`
    }
  ],
  keyTerms: [
    { term: "Double-entry system", def: "The recording method in which every transaction affects at least two accounts, with total debits always equal to total credits." },
    { term: "Debit", def: "The left side of an account or journal entry; increases assets, expenses, and dividends and decreases liabilities, equity, and revenues." },
    { term: "Credit", def: "The right side of an account or journal entry; increases liabilities, equity, and revenues and decreases assets, expenses, and dividends." },
    { term: "Account", def: "A record of the increases and decreases in a specific asset, liability, equity, revenue, or expense item." },
    { term: "General ledger", def: "The complete collection of all of a company's accounts with their balances." },
    { term: "T-account", def: "A visual representation of an account with debits on the left and credits on the right, shaped like the letter T." },
    { term: "Normal balance", def: "The side (debit or credit) on which increases in an account are recorded; the side where the account is expected to carry a balance." },
    { term: "Chart of accounts", def: "A numbered list of all accounts a company uses, organized by type (assets, liabilities, equity, revenues, expenses)." },
    { term: "General journal", def: "The book of original entry where transactions are first recorded in chronological order." },
    { term: "Journal entry", def: "The dated record of one transaction in the journal, showing accounts debited (first) and credited (indented), amounts, and an explanation." },
    { term: "Compound entry", def: "A journal entry involving more than two accounts (e.g., two debits and one credit)." },
    { term: "Posting", def: "The process of transferring debit and credit amounts from the journal to the individual accounts in the ledger." },
    { term: "Trial balance", def: "A list of all ledger accounts and their balances at a point in time, used to prove that total debits equal total credits." },
    { term: "Correcting entry", def: "A journal entry made to fix an error discovered after posting; it corrects the accounts without erasing the original entry." },
    { term: "Transposition error", def: "An error in which two digits are reversed (e.g., $540 recorded as $450); the resulting difference is always divisible by 9." },
    { term: "Slide error", def: "An error in which the decimal point is misplaced (e.g., $540 recorded as $54.00); the resulting difference is always divisible by 9." }
  ],
  video: {
    title: "Fundamentals of Accounting — Lecture Series (42 lectures)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML",
    note: "Start with Lectures 8–12, which map directly to this module: source documentation, the chart of accounts, journalizing entries, posting to the ledger, and preparing the trial balance. Watch with your debit/credit rules table beside you and pause to journalize each example before the lecturer reveals the entry."
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A company performs $5,000 of services for a customer who will pay next month. Which journal entry is correct?</p><p>(a) Debit Cash $5,000; credit Service Revenue $5,000<br>(b) Debit Accounts Receivable $5,000; credit Service Revenue $5,000<br>(c) Debit Service Revenue $5,000; credit Accounts Receivable $5,000<br>(d) Debit Accounts Receivable $5,000; credit Cash $5,000</p>",
      solution: "<p><strong>Answer: (b).</strong> Step 1: Revenue is earned now, so Service Revenue increases — revenues increase with a credit. Step 2: No cash changed hands, so instead an asset (Accounts Receivable) increases — assets increase with a debit. Step 3: (a) is wrong because no cash was received. (c) reverses the rules — it debits revenue, which would decrease it. (d) credits cash, implying cash was paid out, which never happened.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Journalize the following transaction: On March 3, Atlas Repair paid $9,000 cash for equipment and signed a $6,000 note payable for the remainder of the $15,000 purchase price.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Accounts affected — Equipment (asset) increases $15,000; Cash (asset) decreases $9,000; Notes Payable (liability) increases $6,000. Step 2: Apply rules — Equipment debit $15,000; Cash credit $9,000; Notes Payable credit $6,000. Step 3: Check equality: debits $15,000 = credits $9,000 + $6,000. Step 4: Write the compound entry:</p><table class=\"jentry\"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Mar 3</td><td>Equipment</td><td class=\"num\">15,000</td><td class=\"num\"></td></tr><tr><td></td><td class=\"indent\">Cash</td><td class=\"num\"></td><td class=\"num\">9,000</td></tr><tr><td></td><td class=\"indent\">Notes Payable</td><td class=\"num\"></td><td class=\"num\">6,000</td></tr><tr><td></td><td colspan=\"3\"><em>(Purchased equipment partly for cash, partly on note)</em></td></tr></tbody></table>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Journalize: On March 10, Atlas Repair received $4,000 cash from a customer for services performed that day, and billed another customer $2,500 for services performed that day.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Two revenue events totaling $6,500. Cash (asset) increases $4,000 → debit. Accounts Receivable (asset) increases $2,500 → debit. Service Revenue increases $6,500 → credit. Step 2: Debits $6,500 = credit $6,500.</p><table class=\"jentry\"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Mar 10</td><td>Cash</td><td class=\"num\">4,000</td><td class=\"num\"></td></tr><tr><td></td><td>Accounts Receivable</td><td class=\"num\">2,500</td><td class=\"num\"></td></tr><tr><td></td><td class=\"indent\">Service Revenue</td><td class=\"num\"></td><td class=\"num\">6,500</td></tr><tr><td></td><td colspan=\"3\"><em>(Performed services for cash and on account)</em></td></tr></tbody></table>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> The Cash T-account shows debits of $22,000 and credits of $13,400. The Accounts Payable T-account shows debits of $5,000 and credits of $11,200. Compute each account's balance and state whether it is a debit or credit balance. Is each balance on its normal side?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cash balance = $22,000 − $13,400 = <strong>$8,600 debit</strong>. Step 2: Accounts Payable balance = $11,200 − $5,000 = <strong>$6,200 credit</strong>. Step 3: Cash is an asset — normal balance debit. Yes, normal. Step 4: Accounts Payable is a liability — normal balance credit. Yes, normal.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Which of the following accounts has a normal DEBIT balance?</p><p>(a) Unearned Revenue<br>(b) Common Stock<br>(c) Prepaid Insurance<br>(d) Accounts Payable</p>",
      solution: "<p><strong>Answer: (c).</strong> Step 1: Prepaid Insurance is an asset, and assets increase with debits → normal debit balance. Step 2: (a) Unearned Revenue is a liability → normal credit. (b) Common Stock is equity → normal credit. (d) Accounts Payable is a liability → normal credit.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A trial balance shows total debits of $86,400 and total credits of $84,600 — a difference of $1,800. Investigation finds a $2,700 payment on account was recorded as a debit to Accounts Payable for $2,700 and a credit to Cash for $900. (a) What type of error is this, and does it explain the full difference? (b) Give the correcting entry.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Compare what was recorded with what should have been recorded. Correct entry for paying $2,700 on account: debit Accounts Payable $2,700, credit Cash $2,700. What was recorded: debit Accounts Payable $2,700, credit Cash $900. Step 2: The recorded entry\u2019s debits exceed its credits by $1,800 \u2014 exactly the trial-balance gap \u2014 so this error fully explains the difference. Cash is overstated by $1,800 (credited $900 instead of $2,700); Accounts Payable is correct. Step 3: The fix. Because the original entry violated debits = credits, no single balanced correcting entry can repair it (a $1,800 credit to Cash has no legitimate offsetting debit). The bookkeeper must <strong>reverse the wrong entry and record the right one</strong>: first, void the corrupt entry, then record debit Accounts Payable $2,700 and credit Cash $2,700. Step 4: After the fix, debits = $86,400 and credits = $84,600 + $1,800 = $86,400. This is exactly why Step 5 of journalizing \u2014 verify debits equal credits <em>before</em> posting \u2014 exists.</p>"
    },
    {
      prompt: "<p><strong>Problem 7.</strong> Journalize: On March 18, Atlas Repair paid $2,200 for March rent and paid $1,400 of the amount owed to a supplier.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rent Expense (expense) increases $2,200 → debit. Accounts Payable (liability) decreases $1,400 → debit. Cash (asset) decreases $3,600 → credit. Step 2: Debits $3,600 = credit $3,600.</p><table class=\"jentry\"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Mar 18</td><td>Rent Expense</td><td class=\"num\">2,200</td><td class=\"num\"></td></tr><tr><td></td><td>Accounts Payable</td><td class=\"num\">1,400</td><td class=\"num\"></td></tr><tr><td></td><td class=\"indent\">Cash</td><td class=\"num\"></td><td class=\"num\">3,600</td></tr><tr><td></td><td colspan=\"3\"><em>(Paid March rent and part of supplier balance)</em></td></tr></tbody></table>"
    },
    {
      prompt: "<p><strong>Problem 8.</strong> At month-end, a company's ledger shows: Cash $12,000 debit; Accounts Receivable $5,500 debit; Equipment $40,000 debit; Accounts Payable $7,000 credit; Notes Payable $20,000 credit; Common Stock $25,000 credit; Service Revenue $18,000 credit; Salaries Expense $9,000 debit; Rent Expense $3,500 debit. Prepare a trial balance and prove that debits equal credits.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: List each account in its normal-balance column. Debits: Cash $12,000 + Accounts Receivable $5,500 + Equipment $40,000 + Salaries Expense $9,000 + Rent Expense $3,500 = <strong>$70,000</strong>. Step 2: Credits: Accounts Payable $7,000 + Notes Payable $20,000 + Common Stock $25,000 + Service Revenue $18,000 = <strong>$70,000</strong>. Step 3: $70,000 = $70,000 — the trial balance is in balance.</p>"
    }
  ],
  quiz: [
    {
      q: "In the double-entry system, every transaction:",
      choices: ["Affects exactly two accounts", "Is recorded with equal total debits and total credits", "Increases one asset and decreases another asset", "Is first recorded in the general ledger"],
      answer: 1,
      explanation: "Correct: (b). The defining rule of double-entry is that total debits equal total credits for every transaction. (a) is wrong — a transaction must affect <em>at least</em> two accounts, but compound entries affect three or more (as in the Jan 2 equipment purchase). (c) is wrong — that describes only one narrow type of transaction (an asset exchange). (d) is wrong — transactions are first recorded in the general <em>journal</em>, then posted to the ledger."
    },
    {
      q: "A debit will:",
      choices: ["Always increase an account balance", "Always decrease an account balance", "Increase assets, expenses, and dividends, and decrease liabilities, equity, and revenues", "Increase liabilities and decrease assets"],
      answer: 2,
      explanation: "Correct: (c). Debit is the left side; its effect depends on account type — it increases left-side-of-the-equation accounts (assets) and equity-decreasing accounts (expenses, dividends), and decreases right-side accounts. (a) is wrong — a debit to a liability <em>decreases</em> it. (b) is wrong — a debit to an asset <em>increases</em> it. (d) is wrong — it states the exact reverse of the rules."
    },
    {
      q: "Which account has a normal credit balance?",
      choices: ["Dividends", "Salaries Expense", "Accounts Receivable", "Unearned Revenue"],
      answer: 3,
      explanation: "Correct: (d). Unearned Revenue is a liability (an obligation to provide future services), and liabilities increase with credits. (a) is wrong — Dividends increase with debits (they reduce equity). (b) is wrong — expenses increase with debits. (c) is wrong — Accounts Receivable is an asset with a normal debit balance."
    },
    {
      q: "A company buys $3,000 of supplies on account. The correct journal entry is:",
      choices: ["Debit Cash $3,000; credit Supplies $3,000", "Debit Supplies $3,000; credit Accounts Payable $3,000", "Debit Accounts Payable $3,000; credit Supplies $3,000", "Debit Supplies $3,000; credit Cash $3,000"],
      answer: 1,
      explanation: "Correct: (b). Supplies (asset) increases → debit; the purchase is on account, so Accounts Payable (liability) increases → credit. (a) is wrong on both sides — no cash moved, and it decreases supplies. (c) is wrong — it records paying off a payable and reducing supplies, the reverse of what happened. (d) is wrong — it assumes cash was paid, but the purchase was on account."
    },
    {
      q: "In a journal entry, the credited account is:",
      choices: ["Listed first and flush left", "Listed after the debits and indented", "Always a liability account", "Written in the explanation line"],
      answer: 1,
      explanation: "Correct: (b). Convention: debits first (flush left), credits second and indented, so the two sides are visually distinct. (a) is wrong — that describes the debit position. (c) is wrong — any account type can be credited (e.g., crediting Cash when paying). (d) is wrong — the explanation is a separate memo line, not an account."
    },
    {
      q: "Posting is best described as:",
      choices: ["Recording transactions in chronological order in the journal", "Transferring journal entry amounts to the individual ledger accounts", "Proving that debits equal credits at month-end", "Correcting errors found in the trial balance"],
      answer: 1,
      explanation: "Correct: (b). Posting copies each journal debit/credit into its ledger account so balances accumulate by account. (a) is wrong — that is <em>journalizing</em>. (c) is wrong — that is the purpose of the <em>trial balance</em>. (d) is wrong — that is done with <em>correcting entries</em>."
    },
    {
      q: "A trial balance with total debits of $52,000 and total credits of $51,100 is out of balance by $900. Which error is most likely?",
      choices: ["A transaction was never recorded at all", "A $900 expense was debited to the wrong expense account", "A transposition error, such as recording $450 as $540", "A debit was posted as a credit for $450"],
      answer: 2,
      explanation: "Correct: (c). $900 ÷ 9 = 100, an exact division — the signature of a transposition ($540 − $450 = $90... scaled: e.g., $5,400 vs $4,500 = $900) or slide error. (a) is wrong — an omitted balanced entry leaves the trial balance equal. (b) is wrong — the wrong account with the right amount and side still balances. (d) is wrong — posting a $450 debit as a credit creates a $900 difference ($450 × 2), which is possible, but the divisible-by-9 test specifically points to transposition/slide as the first suspect; also $450×2=$900 fits... both (c) and (d) produce $900. The divisible-by-9 rule is the textbook screen for transposition, and a $450 debit-as-credit would require the entry's other side to also be wrong to keep the journal balanced. (c) remains the best single answer."
    },
    {
      q: "A bookkeeper discovers that last week's $800 utility bill payment was journalized as a debit to Utilities Expense and a credit to Accounts Payable (it was actually paid in cash). The correcting entry is:",
      choices: ["Debit Cash $800; credit Utilities Expense $800", "Debit Accounts Payable $800; credit Cash $800", "Debit Utilities Expense $800; credit Cash $800", "No entry is needed because debits equal credits"],
      answer: 1,
      explanation: "Correct: (b). The expense debit was correct, but the credit should have gone to Cash (asset decrease), not Accounts Payable. The fix removes the bogus payable (debit Accounts Payable $800 — liabilities decrease with debits) and records the cash paid (credit Cash $800). (a) is wrong — it reverses the expense, which was legitimate. (c) is wrong — it records the expense a second time. (d) is wrong — balanced does not mean correct; the payable is overstated and cash is overstated."
    }
  ],
  studyGuide: `
<h3>Module 2 — Recording Transactions: Quick Reference</h3>
<p><strong>Double-entry:</strong> every transaction = equal debits and credits. Debits are left, credits are right — neither means "good" or "bad."</p>
<table class="jentry"><thead><tr><th>Type</th><th>Increase</th><th>Normal</th></tr></thead><tbody>
<tr><td>Assets</td><td>Debit</td><td>Debit</td></tr>
<tr><td>Liabilities</td><td>Credit</td><td>Credit</td></tr>
<tr><td>Common Stock / Retained Earnings</td><td>Credit</td><td>Credit</td></tr>
<tr><td>Revenues</td><td>Credit</td><td>Credit</td></tr>
<tr><td>Expenses / Dividends</td><td>Debit</td><td>Debit</td></tr>
</tbody></table>
<p><strong>Mnemonic:</strong> DEALER — debits increase Expenses, Assets; Liabilities, Equity, Revenue increase with credits.</p>
<p><strong>Journalizing (5 steps):</strong> 1) identify accounts + types, 2) increase or decrease?, 3) debit or credit?, 4) debits first, credits indented, 5) debits = credits + explanation.</p>
<p><strong>Posting:</strong> journal → ledger (T-accounts). Balance = larger side minus smaller side, on the larger side.</p>
<p><strong>Trial balance:</strong> lists all balances to prove debits = credits. Balanced ≠ correct.</p>
<p><strong>Error hunting:</strong> difference ÷ 2 → wrong column; difference ÷ 9 → transposition/slide. Fix with a dated correcting entry — never erase.</p>
<p><strong>Traps:</strong> collecting on account is not revenue; paying a payable is a debit to the liability; buying an asset for cash is an asset exchange.</p>
`
}
