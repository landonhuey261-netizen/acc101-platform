// FIN101 - Module 7: Capital Budgeting: NPV, IRR & Payback
module.exports = {
  "number": 7,
  "slug": "capital-budgeting-npv-irr-payback",
  "title": "Capital Budgeting: NPV, IRR & Payback",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what capital budgeting is and why it is the most important financial decision.",
    "Compute net present value (NPV) and apply its decision rule.",
    "Compute the internal rate of return (IRR) and apply its decision rule.",
    "Compute payback and discounted payback and state their limits.",
    "Use worked examples to choose between two competing projects."
  ],
  "sections": [
    {
      "heading": "Capital Budgeting: The Biggest Decision",
      "html": "\n<strong>Capital budgeting</strong> is deciding which long-term investments to make — a new machine, a second location, a product line. It is the most important financial decision because the amounts are large, the commitment lasts years, and a bad choice cannot be undone cheaply. The investment decision from Module 1 is capital budgeting, and this module gives it its tools. All of them rest on Module 3's time value of money: a project is a stream of cash flows over time, and the tools differ in how they weigh those flows.\n<p>The first rule of capital budgeting is to use <strong>cash flows, not accounting profit</strong>. Profit includes non-cash items like depreciation and counts revenue when earned, not when cash arrives; a project is judged by the cash it actually generates and consumes, when it generates and consumes it. The second rule is to count only <strong>incremental</strong> cash flows — the cash that changes because of the project, including the cost of the equipment, the extra sales, the extra costs, and the tax effects — and to ignore sunk costs already spent.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Judge a project by its cash flows, not its accounting profit — and only by the cash flows the project itself changes. Sunk costs are ignored.</div>\n"
    },
    {
      "heading": "Net Present Value: The Gold Standard",
      "html": "\n<strong>Net present value (NPV)</strong> is the present value of a project's cash inflows minus the cost of the investment, discounted at the firm's cost of capital. If NPV is positive, the project earns more than its hurdle and creates value — take it. If NPV is negative, it destroys value — reject it. Worked example (Project A): a machine costs $100,000 and returns $30,000 a year for 5 years, discounted at 10%. The 5-year, 10% annuity factor is 3.7908. Present value of inflows = $30,000 × 3.7908 = $113,723.60. NPV = $113,723.60 − $100,000 = $13,723.60. Positive — take the project. The <strong>profitability index (PI)</strong> is the same idea as a ratio: $113,723.60 ÷ $100,000 = 1.14 — each dollar invested returns $1.14 in present value.\n<p>NPV is the gold standard because it counts all cash flows, counts when they arrive, and measures value in dollars — the same units as the firm's goal. Its weakness is that it needs a discount rate, and a wrong rate gives a wrong answer. That is why Module 6's WACC matters: the hurdle must be right before NPV can be trusted.</p>\n<div class=\"formula\">NPV = PV of inflows − Investment &nbsp;|&nbsp; Project A: $30,000 × 3.7908 − $100,000 = $13,723.60 &nbsp;|&nbsp; PI = $113,723.60 ÷ $100,000 = 1.14</div>\n"
    },
    {
      "heading": "Internal Rate of Return and Payback",
      "html": "\n<p>The <strong>internal rate of return (IRR)</strong> is the discount rate that makes a project's NPV exactly zero — the project's own rate of return. Project A's IRR is 15.24%: at a 15.24% discount rate, the present value of its $30,000-a-year inflows is exactly $100,000. The decision rule is to take the project if its IRR beats the hurdle rate (here 10%) — 15.24% beats 10%, so take it. IRR is popular because it speaks in percentages, which managers find intuitive. Its weakness is that it can mislead when projects differ in size or timing, and a project with unusual cash flows can have more than one IRR — in those cases, trust NPV.</p>\n<strong>Payback</strong> is the simplest tool: how long until the project repays its cost? Project A repays $100,000 at $30,000 a year, so payback is $100,000 ÷ $30,000 = 3.33 years. <strong>Discounted payback</strong> does the same with discounted cash flows: Project A's discounted inflows reach $95,095.96 after 4 years and $113,723.60 after 5, so it needs $100,000 − $95,095.96 = $4,904.04 more in year 5, which is $4,904.04 ÷ $18,627.64 = 0.26 of the year — discounted payback is 4.26 years. Payback is easy to explain and useful for a quick liquidity check, but it ignores everything after the payback date and (in its simple form) ignores the time value of money — so it is a check, never the decision.\n<ul>\n<li><strong>Project A:</strong> NPV $13,723.60, IRR 15.24%, PI 1.14, payback 3.33 years, discounted payback 4.26 years.</li>\n<li><strong>Project B:</strong> cost $80,000, $22,000 a year for 5 years → NPV $3,397.31, IRR 11.65%, PI 1.04, payback 3.64 years.</li>\n</ul>\n"
    },
    {
      "heading": "Choosing Between Projects",
      "html": "\n<p>When two projects compete for the same money, NPV is the tie-breaker — it measures value in dollars, and the firm wants the most dollars. Worked comparison: Project A (cost $100,000, NPV $13,723.60, IRR 15.24%) versus Project B (cost $80,000, $22,000 a year for 5 years, NPV $3,397.31, IRR 11.65%). Project A wins on NPV, on IRR, and on profitability index (1.14 vs. 1.04) — take A. But note the trap: if the firm could take B <em>and</em> another project with the remaining $20,000, the comparison changes — which is why capital budgeting is done for the whole portfolio, not one project at a time, and why the firm's budget constraint matters.</p>\n<p>The final discipline is honesty about the inputs. NPV and IRR are only as good as the cash flow forecasts, and forecasts are optimistic by nature. A good finance manager runs the numbers at a lower sales forecast and a higher cost forecast — a <strong>sensitivity analysis</strong> — and asks whether the project still passes. A project that only passes on its rosiest forecast is a gamble, not an investment.</p>\n<div class=\"callout\"><strong>Key idea:</strong> When projects compete, NPV is the tie-breaker — it measures value in dollars. And always test the rosy forecast: a project that only passes on its best case is a gamble.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Capital budgeting judges long-term investments by their incremental cash flows, not accounting profit.</li>\n<li>NPV: present value of inflows minus cost. Project A: $13,723.60 — positive, take it. PI = 1.14.</li>\n<li>IRR: the rate that makes NPV zero. Project A: 15.24% — beats the 10% hurdle, take it.</li>\n<li>Payback: 3.33 years (simple), 4.26 years (discounted). Useful as a check, never as the decision.</li>\n<li>Project B: NPV $3,397.31, IRR 11.65% — Project A wins on every measure.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Using accounting profit instead of cash flow. Depreciation is not cash, and revenue counted before the cash arrives is not cash yet.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Letting payback decide. Payback ignores everything after the payback date and (in simple form) the time value of money — it is a liquidity check, not a value measure.</div>\n<p><strong>Ready-to-Work link:</strong> Lab 2 runs the full Project A vs. Project B comparison on the lab grid — NPV, IRR, payback, and the decision.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Capital budgeting",
      "def": "Deciding which long-term investments to make, judged by their cash flows."
    },
    {
      "term": "Net present value (NPV)",
      "def": "Present value of a project's cash inflows minus its cost; positive means take it."
    },
    {
      "term": "Internal rate of return (IRR)",
      "def": "The discount rate that makes a project's NPV exactly zero."
    },
    {
      "term": "Payback period",
      "def": "How long until a project repays its cost from its cash inflows."
    },
    {
      "term": "Discounted payback",
      "def": "Payback computed with discounted cash flows."
    },
    {
      "term": "Profitability index (PI)",
      "def": "Present value of inflows divided by the investment; above 1.0 means take it."
    },
    {
      "term": "Incremental cash flow",
      "def": "The cash flow that changes because of a project."
    },
    {
      "term": "Sunk cost",
      "def": "Money already spent that cannot be recovered — ignored in capital budgeting."
    },
    {
      "term": "Hurdle rate",
      "def": "The discount rate used to judge a project — the firm's cost of capital."
    },
    {
      "term": "Cash flow",
      "def": "Actual cash in and out, as distinct from accounting profit."
    },
    {
      "term": "Sensitivity analysis",
      "def": "Re-running a project's numbers under worse assumptions to test whether it still passes."
    },
    {
      "term": "Mutually exclusive projects",
      "def": "Projects that compete for the same money, so only one can be taken."
    },
    {
      "term": "Annuity factor",
      "def": "The present value of $1 a year for n years at a given rate: (1 − (1+r)^−n) ÷ r."
    },
    {
      "term": "Opportunity cost",
      "def": "What a resource could have earned in its next-best use."
    }
  ],
  "video": {
    "title": "NPV and IRR explained",
    "embedUrl": "https://www.youtube.com/embed/Fw5-wccViOM",
    "note": "The Finance Storyteller explains net present value and internal rate of return with worked examples. Compare the video's decision rule with the one in Section 2.",
    "more": [
      {
        "title": "IRR (Internal Rate of Return)",
        "url": "https://www.youtube.com/watch?v=OSDDrZZaV8E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Project A costs $100,000 and returns $30,000 a year for 5 years. The discount rate is 10% and the 5-year annuity factor is 3.7908. (a) What is the present value of the inflows? (b) What is the NPV?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of inflows = $30,000 × 3.7908 = <strong>$113,723.60</strong>. Step 2: NPV = $113,723.60 − $100,000 = <strong>$13,723.60</strong>. Step 3: NPV is positive, so the project creates value — take it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Project A has an IRR of 15.24% and the firm's hurdle rate is 10%. Should the firm take it, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The IRR rule is to take the project if IRR beats the hurdle rate. Step 2: 15.24% beats 10%, so <strong>take it</strong>. Step 3: The IRR and NPV rules agree here — both say take Project A. When they disagree (different sizes or timings), trust NPV.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Project A costs $100,000 and returns $30,000 a year. (a) What is its simple payback? (b) What is its profitability index?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Payback = $100,000 ÷ $30,000 = <strong>3.33</strong> years. Step 2: PI = $113,723.60 ÷ $100,000 = <strong>1.14</strong>. Step 3: PI above 1.0 confirms the NPV verdict — each dollar returns $1.14 in present value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Project B costs $80,000 and returns $22,000 a year for 5 years at a 10% discount rate. (a) What is its NPV? (b) Which project should the firm take, A or B?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of inflows = $22,000 × 3.7908 = <strong>$83,397.31</strong>. Step 2: NPV = $83,397.31 − $80,000 = <strong>$3,397.31</strong>. Step 3: Project A wins — its NPV ($13,723.60) is larger than B's ($3,397.31), and its IRR (15.24% vs. 11.65%) and PI (1.14 vs. 1.04) are also higher.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A project has a payback of 2 years and a negative NPV. Explain how that is possible, and which measure should decide.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Payback only counts cash until the cost is repaid — it ignores everything after year 2 and (in simple form) the time value of money. Step 2: The project may repay quickly and then lose money for years, or its later cash flows may be worth little when discounted. Step 3: NPV should decide — it counts all cash flows, when they arrive, in dollars of value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm spent $20,000 studying a project that will cost $100,000 to build. The study is done and the money is gone. Should the $20,000 count in the NPV calculation? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the $20,000 is a sunk cost: already spent and unrecoverable whatever the firm decides. Step 2: Capital budgeting counts only incremental cash flows, the cash that changes because of the decision. Step 3: Counting the sunk cost would punish a good project for a study that is already paid for.</p>"
    }
  ],
  "quiz": [
    {
      "q": "NPV is:",
      "choices": [
        "The project's total cash inflows",
        "The present value of cash inflows minus the cost of the investment",
        "The project's payback period",
        "The project's accounting profit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NPV discounts all inflows and subtracts the cost. (a) Total inflows ignore timing and cost. (c) Payback is a time measure, not a value. (d) Accounting profit includes non-cash items and ignores timing."
    },
    {
      "q": "Project A: $100,000 cost, $30,000 a year for 5 years, 10% discount rate. NPV is:",
      "choices": [
        "$13,723.60",
        "$50,000.00",
        "$3,397.31",
        "$0.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). $30,000 × 3.7908 = $113,723.60; minus $100,000 = $13,723.60. (b) $50,000.00 is total inflows minus cost without discounting. (c) $3,397.31 is Project B's NPV, not A's. (d) $0.00 would be the NPV at the IRR, not at 10%."
    },
    {
      "q": "Project A's IRR is 15.24% and the hurdle is 10%. The decision is to:",
      "choices": [
        "Reject it, because 15.24% is too high",
        "Take it, because IRR beats the hurdle rate",
        "Reject it, because NPV is positive",
        "Wait for a lower hurdle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IRR above the hurdle means the project earns more than its cost of money. (a) A high IRR is good, not a reason to reject. (c) A positive NPV is a reason to take, not reject. (d) The hurdle is the firm's cost of capital; it does not change because a project is attractive."
    },
    {
      "q": "Project A's simple payback is:",
      "choices": [
        "5.00 years",
        "3.33 years",
        "4.26 years",
        "1.14 years"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $100,000 ÷ $30,000 = 3.33 years. (a) 5.00 years is the project's life, not its payback. (c) 4.26 years is the discounted payback. (d) 1.14 is the profitability index."
    },
    {
      "q": "Project B: $80,000 cost, $22,000 a year for 5 years, 10%. Its NPV is:",
      "choices": [
        "$3,397.31",
        "$30,000.00",
        "$13,723.60",
        "-$5,000.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). $22,000 × 3.7908 = $83,397.31; minus $80,000 = $3,397.31. (b) $30,000.00 is total inflows minus cost without discounting. (c) is Project A's NPV, not B's. (d) The NPV is positive, not negative."
    },
    {
      "q": "Payback's main weakness is that it:",
      "choices": [
        "Is hard to calculate",
        "Ignores cash flows after the payback date and (in simple form) the time value of money",
        "Always gives the wrong answer",
        "Requires a discount rate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Payback stops counting once the cost is repaid. (a) Payback is the easiest tool to calculate. (c) Payback is often right as a liquidity check; it is wrong as a value measure. (d) Simple payback needs no discount rate — that is part of its weakness."
    },
    {
      "q": "A sunk cost should be ignored in capital budgeting because:",
      "choices": [
        "It is small",
        "It is already spent and cannot be recovered whatever the firm decides",
        "It is not real money",
        "Accountants say so"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only incremental cash flows — cash that changes because of the decision — count. (a) Sunk costs can be large. (c) Sunk costs were real money when spent. (d) The reason is economic logic, not an accounting rule."
    },
    {
      "q": "When two projects compete for the same money, the tie-breaker should be:",
      "choices": [
        "Payback, because it is simplest",
        "IRR, because it is a percentage",
        "NPV, because it measures value in dollars",
        "The project the manager likes best"
      ],
      "answer": 2,
      "explanation": "Correct: (c). NPV measures the dollars of value created, which is the firm's goal. (a) Payback ignores value after the payback date. (b) IRR can mislead when projects differ in size or timing. (d) Preference is not a financial criterion."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Capital Budgeting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Judge long-term investments by their incremental cash flows, discounted at the cost of capital. NPV is the gold standard; IRR and payback are checks.</p>\n<div class=\"formula\">NPV = PV of inflows − Cost &nbsp;|&nbsp; IRR: the rate that makes NPV = 0 &nbsp;|&nbsp; Payback = Cost ÷ Annual inflow &nbsp;|&nbsp; PI = PV of inflows ÷ Cost</div>\n<p><strong>Project A:</strong> cost $100,000, $30,000/yr for 5 years, 10% → PV $113,723.60, NPV $13,723.60, IRR 15.24%, PI 1.14, payback 3.33 years, discounted payback 4.26 years.</p>\n<p><strong>Project B:</strong> cost $80,000, $22,000/yr for 5 years, 10% → PV $83,397.31, NPV $3,397.31, IRR 11.65%, PI 1.04, payback 3.64 years. Project A wins on every measure.</p>\n<p><strong>Watch out:</strong> Use cash flows, not accounting profit; ignore sunk costs; never let payback decide. And test the rosy forecast — a project that only passes on its best case is a gamble.</p>\n<p><strong>Self-check:</strong> A project costs $50,000 and returns $15,000 a year for 5 years at 10%. What is its NPV? ($15,000 × 3.7908 − $50,000 = $6,862.00 — take it.)</p>\n"
};
