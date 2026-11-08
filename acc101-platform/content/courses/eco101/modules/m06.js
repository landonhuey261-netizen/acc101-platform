// eco101 - Module 6: The Economy in the News: Reading Economic Headlines
module.exports = {
  "number": 6,
  "slug": "economy-in-the-news-reading-economic-headlines",
  "title": "The Economy in the News: Reading Economic Headlines",
  "estTime": "3–4 hours",
  "objectives": [
    "Define GDP and explain what it measures and what it leaves out.",
    "Compute a growth rate and an inflation rate from index numbers.",
    "Explain the unemployment rate and who counts as unemployed.",
    "Distinguish nominal from real values using a price index.",
    "Read an economic headline and identify the indicator, the change, and what it does not prove."
  ],
  "sections": [
    {
      "heading": "GDP: The Economy's Scoreboard",
      "html": "<p><strong>Gross domestic product (GDP)</strong> is the total market value of all final goods and services produced inside a country's borders in a given period, usually a year or a quarter. It is the economy's scoreboard: when GDP grows, the economy produced more; when it shrinks for two quarters in a row, economists often call that a recession.</p>\n<p>Three words in the definition matter. <strong>Final</strong> means we count the finished loaf of bread, not the flour and the loaf — counting both would double-count. <strong>Produced inside a country's borders</strong> means a car built in Michigan counts for the United States even if the company is foreign-owned. <strong>Market value</strong> means goods are valued at the prices people actually pay.</p>\n<p>GDP leaves things out. Unpaid housework, volunteering, and the underground economy are not counted. Neither are leisure, clean air, or happiness — GDP measures production, not well-being. A car crash that leads to repairs raises GDP, even though nobody is better off. GDP is a useful scoreboard, but it is not a happiness meter.</p>"
    },
    {
      "heading": "Growth Rates: How Much Bigger?",
      "html": "<p>A <strong>growth rate</strong> answers 'how much bigger than before, in percentage terms?' The formula is (new value − old value) ÷ old value, times 100. Suppose a country's GDP was $20.0 trillion last year and $20.6 trillion this year. Growth = ($20.6 − $20.0) ÷ $20.0 = $0.6 ÷ $20.0 = 0.03 = 3%. The economy grew 3%.</p>\n<p>The same formula works for anything: wages, prices, sales, population. Always divide by the <em>old</em> value, not the new one — that is the most common arithmetic mistake in economics. And remember that a growth rate needs a base: 'GDP grew 3%' is informative; 'GDP grew $600 billion' means little without knowing whether the economy was $20 trillion or $2 trillion.</p>\n<div class=\"formula\">Growth rate = (new − old) ÷ old × 100</div>"
    },
    {
      "heading": "Inflation and the Price Level",
      "html": "<p><strong>Inflation</strong> is a rise in the general price level — not one price rising, but prices on average. It is measured with a price index, most famously the <strong>Consumer Price Index (CPI)</strong>, which tracks the price of a basket of goods and services a typical household buys. If the CPI rises from 300 to 312, inflation is (312 − 300) ÷ 300 = 12 ÷ 300 = 0.04 = 4%. Prices on average rose 4%.</p>\n<p>Inflation matters because it changes what money buys. If your wage rises 3% while prices rise 4%, your <strong>real</strong> wage — what it actually buys — fell about 1%. Economists always ask whether a number is <strong>nominal</strong> (in today's dollars, unadjusted) or <strong>real</strong> (adjusted for inflation). A $1,000 paycheck that buys less than last year's $950 paycheck is a pay cut in real terms, whatever the nominal number says.</p>\n<p>To convert, divide by the price index: real value = nominal value ÷ price index × 100. If nominal GDP is $21.0 trillion and the price index is 105 (with a base year of 100), real GDP is $21.0 ÷ 105 × 100 = $20.0 trillion. The $1.0 trillion difference is inflation, not extra production.</p>"
    },
    {
      "heading": "Unemployment: Who Counts?",
      "html": "<p>The <strong>unemployment rate</strong> is the share of the labor force that is unemployed: unemployed ÷ labor force × 100. The <strong>labor force</strong> is everyone working or actively looking for work. Suppose the labor force is 160 million people and 8 million are unemployed. The rate is 8 ÷ 160 = 0.05 = 5%.</p>\n<p>Who counts matters. A person who has given up looking for work is not in the labor force and is not counted as unemployed — so the rate can fall even when jobs have not appeared, if discouraged workers stop looking. A part-time worker who wants full-time work counts as employed, even though they are underemployed. Headlines report the rate; the careful reader asks who was counted.</p>\n<p>Unemployment has types. <strong>Frictional</strong> unemployment is the short gap between jobs — a graduate searching for a first job. <strong>Structural</strong> unemployment is a skills mismatch — a coal miner's skills do not fit a software job. <strong>Cyclical</strong> unemployment rises in recessions and falls in booms. Only cyclical unemployment disappears when the economy recovers.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>GDP is the market value of final goods and services produced inside a country in a period.</li>\n<li>Growth rate = (new − old) ÷ old × 100; always divide by the old value.</li>\n<li>Inflation is a rise in the general price level, measured by the CPI; real values adjust for it.</li>\n<li>Unemployment rate = unemployed ÷ labor force × 100; discouraged workers are not counted.</li>\n<li>Read headlines by naming the indicator, the change, and what it does not prove.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Dividing by the new value when computing a growth rate. GDP from $20.0T to $20.6T grew 3% ($0.6 ÷ $20.0), not 2.9% ($0.6 ÷ $20.6). The base is always the old value.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating GDP as well-being. GDP counts production, including repairs after a disaster and pollution cleanup. It does not count leisure, unpaid care, or clean air — so 'GDP rose' never by itself means 'life got better.'</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading 'unemployment fell' as 'jobs appeared.' The rate can fall because discouraged workers left the labor force. Always check whether the labor force grew or shrank.</div>\n<p><strong>Ready-to-Work link:</strong> Job interviews and business plans both use these numbers. 'Sales grew 10%' means nothing until you ask: 10% of what, nominal or real, and over what period? The person who asks those three questions is the person who understands the headline.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Gross domestic product (GDP)", "def": "The market value of all final goods and services produced inside a country's borders in a period." },
    { "term": "Final goods", "def": "Finished products counted in GDP; intermediate goods used to make them are not counted separately." },
    { "term": "Recession", "def": "A period of falling economic activity, often described as GDP shrinking for two quarters in a row." },
    { "term": "Growth rate", "def": "The percentage change in a value: (new − old) ÷ old × 100." },
    { "term": "Inflation", "def": "A rise in the general price level over time." },
    { "term": "Consumer Price Index (CPI)", "def": "A price index tracking the cost of a basket of goods and services a typical household buys." },
    { "term": "Price index", "def": "A number showing the average price level in one period compared with a base period." },
    { "term": "Nominal", "def": "Measured in current dollars, without adjusting for inflation." },
    { "term": "Real", "def": "Adjusted for inflation, so changes reflect actual quantities rather than prices." },
    { "term": "Unemployment rate", "def": "Unemployed people divided by the labor force, times 100." },
    { "term": "Labor force", "def": "Everyone working or actively looking for work." },
    { "term": "Discouraged worker", "def": "A person who has stopped looking for work and is therefore not counted as unemployed." },
    { "term": "Frictional unemployment", "def": "Short-term unemployment between jobs, such as a graduate searching for a first job." },
    { "term": "Structural unemployment", "def": "Unemployment from a mismatch between workers' skills and available jobs." },
    { "term": "Cyclical unemployment", "def": "Unemployment that rises in recessions and falls in booms." }
  ],
  "video": {
    "title": "What is Gross Domestic Product (GDP)?",
    "embedUrl": "https://www.youtube.com/embed/mjJmo5mN5yA",
    "note": "Marginal Revolution University explains GDP — what it counts, what it leaves out, and why it is the first number in almost every economic headline. Watch it, then try the growth-rate and real-GDP computations in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> GDP was $20.0 trillion last year and $20.6 trillion this year. (a) What is the growth rate? (b) Show your working.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Change = $20.6 − $20.0 = $0.6 trillion. Step 2: Divide by the old value: $0.6 ÷ $20.0 = 0.03. Step 3: As a percentage, 0.03 × 100 = 3%. The economy grew 3%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The CPI rises from 300 to 312. (a) What is the inflation rate? (b) A worker's wage rises from $25.00 to $26.00 an hour in the same period. Did their real wage rise or fall? Explain.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Inflation = (312 − 300) ÷ 300 = 12 ÷ 300 = 0.04 = 4%. Step 2: The wage rose ($26 − $25) ÷ $25 = $1 ÷ $25 = 0.04 = 4% as well. Step 3: Wage growth (4%) equals inflation (4%), so the real wage is unchanged — the extra dollar buys exactly what the old wage bought.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Nominal GDP is $21.0 trillion and the price index is 105 (base year = 100). (a) What is real GDP? (b) How much of the nominal figure is inflation rather than extra production, if last year's real GDP was $20.0 trillion?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Real GDP = $21.0 ÷ 105 × 100 = $20.0 trillion. Step 2: Real GDP is unchanged from last year's $20.0 trillion, so none of the $1.0 trillion nominal increase is extra production — all of it is inflation. Step 3: This is why headlines should say 'real GDP' when they mean the economy actually grew.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A country's labor force is 160 million and 8 million people are unemployed. (a) What is the unemployment rate? (b) If 2 million discouraged workers stop looking for jobs, what happens to the labor force and the unemployment rate? Assume no one finds a job.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Rate = 8 ÷ 160 = 0.05 = 5%. Step 2: The 2 million leave the labor force (160 − 2 = 158 million) and are no longer counted as unemployed (8 − 2 = 6 million). Step 3: New rate = 6 ÷ 158 = 0.038 = 3.8%. Step 4: The rate fell from 5% to 3.8% with no new jobs — proof that a falling rate does not always mean a healthier job market.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A headline says 'GDP up 5%!' but the article says prices rose 5% in the same period. Did the economy actually produce more? Explain using nominal and real.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 5% is nominal GDP — measured in current dollars. Step 2: If prices rose 5% and nominal GDP rose 5%, real GDP is roughly unchanged: the extra dollars are inflation, not extra production. Step 3: The economy did not produce more; the headline is misleading unless it says 'real GDP grew.'</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A bakery's sales rise from $100,000 to $110,000 in a year when prices in general rose 4%. (a) What is the nominal growth rate? (b) Roughly what is the real growth rate? (c) Why does the difference matter to the owner?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Nominal growth = ($110,000 − $100,000) ÷ $100,000 = 10%. Step 2: Real growth is roughly nominal minus inflation: 10% − 4% = 6%. Step 3: The owner really sold about 6% more bread and cakes — the other 4% is higher prices, not more customers. Step 4: Knowing the real figure tells the owner whether the business is actually growing or just charging more.</p>"
    }
  ],
  "quiz": [
    {
      "q": "GDP measures:",
      "choices": ["The total money in a country", "The market value of all final goods and services produced inside a country in a period", "How happy people are", "Government spending only"],
      "answer": 1,
      "explanation": "Correct: (b). GDP counts final production inside the borders over a period. (a) Money in circulation is a different measure. (c) GDP does not measure happiness or well-being. (d) Government spending is only one part of GDP."
    },
    {
      "q": "GDP was $20.0 trillion last year and $20.6 trillion this year. The growth rate is:",
      "choices": ["0.6%", "2.9%", "3%", "6%"],
      "answer": 2,
      "explanation": "Correct: (c). ($20.6 − $20.0) ÷ $20.0 = $0.6 ÷ $20.0 = 3%. (a) Is the change in trillions, not a percentage. (b) Divides by the new value ($20.6) instead of the old. (d) Doubles the real answer."
    },
    {
      "q": "The CPI rises from 300 to 312. The inflation rate is:",
      "choices": ["12%", "4%", "3%", "1.2%"],
      "answer": 1,
      "explanation": "Correct: (b). (312 − 300) ÷ 300 = 12 ÷ 300 = 4%. (a) Is the point change, not the percentage. (c) Would need a rise of 9 points. (d) Divides by 1,000 instead of 300."
    },
    {
      "q": "Nominal GDP is $21.0 trillion and the price index is 105 (base year 100). Real GDP is:",
      "choices": ["$21.0 trillion", "$20.0 trillion", "$22.05 trillion", "$19.0 trillion"],
      "answer": 1,
      "explanation": "Correct: (b). $21.0 ÷ 105 × 100 = $20.0 trillion. (a) Is the nominal figure, unadjusted. (c) Multiplies by the index instead of dividing. (d) Subtracts the index as if it were trillions."
    },
    {
      "q": "The labor force is 160 million and 8 million are unemployed. The unemployment rate is:",
      "choices": ["8%", "16%", "5%", "2%"],
      "answer": 2,
      "explanation": "Correct: (c). 8 ÷ 160 = 0.05 = 5%. (a) Uses the number of unemployed as the percentage. (b) Doubles the labor force share. (d) Would need only 3.2 million unemployed."
    },
    {
      "q": "If discouraged workers stop looking for jobs, the unemployment rate will most likely:",
      "choices": ["Rise, because more people are jobless", "Fall, because they leave the labor force and are no longer counted", "Stay the same", "Become zero"],
      "answer": 1,
      "explanation": "Correct: (b). They leave both the numerator and the denominator, and the rate falls even though no jobs appeared. (a) Gets the direction backwards. (c) The rate changes — 8/160 = 5% becomes 6/158 = 3.8% in the module's example. (d) The rate never reaches zero while anyone is unemployed."
    },
    {
      "q": "A worker's wage rises 3% while prices rise 4%. Their real wage has:",
      "choices": ["Risen 3%", "Risen 7%", "Fallen about 1%", "Stayed the same"],
      "answer": 2,
      "explanation": "Correct: (c). Real change is roughly nominal minus inflation: 3% − 4% = −1%. (a) Is the nominal rise, ignoring prices. (b) Adds the two rates. (d) Would need wage growth equal to inflation."
    },
    {
      "q": "Which of these is NOT counted in GDP?",
      "choices": ["A loaf of bread sold in a shop", "A car built in Michigan", "Unpaid housework", "A haircut paid for in a salon"],
      "answer": 2,
      "explanation": "Correct: (c). Unpaid work has no market price, so GDP misses it. (a), (b), and (d) are all final goods or services sold at market prices inside the country."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — The Economy in the News Quick Reference</h3>\n<p><strong>GDP:</strong> market value of final goods and services produced inside a country in a period. Counts production, not well-being; leaves out unpaid work.</p>\n<p><strong>Growth rate = (new − old) ÷ old × 100.</strong> Worked anchor: ($20.6 − $20.0) ÷ $20.0 = 3%.</p>\n<p><strong>Inflation:</strong> CPI 300 → 312 is (312 − 300) ÷ 300 = 4%. Real = nominal ÷ price index × 100: $21.0T ÷ 105 × 100 = $20.0T.</p>\n<p><strong>Unemployment rate = unemployed ÷ labor force × 100:</strong> 8 ÷ 160 = 5%. Discouraged workers leave the labor force, so the rate can fall with no new jobs.</p>\n<p><strong>Watch out:</strong> divide by the OLD value for growth rates; ask nominal or real; ask who was counted in the unemployment rate.</p>\n<p><strong>Self-check:</strong> Take one headline from today's news and name the indicator, the change, and one thing it does not prove.</p>\n"
};
