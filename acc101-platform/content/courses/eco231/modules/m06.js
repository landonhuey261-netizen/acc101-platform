// eco231 - Module 6: Government Spending, Budgets & Public Debt
module.exports = {
  "number": 6,
  "slug": "government-spending-budgets-debt",
  "title": "Government Spending, Budgets & Public Debt",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a government budget: revenue, spending, deficit, surplus, and debt.",
    "Compute the debt-to-GDP ratio and the annual interest cost of the debt.",
    "Use the spending multiplier to trace how a change in government spending moves GDP.",
    "Explain crowding out and why deficits can raise interest rates.",
    "Distinguish a cyclical deficit from a structural deficit and judge when debt is a problem."
  ],
  "sections": [
    {
      "heading": "Reading a Budget",
      "html": "<p>A government budget has two sides. <strong>Revenue</strong> is what the government collects — mostly taxes. <strong>Spending</strong> is what it pays out — defense, health care, pensions, education, interest on past borrowing, and much more. When spending exceeds revenue, the government runs a <strong>deficit</strong>; when revenue exceeds spending, it runs a <strong>surplus</strong>.</p>\n<p>Example numbers (a worked example, not a real country's budget): revenue $4,200 billion, spending $4,800 billion. Deficit = $4,800 − $4,200 = <strong>$600 billion</strong> for that year. The deficit is a flow — money in one year. The <strong>national debt</strong> is the stock: all past deficits (minus surpluses) added up. Each year's deficit adds to the debt; each year's surplus pays it down.</p>\n<div class=\"formula\">Deficit = Spending − Revenue &nbsp;|&nbsp; Debt this year = Debt last year + Deficit</div>\n<p>Governments spend on two kinds of things. <strong>Government purchases</strong> buy goods and services directly — roads, salaries, equipment — and count in GDP. <strong>Transfer payments</strong> — pensions, unemployment benefits, welfare — move money from taxpayers to recipients and do not count directly in GDP, though recipients then spend the money.</p>"
    },
    {
      "heading": "How Big Is the Debt? The Debt-to-GDP Ratio",
      "html": "<p>A debt of $30,000 billion sounds terrifying until you ask how big the economy is. The right measure is the <strong>debt-to-GDP ratio</strong>: debt divided by annual GDP. Example: debt $30,000 billion, GDP $25,000 billion. Ratio = $30,000 ÷ $25,000 = 1.20, or <strong>120%</strong> — the debt is 120% of one year's output.</p>\n<p>The ratio matters more than the dollar figure because GDP is the tax base that services the debt. A debt of 120% of GDP is heavy; a debt of 30% is light. What matters for sustainability is whether the ratio is rising or falling: if GDP grows faster than the debt, the ratio falls even while the debt itself grows.</p>\n<p>Debt also has a running cost: <strong>interest</strong>. Example: debt $20,000 billion at an average interest rate of 4%. Annual interest = $20,000 × 0.04 = <strong>$800 billion a year</strong> — money that buys no roads, no schools, and no defense. When interest rates rise, that bill rises too, even if the debt itself does not change.</p>"
    },
    {
      "heading": "The Spending Multiplier",
      "html": "<p>Government spending does not stop with the first recipient. A road crew paid $100 billion spends much of it on food, rent, and cars; those sellers spend it again, and so on. The <strong>spending multiplier</strong> measures the total change in GDP from $1 of extra government spending.</p>\n<p>The simplest multiplier comes from the marginal propensity to consume (MPC) — the share of each extra dollar of income that gets spent. Multiplier = 1 ÷ (1 − MPC). If MPC is 0.8, the multiplier is 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = <strong>5</strong>. Then $100 billion of extra spending raises GDP by $100 × 5 = <strong>$500 billion</strong> in total, across all the rounds.</p>\n<div class=\"formula\">Multiplier = 1 ÷ (1 − MPC) &nbsp;|&nbsp; Change in GDP = Multiplier × Change in spending</div>\n<p>The multiplier is largest when the economy has spare capacity — unemployed workers and idle factories — and when the spending goes to people who will spend it quickly. In a booming economy at full employment, extra spending mostly pushes prices up instead of output.</p>"
    },
    {
      "heading": "Crowding Out and the Burden of Debt",
      "html": "<p>Deficits must be financed by borrowing, and borrowing has a price. When the government borrows heavily, it competes with firms and households for the same pool of savings, which can push interest rates up. Higher rates discourage private investment — factories not built, houses not bought. Economists call this <strong>crowding out</strong>: public borrowing crowds out private spending.</p>\n<p>Whether debt is a burden depends on what it bought. Debt that builds a highway, a school, or a power grid leaves assets that raise future GDP and future tax revenue — the debt can pay for itself. Debt that funds everyday consumption leaves nothing behind but the interest bill. And debt owed to foreigners is heavier than debt owed to citizens, because the interest leaves the country.</p>\n<p>Two deficits are worth separating. A <strong>cyclical deficit</strong> appears in a recession: tax revenue falls and benefit spending rises automatically, and the deficit shrinks again when the economy recovers. A <strong>structural deficit</strong> remains even at full employment — a sign that spending and revenue are permanently out of balance. The structural deficit is the one that needs a policy decision.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Deficit = spending − revenue (a flow); debt = accumulated deficits (a stock).</li>\n<li>Debt-to-GDP ratio = debt ÷ GDP; example $30,000 ÷ $25,000 = 120%.</li>\n<li>Annual interest = debt × interest rate; $20,000 billion at 4% = $800 billion a year.</li>\n<li>Multiplier = 1 ÷ (1 − MPC); MPC 0.8 → multiplier 5; $100 billion → $500 billion of GDP.</li>\n<li>Crowding out: government borrowing can raise interest rates and displace private investment.</li>\n<li>Cyclical deficits fade with recovery; structural deficits need a decision.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the deficit and the debt as the same thing. The deficit is one year's shortfall; the debt is the running total. A government can cut the deficit to zero and still owe a huge debt.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a $1 rise in government spending raises GDP by exactly $1. The multiplier means the total effect is larger — $500 billion from $100 billion at MPC 0.8 — when the economy has spare capacity.</div>\n<p><strong>Ready-to-Work link:</strong> When you read a headline about a deficit, ask three questions: how big is it as a share of GDP, is it cyclical or structural, and what did the borrowing buy?</p>"
    }
  ],
  "keyTerms": [
    { "term": "Government revenue", "def": "Money the government collects, mostly from taxes." },
    { "term": "Government spending", "def": "Money the government pays out on goods, services, and transfers." },
    { "term": "Budget deficit", "def": "Spending minus revenue in a year, when spending is larger." },
    { "term": "Budget surplus", "def": "Revenue minus spending in a year, when revenue is larger." },
    { "term": "National debt", "def": "The accumulated total of all past deficits minus surpluses." },
    { "term": "Debt-to-GDP ratio", "def": "National debt divided by annual GDP; the standard measure of how heavy a debt is." },
    { "term": "Government purchases", "def": "Government buying of goods and services, which counts directly in GDP." },
    { "term": "Transfer payments", "def": "Government payments that move money to recipients, such as pensions and benefits; they do not count directly in GDP." },
    { "term": "Interest on the debt", "def": "The annual cost of servicing the national debt: debt times the interest rate." },
    { "term": "Spending multiplier", "def": "The total change in GDP caused by $1 of extra government spending." },
    { "term": "Marginal propensity to consume (MPC)", "def": "The share of an extra dollar of income that is spent rather than saved." },
    { "term": "Crowding out", "def": "Government borrowing pushing up interest rates and displacing private investment." },
    { "term": "Cyclical deficit", "def": "A deficit that appears in a recession and fades as the economy recovers." },
    { "term": "Structural deficit", "def": "A deficit that remains even at full employment, showing spending and revenue out of balance." },
    { "term": "Automatic stabilizers", "def": "Budget features, such as unemployment benefits and progressive taxes, that automatically cushion recessions." },
    { "term": "Fiscal policy", "def": "The use of government spending and taxation to influence the economy." },
    { "term": "Balanced budget", "def": "A budget in which revenue equals spending, so the deficit is zero." },
    { "term": "Primary deficit", "def": "The deficit excluding interest payments on the existing debt." }
  ],
  "video": {
    "title": "Fiscal Policy and Stimulus: Crash Course Economics #8",
    "embedUrl": "https://www.youtube.com/embed/otmgFQHbaDo",
    "note": "Crash Course shows how government uses spending and taxes to fight recessions, the multiplier at work, and the Keynesian versus classical debate. Watch it, then recompute the $100 billion multiplier example in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A government's revenue is $4,200 billion and its spending is $4,800 billion. (a) What is the deficit? (b) If the debt was $29,400 billion at the start of the year, what is it at the end?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Deficit = $4,800 − $4,200 = <strong>$600 billion</strong>. Step 2: End-of-year debt = $29,400 + $600 = <strong>$30,000 billion</strong>. Step 3: The deficit is the year's flow; the debt is the stock it adds to.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A country has a national debt of $30,000 billion and GDP of $25,000 billion. (a) What is the debt-to-GDP ratio? (b) If GDP grows to $30,000 billion while the debt stays at $30,000 billion, what is the new ratio?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Ratio = $30,000 ÷ $25,000 = 1.20 = <strong>120%</strong>. Step 2: New ratio = $30,000 ÷ $30,000 = 1.00 = <strong>100%</strong>. Step 3: The debt did not fall by a dollar, but the ratio fell by 20 points because the economy grew — growth is one way out of debt.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A government owes $20,000 billion at an average interest rate of 4%. (a) What is its annual interest bill? (b) If the interest rate rises to 5%, what is the new bill?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Interest = $20,000 × 0.04 = <strong>$800 billion a year</strong>. Step 2: At 5%: $20,000 × 0.05 = <strong>$1,000 billion a year</strong>. Step 3: A one-point rise in rates costs an extra $200 billion a year without any new borrowing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The marginal propensity to consume is 0.8. (a) What is the spending multiplier? (b) The government raises spending by $100 billion. How much does GDP rise in total? (c) What if the MPC were 0.5 instead?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Multiplier = 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = <strong>5</strong>. Step 2: GDP rises by $100 × 5 = <strong>$500 billion</strong>. Step 3: With MPC 0.5, the multiplier is 1 ÷ 0.5 = 2, so GDP rises by $100 × 2 = <strong>$200 billion</strong> — a lower MPC means more leaks out as saving at each round.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In your own words, explain crowding out, and give one condition under which it is weak and one under which it is strong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Crowding out is government borrowing competing for savings, pushing interest rates up and displacing private investment. Step 2: It is weak in a deep recession, when there is plenty of idle saving and the central bank is holding rates low — the government is borrowing money nobody else wants. Step 3: It is strong in a booming economy at full employment, when savings are scarce and every dollar the government borrows is a dollar a firm cannot borrow.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A country's deficit is $500 billion in a recession year and $100 billion the next year, when the economy is back at full employment. (a) Which part is cyclical and which part is structural, roughly? (b) What should the government worry about more?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At full employment the deficit is $100 billion, so the structural deficit is about <strong>$100 billion</strong>. Step 2: The cyclical part in the recession year is about $500 − $100 = <strong>$400 billion</strong> — it fades as the economy recovers. Step 3: The government should worry more about the $100 billion structural deficit, because it will not fix itself with growth; it needs a decision on spending or taxes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Revenue $4,200 billion and spending $4,800 billion gives a deficit of:",
      "choices": ["$600 billion", "$9,000 billion", "$4,200 billion", "$0 — the budget is balanced"],
      "answer": 0,
      "explanation": "Correct: (a). Deficit = $4,800 − $4,200 = $600 billion. (b) adds the two numbers. (c) is the revenue figure. (d) would need revenue to equal spending."
    },
    {
      "q": "The national debt is:",
      "choices": ["One year's deficit", "The accumulated total of past deficits minus surpluses", "The same as government spending", "The interest paid in one year"],
      "answer": 1,
      "explanation": "Correct: (b). The debt is a stock built up from yearly flows. (a) is the deficit, a flow. (c) Spending is one year's outlay. (d) Interest is the yearly cost of the debt, not the debt itself."
    },
    {
      "q": "Debt $30,000 billion and GDP $25,000 billion gives a debt-to-GDP ratio of:",
      "choices": ["83%", "100%", "120%", "150%"],
      "answer": 2,
      "explanation": "Correct: (c). $30,000 ÷ $25,000 = 1.20 = 120%. (a) is GDP divided by debt. (b) would need debt equal to GDP. (d) would need debt of $37,500 billion."
    },
    {
      "q": "Debt of $20,000 billion at 4% interest costs per year:",
      "choices": ["$80 billion", "$200 billion", "$800 billion", "$2,000 billion"],
      "answer": 2,
      "explanation": "Correct: (c). $20,000 × 0.04 = $800 billion. (a) is 0.4% of the debt. (b) is 1% of the debt. (d) is 10% of the debt."
    },
    {
      "q": "If the MPC is 0.8, the spending multiplier is:",
      "choices": ["0.8", "1.25", "4", "5"],
      "answer": 3,
      "explanation": "Correct: (d). Multiplier = 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. (a) is the MPC itself. (b) is 1 ÷ 0.8, the wrong formula. (c) is 1 ÷ 0.25, which would need an MPC of 0.75."
    },
    {
      "q": "With a multiplier of 5, $100 billion of extra government spending raises GDP by:",
      "choices": ["$20 billion", "$100 billion", "$400 billion", "$500 billion"],
      "answer": 3,
      "explanation": "Correct: (d). $100 × 5 = $500 billion. (a) divides by the multiplier. (b) is the first round only, ignoring the multiplier. (c) would be a multiplier of 4."
    },
    {
      "q": "Crowding out means government borrowing:",
      "choices": ["Lowers interest rates", "Pushes interest rates up and displaces private investment", "Has no effect on interest rates", "Reduces the national debt"],
      "answer": 1,
      "explanation": "Correct: (b). The government competes for savings, rates rise, and private borrowers are squeezed out. (a) is the opposite. (c) ignores the loanable-funds market. (d) Borrowing adds to the debt, it does not reduce it."
    },
    {
      "q": "A structural deficit is a deficit that:",
      "choices": ["Appears only in a recession", "Remains even at full employment", "Is caused by the central bank", "Disappears when interest rates fall"],
      "answer": 1,
      "explanation": "Correct: (b). A structural deficit is a permanent imbalance between spending and revenue. (a) describes a cyclical deficit. (c) The central bank does not run the budget. (d) Lower rates cut the interest bill but do not close a structural gap."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Government Spending, Budgets & Debt: Quick Reference</h3>\n<p><strong>Core idea:</strong> The deficit is one year's shortfall (a flow); the debt is the running total (a stock). Judge debt against GDP, not in dollars alone.</p>\n<div class=\"formula\">Deficit = Spending − Revenue &nbsp;|&nbsp; Debt-to-GDP = Debt ÷ GDP &nbsp;|&nbsp; Multiplier = 1 ÷ (1 − MPC)</div>\n<p><strong>Worked anchors:</strong> $4,800 − $4,200 = $600bn deficit; debt $29,400 + $600 = $30,000bn. $30,000 ÷ $25,000 = 120% debt-to-GDP. Interest: $20,000bn × 4% = $800bn/yr; at 5% = $1,000bn. MPC 0.8 → multiplier 5; $100bn → $500bn of GDP. MPC 0.5 → multiplier 2; $100bn → $200bn.</p>\n<p><strong>Crowding out:</strong> Government borrowing can raise rates and displace private investment — weak in a deep recession, strong at full employment.</p>\n<p><strong>Two deficits:</strong> Cyclical (fades with recovery) vs. structural (remains at full employment — needs a decision).</p>\n<p><strong>Watch out:</strong> Deficit ≠ debt. And $1 of spending moves GDP by the multiplier, not by $1.</p>\n<p><strong>Self-check:</strong> A country with debt $30,000bn and GDP $30,000bn has a 100% ratio — recompute it and explain why growth lowers the ratio even if the debt never falls.</p>\n"
};
