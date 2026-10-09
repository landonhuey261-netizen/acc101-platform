// ACC 101 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "Brightline Co. reports total assets of $120,000 and total liabilities of $75,000. What is the company's stockholders' equity?",
        choices: ["$195,000", "$45,000", "$75,000", "$120,000"],
        answer: 1,
        explanation: "Correct (b): The accounting equation is Assets = Liabilities + Equity, so Equity = 120,000 − 75,000 = $45,000. (a) $195,000 adds liabilities to assets instead of subtracting them. (c) $75,000 is the liabilities amount, not equity. (d) $120,000 is total assets, not the residual claim of the owners."
      },
      {
        module: 1,
        q: "Which of the following is an EXTERNAL user of accounting information?",
        choices: ["The company treasurer", "The production manager", "A bank loan officer", "The company controller"],
        answer: 2,
        explanation: "Correct (c): A bank loan officer works outside the company and uses financial statements to decide whether to lend — a classic external user, along with investors and regulators. (a), (b), and (d) are all employees who use accounting information to run the business, making them internal users."
      },
      {
        module: 1,
        q: "Which form of business organization gives ALL of its owners limited liability?",
        choices: ["Sole proprietorship", "Partnership", "All business forms", "Corporation"],
        answer: 3,
        explanation: "Correct (d): In a corporation, shareholders' liability is limited to their investment. (a) A sole proprietor is personally liable for all business debts. (b) General partners are personally liable for partnership obligations. (c) is wrong because only the corporation gives limited liability to every owner."
      },
      {
        module: 1,
        q: "Which financial statement reports a company's financial position at a specific point in time?",
        choices: ["Balance sheet", "Income statement", "Statement of cash flows", "Statement of retained earnings"],
        answer: 0,
        explanation: "Correct (a): The balance sheet reports assets, liabilities, and equity as of one date. (b) The income statement covers performance over a period of time. (c) The statement of cash flows covers cash inflows and outflows over a period. (d) The statement of retained earnings reconciles beginning and ending balances over a period."
      },
      {
        module: 2,
        q: "Ridge Co. pays $2,000 cash for advertising. The correct journal entry is:",
        choices: ["Debit Cash $2,000; credit Advertising Expense $2,000", "Debit Advertising Expense $2,000; credit Cash $2,000", "Debit Accounts Payable $2,000; credit Cash $2,000", "Debit Advertising Expense $2,000; credit Accounts Payable $2,000"],
        answer: 1,
        explanation: "Correct (b): Advertising Expense increases with a debit, and Cash (an asset) decreases with a credit. (a) reverses the entry. (c) wrongly involves Accounts Payable — nothing was bought on account. (d) wrongly credits Accounts Payable even though cash was paid immediately."
      },
      {
        module: 2,
        q: "Which account normally has a credit balance?",
        choices: ["Accounts Receivable", "Dividends", "Service Revenue", "Supplies"],
        answer: 2,
        explanation: "Correct (c): Revenues increase equity and therefore carry normal credit balances. (a) Accounts Receivable is an asset with a normal debit balance. (b) Dividends is a contra-equity account with a normal debit balance. (d) Supplies is an asset with a normal debit balance."
      },
      {
        module: 2,
        q: "On June 3, Marsh Consulting received $5,000 cash from a client for services already performed. The correct journal entry is:",
        choices: ["Debit Service Revenue $5,000; credit Cash $5,000", "Debit Accounts Receivable $5,000; credit Service Revenue $5,000", "Debit Cash $5,000; credit Unearned Revenue $5,000", "Debit Cash $5,000; credit Service Revenue $5,000"],
        answer: 3,
        explanation: "Correct (d): Cash was received for work already performed, so debit Cash and credit Service Revenue. (a) reverses the accounts. (b) uses Accounts Receivable, but cash — not a promise — was received. (c) uses Unearned Revenue, which applies only when cash arrives before the service is performed."
      },
      {
        module: 2,
        q: "A trial balance shows total debits of $84,300 and total credits of $83,400. Which error could explain the difference?",
        choices: ["A $900 debit was posted twice", "A $900 debit was recorded as a credit", "A $450 debit was omitted entirely", "A $450 credit was omitted entirely"],
        answer: 0,
        explanation: "Correct (a): Posting a $900 debit twice overstates debits by exactly $900, matching the $900 excess of debits over credits. (b) Recording a debit as a credit moves $900 off debits and $900 onto credits, creating a $1,800 difference. (c) and (d) each change one side by $450, which would produce a $450 difference, not $900."
      },
      {
        module: 3,
        q: "Under the accrual basis of accounting, revenue is recognized:",
        choices: ["When cash is received", "When the sale is made or the service is performed", "At the end of the fiscal year", "When the customer is billed"],
        answer: 1,
        explanation: "Correct (b): The revenue recognition principle requires recording revenue when it is earned — when goods are delivered or services performed. (a) describes the cash basis, not accrual accounting. (c) Year-end timing is irrelevant; earning can happen on any day. (d) Billing and earning can occur in different periods; billing alone does not create revenue."
      },
      {
        module: 3,
        q: "On March 1, Dana Co. paid $3,600 for a 12-month insurance policy. The March 31 adjusting entry includes:",
        choices: ["Debit Insurance Expense $3,600; credit Prepaid Insurance $3,600", "Debit Prepaid Insurance $300; credit Cash $300", "Debit Insurance Expense $300; credit Prepaid Insurance $300", "Debit Insurance Expense $3,300; credit Prepaid Insurance $3,300"],
        answer: 2,
        explanation: "Correct (c): One month has expired, so 3,600 / 12 = $300 moves from Prepaid Insurance (asset) to Insurance Expense: debit Insurance Expense $300, credit Prepaid Insurance $300. (a) expenses the entire policy although 11 months remain prepaid. (b) repeats the initial purchase entry and wrongly involves Cash. (d) uses $3,300, which has no basis — only one month expired."
      },
      {
        module: 3,
        q: "On October 1, a company received $12,000 cash for services to be performed evenly over 6 months. The December 31 adjusting entry includes:",
        choices: ["Debit Service Revenue $6,000; credit Unearned Revenue $6,000", "Debit Unearned Revenue $12,000; credit Service Revenue $12,000", "Debit Cash $6,000; credit Service Revenue $6,000", "Debit Unearned Revenue $6,000; credit Service Revenue $6,000"],
        answer: 3,
        explanation: "Correct (d): Three of six months have passed, so 12,000 x 3/6 = $6,000 is earned: debit Unearned Revenue $6,000, credit Service Revenue $6,000. (a) reverses the entry. (b) recognizes the full $12,000 although three months of service are still owed. (c) involves Cash, which was already received on October 1."
      },
      {
        module: 3,
        q: "Employees earned $4,500 in wages during the last three days of December, to be paid in January. The December 31 adjusting entry is:",
        choices: ["Debit Wages Expense $4,500; credit Wages Payable $4,500", "Debit Wages Payable $4,500; credit Wages Expense $4,500", "Debit Wages Expense $4,500; credit Cash $4,500", "No entry is needed until the wages are paid"],
        answer: 0,
        explanation: "Correct (a): The matching principle requires recording the December expense: debit Wages Expense $4,500, credit Wages Payable $4,500. (b) reverses the entry. (c) credits Cash, but nothing is paid until January. (d) ignores the accrual basis — waiting until payment would understate December expenses and liabilities."
      },
      {
        module: 3,
        q: "A consulting firm completed $7,200 of work in December but will not bill the client until January. The December 31 adjusting entry is:",
        choices: ["Debit Cash $7,200; credit Service Revenue $7,200", "Debit Accounts Receivable $7,200; credit Service Revenue $7,200", "Debit Service Revenue $7,200; credit Accounts Receivable $7,200", "Debit Unearned Revenue $7,200; credit Service Revenue $7,200"],
        answer: 1,
        explanation: "Correct (b): Revenue is earned but uncollected — an accrued revenue: debit Accounts Receivable $7,200, credit Service Revenue $7,200. (a) debits Cash, but no cash has arrived. (c) reverses the entry. (d) uses Unearned Revenue, which applies to cash received in advance — the opposite situation."
      },
      {
        module: 4,
        q: "Which of the following accounts is closed at the end of the accounting period?",
        choices: ["Cash", "Accounts Payable", "Service Revenue", "Equipment"],
        answer: 2,
        explanation: "Correct (c): Service Revenue is a temporary account closed to Income Summary each period. (a) Cash, (b) Accounts Payable, and (d) Equipment are permanent accounts whose balances carry forward to the next period."
      },
      {
        module: 4,
        q: "In the closing process, the $40,000 credit balance of Service Revenue is first transferred:",
        choices: ["Directly to Retained Earnings", "To Cash", "To Dividends", "To Income Summary"],
        answer: 3,
        explanation: "Correct (d): Revenues are closed to Income Summary first; its net balance then moves to Retained Earnings. (a) The transfer to Retained Earnings happens in a later closing entry, not directly. (b) Closing entries never touch Cash. (c) Dividends is a separate temporary account closed on its own."
      },
      {
        module: 4,
        q: "From the adjusted trial balance: Service Revenue $60,000; Salaries Expense $25,000; Rent Expense $10,000; Supplies Expense $3,000. Net income is:",
        choices: ["$22,000", "$35,000", "$25,000", "$60,000"],
        answer: 0,
        explanation: "Correct (a): Net income = 60,000 − 25,000 − 10,000 − 3,000 = $22,000. (b) $35,000 subtracts only salaries, omitting rent and supplies. (c) $25,000 is just the salaries expense amount. (d) $60,000 is revenue before any expenses."
      },
      {
        module: 4,
        q: "Which account would appear on the post-closing trial balance?",
        choices: ["Dividends", "Accounts Receivable", "Rent Expense", "Income Summary"],
        answer: 1,
        explanation: "Correct (b): Accounts Receivable is a permanent account that survives closing. (a) Dividends and (c) Rent Expense are temporary accounts closed to zero. (d) Income Summary is closed to zero when its balance transfers to Retained Earnings."
      },
      {
        module: 5,
        q: "A retailer purchases $10,000 of merchandise on account. Under the perpetual inventory system, the entry is:",
        choices: ["Debit Purchases $10,000; credit Accounts Payable $10,000", "Debit Cost of Goods Sold $10,000; credit Cash $10,000", "Debit Merchandise Inventory $10,000; credit Accounts Payable $10,000", "Debit Merchandise Inventory $10,000; credit Cash $10,000"],
        answer: 2,
        explanation: "Correct (c): Perpetual systems debit Merchandise Inventory directly, and buying on account credits Accounts Payable. (a) uses the Purchases account, which belongs to the periodic system. (b) records Cost of Goods Sold at the purchase (it is recorded at the sale) and wrongly assumes cash was paid. (d) credits Cash, but the purchase was on account."
      },
      {
        module: 5,
        q: "Merchandise costing $5,000 is purchased on account with terms 2/10, n/30, and paid within the discount period. The discount taken is:",
        choices: ["$50", "$500", "$1,000", "$100"],
        answer: 3,
        explanation: "Correct (d): 5,000 x 2% = $100. (a) $50 applies a 1% rate. (b) $500 applies a 10% rate. (c) $1,000 applies a 20% rate — none match the stated 2% terms."
      },
      {
        module: 5,
        q: "Given net sales of $200,000, cost of goods sold of $120,000, and operating expenses of $50,000, gross profit and operating income are:",
        choices: ["Gross profit $80,000; operating income $30,000", "Gross profit $150,000; operating income $100,000", "Gross profit $80,000; operating income $80,000", "Gross profit $30,000; operating income $80,000"],
        answer: 0,
        explanation: "Correct (a): Gross profit = 200,000 − 120,000 = $80,000; operating income = 80,000 − 50,000 = $30,000. (b) subtracts operating expenses instead of COGS to get gross profit. (c) forgets to subtract operating expenses from gross profit. (d) swaps the two measures."
      },
      {
        module: 5,
        q: "Goods shipped FOB shipping point means:",
        choices: ["The seller pays freight and owns the goods in transit", "The buyer pays freight and owns the goods in transit", "Freight costs are split evenly between buyer and seller", "The seller retains ownership until delivery"],
        answer: 1,
        explanation: "Correct (b): Title passes at the shipping point, so the buyer owns the goods in transit and pays the freight. (a) and (d) describe FOB destination, where the seller keeps title until delivery. (c) No even split of freight is implied by FOB terms."
      },
      {
        module: 6,
        q: "Beginning inventory: 100 units at $10. Purchase: 300 units at $15. During the period, 300 units are sold. Using FIFO, cost of goods sold is:",
        choices: ["$4,500", "$4,125", "$4,000", "$5,500"],
        answer: 2,
        explanation: "Correct (c): FIFO sells the oldest units first: 100 x $10 + 200 x $15 = 1,000 + 3,000 = $4,000. (a) $4,500 is LIFO cost of goods sold (300 x $15). (b) $4,125 is the weighted-average amount. (d) $5,500 is the total cost of goods available for sale, not the cost of the units sold."
      },
      {
        module: 6,
        q: "In a period of rising prices, which inventory method reports the highest net income?",
        choices: ["LIFO", "Weighted average", "All methods report the same income", "FIFO"],
        answer: 3,
        explanation: "Correct (d): FIFO assigns the oldest, lowest costs to cost of goods sold, leaving the lowest COGS and therefore the highest income. (a) LIFO assigns the newest, highest costs to COGS, producing the lowest income. (b) Weighted average falls between the two. (c) The methods produce different COGS figures, so income differs."
      },
      {
        module: 6,
        q: "If ending inventory is overstated by $3,000, what is the effect on net income for that period?",
        choices: ["Overstated by $3,000", "Understated by $3,000", "Not affected", "Overstated by $6,000"],
        answer: 0,
        explanation: "Correct (a): COGS = Beginning inventory + Purchases − Ending inventory, so overstating ending inventory understates COGS by $3,000, which overstates net income by $3,000. (b) reverses the direction of the effect. (c) is wrong because the error flows through COGS into income. (d) double-counts the error."
      },
      {
        module: 6,
        q: "Cost of goods sold is $400,000; beginning inventory is $90,000; ending inventory is $110,000. Inventory turnover is:",
        choices: ["3.6 times", "4.0 times", "4.4 times", "2.0 times"],
        answer: 1,
        explanation: "Correct (b): Average inventory = (90,000 + 110,000) / 2 = $100,000; turnover = 400,000 / 100,000 = 4.0 times. (a) 3.6 uses only ending inventory. (c) 4.4 uses only beginning inventory. (d) 2.0 is half the correct turnover."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "Which of the following violates ethical accounting practice?",
        choices: ["Disclosing a contingent liability in the financial statement notes", "Recording revenue before it is earned to reach a bonus target", "Using straight-line depreciation consistently each year", "Correcting a material prior-period error"],
        answer: 1,
        explanation: "Correct (b): Recording unearned revenue overstates income and misleads users — a clear ethics violation. (a) Disclosing contingencies in the notes is proper transparency. (c) Consistent depreciation follows the consistency principle. (d) Correcting errors is required for fair presentation."
      },
      {
        module: 1,
        q: "A company borrows $10,000 from the bank. How does the accounting equation change?",
        choices: ["Assets increase $10,000 and equity increases $10,000", "Liabilities increase $10,000 and equity decreases $10,000", "Assets increase $10,000 and liabilities increase $10,000", "Assets are unchanged and liabilities increase $10,000"],
        answer: 2,
        explanation: "Correct (c): Cash (asset) rises $10,000 and Notes Payable (liability) rises $10,000; equity is untouched and the equation balances. (a) Borrowing is not revenue, so equity does not increase. (b) Equity is not reduced by borrowing. (d) Assets do change — cash increases."
      },
      {
        module: 1,
        q: "In the United States, GAAP is established primarily by:",
        choices: ["The IASB", "The SEC, which writes every standard itself", "The U.S. Congress", "The FASB"],
        answer: 3,
        explanation: "Correct (d): The Financial Accounting Standards Board sets U.S. GAAP. (a) The IASB sets IFRS, used internationally. (b) The SEC oversees reporting but delegates standard-setting to the FASB. (c) Congress does not write accounting standards."
      },
      {
        module: 2,
        q: "A Cash T-account shows total debits of $30,000 and total credits of $18,000. The account balance is a:",
        choices: ["$12,000 debit balance", "$12,000 credit balance", "$48,000 debit balance", "$18,000 credit balance"],
        answer: 0,
        explanation: "Correct (a): 30,000 − 18,000 = $12,000, and since debits exceed credits it is a debit balance — the normal balance for Cash. (b) puts the balance on the wrong side. (c) $48,000 adds the two sides instead of netting them. (d) uses only the credit total and the wrong side."
      },
      {
        module: 2,
        q: "Which statement about the double-entry system is true?",
        choices: ["Total debits must always exceed total credits", "No transaction may affect more than two accounts", "Each transaction affects at least two accounts, with total debits equal to total credits", "Credits increase every type of account"],
        answer: 2,
        explanation: "Correct (c): Every transaction keeps the equation in balance — debits equal credits across at least two accounts. (a) Debits must EQUAL credits, not exceed them. (b) Compound entries can affect three or more accounts. (d) Credits increase liabilities, equity, and revenues, but decrease assets and expenses."
      },
      {
        module: 2,
        q: "In a typical chart of accounts, the correct sequence is:",
        choices: ["Revenues, expenses, assets, liabilities, equity", "Liabilities, assets, equity, expenses, revenues", "Expenses, revenues, equity, liabilities, assets", "Assets, liabilities, equity, revenues, expenses"],
        answer: 3,
        explanation: "Correct (d): Accounts follow financial-statement order — balance sheet accounts (assets, liabilities, equity) first, then income statement accounts (revenues, expenses). (a), (b), and (c) scramble that order."
      },
      {
        module: 3,
        q: "The matching principle requires:",
        choices: ["Cash receipts to be matched with cash payments", "Expenses to be recorded in the same period as the revenues they help generate", "Total debits to be matched with total credits", "Asset balances to be matched with liability balances"],
        answer: 1,
        explanation: "Correct (b): Expenses are recognized in the period whose revenues they helped produce. (a) describes cash-basis thinking, not matching. (c) describes double-entry bookkeeping. (d) describes the accounting equation."
      },
      {
        module: 3,
        q: "Equipment cost $36,000 with a 6-year useful life and no salvage value. The annual depreciation adjusting entry is:",
        choices: ["Debit Accumulated Depreciation $6,000; credit Equipment $6,000", "Debit Depreciation Expense $36,000; credit Equipment $36,000", "Debit Depreciation Expense $6,000; credit Accumulated Depreciation $6,000", "Debit Equipment $6,000; credit Cash $6,000"],
        answer: 2,
        explanation: "Correct (c): 36,000 / 6 = $6,000 of expense; the credit goes to the contra-asset Accumulated Depreciation, not to Equipment itself. (a) debits the contra account and wrongly reduces the Equipment cost account. (b) expenses the entire cost in one year. (d) involves Cash, but depreciation allocates past cost — no cash changes hands."
      },
      {
        module: 3,
        q: "The primary purpose of the adjusted trial balance is:",
        choices: ["To prove debits equal credits after adjusting entries and provide balances for the financial statements", "To record the closing entries", "To replace the general journal", "To compute taxable income for the IRS"],
        answer: 0,
        explanation: "Correct (a): It verifies the ledger still balances after adjustments and supplies the up-to-date balances used to prepare the statements. (b) Closing entries are journalized separately afterward. (c) It summarizes ledger balances; it does not replace journals. (d) Taxable income follows tax rules, not GAAP adjustments."
      },
      {
        module: 3,
        q: "A company holds a $15,000 note receivable bearing 8% annual interest. The year-end adjusting entry for 3 months of accrued interest records interest revenue of:",
        choices: ["$1,200", "$900", "$3,750", "$300"],
        answer: 3,
        explanation: "Correct (d): 15,000 x 8% x 3/12 = $300. (a) $1,200 is a full year of interest. (b) $900 is nine months of interest. (c) $3,750 does not follow the principal x rate x time formula."
      },
      {
        module: 4,
        q: "A company has revenues, expenses, and declared dividends. How many closing entries are required?",
        choices: ["2", "4", "3", "1"],
        answer: 1,
        explanation: "Correct (b): Four entries are needed — (1) close revenues to Income Summary, (2) close expenses to Income Summary, (3) close Income Summary to Retained Earnings, (4) close Dividends to Retained Earnings. (a), (c), and (d) omit required steps."
      },
      {
        module: 4,
        q: "Beginning retained earnings $50,000; net income $18,000; dividends declared $7,000. Ending retained earnings equals:",
        choices: ["$75,000", "$68,000", "$61,000", "$43,000"],
        answer: 2,
        explanation: "Correct (c): 50,000 + 18,000 − 7,000 = $61,000. (a) $75,000 wrongly adds dividends. (b) $68,000 omits the dividends. (d) $43,000 omits net income."
      },
      {
        module: 4,
        q: "Which of the following is reported as a current asset on a classified balance sheet?",
        choices: ["Equipment", "Notes Payable due in 3 years", "Common Stock", "Accounts Receivable"],
        answer: 3,
        explanation: "Correct (d): Accounts Receivable is expected to be collected within one year. (a) Equipment is a long-term asset. (b) A note due in 3 years is a long-term liability. (c) Common Stock is stockholders' equity, not an asset."
      },
      {
        module: 5,
        q: "A retailer sells merchandise that cost $3,000 for $5,000 cash. Under the perpetual system, the entries are:",
        choices: ["Debit Cash $5,000, credit Sales Revenue $5,000; debit Cost of Goods Sold $3,000, credit Merchandise Inventory $3,000", "Only: debit Cash $5,000, credit Sales Revenue $5,000", "Debit Cash $5,000, credit Sales Revenue $5,000; debit Merchandise Inventory $3,000, credit Cost of Goods Sold $3,000", "Debit Accounts Receivable $5,000, credit Sales Revenue $5,000; debit Cost of Goods Sold $3,000, credit Merchandise Inventory $3,000"],
        answer: 0,
        explanation: "Correct (a): The sale is recorded at the $5,000 selling price and the cost is transferred from inventory at $3,000. (b) omits the required cost-of-goods-sold entry. (c) reverses the cost entry. (d) uses Accounts Receivable, but this was a cash sale."
      },
      {
        module: 5,
        q: "A customer returns merchandise that sold for $800 and cost $500, receiving a cash refund. The entries include:",
        choices: ["Debit Sales Revenue $800, credit Cash $800", "Debit Cash $800, credit Sales Returns and Allowances $800", "Debit Sales Returns and Allowances $800, credit Cash $800; debit Merchandise Inventory $500, credit Cost of Goods Sold $500", "Debit Sales Returns and Allowances $800, credit Cash $800 (no inventory entry needed)"],
        answer: 2,
        explanation: "Correct (c): The contra-revenue account records the $800 refund and the $500 cost is restored to inventory. (a) debits Sales Revenue directly instead of the contra account and omits the inventory restoration. (b) reverses the refund entry. (d) omits the required inventory restoration under the perpetual system."
      },
      {
        module: 5,
        q: "Net sales $300,000 and cost of goods sold $180,000. The gross profit margin is:",
        choices: ["60%", "166.7%", "66.7%", "40%"],
        answer: 3,
        explanation: "Correct (d): Gross profit = 120,000; margin = 120,000 / 300,000 = 40%. (a) 60% is COGS divided by sales. (b) 166.7% divides sales by gross profit. (c) 66.7% matches no correct margin computation."
      },
      {
        module: 6,
        q: "Beginning inventory: 50 units at $20. Purchase: 150 units at $24. Sales: 120 units. Using LIFO, ending inventory is:",
        choices: ["$1,840", "$1,720", "$2,880", "$4,600"],
        answer: 1,
        explanation: "Correct (b): LIFO leaves the oldest units: 50 x $20 + 30 x $24 = 1,000 + 720 = $1,720. (a) $1,840 is the weighted-average ending inventory. (c) $2,880 is LIFO cost of goods sold (120 x $24). (d) $4,600 is the total cost of goods available for sale."
      },
      {
        module: 6,
        q: "Which inventory costing method tracks the actual cost of each individual item sold?",
        choices: ["Specific identification", "FIFO", "LIFO", "Weighted average"],
        answer: 0,
        explanation: "Correct (a): Specific identification matches each unit's actual cost to its sale — practical for unique, high-value items. (b), (c), and (d) are cost-flow assumptions that do not track individual units."
      },
      {
        module: 6,
        q: "An inventory item cost $400, but its net realizable value is now $350. It should be reported at:",
        choices: ["$400", "$375", "$350", "$750"],
        answer: 2,
        explanation: "Correct (c): The lower-of-cost-or-net-realizable-value rule requires reporting at $350 under conservatism. (a) $400 ignores the decline in value. (b) $375 averages cost and NRV, which no rule permits. (d) $750 adds the two figures."
      },
      {
        module: 7,
        q: "In a bank reconciliation, deposits in transit are:",
        choices: ["Deducted from the bank balance", "Added to the book balance", "Deducted from the book balance", "Added to the bank balance"],
        answer: 3,
        explanation: "Correct (d): Deposits in transit are already on the books but not yet on the bank statement, so they are added to the bank balance. (a) reverses the adjustment. (b) and (c) are book-side adjustments — deposits in transit need no book entry."
      },
      {
        module: 7,
        q: "The bank reconciliation reveals a $240 NSF check. The required journal entry is:",
        choices: ["Debit Cash $240; credit Accounts Receivable $240", "Debit Accounts Receivable $240; credit Cash $240", "Debit Bank Service Charges $240; credit Cash $240", "No journal entry is needed"],
        answer: 1,
        explanation: "Correct (b): The receivable must be reinstated and cash reduced: debit Accounts Receivable $240, credit Cash $240. (a) reverses the entry. (c) uses Bank Service Charges, the wrong account for a bounced customer check. (d) is wrong because the book balance must be adjusted for the NSF check."
      },
      {
        module: 7,
        q: "Which of the following is a component of the COSO internal control framework?",
        choices: ["Profit maximization", "Market share growth", "Control environment", "Tax minimization"],
        answer: 2,
        explanation: "Correct (c): The control environment — integrity, ethics, and organizational structure — is one of COSO's five components. (a), (b), and (d) are business objectives, not control components."
      },
      {
        module: 7,
        q: "Which situation violates the segregation of duties principle?",
        choices: ["The employee who approves purchases also receives the goods", "Two employees count the cash drawer together", "The treasurer reconciles the bank statement prepared by another employee", "Purchase orders require two authorized signatures"],
        answer: 0,
        explanation: "Correct (a): Combining authorization (approving) with custody (receiving) lets one person commit and conceal fraud. (b) Dual custody strengthens control. (c) Independent reconciliation is a proper control. (d) Dual authorization is a proper control."
      },
      {
        module: 8,
        q: "Why does GAAP require the allowance method rather than the direct write-off method for uncollectible accounts?",
        choices: ["It is simpler to apply than the direct write-off method", "It reduces the company's income tax bill", "It increases the reported accounts receivable balance", "It matches bad debt expense to the period of the related sale, as GAAP's matching principle requires"],
        answer: 3,
        explanation: "Correct (d): Estimating uncollectibles in the sale period matches expense to revenue. (a) The direct write-off method is actually simpler. (b) For tax purposes companies generally must use the direct write-off method. (c) The allowance REDUCES net receivables through the contra account."
      },
      {
        module: 8,
        q: "Credit sales are $500,000 and the company estimates 2% will be uncollectible. Bad debt expense is:",
        choices: ["$12,000", "$10,000", "$8,000", "$500,000"],
        answer: 1,
        explanation: "Correct (b): 500,000 x 2% = $10,000. (a) $12,000 and (c) $8,000 apply the wrong percentages. (d) $500,000 is total credit sales, not the estimated uncollectible portion."
      },
      {
        module: 8,
        q: "A $6,000 note receivable bears 9% annual interest for 4 months. The interest is:",
        choices: ["$540", "$360", "$180", "$2,160"],
        answer: 2,
        explanation: "Correct (c): 6,000 x 9% x 4/12 = $180. (a) $540 is a full year of interest. (b) $360 is eight months of interest. (d) $2,160 does not follow the principal x rate x time formula."
      },
      {
        module: 9,
        q: "A company buys equipment for $20,000 and pays $1,500 for delivery and $500 for installation. The capitalized cost of the equipment is:",
        choices: ["$22,000", "$20,000", "$21,500", "$20,500"],
        answer: 0,
        explanation: "Correct (a): All costs necessary to get the asset ready for use are capitalized: 20,000 + 1,500 + 500 = $22,000. (b) $20,000 omits the necessary delivery and installation costs. (c) $21,500 omits installation. (d) $20,500 matches no correct combination."
      },
      {
        module: 9,
        q: "A machine costs $30,000, has a $3,000 salvage value, and a 9-year useful life. Annual straight-line depreciation is:",
        choices: ["$3,333", "$2,700", "$30,000", "$3,000"],
        answer: 3,
        explanation: "Correct (d): (30,000 − 3,000) / 9 = $3,000. (a) $3,333 divides cost by life without subtracting salvage. (b) $2,700 matches no correct computation. (c) $30,000 expenses the entire cost in one year."
      },
      {
        module: 9,
        q: "Equipment costing $25,000 with accumulated depreciation of $18,000 is sold for $5,000 cash. The company reports:",
        choices: ["A $2,000 gain", "A $2,000 loss", "A $5,000 gain", "A $20,000 loss"],
        answer: 1,
        explanation: "Correct (b): Book value = 25,000 − 18,000 = $7,000; proceeds of $5,000 are $2,000 below book value — a loss. (a) reverses the result. (c) $5,000 ignores book value entirely. (d) $20,000 matches no correct computation."
      },
      {
        module: 9,
        q: "In the early years of an asset's life, double-declining-balance depreciation is ____ straight-line depreciation.",
        choices: ["Lower than", "The same as", "Higher than", "Zero, unlike"],
        answer: 2,
        explanation: "Correct (c): DDB is an accelerated method, so it records more depreciation early and less later than straight-line. (a) describes the later years of the asset's life. (b) The methods produce different annual amounts. (d) DDB is never zero while book value exceeds salvage value."
      },
      {
        module: 10,
        q: "An employee's gross pay is $2,000. FICA tax is 7.65% and federal income tax withheld is $220. Net pay is:",
        choices: ["$1,627", "$1,780", "$1,847", "$2,000"],
        answer: 0,
        explanation: "Correct (a): FICA = 2,000 x 7.65% = $153; net pay = 2,000 − 153 − 220 = $1,627. (b) $1,780 omits FICA. (c) $1,847 omits federal withholding. (d) $2,000 is gross pay before deductions."
      },
      {
        module: 10,
        q: "Bonds with a $100,000 face value are issued at 97. The issuance records:",
        choices: ["Cash $100,000 received; discount of $3,000", "Cash $97,000 received; premium of $3,000", "Cash $103,000 received; discount of $3,000", "Cash $97,000 received; discount of $3,000"],
        answer: 3,
        explanation: "Correct (d): Cash = 100,000 x 97% = $97,000; the $3,000 shortfall is a discount since the bonds sold below par. (a) records cash at par, ignoring the 97 price. (b) calls it a premium, but a premium arises only above par. (c) records cash above par."
      },
      {
        module: 10,
        q: "A retailer makes cash sales of $10,000 plus 6% sales tax. The entry records:",
        choices: ["Cash collected $10,000; sales tax payable $600", "Cash collected $10,600; sales tax payable $600", "Cash collected $10,600; sales revenue $10,600", "Cash collected $10,000; no tax entry needed"],
        answer: 1,
        explanation: "Correct (b): Tax = 10,000 x 6% = $600, a liability; total cash = $10,600; revenue stays $10,000. (a) understates cash collected. (c) overstates revenue by including the tax. (d) ignores the tax liability entirely."
      },
      {
        module: 10,
        q: "Which of the following is a current liability?",
        choices: ["Bonds Payable due in 10 years", "Common Stock", "Accounts Payable", "Equipment"],
        answer: 2,
        explanation: "Correct (c): Accounts Payable is due within one year. (a) Bonds due in 10 years are a long-term liability. (b) Common Stock is equity. (d) Equipment is an asset."
      },
      {
        module: 11,
        q: "A corporation issues 1,000 shares of $1 par common stock for $15 per share. The entry includes:",
        choices: ["Debit Cash $15,000; credit Common Stock $1,000; credit Paid-in Capital in Excess of Par $14,000", "Debit Cash $15,000, credit Common Stock $15,000", "Debit Cash $1,000, credit Common Stock $1,000", "Debit Common Stock $15,000, credit Cash $15,000"],
        answer: 0,
        explanation: "Correct (a): Cash rises $15,000; Common Stock is credited only for par (1,000 x $1 = $1,000); the $14,000 excess goes to Paid-in Capital in Excess of Par. (b) credits the full $15,000 to Common Stock, overstating par. (c) records only $1,000 of cash. (d) reverses the entry."
      },
      {
        module: 11,
        q: "On the declaration date of a cash dividend, the entry is:",
        choices: ["Debit Dividends Payable; credit Cash", "Debit Cash; credit Retained Earnings", "No entry until the cash is paid", "Debit Retained Earnings; credit Dividends Payable"],
        answer: 3,
        explanation: "Correct (d): Declaration creates a legal liability: debit Retained Earnings (or Dividends), credit Dividends Payable. (a) is the payment-date entry. (b) reverses the economics — cash decreases, not increases. (c) is wrong because the liability exists from declaration."
      },
      {
        module: 11,
        q: "Net income is $120,000, preferred dividends are $20,000, and weighted-average common shares outstanding are 50,000. Basic earnings per share is:",
        choices: ["$2.40", "$2.00", "$2.80", "$0.42"],
        answer: 1,
        explanation: "Correct (b): (120,000 − 20,000) / 50,000 = $2.00. (a) $2.40 fails to subtract preferred dividends. (c) $2.80 matches no correct computation. (d) $0.42 inverts the fraction."
      },
      {
        module: 12,
        q: "On the statement of cash flows, paying cash dividends is classified as a(n):",
        choices: ["Operating activity", "Investing activity", "Financing activity", "Noncash activity excluded from the statement"],
        answer: 2,
        explanation: "Correct (c): Dividends are transactions with owners — a financing activity. (a) Operating activities cover day-to-day revenue and expense cash flows. (b) Investing activities cover long-term assets. (d) Dividends involve cash, so they appear on the statement."
      },
      {
        module: 12,
        q: "Under the indirect method, an increase in accounts payable is:",
        choices: ["Added to net income", "Deducted from net income", "Ignored entirely", "Reported as an investing activity"],
        answer: 0,
        explanation: "Correct (a): Rising payables mean less cash was paid for expenses than was recorded, so the increase is added back to net income. (b) describes a DECREASE in payables. (c) Working-capital changes must be adjusted, not ignored. (d) Payables relate to operations, not investing."
      },
      {
        module: 12,
        q: "Current assets are $90,000 and current liabilities are $60,000. The current ratio is:",
        choices: ["0.67 to 1", "1.33 to 1", "2.5 to 1", "1.5 to 1"],
        answer: 3,
        explanation: "Correct (d): 90,000 / 60,000 = 1.5 to 1. (a) 0.67 inverts the fraction. (b) 1.33 and (c) 2.5 match no correct computation."
      }
    ]
  }
};
