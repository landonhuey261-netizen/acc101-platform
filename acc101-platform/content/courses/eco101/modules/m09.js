// eco101 - Module 9: Money, Banking & the Financial System: A First Look
module.exports = {
  "number": 9,
  "slug": "money-banking-financial-system-first-look",
  "title": "Money, Banking & the Financial System: A First Look",
  "estTime": "3–4 hours",
  "objectives": [
    "Define money and explain its three functions.",
    "Distinguish commodity money from fiat money.",
    "Explain how banks create money through fractional reserve lending.",
    "Compute the simple money multiplier from a reserve ratio.",
    "Explain what the Federal Reserve does and what interest is."
  ],
  "sections": [
    {
      "heading": "What Money Is — and What It Does",
      "html": "<p><strong>Money</strong> is anything widely accepted as payment for goods and services and to repay debts. It has three jobs. As a <strong>medium of exchange</strong>, it lets you buy without bartering — you do not need to find a baker who wants your haircut. As a <strong>unit of account</strong>, it gives prices a common measure: a coffee is $4 and a book is $20, so the book costs five coffees. As a <strong>store of value</strong>, it holds purchasing power over time: a dollar saved today still buys something tomorrow.</p>\n<p>Money works because people accept it, not because it has value in itself. A $20 bill is paper and ink; it buys $20 of goods because the next person will accept it too. That shared trust is what makes money work — and what makes counterfeiting and runaway inflation so damaging: they break the trust.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Money is a social agreement. Its value comes from everyone accepting it, not from the paper it is printed on.</div>"
    },
    {
      "heading": "From Gold to Fiat Money",
      "html": "<p>Early money was <strong>commodity money</strong>: something valuable in itself, like gold, silver, or shells, used as a medium of exchange. Gold worked well — it is durable, divisible, portable, and scarce — but it is heavy to carry and hard to divide into small payments. Paper money began as a receipt for gold held in a vault; the receipt was easier to carry than the gold.</p>\n<p>Modern money is <strong>fiat money</strong>: money declared legal tender by a government, with no gold backing it. A dollar is worth a dollar because the government says it is legal tender and because everyone accepts it. The advantage is flexibility — the money supply can grow with the economy. The danger is overprinting: if a government prints too much, each dollar buys less, and inflation (Module 6) follows.</p>\n<p>Most money today is not even paper. It is numbers in bank accounts — checking deposits that you move with a card or a phone. When economists measure the <strong>money supply</strong>, they count cash plus those deposits, because both are used to pay for things.</p>"
    },
    {
      "heading": "How Banks Create Money",
      "html": "<p>Banks do more than store money: they create it. Under <strong>fractional reserve banking</strong>, a bank keeps only a fraction of its deposits as reserves and lends the rest. Suppose you deposit $1,000 and the required reserve ratio is 10%. The bank keeps $100 as reserves and lends $900 to a borrower. The borrower spends the $900, and the shop that receives it deposits it in another bank, which keeps $90 (10%) and lends $810. The process repeats, each round smaller than the last.</p>\n<p>The total new money created from the original $1,000 deposit is governed by the <strong>money multiplier</strong>: 1 ÷ reserve ratio. With a 10% reserve ratio, the multiplier is 1 ÷ 0.10 = 10, so the maximum new money is $1,000 × 10 = $10,000 — the original deposit plus $9,000 created through lending. With a 20% reserve ratio, the multiplier is 1 ÷ 0.20 = 5, and the maximum is $1,000 × 5 = $5,000.</p>\n<div class=\"formula\">Money multiplier = 1 ÷ reserve ratio &nbsp;|&nbsp; Maximum new money = initial deposit × multiplier</div>\n<p>Banks earn their profit from the gap between the interest they pay depositors and the interest they charge borrowers. They also face a risk: if too many depositors demand their money at once — a <strong>bank run</strong> — the bank cannot pay, because most deposits are out on loan. Deposit insurance exists to prevent that panic.</p>"
    },
    {
      "heading": "Interest and the Federal Reserve",
      "html": "<p><strong>Interest</strong> is the price of borrowing money — the cost of using someone else's money for a time. Simple interest is principal × rate × time: borrow $1,000 at 5% simple interest for 3 years and you pay $1,000 × 0.05 × 3 = $150 of interest, repaying $1,150 in total. Interest rates rise when borrowing is risky or money is scarce, and fall when it is safe or plentiful.</p>\n<p>The <strong>Federal Reserve</strong> (the Fed) is the central bank of the United States. It conducts <strong>monetary policy</strong>: when the economy is weak, it lowers interest rates to encourage borrowing and spending; when inflation is high, it raises rates to cool spending down. It also supervises banks and acts as a lender of last resort when banks face a panic.</p>\n<p>The financial system around banks — stock markets, bond markets, insurance, and pension funds — moves savings to the people and firms that can use them best. A saver who buys a bond is lending to a company or a government; the interest they earn is the price of that loan. eco211 studies this whole system in depth; here, the point is that money, banks, and interest are one connected system.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Money is a medium of exchange, a unit of account, and a store of value.</li>\n<li>Modern money is fiat money — valuable because it is accepted, not because it is backed by gold.</li>\n<li>Banks create money by lending: multiplier = 1 ÷ reserve ratio.</li>\n<li>Interest is the price of borrowing; simple interest = principal × rate × time.</li>\n<li>The Federal Reserve sets monetary policy by moving interest rates.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking banks lend out the money you deposited and it is gone. Your deposit is still yours — the bank keeps a fraction as reserves and lends the rest, and it must be able to pay you back on demand. That is exactly why reserve ratios and deposit insurance exist.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking the Fed prints money to fund the government. The Fed conducts monetary policy for the whole economy; government spending is funded by taxes and borrowing, not by the Fed's printing press.</div>\n<p><strong>Ready-to-Work link:</strong> Interest is the most common price in business life — on loans, credit cards, mortgages, and savings. 'What is the rate, and for how long?' is the question behind every borrowing decision a household or a firm makes.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Money", "def": "Anything widely accepted as payment for goods and services and to repay debts." },
    { "term": "Medium of exchange", "def": "Money's job as the thing used to buy and sell, replacing barter." },
    { "term": "Unit of account", "def": "Money's job as the common measure in which prices are stated." },
    { "term": "Store of value", "def": "Money's job of holding purchasing power over time." },
    { "term": "Commodity money", "def": "Money that is valuable in itself, such as gold or silver coins." },
    { "term": "Fiat money", "def": "Money declared legal tender by a government, with no commodity backing." },
    { "term": "Money supply", "def": "The total amount of money in an economy — cash plus bank deposits used for payment." },
    { "term": "Fractional reserve banking", "def": "A system where banks keep only a fraction of deposits as reserves and lend the rest." },
    { "term": "Reserve ratio", "def": "The fraction of deposits a bank must keep as reserves rather than lend." },
    { "term": "Money multiplier", "def": "1 ÷ reserve ratio — the maximum multiple of new money created from an initial deposit." },
    { "term": "Interest", "def": "The price of borrowing money — the cost of using someone else's money for a time." },
    { "term": "Bank run", "def": "A panic in which many depositors demand their money at once, which a bank cannot meet because most deposits are lent out." },
    { "term": "Deposit insurance", "def": "A government guarantee that depositors will be paid even if their bank fails, which prevents bank runs." },
    { "term": "Federal Reserve (the Fed)", "def": "The central bank of the United States, which conducts monetary policy." },
    { "term": "Monetary policy", "def": "Central-bank decisions about interest rates and the money supply." }
  ],
  "video": {
    "title": "Banking 3: Fractional Reserve Banking",
    "embedUrl": "https://www.youtube.com/embed/nH2-37rTA8U",
    "note": "Khan Academy walks through fractional reserve banking with a simple island example — how one deposit becomes many loans, and where the money multiplier comes from. Follow the numbers, then redo the multiplier computation in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Name the three functions of money and give one example of each in your own life.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Medium of exchange — you pay $4 for a coffee instead of bartering a service for it. Step 2: Unit of account — prices are stated in dollars, so you can compare a $20 book with a $4 coffee and see the book costs five coffees. Step 3: Store of value — money saved in a bank account today still buys things next month.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> You deposit $1,000 and the reserve ratio is 10%. (a) How much must the bank keep as reserves? (b) How much can it lend? (c) What is the money multiplier? (d) What is the maximum new money created from your deposit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Reserves = 10% × $1,000 = $100. Step 2: Lending = $1,000 − $100 = $900. Step 3: Multiplier = 1 ÷ 0.10 = 10. Step 4: Maximum new money = $1,000 × 10 = $10,000 — your $1,000 plus $9,000 created through repeated lending.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Repeat Problem 2 with a reserve ratio of 20%. (a) Reserves? (b) Lending? (c) Multiplier? (d) Maximum new money?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Reserves = 20% × $1,000 = $200. Step 2: Lending = $1,000 − $200 = $800. Step 3: Multiplier = 1 ÷ 0.20 = 5. Step 4: Maximum new money = $1,000 × 5 = $5,000. A higher reserve ratio means less lending and a smaller multiplier.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You borrow $1,000 at 5% simple interest for 3 years. (a) How much interest do you pay? (b) How much do you repay in total?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Interest = $1,000 × 0.05 × 3 = $150. Step 2: Total repayment = $1,000 + $150 = $1,150. Step 3: Check — $50 a year for 3 years is $150, which matches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between commodity money and fiat money, and say which one a dollar bill is.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Commodity money is valuable in itself — gold coins are worth something even if nobody accepts them as money. Step 2: Fiat money has no commodity backing; it is valuable because the government declares it legal tender and people accept it. Step 3: A dollar bill is fiat money — paper and ink, worth a dollar because everyone accepts it as a dollar.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The Fed raises interest rates to fight inflation. (a) What happens to borrowing? (b) What happens to spending? (c) Why might that cool inflation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Borrowing becomes more expensive, so households and firms borrow less. Step 2: (b) Spending falls — fewer houses, cars, and business projects are bought on credit. Step 3: (c) Less spending means less demand chasing the same goods, which eases the upward pressure on prices.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The three functions of money are:",
      "choices": ["Medium of exchange, unit of account, store of value", "Gold, silver, and paper", "Saving, spending, and investing", "Coins, notes, and cards"],
      "answer": 0,
      "explanation": "Correct: (a). Money is used to pay, to measure prices, and to hold value over time. (b) Are forms money has taken, not its functions. (c) Are things people do with money. (d) Are physical forms of money."
    },
    {
      "q": "A dollar bill is an example of:",
      "choices": ["Commodity money", "Fiat money", "Barter", "A bank loan"],
      "answer": 1,
      "explanation": "Correct: (b). It has no gold backing; it is legal tender accepted because the government declares it and people trust it. (a) Commodity money is valuable in itself, like gold. (c) Barter is direct exchange without money. (d) A loan is a debt, not money itself."
    },
    {
      "q": "You deposit $1,000 with a 10% reserve ratio. The bank can lend:",
      "choices": ["$100", "$900", "$1,000", "$10,000"],
      "answer": 1,
      "explanation": "Correct: (b). It keeps $100 as reserves and lends $1,000 − $100 = $900. (a) Is the reserve, not the loan. (c) Would leave no reserves. (d) Is the maximum money created after many rounds, not the first loan."
    },
    {
      "q": "With a 10% reserve ratio, the money multiplier and the maximum new money from a $1,000 deposit are:",
      "choices": ["10 and $10,000", "5 and $5,000", "0.10 and $100", "20 and $20,000"],
      "answer": 0,
      "explanation": "Correct: (a). Multiplier = 1 ÷ 0.10 = 10; $1,000 × 10 = $10,000. (b) Is the answer for a 20% ratio. (c) Confuses the ratio with the multiplier. (d) Would need a 5% reserve ratio."
    },
    {
      "q": "With a 20% reserve ratio, the maximum new money from a $1,000 deposit is:",
      "choices": ["$10,000", "$5,000", "$2,000", "$1,000"],
      "answer": 1,
      "explanation": "Correct: (b). Multiplier = 1 ÷ 0.20 = 5; $1,000 × 5 = $5,000. (a) Is the 10% answer. (c) Would need a 50% ratio. (d) Would mean no lending at all."
    },
    {
      "q": "You borrow $1,000 at 5% simple interest for 3 years. The interest is:",
      "choices": ["$50", "$150", "$500", "$1,150"],
      "answer": 1,
      "explanation": "Correct: (b). $1,000 × 0.05 × 3 = $150. (a) Is one year's interest. (c) Would be 5% for 10 years. (d) Is the total repayment ($1,000 + $150), not the interest."
    },
    {
      "q": "The Federal Reserve conducts monetary policy mainly by:",
      "choices": ["Setting tax rates", "Moving interest rates and the money supply", "Building roads", "Setting the minimum wage"],
      "answer": 1,
      "explanation": "Correct: (b). The Fed moves interest rates to encourage or cool borrowing and spending. (a) Taxes are fiscal policy, set by government. (c) Roads are government spending. (d) The minimum wage is a labor law."
    },
    {
      "q": "A bank run happens when:",
      "choices": ["A bank lends too little", "Many depositors demand their money at once and the bank cannot pay, because most deposits are lent out", "Interest rates fall", "A bank opens a new branch"],
      "answer": 1,
      "explanation": "Correct: (b). Fractional reserve banking means the cash is not all in the vault. (a) Lending too little is safe, not a run. (c) Falling rates do not cause runs. (d) Opening a branch is normal business."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Money, Banking & the Financial System Quick Reference</h3>\n<p><strong>Money's three jobs:</strong> medium of exchange · unit of account · store of value. Modern money is fiat money — accepted because it is legal tender, not backed by gold.</p>\n<p><strong>Fractional reserve banking:</strong> deposit $1,000 at 10% reserves → keep $100, lend $900. Multiplier = 1 ÷ 0.10 = 10; maximum new money = $1,000 × 10 = $10,000. At 20%: multiplier 5, maximum $5,000.</p>\n<p><strong>Simple interest = principal × rate × time:</strong> $1,000 × 0.05 × 3 = $150; repay $1,150.</p>\n<p><strong>The Fed:</strong> the U.S. central bank — raises rates to cool inflation, lowers them to fight a weak economy.</p>\n<p><strong>Watch out:</strong> banks do not keep your whole deposit in the vault — that is why reserve ratios and deposit insurance exist.</p>\n<p><strong>Self-check:</strong> Explain to a friend, in three sentences, how your $1,000 deposit can become $10,000 of money in the economy.</p>\n"
};
