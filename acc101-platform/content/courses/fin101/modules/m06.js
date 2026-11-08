// FIN101 - Module 6: Cost of Capital: What Money Costs a Business
module.exports = {
  "number": 6,
  "slug": "cost-of-capital-what-money-costs",
  "title": "Cost of Capital: What Money Costs a Business",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the cost of capital is and why every project must beat it.",
    "Compute the after-tax cost of debt.",
    "Compute the cost of equity with CAPM and with the dividend growth model.",
    "Compute the weighted average cost of capital (WACC).",
    "Use a worked WACC example to judge whether a project earns enough."
  ],
  "sections": [
    {
      "heading": "What Money Costs: The Hurdle Rate",
      "html": "\n<p>Every dollar a business uses has a price. Debt costs interest; equity costs the return shareholders require; retained earnings cost the return owners give up by leaving the money in the firm. The <strong>cost of capital</strong> is the blended price of all the money a firm uses, and it is the <strong>hurdle rate</strong> every project must clear: a project that earns less than the cost of the money that funds it destroys value, however large its profit looks. A project earning 8% funded by money costing 9% loses 1% on every dollar it uses — the firm would have been richer doing nothing.</p>\n<p>The cost of capital is not the interest rate on the firm's latest loan, and it is not the return on its best project. It is the weighted average of all its funding sources, each priced at its own market cost. That is why it is called the <strong>weighted average cost of capital (WACC)</strong>, and why computing it is the bridge between the risk and return of Module 4 and the project decisions of Module 7.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The cost of capital is the hurdle rate: a project earning less than the cost of the money that funds it destroys value, however large its profit looks.</div>\n"
    },
    {
      "heading": "The Cost of Debt: Cheaper Than It Looks",
      "html": "\n<p>Debt's cost is its interest rate — but interest is tax-deductible, so the after-tax cost is lower. If a firm borrows at 6% and pays 25% tax, the after-tax cost of debt is 6% × (1 − 0.25) = 4.5%. The government, in effect, pays a quarter of the interest through the tax saving. That does not make debt free — the 4.5% must still be paid, and in a bad year the interest is due whether or not the firm earned anything — but it does make debt cheaper than equity, dollar for dollar, which is why firms borrow at all.</p>\n<p>The cost of debt is also the most observable cost: the firm can see what lenders charge it. The cost of equity is harder, because shareholders' required return is not printed on a statement — it must be estimated, and the next two sections give the two standard ways to estimate it.</p>\n<div class=\"formula\">After-tax cost of debt = Interest rate × (1 − Tax rate) &nbsp;|&nbsp; 6% × (1 − 0.25) = 4.5%</div>\n"
    },
    {
      "heading": "The Cost of Equity: CAPM and Dividend Growth",
      "html": "\n<p>The <strong>cost of equity</strong> is the return shareholders require to hold the firm's stock. The first way to estimate it is <strong>CAPM</strong> (Module 4): required return = risk-free rate + beta × market risk premium. With a 3% risk-free rate, a 9% market return, and a beta of 1.4, the cost of equity is 3% + 1.4 × 6% = 11.4%. The second way is the <strong>dividend growth model</strong> (Module 5): cost of equity = (next dividend ÷ price) + growth rate. With a $2.20 dividend, a $36.67 price, and 4% growth, the cost is ($2.20 ÷ $36.67) + 4% = 6.0% + 4% = 10.0%. The two methods give different answers — 11.4% and 10.0% — because they use different information, and a finance manager would weigh both, not trust either alone.</p>\n<p>Equity costs more than debt for a simple reason: shareholders bear more risk. Lenders are paid first and in full (or the firm defaults); shareholders are paid last, from whatever remains. The extra return they demand is the price of that risk — and the reason a firm cannot fund itself entirely with cheap debt without the lenders noticing the rising risk and raising the rate.</p>\n<ul>\n<li><strong>CAPM:</strong> cost of equity = Rf + Beta × (Rm − Rf) = 3% + 1.4 × 6% = 11.4%.</li>\n<li><strong>Dividend growth:</strong> cost of equity = (D<sub>1</sub> ÷ Price) + g = 6.0% + 4% = 10.0%.</li>\n<li><strong>Equity costs more than debt</strong> — shareholders are paid last and bear the most risk.</li>\n</ul>\n"
    },
    {
      "heading": "WACC: Putting It Together",
      "html": "\n<p>The <strong>weighted average cost of capital</strong> weights each source by its share of the firm's funding. Worked example: a firm funded 60% by equity (costing 12%) and 40% by debt (costing 6% before tax, 25% tax rate). The after-tax cost of debt is 6% × (1 − 0.25) = 4.5%. WACC = 0.60 × 12% + 0.40 × 4.5% = 7.2% + 1.8% = 9.0%. Every project this firm takes must earn more than 9.0% to create value. A project earning 11% creates value; a project earning 8% destroys it — even though 8% sounds like a good return in isolation.</p>\n<p>WACC changes as the firm changes. More debt lowers WACC at first (debt is cheap, and its interest is tax-deductible) — but as debt grows, lenders see more risk and raise the rate, shareholders see more risk and raise their required return, and WACC starts rising again. The lowest point of that curve is the firm's <strong>optimal capital structure</strong>: the mix of debt and equity that makes money cheapest. Finding it is Module 9's job; this module's job is to compute the hurdle and use it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> WACC = (weight of equity × cost of equity) + (weight of debt × after-tax cost of debt). Worked example: 0.60 × 12% + 0.40 × 4.5% = 9.0%.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>The cost of capital is the hurdle rate: projects must earn more than it to create value.</li>\n<li>After-tax cost of debt = interest × (1 − tax rate): 6% × 0.75 = 4.5%.</li>\n<li>Cost of equity by CAPM = 11.4% (3% + 1.4 × 6%); by dividend growth = 10.0% (6.0% + 4%).</li>\n<li>WACC = 0.60 × 12% + 0.40 × 4.5% = 9.0%.</li>\n<li>Equity costs more than debt because shareholders are paid last and bear the most risk.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Using the before-tax cost of debt in WACC. Interest is tax-deductible, so the cost that belongs in WACC is the after-tax 4.5%, not the 6% coupon rate.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Judging a project by its return alone. An 8% project funded by 9% money destroys value — the hurdle, not the headline return, decides.</div>\n<p><strong>Ready-to-Work link:</strong> Module 7 discounts every project's cash flows at the WACC — the 9.0% computed here is the rate the capital budgeting lab uses.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Cost of capital",
      "def": "The blended price of all the money a firm uses — the hurdle rate projects must beat."
    },
    {
      "term": "Hurdle rate",
      "def": "The minimum return a project must earn to create value — the firm's cost of capital."
    },
    {
      "term": "Weighted average cost of capital (WACC)",
      "def": "The cost of capital weighted by each funding source's share of the firm's total funding."
    },
    {
      "term": "After-tax cost of debt",
      "def": "Interest rate × (1 − tax rate), because interest is tax-deductible."
    },
    {
      "term": "Cost of equity",
      "def": "The return shareholders require to hold the firm's stock."
    },
    {
      "term": "Cost of debt",
      "def": "The interest rate a firm pays to borrow, before tax."
    },
    {
      "term": "Capital structure",
      "def": "The mix of debt and equity a firm uses to fund itself."
    },
    {
      "term": "Optimal capital structure",
      "def": "The debt-equity mix that makes the firm's money cheapest — the lowest WACC."
    },
    {
      "term": "Retained earnings",
      "def": "Profits kept in the business; their cost is the return owners give up by leaving the money in."
    },
    {
      "term": "Tax shield",
      "def": "The tax saving from deductible interest: interest × tax rate."
    },
    {
      "term": "Market value weights",
      "def": "The shares of debt and equity measured at market value, used to weight WACC."
    },
    {
      "term": "Book value weights",
      "def": "The shares of debt and equity measured at accounting (book) value — less accurate than market weights."
    },
    {
      "term": "Flotation cost",
      "def": "The cost of issuing new securities, such as underwriting fees."
    },
    {
      "term": "Leverage",
      "def": "Using debt to fund a firm; it lowers WACC at first, then raises it as risk grows."
    }
  ],
  "video": {
    "title": "Weighted Average Cost of Capital (WACC)",
    "embedUrl": "https://www.youtube.com/embed/46oLXwClvkw",
    "note": "Edspira explains WACC step by step. Work the module's 9.0% example alongside the video and check that your weights and after-tax cost of debt match.",
    "more": [
      {
        "title": "Weighted Average Cost of Capital (WACC) Explained",
        "url": "https://www.youtube.com/watch?v=q7MF4vCUDSI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A firm borrows at 6% and pays 25% tax. What is its after-tax cost of debt?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: After-tax cost = 6% × (1 − 0.25). Step 2: 6% × 0.75 = <strong>4.5%</strong>. Step 3: The tax saving is 6% × 0.25 = 1.5% — the government, in effect, pays a quarter of the interest.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A firm is funded 60% by equity costing 12% and 40% by debt costing 6% before tax, with a 25% tax rate. What is its WACC?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: After-tax cost of debt = 6% × (1 − 0.25) = 4.5%. Step 2: WACC = 0.60 × 12% + 0.40 × 4.5% = 7.2% + 1.8% = <strong>9.0%</strong>. Step 3: Every project must earn more than 9.0% to create value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The risk-free rate is 3%, the market return is 9%, and a firm's beta is 1.4. What is its cost of equity under CAPM?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Market risk premium = 9% − 3% = 6%. Step 2: Cost of equity = 3% + 1.4 × 6% = 3% + 8.4% = <strong>11.4%</strong>. Step 3: This is the return shareholders require — the price of the firm's equity money.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A stock pays a $2.20 dividend next year, trades at $36.67, and dividends grow at 4% a year. What is the cost of equity under the dividend growth model?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Dividend yield = $2.20 ÷ $36.67 = 0.06 = 6.0%. Step 2: Cost of equity = 6.0% + 4% growth = <strong>10.0%</strong>. Step 3: CAPM gave 11.4% for the same firm — the two methods use different information, so a finance manager weighs both rather than trusting either alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A project earns 8%. The firm's WACC is 9.0%. Should the firm take the project? Explain in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the project earns less than the 9.0% cost of the money that funds it. Step 2: It destroys value: the firm would be richer doing nothing with the money than putting it into an 8% project funded at 9.0%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm doubles its debt. Its WACC first falls, then rises. Explain both movements in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: WACC first falls because debt is cheaper than equity and its interest is tax-deductible, so replacing equity with debt lowers the blended cost. Step 2: WACC then rises because more debt means more risk — lenders raise the interest rate and shareholders raise their required return — until the extra risk costs more than the cheap debt saves.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The cost of capital is:",
      "choices": [
        "The interest rate on the firm's latest loan",
        "The blended price of all the money a firm uses — the hurdle rate projects must beat",
        "The firm's tax rate",
        "The return on its best project"
      ],
      "answer": 1,
      "explanation": "Correct: (b). WACC blends debt and equity at their market costs. (a) One loan's rate is only one ingredient. (c) The tax rate adjusts the cost of debt; it is not the cost of capital. (d) The best project's return is a result, not the hurdle."
    },
    {
      "q": "A firm borrows at 6% and pays 25% tax. Its after-tax cost of debt is:",
      "choices": [
        "6.0%",
        "4.5%",
        "1.5%",
        "8.0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 6% × (1 − 0.25) = 4.5%. (a) 6.0% is the before-tax cost. (c) 1.5% is the tax saving, not the cost. (d) 8.0% would be the rate grossed up, not reduced."
    },
    {
      "q": "60% equity at 12%, 40% debt at 6% before tax, 25% tax. WACC is:",
      "choices": [
        "9.0%",
        "10.0%",
        "7.2%",
        "12.0%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). After-tax debt is 4.5%; 0.60 × 12% + 0.40 × 4.5% = 7.2% + 1.8% = 9.0%. (b) 10.0% is the dividend-growth cost of equity in the module, not WACC. (c) 7.2% is only the equity part. (d) 12.0% is the cost of equity alone."
    },
    {
      "q": "The cost of equity under CAPM with a 3% risk-free rate, 9% market return, and beta 1.4 is:",
      "choices": [
        "9.0%",
        "10.0%",
        "11.4%",
        "6.0%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 3% + 1.4 × (9% − 3%) = 11.4%. (a) 9.0% is the market return. (b) 10.0% is the dividend-growth estimate. (d) 6.0% is the market risk premium."
    },
    {
      "q": "A project earning 8% when WACC is 9.0% should be:",
      "choices": [
        "Taken, because 8% is a good return",
        "Rejected, because it earns less than the cost of the money funding it",
        "Taken, because profit is profit",
        "Rejected, because 8% is below the tax rate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A project below its hurdle destroys value. (a) 8% is good only against a hurdle below 8%. (c) Profit in dollars ignores what the money cost. (d) The tax rate is irrelevant to this decision."
    },
    {
      "q": "Equity costs more than debt mainly because:",
      "choices": [
        "Shareholders are paid first",
        "Shareholders are paid last and bear the most risk",
        "Equity has no tax shield",
        "Debt is never repaid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shareholders bear the residual risk, so they demand a higher return. (a) Lenders are paid first, not shareholders. (c) The missing tax shield is part of the story, but the risk order is the main reason. (d) Debt must be repaid at maturity."
    },
    {
      "q": "The dividend growth model estimates the cost of equity as:",
      "choices": [
        "Dividend yield plus growth rate",
        "Risk-free rate plus beta",
        "Interest rate times one minus the tax rate",
        "Price divided by dividend"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Cost of equity = (D1 ÷ Price) + g. (b) That is CAPM. (c) That is the after-tax cost of debt. (d) Price divided by dividend is the inverse of the yield, not the cost."
    },
    {
      "q": "WACC uses market value weights rather than book value weights because:",
      "choices": [
        "Book values are secret",
        "Market values reflect what the funding is actually worth now",
        "Book values are always larger",
        "The law requires market weights"
      ],
      "answer": 1,
      "explanation": "Correct: (b). WACC prices money at its current market cost. (a) Book values are published, not secret. (c) Book values can be larger or smaller than market values. (d) No law requires market weights; accuracy does."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Cost of Capital: Quick Reference</h3>\n<p><strong>Core idea:</strong> Every dollar has a price. The blended price — WACC — is the hurdle every project must beat.</p>\n<div class=\"formula\">After-tax cost of debt = r × (1 − tax rate) &nbsp;|&nbsp; CAPM cost of equity = Rf + Beta × (Rm − Rf) &nbsp;|&nbsp; Dividend growth cost = (D<sub>1</sub> ÷ Price) + g &nbsp;|&nbsp; WACC = w<sub>E</sub> × r<sub>E</sub> + w<sub>D</sub> × r<sub>D</sub>(1 − tax)</div>\n<p><strong>Worked numbers:</strong> after-tax debt 6% × 0.75 = 4.5%. CAPM cost of equity 3% + 1.4 × 6% = 11.4%. Dividend growth cost 6.0% + 4% = 10.0%. WACC = 0.60 × 12% + 0.40 × 4.5% = 9.0%.</p>\n<p><strong>Watch out:</strong> Use the after-tax cost of debt in WACC, never the 6% before-tax rate. And judge a project against its hurdle, not against its headline return — 8% destroys value when money costs 9.0%.</p>\n<p><strong>Self-check:</strong> A firm is 50% equity at 10% and 50% debt at 8% before tax, tax 25%. What is its WACC? (0.50 × 10% + 0.50 × 6% = 8.0%.)</p>\n"
};
