// FIN101 - Module 3: Time Value of Money: Present & Future Value
module.exports = {
  "number": 3,
  "slug": "time-value-of-money-present-future-value",
  "title": "Time Value of Money: Present & Future Value",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a dollar today is worth more than a dollar in the future.",
    "Compute future value with compound interest.",
    "Compute present value by discounting future cash flows.",
    "Compute the present and future value of an annuity.",
    "Use worked TVM examples to price a loan payment and a savings goal."
  ],
  "sections": [
    {
      "heading": "Why Money Has a Time Value",
      "html": "\n<p>A dollar today is worth more than a dollar in a year, for three reasons. First, a dollar today can be invested and earn a return — it can become more than a dollar. Second, a dollar today is certain, while a dollar promised for next year carries the risk that it never arrives. Third, inflation erodes what a future dollar buys. <strong>Time value of money (TVM)</strong> is the set of tools that puts a price on those facts: it converts money at different times into a common basis so decisions can be compared fairly. Without it, a business would treat $10,000 today and $10,000 in ten years as equal — and make terrible investment decisions.</p>\n<p>Two operations do all the work. <strong>Compounding</strong> moves money forward in time: today's money grows by the interest it earns. <strong>Discounting</strong> moves money backward: a future amount is worth less today, by exactly the return it would have earned in between. The interest rate is the price of time — the rate at which money grows forward and shrinks backward.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A dollar today beats a dollar next year because it can earn, it is certain, and inflation has not touched it yet. Compounding moves money forward; discounting moves it back.</div>\n"
    },
    {
      "heading": "Future Value: Compounding",
      "html": "\n<p>The <strong>future value (FV)</strong> of money invested today is FV = PV × (1 + r)<sup>n</sup>, where r is the interest rate per period and n is the number of periods. Invest $10,000 at 5% for 10 years and it becomes $10,000 × (1.05)<sup>10</sup> = $16,288.95. The growth is not linear — it compounds, because each year's interest earns interest of its own. At 5%, the money grows by $500 in year one and by about $775 in year ten. That accelerating curve is why starting early matters so much in saving, and why a high rate over a long time is so powerful.</p>\n<p>Simple interest, which pays interest only on the original amount, is the comparison that shows compounding's power: $10,000 at 5% simple interest for 10 years becomes $10,000 + 10 × $500 = $15,000 — $1,288.95 less than compounding. Real loans and investments compound; simple interest is mostly a teaching tool and a warning about what you lose when interest does not compound for you.</p>\n<div class=\"formula\">FV = PV × (1 + r)<sup>n</sup> &nbsp;|&nbsp; $10,000 × (1.05)<sup>10</sup> = $16,288.95</div>\n"
    },
    {
      "heading": "Present Value: Discounting",
      "html": "\n<strong>Present value (PV)</strong> is the reverse: PV = FV ÷ (1 + r)<sup>n</sup>. It answers “what is a future amount worth today?” A promise of $20,000 in 8 years at a 6% discount rate is worth $20,000 ÷ (1.06)<sup>8</sup> = $12,548.25 today. That is the most you should pay for that promise — pay more, and you would have done better investing the money at 6% yourself. Present value is the foundation of all investment appraisal: Module 7's net present value is just present value applied to a whole project.\n<p>The discount rate is the key judgment. A higher rate means the future is worth less today, because the alternative use of the money is more attractive — or the future is riskier. That is why risky projects are discounted at higher rates: their future cash flows are worth less today, and fewer of them pass the test. The rate is not a technical detail; it is the price of risk and time, and it decides which projects live.</p>\n<div class=\"formula\">PV = FV ÷ (1 + r)<sup>n</sup> &nbsp;|&nbsp; $20,000 ÷ (1.06)<sup>8</sup> = $12,548.25</div>\n"
    },
    {
      "heading": "Annuities: Repeated Payments",
      "html": "\n<p>An <strong>annuity</strong> is a series of equal payments at regular intervals — a loan repaid monthly, rent, a pension. Its future value is the sum of each payment compounded to the end: FV of an annuity = PMT × [((1 + r)<sup>n</sup> − 1) ÷ r]. Saving $2,000 a year at 5% for 10 years grows to $2,000 × [((1.05)<sup>10</sup> − 1) ÷ 0.05] = $25,155.79. Its present value is the sum of each payment discounted to today: PV of an annuity = PMT × [(1 − (1 + r)<sup>−n</sup>) ÷ r]. Receiving $5,000 a year for 5 years at 6% is worth $5,000 × 4.2124 = $21,061.82 today.</p>\n<p>The loan payment formula in Lab 1 is the annuity formula turned around: the payment that makes the present value of the payments equal to the amount borrowed. For the $60,000 loan at 6% for 5 years, the payment is $14,243.78 a year — and the lab's amortization schedule shows how each payment splits into interest (which falls) and principal (which rises) as the balance shrinks. That split is the same TVM mathematics, seen from the borrower's side.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A loan payment is an annuity whose present value equals the amount borrowed. Each payment is part interest (falling) and part principal (rising).</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Money has a time value: it can earn, it is certain now, and inflation erodes the future.</li>\n<li>Future value: FV = PV × (1 + r)<sup>n</sup> — $10,000 at 5% for 10 years = $16,288.95.</li>\n<li>Present value: PV = FV ÷ (1 + r)<sup>n</sup> — $20,000 in 8 years at 6% = $12,548.25 today.</li>\n<li>Annuities: $2,000 a year at 5% for 10 years = $25,155.79; $5,000 a year for 5 years at 6% = $21,061.82 today.</li>\n<li>Loan: $60,000 at 6% for 5 years = $14,243.78 a year.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Comparing money from different years without discounting. $10,000 in ten years is not $10,000 — at 5% it is worth about $6,139 today ($10,000 ÷ 1.05<sup>10</sup>).</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Using simple interest where compounding applies. Real loans and investments compound, and the gap grows with time — $1,288.95 on the $10,000 example alone.</div>\n<p><strong>Ready-to-Work link:</strong> Lab 1 builds the full loan amortization schedule from these formulas, and Module 7 uses present value to judge whole projects.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Time value of money (TVM)",
      "def": "The idea that money at different times must be compared on a common basis, because money can earn, carries risk, and loses value to inflation."
    },
    {
      "term": "Future value (FV)",
      "def": "What money invested today will be worth at a future date, with compound interest."
    },
    {
      "term": "Present value (PV)",
      "def": "What a future amount is worth today, after discounting."
    },
    {
      "term": "Compounding",
      "def": "Interest earning interest, so money grows faster over time."
    },
    {
      "term": "Discounting",
      "def": "Reducing a future amount to its value today using a discount rate."
    },
    {
      "term": "Discount rate",
      "def": "The rate used to convert future money to present value — the price of time and risk."
    },
    {
      "term": "Interest rate",
      "def": "The price of borrowing money, or the return on lending it, per period."
    },
    {
      "term": "Annuity",
      "def": "A series of equal payments at regular intervals."
    },
    {
      "term": "Ordinary annuity",
      "def": "An annuity whose payments come at the end of each period."
    },
    {
      "term": "Simple interest",
      "def": "Interest paid only on the original amount, not on accumulated interest."
    },
    {
      "term": "Compound interest",
      "def": "Interest paid on the original amount and on interest already earned."
    },
    {
      "term": "Perpetuity",
      "def": "An annuity that continues forever."
    },
    {
      "term": "Loan amortization",
      "def": "Repaying a loan in installments, each split into interest and principal."
    },
    {
      "term": "Principal",
      "def": "The amount borrowed, or the part of a payment that reduces the balance owed."
    },
    {
      "term": "Inflation",
      "def": "The general rise in prices that reduces what a future dollar buys."
    }
  ],
  "video": {
    "title": "Time Value of Money - Present Value vs Future Value",
    "embedUrl": "https://www.youtube.com/embed/cy4PiY5ERTI",
    "note": "Works present value and future value with clear worked numbers. Pause and solve the module's $10,000 example yourself before the video works its version.",
    "more": [
      {
        "title": "Time Value of Money Finance - TVM Formulas & Calculations - Annuities, Present Value, Future Value",
        "url": "https://www.youtube.com/watch?v=m3azU7gYHc0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You invest $10,000 at 5% compounded annually for 10 years. What is its future value?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: FV = PV × (1 + r)<sup>n</sup> = $10,000 × (1.05)<sup>10</sup>. Step 2: (1.05)<sup>10</sup> = 1.628895. Step 3: FV = $10,000 × 1.628895 = <strong>$16,288.95</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> You are promised $20,000 in 8 years. At a 6% discount rate, what is that promise worth today?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV = FV ÷ (1 + r)<sup>n</sup> = $20,000 ÷ (1.06)<sup>8</sup>. Step 2: (1.06)<sup>8</sup> = 1.593848. Step 3: PV = $20,000 ÷ 1.593848 = <strong>$12,548.25</strong>. Pay more than that for the promise and you would have done better investing at 6% yourself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You save $2,000 at the end of each year at 5% for 10 years. What is the future value of the annuity?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: FV of annuity = $2,000 × [((1.05)<sup>10</sup> − 1) ÷ 0.05]. Step 2: The factor is (1.628895 − 1) ÷ 0.05 = 12.5779. Step 3: FV = $2,000 × 12.5779 = <strong>$25,155.79</strong>. You paid in $20,000; compounding added $5,155.79.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You will receive $5,000 a year for 5 years, first payment in one year. At 6%, what is the present value of that stream?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of annuity = $5,000 × [(1 − (1.06)<sup>−5</sup>) ÷ 0.06]. Step 2: The annuity factor is 4.2124. Step 3: PV = $5,000 × 4.2124 = <strong>$21,061.82</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car loan of $24,000 at 5% annual interest is repaid monthly over 4 years (48 payments). What is the monthly payment?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Monthly rate = 0.05 ÷ 12 = 0.004167; periods = 48. Step 2: Payment = $24,000 × [0.004167 × (1.004167)<sup>48</sup>] ÷ [(1.004167)<sup>48</sup> − 1]. Step 3: The payment is <strong>$552.70</strong> a month. Total paid = 48 × $552.70 = $26,529.60, so total interest is $2,529.60.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two investments each promise $10,000: one pays in 1 year, the other in 10 years. At a 5% discount rate, which is worth more today, and by how much?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 1-year promise is worth $10,000 ÷ 1.05 = $9,523.81 today. Step 2: The 10-year promise is worth $10,000 ÷ (1.05)<sup>10</sup> = $10,000 ÷ 1.628895 = $6,139.13 today. Step 3: The sooner payment is worth <strong>$3,384.68</strong> more — the same $10,000, separated by nine years, is worth $3,384.68 less. That gap is the time value of money.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A dollar today is worth more than a dollar next year mainly because:",
      "choices": [
        "Dollars are printed in limited numbers",
        "It can be invested and earn, it is certain, and inflation erodes future dollars",
        "Banks prefer it",
        "It weighs more"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Earning power, certainty, and inflation are the three reasons. (a) Money supply is not the reason for an individual's time value. (c) Bank preference is not the mechanism. (d) Weight is irrelevant."
    },
    {
      "q": "$10,000 invested at 5% compounded annually for 10 years becomes:",
      "choices": [
        "$16,288.95",
        "$15,000.00",
        "$10,500.00",
        "$20,000.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). $10,000 × (1.05)^10 = $16,288.95. (b) $15,000.00 is the simple-interest result. (c) $10,500.00 is one year's growth only. (d) $20,000.00 would need about 7.2% compounded for 10 years."
    },
    {
      "q": "A promise of $20,000 in 8 years at a 6% discount rate is worth today:",
      "choices": [
        "$20,000.00",
        "$12,548.25",
        "$12,000.00",
        "$32,000.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $20,000 ÷ (1.06)^8 = $12,548.25. (a) $20,000.00 ignores discounting entirely. (c) $12,000.00 is a rough guess below the true value. (d) $32,000.00 compounds the wrong way — it grows the future amount instead of shrinking it."
    },
    {
      "q": "Compounding differs from simple interest because compounding:",
      "choices": [
        "Pays interest only on the original amount",
        "Pays interest on the original amount and on interest already earned",
        "Charges a fee",
        "Only applies to banks"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Compounding earns interest on interest. (a) That is simple interest. (c) Fees are separate from interest. (d) Compounding applies to any investment or loan."
    },
    {
      "q": "Saving $2,000 a year at 5% for 10 years grows to about:",
      "choices": [
        "$25,155.79",
        "$20,000.00",
        "$25,000.00",
        "$30,000.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The annuity future value factor is 12.5779, so $2,000 × 12.5779 = $25,155.79. (b) $20,000.00 is the total paid in, with no interest. (c) $25,000.00 is close but understates the compounding. (d) $30,000.00 would need a higher rate or longer time."
    },
    {
      "q": "A higher discount rate makes a future amount worth:",
      "choices": [
        "More today",
        "Less today",
        "The same today",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A higher rate means the alternative use of money is more attractive, so the future amount is worth less now. (a) A lower rate would make it worth more. (c) The value changes with the rate. (d) It is worth less, not nothing."
    },
    {
      "q": "A $24,000 car loan at 5% over 48 months has a monthly payment of about:",
      "choices": [
        "$500.00",
        "$552.70",
        "$600.00",
        "$480.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The loan payment formula gives $552.70. (a) $500.00 is the principal divided by 48, ignoring interest. (c) $600.00 would repay the loan too fast. (d) $480.00 is below the principal-only payment."
    },
    {
      "q": "The loan payment formula is the annuity formula turned around because:",
      "choices": [
        "Loans are not annuities",
        "The payment is set so the present value of the payments equals the amount borrowed",
        "Banks prefer round numbers",
        "Interest is ignored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The payment's present value must equal the loan amount. (a) A loan's payments are an annuity. (c) Round numbers are a convenience, not the logic. (d) Interest is the whole point of the formula."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Time Value of Money: Quick Reference</h3>\n<p><strong>Core idea:</strong> Money at different times must be compared on a common basis. Compounding moves money forward; discounting moves it back.</p>\n<div class=\"formula\">FV = PV × (1 + r)<sup>n</sup> &nbsp;|&nbsp; PV = FV ÷ (1 + r)<sup>n</sup> &nbsp;|&nbsp; FV annuity = PMT × [((1+r)<sup>n</sup> − 1) ÷ r] &nbsp;|&nbsp; PV annuity = PMT × [(1 − (1+r)<sup>−n</sup>) ÷ r]</div>\n<p><strong>Worked numbers:</strong> $10,000 at 5% for 10 years → $16,288.95. $20,000 in 8 years at 6% → $12,548.25 today. $2,000/yr at 5% for 10 years → $25,155.79. $5,000/yr for 5 years at 6% → $21,061.82 today. $24,000 car loan, 5%, 48 months → $552.70/month.</p>\n<p><strong>Watch out:</strong> Never compare money from different years without discounting — $10,000 in 10 years is worth $6,139.13 today at 5%. And real loans compound; simple interest understates the cost by $1,288.95 on the $10,000 example.</p>\n<p><strong>Self-check:</strong> A friend offers you $1,000 today or $1,100 in a year. At a 5% rate, which is worth more? ($1,100 ÷ 1.05 = $1,047.62 — take the $1,100.)</p>\n"
};
