// egr290 — module 7. Original review content.
module.exports = {
  "number": 7,
  "slug": "engineering-economics-and-ethics",
  "title": "Engineering Economics and Professional Practice",
  "estTime": "3–4 hours",
  "objectives": [
    "Use the time value of money: future worth, present worth, and annual worth.",
    "Compare alternatives by present worth, annual worth, and rate of return.",
    "Calculate straight-line and declining-balance depreciation.",
    "Find a break-even point and explain the time value of money in plain words.",
    "Apply the engineering code of ethics and describe the path to PE licensure honestly."
  ],
  "sections": [
    {
      "heading": "The Time Value of Money",
      "html": "<p>A dollar today is worth more than a dollar next year, because today's dollar can earn interest. That single idea drives all of engineering economics. <strong>Future worth:</strong> F = P(1 + i)ⁿ. Put $1,000 away at 8% for 5 years and it grows to F = 1,000 × (1.08)⁵ = 1,000 × 1.4693 = $1,469.33. <strong>Present worth</strong> runs the other way: P = F/(1 + i)ⁿ. A payment of $2,000 due in 10 years at 6% is worth P = 2,000/(1.06)¹⁰ = 2,000/1.7908 = $1,116.79 today.</p><p>Most engineering cash flows are <strong>annuities</strong> — equal payments every year. The present worth of an annuity is P = A × [(1 + i)ⁿ − 1]/[i(1 + i)ⁿ]. Receiving $500 a year for 5 years at 10% is worth P = 500 × 3.7908 = $1,895.40 today (the factor 3.7908 is (P/A, 10%, 5)). The <strong>annual worth</strong> spreads a present sum over n years: A = P × [i(1 + i)ⁿ]/[(1 + i)ⁿ − 1]. A $10,000 machine over 10 years at 8% costs A = 10,000 × 0.14903 = $1,490.29 a year. These factors are in the FE Reference Handbook — use them, do not memorise them.</p>"
    },
    {
      "heading": "Comparing Alternatives: PW, AW, and IRR",
      "html": "<p>To choose between machines, bring every cash flow to the same point in time. <strong>Present worth:</strong> the alternative with the highest (least negative) present worth wins. <strong>Annual worth:</strong> the alternative with the highest annual worth wins — and annual worth is the right tool when the alternatives have different lives, because it already spreads each one over its own life. Never compare present worths of alternatives with different lives without adjusting them to a common period (usually the least common multiple of the lives, or annual worth).</p><p>The <strong>internal rate of return (IRR)</strong> is the interest rate at which the present worth of an alternative is zero. Invest $1,000 and get $1,200 back in one year: the IRR solves −1,000 + 1,200/(1 + i) = 0, so 1 + i = 1.2 and i = 20%. Accept a project when its IRR exceeds the minimum attractive rate of return (MARR). The IRR trap: a project can have more than one IRR if its cash flows change sign more than once — in that case, trust the present worth, not the IRR.</p>"
    },
    {
      "heading": "Depreciation and Break-Even",
      "html": "<p><strong>Depreciation</strong> spreads a machine's cost over its life. <strong>Straight-line</strong> depreciation is (cost − salvage)/life: a $50,000 machine with a $5,000 salvage value over 10 years depreciates ($50,000 − $5,000)/10 = $4,500 a year, and its book value after 3 years is $50,000 − 3 × $4,500 = $36,500. <strong>Declining-balance</strong> depreciation takes a fixed percentage of the remaining book value each year: double-declining-balance uses a rate of 2/life, so the same machine (rate 20%) depreciates $50,000 × 0.20 = $10,000 in year 1, leaving a book value of $40,000.</p><p><strong>Break-even analysis</strong> finds the quantity where revenue equals cost. With fixed costs of $20,000, a selling price of $50, and a variable cost of $30 per unit, the break-even quantity is Q = fixed/(price − variable) = 20,000/(50 − 30) = 1,000 units. Below 1,000 units the project loses money; above it, each extra unit contributes $20 of profit. The <strong>payback period</strong> — how long until the cash inflows repay the investment — is a simpler measure, but it ignores the time value of money and everything after payback, so the FE treats it as a rough screen, not a decision rule.</p>"
    },
    {
      "heading": "Ethics and the Road to Licensure",
      "html": "<p>Engineering ethics is not a list of rules to memorise — it is a duty. The core of every engineering code of ethics is the same: <strong>hold paramount the safety, health, and welfare of the public</strong>; practise only in areas of competence; be honest and objective; and avoid conflicts of interest. On the FE, an ethics question usually presents a conflict — a client asking you to sign off on work you did not check, a design you know is unsafe, a bribe disguised as a gift — and the right answer is the one that protects the public and tells the truth, even when it costs you the job. If a question asks what to do when public safety and a client's wishes conflict, public safety wins, every time.</p><p>The road to licensure is long and honest work: an <strong>ABET-accredited engineering degree</strong>, then the FE exam, then typically <strong>4 years of experience</strong> under a licensed engineer, then the PE exam. There is no shortcut, and no course in this app shortens it — this program prepares you for the FE as part of a future degree path, and it certifies no one. Michigan's specific FE/PE application steps and fees are not stated in this course, because they were not verified against the licensing authority; when you are ready, check them with the Michigan licensing board (LARA) directly. Your professional reputation is built one honest decision at a time — start now.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Time value: F = P(1 + i)ⁿ · P = F/(1 + i)ⁿ · annuity P = A(P/A, i, n) · A = P(A/P, i, n).</li><li>Compare by present worth (same life) or annual worth (different lives). IRR is the rate where PW = 0; accept if IRR &gt; MARR.</li><li>Straight-line: (cost − salvage)/life. Double-declining: rate 2/life on the book value. Break-even: fixed/(price − variable).</li><li>Ethics: public safety, health, and welfare come first, always. Practise only in your competence; disclose conflicts.</li><li>Licensure: ABET degree + FE + typically 4 years' experience + PE. No shortcut, and this app certifies no one.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Comparing present worths of alternatives with different lives without adjusting to a common period. Use annual worth instead.</div><div class=\"callout\"><strong>Common mistake:</strong> Trusting an IRR when the cash flows change sign more than once — the project can have two IRRs. Trust the present worth.</div><p><strong>Ready-to-Work link:</strong> If you can find a future worth, an annual worth, a depreciation charge, and a break-even quantity, you have this module. Module 8 moves to CAD and the CSWA.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Time value of money",
      "def": "A dollar today is worth more than a dollar later, because it can earn interest."
    },
    {
      "term": "Future worth",
      "def": "F = P(1 + i)ⁿ: what a present sum grows to at interest rate i over n periods."
    },
    {
      "term": "Present worth",
      "def": "P = F/(1 + i)ⁿ: what a future sum is worth today."
    },
    {
      "term": "Annuity",
      "def": "A series of equal payments at regular intervals."
    },
    {
      "term": "Annual worth",
      "def": "The equal annual amount equivalent to a present sum: A = P(A/P, i, n)."
    },
    {
      "term": "IRR",
      "def": "Internal rate of return: the interest rate at which an alternative's present worth is zero."
    },
    {
      "term": "MARR",
      "def": "Minimum attractive rate of return: the hurdle rate a project must beat to be accepted."
    },
    {
      "term": "Straight-line depreciation",
      "def": "An equal depreciation charge each year: (cost − salvage)/life."
    },
    {
      "term": "Declining-balance depreciation",
      "def": "A fixed percentage of the remaining book value each year; double-declining uses 2/life."
    },
    {
      "term": "Break-even point",
      "def": "The quantity where revenue equals cost: fixed/(price − variable cost)."
    },
    {
      "term": "Payback period",
      "def": "How long until cash inflows repay the investment; ignores the time value of money."
    },
    {
      "term": "Code of ethics",
      "def": "The engineer's duties: public safety first, competence, honesty, and no conflicts of interest."
    },
    {
      "term": "ABET",
      "def": "The accreditor of engineering degree programs in the US; a PE licence requires an ABET-accredited degree."
    }
  ],
  "video": {
    "title": "Estimating Master Class Episode 1 of 6",
    "embedUrl": "https://www.youtube.com/embed/TITugjruGmE",
    "note": "Cost estimating in practice — the numbers an engineer prices a job with. Watch it, then redo the present-worth and break-even examples in this module.",
    "more": [
      {
        "title": "Construction Safety Video: Focus Four",
        "url": "https://www.youtube.com/watch?v=9jlZEQuVTAM"
      },
      {
        "title": "Orientation for Core National Center for Construction Education and Research (NCCER) Course",
        "url": "https://www.youtube.com/watch?v=OhKRcyvo6ls"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Find the future worth of $1,000 at 8% for 5 years.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: F = P(1 + i)ⁿ = 1,000 × (1.08)⁵ = 1,000 × 1.4693 = $1,469.33.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Find the present worth of $2,000 due in 10 years at 6%.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = F/(1 + i)ⁿ = 2,000/(1.06)¹⁰ = 2,000/1.7908 = $1,116.79.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Find the annual worth of a $10,000 machine over 10 years at 8% ((A/P, 8%, 10) = 0.14903).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A = P × (A/P, i, n) = 10,000 × 0.14903 = $1,490.29 per year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A $50,000 machine has a $5,000 salvage value and a 10-year life. Find the straight-line depreciation per year and the book value after 3 years. Also find the year-1 double-declining-balance charge.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Straight-line = (50,000 − 5,000)/10 = $4,500 per year. Step 2: Book value after 3 years = 50,000 − 3 × 4,500 = $36,500. Step 3: DDB rate = 2/10 = 20%, so year 1 = 50,000 × 0.20 = $10,000.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Fixed costs are $20,000, price is $50, variable cost is $30 per unit. Find the break-even quantity and the profit at 1,500 units.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Break-even = 20,000/(50 − 30) = 1,000 units. Step 2: At 1,500 units, profit = (1,500 − 1,000) × (50 − 30) = 500 × 20 = $10,000.</p>"
    }
  ],
  "quiz": [
    {
      "module": 7,
      "q": "What is the future worth of $1,000 at 8% for 5 years?",
      "choices": [
        "$1,400.00",
        "$1,469.33",
        "$1,500.00",
        "$1,360.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = 1,000 × (1.08)⁵ = 1,000 × 1.4693 = $1,469.33. (a) is wrong: that is simple interest (1,000 × 1.40). (c) is wrong: that is 10% simple interest for 5 years. (d) is wrong: that is 8% simple interest for 4.5 years."
    },
    {
      "module": 7,
      "q": "What is the present worth of $2,000 due in 10 years at 6%?",
      "choices": [
        "$1,116.79",
        "$1,200.00",
        "$1,000.00",
        "$3,581.69"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P = 2,000/(1.06)¹⁰ = 2,000/1.7908 = $1,116.79. (b) is wrong: that is 2,000 × 0.6, not a discount. (c) is wrong: that is half the future sum, not the discounted value. (d) is wrong: that is the future worth of $2,000, not the present worth."
    },
    {
      "module": 7,
      "q": "Which method should you use to compare two machines with different lives?",
      "choices": [
        "Present worth, directly",
        "Annual worth",
        "Payback period only",
        "Straight-line depreciation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Annual worth spreads each alternative over its own life, so different lives compare fairly. (a) is wrong: present worths with different lives need adjustment to a common period. (c) is wrong: payback ignores the time value of money. (d) is wrong: depreciation is a cost allocation, not a comparison method."
    },
    {
      "module": 7,
      "q": "A project costs $1,000 and returns $1,200 in one year. What is its IRR?",
      "choices": [
        "10%",
        "20%",
        "120%",
        "2%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). −1,000 + 1,200/(1 + i) = 0 gives 1 + i = 1.2, so i = 20%. (a) is wrong: that would return $1,100. (c) is wrong: that is the return as a percentage of the wrong base. (d) is wrong: that would return $1,020."
    },
    {
      "module": 7,
      "q": "A $50,000 machine has a $5,000 salvage value and a 10-year life. What is the straight-line depreciation per year?",
      "choices": [
        "$5,000",
        "$4,500",
        "$10,000",
        "$4,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (50,000 − 5,000)/10 = $4,500 per year. (a) is wrong: that is 50,000/10, forgetting the salvage value. (c) is wrong: that is the year-1 double-declining charge. (d) is wrong: that is (50,000 − 10,000)/10."
    },
    {
      "module": 7,
      "q": "Fixed costs are $20,000, price $50, variable cost $30. What is the break-even quantity?",
      "choices": [
        "400 units",
        "667 units",
        "1,000 units",
        "2,000 units"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 20,000/(50 − 30) = 1,000 units. (a) is wrong: that is 20,000/50. (b) is wrong: that is 20,000/30. (d) is wrong: that is 20,000/10."
    },
    {
      "module": 7,
      "q": "What is the first duty in every engineering code of ethics?",
      "choices": [
        "Protect the client's profits",
        "Hold paramount the safety, health, and welfare of the public",
        "Keep the project on schedule",
        "Protect trade secrets"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Public safety, health, and welfare come first in every engineering code. (a) is wrong: client profit never outranks public safety. (c) is wrong: schedule is important, but not first. (d) is wrong: confidentiality matters, but not above safety."
    },
    {
      "module": 7,
      "q": "What does PE licensure require, in addition to passing the FE and PE exams?",
      "choices": [
        "An ABET-accredited engineering degree and typically 4 years of experience",
        "A CSWA certificate",
        "A business degree",
        "Nothing else"
      ],
      "answer": 0,
      "explanation": "Correct: (a). PE licensure needs an ABET-accredited degree plus typically 4 years of experience, plus both exams. (b) is wrong: the CSWA is a CAD credential, not a licence requirement. (c) is wrong: a business degree does not qualify. (d) is wrong: the degree and experience are required."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Engineering Economics and Professional Practice: Quick Reference</h3>\n<p><strong>Core idea:</strong> Money has a time value — bring every cash flow to the same point in time before you compare — and public safety outranks everything else.</p>\n<p><strong>Money:</strong> F = P(1 + i)ⁿ · P = F/(1 + i)ⁿ · P = A(P/A, i, n) · A = P(A/P, i, n).</p>\n<p><strong>Compare:</strong> Present worth (same life) · annual worth (different lives) · IRR where PW = 0, accept if IRR &gt; MARR.</p>\n<p><strong>Depreciation:</strong> Straight-line (cost − salvage)/life · DDB rate 2/life on book value · break-even = fixed/(price − variable).</p>\n<p><strong>Ethics:</strong> Public safety, health, and welfare first · practise only in your competence · disclose conflicts.</p>\n<p><strong>Licensure:</strong> ABET degree + FE + typically 4 years' experience + PE. This app certifies no one.</p>\n<p><strong>Watch out:</strong> Never compare present worths across different lives without adjusting; and never trust an IRR when cash flows change sign more than once.</p>\n<p><strong>Self-check:</strong> Find a future worth, an annual worth, a depreciation charge, and a break-even quantity without looking. If you can, you have this module.</p>\n"
};
