// MKT101 - Module 11: Marketing Metrics: Measuring What Works
module.exports = {
  "number": 11,
  "slug": "marketing-metrics-measuring-what-works",
  "title": "Marketing Metrics: Measuring What Works",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why marketing must be measured and what a metric must do to be useful.",
    "Compute CAC, customer lifetime value, and the LTV-to-CAC ratio.",
    "Compute ROI, ROAS, and conversion rates from campaign data.",
    "Explain the difference between a leading and a lagging indicator.",
    "Use a worked campaign example to decide whether to scale, fix, or stop it."
  ],
  "sections": [
    {
      "heading": "Why Measure? Marketing Without Numbers Is Guessing",
      "html": "\n<p>Marketing that is not measured is a matter of opinion: the loudest voice in the room decides what worked, and the budget follows whoever argued best. <strong>Marketing metrics</strong> replace opinion with evidence — they show what each dollar bought, which customers it bought, and whether those customers were worth buying. A useful metric has three qualities: it is tied to a decision (it changes what you do next), it is comparable over time (the same definition every month), and it is honest (it counts what actually happened, not what you hoped happened).</p>\n<p>The most common measurement error is counting what is easy instead of what matters. Views, likes, and clicks are easy to count and feel good; sales, profit, and repeat purchases are harder and matter more. A dashboard full of easy numbers is a comfort blanket, not a control panel. The discipline of this module is to trace every metric back to money: did this spending bring customers who paid more than they cost?</p>\n<div class=\"callout\"><strong>Key idea:</strong> A useful metric is tied to a decision, comparable over time, and honest. Views and likes are easy to count; sales and profit are what matter.</div>\n"
    },
    {
      "heading": "The Core Numbers: CAC, LTV, and Their Ratio",
      "html": "\n<strong>Customer acquisition cost (CAC)</strong> is what it costs, on average, to win one new customer: total sales and marketing spend divided by the number of new customers won. <strong>Customer lifetime value (LTV or CLV)</strong> is what a customer is worth over the whole relationship: average order value times purchase frequency times how long they stay, times the margin on each order. The <strong>LTV-to-CAC ratio</strong> compares the two: a ratio of 3:1 (a customer worth three times what they cost to win) is the usual rule of thumb for a healthy business; a ratio below 1:1 means the business loses money on every customer it wins, however fast it grows.\n<p>The ratio is a guide, not a verdict. A young business may accept a low ratio while it builds; a business with high retention can afford a higher CAC because each customer stays longer. What the ratio must never do is hide the truth: if CAC is rising and LTV is flat, the business is buying growth it cannot afford, and the fix is not more spending but better targeting, a better offer, or a better retention program.</p>\n<div class=\"formula\">Worked example: $20,000 spent, 165 new customers → CAC = $121.21. Average order $180, margin 40%, 3 purchases a year → LTV (gross profit) = $216. LTV-to-CAC = $216 ÷ $121.21 = 1.78.</div>\n"
    },
    {
      "heading": "ROI, ROAS, and Conversion Rates",
      "html": "\n<strong>Return on investment (ROI)</strong> measures profit against cost: (gross profit from the campaign − campaign cost) ÷ campaign cost. A campaign that returns $35,640 of gross profit on $20,000 of spend has an ROI of 78.2%. <strong>Return on ad spend (ROAS)</strong> is simpler and weaker: revenue divided by ad spend — it ignores costs, so a ROAS of 4:1 can still lose money if margins are thin. <strong>Conversion rate</strong> is the share of people who take the wanted action: buyers divided by visitors, or leads divided by clicks. Each metric answers a different question, and using the wrong one is how a losing campaign gets called a winner.\n<p>The worked example in this module is Lab 2's campaign, and the numbers are the same: $20,000 of spend, 660 leads, 165 customers, $89,100 of revenue, $35,640 of gross profit, and a 78.2% ROI. The lesson is not the numbers themselves but the habit: every campaign ends with the same four lines — what did we spend, what did we get, what was it worth, and what do we do next?</p>\n<ul>\n<li><strong>CAC:</strong> spend ÷ new customers. What did each customer cost?</li>\n<li><strong>LTV:</strong> order value × frequency × lifetime × margin. What is each customer worth?</li>\n<li><strong>ROI:</strong> (gross profit − cost) ÷ cost. Did the campaign pay?</li>\n<li><strong>ROAS:</strong> revenue ÷ ad spend. Simpler, and it ignores costs.</li>\n<li><strong>Conversion rate:</strong> actions ÷ opportunities. Where does the funnel leak?</li>\n</ul>\n"
    },
    {
      "heading": "Leading and Lagging Indicators",
      "html": "\n<p>A <strong>lagging indicator</strong> reports what already happened: sales last month, revenue last quarter, customers lost. It is accurate and too late to change. A <strong>leading indicator</strong> predicts what will happen: qualified leads this week, trial signups, repeat-visit rates, customer satisfaction scores. Leading indicators are less certain but actionable — they are the numbers you can still move. A good dashboard has both: lagging indicators to judge the result, leading indicators to steer while there is still time.</p>\n<p>The trap is to manage only the lagging numbers — cutting spending after a bad quarter, or celebrating a good one — while ignoring the leading numbers that caused them. A fall in qualified leads this month is next quarter's fall in sales, and the time to fix it is now, while the leads can still be won. Marketing measurement is not a report card; it is a steering wheel.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Lagging indicators judge the past. Leading indicators steer the future. Manage the leading ones; report the lagging ones.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Measure what changes a decision. Views and likes are easy; sales, profit, and repeat purchases matter.</li>\n<li>CAC = spend ÷ new customers. LTV = order value × frequency × lifetime × margin. LTV-to-CAC of 3:1 is the usual healthy guide.</li>\n<li>ROI = (gross profit − cost) ÷ cost. ROAS = revenue ÷ ad spend, and it ignores costs.</li>\n<li>Leading indicators predict and can be steered; lagging indicators judge what already happened.</li>\n<li>Worked numbers: CAC $121.21, LTV $216, ratio 1.78, ROI 78.2% on the $20,000 campaign.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Calling a campaign a winner on ROAS alone. A 4:1 ROAS loses money if the margin is thin — ROI is the number that counts profit.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Managing only lagging indicators. By the time sales fall, the leads that caused it fell weeks ago — watch the leading numbers.</div>\n<p><strong>Ready-to-Work link:</strong> Lab 2 runs the full campaign numbers — CAC, LTV, ROI, and the scale-or-stop decision.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Marketing metric",
      "def": "A number that measures marketing performance and informs a decision."
    },
    {
      "term": "Customer acquisition cost (CAC)",
      "def": "Total sales and marketing spend divided by the number of new customers won."
    },
    {
      "term": "Customer lifetime value (LTV / CLV)",
      "def": "The gross profit a customer is worth over the whole relationship."
    },
    {
      "term": "LTV-to-CAC ratio",
      "def": "Lifetime value divided by acquisition cost; 3:1 is the usual healthy guide."
    },
    {
      "term": "Return on investment (ROI)",
      "def": "(Gross profit from a campaign − campaign cost) ÷ campaign cost."
    },
    {
      "term": "Return on ad spend (ROAS)",
      "def": "Revenue divided by advertising spend; ignores other costs."
    },
    {
      "term": "Conversion rate",
      "def": "The share of people who take the wanted action, out of those who had the chance."
    },
    {
      "term": "Leading indicator",
      "def": "A number that predicts future results and can still be acted on."
    },
    {
      "term": "Lagging indicator",
      "def": "A number that reports results that already happened."
    },
    {
      "term": "Dashboard",
      "def": "A display of the key metrics a business watches regularly."
    },
    {
      "term": "Attribution",
      "def": "Assigning credit for a sale to the marketing that caused it."
    },
    {
      "term": "Churn",
      "def": "The rate at which customers stop buying or cancel."
    },
    {
      "term": "Retention rate",
      "def": "The share of customers who keep buying over a period."
    },
    {
      "term": "Cost per lead (CPL)",
      "def": "Marketing spend divided by the number of leads generated."
    },
    {
      "term": "Gross profit",
      "def": "Revenue minus the direct cost of what was sold."
    },
    {
      "term": "Benchmark",
      "def": "A reference number used to judge whether a result is good or bad."
    }
  ],
  "video": {
    "title": "20 Marketing Metrics That Drive REVENUE: The LTV, CAC, & ROAS Framework",
    "embedUrl": "https://www.youtube.com/embed/E3_VI3RNY4I",
    "note": "Walks through the revenue metrics that matter, including lifetime value and customer acquisition cost. Work the CAC example from Section 2 alongside the video's numbers.",
    "more": [
      {
        "title": "📊 The Most Important Business Metric: LTV to CAC (Explained by Hormozi)",
        "url": "https://www.youtube.com/watch?v=OXYGgvZeV1E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A campaign spends $20,000 and wins 165 new customers. What is the CAC?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: CAC = spend ÷ new customers. Step 2: $20,000 ÷ 165 = <strong>$121.21</strong> per customer. Step 3: Every customer must be worth more than $121.21 in gross profit, or the campaign loses money on each one it wins.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Average order is $180, margin is 40%, and a customer buys 3 times a year. (a) What is the gross profit per order? (b) What is the LTV for one year of gross profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Gross profit per order = $180 × 0.40 = <strong>$72</strong>. Step 2: One-year LTV = $72 × 3 = <strong>$216</strong>. Step 3: With a CAC of $121.21, the LTV-to-CAC ratio is $216 ÷ $121.21 = 1.78 — above 1, below the 3:1 guide, so the campaign pays but has room to improve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A campaign spends $20,000 and produces $35,640 of gross profit. (a) What is its ROI? (b) Revenue was $89,100 — what is its ROAS, and why is ROI the better verdict?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ROI = ($35,640 − $20,000) ÷ $20,000 = $15,640 ÷ $20,000 = 0.782 = <strong>78.2%</strong>. Step 2: ROAS = $89,100 ÷ $20,000 = <strong>4.46</strong>. Step 3: ROAS ignores costs — a 4.46 ROAS with a thin margin could still lose money, while ROI counts profit after the cost of what was sold.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A website gets 10,000 visitors and 100 buyers. (a) What is the conversion rate? (b) If the site improves to 200 buyers from the same visitors, what is the new rate?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Conversion rate = 100 ÷ 10,000 = 0.01 = <strong>1%</strong>. Step 2: New rate = 200 ÷ 10,000 = 0.02 = <strong>2%</strong>. Step 3: Doubling the conversion rate doubles sales without spending a dollar more on visitors — fixing the funnel is often cheaper than filling it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A business watches two numbers: qualified leads this week (leading) and sales last quarter (lagging). Its leads fall 30% this month. What should it do, and why not wait for the sales number?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Act now — investigate why leads fell (a broken ad, a dead channel, a new competitor) and fix it. Step 2: Sales last quarter cannot be changed; it is a report, not a lever. Step 3: The lead fall is next quarter's sales fall, and the only time to prevent it is while the leads can still be won.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A campaign's LTV-to-CAC ratio is 0.8. Explain what that means and give two ways to fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A ratio of 0.8 means each customer is worth 80% of what they cost to win — the business loses money on every new customer. Step 2: Fix one side or the other: lower CAC (better targeting, cheaper channels, higher conversion) or raise LTV (more repeat purchases, higher margin, longer retention). Step 3: Growing faster at 0.8 only loses money faster — fix the ratio before scaling.</p>"
    }
  ],
  "quiz": [
    {
      "q": "CAC is calculated as:",
      "choices": [
        "Revenue ÷ customers",
        "Total sales and marketing spend ÷ new customers won",
        "Profit ÷ spend",
        "Leads ÷ spend"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CAC is what each new customer cost to win. (a) Revenue per customer is not a cost. (c) Profit divided by spend is a return, not a cost per customer. (d) Leads divided by spend is the inverse of cost per lead."
    },
    {
      "q": "A campaign spends $20,000 and wins 165 customers. CAC is:",
      "choices": [
        "$121.21",
        "$165.00",
        "$200.00",
        "$20.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). $20,000 ÷ 165 = $121.21. (b) $165.00 would be the spend divided by about 121 customers. (c) $200.00 would be 100 customers. (d) $20.00 divides by 1,000."
    },
    {
      "q": "Average order $180, margin 40%, 3 purchases a year. One-year LTV (gross profit) is:",
      "choices": [
        "$72",
        "$180",
        "$216",
        "$540"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Gross profit per order is $180 × 0.40 = $72; $72 × 3 = $216. (a) $72 is one order's profit, not a year's. (b) $180 is one order's revenue. (d) $540 is a year's revenue, not its gross profit."
    },
    {
      "q": "With LTV $216 and CAC $121.21, the LTV-to-CAC ratio is about:",
      "choices": [
        "0.56",
        "1.78",
        "3.00",
        "17.80"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $216 ÷ $121.21 = 1.78. (a) 0.56 is the inverse (CAC ÷ LTV). (c) 3.00 is the healthy guide, not this campaign's ratio. (d) 17.80 is ten times too large."
    },
    {
      "q": "A campaign returns $35,640 of gross profit on $20,000 of spend. ROI is:",
      "choices": [
        "35.6%",
        "56.2%",
        "78.2%",
        "178.2%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ($35,640 − $20,000) ÷ $20,000 = 78.2%. (a) 35.6% divides the wrong numbers. (b) 56.2% is $35,640 ÷ $63,400, a meaningless ratio. (d) 178.2% is $35,640 ÷ $20,000 — the return ratio, not the profit on cost."
    },
    {
      "q": "ROAS can mislead because it:",
      "choices": [
        "Ignores costs — revenue divided by ad spend says nothing about margin",
        "Is hard to calculate",
        "Only works for email",
        "Counts profit correctly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ROAS divides revenue by spend and ignores the cost of what was sold. (b) ROAS is simple to calculate. (c) ROAS works for any advertising. (d) Counting profit correctly is ROI's job, not ROAS's."
    },
    {
      "q": "A leading indicator is:",
      "choices": [
        "Sales last quarter",
        "Qualified leads this week — a number that predicts results and can still be acted on",
        "Last year's profit",
        "The number of stores a firm has"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Leading indicators predict and can be steered. (a) and (c) are lagging indicators — accurate and too late to change. (d) Store count is a fact, not an indicator of future sales."
    },
    {
      "q": "A website has 10,000 visitors and 100 buyers. Its conversion rate is:",
      "choices": [
        "10%",
        "1%",
        "0.1%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 ÷ 10,000 = 1%. (a) 10% would be 1,000 buyers. (c) 0.1% would be 10 buyers. (d) 100% would mean every visitor bought."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Marketing Metrics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Measure what changes a decision — and trace every metric back to money: did this spending bring customers worth more than they cost?</p>\n<div class=\"formula\">CAC = Spend ÷ New customers &nbsp;|&nbsp; LTV = Order × Margin × Frequency × Lifetime &nbsp;|&nbsp; ROI = (Gross profit − Cost) ÷ Cost &nbsp;|&nbsp; ROAS = Revenue ÷ Ad spend</div>\n<p><strong>Worked numbers:</strong> $20,000 spend, 165 customers → CAC $121.21. $180 order × 40% margin × 3 purchases → LTV $216. Ratio 1.78. Gross profit $35,640 → ROI 78.2%. Revenue $89,100 → ROAS 4.46.</p>\n<p><strong>Guides:</strong> LTV-to-CAC of 3:1 is the usual healthy mark; below 1:1 the business loses money on every customer it wins.</p>\n<p><strong>Leading vs. lagging:</strong> leading indicators (leads, trials, satisfaction) predict and can be steered; lagging indicators (sales, profit) judge what already happened.</p>\n<p><strong>Watch out:</strong> ROAS alone can call a losing campaign a winner. And a dashboard of easy numbers (views, likes) is a comfort blanket, not a control panel.</p>\n<p><strong>Self-check:</strong> Pick a campaign you know and write its four lines: what did we spend, what did we get, what was it worth, and what do we do next?</p>\n"
};
