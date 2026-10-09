// ACC 101 — Spreadsheet labs.
// Each lab renders as a fill-in table: rows carry static cell HTML plus checked inputs.
// Input shape: { col, key, expected, hint } where col is the 1-based data column (label column excluded).

module.exports = [
  {
    id: "trial-balance",
    title: "Trial Balance & Financial Statements",
    introHtml: "<p>A trial balance lists every general ledger account with its debit or credit balance. Because double-entry bookkeeping keeps total debits equal to total credits, the two columns must balance. In this lab you will place each account balance in the correct column and prove the trial balance balances.</p>",
    taskHtml: "<p>Enter each account's balance in the <strong>Debit</strong> or <strong>Credit</strong> column according to its normal balance. Assets, expenses, and dividends carry debit balances; liabilities, equity, and revenues carry credit balances.</p><ol><li>Place all 12 account balances in the correct column.</li><li>Total each column in the Totals row.</li><li>Confirm that total debits equal total credits.</li></ol>",
    headers: ["Account", "Debit ($)", "Credit ($)"],
    rows: [
      { label: "Cash", cells: ["", ""], inputs: [
        { col: 1, key: "cash_dr", expected: 15200, hint: "Cash is an asset, so it has a normal debit balance of $15,200." },
        { col: 2, key: "cash_cr", expected: 0, hint: "Cash is an asset — it belongs in the debit column, not the credit column." } ] },
      { label: "Accounts Receivable", cells: ["", ""], inputs: [
        { col: 1, key: "ar_dr", expected: 8400, hint: "Accounts Receivable is an asset: debit balance of $8,400." },
        { col: 2, key: "ar_cr", expected: 0, hint: "Receivables are assets — debit column only." } ] },
      { label: "Supplies", cells: ["", ""], inputs: [
        { col: 1, key: "sup_dr", expected: 1900, hint: "Supplies is an asset: debit balance of $1,900." },
        { col: 2, key: "sup_cr", expected: 0, hint: "Supplies is an asset — debit column only." } ] },
      { label: "Equipment", cells: ["", ""], inputs: [
        { col: 1, key: "eq_dr", expected: 42000, hint: "Equipment is an asset: debit balance of $42,000." },
        { col: 2, key: "eq_cr", expected: 0, hint: "Equipment is an asset — debit column only." } ] },
      { label: "Accounts Payable", cells: ["", ""], inputs: [
        { col: 1, key: "ap_dr", expected: 0, hint: "Accounts Payable is a liability — it belongs in the credit column." },
        { col: 2, key: "ap_cr", expected: 6700, hint: "Accounts Payable is a liability: credit balance of $6,700." } ] },
      { label: "Unearned Revenue", cells: ["", ""], inputs: [
        { col: 1, key: "ur_dr", expected: 0, hint: "Unearned Revenue is a liability — credit column." },
        { col: 2, key: "ur_cr", expected: 3100, hint: "Unearned Revenue is a liability: credit balance of $3,100." } ] },
      { label: "Notes Payable", cells: ["", ""], inputs: [
        { col: 1, key: "np_dr", expected: 0, hint: "Notes Payable is a liability — credit column." },
        { col: 2, key: "np_cr", expected: 18000, hint: "Notes Payable is a liability: credit balance of $18,000." } ] },
      { label: "Common Stock", cells: ["", ""], inputs: [
        { col: 1, key: "cs_dr", expected: 0, hint: "Common Stock is equity — credit column." },
        { col: 2, key: "cs_cr", expected: 25000, hint: "Common Stock is equity: credit balance of $25,000." } ] },
      { label: "Retained Earnings", cells: ["", ""], inputs: [
        { col: 1, key: "re_dr", expected: 0, hint: "Retained Earnings is equity — credit column." },
        { col: 2, key: "re_cr", expected: 4600, hint: "Retained Earnings is equity: credit balance of $4,600." } ] },
      { label: "Service Revenue", cells: ["", ""], inputs: [
        { col: 1, key: "sr_dr", expected: 0, hint: "Revenue increases equity — credit column." },
        { col: 2, key: "sr_cr", expected: 31500, hint: "Service Revenue: credit balance of $31,500." } ] },
      { label: "Salaries Expense", cells: ["", ""], inputs: [
        { col: 1, key: "sal_dr", expected: 14800, hint: "Expenses decrease equity, so they carry debit balances: $14,800." },
        { col: 2, key: "sal_cr", expected: 0, hint: "Expenses carry debit balances — debit column." } ] },
      { label: "Rent Expense", cells: ["", ""], inputs: [
        { col: 1, key: "rent_dr", expected: 6600, hint: "Rent Expense: debit balance of $6,600." },
        { col: 2, key: "rent_cr", expected: 0, hint: "Expenses carry debit balances — debit column." } ] },
      { label: "Totals", cells: ["", ""], inputs: [
        { col: 1, key: "total_dr", expected: 88900, hint: "Add the debit column: 15,200 + 8,400 + 1,900 + 42,000 + 14,800 + 6,600." },
        { col: 2, key: "total_cr", expected: 88900, hint: "Add the credit column: 6,700 + 3,100 + 18,000 + 25,000 + 4,600 + 31,500. It must equal total debits." } ] }
    ],
    passing: 70,
    csvFilename: "trial-balance-workpaper.csv",
    csv: "Account,Debit,Credit\nCash,,\nAccounts Receivable,,\nSupplies,,\nEquipment,,\nAccounts Payable,,\nUnearned Revenue,,\nNotes Payable,,\nCommon Stock,,\nRetained Earnings,,\nService Revenue,,\nSalaries Expense,,\nRent Expense,,\nTotals,,"
  },
  {
    id: "bank-reconciliation",
    title: "Bank Reconciliation",
    introHtml: "<p>Your cash records and the bank's records rarely agree at month-end because of timing differences and items one side has not yet recorded. A bank reconciliation adjusts both sides to one true cash balance and identifies the journal entries your books still need.</p>",
    taskHtml: "<p>Reconcile the September 30 records of Harbor Supply Co.</p><ul><li>Unadjusted book balance: <strong>$8,420</strong></li><li>Unadjusted bank balance: <strong>$9,027</strong></li><li>Outstanding checks: <strong>$1,230</strong></li><li>Deposits in transit: <strong>$860</strong></li><li>NSF check returned by the bank: <strong>$240</strong></li><li>Bank service charge: <strong>$35</strong></li><li>Note receivable collected by the bank: <strong>$500</strong>, plus <strong>$12</strong> interest</li></ul><ol><li>Enter each reconciling adjustment in the Book or Bank column.</li><li>Compute the adjusted book balance and the adjusted bank balance — the two must agree.</li></ol>",
    headers: ["Item", "Book ($)", "Bank ($)"],
    rows: [
      { label: "Unadjusted balance per books", cells: ["8,420", ""], inputs: [] },
      { label: "Unadjusted balance per bank statement", cells: ["", "9,027"], inputs: [] },
      { label: "Add: Note receivable collected by bank", cells: ["", ""], inputs: [
        { col: 1, key: "br_note", expected: 500, hint: "The bank collected a $500 note on your behalf. It is on the bank statement but not yet on your books — add it to the book balance." } ] },
      { label: "Add: Interest on note collected by bank", cells: ["", ""], inputs: [
        { col: 1, key: "br_interest", expected: 12, hint: "The $12 of interest arrived with the note collection — also a book-side addition." } ] },
      { label: "Less: NSF check", cells: ["", ""], inputs: [
        { col: 1, key: "br_nsf", expected: 240, hint: "A $240 customer check bounced. The bank deducted it, but your books still show the cash — subtract it from the book balance." } ] },
      { label: "Less: Bank service charge", cells: ["", ""], inputs: [
        { col: 1, key: "br_charge", expected: 35, hint: "The $35 service charge appears on the bank statement only — subtract it from the book balance." } ] },
      { label: "Add: Deposits in transit", cells: ["", ""], inputs: [
        { col: 2, key: "br_deposits", expected: 860, hint: "The $860 deposit is on your books but had not reached the bank by month-end — add it to the bank balance." } ] },
      { label: "Less: Outstanding checks", cells: ["", ""], inputs: [
        { col: 2, key: "br_checks", expected: 1230, hint: "The $1,230 of checks were written on your books but had not cleared the bank — subtract them from the bank balance." } ] },
      { label: "Adjusted book balance", cells: ["", ""], inputs: [
        { col: 1, key: "br_adj_book", expected: 8657, hint: "Start with $8,420, add $500 and $12, subtract $240 and $35." } ] },
      { label: "Adjusted bank balance", cells: ["", ""], inputs: [
        { col: 2, key: "br_adj_bank", expected: 8657, hint: "Start with $9,027, add $860, subtract $1,230. It must equal the adjusted book balance." } ] }
    ],
    passing: 70,
    csvFilename: "bank-reconciliation.csv",
    csv: "Item,Book,Bank\nUnadjusted balance per books,8420,\nUnadjusted balance per bank statement,,9027\nAdd: Note receivable collected by bank,,\nAdd: Interest on note collected by bank,,\nLess: NSF check,,\nLess: Bank service charge,,\nAdd: Deposits in transit,,\nLess: Outstanding checks,,\nAdjusted book balance,,\nAdjusted bank balance,,"
  },
  {
    id: "depreciation-schedule",
    title: "Depreciation Schedule: Straight-Line vs. Double-Declining-Balance",
    introHtml: "<p>The same asset produces very different expense patterns under different depreciation methods. In this lab you will build side-by-side 5-year schedules for one machine costing $24,000 with a $4,000 salvage value and a 5-year useful life, using straight-line and double-declining-balance.</p>",
    taskHtml: "<p>Complete the schedule below.</p><ol><li>Straight-line: annual expense = (cost − salvage) / life, the same every year.</li><li>Double-declining-balance: rate = 2 / life = 40% of beginning book value each year. Book value may never fall below the $4,000 salvage value — cap the expense in any year where the formula would push book value below salvage.</li><li>Accumulated depreciation is the running total of expense; book value = cost − accumulated depreciation.</li></ol>",
    headers: ["Year", "SL Expense ($)", "SL Accum. Depr. ($)", "SL Book Value ($)", "DDB Expense ($)", "DDB Accum. Depr. ($)", "DDB Book Value ($)"],
    rows: [
      { label: "At purchase", cells: ["—", "0", "24,000", "—", "0", "24,000"], inputs: [] },
      { label: "Year 1", cells: ["", "", "", "", "", ""], inputs: [
        { col: 1, key: "sl_exp_1", expected: 4000, hint: "Straight-line expense is the same every year: (24,000 − 4,000) / 5." },
        { col: 2, key: "sl_acc_1", expected: 4000, hint: "Accumulated depreciation is the running total of straight-line expense." },
        { col: 3, key: "sl_bv_1", expected: 20000, hint: "Book value = cost − accumulated depreciation = 24,000 − 4,000." },
        { col: 4, key: "ddb_exp_1", expected: 9600, hint: "DDB rate = 2 / 5 = 40%. Year 1: 24,000 x 40%." },
        { col: 5, key: "ddb_acc_1", expected: 9600, hint: "Accumulated depreciation is the running total of DDB expense." },
        { col: 6, key: "ddb_bv_1", expected: 14400, hint: "Book value = 24,000 − 9,600." } ] },
      { label: "Year 2", cells: ["", "", "", "", "", ""], inputs: [
        { col: 1, key: "sl_exp_2", expected: 4000, hint: "Straight-line expense never changes: $4,000 every year." },
        { col: 2, key: "sl_acc_2", expected: 8000, hint: "Running total: 4,000 + 4,000." },
        { col: 3, key: "sl_bv_2", expected: 16000, hint: "Book value = 24,000 − 8,000." },
        { col: 4, key: "ddb_exp_2", expected: 5760, hint: "40% of the beginning book value: 14,400 x 40%." },
        { col: 5, key: "ddb_acc_2", expected: 15360, hint: "Running total: 9,600 + 5,760." },
        { col: 6, key: "ddb_bv_2", expected: 8640, hint: "Book value = 14,400 − 5,760." } ] },
      { label: "Year 3", cells: ["", "", "", "", "", ""], inputs: [
        { col: 1, key: "sl_exp_3", expected: 4000, hint: "Straight-line expense never changes: $4,000 every year." },
        { col: 2, key: "sl_acc_3", expected: 12000, hint: "Running total: 8,000 + 4,000." },
        { col: 3, key: "sl_bv_3", expected: 12000, hint: "Book value = 24,000 − 12,000." },
        { col: 4, key: "ddb_exp_3", expected: 3456, hint: "40% of the beginning book value: 8,640 x 40%." },
        { col: 5, key: "ddb_acc_3", expected: 18816, hint: "Running total: 15,360 + 3,456." },
        { col: 6, key: "ddb_bv_3", expected: 5184, hint: "Book value = 8,640 − 3,456." } ] },
      { label: "Year 4", cells: ["", "", "", "", "", ""], inputs: [
        { col: 1, key: "sl_exp_4", expected: 4000, hint: "Straight-line expense never changes: $4,000 every year." },
        { col: 2, key: "sl_acc_4", expected: 16000, hint: "Running total: 12,000 + 4,000." },
        { col: 3, key: "sl_bv_4", expected: 8000, hint: "Book value = 24,000 − 16,000." },
        { col: 4, key: "ddb_exp_4", expected: 1184, hint: "Uncapped, Year 4 would be 5,184 x 40% = 2,073.60, but book value can never fall below the $4,000 salvage value — expense is capped at 5,184 − 4,000." },
        { col: 5, key: "ddb_acc_4", expected: 20000, hint: "Running total: 18,816 + 1,184 = 20,000, the full depreciable base." },
        { col: 6, key: "ddb_bv_4", expected: 4000, hint: "Book value now equals the $4,000 salvage value — it cannot go lower." } ] },
      { label: "Year 5", cells: ["", "", "", "", "", ""], inputs: [
        { col: 1, key: "sl_exp_5", expected: 4000, hint: "Straight-line expense never changes: $4,000 every year." },
        { col: 2, key: "sl_acc_5", expected: 20000, hint: "Running total: 16,000 + 4,000 = 20,000, the full depreciable base." },
        { col: 3, key: "sl_bv_5", expected: 4000, hint: "Book value = 24,000 − 20,000 = the $4,000 salvage value." },
        { col: 4, key: "ddb_exp_5", expected: 0, hint: "Book value already equals salvage value, so no further depreciation is allowed." },
        { col: 5, key: "ddb_acc_5", expected: 20000, hint: "No new expense, so accumulated depreciation is unchanged at $20,000." },
        { col: 6, key: "ddb_bv_5", expected: 4000, hint: "Book value remains at the $4,000 salvage value." } ] }
    ],
    passing: 70,
    csvFilename: "depreciation-schedule.csv",
    csv: "Year,SL Expense,SL Accum. Depr.,SL Book Value,DDB Expense,DDB Accum. Depr.,DDB Book Value\nAt purchase,,0,24000,,0,24000\nYear 1,,,,,,\nYear 2,,,,,,\nYear 3,,,,,,\nYear 4,,,,,,\nYear 5,,,,,,"
  },
  {
    id: "cash-flow-analysis",
    title: "Cash Flow Analysis: Indirect Method",
    introHtml: "<p>The statement of cash flows explains how net income converts into cash and where cash went during the period. Using the indirect method, you start with net income and adjust for noncash items and changes in operating assets and liabilities, then report investing and financing cash flows.</p>",
    taskHtml: "<p>Using the data for Summit Co. below, compute each required figure.</p><ul><li>Net income: <strong>$52,000</strong></li><li>Depreciation expense: <strong>$9,000</strong></li><li>Increase in accounts receivable: <strong>$6,000</strong></li><li>Decrease in inventory: <strong>$4,000</strong></li><li>Increase in accounts payable: <strong>$7,000</strong></li><li>Purchase of equipment: <strong>$30,000</strong></li><li>Issuance of common stock: <strong>$20,000</strong></li><li>Dividends paid: <strong>$12,000</strong></li><li>Repayment of notes payable: <strong>$8,000</strong></li></ul><ol><li>Compute net cash provided by operating activities (indirect method).</li><li>Compute net cash from investing and from financing activities.</li><li>Compute the net increase in cash.</li></ol>",
    headers: ["Item", "Amount ($)"],
    rows: [
      { label: "Net income", cells: ["52,000"], inputs: [] },
      { label: "Add: Depreciation expense", cells: ["9,000"], inputs: [] },
      { label: "Less: Increase in accounts receivable", cells: ["(6,000)"], inputs: [] },
      { label: "Add: Decrease in inventory", cells: ["4,000"], inputs: [] },
      { label: "Add: Increase in accounts payable", cells: ["7,000"], inputs: [] },
      { label: "Net cash provided by operating activities", cells: [""], inputs: [
        { col: 1, key: "cf_operating", expected: 66000, hint: "Start with $52,000, add back $9,000 depreciation, subtract the $6,000 A/R increase, add the $4,000 inventory decrease and the $7,000 A/P increase." } ] },
      { label: "Purchase of equipment", cells: ["(30,000)"], inputs: [] },
      { label: "Net cash used in investing activities", cells: [""], inputs: [
        { col: 1, key: "cf_investing", expected: -30000, hint: "The only investing item is the $30,000 equipment purchase — a cash outflow, so enter it as a negative number." } ] },
      { label: "Issuance of common stock", cells: ["20,000"], inputs: [] },
      { label: "Dividends paid", cells: ["(12,000)"], inputs: [] },
      { label: "Repayment of notes payable", cells: ["(8,000)"], inputs: [] },
      { label: "Net cash provided by financing activities", cells: [""], inputs: [
        { col: 1, key: "cf_financing", expected: 0, hint: "Cash inflows of $20,000 minus outflows of $12,000 and $8,000." } ] },
      { label: "Net increase in cash", cells: [""], inputs: [
        { col: 1, key: "cf_net", expected: 36000, hint: "Combine the three sections: 66,000 − 30,000 + 0." } ] }
    ],
    passing: 70,
    csvFilename: "cash-flow-analysis.csv",
    csv: "Item,Amount\nNet income,52000\nAdd: Depreciation expense,9000\nLess: Increase in accounts receivable,(6000)\nAdd: Decrease in inventory,4000\nAdd: Increase in accounts payable,7000\nNet cash provided by operating activities,\nPurchase of equipment,(30000)\nNet cash used in investing activities,\nIssuance of common stock,20000\nDividends paid,(12000)\nRepayment of notes payable,(8000)\nNet cash provided by financing activities,\nNet increase in cash,"
  }
];
