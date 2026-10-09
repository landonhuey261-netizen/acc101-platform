module.exports = {
  number: 12,
  slug: "cash-flows-and-financial-analysis",
  title: "Cash Flows & Financial Analysis",
  estTime: "3–4 hours",
  objectives: [
    "Explain the purpose of the statement of cash flows and its three activity classifications.",
    "Classify cash transactions as operating, investing, or financing activities.",
    "Prepare a statement of cash flows using the indirect method from comparative balance sheets and an income statement.",
    "Compute and interpret free cash flow.",
    "Compute liquidity ratios (current ratio, quick ratio, accounts receivable turnover) and interpret them.",
    "Compute solvency ratios (debt to assets, times interest earned) and profitability ratios (gross profit margin, net profit margin, ROA, ROE).",
    "Read a set of ratios together to form an overall assessment of a company's financial health."
  ],
  sections: [
    {
      heading: "Why the Statement of Cash Flows Exists",
      html: `<p>Net income and cash are not the same thing — and the difference can be a matter of survival. A company can report record profits while running out of cash (its customers pay slowly, its inventory piles up), or it can bleed accounting losses while sitting on cash. The <strong>statement of cash flows</strong> bridges that gap: it reports where cash came from and where it went during the period, reconciling beginning cash to ending cash.</p>
      <p>Investors and creditors prize this statement because cash is harder to manipulate than earnings. Revenue recognition choices, depreciation methods, and estimates all shape net income; cash received and cash paid are observable facts. When a company's profits soar but its operating cash flow stagnates, analysts smell trouble — the earnings may not be converting into money.</p>
      <p>The statement sorts every cash flow into three activities:</p>
      <ul>
      <li><strong>Operating activities:</strong> cash effects of the day-to-day business — selling goods, paying suppliers and employees. Generally: cash flows tied to net income.</li>
      <li><strong>Investing activities:</strong> cash spent on or received from long-term assets — buying equipment, selling land, making loans to others.</li>
      <li><strong>Financing activities:</strong> cash from and to owners and long-term creditors — issuing stock, borrowing, repaying debt, paying dividends.</li>
      </ul>
      <div class="formula">Net change in cash = Operating cash flow + Investing cash flow + Financing cash flow<br>Ending cash = Beginning cash + Net change in cash</div>
      <div class="callout"><strong>Key idea:</strong> The cash flow statement answers one question three ways: how did operations, long-term investments, and financing each change the company's cash?</div>`
    },
    {
      heading: "Classification Drills: Operating, Investing, Financing",
      html: `<p>Classification is the first skill to master, because every line of the statement depends on it. A few guiding rules:</p>
      <ul>
      <li>Buying or selling <strong>long-term assets</strong> (equipment, land, buildings) → <strong>investing</strong>.</li>
      <li>Issuing stock, paying dividends, borrowing or repaying <strong>long-term</strong> debt → <strong>financing</strong>.</li>
      <li>Everything tied to <strong>current assets and current liabilities</strong> and the income statement → <strong>operating</strong>.</li>
      <li>Under GAAP, <strong>interest paid</strong> and <strong>income taxes paid</strong> are operating activities; <strong>dividends paid</strong> are financing.</li>
      </ul>
      <p><strong>Drill — classify each:</strong></p>
      <ol>
      <li>Collected $40,000 from customers → <strong>operating</strong> (core revenue cycle).</li>
      <li>Paid $90,000 cash for new equipment → <strong>investing</strong> (long-term asset purchase).</li>
      <li>Sold old equipment for $12,000 cash → <strong>investing</strong> (long-term asset sale).</li>
      <li>Issued bonds for $30,000 cash → <strong>financing</strong> (long-term borrowing).</li>
      <li>Paid $25,000 of cash dividends → <strong>financing</strong> (distribution to owners).</li>
      <li>Paid suppliers $310,000 for inventory → <strong>operating</strong> (current-asset cycle).</li>
      <li>Repaid a 5-year bank loan, $15,000 → <strong>financing</strong> (long-term debt repayment).</li>
      <li>Paid $12,000 of interest on bonds → <strong>operating</strong> (GAAP classifies interest paid as operating).</li>
      </ol>
      <div class="mistake"><strong>Common mistake:</strong> Classifying interest paid as financing because "debt is financing." Under GAAP, interest paid is an operating cash flow (it appears on the income statement as interest expense). Dividends paid, however, are financing — they never touch net income.</div>`
    },
    {
      heading: "The Indirect Method: Turning Net Income into Cash",
      html: `<p>The <strong>indirect method</strong> starts with net income and adjusts it into cash provided by operations. It is the method nearly all large companies use. The logic has two parts:</p>
      <p><strong>Part 1 — reverse the noncash items in net income.</strong> Expenses that used no cash are added back; revenues that brought no cash are subtracted. The classic add-back is <strong>depreciation expense</strong>: it reduced net income but spent zero cash, so add it back. Likewise, a <strong>loss on sale of equipment</strong> is added back (it reduced net income, but the actual cash effect appears in investing activities), and a <strong>gain on sale</strong> is subtracted.</p>
      <p><strong>Part 2 — adjust for changes in current assets and current liabilities.</strong> These changes explain why cash moved differently from the accrual numbers:</p>
      <ul>
      <li><strong>Increase</strong> in a current asset (AR, inventory) → <strong>subtract</strong> (cash tied up, not yet collected).</li>
      <li><strong>Decrease</strong> in a current asset → <strong>add</strong> (cash freed up).</li>
      <li><strong>Increase</strong> in a current liability (AP) → <strong>add</strong> (expense recorded, cash not yet paid).</li>
      <li><strong>Decrease</strong> in a current liability → <strong>subtract</strong> (cash paid for a prior expense).</li>
      </ul>
      <div class="callout"><strong>Key idea:</strong> Think of it as a translation. Net income speaks accrual; the adjustments translate it into cash. Add back noncash charges; then follow the current accounts — asset increases and liability decreases cost cash, asset decreases and liability increases save cash.</div>
      <p>Memory aid: increases in current <em>assets</em> and decreases in current <em>liabilities</em> are cash <strong>outflows</strong> (subtract); decreases in current assets and increases in current liabilities are cash <strong>inflows</strong> (add).</p>`
    },
    {
      heading: "Full Worked Statement: Everest Supply Co.",
      html: `<p>Now the complete exercise. Below are Everest Supply Co.'s comparative balance sheets and 2026 income statement, plus additional information. Every number that follows is derived from these — watch the statement reconcile.</p>
      <p><strong>Comparative balance sheets (December 31):</strong></p>
      <table class="taccount"><thead><tr><th colspan="2">Everest Supply Co. — Balance Sheets</th></tr><tr><th>2026</th><th>2025</th></tr></thead><tbody>
      <tr><td>Cash $76,000</td><td>$40,000</td></tr>
      <tr><td>Accounts receivable $60,000</td><td>$50,000</td></tr>
      <tr><td>Inventory $52,000</td><td>$60,000</td></tr>
      <tr><td>Prepaid expenses $5,000</td><td>$5,000</td></tr>
      <tr><td>Equipment $350,000</td><td>$300,000</td></tr>
      <tr><td>Accumulated depreciation ($121,000)</td><td>($120,000)</td></tr>
      <tr><td>Land $40,000</td><td>$40,000</td></tr>
      <tr><td><strong>Total assets $462,000</strong></td><td><strong>$375,000</strong></td></tr>
      <tr><td>Accounts payable $35,000</td><td>$30,000</td></tr>
      <tr><td>Salaries payable $5,000</td><td>$8,000</td></tr>
      <tr><td>Notes payable $50,000</td><td>$50,000</td></tr>
      <tr><td>Bonds payable $130,000</td><td>$100,000</td></tr>
      <tr><td>Common stock $140,000</td><td>$120,000</td></tr>
      <tr><td>Retained earnings $102,000</td><td>$67,000</td></tr>
      <tr><td><strong>Total liab. &amp; equity $462,000</strong></td><td><strong>$375,000</strong></td></tr>
      </tbody></table>
      <p><strong>Income statement (2026):</strong> Sales $500,000; Cost of goods sold $320,000; Gross profit $180,000; Operating expenses $95,000 (including depreciation expense of $25,000); Interest expense $12,000; Loss on sale of equipment $4,000; Income before tax $69,000; Income tax expense $9,000; <strong>Net income $60,000</strong>. Check: $180,000 − $95,000 − $12,000 − $4,000 = $69,000; $69,000 − $9,000 = $60,000.</p>
      <p><strong>Additional information:</strong> (a) Sold equipment costing $40,000 (accumulated depreciation $24,000; book value $16,000) for $12,000 cash — hence the $4,000 loss. (b) Purchased new equipment for $90,000 cash. (c) Issued bonds for $30,000 cash. (d) Issued common stock for $20,000 cash. (e) Paid $25,000 of cash dividends. Verify the balance-sheet consistency: retained earnings $67,000 + $60,000 − $25,000 = $102,000; equipment $300,000 − $40,000 + $90,000 = $350,000; accumulated depreciation $120,000 + $25,000 − $24,000 = $121,000; bonds $100,000 + $30,000 = $130,000; common stock $120,000 + $20,000 = $140,000.</p>
      <p><strong>Operating activities (indirect method):</strong></p>
      <ul>
      <li>Net income: $60,000</li>
      <li>Add: depreciation expense $25,000 (noncash charge)</li>
      <li>Add: loss on sale of equipment $4,000 (noncash reduction of income; cash effect is investing)</li>
      <li>Less: increase in accounts receivable ($10,000) ($60,000 − $50,000)</li>
      <li>Add: decrease in inventory $8,000 ($60,000 − $52,000)</li>
      <li>Add: increase in accounts payable $5,000 ($35,000 − $30,000)</li>
      <li>Less: decrease in salaries payable ($3,000) ($8,000 − $5,000)</li>
      </ul>
      <p>Net cash provided by operating activities = $60,000 + $25,000 + $4,000 − $10,000 + $8,000 + $5,000 − $3,000 = <strong>$89,000</strong>.</p>
      <p><strong>Investing activities:</strong> purchase of equipment ($90,000); proceeds from sale of equipment $12,000. Net cash used by investing = <strong>($78,000)</strong>.</p>
      <p><strong>Financing activities:</strong> issuance of bonds $30,000; issuance of common stock $20,000; payment of cash dividends ($25,000). Net cash provided by financing = <strong>$25,000</strong>.</p>
      <p><strong>The reconciliation:</strong> $89,000 − $78,000 + $25,000 = <strong>$36,000</strong> net increase in cash. Beginning cash $40,000 + $36,000 = <strong>$76,000 ending cash</strong> — exactly the balance sheet amount. The statement balances.</p>
      <div class="callout"><strong>Key idea:</strong> The change in cash on the statement must equal the change between the two balance sheets. If it does not, an activity is missing or a sign is flipped — that reconciliation is your built-in error check.</div>
      <div class="mistake"><strong>Common mistake:</strong> Putting the equipment sale proceeds in operating activities because the loss appeared on the income statement. The full $12,000 cash belongs in investing; only the $4,000 loss is adjusted in operating (added back).</div>`
    },
    {
      heading: "Free Cash Flow",
      html: `<p>Operating cash flow tells you what the business generated — but some of that cash must be reinvested just to stay in place. <strong>Free cash flow</strong> is the cash left over after the company maintains (and modestly grows) its productive capacity:</p>
      <div class="formula">Free cash flow = Net cash provided by operating activities − Capital expenditures</div>
      <p><strong>Capital expenditures</strong> are cash spent to acquire long-term operating assets — for Everest, the $90,000 equipment purchase. So Everest's free cash flow = $89,000 − $90,000 = <strong>($1,000)</strong> — slightly negative.</p>
      <p>Is negative free cash flow bad? Not necessarily — context decides. Everest invested $90,000 in new equipment, nearly matching its entire operating cash flow; a one-year dip from heavy investment can be healthy if the equipment earns returns. Persistent negative free cash flow, however, means the company must keep raising outside money to survive. Investors prize consistently positive free cash flow because it funds dividends, debt repayment, buybacks, and acquisitions without borrowing.</p>
      <div class="callout"><strong>Key idea:</strong> Net income is an opinion (shaped by accruals); free cash flow is closer to a fact. It measures the cash the business truly throws off after keeping its engine running.</div>`
    },
    {
      heading: "Ratio Analysis: Liquidity and Solvency (Worked on Everest)",
      html: `<p>Ratios turn raw statement numbers into comparable insights. All ratios below are computed on Everest Supply Co.'s 2026 statements (balance sheet and income statement from the previous section). We group them into three families: <strong>liquidity</strong> (can it pay short-term bills?), <strong>solvency</strong> (can it survive long-term debt?), and <strong>profitability</strong> (does it earn good returns?).</p>
      <p><strong>Liquidity ratios.</strong></p>
      <div class="formula">Current ratio = Current assets ÷ Current liabilities<br>Quick ratio = (Cash + Marketable securities + Accounts receivable) ÷ Current liabilities<br>Accounts receivable turnover = Net credit sales ÷ Average accounts receivable</div>
      <p>Everest's current assets = $76,000 + $60,000 + $52,000 + $5,000 = <strong>$193,000</strong>. Current liabilities = $35,000 + $5,000 + $50,000 = <strong>$90,000</strong> (accounts payable, salaries payable, and notes payable — the bonds are long-term).</p>
      <ul>
      <li><strong>Current ratio</strong> = $193,000 ÷ $90,000 = <strong>2.14 : 1</strong>. Everest has $2.14 of current assets for each $1 of current liabilities — a comfortable cushion (2:1 is a common benchmark).</li>
      <li><strong>Quick ratio</strong> = ($193,000 − $52,000 inventory − $5,000 prepaid) ÷ $90,000 = $136,000 ÷ $90,000 = <strong>1.51 : 1</strong>. Stripping out inventory and prepaid expenses (the least liquid current assets), Everest still covers short-term obligations 1.5 times.</li>
      <li><strong>AR turnover</strong> = $500,000 ÷ (($50,000 + $60,000) ÷ 2) = $500,000 ÷ $55,000 = <strong>9.09 times</strong>. Average collection period = 365 ÷ 9.09 = <strong>40.2 days</strong> — customers pay in about 40 days. Faster turnover means cash arrives sooner and less risk of bad debts.</li>
      </ul>
      <p><strong>Solvency ratios.</strong></p>
      <div class="formula">Debt to assets = Total liabilities ÷ Total assets<br>Times interest earned = (Net income + Interest expense + Income tax expense) ÷ Interest expense</div>
      <p>Everest's total liabilities = $35,000 + $5,000 + $50,000 + $130,000 = <strong>$220,000</strong>. Total assets = $462,000.</p>
      <ul>
      <li><strong>Debt to assets</strong> = $220,000 ÷ $462,000 = <strong>47.6%</strong>. Creditors financed about 48 cents of each asset dollar — moderate leverage.</li>
      <li><strong>Times interest earned</strong> = ($60,000 + $12,000 + $9,000) ÷ $12,000 = $81,000 ÷ $12,000 = <strong>6.75 times</strong>. Earnings before interest and taxes cover the interest bill nearly 7 times over — Everest is in no danger of missing interest payments.</li>
      </ul>
      <div class="mistake"><strong>Common mistake:</strong> Using ending balances instead of averages for turnover and return ratios. Turnover and ROA/ROE relate a full year's flow (sales, net income) to the resources that produced it — always average the beginning and ending balance-sheet amounts.</div>`
    },
    {
      heading: "Ratio Analysis: Profitability and Reading Ratios Together",
      html: `<p><strong>Profitability ratios</strong> measure how effectively the company converts sales and resources into profit.</p>
      <div class="formula">Gross profit margin = Gross profit ÷ Net sales<br>Net profit margin = Net income ÷ Net sales<br>Return on assets (ROA) = Net income ÷ Average total assets<br>Return on equity (ROE) = Net income ÷ Average stockholders' equity</div>
      <ul>
      <li><strong>Gross profit margin</strong> = $180,000 ÷ $500,000 = <strong>36.0%</strong>. Everest keeps 36 cents of gross profit per sales dollar before operating expenses — a read on pricing power and production cost control.</li>
      <li><strong>Net profit margin</strong> = $60,000 ÷ $500,000 = <strong>12.0%</strong>. Twelve cents of each sales dollar survives all expenses to become profit.</li>
      <li><strong>ROA</strong> = $60,000 ÷ (($375,000 + $462,000) ÷ 2) = $60,000 ÷ $418,500 = <strong>14.3%</strong>. Each dollar of assets generated 14.3 cents of profit — strong asset efficiency.</li>
      <li><strong>ROE</strong> = $60,000 ÷ (($187,000 + $242,000) ÷ 2) = $60,000 ÷ $214,500 = <strong>28.0%</strong>. (2025 equity = $120,000 + $67,000 = $187,000; 2026 equity = $140,000 + $102,000 = $242,000.) Owners earned 28 cents per equity dollar — ROE exceeds ROA because leverage magnifies owners' returns.</li>
      </ul>
      <p><strong>Reading ratios together.</strong> No ratio means much alone; the story emerges in combination. Everest's picture: liquidity is solid (2.14 current, 1.51 quick — no short-term stress), leverage is moderate (47.6% debt to assets) with interest easily covered (6.75×), and profitability is strong across the board (36% gross margin, 12% net margin, 14.3% ROA, 28.0% ROE). Collections at 40 days are reasonable. The one caution flag: free cash flow was slightly negative (($1,000)) because equipment purchases ($90,000) consumed nearly all operating cash flow ($89,000) — fine for a year of investment, but worth watching if it persists.</p>
      <p>The analyst's habit is comparative: track each ratio's <strong>trend</strong> over several years and <strong>benchmark</strong> against competitors. A 2.14 current ratio is comforting; a 2.14 that fell from 3.50 last year is a warning. A 12% net margin is excellent in groceries and weak in software. Ratios are the vocabulary — comparison is the sentence.</p>
      <p><strong>Section recap.</strong> The cash flow statement explains the change in cash through operating, investing, and financing activities. The indirect method starts from net income, adds back noncash charges (depreciation, losses), and adjusts for changes in current assets and liabilities — the Everest statement reconciled perfectly: $89,000 − $78,000 + $25,000 = $36,000, matching the balance-sheet cash change. Free cash flow (operating cash flow minus capital expenditures) shows cash truly available after maintaining capacity. Liquidity ratios (current, quick, AR turnover) test short-term survival; solvency ratios (debt to assets, times interest earned) test long-term staying power; profitability ratios (margins, ROA, ROE) test earning power. Read together — with trends and benchmarks — they turn four financial statements into one coherent story.</p>
      <div class="callout"><strong>Key idea:</strong> Liquidity asks "can we pay next month?", solvency asks "can we survive the decade?", profitability asks "is it worth it?". A healthy company answers yes three times — and free cash flow proves it.</div>`
    }
  ],
  keyTerms: [
    { term: "Statement of cash flows", def: "The financial statement reporting cash receipts and payments by operating, investing, and financing activities, reconciling beginning to ending cash." },
    { term: "Operating activities", def: "Cash flows from day-to-day business operations — generally, cash effects of transactions entering net income." },
    { term: "Investing activities", def: "Cash flows from buying and selling long-term assets and making or collecting loans to others." },
    { term: "Financing activities", def: "Cash flows with owners and long-term creditors: issuing stock, borrowing, repaying debt, paying dividends." },
    { term: "Indirect method", def: "Computing operating cash flow by starting with net income and adjusting for noncash items and changes in current accounts." },
    { term: "Capital expenditures", def: "Cash spent to acquire long-term operating assets such as equipment, buildings, and land." },
    { term: "Free cash flow", def: "Net cash provided by operating activities minus capital expenditures; cash available after maintaining productive capacity." },
    { term: "Current ratio", def: "Current assets ÷ current liabilities; measures short-term debt-paying ability." },
    { term: "Quick ratio", def: "(Cash + marketable securities + receivables) ÷ current liabilities; a stricter liquidity test excluding inventory and prepaids." },
    { term: "Accounts receivable turnover", def: "Net credit sales ÷ average accounts receivable; how quickly receivables are collected. 365 ÷ turnover = average collection period in days." },
    { term: "Debt to assets ratio", def: "Total liabilities ÷ total assets; the proportion of assets financed by creditors." },
    { term: "Times interest earned", def: "(Net income + interest expense + income tax expense) ÷ interest expense; how comfortably earnings cover interest." },
    { term: "Gross profit margin", def: "Gross profit ÷ net sales; profitability after production costs, before operating expenses." },
    { term: "Net profit margin", def: "Net income ÷ net sales; the share of each sales dollar that becomes profit." },
    { term: "Return on assets (ROA)", def: "Net income ÷ average total assets; how efficiently assets generate profit." },
    { term: "Return on equity (ROE)", def: "Net income ÷ average stockholders' equity; the return earned for owners." }
  ],
  video: {
    title: "Khan Academy — Accounting and financial statements playlist",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSQl0a2vh4HAHUM1CLDf4YnxpX-WmxKZi",
    note: "Watch the playlist's videos on the cash flow statement (how the three activities work and how the indirect method converts net income to operating cash flow) and the accrual-vs-cash videos that explain why net income and cash differ. Then return to the Everest Supply Co. worked statement above and trace each adjustment back to a balance-sheet change.",
    more: [
      { title: "Accounting Stuff — full-cycle basics video", url: "https://www.youtube.com/watch?v=yYX4bvQSqbo" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>1. Classification drill (multiple choice).</strong> Which of the following is an INVESTING activity?</p><p>a) Paying cash dividends<br>b) Collecting cash from customers<br>c) Selling land for cash<br>d) Issuing common stock for cash</p>`,
      solution: `<p><strong>Solution: c.</strong> Selling land — a long-term asset — is investing. Paying dividends (a) and issuing stock (d) are financing activities; collecting from customers (b) is operating.</p>`
    },
    {
      prompt: `<p><strong>2. Operating cash flow (indirect method).</strong> Perry Inc. reports net income of $45,000, depreciation expense of $12,000, an increase in accounts receivable of $6,000, a decrease in inventory of $4,000, and an increase in accounts payable of $7,000. Compute net cash provided by operating activities.</p>`,
      solution: `<p><strong>Solution.</strong> Start with net income $45,000. Add back depreciation $12,000 (noncash). Subtract the AR increase ($6,000) — sales recorded but cash not collected. Add the inventory decrease $4,000 and the AP increase $7,000. Total = $45,000 + $12,000 − $6,000 + $4,000 + $7,000 = <strong>$62,000</strong> net cash provided by operating activities.</p>`
    },
    {
      prompt: `<p><strong>3. Investing cash flow.</strong> During the year, Quinn Corp. purchased equipment for $60,000 cash, sold a building with a book value of $35,000 for $42,000 cash (a $7,000 gain), and purchased land for $25,000 cash. Compute net cash provided (used) by investing activities.</p>`,
      solution: `<p><strong>Solution.</strong> Investing uses actual cash amounts, not book values or gains: equipment purchase ($60,000) + building proceeds $42,000 (the full cash received, not the $7,000 gain) + land purchase ($25,000) = <strong>($43,000)</strong> net cash used by investing activities. The $7,000 gain would be subtracted in the operating section under the indirect method.</p>`
    },
    {
      prompt: `<p><strong>4. Financing cash flow.</strong> During the year, Rios Inc. issued common stock for $50,000 cash, repaid $20,000 of long-term notes payable, borrowed $35,000 by issuing bonds, and paid $12,000 of cash dividends. Compute net cash provided (used) by financing activities.</p>`,
      solution: `<p><strong>Solution.</strong> Inflows: stock issuance $50,000 + bond issuance $35,000 = $85,000. Outflows: note repayment ($20,000) + dividends ($12,000) = ($32,000). Net cash provided by financing = $85,000 − $32,000 = <strong>$53,000</strong>. Dividends are financing (not operating) because they are distributions to owners, not expenses.</p>`
    },
    {
      prompt: `<p><strong>5. Free cash flow.</strong> Sable Company reports net cash provided by operating activities of $120,000 and capital expenditures of $75,000 for the year. (a) Compute free cash flow. (b) In one or two sentences, say what the result means.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Free cash flow = $120,000 − $75,000 = <strong>$45,000</strong>. (b) After spending what it needed to maintain and renew its productive assets, Sable generated $45,000 of cash truly available for dividends, debt repayment, or expansion — a sign of a self-funding business.</p>`
    },
    {
      prompt: `<p><strong>6. Liquidity ratios.</strong> Tuna Corp. reports: cash $20,000, accounts receivable $45,000, inventory $55,000, prepaid expenses $5,000, accounts payable $40,000, salaries payable $10,000, and short-term notes payable $25,000. Compute (a) the current ratio and (b) the quick ratio.</p>`,
      solution: `<p><strong>Solution.</strong> Current assets = $20,000 + $45,000 + $55,000 + $5,000 = $125,000. Current liabilities = $40,000 + $10,000 + $25,000 = $75,000. (a) Current ratio = $125,000 ÷ $75,000 = <strong>1.67 : 1</strong>. (b) Quick assets = $125,000 − $55,000 − $5,000 = $65,000. Quick ratio = $65,000 ÷ $75,000 = <strong>0.87 : 1</strong>. Tuna covers current liabilities 1.67 times overall, but only 0.87 times without selling inventory — it depends on inventory turnover for short-term safety.</p>`
    },
    {
      prompt: `<p><strong>7. Solvency ratios.</strong> Vale Inc. reports total liabilities of $300,000, total assets of $750,000, net income of $66,000, interest expense of $18,000, and income tax expense of $24,000. Compute (a) debt to assets and (b) times interest earned. Interpret each briefly.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Debt to assets = $300,000 ÷ $750,000 = <strong>40%</strong> — creditors financed 40 cents of each asset dollar; leverage is moderate. (b) Times interest earned = ($66,000 + $18,000 + $24,000) ÷ $18,000 = $108,000 ÷ $18,000 = <strong>6.0 times</strong> — operating earnings cover interest six times over, so Vale comfortably services its debt.</p>`
    },
    {
      prompt: `<p><strong>8. Profitability ratios.</strong> Wren Company reports net sales of $800,000, gross profit of $320,000, net income of $96,000, average total assets of $600,000, and average stockholders' equity of $400,000. Compute gross profit margin, net profit margin, ROA, and ROE.</p>`,
      solution: `<p><strong>Solution.</strong> Gross profit margin = $320,000 ÷ $800,000 = <strong>40%</strong>. Net profit margin = $96,000 ÷ $800,000 = <strong>12%</strong>. ROA = $96,000 ÷ $600,000 = <strong>16%</strong>. ROE = $96,000 ÷ $400,000 = <strong>24%</strong>. Wren keeps 40 cents of gross profit and 12 cents of net profit per sales dollar; each asset dollar earns 16 cents and each equity dollar earns 24 cents — ROE exceeds ROA because debt financing leverages owners' returns.</p>`
    },
    {
      prompt: `<p><strong>9. Reading ratios together (multiple choice).</strong> Zeta Inc. shows: current ratio 2.4, debt to assets 70%, times interest earned 1.2, ROE 35%, and negative free cash flow for three straight years. What is the best overall assessment?</p><p>a) Zeta is financially healthy — liquidity and ROE are strong.<br>b) Zeta is highly profitable and safe because ROE is 35%.<br>c) Zeta is risky: heavy leverage, thin interest coverage, and persistent cash burn outweigh the good liquidity ratio.<br>d) Zeta's liquidity ratio alone proves it can survive any downturn.</p>`,
      solution: `<p><strong>Solution: c.</strong> A 70% debt-to-assets ratio means creditors own most of the company, 1.2× interest coverage leaves almost no margin for an earnings dip, and three years of negative free cash flow means operations cannot fund themselves — the classic profile of a company living on borrowed money. A strong current ratio (a, d) measures only the next twelve months, and a high ROE (b) is misleading here: it is inflated by the very leverage that creates the risk.</p>`
    }
  ],
  quiz: [
    {
      q: "Under the indirect method, depreciation expense is added back to net income because:",
      choices: ["Depreciation is an investing cash outflow", "Depreciation reduced net income but involved no cash payment", "Depreciation increases accounts payable", "Depreciation is a financing activity"],
      answer: 1,
      explanation: "Correct: depreciation is a noncash charge — it lowered net income without spending cash, so it must be added back to reach cash flow. It is not an investing outflow (a is wrong) — no cash moved at all. It does not touch accounts payable (c is wrong), and it is not a financing item (d is wrong)."
    },
    {
      q: "Accounts receivable increased by $15,000 during the year. In the operating section (indirect method), this change is:",
      choices: ["Added to net income, because sales increased", "Subtracted from net income, because cash collections lagged sales", "Ignored, because receivables are an investing item", "Added to net income, because it is a use of cash"],
      answer: 1,
      explanation: "Correct: an AR increase means recorded sales exceeded cash collected — cash is tied up in receivables, so subtract it. Choice a gets the direction backwards. Receivables are operating, not investing (c is wrong). Choice d correctly calls it a use of cash but then adds it, which is the wrong sign."
    },
    {
      q: "A company pays $200,000 cash for a new factory building. On the statement of cash flows this is:",
      choices: ["An operating cash outflow", "An investing cash outflow", "A financing cash outflow", "Not reported, because buildings are noncash items"],
      answer: 1,
      explanation: "Correct: buying a long-term asset is an investing activity. It is not operating (a is wrong) — it is not part of the day-to-day revenue cycle. It is not financing (c is wrong) — no owner or creditor transaction occurred. Choice d is wrong because cash clearly moved."
    },
    {
      q: "Under GAAP, cash paid for interest on bonds is classified as:",
      choices: ["A financing activity, because bonds are long-term debt", "An investing activity, because interest relates to assets", "An operating activity", "A noncash disclosure only"],
      answer: 2,
      explanation: "Correct: GAAP classifies interest paid as operating, since interest expense enters net income. Choice a is the tempting error — the bond principal is financing, but the interest is operating. Interest does not buy an asset (b is wrong), and cash was actually paid, so it is not a noncash item (d is wrong)."
    },
    {
      q: "Free cash flow equals:",
      choices: ["Net income minus dividends", "Net cash provided by operating activities minus capital expenditures", "Current assets minus current liabilities", "Cash from investing plus cash from financing"],
      answer: 1,
      explanation: "Correct: free cash flow is operating cash flow after the capital spending needed to maintain capacity. Net income minus dividends (a) mixes accrual earnings with a financing distribution. Choice c is working capital, not cash flow. Choice d omits operating cash flow entirely — the heart of the measure."
    },
    {
      q: "A current ratio of 0.8 : 1 most likely signals:",
      choices: ["Excellent short-term financial health", "Potential difficulty paying obligations due within the year", "Excessive investment in inventory", "That the company has no long-term debt"],
      answer: 1,
      explanation: "Correct: current liabilities exceed current assets, so the company may struggle to pay near-term bills — a liquidity warning. It is the opposite of excellent health (a is wrong). It says nothing specific about inventory levels (c is wrong) or long-term debt (d is wrong), which the current ratio does not measure."
    },
    {
      q: "Times interest earned of 9.0 means:",
      choices: ["Interest expense is 9 times net income", "Earnings before interest and taxes cover interest expense 9 times", "The company paid interest 9 times during the year", "Debt is 9% of total assets"],
      answer: 1,
      explanation: "Correct: (net income + interest + taxes) ÷ interest = 9, a comfortable coverage cushion. Choice a inverts the relationship. Choice c confuses the ratio with a payment count. Choice d describes the debt to assets ratio, a different solvency measure."
    },
    {
      q: "A company's ROE rises from 12% to 18% while its debt to assets ratio jumps from 40% to 65%. The most careful conclusion is:",
      choices: ["Owners are unambiguously better off", "The higher ROE may reflect riskier leverage rather than better operations", "ROA must also have risen to 18%", "The company has become less risky"],
      answer: 1,
      explanation: "Correct: leverage magnifies ROE, so the increase may come from borrowing more — not from earning more per asset — and the higher debt raises risk. Choice a ignores that risk. ROE and ROA diverge with leverage, so ROA need not match (c is wrong). More debt means more risk, not less (d is wrong)."
    }
  ],
  studyGuide: `<h3>M12 — Cash Flows & Financial Analysis: Quick Reference</h3>
  <p><strong>Statement of cash flows:</strong> explains the change in cash via operating (day-to-day), investing (long-term assets), and financing (owners/creditors) activities. GAAP: interest and taxes paid = operating; dividends paid = financing.</p>
  <p><strong>Indirect method:</strong> net income + noncash charges (depreciation) ± gains/losses on asset sales ± changes in current accounts. Current asset ↑ or current liability ↓ = subtract; current asset ↓ or current liability ↑ = add. The total change must equal the balance-sheet cash change — your error check.</p>
  <p><strong>Free cash flow = operating cash flow − capital expenditures.</strong> Cash truly available after maintaining capacity; persistent negativity is a red flag.</p>
  <p><strong>Liquidity:</strong> current ratio = CA ÷ CL (2:1 is a common benchmark); quick ratio = (cash + securities + AR) ÷ CL; AR turnover = credit sales ÷ avg AR; days = 365 ÷ turnover.</p>
  <p><strong>Solvency:</strong> debt to assets = total liabilities ÷ total assets; times interest earned = (NI + interest + tax) ÷ interest.</p>
  <p><strong>Profitability:</strong> gross margin = gross profit ÷ sales; net margin = NI ÷ sales; ROA = NI ÷ avg assets; ROE = NI ÷ avg equity. ROE &gt; ROA when leverage magnifies owners' returns.</p>
  <p><strong>Read together:</strong> liquidity = survive the year; solvency = survive the decade; profitability = is it worth it. Always use trends and competitor benchmarks — one ratio alone tells little.</p>`
}
