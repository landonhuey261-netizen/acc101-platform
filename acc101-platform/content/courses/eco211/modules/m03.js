// eco211 - Module 3: Interest Rates: What Sets Them & Why They Move
module.exports = {
  "number": 3,
  "slug": "interest-rates",
  "title": "Interest Rates: What Sets Them & Why They Move",
  "estTime": "3–4 hours",
  "objectives": [
    "Define an interest rate as the price of borrowing money over time.",
    "Use the Fisher equation to separate nominal and real interest rates.",
    "Compute present value and future value to compare money at different dates.",
    "Explain how supply and demand for loanable funds set interest rates.",
    "Explain how risk, maturity, liquidity, and taxes create different rates for different loans."
  ],
  "sections": [
    {
      "heading": "The Interest Rate Is a Price",
      "html": "<p>An <strong>interest rate</strong> is the price of borrowing money: what a borrower pays a lender for the use of funds over time. Borrow $10,000 for one year at 6% and you repay $10,000 + (0.06 × $10,000) = <strong>$10,600</strong>. The $600 is the price of having the money a year early.</p>\n<p>Like any price, the interest rate is set by supply and demand — here, the supply and demand for <strong>loanable funds</strong>. Savers supply funds; borrowers demand them. When more people want to borrow (a housing boom, a government deficit), demand rises and rates rise. When more people want to save (a nervous economy, a growing workforce), supply rises and rates fall. The Federal Reserve can shift both sides, which is why its decisions move every rate in the economy — Module 7 shows how.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Interest is the reward for waiting. A lender gives up spending today; the interest payment compensates for the wait, for inflation, and for the risk of not being repaid.</div>"
    },
    {
      "heading": "Nominal vs. Real: The Fisher Equation",
      "html": "<p>A quoted rate is a <strong>nominal interest rate</strong>: the rate in dollars, ignoring inflation. What matters for decisions is the <strong>real interest rate</strong>: the rate in terms of buying power. The <strong>Fisher equation</strong> links them through expected inflation.</p>\n<div class=\"formula\">Real interest rate ≈ Nominal interest rate − Expected inflation &nbsp;|&nbsp; r ≈ i − π<sup>e</sup></div>\n<p>Work it through. A loan charges a nominal rate of 7% (i = 7%) and expected inflation is 3% (π<sup>e</sup> = 3%). The real rate is 7% − 3% = <strong>4%</strong>. The borrower repays 7% more dollars, but each dollar buys 3% less, so the true cost is about 4% in goods. Another case: nominal 5%, expected inflation 2% → real rate 5% − 2% = <strong>3%</strong>.</p>\n<p>This explains a paradox: high nominal rates can be cheap borrowing if inflation is higher still. If inflation is expected to run at 8% and your mortgage charges 7%, the real rate is 7% − 8% = <strong>−1%</strong> — the debt shrinks in real terms while you repay it. Savers face the mirror image: a 2% savings rate with 4% inflation means a real return of 2% − 4% = <strong>−2%</strong>; the account grows in dollars and shrinks in buying power.</p>"
    },
    {
      "heading": "Present Value: Comparing Money Across Time",
      "html": "<p>A dollar today is worth more than a dollar next year, because today's dollar can be invested and earn interest. <strong>Present value</strong> translates a future payment into today's dollars, using the interest rate as the discount rate.</p>\n<div class=\"formula\">Present value = Future payment ÷ (1 + r)<sup>n</sup> &nbsp;|&nbsp; Future value = Present amount × (1 + r)<sup>n</sup></div>\n<p>Example: you are promised $1,100 in one year and the interest rate is 10%. Its present value is $1,100 ÷ 1.10 = <strong>$1,000</strong> — you would be indifferent between $1,000 today and $1,100 in a year. Stretch it to two years: $1,210 in two years at 10% is worth $1,210 ÷ (1.10)<sup>2</sup> = $1,210 ÷ 1.21 = <strong>$1,000</strong> today. And the reverse: $1,000 invested today at 10% for two years grows to $1,000 × 1.21 = <strong>$1,210</strong>.</p>\n<p>Present value is the engine under all of bond pricing (Module 4) and most of finance: every asset is worth the present value of the payments it will make. When the interest rate rises, the divisor grows, so present values fall — that is the mathematical reason bond prices fall when rates rise.</p>"
    },
    {
      "heading": "Why Different Loans Have Different Rates",
      "html": "<p>There is no single interest rate. Rates differ for four reasons. <strong>Risk:</strong> a borrower who might default pays more — a credit-card rate is far above a Treasury rate because the government almost never defaults and cardholders sometimes do. <strong>Maturity:</strong> longer loans usually pay more, because the lender's money is tied up longer and the future is less certain — the yield curve (Module 11) is the picture of this pattern.</p>\n<p><strong>Liquidity:</strong> an asset that is hard to sell quickly must pay more to attract buyers; a Treasury bond sells in seconds, a small company's bond may take days. <strong>Taxes:</strong> interest on municipal bonds is exempt from federal income tax, so investors accept a lower rate on them than on taxable bonds with the same risk. A 4% tax-free return beats a 5% taxable return for an investor in a 25% tax bracket, who would keep only 5% × (1 − 0.25) = <strong>3.75%</strong> after tax.</p>\n<p>Together these four explain the rate menu you see in real life: mortgages, car loans, credit cards, and government bonds each sit at a different point on the risk–maturity–liquidity–tax map.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>An interest rate is the price of borrowing money, set by supply and demand for loanable funds.</li>\n<li>Real rate ≈ nominal rate − expected inflation (Fisher equation).</li>\n<li>Present value = future payment ÷ (1 + r)<sup>n</sup>; future value = present amount × (1 + r)<sup>n</sup>.</li>\n<li>Rates differ by risk, maturity, liquidity, and tax treatment.</li>\n<li>When the interest rate rises, present values — and bond prices — fall.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Comparing nominal rates across high- and low-inflation times. A 12% mortgage in a 10%-inflation year (real 2%) is cheaper than a 7% mortgage in a 1%-inflation year (real 6%). Always subtract expected inflation first.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating $1,000 in a year as equal to $1,000 today. At a 10% rate, $1,000 in a year is worth only $1,000 ÷ 1.10 ≈ $909.09 today. Time has a price, and the interest rate is it.</div>\n<p><strong>Ready-to-Work link:</strong> Every loan you take and every investment you make is a present-value decision. The Fisher equation and present value are the two tools that keep those decisions honest.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Interest rate", "def": "The price of borrowing money: the payment a borrower makes to a lender for the use of funds over time." },
    { "term": "Loanable funds", "def": "The pool of savings available for borrowing; its supply and demand set the interest rate." },
    { "term": "Nominal interest rate", "def": "The interest rate quoted in dollars, before adjusting for inflation." },
    { "term": "Real interest rate", "def": "The interest rate adjusted for inflation — the change in purchasing power from lending or borrowing." },
    { "term": "Expected inflation", "def": "The rate of price increase that borrowers and lenders expect over the life of a loan." },
    { "term": "Fisher equation", "def": "Real interest rate ≈ nominal interest rate − expected inflation." },
    { "term": "Present value", "def": "The value today of a future payment, discounted at the interest rate." },
    { "term": "Future value", "def": "The value at a future date of an amount invested today, grown at the interest rate." },
    { "term": "Discount rate", "def": "The interest rate used to convert future payments into present value." },
    { "term": "Risk premium", "def": "The extra interest a risky borrower pays over a safe borrower to compensate the lender for default risk." },
    { "term": "Default risk", "def": "The chance that a borrower fails to repay interest or principal as promised." },
    { "term": "Maturity", "def": "The length of time until a loan or bond must be repaid in full." },
    { "term": "Liquidity", "def": "How quickly and cheaply an asset can be sold for cash without losing value." },
    { "term": "Municipal bond", "def": "A bond issued by a state or local government, whose interest is generally exempt from federal income tax." },
    { "term": "Treasury security", "def": "A bond, note, or bill issued by the U.S. federal government, treated as nearly free of default risk." },
    { "term": "Yield", "def": "The annual return an investor earns on a bond, given its price and its promised payments." }
  ],
  "video": {
    "title": "One Meeting Quietly Controls Your Entire Life",
    "embedUrl": "https://www.youtube.com/embed/9DwPbE-vrv8",
    "note": "A beginner-friendly look at how interest rates work and how central-bank decisions ripple into mortgages, savings rates, jobs, and grocery bills. Watch it, then test the Fisher equation on your own savings rate and the inflation rate you expect.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You borrow $10,000 for one year at 6%. (a) How much interest do you pay? (b) How much do you repay in total?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Interest = 0.06 × $10,000 = <strong>$600</strong>. Step 2: Total repayment = $10,000 + $600 = <strong>$10,600</strong>. Step 3: The $600 is the price of using the lender's money for a year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A loan charges a nominal rate of 7% and expected inflation is 3%. (a) What is the real interest rate? (b) If expected inflation rose to 9% with the same nominal rate, what would the real rate be, and who benefits?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Real rate = 7% − 3% = <strong>4%</strong>. Step 2: If expected inflation is 9%, the real rate is 7% − 9% = <strong>−1%</strong>. Step 3: A negative real rate benefits the <strong>borrower</strong>: the debt shrinks in buying-power terms while it is repaid, and hurts the lender, whose repayments buy less than expected.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You are promised $1,210 in two years and the interest rate is 10%. (a) What is the present value? (b) What is $1,000 invested today worth in two years at 10%?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Present value = $1,210 ÷ (1.10)<sup>2</sup> = $1,210 ÷ 1.21 = <strong>$1,000</strong>. Step 2: Future value = $1,000 × (1.10)<sup>2</sup> = $1,000 × 1.21 = <strong>$1,210</strong>. Step 3: The two answers match, as they must — present and future value are the same trade read in opposite directions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A savings account pays 2% while inflation runs at 4%. (a) What is the real return? (b) What happens to the buying power of $5,000 left in the account for a year?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Real return = 2% − 4% = <strong>−2%</strong>. Step 2: In dollars the balance grows to $5,000 × 1.02 = $5,100. Step 3: In buying power it is worth $5,100 ÷ 1.04 ≈ <strong>$4,903.85</strong> in today's dollars — about $96 less than the $5,000 started with. Step 4: A positive nominal return can still be a real loss when inflation is higher.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A taxable bond pays 5% and a tax-free municipal bond pays 4%. An investor pays 25% tax on interest. (a) What is the after-tax return on the taxable bond? (b) Which bond should the investor choose?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: After-tax return = 5% × (1 − 0.25) = 5% × 0.75 = <strong>3.75%</strong>. Step 2: The municipal bond pays 4% tax-free, which beats 3.75%. Step 3: The investor should choose the <strong>municipal bond</strong>, assuming equal risk and maturity. Step 4: This is why tax-free bonds can pay lower headline rates and still attract buyers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> In a boom, firms want to borrow much more to build factories. (a) Using supply and demand for loanable funds, what happens to the interest rate? (b) What would happen instead if savers became much more willing to save at the same time?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Higher demand for loanable funds, with supply unchanged, pushes the interest rate <strong>up</strong> — borrowers compete for a fixed pool of savings. Step 2: If saving also rises, supply shifts right too, pushing the rate back down. Step 3: The net effect depends on which shift is bigger: if demand rises more, rates end higher; if supply rises more, rates end lower. Step 4: This is why rates reflect both sides of the market, not just borrowers' wishes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "You borrow $10,000 for one year at 6%. Your total repayment is:",
      "choices": ["$10,000", "$10,060", "$10,600", "$16,000"],
      "answer": 2,
      "explanation": "Correct: (c). Interest is 0.06 × $10,000 = $600, so repayment is $10,600. (a) repays no interest. (b) charges 0.6%, not 6%. (d) charges 60%."
    },
    {
      "q": "The nominal rate is 7% and expected inflation is 3%. The real rate is:",
      "choices": ["10%", "4%", "3%", "7%"],
      "answer": 1,
      "explanation": "Correct: (b). Fisher: 7% − 3% = 4%. (a) adds the two rates. (c) is the inflation rate alone. (d) is the nominal rate, unadjusted."
    },
    {
      "q": "A savings account pays 2% while inflation is 4%. The real return is:",
      "choices": ["2%", "6%", "−2%", "4%"],
      "answer": 2,
      "explanation": "Correct: (c). Real return = 2% − 4% = −2%: buying power falls. (a) is the nominal return. (b) adds the rates. (d) is the inflation rate."
    },
    {
      "q": "At a 10% interest rate, the present value of $1,100 to be received in one year is:",
      "choices": ["$1,000", "$1,100", "$1,210", "$909.09"],
      "answer": 0,
      "explanation": "Correct: (a). $1,100 ÷ 1.10 = $1,000. (b) is the future payment, undiscounted. (c) is $1,100 grown one more year at 10%. (d) is the present value of $1,000 in one year at 10%."
    },
    {
      "q": "$1,000 invested today at 10% for two years grows to:",
      "choices": ["$1,100", "$1,200", "$1,210", "$1,000"],
      "answer": 2,
      "explanation": "Correct: (c). $1,000 × (1.10)² = $1,000 × 1.21 = $1,210. (a) is one year of growth. (b) is simple interest for two years, missing compounding on the first year's interest. (d) is no growth at all."
    },
    {
      "q": "A taxable bond pays 5% and an investor pays 25% tax on interest. The after-tax return is:",
      "choices": ["5%", "4%", "3.75%", "1.25%"],
      "answer": 2,
      "explanation": "Correct: (c). 5% × (1 − 0.25) = 3.75%. (a) ignores the tax. (b) is the tax-free municipal rate from the module, not this bond's return. (d) is the tax paid, not the return kept."
    },
    {
      "q": "Which borrower normally pays the highest interest rate?",
      "choices": ["The U.S. federal government", "A large firm with a strong credit rating", "A borrower with a poor credit history and high default risk", "A city issuing tax-free bonds"],
      "answer": 2,
      "explanation": "Correct: (c). High default risk demands a risk premium. (a) The government is treated as nearly default-free. (b) Strong firms pay little premium. (d) Tax-free status lets cities pay less, not more."
    },
    {
      "q": "When the interest rate rises, the present value of a future payment:",
      "choices": ["Rises, because future money is worth more", "Falls, because the divisor (1 + r)ⁿ grows", "Stays the same", "Becomes zero"],
      "answer": 1,
      "explanation": "Correct: (b). A bigger discount rate shrinks present value — this is why bond prices fall when rates rise. (a) reverses the relationship. (c) ignores discounting. (d) Present value falls but stays positive."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Interest Rates: Quick Reference</h3>\n<p><strong>Core idea:</strong> An interest rate is the price of borrowing money, set by the supply and demand for loanable funds.</p>\n<div class=\"formula\">Real rate ≈ Nominal rate − Expected inflation &nbsp;|&nbsp; r ≈ i − π<sup>e</sup></div>\n<div class=\"formula\">Present value = Future ÷ (1 + r)<sup>n</sup> &nbsp;|&nbsp; Future value = Present × (1 + r)<sup>n</sup></div>\n<p><strong>Worked anchors:</strong> Nominal 7% − expected inflation 3% = real 4%. $1,100 in 1 year at 10% is worth $1,100 ÷ 1.10 = $1,000 today. $1,000 at 10% for 2 years grows to $1,210.</p>\n<p><strong>Why rates differ:</strong> Risk (default chance) · Maturity (longer = usually higher) · Liquidity (hard to sell = higher) · Taxes (tax-free = lower headline rate).</p>\n<p><strong>After-tax return:</strong> Taxable rate × (1 − tax rate). Example: 5% × 0.75 = 3.75%.</p>\n<p><strong>Watch out:</strong> Never compare nominal rates across different inflation eras without subtracting expected inflation. And when rates rise, present values fall.</p>\n<p><strong>Self-check:</strong> Find your savings rate and a recent inflation figure. Is your real return positive or negative?</p>\n"
};
