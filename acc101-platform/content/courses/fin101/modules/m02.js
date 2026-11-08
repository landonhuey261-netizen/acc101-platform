// FIN101 - Module 2: Financial Statements & Ratio Analysis
module.exports = {
  "number": 2,
  "slug": "financial-statements-ratio-analysis",
  "title": "Financial Statements & Ratio Analysis",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the three main financial statements and what each one shows.",
    "Explain what the balance sheet, income statement, and cash flow statement each measure.",
    "Compute and interpret liquidity ratios: current, quick, and cash ratios.",
    "Compute and interpret profitability and leverage ratios.",
    "Use a worked ratio example to judge whether a firm is healthy or strained."
  ],
  "sections": [
    {
      "heading": "The Three Statements: One Story in Three Views",
      "html": "\n<p>Finance works from three documents. The <strong>balance sheet</strong> is a snapshot at one moment: what the firm owns (assets), what it owes (liabilities), and what is left for the owners (equity). Its rule is the accounting equation: <strong>Assets = Liabilities + Equity</strong>. The <strong>income statement</strong> is a film over a period: revenue minus expenses equals profit (net income) for that period. The <strong>statement of cash flows</strong> is also a film: it shows where cash came from and where it went, split into operating, investing, and financing activities. A firm can be profitable on the income statement and still run out of cash — the cash flow statement is where that truth shows up.</p>\n<p>The three statements connect. Net income from the income statement flows into retained earnings on the balance sheet; cash from the cash flow statement is the cash on the balance sheet. A finance manager who reads only one statement is reading one chapter of a three-chapter story — and the chapter they skip is usually the one that contains the problem.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Balance sheet: a snapshot — what the firm owns and owes now. Income statement: a film — profit over a period. Cash flow statement: a film — where cash came from and went.</div>\n"
    },
    {
      "heading": "Reading the Balance Sheet",
      "html": "\n<p>The balance sheet lists <strong>current assets</strong> (cash and things that become cash within a year: receivables, inventory) and <strong>long-term assets</strong> (equipment, buildings), against <strong>current liabilities</strong> (bills due within a year) and <strong>long-term liabilities</strong> (loans due later). The difference is equity — the owners' stake. Two questions dominate: can the firm pay its near-term bills (liquidity), and how much of the firm is funded by debt versus owners (leverage)?</p>\n<p>The worked example for this module is a small firm with current assets of $180,000 (including $50,000 of inventory and $20,000 of cash), current liabilities of $90,000, total assets of $600,000, total debt of $300,000, and equity of $300,000. Its sales are $900,000, cost of goods sold $540,000, and net income $45,000. Every ratio in this module is computed from those numbers, so you can check each one yourself.</p>\n<div class=\"formula\">Accounting equation: Assets = Liabilities + Equity &nbsp;|&nbsp; Worked firm: $600,000 = $300,000 + $300,000</div>\n"
    },
    {
      "heading": "Liquidity Ratios: Can the Firm Pay Its Bills?",
      "html": "\n<p>Liquidity ratios ask whether the firm can pay what it owes soon. The <strong>current ratio</strong> is current assets divided by current liabilities: $180,000 ÷ $90,000 = 2.0. A ratio of 2.0 means the firm has two dollars of near-term assets for every dollar of near-term bills — comfortable, though a very high ratio can also mean cash sitting idle. The <strong>quick ratio</strong> is stricter: it removes inventory, which may not sell quickly, so ($180,000 − $50,000) ÷ $90,000 = 1.44. The <strong>cash ratio</strong> is strictest: cash alone divided by current liabilities, $20,000 ÷ $90,000 = 0.22.</p>\n<p>No ratio has a universal “good” value — a grocery store and a factory need different liquidity, because their cash arrives at different speeds. The right use is comparison: against the firm's own past, against similar firms, and against the direction of change. A current ratio falling from 2.5 to 1.2 over two years is a warning even though 1.2 is not yet a crisis.</p>\n<ul>\n<li><strong>Current ratio:</strong> $180,000 ÷ $90,000 = <strong>2.0</strong>.</li>\n<li><strong>Quick ratio:</strong> ($180,000 − $50,000) ÷ $90,000 = <strong>1.44</strong>.</li>\n<li><strong>Cash ratio:</strong> $20,000 ÷ $90,000 = <strong>0.22</strong>.</li>\n</ul>\n"
    },
    {
      "heading": "Leverage and Profitability: Who Owns the Firm, and Does It Earn?",
      "html": "\n<strong>Leverage ratios</strong> show how much of the firm is funded by debt. The <strong>debt-to-equity ratio</strong> is total debt divided by equity: $300,000 ÷ $300,000 = 1.0 — one dollar of debt for each dollar of owners' money. More debt means more risk (interest must be paid even in a bad year) and more potential return (borrowed money can fund growth the owners could not fund alone). <strong>Profitability ratios</strong> show what the firm earns on what it has. <strong>Return on assets (ROA)</strong> is net income divided by total assets: $45,000 ÷ $600,000 = 7.5%. <strong>Return on equity (ROE)</strong> is net income divided by equity: $45,000 ÷ $300,000 = 15.0%. <strong>Gross margin</strong> is (sales − cost of goods sold) ÷ sales: ($900,000 − $540,000) ÷ $900,000 = 40.0%. <strong>Net margin</strong> is net income ÷ sales: $45,000 ÷ $900,000 = 5.0%.\n<p>Read together, the ratios tell a story: this firm is liquid (current ratio 2.0), moderately leveraged (debt-to-equity 1.0), and modestly profitable (net margin 5.0%, ROE 15.0%). The questions a finance manager asks next are about the trend — is the margin rising or falling, is debt growing faster than equity — and about the comparison — how do similar firms do? A ratio is a clue, not a verdict.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A ratio is a clue, not a verdict. Compare it with the firm's past, with similar firms, and with the direction it is moving.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Three statements: balance sheet (snapshot), income statement (profit over a period), cash flow statement (where cash came from and went).</li>\n<li>Liquidity: current ratio 2.0, quick ratio 1.44, cash ratio 0.22 — can the firm pay its near-term bills?</li>\n<li>Leverage: debt-to-equity 1.0 — one dollar of debt per dollar of equity.</li>\n<li>Profitability: gross margin 40.0%, net margin 5.0%, ROA 7.5%, ROE 15.0%.</li>\n<li>Ratios are judged by comparison and trend, never alone.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Calling a firm healthy from one ratio. A firm can be liquid and unprofitable, or profitable and out of cash — read all three statements and all four ratio families.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Forgetting that inventory is the least liquid current asset. The quick ratio exists because inventory may not turn into cash when the bills arrive.</div>\n<p><strong>Ready-to-Work link:</strong> Module 7's capital budgeting and Module 8's working capital both start from these statements — the ratios are the dashboard you will steer by.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Balance sheet",
      "def": "A snapshot at one moment: assets, liabilities, and equity. Assets = Liabilities + Equity."
    },
    {
      "term": "Income statement",
      "def": "A report over a period: revenue minus expenses equals net income."
    },
    {
      "term": "Statement of cash flows",
      "def": "A report over a period showing where cash came from and where it went."
    },
    {
      "term": "Current assets",
      "def": "Cash and assets that become cash within a year: receivables and inventory."
    },
    {
      "term": "Current liabilities",
      "def": "Debts due within a year."
    },
    {
      "term": "Equity",
      "def": "The owners' stake: assets minus liabilities."
    },
    {
      "term": "Liquidity",
      "def": "The ability to pay near-term bills as they come due."
    },
    {
      "term": "Current ratio",
      "def": "Current assets ÷ current liabilities."
    },
    {
      "term": "Quick ratio",
      "def": "(Current assets − inventory) ÷ current liabilities."
    },
    {
      "term": "Cash ratio",
      "def": "Cash ÷ current liabilities."
    },
    {
      "term": "Leverage",
      "def": "How much of a firm is funded by debt rather than by owners."
    },
    {
      "term": "Debt-to-equity ratio",
      "def": "Total debt ÷ equity."
    },
    {
      "term": "Return on assets (ROA)",
      "def": "Net income ÷ total assets."
    },
    {
      "term": "Return on equity (ROE)",
      "def": "Net income ÷ equity."
    },
    {
      "term": "Gross margin",
      "def": "(Sales − cost of goods sold) ÷ sales."
    },
    {
      "term": "Net margin",
      "def": "Net income ÷ sales."
    },
    {
      "term": "Retained earnings",
      "def": "Profits kept in the business instead of paid out."
    },
    {
      "term": "Ratio analysis",
      "def": "Judging a firm by comparing ratios with its past and with similar firms."
    }
  ],
  "video": {
    "title": "FINANCIAL RATIOS: How to Analyze Financial Statements",
    "embedUrl": "https://www.youtube.com/embed/3W_LwpeG8c8",
    "note": "Shows how ratios turn raw financial statements into judgments about a business. Try computing the current ratio from Section 3 before the video reveals its own example.",
    "more": [
      {
        "title": "Financial ratio analysis",
        "url": "https://www.youtube.com/watch?v=MTq7HuvoGck"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A firm has current assets of $180,000 and current liabilities of $90,000. (a) What is its current ratio? (b) If inventory of $50,000 is removed, what is its quick ratio?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Current ratio = $180,000 ÷ $90,000 = <strong>2.0</strong>. Step 2: Quick assets = $180,000 − $50,000 = $130,000. Step 3: Quick ratio = $130,000 ÷ $90,000 = <strong>1.44</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same firm has total debt of $300,000 and equity of $300,000. What is its debt-to-equity ratio, and what does it mean in plain words?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Debt-to-equity = $300,000 ÷ $300,000 = <strong>1.0</strong>. Step 2: In plain words, the firm has one dollar of debt for every dollar of owners' money. Step 3: That is moderate leverage — the firm is half debt-funded and half owner-funded.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The firm has net income of $45,000, total assets of $600,000, and equity of $300,000. (a) What is ROA? (b) What is ROE? (c) Why is ROE higher than ROA?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ROA = $45,000 ÷ $600,000 = 0.075 = <strong>7.5%</strong>. Step 2: ROE = $45,000 ÷ $300,000 = 0.15 = <strong>15.0%</strong>. Step 3: ROE is higher because the firm uses debt — the same $45,000 of profit is spread over a smaller equity base of $300,000 instead of $600,000 of assets. That is leverage working for the owners — and it would work against them if profits fell.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Sales are $900,000 and cost of goods sold is $540,000. (a) What is gross profit? (b) What is the gross margin?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Gross profit = $900,000 − $540,000 = <strong>$360,000</strong>. Step 2: Gross margin = $360,000 ÷ $900,000 = 0.40 = <strong>40.0%</strong>. Step 3: Net margin is only 5.0%, so operating expenses, interest, and taxes consume most of the gross margin — the finance manager's next question is which of those three is growing fastest.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A firm reports $80,000 of profit but its cash falls by $30,000 in the same year. Give two explanations that are consistent with both numbers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Profit and cash are different things — the income statement counts revenue when it is earned, not when cash arrives. Step 2: The firm may have sold on credit (receivables grew) or bought equipment (an investing cash outflow) while still reporting a profit. Step 3: This is why the cash flow statement exists: profit without cash is a warning, and cash without profit is a different warning.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm's current ratio falls from 2.5 to 1.2 over two years. Its profit is unchanged. Is the firm fine? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the trend is a warning even though 1.2 is not yet a crisis. Step 2: Liquidity is falling while profit holds, which suggests cash is being used elsewhere: inventory building up, receivables growing, or debt coming due. Step 3: The finance manager should read the cash flow statement and the balance sheet change before deciding the firm is fine.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The balance sheet shows:",
      "choices": [
        "Profit over a period",
        "Assets, liabilities, and equity at one moment in time",
        "Where cash came from and went",
        "Only the firm's debts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The balance sheet is a snapshot: what the firm owns and owes now. (a) Profit over a period is the income statement. (c) Cash sources and uses are the cash flow statement. (d) Debts are only the liabilities side."
    },
    {
      "q": "Current assets $180,000 and current liabilities $90,000 give a current ratio of:",
      "choices": [
        "0.5",
        "1.0",
        "2.0",
        "2.5"
      ],
      "answer": 2,
      "explanation": "Correct: (c). $180,000 ÷ $90,000 = 2.0. (a) 0.5 inverts the ratio. (b) 1.0 would need equal assets and liabilities. (d) 2.5 would need $225,000 of current assets."
    },
    {
      "q": "The quick ratio removes inventory because:",
      "choices": [
        "Inventory is not an asset",
        "Inventory may not turn into cash quickly when bills arrive",
        "Inventory is a liability",
        "The law requires it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inventory is the least liquid current asset, so the quick ratio is the stricter test. (a) Inventory is an asset. (c) Inventory is not a liability. (d) No law requires the quick ratio."
    },
    {
      "q": "Debt $300,000 and equity $300,000 give a debt-to-equity ratio of:",
      "choices": [
        "0.5",
        "1.0",
        "2.0",
        "3.0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $300,000 ÷ $300,000 = 1.0. (a) 0.5 would need $150,000 of debt. (c) 2.0 would need $600,000 of debt. (d) 3.0 would need $900,000 of debt."
    },
    {
      "q": "Net income $45,000 on total assets $600,000 gives ROA of:",
      "choices": [
        "5.0%",
        "7.5%",
        "15.0%",
        "40.0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $45,000 ÷ $600,000 = 7.5%. (a) 5.0% is the net margin. (c) 15.0% is the ROE. (d) 40.0% is the gross margin."
    },
    {
      "q": "Sales $900,000 and cost of goods sold $540,000 give a gross margin of:",
      "choices": [
        "5.0%",
        "15.0%",
        "40.0%",
        "60.0%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ($900,000 − $540,000) ÷ $900,000 = 40.0%. (a) 5.0% is the net margin. (b) 15.0% is the ROE. (d) 60.0% is the cost of goods sold as a share of sales."
    },
    {
      "q": "A firm can be profitable and still run out of cash because:",
      "choices": [
        "Profit counts revenue when earned, not when cash arrives, and cash can leave for equipment or debt repayment",
        "Profit is always wrong",
        "Cash is not real money",
        "The balance sheet is broken"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Credit sales, inventory, and investing outflows separate profit from cash. (b) Profit is a real measure of earning, just not of cash. (c) Cash is the most real money there is. (d) The balance sheet still balances; the issue is timing."
    },
    {
      "q": "Ratios should be judged by:",
      "choices": [
        "Their absolute value alone",
        "Comparison with the firm's past, similar firms, and the direction of change",
        "The largest ratio in the set",
        "Whether they are above 2.0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A ratio is a clue judged by comparison and trend. (a) Absolute values differ by industry. (c) The largest ratio is not the most important. (d) 2.0 is a rule of thumb for the current ratio only, not for all ratios."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Financial Statements &amp; Ratio Analysis: Quick Reference</h3>\n<p><strong>Core idea:</strong> Three statements tell one story — the balance sheet (snapshot), the income statement (profit), the cash flow statement (cash) — and ratios turn them into judgments.</p>\n<div class=\"formula\">Assets = Liabilities + Equity &nbsp;|&nbsp; Current ratio = CA ÷ CL &nbsp;|&nbsp; Quick ratio = (CA − Inventory) ÷ CL &nbsp;|&nbsp; D/E = Debt ÷ Equity &nbsp;|&nbsp; ROA = NI ÷ Assets &nbsp;|&nbsp; ROE = NI ÷ Equity</div>\n<p><strong>Worked firm:</strong> CA $180,000, CL $90,000, inventory $50,000, cash $20,000, total assets $600,000, debt $300,000, equity $300,000, sales $900,000, COGS $540,000, net income $45,000.</p>\n<p><strong>Results:</strong> current ratio 2.0, quick ratio 1.44, cash ratio 0.22, debt-to-equity 1.0, gross margin 40.0%, net margin 5.0%, ROA 7.5%, ROE 15.0%.</p>\n<p><strong>Watch out:</strong> Profit is not cash — a firm can be profitable and run out of money. And one ratio is never a verdict; compare it with the firm's past, similar firms, and its direction.</p>\n<p><strong>Self-check:</strong> Take the worked firm and compute each ratio yourself from the raw numbers before looking at the answers above.</p>\n"
};
