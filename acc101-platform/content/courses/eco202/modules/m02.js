module.exports = {
  "number": 2,
  "slug": "consumption-saving-investment",
  "title": "Consumption, Saving & Investment",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the consumption function and the marginal propensity to consume (MPC).",
    "Use the Keynesian cross to find equilibrium output from planned expenditure.",
    "Compute the spending multiplier and the tax multiplier from the MPC.",
    "Explain why investment depends on the real interest rate and on expectations.",
    "Show how saving and investment balance in the loanable-funds market."
  ],
  "sections": [
    {
      "heading": "The Consumption Function: What Households Do With Income",
      "html": "<p>Households do two things with disposable income — income after taxes, Y − T. They consume some of it and save the rest. The <strong>consumption function</strong> writes that habit as an equation: C = a + MPC × (Y − T). The intercept <strong>a</strong> is autonomous consumption — spending that happens even with no income, paid for from savings or borrowing. The slope, the <strong>marginal propensity to consume (MPC)</strong>, is the fraction of each extra dollar of disposable income that gets spent. If the MPC is 0.8, a household that gains $100 of disposable income spends $80 and saves $20. The <strong>marginal propensity to save (MPS)</strong> is what is left: MPS = 1 − MPC, so with MPC 0.8, MPS is 0.2.</p><p>Consumption also moves with things other than current income: wealth (a rising stock market makes people feel richer), expectations about the future, and the interest rate (higher rates reward saving and punish borrowing). But in the short-run Keynesian model, current disposable income does most of the work, which is why the consumption function is the engine of the whole module.</p><div class=\"formula\">C = a + MPC × (Y − T) &nbsp;|&nbsp; MPS = 1 − MPC</div>\n<p>Now add the other spenders. <strong>Planned expenditure</strong> is E = C + I + G, where investment I and government purchases G are taken as given for the moment (in the open economy, add NX). Equilibrium is the point where what the economy produces equals what people plan to buy: Y = E. Drawn as a graph, the 45-degree line (Y = E) meets the planned-expenditure line at equilibrium output. If output is below equilibrium, planned spending exceeds production, inventories fall, and firms produce more. If output is above equilibrium, inventories pile up and firms cut back.</p><p>Worked example: C = 200 + 0.8(Y − T), T = 500, I = 300, G = 400. Then E = 200 + 0.8(Y − 500) + 300 + 400 = 200 + 0.8Y − 400 + 700 = 500 + 0.8Y. Set Y = E: Y = 500 + 0.8Y, so 0.2Y = 500 and Y = <strong>2,500</strong>. Check: disposable income is 2,500 − 500 = 2,000; C = 200 + 0.8 × 2,000 = 1,800; E = 1,800 + 300 + 400 = 2,500. It balances.</p><div class=\"formula\">E = C + I + G &nbsp;|&nbsp; Equilibrium: Y = E</div>"
    },
    {
      "heading": "The Multiplier: Why $1 of Spending Becomes $5 of Output",
      "html": "<p>Raise G by $100 and output rises by more than $100. The first $100 becomes someone's income; they spend MPC of it — $80 if MPC is 0.8 — and that becomes someone else's income; they spend $64; then $51.20; and so on. The rounds form a geometric series that adds up to a simple shortcut: the <strong>spending multiplier</strong> is 1 ÷ (1 − MPC). With MPC 0.8, the multiplier is 1 ÷ 0.2 = <strong>5</strong>, so $100 of extra government spending raises equilibrium output by 5 × $100 = <strong>$500</strong>. With MPC 0.75 the multiplier is 1 ÷ 0.25 = <strong>4</strong>; with MPC 0.6 it is 1 ÷ 0.4 = <strong>2.5</strong>.</p><p>Taxes work the other way and more weakly. A tax cut of $100 raises disposable income by $100, but households save MPS of it, so the first round of new spending is only MPC × $100 = $80. The <strong>tax multiplier</strong> is −MPC ÷ (1 − MPC): with MPC 0.8 it is −0.8 ÷ 0.2 = <strong>−4</strong>, so a $100 tax cut raises output by 4 × $100 = $400, and a $100 tax rise cuts output by $400. The minus sign is the point: taxes move output in the opposite direction to spending, and by less, because the first round leaks into saving.</p><div class=\"formula\">Spending multiplier = 1 ÷ (1 − MPC) &nbsp;|&nbsp; Tax multiplier = −MPC ÷ (1 − MPC)</div>"
    },
    {
      "heading": "Investment: Interest Rates, Expectations, and Animal Spirits",
      "html": "<p>Investment is the most volatile piece of spending, and it is the piece most sensitive to the interest rate. A firm buys a machine only if the expected return beats the cost of borrowing. The <strong>real interest rate</strong> is that cost, adjusted for inflation. When r rises, fewer projects clear the hurdle, so investment falls: I = I₀ − b × r, where <strong>b</strong> measures how sensitive investment is to the rate. Example: I = 500 − 50r. At r = 4%, I = 500 − 200 = 300. At r = 6%, I = 500 − 300 = 200 — a 2-point rise in the rate cuts investment by $100 billion in this example.</p><p>But the interest rate is not the whole story. Keynes called the other half <strong>animal spirits</strong> — the waves of optimism and pessimism that shift investment even when rates do not move. A new technology, a tax credit for equipment, or a burst of business confidence shifts the whole investment schedule right; a scare shifts it left. That is why investment swings so much more than consumption in a recession, and why the interest-rate channel in Module 3 matters so much for policy.</p><div class=\"formula\">I = I₀ − b × r &nbsp;|&nbsp; Higher r → lower I</div>"
    },
    {
      "heading": "Saving, Investment, and the Interest Rate Together",
      "html": "<p>Pull the pieces together. Households save MPS of each extra dollar; firms invest when the return beats the real rate; the government taxes and spends. In a closed economy, equilibrium needs S = I. If households suddenly save more (MPC falls), planned expenditure falls and, in the short run, output falls too — the <strong>paradox of thrift</strong>: what is virtuous for one household can shrink the economy when everyone does it at once, because one person's spending is another person's income.</p><p>In the long run the story flips. More saving means more funds in the loanable-funds market, a lower real interest rate, and more investment — which builds the capital stock and raises future output. The paradox is a short-run phenomenon, and the long-run benefit of saving is real. Both halves are true; the time horizon decides which one you are living in. That tension — short-run demand versus long-run supply — is the thread that runs through the rest of this course.</p><div class=\"callout\"><strong>Key idea:</strong> In the short run, saving can shrink output (paradox of thrift). In the long run, saving funds the investment that grows output. Never quote one half without the other.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>C = a + MPC × (Y − T); MPS = 1 − MPC.</li><li>Keynesian cross: equilibrium where Y = E = C + I + G; the worked example gives Y = 2,500.</li><li>Spending multiplier = 1 ÷ (1 − MPC): MPC 0.8 → 5; MPC 0.75 → 4; MPC 0.6 → 2.5.</li><li>Tax multiplier = −MPC ÷ (1 − MPC): MPC 0.8 → −4.</li><li>Investment falls as the real interest rate rises; expectations shift the whole schedule.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using the spending multiplier for a tax change. A $100 tax cut is not $100 of new spending — households save part of it first, so use the tax multiplier (−4 with MPC 0.8), not 5.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that the multiplier formula assumes prices are fixed and there is spare capacity. At full employment, extra spending mostly raises prices, not output — Module 4 explains why.</div><p><strong>Ready-to-Work link:</strong> When a budget speech promises that $100 billion of spending will “create” $500 billion of output, you can now check the arithmetic: it needs an MPC of 0.8, and it assumes the economy has room to grow.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Disposable income",
      "def": "Income after taxes: Y − T; what households can consume or save."
    },
    {
      "term": "Consumption function",
      "def": "C = a + MPC × (Y − T); consumption as a function of disposable income."
    },
    {
      "term": "Autonomous consumption",
      "def": "Spending that happens even with zero income, paid from savings or borrowing."
    },
    {
      "term": "Marginal propensity to consume (MPC)",
      "def": "The fraction of each extra dollar of disposable income that is spent."
    },
    {
      "term": "Marginal propensity to save (MPS)",
      "def": "1 − MPC; the fraction of each extra dollar of disposable income that is saved."
    },
    {
      "term": "Planned expenditure",
      "def": "E = C + I + G; total spending planned on domestic output."
    },
    {
      "term": "Keynesian cross",
      "def": "The model where equilibrium output is where Y = E, shown by the 45-degree line."
    },
    {
      "term": "Equilibrium output",
      "def": "The output where production equals planned expenditure, so inventories are steady."
    },
    {
      "term": "Spending multiplier",
      "def": "1 ÷ (1 − MPC); how many dollars of output one dollar of new spending creates."
    },
    {
      "term": "Tax multiplier",
      "def": "−MPC ÷ (1 − MPC); the (smaller, opposite-signed) effect of a tax change on output."
    },
    {
      "term": "Investment function",
      "def": "I = I₀ − b × r; investment falling as the real interest rate rises."
    },
    {
      "term": "Real interest rate",
      "def": "The nominal interest rate minus expected inflation; the true cost of borrowing."
    },
    {
      "term": "Animal spirits",
      "def": "Keynes's term for waves of optimism and pessimism that shift investment."
    },
    {
      "term": "Paradox of thrift",
      "def": "When everyone saves more at once, spending falls and short-run output can fall too."
    },
    {
      "term": "Inventory investment",
      "def": "Unsold goods added to (or drawn from) stocks; the signal that output is above or below equilibrium."
    }
  ],
  "video": {
    "title": "Economics 3 · The Consumption Function · Complete Chapter",
    "embedUrl": "https://www.youtube.com/embed/xzuD0R3zM34",
    "note": "A full chapter on the consumption function — autonomous consumption, the MPC, and how consumption drives planned expenditure. Follow it with the module's Keynesian-cross example (Y = 2,500) in front of you.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> C = 200 + 0.8(Y − T), T = 500, I = 300, G = 400. Find equilibrium output Y step by step, and check it by computing C and E.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: E = 200 + 0.8(Y − 500) + 300 + 400 = 500 + 0.8Y. Step 2: Set Y = E: Y = 500 + 0.8Y, so 0.2Y = 500 and Y = <strong>2,500</strong>. Step 3: Check — disposable income is 2,000, C = 200 + 0.8 × 2,000 = 1,800, and E = 1,800 + 300 + 400 = 2,500. It balances.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The MPC is 0.75. (a) What is the spending multiplier? (b) Government spending rises by $80bn. How much does equilibrium output rise? (c) What is the tax multiplier, and how much would a $80bn tax cut raise output?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Spending multiplier = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = <strong>4</strong>. Step 2: ΔY = 4 × 80 = <strong>$320bn</strong>. Step 3: Tax multiplier = −0.75 ÷ 0.25 = <strong>−3</strong>, so a $80bn tax cut raises output by 3 × 80 = <strong>$240bn</strong> — less than the spending rise, because households save part of the cut.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Investment is I = 500 − 50r. (a) What is I when r = 4%? (b) When r = 6%? (c) Explain in words why the change has that sign.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At r = 4, I = 500 − 50 × 4 = 500 − 200 = <strong>300</strong>. Step 2: At r = 6, I = 500 − 50 × 6 = 500 − 300 = <strong>200</strong>. Step 3: A higher real rate raises the cost of borrowing, so fewer investment projects earn more than they cost, and investment falls by $100bn.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A household's disposable income rises by $500 and its MPC is 0.8. (a) How much extra does it consume? (b) How much extra does it save? (c) If the whole economy has MPC 0.8, what is the total eventual rise in output from that $500 of new spending?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Extra consumption = 0.8 × 500 = <strong>$400</strong>. Step 2: Extra saving = 0.2 × 500 = <strong>$100</strong>. Step 3: The multiplier is 1 ÷ 0.2 = 5, so the total rise in output is 5 × 500 = <strong>$2,500</strong> once all the re-spending rounds are counted.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In the Problem 1 economy (equilibrium Y = 2,500), the government raises G from 400 to 500. (a) What is the new equilibrium output? (b) Show the multiplier arithmetic.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ΔG = 100 and the multiplier is 1 ÷ (1 − 0.8) = 5. Step 2: ΔY = 5 × 100 = 500, so new Y = 2,500 + 500 = <strong>3,000</strong>. Step 3: Check by the cross: E = 200 + 0.8(Y − 500) + 300 + 500 = 600 + 0.8Y; Y = 600 + 0.8Y gives 0.2Y = 600, Y = 3,000. It agrees.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain the paradox of thrift in your own words, using a household that decides to save $1,000 more and a shopkeeper whose sales fall. Then say why the paradox is a short-run story, not a long-run one.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The household spends $1,000 less, so the shopkeeper earns $1,000 less and may cut hours or orders — one person's saving is another person's lost income. Step 2: If every household does this at once, total spending falls and output falls. Step 3: In the long run, the extra saving flows into loanable funds, lowers the real interest rate, funds investment, and builds capital — so saving grows the economy once prices and capacity adjust.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The MPC is 0.8. The spending multiplier is:",
      "choices": [
        "1.25",
        "2",
        "4",
        "5"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. (a) is 1 ÷ 0.8, the wrong division. (b) would need MPC 0.5. (c) is the multiplier when MPC is 0.75."
    },
    {
      "q": "With MPC 0.8, the tax multiplier is:",
      "choices": [
        "5",
        "4",
        "−4",
        "−5"
      ],
      "answer": 2,
      "explanation": "Correct: (c). −MPC ÷ (1 − MPC) = −0.8 ÷ 0.2 = −4. (a) is the spending multiplier. (b) drops the minus sign. (d) uses the spending multiplier with the wrong sign."
    },
    {
      "q": "C = 200 + 0.8(Y − T), T = 500, I = 300, G = 400. Equilibrium Y is:",
      "choices": [
        "2,000",
        "2,300",
        "2,500",
        "3,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). E = 500 + 0.8Y; Y = 500 + 0.8Y gives Y = 2,500. (a) is disposable income at equilibrium, not output. (b) forgets autonomous consumption. (d) is the answer after G rises to 500, not at G = 400."
    },
    {
      "q": "If output is above equilibrium in the Keynesian cross, firms will:",
      "choices": [
        "See inventories fall and produce more",
        "See inventories pile up and cut production",
        "Raise prices immediately",
        "Hire more workers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Output above planned spending means unsold goods accumulate, so firms cut back. (a) describes output below equilibrium. (c) Prices are fixed in this model. (d) Firms hire less, not more, when goods pile up."
    },
    {
      "q": "Investment I = 500 − 50r. When r rises from 4% to 6%, investment:",
      "choices": [
        "Rises from 200 to 300",
        "Falls from 300 to 200",
        "Stays at 300",
        "Falls from 500 to 200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At r = 4, I = 300; at r = 6, I = 200. (a) reverses the direction. (c) ignores the rate entirely. (d) confuses the intercept 500 with investment at r = 4."
    },
    {
      "q": "The MPS when the MPC is 0.75 is:",
      "choices": [
        "0.25",
        "0.75",
        "1.75",
        "3"
      ],
      "answer": 0,
      "explanation": "Correct: (a). MPS = 1 − MPC = 1 − 0.75 = 0.25. (b) is the MPC itself. (c) adds instead of subtracting. (d) is 1 ÷ (1 − 0.75) minus 1, a muddle of two formulas."
    },
    {
      "q": "A $100bn tax cut with MPC 0.8 raises output by:",
      "choices": [
        "$100bn",
        "$400bn",
        "$500bn",
        "$800bn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tax multiplier −4, so ΔY = 4 × 100 = 400. (a) ignores the multiplier. (c) uses the spending multiplier 5 by mistake. (d) multiplies by 8, which is no formula here."
    },
    {
      "q": "The paradox of thrift says that if everyone saves more at once:",
      "choices": [
        "Output rises immediately",
        "Short-run output can fall because spending falls",
        "Interest rates must rise",
        "Investment always rises at once"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One person's spending is another's income, so joint saving cuts demand in the short run. (a) is the long-run story. (c) Saving more lowers rates, it does not raise them. (d) Investment rises only in the long run, through lower rates."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Consumption, Saving &amp; Investment: Quick Reference</h3>\n<p><strong>Core idea:</strong> Disposable income splits into consumption and saving; the MPC decides how far any new spending echoes through the economy.</p>\n<div class=\"formula\">C = a + MPC × (Y − T) &nbsp;|&nbsp; Spending multiplier = 1 ÷ (1 − MPC) &nbsp;|&nbsp; Tax multiplier = −MPC ÷ (1 − MPC) &nbsp;|&nbsp; I = I₀ − b × r</div>\n<p><strong>Worked anchors:</strong> MPC 0.8 → multiplier <strong>5</strong>, tax multiplier <strong>−4</strong>. MPC 0.75 → multiplier <strong>4</strong>. Keynesian cross: C = 200 + 0.8(Y − 500), I = 300, G = 400 → Y = <strong>2,500</strong>. I = 500 − 50r: r = 4% → I = <strong>300</strong>; r = 6% → I = <strong>200</strong>.</p>\n<p><strong>Watch out:</strong> Tax changes use the tax multiplier, not the spending multiplier; the multiplier needs spare capacity and fixed prices.</p>\n<p><strong>Self-check:</strong> From MPC 0.6, write the spending multiplier (2.5) and the tax multiplier (−1.5) without looking.</p>\n"
};
