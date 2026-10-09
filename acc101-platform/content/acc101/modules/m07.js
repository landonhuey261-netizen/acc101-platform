module.exports = {
  number: 7,
  slug: "cash-and-internal-control",
  title: "Cash and Internal Control",
  estTime: "3–4 hours",
  objectives: [
    "Explain what internal control is and why every business — large or small — needs it.",
    "Describe the five components of the COSO framework.",
    "Apply the principles of control activities, including segregation of duties and independent internal verification.",
    "Identify the inherent limitations of internal control.",
    "Describe internal controls over cash receipts and cash payments.",
    "Prepare a bank reconciliation and journalize the reconciling items that require entries.",
    "Account for a petty cash fund, including establishing, replenishing, and cash over and short."
  ],
  sections: [
    {
      heading: "What Internal Control Is and Why It Matters",
      html: `<p><strong>Internal control</strong> is the plan of organization and all the coordinated methods and measures a company adopts to (1) safeguard its assets, (2) check the accuracy and reliability of its accounting data, (3) promote operating efficiency, and (4) encourage employees to follow management's policies. Notice how broad this is: internal control is not one procedure or one department — it is the whole system of checks and balances built into how a company operates.</p>
<p>Why does it matter so much? Cash is the asset most vulnerable to theft, and every company, from a corner bakery to a multinational, handles cash daily. Without controls, errors slip into the accounting records, employees can misappropriate assets, and the financial statements managers and investors rely on become unreliable. High-profile accounting scandals led Congress to pass the <strong>Sarbanes-Oxley Act of 2002 (SOX)</strong>, which requires the managers of public companies to document and assess the effectiveness of their internal controls, and requires independent auditors to report on them. Internal control is therefore not just good business practice — for public companies, it is the law.</p>
<div class="callout"><strong>Key idea:</strong> Internal control provides <em>reasonable assurance</em>, not absolute assurance. A well-designed system reduces the risk of errors and fraud to an acceptably low level, but it can never guarantee perfection (more on that in the "Limitations" section).</div>
<p>Internal control serves three broad objectives: <strong>reliability of financial reporting</strong> (the numbers can be trusted), <strong>efficiency and effectiveness of operations</strong> (resources are used well), and <strong>compliance with laws and regulations</strong> (the company follows the rules). A single control can serve more than one objective — for example, requiring two signatures on large checks both safeguards cash and supports reliable reporting.</p>`
    },
    {
      heading: "The COSO Framework: Five Components",
      html: `<p>Most companies model their internal control systems on a framework published by the <strong>Committee of Sponsoring Organizations of the Treadway Commission (COSO)</strong>. The COSO framework identifies five interrelated components that must all be present and working together for internal control to be effective:</p>
<p><strong>1. Control environment.</strong> The "tone at the top" — management's philosophy, ethical values, organizational structure, and how it assigns authority and responsibility. If managers cut corners, employees will too. A written code of ethics, an active board of directors, and a competent, independent audit committee all strengthen the control environment. It is the foundation on which everything else rests.</p>
<p><strong>2. Risk assessment.</strong> Management must identify and analyze the risks that could keep the company from reaching its objectives, then decide how to manage them. A company that starts accepting credit cards, for example, must assess the new risk of chargebacks and data theft and design controls around them.</p>
<p><strong>3. Control activities.</strong> The actual policies and procedures that ensure management's directives are carried out — approvals, authorizations, reconciliations, segregation of duties, physical safeguards. These are the day-to-day gears of the system, covered in detail in the next section.</p>
<p><strong>4. Information and communication.</strong> The accounting system must capture all valid transactions, record them accurately and promptly, and communicate relevant information so people can do their jobs. Source documents, a chart of accounts, and clear reporting lines are part of this component.</p>
<p><strong>5. Monitoring.</strong> Controls must be watched over time and fixed when they break down or when conditions change. Internal auditors, surprise cash counts, and management's periodic reviews are monitoring activities.</p>
<div class="callout"><strong>Key idea:</strong> Think of the five components as a loop, not a list: a strong control environment makes risk assessment honest, risk assessment drives control activities, information systems communicate what controls need, and monitoring feeds improvements back into the environment.</div>`
    },
    {
      heading: "Principles of Control Activities",
      html: `<p>Control activities are the concrete procedures that carry out management's directives. Six principles of control activities apply in almost every company:</p>
<p><strong>1. Establishment of responsibility.</strong> Assign each task to one specific person so accountability is clear. "The register is everyone's job" means it is no one's job. When only one cashier handles a register drawer, shortages can be traced to that cashier.</p>
<p><strong>2. Segregation of duties.</strong> The most important principle. Related duties should be split among different people so that no one person can both commit and conceal an error or fraud. Specifically, three functions should be separated: <em>authorization</em> (approving a transaction), <em>recording</em> (entering it in the books), and <em>custody</em> (handling the asset). If the same employee orders supplies, receives them, writes the check, and records the payment, fraud is easy and detection is unlikely. Classic application: the person who handles cash should never be the person who records cash transactions or reconciles the bank account.</p>
<p><strong>3. Documentation procedures.</strong> Companies should use pre-numbered documents (checks, sales invoices, receipts) and require that every transaction be supported by a document. Pre-numbering makes it easy to spot missing items — if invoices 1041, 1042, and 1044 are on file but 1043 is gone, something needs explaining.</p>
<p><strong>4. Physical controls.</strong> Safeguard assets with safes, locked warehouses, alarm systems, passwords, and limited access. A cashier's drawer that locks, a safe with a changing combination, and security cameras are physical controls.</p>
<p><strong>5. Independent internal verification.</strong> Records should be checked periodically or on a surprise basis by someone independent of the people who handle the assets. The classic example is the monthly <strong>bank reconciliation</strong> performed by an employee who does not handle cash. Verification should be surprise-based when possible and the results reported directly to management.</p>
<p><strong>6. Human resource controls.</strong> Bond employees who handle cash (insurance against theft), require employees in sensitive positions to take vacations, and rotate duties. Fraud is much harder to sustain when someone else covers your desk for two weeks.</p>
<div class="mistake"><strong>Common mistake:</strong> Students often think segregation of duties means hiring more people. In a small business with few employees, perfect segregation may be impossible — that is exactly when <em>independent internal verification</em> matters most. The owner should open the bank statement, review cancelled checks, and reconcile the account personally.</div>`
    },
    {
      heading: "Limitations of Internal Control",
      html: `<p>Even the best-designed system has limits, and accountants are expected to understand them:</p>
<p><strong>Human error and judgment.</strong> Controls are run by people, and people misunderstand instructions, make mistakes, get tired, and exercise poor judgment. A control is only as reliable as the person performing it.</p>
<p><strong>Collusion.</strong> Segregation of duties collapses when two or more employees conspire. If the cashier and the bookkeeper work together, their combined access defeats the separation that was supposed to protect the company.</p>
<p><strong>Management override.</strong> Senior managers can override controls — ordering an employee to skip a required approval or backdate a document. Because managers design the system, they know how to bypass it.</p>
<p><strong>Cost versus benefit.</strong> The cost of a control should not exceed the expected benefit. A company would not hire a full-time guard to protect a $200 petty cash drawer. Small businesses therefore accept more risk than large ones, by necessity.</p>
<p><strong>Changing conditions.</strong> Controls designed for last year's business may fail this year. New products, new technology, and rapid growth can all outrun a control system until it is updated.</p>
<div class="callout"><strong>Key idea:</strong> These limitations are exactly why auditors say internal control provides <em>reasonable</em> assurance. A good system makes fraud difficult, expensive, and likely to be caught — it does not make it impossible.</div>`
    },
    {
      heading: "Controls Over Cash",
      html: `<p>Cash is the asset most susceptible to theft because it is small, portable, and untraceable — "no questions asked" is literally true of a stolen dollar bill. Companies therefore build especially tight controls around cash <strong>receipts</strong> and cash <strong>payments</strong>.</p>
<p><strong>Cash receipts controls:</strong> record every receipt immediately (cash registers with locked-in tapes, pre-numbered sales receipts), have one employee receive the cash and a different employee record it, deposit all cash intact <em>daily</em> in the bank (never pay expenses out of the register), and use electronic point-of-sale systems that transmit totals directly to accounting. Many companies also use <strong>lockbox</strong> systems, where customers mail payments directly to a post office box the bank controls — the cash never passes through the company's hands at all.</p>
<p><strong>Cash payments controls:</strong> make all payments by check or electronic funds transfer (never currency) so there is an automatic paper trail, require a properly approved <strong>voucher</strong> (purchase order, receiving report, supplier invoice all matched) before any payment is issued, cancel supporting documents after payment so they cannot be reused, and limit check-signing authority (large checks may require two signatures). Only designated personnel should be authorized to sign checks, and the person who signs should not be the person who prepares them.</p>
<div class="callout"><strong>Key idea:</strong> The two golden rules of cash control are: (1) <em>separate handling from recording</em> — the person who touches the cash never keeps the books; and (2) <em>let the bank be your partner</em> — daily deposits and monthly reconciliations by an independent employee make the bank statement a check on your own records.</div>`
    },
    {
      heading: "The Bank Reconciliation: Full Worked Example",
      html: `<p>The <strong>bank reconciliation</strong> is the flagship cash control: an independent employee compares the company's cash records against the monthly bank statement and explains every difference. Differences fall into two groups. <strong>Timing differences</strong> are items the company already recorded that the bank has not yet processed: <strong>deposits in transit</strong> (recorded by the company, not yet on the statement — <em>add</em> to the bank balance) and <strong>outstanding checks</strong> (written by the company, not yet cashed — <em>subtract</em> from the bank balance). <strong>Unrecorded items</strong> are things the bank knows that the company has not yet recorded: bank service charges, <strong>NSF (non-sufficient funds) checks</strong> from customers that bounced, and collections the bank made on the company's behalf. These adjust the <em>book</em> balance, and each one requires a journal entry.</p>
<p><strong>Worked example.</strong> Rosa's Bakery receives its March 31 bank statement. The accountant gathers these facts:</p>
<ul>
<li>Balance per bank statement, March 31: <strong>$8,420</strong></li>
<li>Deposits in transit: <strong>$1,300</strong></li>
<li>Outstanding checks: <strong>$2,020</strong></li>
<li>Balance per books, March 31: <strong>$7,680</strong></li>
<li>The bank collected a $400 note receivable plus $16 interest for the bakery; the bakery had not recorded it: <strong>+$416</strong> to books</li>
<li>Bank service charge for March, not yet recorded: <strong>$26</strong></li>
<li>A $390 customer check was returned NSF; the bakery had recorded it as a good receipt: <strong>−$390</strong> to books</li>
<li>Check #412 for utilities ($600) was recorded in the books as $620 — the books are $20 too low: <strong>+$20</strong> to books</li>
</ul>
<p><strong>Step 1 — adjust the bank balance (timing differences only):</strong></p>
<div class="formula">Adjusted bank balance = $8,420 + $1,300 (deposits in transit) − $2,020 (outstanding checks) = <strong>$7,700</strong></div>
<p><strong>Step 2 — adjust the book balance (items the company never recorded):</strong></p>
<div class="formula">Adjusted book balance = $7,680 + $416 (note collected) − $26 (service charge) − $390 (NSF check) + $20 (recording error) = <strong>$7,700</strong></div>
<p>Both sides agree at $7,700 — the reconciliation balances. Verify: 7,680 + 416 = 8,096; 8,096 − 26 = 8,070; 8,070 − 390 = 7,680; 7,680 + 20 = 7,700. And 8,420 + 1,300 = 9,720; 9,720 − 2,020 = 7,700.</p>
<p><strong>Step 3 — journalize the book-side items.</strong> Only the book adjustments need entries (the bank already recorded its own items):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar 31</td><td>Cash</td><td class="num">416</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Notes Receivable</td><td class="num"></td><td class="num">400</td></tr>
<tr><td></td><td class="indent">Interest Revenue</td><td class="num"></td><td class="num">16</td></tr>
<tr><td>Mar 31</td><td>Bank Service Charges (Miscellaneous Expense)</td><td class="num">26</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">26</td></tr>
<tr><td>Mar 31</td><td>Accounts Receivable</td><td class="num">390</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">390</td></tr>
<tr><td>Mar 31</td><td>Cash</td><td class="num">20</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Utilities Expense</td><td class="num"></td><td class="num">20</td></tr>
</tbody></table>
<p>The NSF entry re-establishes the customer's receivable — the sale is not cancelled; the company will try to collect again. The error entry fixes the over-recorded utilities check: the books deducted $620 but only $600 left the bank, so Cash is debited $20 and Utilities Expense is credited $20.</p>
<div class="mistake"><strong>Common mistake:</strong> Journalizing outstanding checks or deposits in transit. Those are <em>bank</em> timing differences — the company already recorded them when the check was written or the deposit was made. Only book-side items (service charges, NSF checks, collections, book errors) need entries.</div>`
    },
    {
      heading: "Petty Cash and Reporting Cash",
      html: `<p>Writing a check for a $12 taxi fare is silly, so companies keep a small <strong>petty cash fund</strong> — a fixed amount of currency for minor expenditures. The fund operates on the <strong>imprest system</strong>: it is established at a fixed amount, and every replenishment restores it to exactly that amount.</p>
<p><strong>Establishing the fund.</strong> Suppose on March 1 the bakery sets up a $300 petty cash fund:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar 1</td><td>Petty Cash</td><td class="num">300</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">300</td></tr>
</tbody></table>
<p>The custodian pays small bills and collects a signed receipt for each one. <strong>Replenishing the fund.</strong> On March 31 the custodian turns in receipts: office supplies $88, postage $64, miscellaneous expense $35 (total $187), and the cash count in the drawer is $106. The fund should hold $300; receipts plus cash total 187 + 106 = $293, so there is a <strong>$7 shortage</strong>. The replenishment entry records the expenses, plugs the shortage to <strong>Cash Over and Short</strong>, and credits Cash for the amount needed to restore the fund (187 + 7 = $194):</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar 31</td><td>Office Supplies</td><td class="num">88</td><td class="num"></td></tr>
<tr><td></td><td>Postage Expense</td><td class="num">64</td><td class="num"></td></tr>
<tr><td></td><td>Miscellaneous Expense</td><td class="num">35</td><td class="num"></td></tr>
<tr><td></td><td>Cash Over and Short</td><td class="num">7</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">194</td></tr>
</tbody></table>
<p>A debit to Cash Over and Short is an expense (a shortage); a credit balance would be reported as miscellaneous revenue. Had the count been $110 instead of $106, there would have been a $3 overage: credit Cash Over and Short $3 and credit Cash only $190.</p>
<p><strong>Reporting cash.</strong> On the balance sheet, companies report <strong>cash and cash equivalents</strong> as the first current asset. Cash equivalents are short-term, highly liquid investments readily convertible to known amounts of cash and so near maturity (generally three months or less when purchased) that interest-rate risk is negligible — Treasury bills, money market funds, and commercial paper qualify. <strong>Restricted cash</strong> (set aside for a specific purpose, such as a loan requirement) is reported separately, as a current or long-term asset depending on when the restriction lifts. Bank overdrafts, by contrast, are reported as current liabilities.</p>
<div class="callout"><strong>Module recap:</strong> Internal control is the system that safeguards assets and keeps accounting data reliable, structured by COSO's five components and carried out through control activities such as segregation of duties. It has real limits — collusion, override, and cost among them. Cash gets the tightest controls of all: daily deposits, independent bank reconciliations (bank items adjust the bank balance; book items adjust the books and are journalized), and an imprest petty cash fund with a cash-over-and-short plug.</div>`
    }
  ],
  keyTerms: [
    { term: "Internal control", def: "The plan of organization and all coordinated methods and measures adopted to safeguard assets, check the accuracy and reliability of accounting data, promote operating efficiency, and encourage adherence to managerial policies." },
    { term: "COSO", def: "The Committee of Sponsoring Organizations of the Treadway Commission; its framework defines five components of internal control: control environment, risk assessment, control activities, information and communication, and monitoring." },
    { term: "Control environment", def: "The overall attitude, awareness, and actions of management and the board regarding internal control — the 'tone at the top' on which the whole system rests." },
    { term: "Segregation of duties", def: "A control activity principle requiring that authorization, recording, and custody of assets be assigned to different people so no one person can both commit and conceal an error or fraud." },
    { term: "Independent internal verification", def: "The periodic or surprise review of records and procedures by someone independent of the personnel who handle the assets, such as a bank reconciliation done by an employee who does not handle cash." },
    { term: "Documentation procedures", def: "The control activity principle of supporting every transaction with a document and pre-numbering documents (checks, invoices, receipts) so missing items are easy to detect." },
    { term: "Physical controls", def: "Safeguards over assets and records such as safes, locked facilities, alarm systems, passwords, and restricted access." },
    { term: "Human resource controls", def: "Controls over people, including bonding employees who handle cash, requiring vacations, and rotating duties in sensitive positions." },
    { term: "Sarbanes-Oxley Act (SOX)", def: "The 2002 U.S. law requiring managers of public companies to document and assess internal control over financial reporting, with independent auditor reporting on its effectiveness." },
    { term: "Bank reconciliation", def: "The comparison of the company's cash records with the bank statement to identify timing differences and unrecorded items, proving the two balances agree after adjustment." },
    { term: "Deposits in transit", def: "Cash receipts the company has recorded and sent to the bank that have not yet appeared on the bank statement; added to the bank balance in the reconciliation." },
    { term: "Outstanding checks", def: "Checks the company has written and recorded that have not yet cleared the bank; subtracted from the bank balance in the reconciliation." },
    { term: "NSF check", def: "A customer's check returned by the bank marked non-sufficient funds; the company reduces Cash and re-establishes the Accounts Receivable, since collection is still expected." },
    { term: "Petty cash fund", def: "A small, fixed amount of cash kept on hand for minor expenditures, operated on the imprest system: replenishments restore it to its established amount." },
    { term: "Cash over and short", def: "The account used to record petty cash shortages (debit, reported as an expense) and overages (credit, reported as miscellaneous revenue)." },
    { term: "Cash equivalents", def: "Short-term, highly liquid investments that are readily convertible to known amounts of cash and near enough to maturity (generally three months or less) that interest-rate risk is insignificant." },
    { term: "Restricted cash", def: "Cash set aside for a specific purpose and not available for general use; reported separately from cash and cash equivalents on the balance sheet." }
  ],
  video: {
    title: "Complete Financial Accounting Course — internal control & cash chapters",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_",
    note: "Watch the chapters on internal control, fraud prevention, and cash — they walk through control principles, a full bank reconciliation, and the petty cash fund with visuals that reinforce this module's lecture.",
    more: [
      { title: "Accounting Stuff channel — bite-size topic refreshers", url: "https://www.youtube.com/@AccountingStuff" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>Problem 1 (multiple choice).</strong> Which of the following is <em>not</em> one of the five COSO components of internal control?</p><ol type="a"><li>Control environment</li><li>Risk assessment</li><li>External audit</li><li>Monitoring</li></ol>`,
      solution: `<p><strong>Answer: (c) External audit.</strong></p><p>Step 1 — Recall the five COSO components: control environment, risk assessment, control activities, information and communication, and monitoring. Step 2 — Check each choice: (a), (b), and (d) are all on that list. Step 3 — External audit is performed by an outside CPA firm and, while it relies on and tests internal control, it is not one of the five internal components of the system itself. Therefore (c) is the correct choice.</p>`
    },
    {
      prompt: `<p><strong>Problem 2 (multiple choice).</strong> Which arrangement <em>violates</em> the segregation-of-duties principle?</p><ol type="a"><li>The cashier handles cash; the bookkeeper records cash transactions; the owner reconciles the bank statement.</li><li>The purchasing agent approves orders; the receiving clerk inspects goods; the treasurer signs checks.</li><li>The warehouse clerk orders inventory, receives the shipments, records the purchases, and writes the checks to suppliers.</li><li>The cashier is required to take a two-week vacation each year while a substitute runs the register.</li></ol>`,
      solution: `<p><strong>Answer: (c).</strong></p><p>Step 1 — Segregation of duties requires separating authorization, recording, and custody so no one person can commit and conceal fraud. Step 2 — In (a), handling (cashier), recording (bookkeeper), and verification (owner) are split among three people — proper segregation. Step 3 — In (b), ordering, receiving, and payment are split — proper segregation. Step 4 — In (c), one employee controls the <em>entire</em> purchasing cycle: ordering (authorization), receiving (custody), recording, and paying (custody again). This person could order goods for personal use and cover it up completely. Step 5 — (d) describes a human resource control (mandatory vacations), which strengthens control rather than violating it. Therefore (c) is the violation.</p>`
    },
    {
      prompt: `<p><strong>Problem 3 (computational).</strong> Keller Company receives its October 31 bank statement showing a balance of $12,450. Deposits in transit total $3,200 and outstanding checks total $4,775. Compute the adjusted bank balance.</p>`,
      solution: `<p><strong>Answer: $10,875.</strong></p><p>Step 1 — Start with the balance per bank statement: $12,450. Step 2 — Add deposits in transit (recorded by the company, not yet by the bank): $12,450 + $3,200 = $15,650. Step 3 — Subtract outstanding checks (written and recorded by the company, not yet cleared): $15,650 − $4,775 = $10,875. Step 4 — The adjusted bank balance is <strong>$10,875</strong>; this is the cash figure that should agree with the adjusted book balance after the company's own unrecorded items are handled.</p>`
    },
    {
      prompt: `<p><strong>Problem 4 (journal entries).</strong> While preparing the October bank reconciliation, Keller Company discovers a $420 NSF check from customer T. Okafor and a $35 bank service charge, neither previously recorded. Prepare the required journal entries (dates: Oct 31).</p>`,
      solution: `<p><strong>Entries:</strong></p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Oct 31</td><td>Accounts Receivable (T. Okafor)</td><td class="num">420</td><td class="num"></td></tr><tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">420</td></tr><tr><td>Oct 31</td><td>Bank Service Charges (Miscellaneous Expense)</td><td class="num">35</td><td class="num"></td></tr><tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">35</td></tr></tbody></table><p>Step 1 — The NSF check means the $420 receipt the company recorded earlier was never really collected, so reverse it: debit Accounts Receivable (the customer still owes the money) and credit Cash $420. Step 2 — The service charge is a new expense the bank deducted: debit Bank Service Charges (or Miscellaneous Expense) and credit Cash $35. Step 3 — Note that outstanding checks and deposits in transit need <em>no</em> entries; the company already recorded those.</p>`
    },
    {
      prompt: `<p><strong>Problem 5 (multiple choice).</strong> Which reconciling items require the company to make journal entries?</p><ol type="a"><li>Outstanding checks and deposits in transit</li><li>Bank service charges and NSF checks</li><li>Deposits in transit and bank collections of notes</li><li>Outstanding checks and book errors the bank already corrected</li></ol>`,
      solution: `<p><strong>Answer: (b) Bank service charges and NSF checks.</strong></p><p>Step 1 — The rule: journalize only <em>book-side</em> items, i.e., things the bank knows that the company has not yet recorded. Step 2 — Outstanding checks and deposits in transit are bank timing differences the company already recorded — no entries needed, so (a), (c), and (d) each contain at least one item needing no entry. Step 3 — Bank service charges and NSF checks are book-side items the company never recorded, so both require entries: debit an expense (or Accounts Receivable for the NSF) and credit Cash. Therefore (b) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 6 (computational).</strong> Pine Street Deli maintains a $250 petty cash fund. At replenishment time the custodian submits receipts for office supplies $62, delivery expense $48, and miscellaneous expense $25. The cash remaining in the drawer is counted at $112. (a) Determine whether there is a cash overage or shortage and the amount. (b) Prepare the replenishment journal entry.</p>`,
      solution: `<p><strong>Answer: (a) $3 shortage. (b) Entry below.</strong></p><p>Step 1 — Total the receipts: 62 + 48 + 25 = $135. Step 2 — Add the cash on hand: 135 + 112 = $247 accounted for. Step 3 — Compare to the established fund: 250 − 247 = <strong>$3 shortage</strong>. Step 4 — The entry records each expense, debits Cash Over and Short for the shortage, and credits Cash for the total needed to restore the fund (135 + 3 = $138):</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td></td><td>Office Supplies</td><td class="num">62</td><td class="num"></td></tr><tr><td></td><td>Delivery Expense</td><td class="num">48</td><td class="num"></td></tr><tr><td></td><td>Miscellaneous Expense</td><td class="num">25</td><td class="num"></td></tr><tr><td></td><td>Cash Over and Short</td><td class="num">3</td><td class="num"></td></tr><tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">138</td></tr></tbody></table><p>Check: debits 62 + 48 + 25 + 3 = 138 = credit. After the $138 is added to the drawer, the fund holds 112 + 138 = $250 again.</p>`
    },
    {
      prompt: `<p><strong>Problem 7 (multiple choice).</strong> Which of the following is an inherent limitation of internal control?</p><ol type="a"><li>Requiring two signatures on all checks over $5,000</li><li>Collusion between two employees defeating segregation of duties</li><li>Pre-numbering all sales invoices</li><li>Reconciling the bank account every month</li></ol>`,
      solution: `<p><strong>Answer: (b) Collusion between two employees defeating segregation of duties.</strong></p><p>Step 1 — Limitations are weaknesses no well-designed system can fully eliminate: human error, collusion, management override, cost-benefit trade-offs, and changing conditions. Step 2 — Choices (a), (c), and (d) are control <em>activities</em> (authorization thresholds, documentation procedures, independent verification) — they strengthen control, not limit it. Step 3 — Collusion directly defeats segregation of duties because the control assumes the two people check each other; if they conspire, the check disappears. Therefore (b) is the limitation.</p>`
    },
    {
      prompt: `<p><strong>Problem 8 (multiple choice).</strong> Which of the following qualifies as a cash equivalent?</p><ol type="a"><li>A 90-day U.S. Treasury bill purchased two weeks ago</li><li>A six-month certificate of deposit</li><li>Inventory expected to sell within 60 days</li><li>Accounts receivable from a reliable customer</li></ol>`,
      solution: `<p><strong>Answer: (a) A 90-day U.S. Treasury bill purchased two weeks ago.</strong></p><p>Step 1 — Cash equivalents must be short-term, highly liquid, readily convertible to known cash amounts, and so near maturity (three months or less at purchase) that interest-rate risk is negligible. Step 2 — (a) qualifies: it was a 90-day instrument at purchase and is highly liquid. Step 3 — (b) fails the maturity test: six months exceeds the three-month threshold. Step 4 — (c) and (d) are operating assets, not investments; they are not convertible to <em>known</em> cash amounts on demand. Therefore (a) is the cash equivalent.</p>`
    },
    {
      prompt: `<p><strong>Problem 9 (computational).</strong> Data for the November 30 bank reconciliation of Alta Print Shop: bank statement balance $8,310; deposits in transit $1,180; outstanding checks $2,200; book balance $6,530; the bank collected a $1,000 note plus $40 interest (unrecorded); a $30 service charge (unrecorded); a $260 NSF check (unrecorded); check #88 for $400 was recorded in the books as $410. Compute the adjusted bank balance and the adjusted book balance and verify that they agree.</p>`,
      solution: `<p><strong>Answer: Both equal $7,290.</strong></p><p><strong>Bank side:</strong> Step 1 — Start with $8,310. Step 2 — Add deposits in transit: 8,310 + 1,180 = 9,490. Step 3 — Subtract outstanding checks: 9,490 − 2,200 = <strong>$7,290</strong> adjusted bank balance. <strong>Book side:</strong> Step 4 — Start with $6,530. Step 5 — Add the note collection and interest: 6,530 + 1,000 + 40 = 7,570. Step 6 — Subtract the service charge: 7,570 − 30 = 7,540. Step 7 — Subtract the NSF check: 7,540 − 260 = 7,280. Step 8 — Fix the recording error: the books deducted $410 but the check was only $400, so the books are $10 too low — add $10: 7,280 + 10 = <strong>$7,290</strong> adjusted book balance. Step 9 — Both sides equal $7,290, so the reconciliation balances. (The book-side items — $1,040 collection, $30 charge, $260 NSF, and the $10 error — each require a journal entry; the bank-side items do not.)</p>`
    },
    {
      prompt: `<p><strong>Problem 10 (multiple choice).</strong> A bakery owner does not handle cash, but each month she personally compares the bank statement to the cash records and investigates differences. Which control principle does this illustrate?</p><ol type="a"><li>Establishment of responsibility</li><li>Independent internal verification</li><li>Documentation procedures</li><li>Human resource controls</li></ol>`,
      solution: `<p><strong>Answer: (b) Independent internal verification.</strong></p><p>Step 1 — The owner is checking the records prepared by others; she is independent of cash handling, so her review is objective. Step 2 — (a) establishment of responsibility is about assigning a task to one person, not about reviewing someone else's work. Step 3 — (c) documentation procedures concern supporting documents and pre-numbering, not present here. Step 4 — (d) human resource controls concern hiring, bonding, vacations, and rotation — not a reconciliation. Therefore the monthly review by an independent person is independent internal verification, choice (b).</p>`
    }
  ],
  quiz: [
    {
      q: "The primary purpose of internal control is to:",
      choices: [
        "Guarantee that no fraud or error will ever occur in the company.",
        "Provide reasonable assurance that assets are safeguarded, accounting data are reliable, operations are efficient, and policies are followed.",
        "Replace the need for an independent external audit.",
        "Maximize reported profits by minimizing recorded expenses."
      ],
      answer: 1,
      explanation: "Correct: (b). Internal control's objectives are safeguarding assets, reliable accounting data, efficient operations, and policy compliance — and it provides reasonable, not absolute, assurance. (a) is wrong because absolute assurance is impossible; human error, collusion, and override are inherent limitations. (c) is wrong because internal control and external audits are complementary, not substitutes. (d) is wrong because controls are about faithful reporting, never about manipulating profit."
    },
    {
      q: "Which of the following is one of the five COSO components?",
      choices: [
        "External auditor rotation",
        "Risk assessment",
        "Maximizing shareholder value",
        "Segregation of tax duties"
      ],
      answer: 1,
      explanation: "Correct: (b). Risk assessment — identifying and analyzing risks to achieving objectives — is one of COSO's five components (along with control environment, control activities, information and communication, and monitoring). (a) is wrong because external audits are outside the company's internal system. (c) is wrong because shareholder value is a corporate goal, not a control component. (d) is wrong because segregation of duties is a control activity principle, not a COSO component, and 'tax duties' is not part of the framework."
    },
    {
      q: "Segregation of duties is violated when one employee:",
      choices: [
        "Takes a required two-week vacation while a substitute covers the register.",
        "Prepares the bank reconciliation while another employee handles cash.",
        "Authorizes purchases, records the purchases, and has custody of the inventory.",
        "Uses pre-numbered invoices for every sale."
      ],
      answer: 2,
      explanation: "Correct: (c). Authorization, recording, and custody must be split among different people; one person holding all three can commit and conceal fraud. (a) is wrong because mandatory vacations are a human resource control that strengthens the system. (b) is wrong because splitting reconciliation from cash handling is proper segregation plus independent verification. (d) is wrong because pre-numbered documents are a documentation-procedures control."
    },
    {
      q: "Which of the following is an inherent limitation of internal control?",
      choices: [
        "Requiring pre-numbered sales invoices",
        "Collusion between two employees",
        "Performing monthly bank reconciliations",
        "Bonding employees who handle cash"
      ],
      answer: 1,
      explanation: "Correct: (b). Collusion defeats segregation of duties because the control assumes the separated employees check each other. (a) is wrong because pre-numbering is a control activity (documentation procedures). (c) is wrong because the bank reconciliation is a control activity (independent internal verification). (d) is wrong because bonding is a human resource control. The inherent limitations are human error, collusion, management override, cost-benefit constraints, and changing conditions."
    },
    {
      q: "In a bank reconciliation, deposits in transit are:",
      choices: [
        "Subtracted from the book balance.",
        "Added to the bank statement balance.",
        "Added to the book balance.",
        "Ignored because they require no action."
      ],
      answer: 1,
      explanation: "Correct: (b). Deposits in transit were already recorded by the company but have not yet appeared on the bank statement, so they are added to the bank balance (bank-side timing difference). (a) and (c) are wrong because deposits in transit do not adjust the book balance at all — the company recorded them when the deposit was made. (d) is wrong because they must be added to the bank balance for the two sides to agree."
    },
    {
      q: "A $200 NSF check from a customer appears on the bank statement. The company should:",
      choices: [
        "Do nothing, since the bank already handled it.",
        "Debit Accounts Receivable and credit Cash for $200.",
        "Debit Cash and credit Accounts Receivable for $200.",
        "Add $200 to the bank balance in the reconciliation."
      ],
      answer: 1,
      explanation: "Correct: (b). The company previously recorded the $200 as a good cash receipt; the NSF return means the cash was never collected, so the receipt is reversed: debit Accounts Receivable (the customer still owes it) and credit Cash. (a) is wrong because this is a book-side item requiring an entry. (c) is wrong because it records cash as if it were received — the opposite of what happened. (d) is wrong because the NSF check is a book adjustment (subtract from book balance), not a bank timing difference."
    },
    {
      q: "A $150 petty cash fund is replenished when receipts total $118 and $29 cash remains in the drawer. The entry includes:",
      choices: [
        "A $3 credit to Cash Over and Short.",
        "A $3 debit to Cash Over and Short.",
        "No entry for the difference, since it is immaterial.",
        "A $150 debit to Petty Cash."
      ],
      answer: 1,
      explanation: "Correct: (b). Accounted-for amount is 118 + 29 = $147 versus the $150 fund, a $3 shortage, so Cash Over and Short is debited $3 (a shortage is an expense). (a) is wrong because a credit would record an overage; here the fund is short. (c) is wrong because even small shortages must be recorded — the entry is the control. (d) is wrong because Petty Cash is debited only when the fund is established or increased, not on routine replenishment."
    },
    {
      q: "Which of the following would be reported as a cash equivalent?",
      choices: [
        "A six-month certificate of deposit",
        "Accounts receivable due in 45 days",
        "A 60-day commercial paper investment",
        "Restricted cash set aside for a bond repayment"
      ],
      answer: 2,
      explanation: "Correct: (c). Cash equivalents are short-term, highly liquid, readily convertible to known cash amounts, and within three months of maturity at purchase — 60-day commercial paper qualifies. (a) is wrong because six months exceeds the three-month maturity limit. (b) is wrong because receivables are operating assets, not liquid investments convertible to known cash on demand. (d) is wrong because restricted cash is not available for general use and is reported separately."
    }
  ],
  studyGuide: `<h3>Module 7 Study Guide — Cash and Internal Control</h3>
<h3>Internal control: the essentials</h3>
<ul><li><strong>Definition:</strong> plan of organization + coordinated methods to (1) safeguard assets, (2) ensure reliable accounting data, (3) promote efficiency, (4) encourage policy compliance. Provides <em>reasonable</em> assurance.</li>
<li><strong>SOX (2002):</strong> public-company managers must document/assess internal control; auditors report on it.</li></ul>
<h3>COSO's five components</h3>
<ul><li><strong>Control environment</strong> — tone at the top, ethics, org structure.</li><li><strong>Risk assessment</strong> — identify/analyze risks to objectives.</li><li><strong>Control activities</strong> — the procedures (approvals, reconciliations, segregation).</li><li><strong>Information &amp; communication</strong> — capture and communicate transaction data.</li><li><strong>Monitoring</strong> — watch controls over time and fix breakdowns.</li></ul>
<h3>Control activity principles</h3>
<ul><li><strong>Establishment of responsibility:</strong> one person per task.</li><li><strong>Segregation of duties:</strong> separate authorization, recording, and custody.</li><li><strong>Documentation procedures:</strong> pre-numbered documents for every transaction.</li><li><strong>Physical controls:</strong> safes, locks, passwords, alarms.</li><li><strong>Independent internal verification:</strong> independent person checks records (bank reconciliation).</li><li><strong>Human resource controls:</strong> bonding, mandatory vacations, rotation.</li></ul>
<h3>Limitations</h3>
<ul><li>Human error/judgment, <strong>collusion</strong>, management override, cost vs. benefit, changing conditions.</li></ul>
<h3>Bank reconciliation cheat sheet</h3>
<ul><li><strong>Bank side (no entries):</strong> + deposits in transit, − outstanding checks.</li><li><strong>Book side (journalize each):</strong> + collections/interest, − service charges, − NSF checks, ± book errors.</li><li>Both sides must equal the same <strong>adjusted balance</strong>.</li><li>NSF entry: Dr Accounts Receivable, Cr Cash. Service charge: Dr expense, Cr Cash.</li></ul>
<h3>Petty cash</h3>
<ul><li><strong>Imprest system:</strong> fixed fund; replenishments restore it exactly.</li><li>Establish: Dr Petty Cash, Cr Cash. Replenish: Dr expenses, Dr/Cr Cash Over and Short (debit = shortage/expense; credit = overage/revenue), Cr Cash.</li></ul>
<h3>Reporting cash</h3>
<ul><li><strong>Cash equivalents:</strong> ≤ 3 months to maturity at purchase, highly liquid (T-bills, money market funds, commercial paper).</li><li><strong>Restricted cash</strong> reported separately; bank overdrafts are current liabilities.</li></ul>`
};
