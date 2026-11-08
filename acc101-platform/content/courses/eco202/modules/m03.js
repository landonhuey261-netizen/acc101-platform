module.exports = {
  "number": 3,
  "slug": "money-interest-is-lm",
  "title": "Money, Interest & the IS-LM Model",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what money is and how the money supply is set.",
    "Use the liquidity-preference model to find the interest rate in the money market.",
    "Derive the IS curve from the goods market and the LM curve from the money market.",
    "Solve an IS-LM system for equilibrium output and the interest rate.",
    "Predict how fiscal and monetary policy shift IS and LM."
  ],
  "sections": [
    {
      "heading": "What Money Is, and How Much of It There Is",
      "html": "<p><strong>Money</strong> is whatever is widely accepted in exchange for goods and services. It does three jobs: a medium of exchange (you pay with it), a unit of account (prices are quoted in it), and a store of value (it holds purchasing power over time, imperfectly when inflation bites). Cash and bank deposits are money; a house is wealth but not money, because you cannot pay for groceries with a bedroom.</p><p>The <strong>money supply</strong> is mostly bank deposits, created when banks lend. The central bank controls the <strong>monetary base</strong> — cash plus bank reserves — and the <strong>money multiplier</strong> turns base into broad money: with a reserve ratio of 10%, each $1 of reserves can support up to $10 of deposits, so the multiplier is 1 ÷ 0.10 = 10. Example: the central bank buys $10 billion of bonds, reserves rise $10 billion, and the money supply can rise by up to 10 × $10 billion = <strong>$100 billion</strong>. In practice banks hold extra reserves and people hold cash, so the real multiplier is smaller — but the direction is certain: more base, more money.</p><div class=\"formula\">Money multiplier = 1 ÷ reserve ratio &nbsp;|&nbsp; ΔMoney supply ≈ multiplier × ΔReserves</div>\n<p>Why hold money at all, when bonds pay interest? Keynes's answer — <strong>liquidity preference</strong> — is that money is useful precisely because it can be spent at once. People hold money for transactions (payday to payday), for precaution (a broken car), and for speculation (waiting for a better moment to buy bonds). The <strong>demand for real money balances</strong>, M/P, rises with income Y (more spending needs more cash in hand) and falls with the interest rate r (a higher rate makes holding non-interest-paying money more costly).</p><p>Write it as M/P = kY − hr, where <strong>k</strong> says how much money demand rises with income and <strong>h</strong> says how much it falls when the rate rises. Worked example: M/P = 0.5Y − 25r, Y = 2,150. Then money demand is 1,075 − 25r. If the real money supply is 900, equilibrium needs 900 = 1,075 − 25r, so 25r = 175 and r = <strong>7%</strong>. If income rises, money demand rises, and with supply fixed the rate must rise to choke off the extra demand — that upward pressure is the LM curve's slope.</p><div class=\"formula\">M/P = kY − hr &nbsp;|&nbsp; Money market equilibrium: M/P = L(Y, r)</div>"
    },
    {
      "heading": "The IS Curve: Goods-Market Equilibrium",
      "html": "<p>The <strong>IS curve</strong> collects every (Y, r) pair where the goods market clears — investment equals saving, planned expenditure equals output. It slopes down: a lower interest rate raises investment, investment raises planned expenditure, and the multiplier turns that into higher output. In this module's worked system the IS curve is <strong>Y = 2,500 − 50r</strong>: at r = 7%, Y = 2,500 − 350 = 2,150; at r = 5%, Y = 2,500 − 250 = 2,250. Each 1-point fall in the rate raises output by 50, because cheaper borrowing lifts investment and the multiplier does the rest.</p><p>What shifts IS? Anything that raises planned expenditure at a given interest rate: more government spending, a tax cut, higher consumer confidence, or an investment boom. Fiscal expansion shifts IS right; fiscal contraction shifts it left. The multiplier decides how far: a $100 rise in G with MPC 0.8 shifts IS right by 5 × $100 = $500 at each interest rate — before the interest rate moves and trims the gain, which is exactly what the LM curve will do.</p><div class=\"callout\"><strong>Key idea:</strong> IS is the goods market: I = S at every point on it. It slopes down because cheaper borrowing means more investment, more spending, more output.</div>"
    },
    {
      "heading": "The LM Curve: Money-Market Equilibrium",
      "html": "<p>The <strong>LM curve</strong> collects every (Y, r) pair where the money market clears — money demand equals the fixed real money supply. It slopes up: higher income raises money demand, and with supply fixed, the interest rate must rise to bring demand back down. From the example above, M/P = 900 and money demand 0.5Y − 25r: 900 = 0.5Y − 25r, so 25r = 0.5Y − 900 and r = 0.02Y − 36. At Y = 2,150, r = 43 − 36 = <strong>7%</strong>. That is the LM equation for this module.</p><p>What shifts LM? Anything that changes the real money supply or money demand at a given income. The central bank buying bonds raises M, shifts LM right, and lowers the rate at each Y. A rise in the price level P shrinks real balances M/P and shifts LM left, raising rates. A financial panic that makes everyone hoard cash raises money demand and shifts LM left too. LM is where monetary policy lives.</p><div class=\"formula\">LM: r = 0.02Y − 36 (example) &nbsp;|&nbsp; More M → LM right, r down</div>"
    },
    {
      "heading": "IS-LM Equilibrium — and What Policy Does to It",
      "html": "<p>Put the two curves together and the economy has one equilibrium: the (Y, r) pair on both curves at once. Solve the module's system: IS: Y = 2,500 − 50r; LM: r = 0.02Y − 36. Substitute: Y = 2,500 − 50(0.02Y − 36) = 2,500 − Y + 1,800 = 4,300 − Y. So 2Y = 4,300, Y = <strong>2,150</strong>, and r = 0.02 × 2,150 − 36 = 43 − 36 = <strong>7%</strong>. Check the IS side: 2,500 − 50 × 7 = 2,500 − 350 = 2,150. It balances on both curves.</p><p>Now do policy. <strong>Fiscal expansion</strong> shifts IS right: output rises, but the higher income raises money demand, so the interest rate rises too, and the higher rate trims investment — partial <strong>crowding out</strong>. The final rise in Y is smaller than the Keynesian-cross multiplier promised. <strong>Monetary expansion</strong> shifts LM right: the rate falls, investment rises, and output rises with no crowding out at all — in this model, monetary policy is the cleaner demand tool, which is why Module 10 spends a whole module on it. The extreme cases matter: at the <strong>liquidity trap</strong>, rates are near zero and LM is flat, so monetary policy loses its grip and fiscal policy regains its full multiplier — the Module 8 and 9 story.</p><div class=\"formula\">IS: Y = 2,500 − 50r &nbsp;|&nbsp; LM: r = 0.02Y − 36 &nbsp;|&nbsp; Equilibrium: Y = 2,150, r = 7%</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Money is a medium of exchange, unit of account, and store of value; banks multiply base money.</li><li>Money demand rises with Y and falls with r; the money market sets r for a given M/P.</li><li>IS slopes down (goods market); LM slopes up (money market).</li><li>Module system: IS Y = 2,500 − 50r, LM r = 0.02Y − 36 → Y = 2,150, r = 7%.</li><li>Fiscal expansion shifts IS right but crowds out some investment; monetary expansion shifts LM right.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “the interest rate” without saying which one. IS-LM uses the <em>real</em> interest rate for investment decisions and the money market together; the nominal rate matters for money demand only through expected inflation — Module 6 pins this down.</div><div class=\"callout\"><strong>Common mistake:</strong> Shifting the wrong curve. Government spending moves IS (goods), never LM. The money supply moves LM (money), never IS. If you shift both, you have double-counted one policy.</div><p><strong>Ready-to-Work link:</strong> When the central bank cuts rates, trace it: LM right → r down → investment up → output up. When the government spends, trace it: IS right → Y up, r up → some investment crowded out. Two chains, two different endings.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Money",
      "def": "Whatever is widely accepted in exchange for goods and services."
    },
    {
      "term": "Medium of exchange",
      "def": "Money's job as the thing you pay with."
    },
    {
      "term": "Unit of account",
      "def": "Money's job as the yardstick prices are quoted in."
    },
    {
      "term": "Store of value",
      "def": "Money's job as a way to hold purchasing power over time."
    },
    {
      "term": "Monetary base",
      "def": "Cash plus bank reserves; what the central bank directly controls."
    },
    {
      "term": "Money multiplier",
      "def": "1 ÷ reserve ratio; how much broad money each dollar of reserves can support."
    },
    {
      "term": "Reserve ratio",
      "def": "The fraction of deposits banks must (or choose to) hold as reserves."
    },
    {
      "term": "Liquidity preference",
      "def": "Keynes's theory that people hold money because it can be spent at once."
    },
    {
      "term": "Real money balances",
      "def": "M/P; the money supply adjusted for the price level."
    },
    {
      "term": "IS curve",
      "def": "All (Y, r) pairs where the goods market clears; slopes down."
    },
    {
      "term": "LM curve",
      "def": "All (Y, r) pairs where the money market clears; slopes up."
    },
    {
      "term": "Crowding out",
      "def": "When fiscal expansion raises interest rates and reduces private investment."
    },
    {
      "term": "Liquidity trap",
      "def": "When interest rates are near zero, LM is flat, and monetary policy loses traction."
    },
    {
      "term": "Open market operations",
      "def": "The central bank buying or selling bonds to change the money supply."
    },
    {
      "term": "Nominal interest rate",
      "def": "The rate quoted on a loan, before adjusting for inflation."
    },
    {
      "term": "Real interest rate",
      "def": "The nominal rate minus expected inflation; the true cost of borrowing."
    }
  ],
  "video": {
    "title": "ISLM Video Tutorial",
    "embedUrl": "https://www.youtube.com/embed/I4mxT27cYAU",
    "note": "A step-by-step IS-LM tutorial — building the IS curve from the goods market, the LM curve from the money market, and finding their intersection. Work the module's numbers (Y = 2,150, r = 7%) alongside it.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The reserve ratio is 10% and the central bank buys $10bn of bonds. (a) What is the money multiplier? (b) By how much can the money supply rise? (c) Why might the actual rise be smaller?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Multiplier = 1 ÷ 0.10 = <strong>10</strong>. Step 2: ΔMoney = 10 × $10bn = <strong>$100bn</strong>. Step 3: Banks may hold excess reserves and households may hold extra cash, so each round of lending leaks and the real multiplier is smaller than 10.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Money demand is M/P = 0.5Y − 25r, Y = 2,150, and the real money supply is 900. Find the equilibrium interest rate r.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set demand equal to supply: 900 = 0.5 × 2,150 − 25r = 1,075 − 25r. Step 2: 25r = 1,075 − 900 = 175. Step 3: r = 175 ÷ 25 = <strong>7%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Solve the IS-LM system IS: Y = 2,500 − 50r and LM: r = 0.02Y − 36 for equilibrium Y and r, showing the substitution and checking both equations.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Substitute LM into IS: Y = 2,500 − 50(0.02Y − 36) = 2,500 − Y + 1,800 = 4,300 − Y. Step 2: 2Y = 4,300, so Y = <strong>2,150</strong>. Step 3: r = 0.02 × 2,150 − 36 = 43 − 36 = <strong>7%</strong>. Step 4: Check IS: 2,500 − 50 × 7 = 2,150. Both equations hold.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In the Problem 3 economy, the central bank raises the real money supply so the new LM curve is r = 0.02Y − 40. (a) Find the new equilibrium Y and r with IS unchanged. (b) Explain in words what happened.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Y = 2,500 − 50(0.02Y − 40) = 2,500 − Y + 2,000 = 4,500 − Y, so 2Y = 4,500 and Y = <strong>2,250</strong>. Step 2: r = 0.02 × 2,250 − 40 = 45 − 40 = <strong>5%</strong>. Step 3: More money shifted LM right: the rate fell from 7% to 5%, investment rose, and output rose from 2,150 to 2,250.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Government spending rises so the new IS curve is Y = 2,700 − 50r, with LM still r = 0.02Y − 36. (a) Find the new equilibrium. (b) How much did Y rise, and why is that less than the plain multiplier would predict?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Y = 2,700 − 50(0.02Y − 36) = 2,700 − Y + 1,800 = 4,500 − Y, so 2Y = 4,500, Y = <strong>2,250</strong>, r = 0.02 × 2,250 − 36 = <strong>9%</strong>. Step 2: Y rose by 2,250 − 2,150 = <strong>100</strong>. Step 3: The IS shift was 200 at each r, but the rate rose from 7% to 9%, crowding out investment worth 50 × 2 = 100 of output — that is why the gain is only 100, not 200.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain the liquidity trap in two sentences, and say which policy — fiscal or monetary — is more powerful there, and why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a liquidity trap the interest rate is near zero, people hoard any extra money, and LM is flat — more money cannot push rates any lower. Step 2: <strong>Fiscal policy</strong> is more powerful there, because IS shifts right and output rises without the interest rate rising to crowd investment out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The money multiplier with a 10% reserve ratio is:",
      "choices": [
        "1",
        "5",
        "10",
        "100"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 ÷ 0.10 = 10. (a) would need a 100% reserve ratio. (b) would need 20%. (d) confuses the multiplier with the $100bn rise in the worked example."
    },
    {
      "q": "Money demand rises with income and ___ with the interest rate.",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Doubles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A higher rate raises the cost of holding non-interest-paying money. (a) reverses the relationship. (c) ignores the opportunity cost of money. (d) is not a relationship in the model."
    },
    {
      "q": "The IS curve slopes down because:",
      "choices": [
        "Higher income raises money demand",
        "A lower interest rate raises investment and output",
        "The central bank lowers rates in recessions",
        "Government spending always rises"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lower r → more I → more spending → higher Y, through the multiplier. (a) is the LM slope story. (c) is a policy choice, not the curve's logic. (d) is false — G is a policy variable."
    },
    {
      "q": "IS: Y = 2,500 − 50r; LM: r = 0.02Y − 36. Equilibrium Y and r are:",
      "choices": [
        "Y = 2,150, r = 7%",
        "Y = 2,500, r = 0%",
        "Y = 1,800, r = 5%",
        "Y = 2,250, r = 9%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Substituting gives 2Y = 4,300, Y = 2,150, r = 7%. (b) is the IS intercept, not the equilibrium. (c) satisfies neither equation. (d) is the fiscal-expansion result from the assignment, not this system."
    },
    {
      "q": "An increase in the money supply shifts:",
      "choices": [
        "IS right",
        "LM right",
        "IS left",
        "LM left"
      ],
      "answer": 1,
      "explanation": "Correct: (b). More real balances mean the rate must fall at each Y, so LM moves right. (a) and (c) confuse money with goods-market spending. (d) is what a fall in the money supply does."
    },
    {
      "q": "Fiscal expansion in IS-LM raises output but also raises the interest rate, which:",
      "choices": [
        "Crowds in investment",
        "Crowds out some investment",
        "Leaves investment unchanged",
        "Lowers the money supply"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Higher r makes some investment projects unprofitable. (a) is the opposite. (c) ignores the rate channel. (d) Fiscal policy does not change the money supply."
    },
    {
      "q": "In a liquidity trap, monetary policy is weak because:",
      "choices": [
        "The money supply cannot change",
        "Interest rates are near zero and extra money is hoarded",
        "The government cannot spend",
        "Investment does not depend on rates"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With r near zero, LM is flat and more money cannot push rates down. (a) The central bank can still buy bonds. (c) Fiscal policy is a different tool. (d) Investment still depends on r; the problem is r cannot fall further."
    },
    {
      "q": "If the price level rises with the nominal money supply fixed, real balances M/P ___ and LM shifts ___.",
      "choices": [
        "Rise, right",
        "Fall, left",
        "Rise, left",
        "Fall, right"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Higher P shrinks M/P, so the rate must rise at each Y — LM left. (a) reverses both steps. (c) gets the shift backwards. (d) gets the balances backwards."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Money, Interest &amp; IS-LM: Quick Reference</h3>\n<p><strong>Core idea:</strong> IS is the goods market (downward sloping), LM is the money market (upward sloping); their crossing sets output and the interest rate together.</p>\n<div class=\"formula\">Money multiplier = 1 ÷ reserve ratio &nbsp;|&nbsp; M/P = kY − hr &nbsp;|&nbsp; IS: Y = 2,500 − 50r &nbsp;|&nbsp; LM: r = 0.02Y − 36 &nbsp;|&nbsp; Equilibrium: Y = 2,150, r = 7%</div>\n<p><strong>Worked anchors:</strong> Reserve ratio 10% → multiplier <strong>10</strong>; $10bn of bond buying → up to <strong>$100bn</strong> more money. Money demand 0.5 × 2,150 − 25r = 900 → r = <strong>7%</strong>. LM right (r = 0.02Y − 40) → Y = <strong>2,250</strong>, r = <strong>5%</strong>.</p>\n<p><strong>Watch out:</strong> G moves IS, M moves LM — never shift both for one policy; in a liquidity trap, fiscal policy does the work.</p>\n<p><strong>Self-check:</strong> Solve IS Y = 2,500 − 50r with LM r = 0.02Y − 36 from memory and check Y = 2,150, r = 7%.</p>\n"
};
