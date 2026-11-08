module.exports = {
  "number": 6,
  "slug": "inflation-causes-costs-expectations",
  "title": "Inflation: Causes, Costs & Expectations",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute inflation from CPI data and from the GDP deflator.",
    "Use the Fisher equation to separate nominal and real interest rates.",
    "Distinguish demand-pull, cost-push, and monetary causes of inflation.",
    "Explain the costs of inflation, including shoe-leather, menu, and tax distortions.",
    "Use the Phillips curve, with expectations, to link inflation and unemployment."
  ],
  "sections": [
    {
      "heading": "Measuring Inflation: The CPI and the Basket",
      "html": "<p><strong>Inflation</strong> is a sustained rise in the general price level — not one good getting dearer, but the average of what people buy. The <strong>Consumer Price Index (CPI)</strong> tracks the cost of a fixed basket of goods and services bought by a typical urban household, and the inflation rate is the percentage change in the CPI. Example: the basket costs $200 in the base year and $230 this year, so CPI = (230 ÷ 200) × 100 = <strong>115</strong>. If the CPI rises from 120 to 126, inflation is (126 − 120) ÷ 120 = 6 ÷ 120 = 0.05 = <strong>5%</strong>.</p><p>The CPI is not perfect. It struggles with new goods, quality improvements (a phone that does more is not simply “more expensive”), and <strong>substitution bias</strong>: when beef gets dearer, people buy chicken, but a fixed basket keeps pricing the beef. That is why the CPI tends to overstate the rise in the cost of living slightly. The GDP deflator (Module 1) covers everything produced, not just what consumers buy — the two usually move together, and when they diverge, ask which basket changed.</p><div class=\"formula\">CPI = (Cost of basket now ÷ Cost in base year) × 100 &nbsp;|&nbsp; Inflation = (CPI new − CPI old) ÷ CPI old</div>\n<p>When you borrow, the rate you are quoted is the <strong>nominal interest rate</strong> (i). What matters for decisions is the <strong>real interest rate</strong> (r): what the loan costs after inflation has shrunk the dollars you repay. The <strong>Fisher equation</strong> links them: i ≈ r + π<sup>e</sup>, where π<sup>e</sup> is expected inflation. Rearranged, r ≈ i − π<sup>e</sup>. Example: a loan charges 7% nominal and expected inflation is 3%, so the real rate is about 7 − 3 = <strong>4%</strong>. The exact calculation is (1.07 ÷ 1.03) − 1 = 0.0388, or <strong>3.88%</strong> — close to the approximation, and the gap only matters when inflation is high.</p><p>Two consequences follow. First, unexpected inflation transfers wealth from lenders to borrowers: a loan repaid in cheaper dollars is a gift to the borrower. Second, the central bank's power runs through the real rate: if it cuts the nominal rate by 1 point but expected inflation also falls 1 point, the real rate — and therefore investment — does not move at all. That is why Module 10 watches expectations as closely as it watches the policy rate.</p><div class=\"formula\">Fisher: i ≈ r + π<sup>e</sup> &nbsp;|&nbsp; r ≈ i − π<sup>e</sup> &nbsp;|&nbsp; Exact: r = (1 + i) ÷ (1 + π<sup>e</sup>) − 1</div>"
    },
    {
      "heading": "What Causes Inflation? Three Stories",
      "html": "<p><strong>Demand-pull</strong> inflation happens when spending outruns supply: AD shifts right against a fixed SRAS, output rises, and prices rise with it — the inflationary gap of Module 4. <strong>Cost-push</strong> inflation happens when costs rise: an oil shock or a wage surge shifts SRAS left, output falls, and prices rise — stagflation. <strong>Monetary</strong> inflation is the long-run story: Milton Friedman's line that inflation is “always and everywhere a monetary phenomenon.” The <strong>quantity theory</strong> states it as M × V = P × Y, where <strong>M</strong> is the money supply, <strong>V</strong> the velocity of money (how often each dollar is spent), <strong>P</strong> the price level, and <strong>Y</strong> real output. If V is steady and Y grows 2% a year, then money growing 7% a year means prices grow about 5% a year.</p><p>Example: money grows 7%, velocity is flat, real output grows 2%. Then inflation ≈ 7 − 2 = <strong>5%</strong>. The three stories are not rivals: a central bank that finances a spending boom with new money can produce demand-pull inflation that the quantity theory also predicts. The useful question is always which lever moved first — spending, costs, or money — because the cure follows the cause.</p><div class=\"formula\">M × V = P × Y &nbsp;|&nbsp; Inflation ≈ money growth − real output growth (if V is steady)</div>"
    },
    {
      "heading": "The Costs of Inflation: More Than Rising Prices",
      "html": "<p>Inflation's costs are not the higher price tags themselves — those are just numbers. The costs are the distortions they cause. <strong>Shoe-leather costs</strong>: people waste time and effort minimizing cash holdings when inflation is high. <strong>Menu costs</strong>: firms must keep reprinting prices and rethinking them. <strong>Tax distortions</strong>: taxes are levied on nominal gains, so inflation taxes savers even when their real return is zero. <strong>Relative-price confusion</strong>: when all prices rise at different speeds, firms and workers cannot tell a real price signal from general inflation, so they misallocate resources. And <strong>arbitrary redistribution</strong>: unexpected inflation helps borrowers and hurts lenders, helps the indebted government and hurts the pensioner on a fixed income.</p><p>The deepest cost is the loss of the price system's information. Prices are how a market economy coordinates millions of decisions; inflation adds noise to every price, like static on a radio. That is why central banks in most advanced economies aim for low, stable inflation — commonly around 2% — rather than zero: a small buffer against deflation, which carries its own, worse costs when debts grow heavier in real terms and spending is endlessly postponed.</p><div class=\"callout\"><strong>Key idea:</strong> Expected inflation is mostly an annoyance; <em>unexpected</em> inflation is the thief. It redistributes wealth arbitrarily and clouds every price signal in the economy.</div>"
    },
    {
      "heading": "The Phillips Curve — and Why Expectations Move It",
      "html": "<p>The <strong>Phillips curve</strong> plots inflation against unemployment. In the short run it slopes down: lower unemployment goes with higher inflation, because tight labour markets bid wages up and firms pass costs on. The expectations-augmented version writes it as π = π<sup>e</sup> − a(u − u<sub>n</sub>), where <strong>π</strong> is inflation, <strong>π<sup>e</sup></strong> expected inflation, <strong>u</strong> actual unemployment, <strong>u<sub>n</sub></strong> the natural rate, and <strong>a</strong> the slope. Worked example: π<sup>e</sup> = 2%, a = 0.5, u<sub>n</sub> = 5%, u = 7%. Then π = 2 − 0.5 × (7 − 5) = 2 − 1 = <strong>1%</strong>. Unemployment 2 points above natural pulls inflation 1 point below expectations.</p><p>The long run is the twist. If the government tries to hold unemployment below the natural rate, inflation rises, expectations catch up (π<sup>e</sup> rises), and the short-run curve shifts up — so unemployment returns to u<sub>n</sub> at a higher inflation rate. The <strong>long-run Phillips curve is vertical</strong> at u<sub>n</sub>: there is no permanent trade-off, only a temporary one bought with rising inflation. That is the Friedman-Phelps expectations story, and it is why credibility — convincing people the central bank will keep inflation low — is worth so much: if π<sup>e</sup> stays low, disinflation costs fewer jobs.</p><div class=\"formula\">Short-run Phillips: π = π<sup>e</sup> − a(u − u<sub>n</sub>) &nbsp;|&nbsp; Long-run Phillips: vertical at u<sub>n</sub></div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>CPI = basket cost now ÷ basket cost in base year × 100; inflation is its percentage change.</li><li>Fisher: r ≈ i − π<sup>e</sup>; 7% nominal minus 3% expected inflation ≈ 4% real (3.88% exact).</li><li>Causes: demand-pull, cost-push, monetary (M × V = P × Y).</li><li>Costs: shoe-leather, menu, taxes, confusion, arbitrary redistribution — worst when unexpected.</li><li>Phillips: π = π<sup>e</sup> − 0.5(u − u<sub>n</sub>); example gives π = 1%; long-run curve is vertical.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using the nominal rate as the cost of borrowing. A 7% loan when inflation is expected to be 3% costs about 4% in real terms — and if inflation turns out to be 6%, the real cost was only about 1%.</div><div class=\"callout\"><strong>Common mistake:</strong> Treating the Phillips curve as a permanent menu. Pick low unemployment, pay a little inflation, forever? No — expectations adjust, the curve shifts, and the trade-off vanishes in the long run.</div><p><strong>Ready-to-Work link:</strong> When a mortgage is quoted at 7%, your first question should be “and what is expected inflation?” — the answer decides whether that loan is cheap or dear.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Inflation",
      "def": "A sustained rise in the general price level."
    },
    {
      "term": "Deflation",
      "def": "A sustained fall in the general price level."
    },
    {
      "term": "Consumer Price Index (CPI)",
      "def": "The cost of a fixed basket of consumer goods and services, relative to a base year."
    },
    {
      "term": "Substitution bias",
      "def": "The CPI's tendency to overstate inflation because it ignores consumers switching to cheaper goods."
    },
    {
      "term": "Nominal interest rate (i)",
      "def": "The rate quoted on a loan, before adjusting for inflation."
    },
    {
      "term": "Real interest rate (r)",
      "def": "The nominal rate minus expected inflation; the true cost of borrowing."
    },
    {
      "term": "Expected inflation (π-e)",
      "def": "The inflation rate people expect over the life of a loan or contract."
    },
    {
      "term": "Fisher equation",
      "def": "i ≈ r + π-e; the nominal rate equals the real rate plus expected inflation."
    },
    {
      "term": "Demand-pull inflation",
      "def": "Inflation from spending outrunning supply; AD shifts right."
    },
    {
      "term": "Cost-push inflation",
      "def": "Inflation from rising costs; SRAS shifts left."
    },
    {
      "term": "Quantity theory of money",
      "def": "M × V = P × Y; money growth above output growth shows up as inflation if velocity is steady."
    },
    {
      "term": "Velocity of money (V)",
      "def": "How often, on average, each dollar is spent in a year."
    },
    {
      "term": "Shoe-leather costs",
      "def": "Time and effort wasted minimizing cash holdings when inflation is high."
    },
    {
      "term": "Menu costs",
      "def": "The cost to firms of changing prices frequently."
    },
    {
      "term": "Phillips curve",
      "def": "The short-run trade-off between inflation and unemployment; vertical in the long run."
    },
    {
      "term": "Disinflation",
      "def": "A fall in the inflation rate (inflation slowing, not prices falling)."
    }
  ],
  "video": {
    "title": "Introduction to inflation | Inflation - measuring the cost of living | Macroeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/AaR1mPrdbTc",
    "note": "How inflation is measured and what it does to the cost of living, with the CPI basket explained. After watching, recompute the module's CPI example (basket $200 → $230, CPI 115) from scratch.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A basket costs $200 in the base year and $230 this year. (a) What is the CPI this year? (b) The CPI then rises from 120 to 126. What is the inflation rate?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: CPI = (230 ÷ 200) × 100 = 1.15 × 100 = <strong>115</strong>. Step 2: Inflation = (126 − 120) ÷ 120 = 6 ÷ 120 = 0.05 = <strong>5%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A loan charges 7% nominal interest and expected inflation is 3%. (a) What is the approximate real rate? (b) What is the exact real rate? (c) If actual inflation turns out to be 6%, what was the realised real rate (approximately)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Approximate r ≈ 7 − 3 = <strong>4%</strong>. Step 2: Exact r = (1.07 ÷ 1.03) − 1 = 1.0388 − 1 = <strong>3.88%</strong>. Step 3: Realised r ≈ 7 − 6 = <strong>1%</strong> — the borrower got a bargain and the lender lost, because inflation was higher than expected.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Money grows 7% a year, velocity is steady, and real output grows 2% a year. (a) What inflation rate does the quantity theory predict? (b) If the central bank slows money growth to 4%, what happens to predicted inflation?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Inflation ≈ money growth − output growth = 7 − 2 = <strong>5%</strong>. Step 2: At 4% money growth, inflation ≈ 4 − 2 = <strong>2%</strong>. Step 3: The logic is that money chasing a slowly growing pile of goods must show up in prices.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Use the Phillips curve π = π<sup>e</sup> − 0.5(u − u<sub>n</sub>) with π<sup>e</sup> = 2% and u<sub>n</sub> = 5%. (a) What is inflation when u = 7%? (b) When u = 3%? (c) What is inflation when u = u<sub>n</sub>?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) π = 2 − 0.5 × (7 − 5) = 2 − 1 = <strong>1%</strong>. Step 2: (b) π = 2 − 0.5 × (3 − 5) = 2 − 0.5 × (−2) = 2 + 1 = <strong>3%</strong>. Step 3: (c) π = 2 − 0 = <strong>2%</strong> — at the natural rate, inflation equals expected inflation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain, with one concrete example each, (a) a shoe-leather cost, (b) a menu cost, and (c) an arbitrary redistribution caused by unexpected inflation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) A shopkeeper makes extra trips to the bank to keep as little cash as possible, wasting hours. Step 2: (b) A restaurant reprints its menus every month instead of once a year. Step 3: (c) A retiree who lent savings at 4% fixed while inflation runs at 7% is repaid in dollars worth far less — wealth moved from lender to borrower without anyone voting for it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A government tries to hold unemployment at 3% when the natural rate is 5% and expected inflation starts at 2%. (a) What is inflation in the first year (use π = π<sup>e</sup> − 0.5(u − u<sub>n</sub>))? (b) What happens to expectations and to inflation in the next round? (c) Where does unemployment end up in the long run?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) π = 2 − 0.5 × (3 − 5) = 2 + 1 = <strong>3%</strong>. Step 2: (b) People expect 3% next, so π<sup>e</sup> rises to 3% and inflation rises again — the short-run curve shifts up. Step 3: (c) Unemployment returns to the natural rate, <strong>5%</strong>, but at a higher inflation rate — the trade-off was temporary.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The CPI basket costs $200 in the base year and $230 now. The CPI is:",
      "choices": [
        "100",
        "115",
        "130",
        "230"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (230 ÷ 200) × 100 = 115. (a) is the base-year CPI. (c) adds the $30 rise to 100 the wrong way. (d) is the dollar cost, not the index."
    },
    {
      "q": "CPI rises from 120 to 126. Inflation is:",
      "choices": [
        "5%",
        "6%",
        "20%",
        "26%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (126 − 120) ÷ 120 = 5%. (b) is the point rise, 6 points, not a rate. (c) divides by 30. (d) confuses the index level with the rate."
    },
    {
      "q": "Nominal rate 7%, expected inflation 3%. The approximate real rate is:",
      "choices": [
        "3%",
        "4%",
        "7%",
        "10%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). r ≈ i − π-e = 7 − 3 = 4% (3.88% exact). (a) is expected inflation itself. (c) is the nominal rate, unadjusted. (d) adds the two rates."
    },
    {
      "q": "If actual inflation is higher than expected, wealth is transferred from:",
      "choices": [
        "Borrowers to lenders",
        "Lenders to borrowers",
        "The government to nobody",
        "Savers to savers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Loans are repaid in cheaper dollars, so borrowers gain and lenders lose. (a) is what happens when inflation is lower than expected. (c) and (d) miss the transfer entirely."
    },
    {
      "q": "Money grows 7%, velocity steady, output grows 2%. Predicted inflation is about:",
      "choices": [
        "2%",
        "5%",
        "7%",
        "9%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 7 − 2 = 5% from M × V = P × Y. (a) is output growth alone. (c) is money growth alone. (d) adds money and output growth."
    },
    {
      "q": "With π-e = 2%, u-n = 5%, and u = 7%, the Phillips curve π = π-e − 0.5(u − u-n) gives inflation of:",
      "choices": [
        "0%",
        "1%",
        "2%",
        "3%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 − 0.5 × 2 = 1%. (a) would need a 4-point unemployment gap. (c) is expected inflation, which holds only at the natural rate. (d) is the answer when u = 3%."
    },
    {
      "q": "The long-run Phillips curve is:",
      "choices": [
        "Downward sloping",
        "Vertical at the natural rate",
        "Horizontal at zero inflation",
        "Upward sloping"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Expectations adjust, so no permanent trade-off exists. (a) is the short-run curve. (c) and (d) are not Phillips curves at all."
    },
    {
      "q": "Which is a cost of inflation?",
      "choices": [
        "Menu costs — firms must change prices often",
        "Higher real wages for everyone",
        "Cheaper borrowing for everyone",
        "More accurate price signals"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Repricing is a real resource cost. (b) Real wages depend on nominal wages versus prices, not on inflation alone. (c) Only borrowers who locked in low nominal rates gain, and only if inflation was unexpected. (d) Inflation adds noise to price signals, it does not sharpen them."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Inflation: Quick Reference</h3>\n<p><strong>Core idea:</strong> Inflation is a rising general price level; expected inflation annoys, unexpected inflation redistributes, and expectations decide whether the Phillips trade-off lasts.</p>\n<div class=\"formula\">CPI = (Basket now ÷ Basket base) × 100 &nbsp;|&nbsp; Fisher: r ≈ i − π<sup>e</sup> &nbsp;|&nbsp; M × V = P × Y &nbsp;|&nbsp; π = π<sup>e</sup> − a(u − u<sub>n</sub>)</div>\n<p><strong>Worked anchors:</strong> Basket $200 → $230 → CPI <strong>115</strong>. CPI 120 → 126 → inflation <strong>5%</strong>. Nominal 7% − expected 3% → real ≈ <strong>4%</strong> (3.88% exact). Money 7% − output 2% → inflation ≈ <strong>5%</strong>. Phillips: π<sup>e</sup> 2%, u 7%, u<sub>n</sub> 5% → π = <strong>1%</strong>.</p>\n<p><strong>Watch out:</strong> Always subtract expected inflation from the nominal rate; the Phillips curve shifts when expectations move.</p>\n<p><strong>Self-check:</strong> From CPI 100 to 110, what is inflation? (10%.) From nominal 5% and expected 2%, what is the real rate? (About 3%.)</p>\n"
};
