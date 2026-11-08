module.exports = {
  "number": 7,
  "slug": "index-numbers-measuring-change",
  "title": "Index Numbers & Measuring Change Over Time",
  "estTime": "3–4 hours",
  "objectives": [
    "Build an index number from a base year and explain what a value of 112 means.",
    "Compute inflation from a CPI series and distinguish it from the price level.",
    "Convert a nominal value to a real value using a price index.",
    "Explain why the choice of base year changes the index numbers but not the growth rates.",
    "Spot the main biases in a price index and say who they affect."
  ],
  "sections": [
    {
      "heading": "What an Index Number Is",
      "html": "<p>An <strong>index number</strong> rescales a series so the base year equals 100. If a basket of goods cost $200 in 2020 (the base year) and $224 in 2022, the 2022 index is (224 ÷ 200) × 100 = <strong>112.0</strong>. The index says: prices were 12% above the base year. The dollar amounts disappear; only the change remains, which is exactly what makes indexes comparable across countries and decades.</p><p>Read an index like a sentence: 112 means “12% above base,” 95 means “5% below base,” and 100 means “same as base.” An index of 240 does not mean prices are $240 — it means they are 2.4 times the base-year level.</p><div class=\"formula\">Index in year t = (Value in year t ÷ Value in base year) × 100</div>"
    },
    {
      "heading": "The CPI and Inflation",
      "html": "<p>The <strong>Consumer Price Index (CPI)</strong> is the best-known index: it tracks the cost of a basket of goods and services bought by a typical urban household, and the BLS publishes it monthly. <strong>Inflation</strong> is the percent change in the CPI — not the level of the CPI. If the CPI rises from 100 to 105, inflation is 5%; if it stays at 105, inflation is 0% even though prices are still 5% above base.</p><p><em>Example.</em> Basket costs: 2020 $200, 2021 $210, 2022 $224, 2023 $231. Indexes (base 2020 = 100): 100, 105.0, 112.0, 115.5. Inflation: 2021 = (210−200) ÷ 200 = <strong>5.0%</strong>; 2022 = (224−210) ÷ 210 = <strong>6.7%</strong>; 2023 = (231−224) ÷ 224 = <strong>3.1%</strong>. Inflation slowed in 2023 even though prices kept rising — a common source of confusion.</p>"
    },
    {
      "heading": "Real vs. Nominal: Deflating",
      "html": "<p>A <strong>nominal</strong> value is measured in the dollars of its own year; a <strong>real</strong> value is measured in the dollars of one base year, with price changes removed. To convert, divide by the price index and multiply by 100: Real = (Nominal ÷ Index) × 100.</p><p><em>Example.</em> A worker earned $50,000 in a year when the CPI was 112 (base year = 100). Real earnings = ($50,000 ÷ 112) × 100 = <strong>$44,643</strong> in base-year dollars. Her pay rose in dollars but bought less than $50,000 would have bought in the base year. Whenever someone says “wages rose 5%,” ask: nominal or real?</p><div class=\"callout\"><strong>Key idea:</strong> Real = (Nominal ÷ Price index) × 100. Always ask whether a dollar figure is nominal or real before comparing it across years.</div>"
    },
    {
      "heading": "Base Years and Bias",
      "html": "<p>Changing the base year rescales every index number but leaves every growth rate unchanged: with the basket above, inflation in 2022 is 6.7% whether the base is 2020 or 2021, because the ratio of two years' costs does not depend on the base. That is a useful check — if changing the base changes your growth rate, you made an arithmetic error.</p><p>Price indexes also have biases. <strong>Substitution bias:</strong> when beef gets expensive, shoppers buy chicken, but a fixed basket keeps buying beef, so the index overstates the cost of living. <strong>Quality bias:</strong> a phone that costs the same but does far more is not the same product. These biases are small in any one year but they matter — which is why the BLS updates the basket and why economists treat the CPI as a good measure, not a perfect one.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Index = (year ÷ base) × 100; 112 means 12% above base.</li><li>Inflation is the percent change in the CPI, not the level of the CPI.</li><li>Real = (nominal ÷ index) × 100 — always ask nominal or real.</li><li>Changing the base year rescales indexes but not growth rates.</li><li>Substitution and quality bias make the CPI overstate the cost of living slightly.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “inflation is 112.” 112 is the index level; inflation is the change — 6.7% in the example.</div><div class=\"callout\"><strong>Common mistake:</strong> Comparing nominal dollars across years. $50,000 in 2022 is not $50,000 in 2020 — deflate first, compare second.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Index number",
      "def": "A value rescaled so the base year equals 100; it shows change relative to the base."
    },
    {
      "term": "Base year",
      "def": "The year set to 100 in an index; all other years are compared with it."
    },
    {
      "term": "Consumer Price Index (CPI)",
      "def": "The BLS index tracking the cost of a typical urban household's basket of goods and services."
    },
    {
      "term": "Inflation",
      "def": "The percent change in a price index over a period — not the level of the index."
    },
    {
      "term": "Price level",
      "def": "The level of prices at a moment, measured by an index such as the CPI."
    },
    {
      "term": "Nominal value",
      "def": "A value in the dollars of its own year, not adjusted for price changes."
    },
    {
      "term": "Real value",
      "def": "A value in base-year dollars, with price changes removed."
    },
    {
      "term": "Deflating",
      "def": "Converting a nominal value to a real value by dividing by a price index."
    },
    {
      "term": "Market basket",
      "def": "The fixed set of goods and services whose cost a price index tracks."
    },
    {
      "term": "Substitution bias",
      "def": "The CPI's tendency to overstate the cost of living because shoppers switch away from goods that get expensive."
    },
    {
      "term": "Quality bias",
      "def": "The CPI's difficulty in handling products that improve in quality at the same price."
    },
    {
      "term": "Cost of living",
      "def": "What it costs to maintain a given standard of living; the CPI is an estimate of its change."
    },
    {
      "term": "Rebasing",
      "def": "Changing an index's base year, which rescales the numbers but not the growth rates."
    },
    {
      "term": "Deflator",
      "def": "A price index used to convert nominal values to real values, such as the GDP deflator."
    }
  ],
  "video": {
    "title": "Inflation and CPI Practice- Macro 2.4",
    "embedUrl": "https://www.youtube.com/embed/JW7IQ45_up8",
    "note": "Jacob Clifford (AC/DC Econ) works CPI and inflation practice problems step by step: market baskets, index numbers, and inflation rates. Pause the video and try each problem before he solves it.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> <em>Example data.</em> A basket cost $200 in 2020 (base year), $210 in 2021, and $224 in 2022. (a) Compute the index for 2021 and 2022. (b) Compute inflation in 2022.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 2021 index = (210 ÷ 200) × 100 = <strong>105.0</strong>. Step 2: 2022 index = (224 ÷ 200) × 100 = <strong>112.0</strong>. Step 3: Inflation in 2022 = (224 − 210) ÷ 210 = 14 ÷ 210 = 0.0667 = <strong>6.7%</strong>. (Using the indexes gives the same answer: (112 − 105) ÷ 105 = 6.7%.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> <em>Example data.</em> The basket cost $224 in 2022 and $231 in 2023. (a) What is the 2023 index (base 2020 = 100)? (b) What was inflation in 2023?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 2023 index = (231 ÷ 200) × 100 = <strong>115.5</strong>. Step 2: Inflation = (231 − 224) ÷ 224 = 7 ÷ 224 = 0.03125 = <strong>3.1%</strong>. Step 3: Prices still rose, but inflation slowed from 6.7% to 3.1%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A worker earned $50,000 in a year when the CPI was 112 (base year = 100). (a) Write the deflating formula. (b) Compute her real earnings in base-year dollars.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Real = (Nominal ÷ Index) × 100. Step 2: Real = ($50,000 ÷ 112) × 100 = $50,000 × 0.8929 = <strong>$44,643</strong> (rounded). Step 3: Her pay bought what $44,643 would have bought in the base year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A CPI index is 240 with base years 1982–84 = 100. (a) What does 240 mean in plain words? (b) If the index rises to 252, what is inflation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 240 means prices are <strong>2.4 times</strong> (140% above) the 1982–84 level. Step 2: Inflation = (252 − 240) ÷ 240 = 12 ÷ 240 = 0.05 = <strong>5.0%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Rebase the basket example to 2021 = 100. (a) What is the 2022 index on the new base? (b) Show that inflation in 2022 is still 6.7%.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New 2022 index = (224 ÷ 210) × 100 = <strong>106.7</strong>. Step 2: Inflation = (106.7 − 100) ÷ 100 = <strong>6.7%</strong>. Step 3: Rebasing changed the index (112.0 → 106.7) but not the growth rate — as it must.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Beef becomes expensive and shoppers switch to chicken, but the CPI basket keeps its old beef quantity. (a) What bias is this? (b) Does the CPI overstate or understate the true cost of living?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>substitution bias</strong>. Step 2: The CPI <strong>overstates</strong> the cost of living, because real shoppers avoid the expensive good while the fixed basket keeps buying it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A basket costs $200 in the base year and $224 later. The index is:",
      "choices": [
        "24",
        "112",
        "224",
        "12"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (224 ÷ 200) × 100 = 112. (a) is the dollar change divided by 10. (c) is the later cost itself. (d) is the percent above base, not the index."
    },
    {
      "q": "An index of 112 means prices are:",
      "choices": [
        "$112",
        "12% above the base year",
        "112% above the base year",
        "12% below the base year"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 112 − 100 = 12 points above base. (a) An index is not a dollar amount. (c) would be an index of 212. (d) would be an index of 88."
    },
    {
      "q": "Inflation is:",
      "choices": [
        "The level of the CPI",
        "The percent change in the CPI",
        "The price of the basket in dollars",
        "The base year"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inflation is a rate of change. (a) The level is the price level. (c) is the basket cost. (d) is the reference year."
    },
    {
      "q": "Basket: 2021 $210, 2022 $224. Inflation in 2022 is:",
      "choices": [
        "6.7%",
        "5.0%",
        "14%",
        "112%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (224 − 210) ÷ 210 = 6.7%. (b) is 2021's inflation from a $200 base. (c) is the dollar change. (d) is the 2022 index."
    },
    {
      "q": "Nominal $50,000 with a CPI of 112 (base = 100) is worth in real terms:",
      "choices": [
        "$50,000",
        "$56,000",
        "$44,643",
        "$44,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ($50,000 ÷ 112) × 100 = $44,643. (a) ignores price changes. (b) multiplies instead of dividing. (d) is a rough guess, not the computed value."
    },
    {
      "q": "Rebasing an index to a new base year:",
      "choices": [
        "Changes the index numbers but not the growth rates",
        "Changes the growth rates but not the index numbers",
        "Changes both",
        "Changes neither"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Growth rates are ratios of two years' values and do not depend on the base. (b) reverses the truth. (c) and (d) are wrong."
    },
    {
      "q": "Substitution bias makes the CPI:",
      "choices": [
        "Understate the cost of living",
        "Overstate the cost of living",
        "Measure it exactly",
        "Irrelevant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fixed basket keeps buying goods shoppers have abandoned, so it overstates what life actually costs. (a) is the opposite. (c) No index is exact. (d) The bias matters for policy."
    },
    {
      "q": "If the CPI stays at 105 for a year, inflation that year is:",
      "choices": [
        "5%",
        "105%",
        "0%",
        "Cannot be determined"
      ],
      "answer": 2,
      "explanation": "Correct: (c). No change in the index means no inflation that year, even though prices are 5% above base. (a) is the cumulative rise since base. (b) confuses the level with the rate. (d) It can be determined: (105 − 105) ÷ 105 = 0%."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Index Numbers: Quick Reference</h3>\n<div class=\"formula\">Index = (Year ÷ Base) × 100 &nbsp;|&nbsp; Inflation = (New index − Old index) ÷ Old index &nbsp;|&nbsp; Real = (Nominal ÷ Index) × 100</div>\n<p><strong>Read an index:</strong> 112 = 12% above base · 95 = 5% below base · 100 = same as base.</p>\n<p><strong>Worked anchor (basket $200 → $210 → $224 → $231):</strong> Indexes 100, 105.0, 112.0, 115.5 · Inflation 5.0%, 6.7%, 3.1%.</p>\n<p><strong>Rebasing:</strong> Changes index numbers, never growth rates. <strong>Biases:</strong> Substitution and quality bias overstate the cost of living slightly.</p>\n<p><strong>Watch out:</strong> “Inflation is 112” is wrong — 112 is the level; inflation is the change. Always ask nominal or real.</p>\n<p><strong>Self-check:</strong> Pick any two years' basket costs, compute the index and the inflation rate, then rebase and check the rate is unchanged.</p>\n"
};
