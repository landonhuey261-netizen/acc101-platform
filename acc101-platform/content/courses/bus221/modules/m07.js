// bus221 - Module 7: Raising Capital: Loans, Investors & Bootstrapping
module.exports = {
  number: 7,
  slug: "raising-capital-loans-investors-bootstrapping",
  title: "Raising Capital: Loans, Investors & Bootstrapping",
  estTime: "3–4 hours",
  objectives: [
    "Compare the four main funding sources — bootstrapping, debt, equity, and grants/crowdfunding — by cost, control, and risk.",
    "Explain what a lender looks for and how a loan payment is computed from principal, rate, and term.",
    "Explain equity dilution and compute a simple pre-money and post-money valuation.",
    "Decide how much capital a business actually needs, using the startup-cost total as the anchor.",
    "Match a funding source to a business stage and type, and explain why the wrong match is dangerous."
  ],
  sections: [
    {
      heading: "Four Ways to Fund a Business",
      html: `
<p>Every dollar a business uses comes from one of four places. <strong>Bootstrapping</strong> is funding it yourself — savings, revenue, and creative low-cost choices. It is the slowest route and the one that keeps the most control. <strong>Debt</strong> is borrowed money — a bank loan, a line of credit, a family loan — that must be repaid with interest whether the business succeeds or not. <strong>Equity</strong> is money from investors in exchange for ownership — angel investors and venture capitalists — which is not repaid, but costs a share of the company and a share of its decisions. <strong>Grants and crowdfunding</strong> are money that does not have to be repaid (grants) or is raised from many small backers (crowdfunding), usually in exchange for a product, a reward, or community goodwill rather than ownership.</p>
<p>Maya used three of the four: $10,000 of bootstrapped savings, a $4,800 family loan (debt, at 0% interest, repaid $200 a month for 24 months), and a $5,000 bank loan (debt). She took no equity, because a coffee cart does not need venture-scale money and she did not want to give away ownership of a business she can fund herself. That choice is the module's central lesson: the right funding is the smallest amount, from the cheapest source, that lets the business reach its next proof point.</p>
<div class="callout"><strong>Key idea:</strong> Funding is a tool, not a prize. The goal is a business that pays for itself — the funding only bridges the gap between starting and self-sustaining.</div>
<p>Each source has a price. Bootstrapping costs your savings and your time. Debt costs interest and monthly payments that do not pause in a bad month. Equity costs ownership and control — and, if the business grows, a share of everything it becomes. Grants cost time spent applying and usually come with conditions. Crowdfunding costs the effort of a campaign and the obligation to deliver what was promised. There is no free money; there is only money whose price you have understood.</p>`
    },
    {
      heading: "Debt: What Lenders Want and What a Loan Costs",
      html: `
<p>A lender is not an investor. An investor shares your upside; a lender only wants to be repaid, with interest, on schedule. So a lender asks different questions: How much do you need, exactly? What will it buy? How will the business repay it, month by month? What happens if sales disappoint? And what do you, the owner, have at risk? Maya's bank saw $10,000 of her own savings and a $4,800 family loan already committed — about 75% of the $19,800 startup cost — and a business that breaks even at 1,000 cups and earns $1,500 a month at 1,500 cups. That is a credible repayment story.</p>
<p>Lenders commonly weigh five factors, the "five Cs": <strong>character</strong> (your history and honesty), <strong>capacity</strong> (cash flow to make payments), <strong>capital</strong> (your own money at risk), <strong>collateral</strong> (assets the lender can claim), and <strong>conditions</strong> (the economy, the industry, and the loan's purpose). A weak capacity — cash flow that barely covers the payment — kills more applications than a weak credit score does, because the lender's question is not "are you good?" but "can this business pay every month?"</p>
<p><strong>Worked loan math.</strong> A loan payment depends on principal, rate, and term. For a $20,000 loan at 8% annual interest over 36 months, the monthly rate is 0.08 ÷ 12 = 0.006667 and the payment is $20,000 × 0.006667 ÷ (1 − 1.006667<sup>−36</sup>) = <strong>$626.73 a month</strong> (about $627). Over 36 months the borrower pays 36 × $626.73 = $22,562.28, so the interest cost is $22,562.28 − $20,000 = $2,562.28. Shorter terms mean higher payments but less total interest; longer terms mean lower payments but more total interest. Maya's family loan is simpler: $4,800 at 0% over 24 months is $4,800 ÷ 24 = <strong>$200 a month</strong>, with no interest at all.</p>
<div class="callout"><strong>Key idea:</strong> A lender funds repayment, not dreams. Show the monthly payment, show the cash flow that covers it, and show what you will do if sales fall short — that is the whole loan application in three lines.</div>`
    },
    {
      heading: "Equity: Dilution and Valuation in Plain Numbers",
      html: `
<p>Equity investors buy a share of the company. If an investor gives $10,000 for 20% of the business, the <strong>post-money valuation</strong> is $10,000 ÷ 20% = $50,000 (the value after the money arrives), and the <strong>pre-money valuation</strong> is $50,000 − $10,000 = $40,000 (the value before it). The founder who owned 100% now owns 80%. That is <strong>dilution</strong>: each round of investment shrinks the founder's percentage, even as the company becomes more valuable.</p>
<p>Work it through for Maya's cart as a thought experiment. Suppose an investor offers $10,000 for 20% — post-money $50,000, pre-money $40,000, Maya keeps 80%. If the cart later earns $1,800 a month ($21,600 a year) and the investor's 20% is worth 20% of future profits and of any sale, the investor's share of one year's profit is $4,320. That may be a fair trade if the $10,000 buys a second cart that doubles profit — and a bad trade if it only buys a nicer sign. Equity is judged the same way as debt: what does the money buy, and is the return worth the price?</p>
<div class="callout"><strong>Key idea:</strong> Equity is the most expensive money there is when the business succeeds, because the investor shares every future dollar. It is the cheapest money when the business fails, because it is never repaid. Price it by the upside you are giving away.</div>
<p>Angel investors invest their own money in early businesses, usually smaller amounts and earlier than venture capital firms, which invest pooled money and expect rapid, large-scale growth. A coffee cart is an angel-or-loan business, not a venture-capital business: venture capital needs a company that can grow tenfold, and a single cart cannot. Matching the source to the business is the difference between a useful partner and a miserable one.</p>`
    },
    {
      heading: "How Much Do You Actually Need?",
      html: `
<p>Founders usually ask for too much or too little, and both are expensive. Too much debt means payments the business cannot carry; too much equity means ownership given away for money the business did not need; too little of anything means running out of cash halfway to the first proof point. The right amount comes from the startup-cost total plus a working-capital cushion — for Maya, $19,800 including a $3,000 reserve — and from the cash-flow forecast, which shows how many months the business needs before its own profit sustains it.</p>
<p>A practical rule: raise enough to reach the next proof point plus three to six months of cushion. Maya's proof point is a cart that reliably sells above its 1,000-cup break-even; her cushion is the $3,000 working-capital reserve, which covers one month of her $3,000 fixed costs with no sales at all. If the cart takes three months to reach 1,500 cups, the reserve plus the early months' partial profits must carry it — and the forecast in Module 6 is how she checks that before borrowing.</p>
<div class="callout"><strong>Key idea:</strong> Ask for the amount the numbers show, not the amount that sounds impressive. A lender trusts a $5,000 request tied to a $19,800 budget far more than a $50,000 request tied to a hope.</div>
<p>Finally, know the order to try. Most small businesses should try bootstrapping first, then friends and family (with a written agreement — see Module 9), then a bank or an SBA-backed loan, and only then equity — and only equity if the business can grow fast enough to justify it. Crowdfunding and grants can fit anywhere, but they are slow and uncertain, so they should never be the only plan for a payment that is due next month.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Four sources: bootstrapping (control, slow), debt (repaid with interest), equity (ownership given away), grants/crowdfunding (no repayment, but effort and obligations).</li>
<li>Lenders weigh the five Cs — character, capacity, capital, collateral, conditions — and capacity (cash flow to pay) matters most.</li>
<li>Loan math: $20,000 at 8% over 36 months is $626.73 a month; total paid $22,562.28, interest $2,562.28. Maya's family loan: $4,800 ÷ 24 = $200 a month at 0%.</li>
<li>Equity math: $10,000 for 20% means post-money $50,000, pre-money $40,000, founder keeps 80%.</li>
<li>Raise enough to reach the next proof point plus a 3–6 month cushion — for Maya, $19,800 including a $3,000 reserve.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Raising equity for a business that does not need to grow fast. A coffee cart that gives away 20% for money a loan could have provided has paid venture prices for a neighborhood business.</div>
<div class="callout"><strong>Common mistake:</strong> Borrowing without checking the monthly payment against the forecast. A loan that looks small as a lump sum can be fatal as a monthly payment in a slow month.</div>
<p><strong>Carry into the capstone:</strong> The capstone's Module 7 is the funding section of your finished plan. Keep your startup-cost total, your funding mix, and your loan math — they become that section, with the numbers already checked.</p>`
    }
  ],
  keyTerms: [
    { term: "Bootstrapping", def: "Funding a business from the founder's own savings, revenue, and low-cost choices." },
    { term: "Debt", def: "Borrowed money that must be repaid with interest, whether or not the business succeeds." },
    { term: "Equity", def: "Money from investors in exchange for ownership in the business; not repaid, but it costs a share of the company." },
    { term: "Angel investor", def: "A wealthy individual who invests their own money in early-stage businesses." },
    { term: "Venture capital", def: "Pooled investment money for businesses expected to grow very fast and very large." },
    { term: "Crowdfunding", def: "Raising small amounts from many backers, usually in exchange for a product, reward, or goodwill." },
    { term: "Grant", def: "Money awarded, often by a government or foundation, that does not have to be repaid but comes with conditions." },
    { term: "Dilution", def: "The founder's ownership percentage shrinking as new investors buy shares." },
    { term: "Pre-money valuation", def: "The value of a business before a new investment arrives." },
    { term: "Post-money valuation", def: "The value of a business after a new investment arrives (pre-money plus the investment)." },
    { term: "Five Cs of credit", def: "Character, capacity, capital, collateral, and conditions — what lenders weigh." },
    { term: "Capacity", def: "The business's cash flow available to make loan payments." },
    { term: "Collateral", def: "Assets a lender can claim if the loan is not repaid." },
    { term: "Working capital", def: "Cash kept on hand to cover expenses before revenue arrives — the business's cushion." },
    { term: "Line of credit", def: "A borrowing limit a business can draw on as needed and repay, rather than a single lump-sum loan." }
  ],
  video: {
    title: "How to Raise Capital for a Startup | Startup Funding Explained",
    embedUrl: "https://www.youtube.com/embed/AHH3KtvLMt0",
    note: "A clear comparison of bootstrapping, angels, venture capital, loans, and crowdfunding — including what each costs in ownership, control, and repayment. Match each source in the video to Maya's funding mix.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Name the four funding sources from this module and, for each one, state its main price: what does the founder give up?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Bootstrapping — the founder's own savings and time. Step 2: Debt — interest and fixed monthly payments that do not pause in a bad month. Step 3: Equity — a share of ownership, control, and future profits. Step 4: Grants and crowdfunding — time spent applying or campaigning, plus the conditions or delivery obligations that come with the money.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A $20,000 loan at 8% annual interest over 36 months has a monthly payment of $626.73. (a) What is the total amount paid over 36 months? (b) How much of that is interest?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total paid = 36 × $626.73 = <strong>$22,562.28</strong>. Step 2: Interest = total paid − principal = $22,562.28 − $20,000 = <strong>$2,562.28</strong>. Step 3: Check: the monthly rate is 0.08 ÷ 12 = 0.006667, and the payment formula gives $626.73; the interest is the price of spreading $20,000 over three years.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Maya's family loan is $4,800 at 0% interest, repaid over 24 months. What is the monthly payment? Show the steps.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 0% interest, the monthly payment is simply principal ÷ months. Step 2: $4,800 ÷ 24 = <strong>$200 a month</strong>. Step 3: Check: 24 × $200 = $4,800, exactly the loan — no interest is paid, which is why a written family agreement still matters (Module 9): the terms must be clear even when the price is zero.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An investor offers $10,000 for 20% of a business. (a) What is the post-money valuation? (b) What is the pre-money valuation? (c) What percentage does the founder keep?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Post-money = investment ÷ share = $10,000 ÷ 0.20 = <strong>$50,000</strong>. Step 2: Pre-money = post-money − investment = $50,000 − $10,000 = <strong>$40,000</strong>. Step 3: The founder keeps 100% − 20% = <strong>80%</strong>. Step 4: Check: 80% of the $50,000 post-money value is $40,000 — the founder's share equals the pre-money value, as it should.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A business earns $1,800 a month in operating profit. An investor who owns 20% would receive 20% of that profit each month. (a) How much is that per month? (b) Over 12 months, how much does the investor receive? (c) Is that more or less than the $2,562.28 of interest on the $20,000 bank loan in Problem 2?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Monthly investor share = 20% × $1,800 = <strong>$360 a month</strong>. Step 2: Annual share = 12 × $360 = <strong>$4,320</strong>. Step 3: $4,320 is <strong>more</strong> than the $2,562.28 of loan interest — and it continues every year, while the loan interest ends after 36 months. Step 4: That is why equity is the most expensive money when a business succeeds: the price never stops.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A founder needs $19,800 to start, has $10,000 of savings, and can borrow $5,000 from a bank. How much more must they find, and name two sources they could use for the gap, with one drawback of each?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Gap = $19,800 − $10,000 − $5,000 = <strong>$4,800</strong>. Step 2: Source one — a family loan: drawback is that a failed business can damage the relationship, so the terms must be written down. Step 3: Source two — a small equity investment: drawback is giving away ownership and a share of future profit for money a loan could have provided. Step 4: Maya's actual answer was the family loan, $4,800 at 0% over 24 months — the cheapest source that closed the gap exactly.</p>"
    }
  ],
  quiz: [
    {
      q: "Bootstrapping means funding a business from:",
      choices: ["Venture capital firms", "The founder's own savings, revenue, and low-cost choices", "Government grants only", "Bank loans"],
      answer: 1,
      explanation: "Correct: (b). Bootstrapping is self-funding. (a) is equity from professionals. (c) is one source, not bootstrapping. (d) is debt."
    },
    {
      q: "The main difference between debt and equity is:",
      choices: ["Debt is cheaper in every case", "Debt must be repaid with interest; equity gives away ownership and is not repaid", "Equity must be repaid monthly", "Debt gives the lender ownership"],
      answer: 1,
      explanation: "Correct: (b). That is the defining trade. (a) Equity is more expensive when the business succeeds. (c) Equity has no monthly repayment. (d) Lenders do not take ownership; investors do."
    },
    {
      q: "A $20,000 loan at 8% over 36 months costs $626.73 a month. The total interest is:",
      choices: ["$626.73", "$2,562.28", "$20,000", "$22,562.28"],
      answer: 1,
      explanation: "Correct: (b). 36 × $626.73 = $22,562.28 total paid; minus $20,000 principal = $2,562.28 interest. (a) is one monthly payment. (c) is the principal. (d) is the total paid, not the interest."
    },
    {
      q: "Maya's family loan of $4,800 at 0% over 24 months is repaid at:",
      choices: ["$100 a month", "$200 a month", "$400 a month", "$226 a month"],
      answer: 1,
      explanation: "Correct: (b). $4,800 ÷ 24 = $200. (a) would repay only $2,400. (c) would repay $9,600. (d) is the approximate payment on a $5,000 bank loan at 8% over 24 months, a different loan."
    },
    {
      q: "An investor pays $10,000 for 20%. The post-money valuation is:",
      choices: ["$10,000", "$40,000", "$50,000", "$200,000"],
      answer: 2,
      explanation: "Correct: (c). $10,000 ÷ 0.20 = $50,000. (a) is the investment alone. (b) is the pre-money valuation ($50,000 − $10,000). (d) multiplies by 20 instead of dividing by 0.20."
    },
    {
      q: "After that investment, the founder keeps:",
      choices: ["100%", "80%", "20%", "50%"],
      answer: 1,
      explanation: "Correct: (b). 100% − 20% = 80%. (a) ignores dilution. (c) is the investor's share. (d) would be the result of selling half the company."
    },
    {
      q: "Which of the five Cs is about the business's cash flow to make payments?",
      choices: ["Character", "Capacity", "Collateral", "Conditions"],
      answer: 1,
      explanation: "Correct: (b). Capacity is cash flow to pay. (a) Character is history and honesty. (c) Collateral is assets the lender can claim. (d) Conditions are the economy and the loan's purpose."
    },
    {
      q: "A coffee cart is generally NOT a venture-capital business because:",
      choices: ["Coffee is unpopular", "Venture capital needs a company that can grow tenfold, and a single cart cannot", "Carts cannot borrow money", "Investors dislike food businesses"],
      answer: 1,
      explanation: "Correct: (b). Venture capital is priced for huge growth; a cart's growth is bounded. (a) is false. (c) is false — carts can borrow. (d) is false; food businesses do raise venture money when they can scale."
    }
  ],
  studyGuide: `
<h3>Module 7 — Raising Capital: Loans, Investors & Bootstrapping: Quick Reference</h3>
<p><strong>Core idea:</strong> Funding is a tool, not a prize. Take the smallest amount, from the cheapest source, that reaches the next proof point.</p>
<p><strong>Four sources:</strong> Bootstrapping (your money, full control) · debt (repaid + interest) · equity (ownership given away) · grants/crowdfunding (no repayment, effort + obligations).</p>
<p><strong>Lenders — five Cs:</strong> Character · capacity (cash flow to pay — matters most) · capital (your money at risk) · collateral · conditions.</p>
<div class="formula">Post-money = investment ÷ share &nbsp;|&nbsp; $10,000 for 20% → post-money $50,000, pre-money $40,000, founder keeps 80%</div>
<p><strong>Loan math:</strong> $20,000 at 8%, 36 months → $626.73/month; total $22,562.28; interest $2,562.28. Family loan: $4,800 ÷ 24 = $200/month at 0%.</p>
<p><strong>Watch out:</strong> Equity is the most expensive money when you succeed — the investor's share never stops. Borrow only after checking the monthly payment against your forecast.</p>
<p><strong>Self-check:</strong> For your own idea, write the startup total, the gap after your savings, and the cheapest source that closes it — with its price named honestly.</p>
`
};
