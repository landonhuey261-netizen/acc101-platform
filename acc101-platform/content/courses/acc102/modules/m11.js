// ACC 102 - Module 11: The Statement of Cash Flows for Managers
module.exports = {
  number: 11,
  slug: "statement-of-cash-flows-for-managers",
  title: "The Statement of Cash Flows for Managers",
  estTime: "3–4 hours",
  objectives: [
    "Explain why managers need the statement of cash flows in addition to the income statement.",
    "Classify cash flows as operating, investing, or financing.",
    "Compute operating cash flow with the indirect method.",
    "Compute free cash flow and explain what it measures.",
    "Use cash-flow ratios to judge liquidity and solvency."
  ],
  sections: [
    {
      heading: "Profit Is Not Cash",
      html: `
<p>A company can report strong profit and still run out of cash. Profit is measured on the accrual basis: revenue is recorded when earned and expenses when incurred, whether or not cash has moved. A sale on credit raises profit today and cash next month; a prepaid insurance payment lowers cash today and profit over the next year. The <strong>statement of cash flows</strong> bridges that gap: it explains how the cash balance changed during the period, sorting every cash movement into operating, investing, and financing activities.</p>
<p>For managers, the statement answers three questions the income statement cannot: Are we generating cash from our core business? Are we investing enough in the future? And how are we funding it all — from operations, from borrowing, or from selling assets?</p>
<div class="callout"><strong>Key idea:</strong> The income statement shows whether the business is profitable. The statement of cash flows shows whether it can pay its bills. A manager needs both, and the cash flow statement is the one that warns of trouble first.</div>`
    },
    {
      heading: "The Three Sections",
      html: `
<p><strong>Operating activities</strong> are the cash effects of the core business: cash from customers, cash paid to suppliers and employees, cash paid for interest and taxes. <strong>Investing activities</strong> are cash spent on or received from long-term assets: buying equipment, selling a building, buying or selling investments. <strong>Financing activities</strong> are cash from or to the providers of capital: issuing stock, borrowing, repaying loans, paying dividends.</p>
<p>The classification is not always obvious. Interest paid is operating under U.S. GAAP (it is a cost of doing business), while dividends paid are financing (a return to owners). Buying equipment is investing even though the equipment is used in operations — the purchase is a long-term investment decision, not a day-to-day operating cost. When in doubt, ask: is this the core business, a long-term asset, or a capital provider?</p>`
    },
    {
      heading: "The Indirect Method, Step by Step",
      html: `
<p>The <strong>indirect method</strong> starts with net income and adjusts it into operating cash flow. Step 1: add back non-cash expenses, chiefly depreciation — it reduced net income but spent no cash. Step 2: adjust for changes in operating assets and liabilities. An increase in accounts receivable means sales were recorded but cash was not collected, so subtract it. A decrease in inventory means goods were sold from stock without a new cash purchase, so add it. An increase in accounts payable means expenses were recorded but not yet paid, so add it; a decrease means cash was paid, so subtract it.</p>
<p><strong>Worked example:</strong> Net income $64,000. Add depreciation $11,000. Subtract the increase in accounts receivable, $5,000. Add the decrease in inventory, $3,000. Subtract the decrease in accounts payable, $4,000. Net cash provided by operating activities = 64,000 + 11,000 − 5,000 + 3,000 − 4,000 = <strong>$69,000</strong>. Investing: purchase of equipment $25,000 → net cash used in investing = <strong>−$25,000</strong>. Financing: issuance of stock $15,000, dividends paid $10,000, repayment of a loan $6,000 → net cash used in financing = 15,000 − 10,000 − 6,000 = <strong>−$1,000</strong>. Net increase in cash = 69,000 − 25,000 − 1,000 = <strong>$43,000</strong>.</p>`
    },
    {
      heading: "Free Cash Flow and Cash-Flow Ratios",
      html: `
<p><strong>Free cash flow</strong> is the cash a business generates after paying for the capital expenditures needed to maintain its operations: operating cash flow minus capital expenditures. For the worked example: 69,000 − 25,000 = <strong>$44,000</strong>. That is the cash available to pay dividends, repay debt, or fund growth — the cash the business truly "made" after keeping itself running. A company with rising profit but falling free cash flow is usually investing heavily, or its profit is tied up in receivables and inventory.</p>
<p>Two ratios complete the picture. The <strong>operating cash flow ratio</strong> (operating cash flow ÷ current liabilities) shows whether operations generate enough cash to cover short-term obligations. The <strong>cash flow to debt ratio</strong> (operating cash flow ÷ total liabilities) shows how many years of operating cash flow it would take to repay all debt. A company whose operating cash flow cannot cover its current liabilities is living on borrowing, whatever its income statement says.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Profit is accrual; cash is cash. The statement of cash flows reconciles the two.</li>
<li>Three sections: operating (core business), investing (long-term assets), financing (capital providers).</li>
<li>Indirect method: net income + depreciation − increases in operating assets + decreases in operating assets + increases in operating liabilities − decreases in operating liabilities.</li>
<li>Free cash flow = operating cash flow − capital expenditures.</li>
<li>Healthy pattern: positive operating cash flow funding investing and financing; persistent negative operating cash flow is a warning.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding back an increase in accounts receivable. An increase in receivables means profit was recorded without cash — it must be subtracted, not added.</div>
<div class="callout"><strong>Common mistake:</strong> Classifying the purchase of equipment as an operating cash outflow. It is investing — it buys a long-term asset — even though the equipment is used in operations.</div>
<p><strong>Ready-to-work link:</strong> ACC 101's cash-flow lab built the same statement from the financial accounting side. This module is the manager's use of it: judging whether the business generates cash, funds itself, and can pay its way.</p>`
    }
  ],
  keyTerms: [
    { term: "Statement of cash flows", def: "The statement explaining how the cash balance changed, split into operating, investing, and financing activities." },
    { term: "Operating activities", def: "Cash flows from the core business: customers, suppliers, employees, interest, and taxes." },
    { term: "Investing activities", def: "Cash flows from buying or selling long-term assets and investments." },
    { term: "Financing activities", def: "Cash flows to or from capital providers: stock, borrowing, loan repayment, dividends." },
    { term: "Indirect method", def: "Computing operating cash flow by starting with net income and adjusting for non-cash items and working capital changes." },
    { term: "Direct method", def: "Computing operating cash flow by listing actual cash receipts and cash payments." },
    { term: "Free cash flow", def: "Operating cash flow minus capital expenditures; cash available after maintaining operations." },
    { term: "Capital expenditures", def: "Cash spent on long-term assets such as equipment and buildings." },
    { term: "Depreciation", def: "A non-cash expense allocating an asset's cost over its life; added back in the indirect method." },
    { term: "Working capital", def: "Current assets minus current liabilities; changes in it adjust net income to operating cash flow." },
    { term: "Operating cash flow ratio", def: "Operating cash flow divided by current liabilities; measures ability to pay short-term obligations from operations." },
    { term: "Cash flow to debt ratio", def: "Operating cash flow divided by total liabilities; measures debt coverage from operations." },
    { term: "Accrual basis", def: "Recording revenues when earned and expenses when incurred, regardless of cash movement." },
    { term: "Cash basis", def: "Recording revenues and expenses only when cash is received or paid." }
  ],
  video: {
    title: "Purpose of the Statement of Cash Flows",
    embedUrl: "https://www.youtube.com/embed/nt7PAUIZwtU",
    note: "Edspira explains the purpose of the statement of cash flows: where cash comes from and where it goes. Watch it, then work the module's indirect-method example and confirm operating cash flow of $69,000 and a net cash increase of $43,000.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Net income $64,000; depreciation $11,000; accounts receivable increased $5,000; inventory decreased $3,000; accounts payable decreased $4,000. Compute net cash provided by operating activities (indirect method).</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Start with net income $64,000. Step 2: Add depreciation $11,000 → $75,000. Step 3: Subtract the A/R increase $5,000 → $70,000. Step 4: Add the inventory decrease $3,000 → $73,000. Step 5: Subtract the A/P decrease $4,000 → <strong>$69,000</strong> of operating cash flow.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using Problem 1's operating cash flow of $69,000: the company purchased equipment for $25,000, issued stock for $15,000, paid dividends of $10,000, and repaid a loan of $6,000. Compute (a) net cash from investing, (b) net cash from financing, and (c) the net increase in cash.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Investing = <strong>−$25,000</strong> (equipment purchase only). Step 2: Financing = 15,000 − 10,000 − 6,000 = <strong>−$1,000</strong>. Step 3: Net increase = 69,000 − 25,000 − 1,000 = <strong>$43,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Operating cash flow is $69,000 and capital expenditures are $25,000. Compute free cash flow and explain in one sentence what it means.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Free cash flow = 69,000 − 25,000 = <strong>$44,000</strong>. Step 2: It is the cash the business generated after paying to maintain its productive assets — cash available for dividends, debt repayment, or growth.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Classify each cash flow as operating, investing, or financing: (a) cash from customers, (b) purchase of a delivery truck, (c) repayment of a bank loan, (d) payment of dividends, (e) sale of an old machine, (f) cash paid to suppliers.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Operating</strong> — core business receipt. Step 2: (b) <strong>Investing</strong> — long-term asset purchase. Step 3: (c) <strong>Financing</strong> — repaying capital. Step 4: (d) <strong>Financing</strong> — return to owners. Step 5: (e) <strong>Investing</strong> — sale of a long-term asset. Step 6: (f) <strong>Operating</strong> — core business payment.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A company reports net income of $80,000 and operating cash flow of $30,000. Its accounts receivable rose by $45,000 during the year. Explain in two or three sentences why operating cash flow is so much lower than net income.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The $45,000 rise in receivables means $45,000 of recorded sales were not collected in cash — profit was booked, cash was not received. Step 2: The indirect method subtracts that increase from net income, which accounts for most of the $50,000 gap (the rest is other working-capital and non-cash adjustments). Step 3: The company's profit is tied up in what customers owe it, not in its bank account.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Operating cash flow is $120,000, current liabilities are $100,000, and total liabilities are $400,000. Compute (a) the operating cash flow ratio and (b) the cash flow to debt ratio, and interpret each in one sentence.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Operating cash flow ratio = 120,000 ÷ 100,000 = <strong>1.20</strong> — operations generate 20% more cash than current liabilities, so short-term obligations are covered from operations. Step 2: Cash flow to debt = 120,000 ÷ 400,000 = <strong>0.30</strong> — at this rate it would take about 3.3 years of operating cash flow to repay all debt.</p>"
    }
  ],
  quiz: [
    {
      q: "The statement of cash flows is needed in addition to the income statement because:",
      choices: ["Profit and cash are the same thing", "Profit is accrual-based; a profitable company can still run out of cash", "The income statement is never accurate", "Cash flows are reported on the balance sheet instead"],
      answer: 1,
      explanation: "Correct: (b). Accrual profit records revenue before cash arrives and expenses before cash is paid, so profit does not show liquidity. (a) is the error the statement exists to correct. (c) is false. (d) is false — the cash flow statement is its own statement."
    },
    {
      q: "Buying a delivery truck is classified as:",
      choices: ["Operating", "Investing", "Financing", "Not reported on the cash flow statement"],
      answer: 1,
      explanation: "Correct: (b). It is a purchase of a long-term asset. (a) is for core-business cash flows. (c) is for capital providers. (d) is false — it is an investing outflow."
    },
    {
      q: "In the indirect method, depreciation is:",
      choices: ["Subtracted from net income", "Added back to net income", "Ignored entirely", "Reported as a financing outflow"],
      answer: 1,
      explanation: "Correct: (b). Depreciation reduced net income but spent no cash, so it is added back. (a) would double-count the expense. (c) would understate operating cash flow. (d) misclassifies it."
    },
    {
      q: "An increase in accounts receivable is:",
      choices: ["Added to net income in the indirect method", "Subtracted from net income in the indirect method", "Ignored in the indirect method", "Reported as investing cash flow"],
      answer: 1,
      explanation: "Correct: (b). Sales were recorded without cash collection, so the increase is subtracted. (a) reverses the adjustment. (c) would overstate operating cash flow. (d) misclassifies a working-capital change."
    },
    {
      q: "Net income $64,000, depreciation $11,000, A/R up $5,000, inventory down $3,000, A/P down $4,000. Operating cash flow is:",
      choices: ["$69,000", "$59,000", "$79,000", "$64,000"],
      answer: 0,
      explanation: "Correct: (a). 64,000 + 11,000 − 5,000 + 3,000 − 4,000 = $69,000. (b) adds the A/R increase instead of subtracting it. (c) reverses the inventory and payable adjustments. (d) is net income with no adjustments."
    },
    {
      q: "Free cash flow equals:",
      choices: ["Net income minus dividends", "Operating cash flow minus capital expenditures", "Investing cash flow plus financing cash flow", "Total cash inflows minus total cash outflows"],
      answer: 1,
      explanation: "Correct: (b). It is the cash left after maintaining productive assets. (a) is a dividend measure. (c) omits operations. (d) is the net change in cash, not free cash flow."
    },
    {
      q: "Operating cash flow $69,000 and capital expenditures $25,000. Free cash flow is:",
      choices: ["$94,000", "$44,000", "$25,000", "$69,000"],
      answer: 1,
      explanation: "Correct: (b). 69,000 − 25,000 = $44,000. (a) adds the two. (c) is the capital expenditure alone. (d) is operating cash flow before capital spending."
    },
    {
      q: "Dividends paid are classified as:",
      choices: ["Operating", "Investing", "Financing", "Not a cash flow"],
      answer: 2,
      explanation: "Correct: (c). Dividends are a return of capital to owners — a financing activity. (a) is for core operations. (b) is for long-term assets. (d) is false — dividends are cash outflows."
    }
  ],
  studyGuide: `
<h3>Module 11 — The Statement of Cash Flows for Managers: Quick Reference</h3>
<p><strong>Core idea:</strong> Profit is accrual; cash is cash. The statement of cash flows explains the change in the cash balance.</p>
<p><strong>Sections:</strong> Operating (core business) → investing (long-term assets) → financing (capital providers).</p>
<div class="formula">Operating cash flow (indirect) = Net income + Depreciation − ΔOperating assets + ΔOperating liabilities</div>
<p><strong>Anchor:</strong> NI $64,000 + depreciation $11,000 − A/R increase $5,000 + inventory decrease $3,000 − A/P decrease $4,000 = operating cash flow $69,000. Investing −$25,000. Financing −$1,000. Net increase $43,000.</p>
<div class="formula">Free cash flow = Operating cash flow − Capital expenditures = $69,000 − $25,000 = $44,000</div>
<p><strong>Watch out:</strong> An increase in an operating asset is subtracted; an increase in an operating liability is added. Equipment purchases are investing, not operating.</p>
<p><strong>Self-check:</strong> Given a net income and a set of working-capital changes, compute operating cash flow, then free cash flow, and say in one sentence whether the business is funding itself.</p>
`
};
