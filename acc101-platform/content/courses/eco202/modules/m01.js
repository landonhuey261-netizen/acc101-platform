module.exports = {
  "number": 1,
  "slug": "national-income-models",
  "title": "National Income Models: What Determines GDP",
  "estTime": "3–4 hours",
  "objectives": [
    "Define GDP and explain the expenditure, income, and production ways of measuring it.",
    "Use Y = C + I + G + NX to compute GDP from its components.",
    "Distinguish nominal GDP, real GDP, and the GDP deflator.",
    "Explain the classical long-run model: how factor supplies and technology set potential output.",
    "Apply the loanable-funds model to find the real interest rate that balances saving and investment."
  ],
  "sections": [
    {
      "heading": "What GDP Measures — and What It Does Not",
      "html": "<p><strong>Gross domestic product (GDP)</strong> is the market value of all <em>final</em> goods and services produced inside a country's borders in a given period, usually a quarter or a year. Three words in that definition do heavy work. <em>Market value</em> means we add things up using their prices, so a $30,000 car counts far more than a $3 sandwich. <em>Final</em> means we count only goods sold to their last user — the bread on the shelf, not the flour the baker bought to make it — so we do not double-count. <em>Inside a country's borders</em> means a factory in Michigan counts toward U.S. GDP even if its owner lives abroad.</p><p>GDP is a flow, not a stock: it measures production <em>per period</em>, like a speedometer, not wealth at a moment, like an odometer. It also leaves things out: unpaid work at home, most of the underground economy, and the value of clean air or leisure time are not in GDP. That does not make GDP useless — it makes it a measure of market production, and you should never pretend it is a measure of happiness.</p><div class=\"callout\"><strong>Key idea:</strong> GDP answers one question well — how much market production happened? — and many questions badly. Use it for that one question, and reach for other measures for wellbeing, distribution, or the environment.</div>\n<p>The most used way to add up GDP is the <strong>expenditure approach</strong>: add up who bought the final output. <strong>C</strong> is consumption — household spending on durable goods (cars, appliances), nondurable goods (food, clothing), and services (haircuts, streaming). <strong>I</strong> is investment — business spending on machines, buildings, and inventories, plus new housing. <strong>G</strong> is government purchases of goods and services — roads, salaries of public workers, military equipment — but <em>not</em> transfer payments such as Social Security checks, which buy nothing directly. <strong>NX</strong> is net exports, exports minus imports.</p><p>Worked example (all figures in billions of dollars, an example economy): C = 1,200, I = 400, G = 300, exports = 250, imports = 350, so NX = 250 − 350 = −100. Then Y = 1,200 + 400 + 300 + (−100) = <strong>1,800</strong>. Every dollar of output is bought by somebody, so the identity always holds — it is accounting, not a theory. The theory comes next, when we ask what makes each piece move.</p><div class=\"formula\">Y = C + I + G + NX &nbsp;|&nbsp; NX = Exports − Imports</div>"
    },
    {
      "heading": "Nominal GDP, Real GDP, and the Deflator",
      "html": "<p><strong>Nominal GDP</strong> values output at current prices; <strong>real GDP</strong> values it at the prices of a chosen base year, so that only changes in <em>quantities</em> move it. If an economy produces the same 100 cars this year as last year but each car costs 10% more, nominal GDP rises 10% while real GDP does not move at all. Real GDP is the number to use when you ask whether the economy actually produced more.</p><p>The <strong>GDP deflator</strong> links the two: deflator = (nominal GDP ÷ real GDP) × 100. Example: nominal GDP is $2,070 billion and real GDP is $1,800 billion, so the deflator is (2,070 ÷ 1,800) × 100 = <strong>115</strong> — prices are 15% above the base year. The growth rate of real GDP is (new real GDP − old real GDP) ÷ old real GDP. Real GDP rising from $1,800 billion to $1,872 billion is growth of (1,872 − 1,800) ÷ 1,800 = 0.04, or <strong>4%</strong>.</p><div class=\"formula\">GDP deflator = (Nominal GDP ÷ Real GDP) × 100 &nbsp;|&nbsp; Growth rate = (New − Old) ÷ Old</div>"
    },
    {
      "heading": "The Classical Long Run: Factors, Technology, Potential Output",
      "html": "<p>In the long run, output is set by supply, not by demand. The <strong>classical model</strong> starts with a production function, Y = F(K, L), where <strong>K</strong> is the capital stock (machines, buildings, roads) and <strong>L</strong> is labour (workers, hours, skills). Add technology — better ways of combining K and L — and the function shifts up. With K, L, and technology fixed, potential output is fixed too, and the price level simply adjusts so that demand equals that supply.</p><p>Two properties matter. First, <strong>constant returns to scale</strong>: doubling both K and L doubles output. Second, <strong>diminishing marginal product</strong>: each extra unit of one factor, holding the other fixed, adds less than the one before it. The tenth machine in a small workshop adds less than the first. Firms hire labour until the real wage equals the marginal product of labour, and rent capital until its rental price equals the marginal product of capital. In this long-run world, demand cannot raise output above potential — it can only raise prices. That is why the classical model is the right tool for growth (Module 7) and the wrong tool for recessions (Module 8), where demand does matter.</p><div class=\"callout\"><strong>Key idea:</strong> Long run: supply sets output, demand sets prices. Short run: demand sets output, because prices are sticky and factories can sit idle. Knowing which run you are in is half of macroeconomics.</div>"
    },
    {
      "heading": "Loanable Funds: Where the Real Interest Rate Comes From",
      "html": "<p>What is left of national income after consumption and government purchases is <strong>national saving</strong>, S = Y − C − G. It splits into private saving, (Y − T − C), and public saving, (T − G), where <strong>T</strong> is taxes net of transfers. In a closed economy, saving must equal investment: S = I. The <strong>loanable-funds market</strong> is the model that makes that happen — savers supply funds, borrowers demand them, and the <strong>real interest rate</strong> (r) is the price that clears the market.</p><p>Worked example: Y = 1,800, C = 1,200, G = 300, T = 300. Private saving = 1,800 − 300 − 1,200 = 300. Public saving = 300 − 300 = 0. National saving = 300, so investment must be <strong>300</strong> in equilibrium. If the government runs a deficit (G &gt; T), public saving turns negative, national saving falls, and — unless private saving rises to offset it — the interest rate rises and investment is <strong>crowded out</strong>. That crowding-out channel returns in Module 9, when fiscal policy is judged.</p><div class=\"formula\">S = Y − C − G &nbsp;|&nbsp; Private saving = Y − T − C &nbsp;|&nbsp; Public saving = T − G</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>GDP = market value of final goods and services produced inside a country in a period.</li><li>Y = C + I + G + NX; in the example, 1,200 + 400 + 300 − 100 = 1,800.</li><li>Real GDP strips out price changes; the deflator = (nominal ÷ real) × 100.</li><li>Long-run output comes from K, L, and technology; demand sets prices in the long run.</li><li>National saving S = Y − C − G must equal investment in a closed economy.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Counting transfer payments in G. A Social Security check is not a government purchase — it only becomes spending when the recipient buys something, and then it counts as C, not G.</div><div class=\"callout\"><strong>Common mistake:</strong> Counting intermediate goods in GDP. The flour is not added to the bread; only the final loaf counts, or GDP double-counts the same value.</div><p><strong>Ready-to-Work link:</strong> Every policy debate in this course starts from this identity. When someone says “spending will grow the economy,” ask which letter — C, I, G, or NX — they expect to move, and by how much.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Gross domestic product (GDP)",
      "def": "The market value of all final goods and services produced inside a country's borders in a given period."
    },
    {
      "term": "Final goods",
      "def": "Goods sold to their last user; only final goods are counted in GDP to avoid double-counting."
    },
    {
      "term": "Intermediate goods",
      "def": "Goods used up making other goods, such as flour used by a baker; excluded from GDP."
    },
    {
      "term": "Expenditure approach",
      "def": "Measuring GDP by adding up spending: Y = C + I + G + NX."
    },
    {
      "term": "Consumption (C)",
      "def": "Household spending on durable goods, nondurable goods, and services."
    },
    {
      "term": "Investment (I)",
      "def": "Spending on capital goods, inventories, and new housing."
    },
    {
      "term": "Government purchases (G)",
      "def": "Government spending on goods and services, excluding transfer payments."
    },
    {
      "term": "Net exports (NX)",
      "def": "Exports minus imports; negative when a country imports more than it exports."
    },
    {
      "term": "Nominal GDP",
      "def": "GDP valued at current prices."
    },
    {
      "term": "Real GDP",
      "def": "GDP valued at base-year prices, so only quantity changes move it."
    },
    {
      "term": "GDP deflator",
      "def": "(Nominal GDP ÷ Real GDP) × 100; a broad measure of the price level."
    },
    {
      "term": "Production function",
      "def": "Y = F(K, L): output as a function of capital, labour, and technology."
    },
    {
      "term": "Potential output",
      "def": "The output an economy produces when its factors are fully employed; long-run GDP."
    },
    {
      "term": "National saving",
      "def": "S = Y − C − G; what is left of income after consumption and government purchases."
    },
    {
      "term": "Private saving",
      "def": "Y − T − C; income households keep after taxes and consumption."
    },
    {
      "term": "Public saving",
      "def": "T − G; positive in a surplus, negative in a deficit."
    },
    {
      "term": "Crowding out",
      "def": "When government borrowing raises interest rates and reduces private investment."
    },
    {
      "term": "Loanable funds",
      "def": "The market where savers supply funds and borrowers demand them; the real interest rate clears it."
    }
  ],
  "video": {
    "title": "Circular flow of income and expenditures | Macroeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/Hfz1bwK5C4o",
    "note": "The circular flow shows how income, spending, and production chase each other around the economy — the picture behind Y = C + I + G + NX. Watch it, then redo the module's worked example from memory.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In an example economy, C = 1,200, I = 400, G = 300, exports = 250, imports = 350 (all in $bn). Compute GDP and net exports, showing each step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: NX = exports − imports = 250 − 350 = <strong>−$100bn</strong>. Step 2: Y = C + I + G + NX = 1,200 + 400 + 300 + (−100) = <strong>$1,800bn</strong>. Step 3: Check — the negative NX means the country bought $100bn more from abroad than it sold, so domestic production is $100bn below total domestic spending.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Nominal GDP is $2,070bn and real GDP is $1,800bn. (a) What is the GDP deflator? (b) Real GDP then rises to $1,872bn. What is the real growth rate?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Deflator = (2,070 ÷ 1,800) × 100 = 1.15 × 100 = <strong>115</strong>. Step 2: Growth = (1,872 − 1,800) ÷ 1,800 = 72 ÷ 1,800 = 0.04 = <strong>4%</strong>. Step 3: The deflator of 115 says prices are 15% above the base year; the 4% says quantities grew 4%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Y = 1,800, C = 1,200, G = 300, T = 300 (all $bn). Compute private saving, public saving, and national saving, and state what investment must be in a closed economy.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Private saving = Y − T − C = 1,800 − 300 − 1,200 = <strong>$300bn</strong>. Step 2: Public saving = T − G = 300 − 300 = <strong>$0</strong>. Step 3: National saving = 300 + 0 = <strong>$300bn</strong>, so in a closed economy investment I = S = <strong>$300bn</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain, in two or three sentences each, why (a) a used car sale, (b) a government Social Security payment, and (c) flour bought by a bakery are NOT counted in this year's GDP.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) The used car was produced in an earlier year; reselling it creates no new production this year. Step 2: (b) A Social Security payment is a transfer — no good or service is produced for it; it counts only if the recipient then spends it. Step 3: (c) Flour is an intermediate good; counting it and the bread would double-count the same value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An economy's real GDP is $1,800bn in Year 1 and $1,710bn in Year 2. (a) What is the growth rate? (b) Is this an expansion or a contraction, and what does the classical long-run model say about what must have changed?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Growth = (1,710 − 1,800) ÷ 1,800 = −90 ÷ 1,800 = −0.05 = <strong>−5%</strong>. Step 2: Negative growth is a <strong>contraction</strong>. Step 3: In the classical long-run model, output falls only if K, L, or technology falls — for example, fewer workers, less capital, or worse technology — because demand cannot change long-run output.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The government cuts taxes by $100bn while G stays at $300bn and T was $300bn. (a) What is the new public saving? (b) If private saving rises by only $60bn, what happens to national saving and to the interest rate, in the loanable-funds story?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New T = 200, so public saving = 200 − 300 = <strong>−$100bn</strong> (a deficit). Step 2: National saving changes by −100 (public) + 60 (private) = <strong>−$40bn</strong>. Step 3: Saving falls, so the supply of loanable funds falls, the real interest rate <strong>rises</strong>, and some private investment is crowded out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "GDP counts:",
      "choices": [
        "All goods ever produced, whenever they were made",
        "The market value of final goods and services produced inside a country in a period",
        "Only goods the government buys",
        "The total wealth of a country's citizens"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is the definition — market value, final, inside borders, in a period. (a) ignores the period and final-goods rules. (c) is only G, one piece of GDP. (d) is wealth, a stock, not production, a flow."
    },
    {
      "q": "In the example economy C = 1,200, I = 400, G = 300, NX = −100 (all $bn). GDP is:",
      "choices": [
        "$1,700bn",
        "$1,800bn",
        "$1,900bn",
        "$2,000bn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Y = 1,200 + 400 + 300 − 100 = 1,800. (a) subtracts NX twice. (c) adds NX instead of subtracting it. (d) ignores NX entirely."
    },
    {
      "q": "Nominal GDP is $2,070bn and real GDP is $1,800bn. The GDP deflator is:",
      "choices": [
        "87",
        "100",
        "115",
        "207"
      ],
      "answer": 2,
      "explanation": "Correct: (c). (2,070 ÷ 1,800) × 100 = 115. (a) inverts the ratio. (b) would mean prices equal the base year. (d) is nominal GDP divided by 10, not the deflator."
    },
    {
      "q": "Real GDP rises from $1,800bn to $1,872bn. The growth rate is:",
      "choices": [
        "2%",
        "4%",
        "7.2%",
        "72%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (1,872 − 1,800) ÷ 1,800 = 72 ÷ 1,800 = 4%. (a) would be growth of $36bn. (c) mistakes $72bn for a percentage. (d) divides 72 by 100 instead of by 1,800."
    },
    {
      "q": "In the classical long-run model, output is determined by:",
      "choices": [
        "Consumer demand and the price level",
        "Capital, labour, and technology",
        "The money supply alone",
        "Government spending alone"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The production function Y = F(K, L) plus technology sets long-run output. (a) describes the short run. (c) and (d) move prices in the long run, not output."
    },
    {
      "q": "Y = 1,800, C = 1,200, G = 300, T = 300. Private saving is:",
      "choices": [
        "$0",
        "$300bn",
        "$600bn",
        "$900bn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Private saving = Y − T − C = 1,800 − 300 − 1,200 = 300. (a) is public saving here. (c) forgets to subtract taxes. (d) is Y − C − G + 300, double-counting."
    },
    {
      "q": "A government deficit (G > T) in the loanable-funds market tends to:",
      "choices": [
        "Lower the interest rate and raise investment",
        "Raise the interest rate and crowd out investment",
        "Leave saving and investment unchanged",
        "Raise saving one-for-one"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Negative public saving shrinks the supply of loanable funds, so r rises and investment falls. (a) reverses the effect. (c) ignores that public saving is part of national saving. (d) would need private saving to rise by the full deficit, which it generally does not."
    },
    {
      "q": "Which of these is NOT counted in GDP?",
      "choices": [
        "A new house built this year",
        "A haircut bought this year",
        "Flour bought by a bakery to make bread",
        "A new car bought by a household"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Flour is an intermediate good — only the final bread counts. (a), (b), and (d) are all final goods or services produced this year."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — National Income Models: Quick Reference</h3>\n<p><strong>Core idea:</strong> GDP measures market production in a period; in the long run, capital, labour, and technology set how much can be produced.</p>\n<div class=\"formula\">Y = C + I + G + NX &nbsp;|&nbsp; GDP deflator = (Nominal ÷ Real) × 100 &nbsp;|&nbsp; S = Y − C − G</div>\n<p><strong>Worked anchors:</strong> C 1,200 + I 400 + G 300 + NX (−100) = Y <strong>1,800</strong>. Deflator (2,070 ÷ 1,800) × 100 = <strong>115</strong>. Real growth (1,872 − 1,800) ÷ 1,800 = <strong>4%</strong>. Private saving 1,800 − 300 − 1,200 = <strong>300</strong>.</p>\n<p><strong>Watch out:</strong> Transfers are not G; intermediate goods are not counted twice; nominal growth is not real growth.</p>\n<p><strong>Self-check:</strong> Write Y = C + I + G + NX from memory, then explain in one sentence what each letter leaves out.</p>\n"
};
