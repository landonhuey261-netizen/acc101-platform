module.exports = {
  "number": 9,
  "slug": "fiscal-policy-depth",
  "title": "Fiscal Policy in Depth: Multipliers & Debt",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute spending and tax multipliers, including with taxes and imports as leakages.",
    "Explain crowding out and when it is strong or weak.",
    "Compare discretionary fiscal policy with automatic stabilizers.",
    "Work out the arithmetic of government debt and deficits.",
    "Judge when fiscal stimulus is worth its debt cost."
  ],
  "sections": [
    {
      "heading": "The Multipliers, Precisely",
      "html": "<p>Module 2 gave the simple multipliers: spending multiplier 1 ÷ (1 − MPC), tax multiplier −MPC ÷ (1 − MPC). With MPC 0.8 those are <strong>5</strong> and <strong>−4</strong>. Reality adds leakages. Households also pay taxes on extra income and spend some of it on imports, so each round leaks more. With a tax rate t = 0.2 and a marginal propensity to import m = 0.1, the multiplier becomes 1 ÷ [1 − MPC(1 − t) + m] = 1 ÷ [1 − 0.8 × 0.8 + 0.1] = 1 ÷ [1 − 0.64 + 0.10] = 1 ÷ 0.46 ≈ <strong>2.17</strong>. The simple 5 was an upper bound; the realistic number is much smaller, and economists argue endlessly about the exact size.</p><p>Worked comparison: the government spends an extra $40 billion. Simple model: ΔY = 5 × 40 = <strong>$200bn</strong>. With taxes and imports leaking: ΔY ≈ 2.17 × 40 = <strong>$86.8bn</strong>. Both use the same $40 billion; the difference is what leaks out in each round. A tax cut of $50 billion with MPC 0.8: simple model ΔY = 4 × 50 = <strong>$200bn</strong>. The lesson is not that one number is “right” — it is that the multiplier is a range, and honest policy analysis reports the range.</p><div class=\"formula\">Simple: 1 ÷ (1 − MPC) = 5 (MPC 0.8) &nbsp;|&nbsp; With leakages: 1 ÷ [1 − MPC(1 − t) + m] ≈ 2.17</div>\n<p>Fiscal expansion raises demand, but it also raises the interest rate (Module 3): the government borrows, the supply of loanable funds tightens, r rises, and private investment falls. That is <strong>crowding out</strong>. In the Module 3 example, an IS shift of 200 produced only 100 of extra output, because the rate rose from 7% to 9% and crowded out 100 of investment. Crowding out is strongest at full employment, when there are no idle resources to absorb the extra demand — the extra spending mostly bids up rates and prices.</p><p>It is weakest in a deep recession with idle capacity and a liquidity trap: rates are near zero and cannot rise much, banks hold excess reserves, and the government is hiring workers nobody else wants. Then the multiplier is close to its simple value and crowding out is small. The same policy, in two different economies, has two different multipliers — which is why “the multiplier is 5” is never a complete sentence. Always ask: how much slack is there, and what is the interest rate doing?</p><div class=\"callout\"><strong>Key idea:</strong> Crowding out is a price: the interest rate. When rates cannot rise (liquidity trap) or resources sit idle (deep recession), the price is low and fiscal policy is powerful. At full employment, the price is high and fiscal policy mostly moves prices.</div>"
    },
    {
      "heading": "Automatic Stabilizers vs. Discretionary Policy",
      "html": "<p>Not all fiscal policy needs a vote. <strong>Automatic stabilizers</strong> are programs already on the books that cushion demand without new legislation: income taxes fall automatically when incomes fall (leaving more in pay packets), unemployment insurance pays out automatically when jobs are lost, and welfare spending rises. In a recession, the deficit widens by itself — not because anyone chose to spend more, but because the rules say so. In a boom, the reverse happens. Stabilizers are fast (no legislative lag), modest in size, and politically painless, which is why economists love them.</p><p><strong>Discretionary policy</strong> — a new spending bill or tax cut — is bigger but slower. It faces three lags: <strong>recognition</strong> (realizing there is a recession), <strong>decision</strong> (passing the law), and <strong>implementation</strong> (spending the money). A stimulus that arrives after the recovery has started is pro-cyclical — it overheats the boom it was meant to cure. That timing risk is the strongest practical argument for relying on stabilizers first and saving discretionary action for deep recessions, where the lags matter less than the size of the gap.</p><div class=\"formula\">Stabilizers: taxes fall + transfers rise automatically in a recession &nbsp;|&nbsp; Discretionary: recognition + decision + implementation lags</div>"
    },
    {
      "heading": "Debt Arithmetic: Deficits, Debt, and Sustainability",
      "html": "<p>The <strong>deficit</strong> is the one-year gap: G + interest − T. The <strong>debt</strong> is the accumulation of all past deficits. Example economy: debt is $1,200 billion at the start of the year, the interest rate on the debt is 5%, and the government borrows $40 billion more to fund a stimulus. The annual interest cost of the new borrowing is 0.05 × 40 = <strong>$2 billion</strong> a year, and the debt at year-end is 1,200 + 40 = <strong>$1,240 billion</strong>. The total interest bill on the whole debt is 0.05 × 1,200 = $60 billion a year — the price of past borrowing, paid every year before a dollar is spent on anything else.</p><p>Is the debt sustainable? The rule is simple: if the economy grows faster than the interest rate (g &gt; r), the debt-to-GDP ratio can fall even while the government runs a modest deficit, because the denominator grows faster than the numerator. If r &gt; g, the ratio rises unless the government runs a primary surplus (T &gt; G before interest). Example: debt is 60% of GDP, r = 5%, g = 2%. The ratio rises by roughly (r − g) × 60% = 0.03 × 60% = 1.8 points a year before any primary balance — so the government needs a primary surplus of about 1.8% of GDP just to stand still. Debt is not a moral question; it is arithmetic, and the arithmetic has a right answer.</p><div class=\"formula\">Debt next year = Debt + Deficit &nbsp;|&nbsp; Interest cost = r × Debt &nbsp;|&nbsp; Sustainable if g ≥ r (or with a primary surplus)</div>"
    },
    {
      "heading": "Is the Stimulus Worth It? A Cost-Benefit Test",
      "html": "<p>Put the pieces together as a decision. The stimulus costs $40 billion of new debt, $2 billion a year in interest, and some crowding out of private investment. It buys, in the simple model, $200 billion of extra output and the jobs that go with it — or $86.8 billion in the leaky model. If the economy has a recessionary gap of $200 billion (Module 4: Y = 1,800, Y* = 2,000), the simple-model stimulus closes the gap exactly; the leaky-model stimulus closes less than half of it, and a second round would be needed.</p><p>The honest test has four questions. (1) How big is the gap? (2) How big is the multiplier <em>here, now</em> — with this much slack, these rates, these leakages? (3) What does the debt cost, in interest and in future flexibility? (4) What is the alternative — waiting for self-correction (Module 4) while unemployment scars workers (Module 8)? Fiscal policy is worth it when the gap is large, the multiplier is high, the debt is cheap, and waiting is costly. It is not worth it when the economy is already at potential — then it buys inflation, not output. That is the judgment the lab asks you to practise.</p><div class=\"callout\"><strong>Key idea:</strong> Never judge a stimulus by its price tag alone, and never by its output gain alone. Judge the gap it closes against the debt it creates — and name the multiplier you are assuming, out loud.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Simple multiplier 5 (MPC 0.8); with tax and import leakages ≈ 2.17.</li><li>Crowding out is strong at full employment, weak in a deep recession or liquidity trap.</li><li>Automatic stabilizers act fast; discretionary policy faces recognition, decision, and implementation lags.</li><li>Debt $1,200bn + $40bn borrowing = $1,240bn; new interest $2bn a year at 5%.</li><li>Sustainability: debt ratio falls if growth exceeds the interest rate, or with a primary surplus.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Quoting the simple multiplier (5) as if leakages did not exist. Taxes and imports are real, and they roughly halve the multiplier in an open economy — report the range.</div><div class=\"callout\"><strong>Common mistake:</strong> Confusing the deficit with the debt. The deficit is this year's shortfall; the debt is the pile. A falling deficit can still add to the debt — it only shrinks the pile if it becomes a surplus.</div><p><strong>Ready-to-Work link:</strong> When a budget promises “$40 billion to close a $200 billion gap,” check the multiplier it is assuming. If it needs 5 and the realistic number is 2.17, the promise is short by more than half.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Spending multiplier",
      "def": "1 ÷ (1 − MPC) in the simple model; smaller with tax and import leakages."
    },
    {
      "term": "Leakages",
      "def": "Saving, taxes, and imports — the fractions of each spending round that leave the domestic spending stream."
    },
    {
      "term": "Marginal propensity to import (m)",
      "def": "The fraction of extra income spent on imports; 0.1 in the example."
    },
    {
      "term": "Crowding out",
      "def": "Fiscal expansion raising interest rates and reducing private investment."
    },
    {
      "term": "Automatic stabilizers",
      "def": "Tax and transfer rules that cushion demand without new legislation."
    },
    {
      "term": "Discretionary fiscal policy",
      "def": "Deliberate new changes in spending or taxes voted by the legislature."
    },
    {
      "term": "Recognition lag",
      "def": "The time to realize the economy needs help."
    },
    {
      "term": "Decision lag",
      "def": "The time to pass a fiscal bill."
    },
    {
      "term": "Implementation lag",
      "def": "The time to actually spend the money after the bill passes."
    },
    {
      "term": "Deficit",
      "def": "One year's shortfall: spending plus interest minus taxes."
    },
    {
      "term": "Government debt",
      "def": "The accumulation of all past deficits, minus surpluses."
    },
    {
      "term": "Primary surplus",
      "def": "Taxes minus spending, before interest payments."
    },
    {
      "term": "Debt-to-GDP ratio",
      "def": "Government debt as a percentage of GDP; the usual sustainability yardstick."
    },
    {
      "term": "Debt sustainability",
      "def": "Whether the debt ratio is stable or falling, given growth, rates, and the primary balance."
    },
    {
      "term": "Pro-cyclical policy",
      "def": "Policy that arrives late and amplifies the cycle instead of damping it."
    }
  ],
  "video": {
    "title": "Fiscal Policy and Stimulus: Crash Course Economics #8",
    "embedUrl": "https://www.youtube.com/embed/otmgFQHbaDo",
    "note": "Crash Course on fiscal policy and stimulus — spending, taxes, the multiplier, and the trade-offs, with the 2009 stimulus as the running example. After watching, redo the module's leaky-multiplier calculation (2.17) and check $40bn × 2.17 = $86.8bn.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> MPC = 0.8, tax rate t = 0.2, marginal propensity to import m = 0.1. (a) Compute the multiplier with leakages: 1 ÷ [1 − MPC(1 − t) + m]. (b) Government spending rises $40bn. How much does output rise? (c) Compare with the simple multiplier.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MPC(1 − t) = 0.8 × 0.8 = 0.64. Denominator = 1 − 0.64 + 0.10 = 0.46. Multiplier = 1 ÷ 0.46 ≈ <strong>2.17</strong>. Step 2: ΔY ≈ 2.17 × 40 = <strong>$86.8bn</strong>. Step 3: The simple multiplier is 5, giving $200bn — the leakages cut the effect by more than half.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A tax cut of $50bn, MPC = 0.8. (a) What is the tax multiplier? (b) How much does output rise in the simple model? (c) Why is the answer smaller than a $50bn spending rise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Tax multiplier = −0.8 ÷ 0.2 = <strong>−4</strong>. Step 2: ΔY = 4 × 50 = <strong>$200bn</strong>. Step 3: A $50bn spending rise gives 5 × 50 = $250bn — more, because the tax cut's first round leaks into saving (households save $10bn of the $50bn before spending the rest).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Debt is $1,200bn, the interest rate on the debt is 5%, and the government borrows $40bn more. (a) What is the annual interest cost of the new borrowing? (b) What is the debt at year-end? (c) What is the total annual interest bill on the whole debt?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 0.05 × 40 = <strong>$2bn</strong> a year. Step 2: (b) Debt = 1,200 + 40 = <strong>$1,240bn</strong>. Step 3: (c) Total interest = 0.05 × 1,200 = <strong>$60bn</strong> a year on the old debt (plus $2bn on the new borrowing once it is counted).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Debt is 60% of GDP, the interest rate is 5%, growth is 2%. (a) By how many points a year does the debt ratio rise before any primary balance? (b) What primary surplus (as % of GDP) is needed just to hold the ratio steady?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The ratio rises by about (r − g) × debt ratio = (0.05 − 0.02) × 60% = 0.03 × 60% = <strong>1.8 points</strong> a year. Step 2: (b) The government needs a primary surplus of about <strong>1.8% of GDP</strong> just to stand still; anything less and the ratio climbs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In a deep recession with a liquidity trap, will crowding out be strong or weak? Explain in two sentences, naming the interest rate's role.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Crowding out will be <strong>weak</strong>. Step 2: Interest rates are near zero and cannot rise much, so government borrowing does not push rates up and does not choke off private investment — the fiscal multiplier stays close to its simple value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stimulus bill is passed in June but the money is not spent until the following March, by which time the economy has recovered. (a) Name the three lags, and say which one bit here. (b) What is the result called, and why is it bad?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Recognition, decision, and implementation lags — the <strong>implementation lag</strong> bit here (the money was voted but not spent). Step 2: (b) The stimulus became <strong>pro-cyclical</strong>: it added demand to an economy that no longer needed it, risking inflation instead of curing a recession.</p>"
    }
  ],
  "quiz": [
    {
      "q": "MPC 0.8, tax rate 0.2, import propensity 0.1. The multiplier with leakages is about:",
      "choices": [
        "5",
        "4",
        "2.17",
        "1"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 ÷ [1 − 0.8 × 0.8 + 0.1] = 1 ÷ 0.46 ≈ 2.17. (a) is the simple multiplier, ignoring leakages. (b) is the tax multiplier's size. (d) would mean every round leaks everything."
    },
    {
      "q": "With that multiplier, $40bn of extra spending raises output by about:",
      "choices": [
        "$40bn",
        "$86.8bn",
        "$160bn",
        "$200bn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2.17 × 40 ≈ 86.8. (a) ignores the multiplier. (c) uses a multiplier of 4. (d) uses the simple multiplier of 5."
    },
    {
      "q": "Crowding out is strongest when:",
      "choices": [
        "The economy is in a deep recession",
        "Interest rates are near zero",
        "The economy is at full employment",
        "The government runs a surplus"
      ],
      "answer": 2,
      "explanation": "Correct: (c). At full employment there are no idle resources, so extra demand bids up rates and prices. (a) and (b) are when crowding out is weakest. (d) A surplus adds to loanable funds, it does not crowd investment out."
    },
    {
      "q": "Debt $1,200bn, new borrowing $40bn at 5%. The new borrowing's annual interest cost is:",
      "choices": [
        "$2bn",
        "$6bn",
        "$40bn",
        "$60bn"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.05 × 40 = 2. (b) is 5% of $120bn, no part of this data. (c) is the borrowing itself, not its interest. (d) is the interest on the whole $1,200bn debt."
    },
    {
      "q": "Debt is 60% of GDP, r = 5%, g = 2%. The primary surplus needed to hold the ratio steady is about:",
      "choices": [
        "0%",
        "1.8% of GDP",
        "3% of GDP",
        "5% of GDP"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (r − g) × 60% = 3% × 60% = 1.8%. (a) would let the ratio rise 1.8 points a year. (c) is r − g itself, not multiplied by the debt ratio. (d) is the interest rate alone."
    },
    {
      "q": "An automatic stabilizer is:",
      "choices": [
        "A new spending bill passed in a recession",
        "Unemployment insurance paying out automatically when jobs are lost",
        "The central bank cutting rates",
        "A tax cut voted by the legislature"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It operates by rules already on the books, with no new vote. (a) and (d) are discretionary policy. (c) is monetary policy."
    },
    {
      "q": "A $50bn tax cut with MPC 0.8 raises output by ___ in the simple model.",
      "choices": [
        "$50bn",
        "$200bn",
        "$250bn",
        "$400bn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tax multiplier −4, so 4 × 50 = 200. (a) ignores the multiplier. (c) is the spending-rise answer (5 × 50). (d) would need a multiplier of 8."
    },
    {
      "q": "The deficit and the debt differ because:",
      "choices": [
        "The deficit is this year's shortfall; the debt is the accumulation of past deficits",
        "They are the same number",
        "The debt is always smaller",
        "The deficit includes interest and the debt does not"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A falling deficit still adds to the debt unless it becomes a surplus. (b) confuses a flow with a stock. (c) is false — the debt is the pile, usually far larger. (d) reverses the truth: interest is part of the deficit, and the debt is what past deficits (including their interest) built."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Fiscal Policy in Depth: Quick Reference</h3>\n<p><strong>Core idea:</strong> The multiplier is a range, not a number — leakages shrink it, slack raises it, and the debt it creates has a price you can compute.</p>\n<div class=\"formula\">Simple multiplier = 1 ÷ (1 − MPC) = 5 &nbsp;|&nbsp; Leaky: 1 ÷ [1 − MPC(1 − t) + m] ≈ 2.17 &nbsp;|&nbsp; Tax multiplier = −4 &nbsp;|&nbsp; Debt next year = Debt + Deficit</div>\n<p><strong>Worked anchors:</strong> $40bn spending → <strong>$200bn</strong> simple, <strong>$86.8bn</strong> leaky. $50bn tax cut → <strong>$200bn</strong>. Debt $1,200bn + $40bn → <strong>$1,240bn</strong>, new interest <strong>$2bn/yr</strong> at 5%. Debt 60% of GDP, r 5%, g 2% → need primary surplus <strong>1.8% of GDP</strong> to stand still.</p>\n<p><strong>Watch out:</strong> Never quote a multiplier without naming the leakages and the slack; never confuse the deficit (flow) with the debt (stock).</p>\n<p><strong>Self-check:</strong> From MPC 0.8, write the simple spending and tax multipliers (5 and −4) and the leaky multiplier with t = 0.2, m = 0.1 (about 2.17).</p>\n"
};
