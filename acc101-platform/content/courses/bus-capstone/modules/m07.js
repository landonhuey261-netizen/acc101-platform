// Business Capstone — Module 7: Financial Plan I: Startup Costs & Funding
module.exports = {
  "number": 7,
  "slug": "financial-plan-startup-costs-funding",
  "title": "Financial Plan I: Startup Costs & Funding",
  "estTime": "3–4 hours",
  "objectives": [
    "List and total startup costs in one-time and working-capital buckets.",
    "Explain funding sources and what each one costs.",
    "Compute a loan payment and its total interest.",
    "Show sources and uses of funds in balance.",
    "Write the startup-cost and funding section of the plan."
  ],
  "sections": [
    {
      "heading": "Startup Costs: One-Time and Working Capital",
      "html": "<p>Startup costs fall into two buckets, and mixing them up is the most common financial-plan error. <strong>One-time costs</strong> buy things that last: the van $18,000, tools and equipment $4,500, initial parts inventory $3,000, licenses and insurance $1,800, branding and website $1,200 — a total of $28,500. <strong>Working capital</strong> is the cash to pay bills before sales cover them: $6,500. Together they are $28,500 + $6,500 = <strong>$35,000</strong>.</p><p>Working capital is not spare money. In the first months, sales run below the 80-tune-up break-even, yet rent, insurance, marketing, and pay still go out every month. Without the $6,500, the owner pays those bills from a credit card at high interest, or the business stops. A plan that lists only the van and tools, and forgets working capital, is a plan to run out of cash in month three.</p><div class=\"callout\"><strong>Key idea:</strong> One-time costs buy the business; working capital keeps it alive until sales do. A plan without working capital is a plan to run out of cash.</div>"
    },
    {
      "heading": "Funding: Savings, Loans, and What Each Costs",
      "html": "<p>Money comes from three places: the owner's savings, a bank loan, and — for some businesses — investors or grants. Savings cost no interest but are the owner's own risk: $15,000 of savings in this plan is money the owner cannot also spend on anything else. A bank loan costs interest and a monthly payment, and the bank will want the plan, the owner's credit history, and often a personal guarantee — which, note, reaches through the LLC wall for that loan.</p><p>Investors take a share of the business instead of interest, which suits businesses that can grow fast and sell one day; a one-van repair service is a poor fit, because there is no big exit to share. Grants exist for some businesses and places, but a plan must never depend on a grant it has not won. Maple Street funds the $35,000 with $15,000 of savings and a $20,000 bank loan — no investor, no hoped-for grant.</p>"
    },
    {
      "heading": "The Loan Payment, Computed",
      "html": "<p>The loan is $20,000 at 8% annual interest over 5 years (60 monthly payments). The monthly payment is <strong>$405.53</strong>. The arithmetic is: monthly rate 0.08 ÷ 12 = 0.006667; payment = $20,000 × 0.006667 × (1.006667)^60 ÷ ((1.006667)^60 − 1) = $405.53. Over 60 months the business pays 60 × $405.53 = <strong>$24,331.80</strong> in total, of which $24,331.80 − $20,000 = <strong>$4,331.80</strong> is interest.</p><p>That payment is a fixed cost: $405.53 must be paid every month whether the van did 60 jobs or 120. It is inside the $3,600 monthly fixed cost, not on top of it — a plan that counts the loan payment twice, or forgets it entirely, has a financial plan that does not balance. Always ask of any funding: what does it cost, when, and what happens if a payment is missed?</p><div class=\"callout\"><strong>Key idea:</strong> A loan payment is a fixed cost that arrives whether or not customers do. Borrow for the plan that misses, not the plan that works — the payment is the same either way.</div>"
    },
    {
      "heading": "Sources and Uses: The Table Must Balance",
      "html": "<p>The funding table has two sides that must match to the dollar. <strong>Sources:</strong> owner savings $15,000, bank loan $20,000 — total $35,000. <strong>Uses:</strong> van $18,000, tools $4,500, parts inventory $3,000, licenses and insurance $1,800, branding and website $1,200, working capital $6,500 — total $35,000. If the two sides differ by even a dollar, something is missing: an unlisted cost, or money with no job.</p><p>A lender reads this table first, before the profit forecast. It shows the owner has skin in the game — $15,000 of their own money, 43% of the total ($15,000 ÷ $35,000) — and that every dollar has a named job. A plan whose uses exceed its sources is asking the bank to fund a gap the owner has not noticed; a plan whose sources exceed its uses is holding money it has not justified.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> one-time costs $28,500, working capital $6,500, total $35,000; funding $15,000 savings + $20,000 loan; loan payment $405.53 a month, $24,331.80 total, $4,331.80 interest; sources must equal uses; owner's share is 43% of the total.</p><div class=\"callout\"><strong>Common mistake:</strong> Forgetting working capital. The van and tools are visible, so they get listed; the cash to survive the first slow months is invisible, so it gets forgotten — and the business dies in month three.</div><div class=\"callout\"><strong>Common mistake:</strong> Counting the loan payment on top of fixed costs when it is already inside them, or forgetting it entirely. Either way the break-even is wrong.</div><p><strong>Plan link:</strong> This module's assignment is the startup-cost and funding section. A lender should be able to check the addition, see the owner's $15,000, and find the $405.53 payment inside the monthly fixed costs.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "One-time costs",
      "def": "Startup spending on things that last: van, tools, parts inventory, licenses, branding — here $28,500."
    },
    {
      "term": "Working capital",
      "def": "Cash held to pay bills before sales cover costs — here $6,500 of the $35,000 startup total."
    },
    {
      "term": "Sources of funds",
      "def": "Where the startup money comes from: owner savings $15,000 and a bank loan $20,000."
    },
    {
      "term": "Uses of funds",
      "def": "What the startup money is spent on; the uses must total the sources — here both $35,000."
    },
    {
      "term": "Skin in the game",
      "def": "The owner's own money at risk — here $15,000, or 43% of the startup total — which lenders read as commitment."
    },
    {
      "term": "Loan payment",
      "def": "The fixed monthly payment on a loan — here $405.53 on $20,000 at 8% over 5 years."
    },
    {
      "term": "Interest",
      "def": "The cost of borrowing — here $4,331.80 over the life of the loan ($24,331.80 paid minus $20,000 borrowed)."
    },
    {
      "term": "Principal",
      "def": "The amount borrowed, before interest — here $20,000."
    },
    {
      "term": "Personal guarantee",
      "def": "A promise that the owner will repay a loan personally if the business cannot — it reaches through the LLC wall for that loan."
    },
    {
      "term": "Equity",
      "def": "Money put into a business in exchange for ownership, rather than lent at interest. Not used in this plan."
    },
    {
      "term": "Debt",
      "def": "Money borrowed that must be repaid with interest — here the $20,000 bank loan."
    },
    {
      "term": "Grant",
      "def": "Money given, not lent, usually for a public purpose; a plan must never depend on a grant it has not won."
    },
    {
      "term": "Amortization",
      "def": "Paying a loan off in equal installments, each part interest and part principal, until the balance reaches zero."
    }
  ],
  "video": {
    "title": "How Much Money Do You Need to Start a Business? (Most Owners Guess Wrong)",
    "embedUrl": "https://www.youtube.com/embed/03Lxn0Fq1Dw",
    "note": "Works through opening cost, monthly cost, and a cash reserve — the same three buckets you total in this module's startup-cost table.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Plan section: Startup cost table.</strong> Build the table: one-time costs (van $18,000, tools $4,500, parts $3,000, licenses/insurance $1,800, branding/website $1,200) and working capital $6,500. Total each bucket and the whole.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: One-time = $18,000 + $4,500 + $3,000 + $1,800 + $1,200 = <strong>$28,500</strong>. Step 2: Working capital = <strong>$6,500</strong>. Step 3: Total = $28,500 + $6,500 = <strong>$35,000</strong>. Step 4: A table that hides working capital inside the one-time bucket is a table that will be misread.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Sources and uses.</strong> Sources: savings $15,000, loan $20,000. Uses: as in Problem 1. Show both sides total $35,000, and compute the owner's share as a percentage.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sources = $15,000 + $20,000 = <strong>$35,000</strong>. Step 2: Uses = <strong>$35,000</strong> (Problem 1). Step 3: They balance. Step 4: Owner's share = $15,000 ÷ $35,000 = 0.429, about <strong>43%</strong>. Step 5: A lender sees real commitment at 43%; a plan with $0 of the owner's money is a plan the owner does not believe in.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Loan payment.</strong> A $20,000 loan at 8% over 5 years (60 payments) has a monthly payment of $405.53. (a) What is paid in total? (b) How much of that is interest? (c) What is the payment as a share of the $3,600 monthly fixed cost?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 60 × $405.53 = <strong>$24,331.80</strong>. Step 2: (b) $24,331.80 − $20,000 = <strong>$4,331.80</strong> interest. Step 3: (c) $405.53 ÷ $3,600 = 0.113, about <strong>11%</strong> of monthly fixed costs. Step 4: The payment is inside the $3,600 — never add it again on top.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — What if the loan were bigger?</strong> If the loan were $25,000 instead of $20,000 at the same rate and term, the payment would be about $506.91 a month. How much more is that per month and per year than $405.53, and what does it do to break-even?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Extra per month = $506.91 − $405.53 = <strong>$101.38</strong>. Step 2: Extra per year = $101.38 × 12 = <strong>$1,216.56</strong>. Step 3: Fixed costs rise by $101.38 a month, so break-even rises by $101.38 ÷ $45 = 2.25, about <strong>2 to 3 more tune-ups a month</strong>. Step 4: Borrowing more is never free — it raises the bar the business must clear every month.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — The missing $2,000.</strong> The owner finds a $2,000 cost that was left out (a second insurance policy). The startup total becomes $37,000. Sources are still $35,000. What are the plan's honest options?</p>",
      "solution": "<p><strong>Answer:</strong> The honest options are: add $2,000 of savings, borrow $2,000 more (and accept the higher payment), or cut $2,000 of uses somewhere real. What is not an option is leaving the table unbalanced and hoping the bank does not notice — the bank will notice, and the missing $2,000 will be paid from a credit card in month one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Plan section: Funding request.</strong> Write the funding request paragraph: how much, from whom, for what, and what the lender gets (repayment of $405.53 a month for 60 months, secured by the van).</p>",
      "solution": "<p><strong>Answer:</strong> A good paragraph: 'Maple Street requests a $20,000 term loan at 8% over 5 years, repaid at $405.53 a month, to buy the van and tools listed in the uses table, alongside $15,000 of the owner's savings. The loan is secured by the van.' It names the amount, the source, the use, and the repayment — the four things a lender decides on.</p>"
    }
  ],
  "quiz": [
    {
      "q": "One-time startup costs total:",
      "choices": [
        "$6,500",
        "$28,500",
        "$35,000",
        "$20,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $18,000 + $4,500 + $3,000 + $1,800 + $1,200 = $28,500. (a) is working capital alone. (c) is the total including working capital. (d) is the loan."
    },
    {
      "q": "Total startup cost is $35,000 because:",
      "choices": [
        "$28,500 one-time + $6,500 working capital",
        "$20,000 loan + $15,000 savings + $5,000 grant",
        "12 months × $3,600",
        "$65 × 1,200 tune-ups"
      ],
      "answer": 0,
      "explanation": "Correct: (a). One-time $28,500 plus working capital $6,500. (b) invents a $5,000 grant that does not exist. (c) is annual fixed costs, not startup. (d) is Year-1 sales."
    },
    {
      "q": "Total paid on the loan is:",
      "choices": [
        "$20,000",
        "$24,331.80",
        "$4,331.80",
        "$405.53"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 60 × $405.53 = $24,331.80. (a) is the principal borrowed. (c) is the interest alone. (d) is one monthly payment."
    },
    {
      "q": "Interest on the loan is:",
      "choices": [
        "$405.53",
        "$4,331.80",
        "$20,000",
        "$24,331.80"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $24,331.80 paid − $20,000 borrowed = $4,331.80. (a) is one payment. (c) is principal. (d) is total paid."
    },
    {
      "q": "The owner's share of startup funding is about:",
      "choices": [
        "20%",
        "43%",
        "57%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $15,000 ÷ $35,000 = 42.9%, about 43%. (a) is not computed from these numbers. (c) is the loan's share ($20,000 ÷ $35,000). (d) would mean no loan at all."
    },
    {
      "q": "The loan payment belongs:",
      "choices": [
        "On top of the $3,600 monthly fixed costs",
        "Inside the $3,600 monthly fixed costs",
        "In the marketing budget only",
        "Nowhere — loans are free"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The $405.53 is part of fixed costs; counting it again double-counts it. (a) is the double-counting error. (c) is wrong: it is a financing cost, not marketing. (d) is wrong: the interest alone is $4,331.80."
    },
    {
      "q": "A sources-and-uses table must:",
      "choices": [
        "Balance to the dollar",
        "Show sources larger than uses",
        "Hide working capital",
        "List only the van"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Every dollar must have a named job, and the two sides must match. (b) is wrong: extra sources with no job are unjustified. (c) is wrong: hiding working capital is the classic error. (d) is wrong: all uses must be listed."
    },
    {
      "q": "A personal guarantee means:",
      "choices": [
        "The owner promises to repay personally if the business cannot",
        "The bank guarantees the business will succeed",
        "The loan has no interest",
        "The LLC protects the owner from this loan"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It reaches through the LLC wall for that loan. (b) is wrong: banks do not guarantee success. (c) is wrong: the loan costs $4,331.80 in interest. (d) is wrong: the guarantee is precisely the exception to the LLC wall."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Financial Plan I: Startup Costs &amp; Funding: Quick Reference</h3>\n<p><strong>Core idea:</strong> One-time costs buy the business; working capital keeps it alive until sales cover costs. Both belong in the total.</p>\n<p><strong>Startup:</strong> One-time $28,500 (van $18,000 · tools $4,500 · parts $3,000 · licenses/insurance $1,800 · branding/website $1,200) + working capital $6,500 = $35,000.</p>\n<p><strong>Funding:</strong> Savings $15,000 (43%) + loan $20,000 (57%). Loan: $405.53/month × 60 = $24,331.80 total, $4,331.80 interest. The payment sits inside the $3,600 monthly fixed costs.</p>\n<div class=\"formula\">Total paid = Payment × Months &nbsp;|&nbsp; Interest = Total paid − Principal &nbsp;|&nbsp; Sources = Uses = $35,000</div>\n<p><strong>Self-check:</strong> Re-add the startup table and the loan total without looking. If the two sides of sources and uses do not match, find the missing dollar before a lender does.</p>\n"
};
