// ACC 102 - Module 10: Capital Budgeting Decisions
module.exports = {
  number: 10,
  slug: "capital-budgeting-decisions",
  title: "Capital Budgeting Decisions",
  estTime: "3–4 hours",
  objectives: [
    "Explain capital budgeting and the time value of money.",
    "Compute net present value (NPV) and apply the NPV decision rule.",
    "Compute the payback period and the internal rate of return (IRR).",
    "Explain the strengths and weaknesses of each capital budgeting method.",
    "Compare two projects using NPV when their lives or sizes differ."
  ],
  sections: [
    {
      heading: "Capital Budgeting and the Time Value of Money",
      html: `
<p><strong>Capital budgeting</strong> is the process of deciding which long-term investments — machines, buildings, new product lines — are worth the money. These decisions are large, long-lived, and hard to reverse, so they deserve better tools than gut feel. The foundation is the <strong>time value of money</strong>: a dollar today is worth more than a dollar in five years, because today's dollar can be invested and earn a return. Future cash flows must therefore be <strong>discounted</strong> back to today's value before they can be compared with today's cost.</p>
<p>The discount rate is the company's required rate of return — the return it could earn elsewhere at similar risk. A project that cannot beat that rate destroys value, even if its undiscounted cash flows exceed its cost.</p>
<div class="formula">Present value = Future cash flow ÷ (1 + r)^n &nbsp;|&nbsp; Annuity PV factor (10%, 5 years) = 3.7908</div>
<div class="callout"><strong>Key idea:</strong> Capital budgeting compares cash, not accounting profit. Depreciation is not a cash flow; the cash spent on the machine and the cash it generates are what matter.</div>`
    },
    {
      heading: "Net Present Value: The Best Rule",
      html: `
<p><strong>Net present value (NPV)</strong> is the present value of a project's future cash inflows minus its initial investment. If NPV is positive, the project earns more than the required return and adds value — accept it. If NPV is negative, reject it. NPV is the best capital budgeting method because it uses all cash flows, discounts them correctly, and measures value added in dollars.</p>
<p><strong>Worked example:</strong> A machine costs $100,000 and generates $30,000 of cash inflow per year for 5 years. Required return 10%. The present value of a $30,000 annuity for 5 years at 10% is 30,000 × 3.7908 = <strong>$113,724</strong>. NPV = 113,724 − 100,000 = <strong>+$13,724</strong>. The project adds $13,724 of value, so accept it. Note the discounting matters: undiscounted inflows total $150,000, which would overstate the gain by ignoring that the later dollars are worth less.</p>`
    },
    {
      heading: "Payback Period and Internal Rate of Return",
      html: `
<p>The <strong>payback period</strong> is how long it takes for a project's cash inflows to recover its initial investment. For even annual inflows: investment ÷ annual inflow. For the worked machine: 100,000 ÷ 30,000 = <strong>3.33 years</strong>. Payback is simple and popular because it measures risk — how long the money is at stake — but it ignores the time value of money and ignores all cash flows after payback. A project that pays back in 3 years and then dies looks as good as one that pays back in 3 years and earns for 10 more.</p>
<p>The <strong>internal rate of return (IRR)</strong> is the discount rate that makes NPV equal zero — the project's own effective rate of return. Accept if IRR exceeds the required return. For the worked machine, the annuity factor is 100,000 ÷ 30,000 = 3.3333; the 5-year annuity factor is 3.3522 at 15% and 2.9906 at 20%, so the IRR is about <strong>15%</strong> (just above 15%, since 3.3333 is just below the 15% factor). That exceeds the 10% required return, confirming the accept decision. IRR's flaw: it assumes cash inflows are reinvested at the IRR itself, and it can misrank projects of different sizes.</p>
<div class="callout"><strong>Key idea:</strong> When NPV and IRR disagree — usually with projects of different sizes or timing — trust NPV. It measures dollars of value added; IRR measures a rate, and a high rate on a small project can be worth less than a modest rate on a large one.</div>`
    },
    {
      heading: "Comparing Projects and Common Pitfalls",
      html: `
<p>When projects have different lives, compare them over a common horizon or use the equivalent annual annuity — otherwise the longer project wins simply by living longer. When projects are mutually exclusive, pick the highest NPV, not the highest IRR or the shortest payback. And always use incremental cash flows: only the cash flows that change if the project is accepted, including the tax effect of depreciation (a tax shield, since depreciation reduces taxable income even though it is not cash) and the salvage value at the end.</p>
<p>The most common capital budgeting error is not arithmetic — it is optimism. Cash flow forecasts are usually somebody's hopes. A good capital budgeter runs a sensitivity check: what happens to NPV if sales are 10% lower, or costs 10% higher? If the project still clears the hurdle, it is robust; if it only works on the rosiest forecast, it is a gamble wearing a spreadsheet.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Discount future cash flows at the required rate of return before comparing them with today's investment.</li>
<li>NPV = present value of inflows − initial investment. Positive NPV: accept. NPV is the best method.</li>
<li>Payback = investment ÷ annual inflow (even flows); it ignores time value and post-payback flows.</li>
<li>IRR = the rate where NPV is zero; accept if IRR exceeds the required return. Trust NPV when methods disagree.</li>
<li>Use incremental cash flows only, including salvage value and the tax shield from depreciation.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Using accounting profit instead of cash flow in NPV. Profit includes depreciation (not cash) and ignores the timing of receipts and payments. Capital budgeting is a cash decision.</div>
<div class="callout"><strong>Common mistake:</strong> Accepting a project because its payback is short. A short payback says the money comes back quickly; it says nothing about how much value the project creates over its whole life.</div>
<p><strong>Ready-to-work link:</strong> This module bridges to FIN 101, where NPV and IRR return with bonds, stocks, and the cost of capital. If you can compute NPV and IRR for the worked machine by hand, the finance course will build directly on it.</p>`
    }
  ],
  keyTerms: [
    { term: "Capital budgeting", def: "Deciding which long-term investments are worth undertaking, using discounted cash flows." },
    { term: "Time value of money", def: "The principle that a dollar today is worth more than a dollar in the future because it can be invested." },
    { term: "Discount rate", def: "The required rate of return used to convert future cash flows to present value." },
    { term: "Present value", def: "The value today of a future cash flow, discounted at the required rate." },
    { term: "Net present value (NPV)", def: "Present value of future cash inflows minus the initial investment; accept if positive." },
    { term: "Internal rate of return (IRR)", def: "The discount rate that makes a project's NPV equal zero; accept if it exceeds the required return." },
    { term: "Payback period", def: "The time needed for a project's cash inflows to recover its initial investment." },
    { term: "Required rate of return", def: "The minimum return a company demands from an investment, reflecting its risk and opportunity cost." },
    { term: "Annuity", def: "A series of equal cash flows at regular intervals." },
    { term: "Incremental cash flow", def: "The cash flow that changes if a project is accepted." },
    { term: "Salvage value", def: "The cash received from selling an asset at the end of a project's life." },
    { term: "Tax shield", def: "The tax saving from depreciation, which reduces taxable income without being a cash outflow." },
    { term: "Mutually exclusive projects", def: "Projects where accepting one means rejecting the other; choose the highest NPV." },
    { term: "Sensitivity analysis", def: "Testing how NPV changes when key assumptions (sales, costs, discount rate) change." },
    { term: "Hurdle rate", def: "Another name for the required rate of return a project must clear." }
  ],
  video: {
    title: "Net Present Value (NPV)",
    embedUrl: "https://www.youtube.com/embed/HFFkFMfotT0",
    note: "Edspira explains net present value and works an example of discounting future cash flows back to today. Watch it, then redo the module's machine example: $30,000 a year for 5 years at 10% has a present value of $113,724, so NPV is +$13,724.",
    more: [
      { title: "IRR (Internal Rate of Return)", url: "https://www.youtube.com/watch?v=OSDDrZZaV8E" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A machine costs $100,000 and generates $30,000 of cash inflow per year for 5 years. The required return is 10% and the 5-year annuity factor at 10% is 3.7908. Compute (a) the present value of the inflows and (b) the NPV. Should the company accept?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: PV of inflows = 30,000 × 3.7908 = <strong>$113,724</strong>. Step 2: NPV = 113,724 − 100,000 = <strong>+$13,724</strong>. Step 3: NPV is positive, so <strong>accept</strong> — the project adds $13,724 of value.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> For the same machine ($100,000 investment, $30,000 per year for 5 years): (a) What is the payback period? (b) The annuity factor is 100,000 ÷ 30,000 = 3.3333; the 5-year factor is 3.3522 at 15% and 2.9906 at 20%. Estimate the IRR and state the decision at a 10% required return.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Payback = 100,000 ÷ 30,000 = <strong>3.33 years</strong>. Step 2: The target factor 3.3333 is just below the 15% factor (3.3522), so the IRR is about <strong>15%</strong> (just above 15%). Step 3: IRR of ~15% exceeds the 10% required return, so <strong>accept</strong> — consistent with the positive NPV.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A project costs $50,000 and returns $12,000 per year for 6 years. The 6-year annuity factor at 10% is 4.3553. Compute the NPV at a 10% required return and state the decision.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: PV of inflows = 12,000 × 4.3553 = <strong>$52,264</strong> (12,000 × 4.3553 = 52,263.60, rounded). Step 2: NPV = 52,264 − 50,000 = <strong>+$2,264</strong>. Step 3: NPV is positive, so <strong>accept</strong> — though the margin is thin, so check the forecast's sensitivity.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Project A has NPV of $20,000 and IRR of 18%. Project B has NPV of $35,000 and IRR of 14%. The projects are mutually exclusive and the required return is 10%. Which should the company choose, and why?</p>",
      solution: "<p><strong>Answer: Project B.</strong> Step 1: Both pass the IRR test (both exceed 10%), but they are mutually exclusive, so only one can be chosen. Step 2: NPV measures dollars of value added, and B adds $35,000 vs. A's $20,000. Step 3: When NPV and IRR disagree, trust NPV — a higher rate on a smaller project can be worth fewer dollars.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A project costs $80,000, generates $25,000 per year for 4 years, and has a salvage value of $5,000 at the end of year 4. The discount rate is 10%. The 4-year annuity factor is 3.1699 and the single-payment factor for year 4 is 0.6830. Compute the NPV.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: PV of annual inflows = 25,000 × 3.1699 = $79,248 (79,247.50 rounded). Step 2: PV of salvage = 5,000 × 0.6830 = $3,415. Step 3: Total PV = 79,248 + 3,415 = $82,663. Step 4: NPV = 82,663 − 80,000 = <strong>+$2,663</strong>. Accept — narrowly positive.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A manager proposes a project with a 2-year payback but a negative NPV. Explain how that can happen and what the company should do.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Payback only counts cash flows until the investment is recovered; it ignores the time value of money and everything after payback. Step 2: A project can return its cash quickly and then generate large costs, or its later inflows can be too small and too late to justify the investment once discounted. Step 3: The company should <strong>reject</strong> it — a negative NPV means the project destroys value, whatever its payback says.</p>"
    }
  ],
  quiz: [
    {
      q: "NPV is computed as:",
      choices: ["Total undiscounted inflows minus investment", "Present value of future inflows minus initial investment", "Investment minus present value of inflows", "Annual inflow divided by investment"],
      answer: 1,
      explanation: "Correct: (b). NPV discounts future inflows to today and subtracts the investment. (a) ignores discounting. (c) reverses the subtraction. (d) is a rate, not NPV."
    },
    {
      q: "Machine: $100,000 cost, $30,000/year for 5 years, 10%, annuity factor 3.7908. NPV is:",
      choices: ["+$50,000", "+$13,724", "−$13,724", "$0"],
      answer: 1,
      explanation: "Correct: (b). PV = 30,000 × 3.7908 = $113,724; NPV = 113,724 − 100,000 = +$13,724. (a) is the undiscounted gain, 150,000 − 100,000. (c) reverses the sign. (d) would require PV to equal the investment."
    },
    {
      q: "The NPV decision rule is:",
      choices: ["Accept if NPV is negative", "Accept if NPV is positive", "Accept if payback is longest", "Accept if IRR is below the required return"],
      answer: 1,
      explanation: "Correct: (b). A positive NPV means the project adds value above the required return. (a) accepts value-destroying projects. (c) prefers slow recovery. (d) accepts projects earning less than required."
    },
    {
      q: "Payback period for a $100,000 investment returning $30,000 per year is:",
      choices: ["3.33 years", "5 years", "3.79 years", "10 years"],
      answer: 0,
      explanation: "Correct: (a). 100,000 ÷ 30,000 = 3.33 years. (b) is the project's life. (c) is the annuity factor. (d) is the discount rate's denominator in years, not the payback."
    },
    {
      q: "IRR is best defined as:",
      choices: ["The discount rate that makes NPV equal zero", "Investment divided by annual inflow", "The required rate of return", "Total inflows divided by total outflows"],
      answer: 0,
      explanation: "Correct: (a). IRR is the rate at which discounted inflows exactly equal the investment. (b) is the payback formula's reciprocal. (c) is the hurdle rate used to judge IRR. (d) ignores timing entirely."
    },
    {
      q: "When NPV and IRR disagree on mutually exclusive projects, the company should trust:",
      choices: ["IRR, because a rate is more precise", "Payback, because it is simplest", "NPV, because it measures dollars of value added", "Neither — flip a coin"],
      answer: 2,
      explanation: "Correct: (c). NPV measures value in dollars; IRR can favor a small project with a high rate over a large project worth more dollars. (a) and (b) prefer inferior measures. (d) is not a decision method."
    },
    {
      q: "A weakness of the payback method is that it:",
      choices: ["Uses discounted cash flows", "Ignores the time value of money and cash flows after payback", "Is too hard to compute", "Requires a salvage value"],
      answer: 1,
      explanation: "Correct: (b). Payback counts undiscounted cash only until recovery and ignores everything after. (a) is false — payback ignores discounting. (c) is false — it is the simplest method. (d) is false — salvage is optional."
    },
    {
      q: "Capital budgeting should use cash flows, not accounting profit, because:",
      choices: ["Profit is always higher than cash flow", "Depreciation is a cash outflow", "Profit includes non-cash items like depreciation and ignores the timing of receipts and payments", "Cash flows are never taxed"],
      answer: 2,
      explanation: "Correct: (c). Profit is an accounting measure; investment decisions depend on when cash actually moves. (a) is false. (b) is false — depreciation is not cash. (d) is false — cash flows are taxed."
    }
  ],
  studyGuide: `
<h3>Module 10 — Capital Budgeting Decisions: Quick Reference</h3>
<p><strong>Core idea:</strong> Discount future cash flows at the required return, then compare with today's investment. Use cash, not accounting profit.</p>
<div class="formula">NPV = PV of inflows − Initial investment &nbsp;|&nbsp; Accept if NPV > 0</div>
<div class="formula">Payback = Investment ÷ Annual inflow (even flows) &nbsp;|&nbsp; IRR = rate where NPV = 0; accept if IRR > required return</div>
<p><strong>Anchor:</strong> $100,000 machine, $30,000/year for 5 years, 10%, factor 3.7908 → PV $113,724, NPV +$13,724, payback 3.33 years, IRR ≈ 15%. Accept.</p>
<p><strong>When methods disagree:</strong> Trust NPV — it measures dollars of value added.</p>
<p><strong>Watch out:</strong> Payback ignores time value and post-payback flows. IRR assumes reinvestment at the IRR. Always use incremental cash flows, including salvage and the depreciation tax shield.</p>
<p><strong>Self-check:</strong> Recompute the anchor, then change the discount rate to 15% (factor 3.3522) and confirm NPV falls to about $566 — the project barely clears at 15%, which is why its IRR is about 15%.</p>
`
};
