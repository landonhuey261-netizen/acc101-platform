// ACC 101 - Module 1: Accounting in Business
module.exports = {
  number: 1,
  slug: "accounting-in-business",
  title: "Accounting in Business",
  estTime: "3–4 hours",
  objectives: [
    "Define accounting and explain how it differs from bookkeeping.",
    "Identify the internal and external users of accounting information and describe what each group needs from it.",
    "Explain why ethics matter in accounting and how GAAP, the FASB, and the IASB shape financial reporting.",
    "Compare the four main forms of business organization — sole proprietorship, partnership, LLC, and corporation — including their pros and cons.",
    "Apply the accounting equation (Assets = Liabilities + Stockholders' Equity) to analyze business transactions.",
    "Describe the four financial statements, what each one reports, and how they connect to one another."
  ],
  sections: [
    {
      heading: "What Accounting Is — and Why It Matters",
      html: `
<p>Every business, from a neighborhood food truck to a global airline, runs on decisions: What should we charge? Can we afford to hire? Should we borrow money to expand? <strong>Accounting</strong> is the information system that makes those decisions possible. Formally, accounting is the process of <strong>identifying</strong>, <strong>recording</strong>, and <strong>communicating</strong> the economic events of an organization to people who need that information to make decisions.</p>
<p>Notice the three steps. <em>Identifying</em> means selecting which events count as accounting events — buying equipment counts; chatting with a supplier about the weather does not. <em>Recording</em> means capturing those events in a systematic, chronological way. <em>Communicating</em> means summarizing the records into reports that decision-makers can actually use. Miss any one of the three and the system fails: unidentified events never get recorded, unrecorded events can't be reported, and unreported information can't guide a decision.</p>
<p>Accounting is often confused with <strong>bookkeeping</strong>. Bookkeeping is the mechanical part — entering transactions, keeping the records. It is a subset of accounting, the way hammering nails is a subset of carpentry. Accounting adds analysis, interpretation, and communication on top of the bookkeeping foundation.</p>
<p>The people who rely on accounting information fall into two groups:</p>
<ul>
<li><strong>Internal users</strong> manage the company from the inside — owners, managers, department heads, and employees. A store manager uses sales reports to schedule staff; a CEO uses profit reports to decide whether to open a new location. The branch of accounting that serves them is called <strong>managerial accounting</strong>: detailed, forward-looking, and tailored to specific decisions.</li>
<li><strong>External users</strong> sit outside the company — investors deciding whether to buy stock, creditors (banks and suppliers) deciding whether to lend, and government agencies such as tax authorities. They receive <strong>financial accounting</strong>: standardized reports prepared under strict rules so that a bank can compare two different companies fairly.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Financial accounting looks backward and follows strict rules (so outsiders can trust and compare it). Managerial accounting looks forward and follows no fixed rules (so insiders can get exactly what they need). This course is about <em>financial</em> accounting.</div>
<p>Here is why any of this matters to you personally. Investors use accounting to avoid putting money into companies that look healthy but are not. Banks use it to decide loan terms. Employees use it to judge whether their employer is stable. And if you ever run a business, your accounting records are the dashboard that tells you whether you are actually making money or just feel like you are.</p>`
    },
    {
      heading: "Ethics and the Rules of the Game: GAAP, IFRS, the FASB, and the IASB",
      html: `
<p>Accounting numbers guide billions of dollars in decisions, which makes them tempting to manipulate. In the early 2000s, companies like Enron and WorldCom hid debt and invented profits through accounting fraud. Investors lost fortunes, employees lost retirement savings, and public trust in financial reporting collapsed. The lesson: accounting is only useful if people believe the numbers — and belief requires both <strong>ethics</strong> and enforceable <strong>standards</strong>.</p>
<p>In the United States, financial reporting follows <strong>GAAP</strong> — <strong>Generally Accepted Accounting Principles</strong>, the common set of rules, conventions, and procedures that define acceptable accounting practice. GAAP is developed and maintained by the <strong>FASB</strong>, the <strong>Financial Accounting Standards Board</strong>, an independent private-sector body. When a new issue arises (how should companies report leases? crypto holdings?), the FASB researches it and issues a standard that all U.S. companies follow.</p>
<p>Outside the United States, most of the world uses <strong>IFRS</strong> — <strong>International Financial Reporting Standards</strong> — issued by the <strong>IASB</strong>, the <strong>International Accounting Standards Board</strong>, based in London. More than 140 countries require or permit IFRS. The two systems are similar in spirit but differ in details; for example, IFRS permits companies to revalue certain long-term assets upward to fair value, while U.S. GAAP generally sticks to historical cost.</p>
<p>Why does this matter in an introductory course? Because every rule you learn in this class — when to record revenue, how to measure inventory, what counts as an asset — exists to make financial statements <strong>relevant</strong> (useful for decisions), <strong>faithfully represented</strong> (complete, neutral, and free from error), and <strong>comparable</strong> across companies and time periods. You are not memorizing arbitrary procedures; you are learning the language in which businesses report honestly.</p>
<div class="callout"><strong>Key idea:</strong> U.S. companies follow GAAP (set by the FASB); most non-U.S. companies follow IFRS (set by the IASB). Both exist so that financial statements are trustworthy and comparable. When in doubt about a rule's purpose, ask: does it make the statements more honest or more comparable?</div>
<p>One practical consequence: after the early-2000s scandals, Congress passed the <strong>Sarbanes-Oxley Act (2002)</strong>, which holds company executives personally responsible for the accuracy of financial reports and requires strong internal controls. Ethics in accounting is not a slogan — it is backed by law, and accountants who sign off on fraudulent statements can face prison.</p>`
    },
    {
      heading: "Forms of Business Organization",
      html: `
<p>Accounting always reports on a specific <strong>business entity</strong> — a concept called the <strong>economic entity assumption</strong>, which says the business's finances must be kept separate from its owners' personal finances. But businesses come in different legal shapes, and the shape affects ownership, liability, and taxes. The four you must know:</p>
<ul>
<li><strong>Sole proprietorship.</strong> A business owned by one person — a freelance designer, a lawn-care service, a food cart. <em>Pros:</em> simple and cheap to start, owner keeps all profits, minimal regulation. <em>Cons:</em> <strong>unlimited liability</strong> (the owner is personally responsible for all business debts — creditors can go after the owner's house), hard to raise large amounts of capital, business ends if the owner dies or quits.</li>
<li><strong>Partnership.</strong> A business owned by two or more people who agree to share profits, losses, and management — common for law firms, medical practices, and small ventures. <em>Pros:</em> easy to form, combines the partners' skills and capital, profits taxed once at the partner level. <em>Cons:</em> each partner generally has <strong>unlimited liability</strong> for the partnership's debts (including debts created by the other partners' decisions), and disagreements can destroy the business.</li>
<li><strong>Limited liability company (LLC).</strong> A hybrid: owners (called members) get the <strong>limited liability</strong> of a corporation with the simpler operation and pass-through taxation of a partnership. <em>Pros:</em> owners' personal assets are protected, flexible management, profits taxed only once. <em>Cons:</em> more paperwork and cost than a sole proprietorship, rules vary by state, harder to raise capital than a corporation.</li>
<li><strong>Corporation.</strong> A separate legal entity owned by <strong>stockholders</strong> (shareholders) who hold shares of stock. Think Apple or your local incorporated contractor. <em>Pros:</em> <strong>limited liability</strong> (owners can lose only what they invested), easy to raise capital by selling stock, <strong>unlimited life</strong> (the corporation continues even if owners change), ownership is easily transferred by selling shares. <em>Cons:</em> expensive and complex to form, heavily regulated, and profits can be <strong>double-taxed</strong> (once as corporate income, again as dividends to stockholders).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The big trade-off is <em>liability vs. simplicity</em>. Sole proprietorships and partnerships are simple but expose owners to unlimited liability. LLCs and corporations shield owners' personal assets but cost more to create and run. As businesses grow and take on risk, they tend to migrate toward the corporation form — which is why most large companies whose statements you will read are corporations.</div>
<p>For this course, we will mostly analyze corporations, because corporations produce the published financial statements that investors and creditors use. But the accounting <em>mechanics</em> — the equation, debits and credits, the statements — work the same for every form.</p>`
    },
    {
      heading: "The Accounting Equation",
      html: `
<p>All of financial accounting rests on one equation:</p>
<div class="formula">Assets = Liabilities + Stockholders' Equity</div>
<p><strong>Assets</strong> are resources a business owns or controls that are expected to provide future benefit — cash, inventory, equipment, buildings. <strong>Liabilities</strong> are what the business <em>owes</em> — debts to suppliers (accounts payable), bank loans (notes payable), wages owed to employees. <strong>Stockholders' equity</strong> is the owners' claim on the business: what would be left for owners if all assets were sold and all liabilities paid. It increases when owners invest or the business earns a profit, and decreases when the business loses money or pays <strong>dividends</strong> (distributions of profit to owners).</p>
<p>The equation must <em>always</em> balance. Every business transaction — every economic event that the accounting system records — changes at least two parts of the equation so that the two sides stay equal. Learning to analyze transactions this way is the single most important skill in this module.</p>
<div class="callout"><strong>Key idea:</strong> Think of the equation as a scale. A transaction can add equal weight to both sides (borrow cash: assets up, liabilities up), move weight within one side (buy equipment for cash: one asset up, one asset down), or add to one side while subtracting from the other (pay a debt with cash: assets down, liabilities down). It can never tip the scale.</div>
<p><strong>Worked Example 1 — Transaction analysis.</strong> Ana Rivera starts Rivera Landscaping Co. in January. Here are the company's first ten transactions and their effect on the accounting equation (amounts in dollars):</p>
<table class="jentry">
<thead><tr><th>Transaction</th><th>Assets</th><th>=</th><th>Liabilities</th><th>+</th><th>Stockholders' Equity</th></tr></thead>
<tbody>
<tr><td>(a) Owner invests $40,000 cash in exchange for stock</td><td class="num">40,000</td><td>=</td><td class="num">0</td><td>+</td><td class="num">40,000</td></tr>
<tr><td>(b) Borrows $20,000 from the bank (note payable)</td><td class="num">60,000</td><td>=</td><td class="num">20,000</td><td>+</td><td class="num">40,000</td></tr>
<tr><td>(c) Buys equipment for $9,000 cash</td><td class="num">60,000</td><td>=</td><td class="num">20,000</td><td>+</td><td class="num">40,000</td></tr>
<tr><td>(d) Pays $6,000 cash for a one-year insurance policy</td><td class="num">60,000</td><td>=</td><td class="num">20,000</td><td>+</td><td class="num">40,000</td></tr>
<tr><td>(e) Buys $4,000 of supplies on account</td><td class="num">64,000</td><td>=</td><td class="num">24,000</td><td>+</td><td class="num">40,000</td></tr>
<tr><td>(f) Performs $8,000 of landscaping services on account</td><td class="num">72,000</td><td>=</td><td class="num">24,000</td><td>+</td><td class="num">48,000</td></tr>
<tr><td>(g) Collects $5,000 cash from customers on account</td><td class="num">72,000</td><td>=</td><td class="num">24,000</td><td>+</td><td class="num">48,000</td></tr>
<tr><td>(h) Pays $3,500 in employee salaries</td><td class="num">68,500</td><td>=</td><td class="num">24,000</td><td>+</td><td class="num">44,500</td></tr>
<tr><td>(i) Pays $1,000 owed to a supplier</td><td class="num">67,500</td><td>=</td><td class="num">23,000</td><td>+</td><td class="num">44,500</td></tr>
<tr><td>(j) Pays a $500 cash dividend to the owner</td><td class="num">67,000</td><td>=</td><td class="num">23,000</td><td>+</td><td class="num">44,000</td></tr>
</tbody>
</table>
<p>Study each row. In (c), cash falls $9,000 but equipment rises $9,000, so total assets do not change — one asset simply replaces another. In (f), earning revenue on account raises both an asset (accounts receivable) and equity (retained earnings via revenue). In (h), paying salaries is an <strong>expense</strong>: it reduces assets and reduces equity. In (j), dividends are <em>not</em> an expense — they are a distribution of profit, but they still reduce both assets and equity. The equation balances after every single transaction.</p>
<p>It helps to expand equity to see where profits and distributions flow:</p>
<div class="formula">Assets = Liabilities + Common Stock + Revenues − Expenses − Dividends</div>
<p>Check the final row: liabilities $23,000 (notes payable $20,000 + accounts payable $3,000) plus equity $44,000 (common stock $40,000 + revenue $8,000 − salaries expense $3,500 − dividends $500) equals assets $67,000 (cash $45,000 + accounts receivable $3,000 + supplies $4,000 + prepaid insurance $6,000 + equipment $9,000). Balanced: $23,000 + $44,000 = $67,000.</p>`
    },
    {
      heading: "The Four Financial Statements",
      html: `
<p>The accounting system distills everything into four financial statements, prepared in a specific order because each one feeds the next:</p>
<ol>
<li><strong>Income statement</strong> — reports <strong>revenues</strong> minus <strong>expenses</strong> for a <em>period of time</em> (a month, a quarter, a year), arriving at <strong>net income</strong> (or <strong>net loss</strong>). It answers: <em>did we make money?</em> Revenues are the amounts earned from selling goods or services; expenses are the costs of earning those revenues.</li>
<li><strong>Statement of retained earnings</strong> — explains how <strong>retained earnings</strong> (the accumulated profits kept in the business) changed during the period: beginning balance + net income − dividends = ending balance. It answers: <em>what happened to our accumulated profits?</em></li>
<li><strong>Balance sheet</strong> — reports <strong>assets, liabilities, and stockholders' equity</strong> at a <em>single point in time</em>. It is a snapshot of the accounting equation. It answers: <em>what do we own, what do we owe, and what is left for owners?</em></li>
<li><strong>Statement of cash flows</strong> — reports where cash came from and where it went during the period, grouped into <strong>operating</strong> (day-to-day business), <strong>investing</strong> (buying/selling long-term assets), and <strong>financing</strong> (borrowing, repaying, owner investments, dividends) activities. It answers: <em>why did our cash balance change?</em> A profitable company can still run out of cash — this statement reveals that.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> The income statement and statement of cash flows cover a <em>period</em> ("for the month ended January 31"); the balance sheet is a <em>point in time</em> ("as of January 31"). Net income flows into retained earnings, and ending cash must agree with cash on the balance sheet. The statements articulate — they fit together.</div>
<p><strong>Worked Example 2 — A full set of statements.</strong> Continuing Rivera Landscaping Co. from Worked Example 1, here are January's statements (all amounts in dollars):</p>
<p><strong>Income statement</strong> (for the month ended January 31):</p>
<table class="jentry">
<thead><tr><th>Rivera Landscaping Co. — Income Statement</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Service revenue</td><td class="num">$8,000</td></tr>
<tr><td>Salaries expense</td><td class="num">(3,500)</td></tr>
<tr><td><strong>Net income</strong></td><td class="num"><strong>$4,500</strong></td></tr>
</tbody>
</table>
<p><strong>Statement of retained earnings</strong> (for the month ended January 31):</p>
<table class="jentry">
<thead><tr><th>Rivera Landscaping Co. — Statement of Retained Earnings</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Retained earnings, January 1</td><td class="num">$0</td></tr>
<tr><td>Add: Net income</td><td class="num">4,500</td></tr>
<tr><td>Less: Dividends</td><td class="num">(500)</td></tr>
<tr><td><strong>Retained earnings, January 31</strong></td><td class="num"><strong>$4,000</strong></td></tr>
</tbody>
</table>
<p><strong>Balance sheet</strong> (as of January 31):</p>
<table class="jentry">
<thead><tr><th>Rivera Landscaping Co. — Balance Sheet</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td><strong>Assets</strong></td><td class="num"></td></tr>
<tr><td class="indent">Cash</td><td class="num">$45,000</td></tr>
<tr><td class="indent">Accounts receivable</td><td class="num">3,000</td></tr>
<tr><td class="indent">Supplies</td><td class="num">4,000</td></tr>
<tr><td class="indent">Prepaid insurance</td><td class="num">6,000</td></tr>
<tr><td class="indent">Equipment</td><td class="num">9,000</td></tr>
<tr><td><strong>Total assets</strong></td><td class="num"><strong>$67,000</strong></td></tr>
<tr><td><strong>Liabilities</strong></td><td class="num"></td></tr>
<tr><td class="indent">Accounts payable</td><td class="num">$3,000</td></tr>
<tr><td class="indent">Notes payable</td><td class="num">20,000</td></tr>
<tr><td><strong>Total liabilities</strong></td><td class="num"><strong>$23,000</strong></td></tr>
<tr><td><strong>Stockholders' equity</strong></td><td class="num"></td></tr>
<tr><td class="indent">Common stock</td><td class="num">$40,000</td></tr>
<tr><td class="indent">Retained earnings</td><td class="num">4,000</td></tr>
<tr><td><strong>Total stockholders' equity</strong></td><td class="num"><strong>$44,000</strong></td></tr>
<tr><td><strong>Total liabilities and stockholders' equity</strong></td><td class="num"><strong>$67,000</strong></td></tr>
</tbody>
</table>
<p>Verify the articulation: net income $4,500 from the income statement feeds retained earnings, which ends at $4,000 on the balance sheet, where assets ($67,000) equal liabilities plus equity ($23,000 + $44,000).</p>
<p><strong>Statement of cash flows</strong> (for the month ended January 31) — a condensed version:</p>
<table class="jentry">
<thead><tr><th>Rivera Landscaping Co. — Statement of Cash Flows</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Cash from operating activities: collected from customers $5,000 − paid for insurance $6,000 − paid salaries $3,500 − paid suppliers $1,000</td><td class="num">$(5,500)</td></tr>
<tr><td>Cash used by investing activities: purchased equipment</td><td class="num">(9,000)</td></tr>
<tr><td>Cash from financing activities: owner investment $40,000 + bank loan $20,000 − dividends $500</td><td class="num">59,500</td></tr>
<tr><td><strong>Net increase in cash</strong> (−5,500 − 9,000 + 59,500)</td><td class="num"><strong>$45,000</strong></td></tr>
<tr><td>Cash, January 1</td><td class="num">0</td></tr>
<tr><td><strong>Cash, January 31</strong></td><td class="num"><strong>$45,000</strong></td></tr>
</tbody>
</table>
<p>Ending cash $45,000 agrees with cash on the balance sheet — as it must. Notice something instructive: the company earned $4,500 of net income but <em>used</em> $5,500 of cash in operations, because it prepaid a year of insurance. Profit and cash are different things, and this statement is the bridge between them.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>What you should take away from Module 1:</strong></p>
<ul>
<li>Accounting identifies, records, and communicates economic events; bookkeeping is only the recording step.</li>
<li>Internal users (managers) get managerial accounting; external users (investors, creditors) get rule-based financial accounting.</li>
<li>GAAP (FASB) governs U.S. reporting; IFRS (IASB) governs most of the rest of the world. Ethics and standards exist so the numbers can be trusted.</li>
<li>Sole proprietorships and partnerships are simple but carry unlimited liability; LLCs and corporations protect owners' personal assets at the cost of complexity.</li>
<li>Every transaction keeps <strong>Assets = Liabilities + Stockholders' Equity</strong> in balance; expenses and dividends reduce equity, revenues increase it.</li>
<li>The four statements are prepared in order — income statement, statement of retained earnings, balance sheet, statement of cash flows — and they articulate with one another.</li>
</ul>
<div class="mistake"><strong>Common mistake:</strong> Treating the purchase of an asset as an expense. When Rivera paid $6,000 for a one-year insurance policy, that was <em>not</em> a $6,000 expense in January — it was an exchange of one asset (cash) for another (prepaid insurance). The expense is recognized gradually as the insurance is used up, which is exactly what adjusting entries (Module 3) will handle. Ask yourself: did this payment create a <em>future benefit</em>? If yes, it is an asset, not an expense.</div>
<div class="mistake"><strong>Common mistake:</strong> Confusing revenue with cash collected, and net income with cash in the bank. Rivera reported $8,000 of revenue but collected only $5,000 in cash, and earned $4,500 of net income while operating activities <em>used</em> $5,500 of cash. Under accrual accounting, earning and collecting are separate events — Module 3 makes this precise.</div>`
    }
  ],
  keyTerms: [
    { term: "Accounting", def: "The information system that identifies, records, and communicates the economic events of an organization to interested users." },
    { term: "Bookkeeping", def: "The mechanical process of recording transactions; a subset of accounting that does not include analysis or communication." },
    { term: "Financial accounting", def: "The branch of accounting that provides standardized, rule-based financial statements to external users such as investors and creditors." },
    { term: "Managerial accounting", def: "The branch of accounting that provides detailed, forward-looking information to internal users (managers) for planning and control; not bound by GAAP." },
    { term: "Internal users", def: "People inside the company — managers, owners, employees — who use accounting information to run the business." },
    { term: "External users", def: "People outside the company — investors, creditors, tax authorities — who use financial statements to make decisions about the company." },
    { term: "Ethics", def: "Standards of right and wrong conduct; in accounting, the obligation to report honestly, reinforced by laws such as the Sarbanes-Oxley Act." },
    { term: "GAAP (Generally Accepted Accounting Principles)", def: "The common set of accounting rules, conventions, and procedures used for financial reporting in the United States." },
    { term: "FASB (Financial Accounting Standards Board)", def: "The independent private-sector body that develops and issues U.S. GAAP." },
    { term: "IFRS (International Financial Reporting Standards)", def: "The set of accounting standards issued by the IASB and used in more than 140 countries outside the United States." },
    { term: "IASB (International Accounting Standards Board)", def: "The London-based body that develops and issues IFRS." },
    { term: "Sole proprietorship", def: "A business owned by one person; simple to form but the owner has unlimited personal liability for business debts." },
    { term: "Partnership", def: "A business owned by two or more persons who share profits, losses, and management; partners generally face unlimited liability." },
    { term: "Limited liability company (LLC)", def: "A hybrid business form giving owners limited liability with simpler operation and pass-through taxation." },
    { term: "Corporation", def: "A separate legal entity owned by stockholders; offers limited liability, easy capital-raising, and unlimited life, but is costly to form and may face double taxation." },
    { term: "Accounting equation", def: "Assets = Liabilities + Stockholders' Equity; the foundation of the double-entry system, which must balance after every transaction." },
    { term: "Assets", def: "Resources owned or controlled by a business that are expected to provide future economic benefit." },
    { term: "Liabilities", def: "Obligations of a business to outsiders — amounts owed to creditors, suppliers, lenders, and employees." },
    { term: "Stockholders' equity", def: "The owners' residual claim on assets after liabilities are paid; increases with investments and net income, decreases with dividends and net losses." },
    { term: "Retained earnings", def: "The accumulated net income kept in the business rather than distributed as dividends." },
    { term: "Dividends", def: "Distributions of profit to stockholders; they reduce retained earnings but are not an expense." },
    { term: "Revenue", def: "Amounts earned from selling goods or performing services; increases stockholders' equity." },
    { term: "Expenses", def: "Costs incurred to earn revenue; decrease stockholders' equity." },
    { term: "Net income (net loss)", def: "Revenues minus expenses for a period; positive is net income, negative is net loss." },
    { term: "Income statement", def: "Financial statement reporting revenues, expenses, and net income for a period of time." },
    { term: "Balance sheet", def: "Financial statement reporting assets, liabilities, and stockholders' equity at a specific point in time." },
    { term: "Statement of cash flows", def: "Financial statement reporting cash inflows and outflows for a period, classified as operating, investing, and financing activities." }
  ],
  video: {
    title: "ACCOUNTING BASICS: a Guide to (Almost) Everything",
    embedUrl: "https://www.youtube.com/embed/yYX4bvQSqbo",
    note: "Watch this 13-minute tour first. It walks through the entire accounting cycle — the equation, debits and credits, journal entries, T-accounts, trial balance, adjusting entries, financial statements, and closing entries — so you can see where Modules 1 through 4 are heading before we build each piece in depth.",
    more: [
      { title: "Fundamentals of Accounting — 42-lecture college-style series (supplement)", url: "http://www.youtube.com/playlist?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Which of the following best describes the primary purpose of financial accounting?</p><p>(a) To provide detailed, forward-looking reports for internal managers<br>(b) To provide standardized, rule-based financial information to external users for decision-making<br>(c) To mechanically record transactions in chronological order<br>(d) To prepare tax returns for the business</p>",
      solution: "<p><strong>Answer: (b).</strong> Step 1: Recall the two branches. Financial accounting serves <em>external</em> users (investors, creditors) with standardized reports; managerial accounting serves internal users. Step 2: Eliminate (a) — that describes managerial accounting. Step 3: Eliminate (c) — that describes bookkeeping, only the recording step. Step 4: Eliminate (d) — tax accounting is a separate specialty. Therefore (b) is the best description.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Harbor Services has total assets of $120,000 and total liabilities of $75,000. What is stockholders' equity? Show the equation you used.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Write the accounting equation: Assets = Liabilities + Stockholders' Equity. Step 2: Rearrange to solve for equity: Equity = Assets − Liabilities. Step 3: Substitute: $120,000 − $75,000 = <strong>$45,000</strong>. Step 4: Check: $75,000 + $45,000 = $120,000. Balanced.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A company purchases $10,000 of equipment by paying cash. Which statement correctly describes the effect on the accounting equation?</p><p>(a) Assets increase $10,000 and liabilities increase $10,000<br>(b) Assets decrease $10,000 and stockholders' equity decreases $10,000<br>(c) One asset increases $10,000 and another asset decreases $10,000; total assets are unchanged<br>(d) Assets increase $10,000 and stockholders' equity increases $10,000</p>",
      solution: "<p><strong>Answer: (c).</strong> Step 1: Identify the accounts affected: Equipment (asset) increases $10,000; Cash (asset) decreases $10,000. Step 2: No liability or equity account is involved, so (a), (b), and (d) are impossible — (a) invents a liability, (b) treats a purchase as an expense/loss, and (d) invents owner investment. Step 3: Total assets = +$10,000 − $10,000 = $0 change. The equation stays balanced through a same-side exchange.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Which form of business organization gives owners limited liability AND avoids double taxation of profits?</p><p>(a) Sole proprietorship<br>(b) General partnership<br>(c) Limited liability company (LLC)<br>(d) Corporation</p>",
      solution: "<p><strong>Answer: (c).</strong> Step 1: Limited liability rules out (a) and (b) — sole proprietors and general partners face unlimited personal liability. Step 2: Between (c) and (d), both offer limited liability, but corporations face potential double taxation (corporate tax + tax on dividends), while LLCs pass profits through to members' personal tax returns. Step 3: Therefore the LLC uniquely satisfies <em>both</em> conditions.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Delta Consulting earned $95,000 in service revenue and incurred $62,000 in total expenses during March. Compute net income (or net loss) and state which financial statement reports it.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Net income = Revenues − Expenses. Step 2: $95,000 − $62,000 = <strong>$33,000 net income</strong> (positive, so income not loss). Step 3: Net income is reported on the <strong>income statement</strong>, which covers the period (the month of March).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A financial statement is titled 'as of December 31, 2026' and reports cash, accounts payable, and common stock. Which statement is it, and how do you know?</p>",
      solution: "<p><strong>Answer: the balance sheet.</strong> Step 1: The heading says 'as of' a single date — that is point-in-time language, used only by the balance sheet (the income statement and statement of cash flows say 'for the period ended'). Step 2: The line items are assets (cash), liabilities (accounts payable), and equity (common stock) — exactly the three balance-sheet categories from the accounting equation.</p>"
    },
    {
      prompt: "<p><strong>Problem 7.</strong> Retained earnings were $20,000 on January 1. During the year the company earned net income of $12,000 and paid dividends of $3,000. Compute retained earnings on December 31.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Use the retained earnings formula: Beginning + Net income − Dividends = Ending. Step 2: $20,000 + $12,000 = $32,000. Step 3: $32,000 − $3,000 = <strong>$29,000</strong>. Step 4: Sanity check — dividends are a distribution, not an expense, so they reduce retained earnings directly without touching net income.</p>"
    },
    {
      prompt: "<p><strong>Problem 8.</strong> Which of the following transactions increases <em>both</em> assets and liabilities?</p><p>(a) Paying cash to settle an account payable<br>(b) Borrowing $15,000 cash from a bank by signing a note<br>(c) Collecting cash from a customer on account<br>(d) Paying a cash dividend to stockholders</p>",
      solution: "<p><strong>Answer: (b).</strong> Step 1: Analyze each. (a): cash down, payable down — both decrease. (b): cash (asset) up $15,000 and notes payable (liability) up $15,000 — both increase, equation balanced. (c): cash up, receivables down — same-side exchange, no change in totals. (d): cash down, equity down — assets and equity decrease. Step 2: Only (b) increases both sides.</p>"
    }
  ],
  quiz: [
    {
      q: "Accounting is best defined as:",
      choices: ["The mechanical recording of transactions in journals", "The process of identifying, recording, and communicating economic events to decision-makers", "The preparation of tax returns for businesses", "The auditing of financial statements by CPAs"],
      answer: 1,
      explanation: "Correct: (b). The three-step definition — identify, record, communicate — is the textbook definition of accounting. (a) describes only bookkeeping, the recording subset. (c) is tax accounting, a specialty within the field, not the definition of accounting itself. (d) is auditing, which verifies accounting output but is not what accounting is."
    },
    {
      q: "Which of the following is an EXTERNAL user of accounting information?",
      choices: ["The company's production manager", "The company's chief executive officer", "A bank deciding whether to approve a business loan", "The company's internal audit team"],
      answer: 2,
      explanation: "Correct: (c). A bank is outside the company and uses financial statements to make a lending decision — a classic external user. (a), (b), and (d) are all inside the company (managers, executives, internal auditors), making them internal users who rely on managerial accounting."
    },
    {
      q: "U.S. GAAP is developed and issued by:",
      choices: ["The IASB", "The U.S. Congress", "The FASB", "The Securities and Exchange Commission directly"],
      answer: 2,
      explanation: "Correct: (c). The Financial Accounting Standards Board (FASB) is the independent private-sector body that sets U.S. GAAP. (a) is wrong — the IASB issues IFRS, the international standards. (b) is wrong — Congress writes laws (like Sarbanes-Oxley), not accounting standards. (d) is wrong — the SEC oversees public-company reporting and delegates standard-setting to the FASB."
    },
    {
      q: "A major disadvantage of the corporate form of business organization is:",
      choices: ["Unlimited personal liability of the stockholders", "Potential double taxation of profits", "Inability to raise large amounts of capital", "Limited life of the business"],
      answer: 1,
      explanation: "Correct: (b). Corporate profits can be taxed once at the corporate level and again when distributed as dividends — the classic corporate disadvantage. (a) is wrong — limited liability is a corporate advantage; stockholders can lose only their investment. (c) is wrong — corporations raise capital more easily than other forms by selling stock. (d) is wrong — corporations have unlimited (continuous) life."
    },
    {
      q: "If total liabilities are $60,000 and stockholders' equity is $90,000, total assets must be:",
      choices: ["$30,000", "$90,000", "$150,000", "Cannot be determined from this information"],
      answer: 2,
      explanation: "Correct: (c). Assets = Liabilities + Equity = $60,000 + $90,000 = $150,000. (a) is wrong — it subtracts instead of adding ($90,000 − $60,000). (b) is wrong — it just repeats the equity amount, ignoring liabilities. (d) is wrong — the equation always determines assets exactly from the other two."
    },
    {
      q: "Paying $2,000 cash for a six-month insurance policy is recorded as:",
      choices: ["A $2,000 expense immediately, because cash was paid", "An exchange of one asset for another; no expense yet", "A $2,000 liability", "A decrease in stockholders' equity of $2,000"],
      answer: 1,
      explanation: "Correct: (b). The payment creates a future benefit (six months of coverage), so cash decreases and prepaid insurance (an asset) increases — a same-side exchange. (a) is wrong — expense is recognized as the insurance is used up, not when cash is paid. (c) is wrong — no obligation to an outsider was created. (d) is wrong — equity changes only through revenues, expenses, investments, or dividends; none occurred here."
    },
    {
      q: "Net income appears on which two financial statements?",
      choices: ["The income statement and the balance sheet", "The income statement and the statement of retained earnings", "The balance sheet and the statement of cash flows", "The statement of retained earnings and the balance sheet"],
      answer: 1,
      explanation: "Correct: (b). Net income is computed on the income statement and then flows into the statement of retained earnings (beginning balance + net income − dividends). (a) is wrong — the balance sheet shows ending retained earnings, not net income itself. (c) is wrong — the cash flow statement reconciles cash, a different measure from accrual net income. (d) is wrong — again, the balance sheet carries only the resulting retained earnings balance."
    },
    {
      q: "A company with $50,000 of beginning retained earnings reports net income of $18,000 and declares dividends of $7,000. Ending retained earnings are:",
      choices: ["$25,000", "$61,000", "$43,000", "$75,000"],
      answer: 1,
      explanation: "Correct: (b). Ending = $50,000 + $18,000 − $7,000 = $61,000. (a) is wrong — $25,000 = $18,000 + $7,000, which adds dividends instead of subtracting them. (c) is wrong — $43,000 = $50,000 − $7,000, which omits net income. (d) is wrong — $75,000 = $50,000 + $18,000 + $7,000, which treats dividends as an addition."
    }
  ],
  studyGuide: `
<h3>Module 1 — Accounting in Business: Quick Reference</h3>
<p><strong>Accounting</strong> = identify + record + communicate economic events. Bookkeeping is only the recording step.</p>
<p><strong>Users:</strong> Internal (managers → managerial accounting, forward-looking, no fixed rules) vs. external (investors, creditors → financial accounting, backward-looking, GAAP rules).</p>
<p><strong>Standards:</strong> GAAP = U.S. rules, set by the FASB. IFRS = international rules, set by the IASB. Sarbanes-Oxley (2002) made executives legally responsible for report accuracy.</p>
<p><strong>Business forms:</strong> Sole proprietorship (simple, unlimited liability) → Partnership (shared, unlimited liability) → LLC (limited liability, pass-through tax) → Corporation (limited liability, easy capital, possible double tax).</p>
<div class="formula">Assets = Liabilities + Stockholders' Equity</div>
<p><strong>Expanded:</strong> Assets = Liabilities + Common Stock + Revenues − Expenses − Dividends</p>
<p><strong>Transaction logic:</strong> Every transaction keeps the equation balanced — both sides change equally, or one side exchanges internally.</p>
<p><strong>Four statements (in order):</strong> 1) Income statement — revenues minus expenses for a <em>period</em> → net income. 2) Statement of retained earnings — beginning + net income − dividends. 3) Balance sheet — assets, liabilities, equity at a <em>point in time</em>. 4) Statement of cash flows — operating, investing, financing cash flows for a period.</p>
<p><strong>Watch out:</strong> Buying an asset is not an expense. Revenue earned is not cash collected. Dividends are distributions, not expenses.</p>
`
}
