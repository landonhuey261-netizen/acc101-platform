module.exports = {
  "number": 3,
  "slug": "inflation-and-the-price-level",
  "title": "Inflation & the Price Level",
  "estTime": "3–4 hours",
  "objectives": [
    "Define inflation, deflation, and disinflation and tell them apart.",
    "Explain how the CPI is built from a market basket and compute a CPI value.",
    "Compute the inflation rate from CPI values and from the GDP deflator.",
    "Convert a nominal wage or price into real terms.",
    "Explain who inflation helps, who it hurts, and why steady low inflation is the usual target."
  ],
  "sections": [
    {
      "heading": "Inflation, Deflation, Disinflation — Three Different Words",
      "html": "<p><strong>Inflation</strong> is a sustained rise in the general price level — most prices rising over time, so each dollar buys less. <strong>Deflation</strong> is the opposite: a sustained fall in the general price level, so each dollar buys more. <strong>Disinflation</strong> is prices still rising, but more slowly than before — inflation falling from 8% to 3% is disinflation, not deflation. News reports mix these up constantly; the distinction matters, because deflation can be far more damaging than moderate inflation (Module 9 explains why).</p><p>Note the word <em>general</em>. One product getting more expensive is not inflation — it is a relative price change. If coffee gets dearer while phones get cheaper, that is the market reallocating, not inflation. Inflation is when the average of all prices rises. And inflation is a rate of change, not a level: saying 'prices are high' is not the same as saying 'prices are rising fast.'</p><div class=\"callout\"><strong>Key idea:</strong> Inflation = the price level rising. Deflation = the price level falling. Disinflation = the price level rising more slowly. Three words, three different economies.</div>"
    },
    {
      "heading": "The CPI: A Basket of Goods",
      "html": "<p>The main U.S. measure is the <strong>Consumer Price Index (CPI)</strong>, published by the Bureau of Labor Statistics. The BLS tracks the prices of a fixed <strong>market basket</strong> — the goods and services a typical urban household buys: food, housing, transport, medical care, clothing, entertainment, and more — and compares what the same basket costs over time. The CPI is an index, not a dollar amount: it is set to 100 in a base period (1982–84 = 100 for the CPI-U) and later values show how much prices have risen since then.</p><p>Worked example: a basket costs $200 in the base year and $210 this year. The CPI is ($210 ÷ $200) × 100 = <strong>105</strong>. If next year the same basket costs $231, the CPI is ($231 ÷ $200) × 100 = <strong>115.5</strong>. A CPI of 105 means prices are 5% above the base period; a CPI of 115.5 means 15.5% above it.</p><div class=\"formula\">CPI = (Cost of basket in current year ÷ Cost of basket in base year) × 100</div><p>The CPI is not perfect. It struggles with <strong>substitution</strong> (when beef gets dearer, shoppers buy chicken, but the fixed basket still prices the beef), with <strong>quality change</strong> (a $1,000 phone today does far more than a $1,000 phone ten years ago), and with new products. These biases mean the CPI probably overstates the true rise in the cost of living a little — which is one reason the Federal Reserve watches other measures too, such as the PCE price index.</p>"
    },
    {
      "heading": "Computing the Inflation Rate",
      "html": "<p>The <strong>inflation rate</strong> is the percent change in a price index from one period to the next:</p><div class=\"formula\">Inflation rate = ((CPI this year − CPI last year) ÷ CPI last year) × 100</div><p>Worked example: CPI 105 last year, 110 this year. Inflation = (110 − 105) ÷ 105 × 100 = 5 ÷ 105 × 100 = <strong>4.8%</strong>. A second example, with the real U.S. numbers you will meet again in the lab: the CPI-U annual average was 292.655 in 2022 and 304.702 in 2023, so inflation in 2023 was (304.702 − 292.655) ÷ 292.655 × 100 = <strong>4.1%</strong>. The same formula works with the GDP deflator (Module 1): if the deflator rises from 100 to 110, inflation by that measure is 10%.</p><p>Be careful with the denominator: inflation is the change divided by the <em>starting</em> value. Dividing by the new value gives a smaller, wrong answer — a common slip. And remember that an index of 105 does not mean 105% inflation; it means prices are 5% above the base period.</p><div class=\"callout\"><strong>Key idea:</strong> Inflation is always a percent change in a price index. If you know two CPI values, you can compute inflation in one line — and check any headline that claims a different number.</div>"
    },
    {
      "heading": "Real Wages and Real Prices: What a Dollar Really Buys",
      "html": "<p>To compare money across years, convert nominal amounts into <strong>real</strong> amounts using the CPI: Real value = (Nominal value ÷ CPI) × 100. Worked example: your wage is $20 an hour and the CPI is 125 (base year = 100). Your real wage in base-year dollars is ($20 ÷ 125) × 100 = <strong>$16 an hour</strong>. If your wage rises to $21 while the CPI rises to 130, your new real wage is ($21 ÷ 130) × 100 = <strong>$16.15</strong> — a small real gain, even though the nominal raise looked bigger.</p><p>The same logic prices anything across time. A $300 basket in a year when the CPI is 150 costs, in base-year dollars, ($300 ÷ 150) × 100 = $200. And a dollar's purchasing power falls as the CPI rises: $1 in a year with CPI 200 buys what $0.50 bought in the base year. This is the adjustment behind every 'in today's dollars' or 'adjusted for inflation' figure you will ever read.</p><p>Two related terms: the <strong>nominal interest rate</strong> is the rate printed on a loan; the <strong>real interest rate</strong> is the nominal rate minus inflation. If you borrow at 7% while inflation is 3%, the real rate is about 4% — that is the true cost of borrowing in purchasing-power terms (Module 9 goes deeper).</p><p>Unanticipated inflation redistributes wealth. <strong>Borrowers win and lenders lose</strong>: if you borrowed $10,000 and inflation runs hot, you repay in dollars that are worth less. People on fixed incomes lose, because their dollars buy less each year. Savers holding cash lose. Workers whose wages lag behind prices lose, while workers whose wages keep up do not. <strong>Anticipated</strong> inflation is much less harmful, because contracts, wages, and interest rates adjust for it in advance.</p><p>That is why central banks aim for low, steady, predictable inflation — in the United States, the Federal Reserve targets about 2% a year — rather than zero. A little inflation gives room to cut real interest rates in a downturn, and it avoids the deflation trap, where falling prices make people postpone spending, debts get heavier in real terms, and the economy can stall. Hyperinflation — prices rising by hundreds or thousands of percent a year — destroys money's usefulness altogether, as in Germany in 1923 or Zimbabwe in 2008, and it is almost always tied to governments printing money to pay bills (Module 7).</p><div class=\"callout\"><strong>Common mistake:</strong> Thinking any inflation is a disaster. The danger is not 2% steady inflation; it is high, volatile, or unanticipated inflation — and deflation. Predictability matters as much as the number.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Inflation = price level rising; deflation = falling; disinflation = rising more slowly.</li><li>CPI = (cost of the basket now ÷ cost in the base year) × 100; the BLS basket covers a typical urban household.</li><li>Inflation rate = percent change in the CPI (or deflator) — change divided by the starting value.</li><li>Real value = (Nominal ÷ CPI) × 100; real interest rate ≈ nominal rate − inflation.</li><li>Unanticipated inflation helps borrowers and hurts lenders and people on fixed incomes; the Fed targets about 2%.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Reading a CPI of 115 as '115% inflation.' It means prices are 15% above the base period. Inflation is the <em>change</em> in the index, not the index itself.</div><div class=\"callout\"><strong>Common mistake:</strong> Dividing by the new CPI instead of the old one when computing inflation. Always divide the change by the starting value.</div><p><strong>Ready-to-Work link:</strong> When your employer offers a 3% raise and inflation is 4%, you just took a real pay cut. That one calculation is worth more than most salary advice you will ever hear.</p>"
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
      "term": "Disinflation",
      "def": "A fall in the inflation rate; prices still rise, but more slowly."
    },
    {
      "term": "Price level",
      "def": "The average level of prices in the economy, measured by an index such as the CPI."
    },
    {
      "term": "Consumer Price Index (CPI)",
      "def": "The BLS index tracking the price of a fixed basket of goods and services bought by a typical urban household."
    },
    {
      "term": "Market basket",
      "def": "The fixed set of goods and services whose prices the CPI tracks."
    },
    {
      "term": "CPI-U",
      "def": "The CPI for All Urban Consumers, the most widely quoted U.S. inflation measure (base 1982–84 = 100)."
    },
    {
      "term": "Inflation rate",
      "def": "The percent change in a price index from one period to the next."
    },
    {
      "term": "Base period",
      "def": "The period in which a price index is set to 100."
    },
    {
      "term": "Substitution bias",
      "def": "The CPI's tendency to overstate inflation because shoppers switch away from goods that get dearer."
    },
    {
      "term": "Real value",
      "def": "A money amount adjusted for inflation: (Nominal ÷ CPI) × 100."
    },
    {
      "term": "Nominal interest rate",
      "def": "The interest rate stated on a loan or bond, before adjusting for inflation."
    },
    {
      "term": "Real interest rate",
      "def": "The nominal interest rate minus inflation; the true cost of borrowing in purchasing-power terms."
    },
    {
      "term": "Hyperinflation",
      "def": "Extremely rapid inflation, often hundreds or thousands of percent a year."
    },
    {
      "term": "PCE price index",
      "def": "The price index for personal consumption spending, watched closely by the Federal Reserve."
    },
    {
      "term": "Purchasing power",
      "def": "What a unit of money can actually buy."
    }
  ],
  "video": {
    "title": "Introduction to inflation | Inflation - measuring the cost of living | Macroeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/AaR1mPrdbTc",
    "note": "Khan Academy introduces inflation and the CPI with a simple basket example. Follow along with a calculator and check the 4.8% worked example in this module as you watch.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> A market basket costs $200 in the base year and $210 this year. What is the CPI this year? If the basket costs $231 next year, what is the CPI then, and what is the inflation rate between the two years?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: CPI this year = ($210 ÷ $200) × 100 = <strong>105</strong>. Step 2: CPI next year = ($231 ÷ $200) × 100 = <strong>115.5</strong>. Step 3: Inflation = (115.5 − 105) ÷ 105 × 100 = 10.5 ÷ 105 × 100 = <strong>10%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> The CPI was 250 last year and 260 this year. What is the inflation rate? A worker's wage rose from $25 to $26 an hour over the same year. Did their real wage rise or fall?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Inflation = (260 − 250) ÷ 250 × 100 = 10 ÷ 250 × 100 = <strong>4%</strong>. Step 2: Nominal wage growth = ($26 − $25) ÷ $25 = 4% as well. Step 3: Real wage last year = ($25 ÷ 250) × 100 = $10.00; this year = ($26 ÷ 260) × 100 = $10.00. The real wage is <strong>unchanged</strong> — the raise exactly matched inflation.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> The CPI-U annual average was 292.655 in 2022 and 304.702 in 2023. Compute the 2023 inflation rate to one decimal place. Show the formula.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Inflation = (304.702 − 292.655) ÷ 292.655 × 100. Step 2: The change is 304.702 − 292.655 = 12.047. Step 3: 12.047 ÷ 292.655 = 0.041165, × 100 = 4.1165% ≈ <strong>4.1%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Your grandfather says his first job paid $2 an hour in 1970, when the CPI was about 40, and your job pays $20 an hour now, with the CPI at about 300. Who earned more in real (base-year) terms?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Grandfather's real wage = ($2 ÷ 40) × 100 = <strong>$5.00</strong> in base-year dollars. Step 2: Your real wage = ($20 ÷ 300) × 100 = <strong>$6.67</strong> in base-year dollars. Step 3: You earn more in real terms — $6.67 versus $5.00 — even though $20 sounds like ten times $2, because prices rose about 7.5 times over the same period.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A borrower takes a $10,000 loan at a 5% nominal interest rate for one year. Inflation turns out to be 8%. What is the approximate real interest rate, and who benefits — borrower or lender? Explain in one or two sentences.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Real rate ≈ nominal − inflation = 5% − 8% = <strong>−3%</strong>. Step 2: The <strong>borrower benefits</strong>: they repay the loan in dollars worth less than the dollars they borrowed, so in purchasing-power terms the lender is effectively paid to lend. This is the classic cost of unanticipated inflation to lenders.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain the difference between deflation and disinflation, and give a one-sentence example of each using inflation rates.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: <strong>Deflation</strong> is the price level falling — the inflation rate is negative. Example: inflation of −2% means prices fell 2% over the year. Step 2: <strong>Disinflation</strong> is inflation falling while prices still rise. Example: inflation dropping from 8% to 3% is disinflation — prices are still rising, just more slowly.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Inflation is:",
      "choices": [
        "One product getting more expensive",
        "A sustained rise in the general price level",
        "A fall in the price level",
        "A rise in the unemployment rate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inflation is the general price level rising over time. (a) is a relative price change. (c) is deflation. (d) is a different problem altogether."
    },
    {
      "q": "Inflation falls from 8% to 3%. This is called:",
      "choices": [
        "Deflation",
        "Disinflation",
        "Hyperinflation",
        "Stagflation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Prices still rise, just more slowly. (a) needs prices to fall. (c) needs inflation in the hundreds of percent. (d) is high inflation plus high unemployment together."
    },
    {
      "q": "A basket costs $200 in the base year and $210 this year. The CPI is:",
      "choices": [
        "210",
        "105",
        "5",
        "10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ($210 ÷ $200) × 100 = 105. (a) is the dollar cost, not the index. (c) is the percent rise, not the index. (d) is double the percent rise."
    },
    {
      "q": "CPI is 105 last year and 110 this year. The inflation rate is about:",
      "choices": [
        "5%",
        "4.8%",
        "10%",
        "15%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (110 − 105) ÷ 105 × 100 = 4.76% ≈ 4.8%. (a) divides the change by 100 instead of 105. (c) divides by 50. (d) is the rise since the base period, not the yearly rate."
    },
    {
      "q": "CPI-U was 292.655 in 2022 and 304.702 in 2023. Inflation in 2023 was about:",
      "choices": [
        "8.0%",
        "2.9%",
        "4.1%",
        "12.0%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). (304.702 − 292.655) ÷ 292.655 × 100 = 4.1%. (a) is the 2022 rate. (b) is the 2024 rate. (d) is the raw index-point change, not a percent."
    },
    {
      "q": "Your wage is $20 an hour and the CPI is 125 (base = 100). Your real wage is:",
      "choices": [
        "$25",
        "$20",
        "$16",
        "$12.50"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ($20 ÷ 125) × 100 = $16. (a) multiplies by the index. (b) is the nominal wage. (d) divides $20 by 1.6, the wrong adjustment."
    },
    {
      "q": "Unanticipated inflation most helps:",
      "choices": [
        "Lenders",
        "Borrowers",
        "People on fixed incomes",
        "People holding cash"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Borrowers repay in cheaper dollars. (a), (c), and (d) all lose, because the money they receive or hold buys less."
    },
    {
      "q": "The Federal Reserve's inflation target is about:",
      "choices": [
        "0%",
        "2% a year",
        "10% a year",
        "Whatever inflation happens to be"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Fed targets about 2% — low, steady, and predictable. (a) Zero risks deflation and leaves no room to cut real rates. (c) would be high and destabilizing. (d) The Fed actively steers inflation; it does not ignore it."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Inflation &amp; the Price Level — Quick Reference</h3>\n<p><strong>Core idea:</strong> Inflation is the general price level rising. The CPI tracks a fixed basket; the inflation rate is the percent change in the index.</p>\n<div class=\"formula\">CPI = (Basket cost now ÷ Basket cost in base year) × 100 &nbsp;|&nbsp; Inflation = ((CPI now − CPI before) ÷ CPI before) × 100 &nbsp;|&nbsp; Real value = (Nominal ÷ CPI) × 100</div>\n<p><strong>Worked anchor:</strong> Basket $200 → $210 gives CPI 105; CPI 105 → 110 gives inflation 4.8%. Real U.S. CPI-U: 292.655 (2022) → 304.702 (2023) = 4.1% inflation.</p>\n<p><strong>Watch out:</strong> A CPI of 115 is not 115% inflation — it means prices are 15% above base. Always divide the change by the starting value, and remember disinflation is not deflation.</p>\n<p><strong>Self-check:</strong> Given two CPI values and a nominal wage, can you compute inflation and the real wage?</p>\n"
};
