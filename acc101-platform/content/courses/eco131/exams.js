module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "The analytics workflow in order is:",
        "choices": [
          "Get, clean, ask, analyse, present",
          "Ask, get, clean, analyse, present",
          "Clean, get, ask, present, analyse",
          "Ask, clean, get, present, analyse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ask first, then get, clean, analyse, present last. (a) starts with getting data before knowing the question. (c) starts with cleaning. (d) cleans before getting data."
      },
      {
        "module": 1,
        "q": "“Did the U.S. unemployment rate rise between January and December 2024?” is a good question because it:",
        "choices": [
          "Is about the whole economy",
          "Names a variable and a comparison",
          "Has a yes-or-no answer",
          "Uses a big word"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It names the variable (unemployment rate) and the comparison (January vs. December). (a) It is about one series. (c) A yes/no answer alone does not make a question good. (d) Big words do not help."
      },
      {
        "module": 1,
        "q": "“Unemployment averaged 4.0% in 2024” is:",
        "choices": [
          "Diagnostic analysis",
          "Predictive analysis",
          "Descriptive analysis",
          "Prescriptive analysis"
        ],
        "answer": 2,
        "explanation": "Correct: (c). It describes what happened. (a) would ask why. (b) would forecast. (d) would recommend an action."
      },
      {
        "module": 1,
        "q": "Which question is predictive?",
        "choices": [
          "What was the average price last year?",
          "Why did the price rise last year?",
          "What will the price be next year?",
          "Should we cut the price?"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Predictive looks forward and is uncertain. (a) is descriptive. (b) is diagnostic. (d) is prescriptive."
      },
      {
        "module": 2,
        "q": "The FRED series ID for the U.S. unemployment rate is:",
        "choices": [
          "GDPC1",
          "CPIAUCSL",
          "UNRATE",
          "GDP"
        ],
        "answer": 2,
        "explanation": "Correct: (c). UNRATE is the unemployment rate. (a) GDPC1 is real GDP. (b) CPIAUCSL is the consumer price index. (d) GDP is not a FRED ID."
      },
      {
        "module": 2,
        "q": "Who produces the data behind UNRATE?",
        "choices": [
          "The Federal Reserve Bank of St. Louis",
          "The World Bank",
          "The Bureau of Labor Statistics",
          "The Census Bureau"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The BLS produces it from the Current Population Survey. (a) The St. Louis Fed runs FRED, the library. (b) The World Bank covers other countries. (d) The Census Bureau does population and income surveys."
      },
      {
        "module": 2,
        "q": "“Seasonally adjusted” means:",
        "choices": [
          "Data are only published in summer",
          "Regular seasonal patterns have been removed",
          "Data are adjusted for inflation",
          "The series has been rounded"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Seasonal adjustment removes regular seasonal ups and downs. (a) is nonsense. (c) That is inflation adjustment. (d) Rounding does not remove seasons."
      },
      {
        "module": 2,
        "q": "For comparable GDP per person across many countries, the best source is:",
        "choices": [
          "The BLS",
          "The Census Bureau",
          "The World Bank",
          "A newspaper"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The World Bank's World Development Indicators are built for cross-country comparison. (a) and (b) cover the U.S. only. (d) A newspaper is a secondary copy."
      },
      {
        "module": 2,
        "q": "A vintage matters because:",
        "choices": [
          "Data are revised, so the same month can have different values in different downloads",
          "Old data are always wrong",
          "New data are always wrong",
          "FRED deletes old series"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Revisions change earlier values, so record the download date. (b) and (c) are false — revisions can go either way. (d) FRED keeps history."
      },
      {
        "module": 3,
        "q": "Tidy data means:",
        "choices": [
          "One observation per row, one variable per column",
          "One table per page, in any layout",
          "Merging cells to make titles",
          "Putting notes inside the data range"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rows are observations, columns are variables. (b) Layout still matters. (c) Merged cells break formulas. (d) Notes belong outside the data range."
      },
      {
        "module": 3,
        "q": "The growth rate from 120 to 135 is:",
        "choices": [
          "15%",
          "12.5%",
          "11.1%",
          "135%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (135 − 120) ÷ 120 = 12.5%. (a) is the raw change, 15. (c) divides by 135 instead of 120. (d) is not a growth rate."
      },
      {
        "module": 3,
        "q": "A rise from 3.7% to 4.1% is:",
        "choices": [
          "0.4 percentage points and 10.8% in percent terms",
          "0.4% in both measures",
          "10.8 percentage points",
          "4.1 percentage points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Points: 4.1 − 3.7 = 0.4. Percent: 0.4 ÷ 3.7 = 10.8%. (b) confuses the two measures. (c) swaps them. (d) is the December value itself."
      },
      {
        "module": 3,
        "q": "In =C5/$B$2*100, the $ signs mean:",
        "choices": [
          "The result is in dollars",
          "B2 stays fixed when the formula is copied",
          "C5 stays fixed",
          "The formula is an error"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $ locks the reference. (a) $ in a formula is a lock, not a currency sign. (c) C5 has no $ signs, so it moves. (d) It is a correct, standard formula."
      },
      {
        "module": 3,
        "q": "XLOOKUP is preferred over VLOOKUP mainly because it:",
        "choices": [
          "Only works on Mondays",
          "Searches in any direction and allows a “not found” message",
          "Is slower",
          "Needs no table"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XLOOKUP is more flexible and safer. (a) is nonsense. (c) It is not slower in any way that matters here. (d) It still needs a lookup table."
      },
      {
        "module": 4,
        "q": "The FIRST step in cleaning data is to:",
        "choices": [
          "Delete all blanks",
          "Find the mess — sort, count blanks, check ranges and spellings",
          "Fill blanks with the mean",
          "Make a chart"
        ],
        "answer": 1,
        "explanation": "Correct: (b). You must see the problems before fixing them. (a) Deleting first destroys evidence. (c) Filling first invents data. (d) Charting messy data just charts the mess."
      },
      {
        "module": 4,
        "q": "Filling a missing unemployment rate with 0% is wrong because:",
        "choices": [
          "Zero is hard to type",
          "Zero is a value, not an absence — it drags the mean down",
          "Blanks are prettier",
          "The spreadsheet forbids it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0% is a real measurement of no unemployment, not “unknown.” (a) Typing is not the issue. (c) Looks do not matter. (d) The spreadsheet allows it — that is the danger."
      },
      {
        "module": 4,
        "q": "“MI”, “Michigan”, and “michigan” in one column will be counted as:",
        "choices": [
          "One category",
          "Two categories",
          "Three categories",
          "No categories"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A pivot table treats each spelling as a different category. (a) is what you want after standardising. (b) miscounts. (d) They are counted, wrongly."
      },
      {
        "module": 4,
        "q": "An outlier should be:",
        "choices": [
          "Deleted immediately",
          "Investigated first — it may be real, like a pandemic month",
          "Ignored in every calculation",
          "Replaced with the mean"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Outliers are questions first. (a) Deleting real data is dishonest. (c) Ignoring without a reason hides evidence. (d) Replacing invents data."
      },
      {
        "module": 5,
        "q": "The right chart for a time series is a:",
        "choices": [
          "Pie chart",
          "Bar chart",
          "Line chart",
          "Pictogram"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Lines show change over time. (a) Pies show parts of one whole. (b) Bars compare categories. (d) Pictograms mislead the eye."
      },
      {
        "module": 5,
        "q": "A bar chart with values 48 and 52 and an axis starting at 45 makes the difference look:",
        "choices": [
          "8% — the true difference",
          "More than twice as big",
          "Smaller than it is",
          "Exactly right"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Bar heights above 45 are 3 and 7, a ratio of 2.33, while the values differ by only 8%. (a) is the true difference, hidden by the trick. (c) is the opposite effect. (d) is false — the axis is truncated."
      },
      {
        "module": 5,
        "q": "Showing only the three best months of a year is called:",
        "choices": [
          "Seasonal adjustment",
          "Cherry-picking",
          "Indexing",
          "Smoothing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cherry-picking hides the rest of the data. (a) Seasonal adjustment is a legitimate, disclosed method. (c) Indexing rescales. (d) Smoothing averages out noise."
      },
      {
        "module": 6,
        "q": "The mean of 120, 135, and 128 is:",
        "choices": [
          "120",
          "127.67",
          "128",
          "383"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (120 + 135 + 128) ÷ 3 = 383 ÷ 3 = 127.67. (a) is the smallest value. (c) is the median of the three. (d) is the sum, not the mean."
      },
      {
        "module": 6,
        "q": "Nine people earn $40,000 and one earns $400,000. The median is:",
        "choices": [
          "$40,000",
          "$76,000",
          "$400,000",
          "$44,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sorted, the middle values are $40,000. (b) is the mean, pulled up by the high earner. (c) is the outlier. (d) is neither mean nor median."
      },
      {
        "module": 6,
        "q": "Values 2, 4, 6, 8, 10 have a standard deviation of about:",
        "choices": [
          "2.83",
          "8",
          "6",
          "40"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Variance is 8, so the standard deviation is √8 ≈ 2.83. (b) is the variance, not its square root. (c) is the mean. (d) is the sum of squared distances."
      },
      {
        "module": 6,
        "q": "A dataset with mean 90 and median 60 is:",
        "choices": [
          "Symmetric",
          "Right-skewed",
          "Left-skewed",
          "Bimodal"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mean above median means a long right tail pulled the mean up. (a) would need mean ≈ median. (c) would need mean below median. (d) Bimodal means two peaks, which these two numbers do not show."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 90,
    "passPercent": 70,
    "coverage": "All modules",
    "questions": [
      {
        "module": 1,
        "q": "A predictive statement should always be labelled as:",
        "choices": [
          "A proven fact",
          "A recommendation",
          "Uncertain — a forecast, not a measurement",
          "A description of the past"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Forecasts are uncertain by nature. (a) is wrong — the future cannot be measured yet. (b) A recommendation is prescriptive. (d) The past is descriptive."
      },
      {
        "module": 1,
        "q": "The main risk of starting with the data instead of the question is:",
        "choices": [
          "The data will be too small",
          "You will make charts that answer nobody's question",
          "The spreadsheet will crash",
          "You will need more data"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Without a question, analysis has no target. (a) Size is not the issue. (c) Spreadsheets do not crash from this. (d) More data does not fix a missing question."
      },
      {
        "module": 2,
        "q": "UNRATE does NOT count:",
        "choices": [
          "People without a job who looked for work in the last four weeks",
          "People in the labour force",
          "Discouraged workers who stopped looking for work",
          "People who are unemployed as a percent of the labour force"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Discouraged workers who stopped looking are outside the official definition. (a) and (b) describe who IS counted. (d) is the definition of the rate itself."
      },
      {
        "module": 2,
        "q": "Before trusting a FRED series, you should check its:",
        "choices": [
          "Colour scheme",
          "Units, frequency, source, and vintage",
          "Number of downloads",
          "Author's opinions"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Units, frequency, source, and vintage decide what the numbers mean. (a) Colour is presentation. (c) Popularity is not accuracy. (d) Official statistics do not carry opinions."
      },
      {
        "module": 3,
        "q": "You should type a formula instead of an answer because:",
        "choices": [
          "Formulas look fancier",
          "A formula updates itself when the data are revised",
          "Answers are not allowed",
          "Formulas are shorter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A typed answer goes stale when data change; a formula recomputes. (a) Looks do not matter. (c) Answers are fine as outputs of formulas. (d) Formulas are often longer."
      },
      {
        "module": 3,
        "q": "With VLOOKUP, you should end the formula with FALSE to:",
        "choices": [
          "Make it faster",
          "Get an exact match instead of an approximate one",
          "Hide errors",
          "Sort the table"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FALSE forces an exact match; without it VLOOKUP may return the nearest value below, silently wrong. (a) Speed is not the issue. (c) Errors still show. (d) VLOOKUP does not sort."
      },
      {
        "module": 4,
        "q": "The safest way to store dates is:",
        "choices": [
          "As text like 03/04/2024",
          "As real dates in YYYY-MM-DD format",
          "As month names only",
          "As numbers like 03042024"
        ],
        "answer": 1,
        "explanation": "Correct: (b). YYYY-MM-DD is unambiguous everywhere. (a) 03/04 means different dates in different countries. (c) Month names lose the year and day. (d) Plain numbers are not dates to a spreadsheet."
      },
      {
        "module": 4,
        "q": "Before cleaning, you should keep:",
        "choices": [
          "Only the cleaned copy",
          "The raw file untouched, and clean a copy",
          "A screenshot of the mess",
          "Nothing — cleaning is final"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The untouched raw file is your proof. (a) Leaves no way to check changes. (c) A screenshot is not data. (d) Cleaning must always be reversible."
      },
      {
        "module": 5,
        "q": "A pie chart should be used when:",
        "choices": [
          "Showing change over time",
          "Comparing ten categories",
          "Showing parts of one whole with a few slices",
          "Showing a relationship between two variables"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Pies show parts of a whole. (a) needs a line chart. (b) Ten slices are unreadable. (d) needs a scatter plot."
      },
      {
        "module": 5,
        "q": "Doubling both the height and width of a pictogram makes its area:",
        "choices": [
          "Twice as big",
          "Four times as big",
          "The same",
          "Half as big"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = height × width, so 2 × 2 = 4. (a) is true only if one dimension doubles. (c) and (d) are wrong."
      },
      {
        "module": 6,
        "q": "For house prices in a town with a few mansions, the best “typical” summary is the:",
        "choices": [
          "Mean",
          "Median",
          "Mode",
          "Range"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The median resists the mansions' pull. (a) The mean is dragged up by outliers. (c) The mode is rarely useful for prices. (d) The range measures spread, not centre."
      },
      {
        "module": 6,
        "q": "The range of 120, 135, 128, 150, 162, 158, 175, 180, 172, 190, 205, 220 is:",
        "choices": [
          "100",
          "166.25",
          "167",
          "220"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 220 − 120 = 100. (b) is the mean. (c) is the median. (d) is the largest value, not the range."
      },
      {
        "module": 7,
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
        "module": 7,
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
        "module": 7,
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
        "module": 7,
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
        "module": 7,
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
        "module": 7,
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
        "module": 7,
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
        "module": 8,
        "q": "Which component repeats on a fixed calendar?",
        "choices": [
          "Trend",
          "Seasonal",
          "Cyclical",
          "Irregular"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Seasonal patterns repeat every 12 months, 4 quarters, or 7 days. (a) Trend is the long-run direction. (c) Cycles have no fixed length. (d) Irregular is one-off shocks."
      },
      {
        "module": 8,
        "q": "The 3-month moving average of 3.7, 3.9, 3.8 is:",
        "choices": [
          "3.7",
          "3.8",
          "3.9",
          "11.4"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (3.7 + 3.9 + 3.8) ÷ 3 = 11.4 ÷ 3 = 3.8. (a) is the first value. (c) is the second value. (d) is the sum, not the average."
      },
      {
        "module": 8,
        "q": "Seasonal adjustment exists to:",
        "choices": [
          "Remove recessions from the data",
          "Remove the usual calendar pattern so month-to-month changes show the economy",
          "Make the data look smoother for presentations",
          "Delete outliers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It removes the calendar, not the economy. (a) Recessions are cyclical, not seasonal. (c) Smooth looks are a side effect, not the purpose. (d) Outliers stay in the data."
      },
      {
        "module": 8,
        "q": "Unadjusted January unemployment is 4.1% and seasonally adjusted is 3.7%. The seasonal effect is:",
        "choices": [
          "0.4 points",
          "7.8 points",
          "3.7 points",
          "4.1 points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 4.1 − 3.7 = 0.4. (b) adds the two values. (c) and (d) are the rates themselves."
      },
      {
        "module": 8,
        "q": "A business cycle is:",
        "choices": [
          "Seasonal, with a fixed 12-month period",
          "Cyclical, with an irregular length",
          "The same as a trend",
          "Always exactly 10 years"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Booms and recessions last varying lengths. (a) describes seasonality. (c) Trend is the long-run direction. (d) No cycle has a fixed length."
      },
      {
        "module": 9,
        "q": "First-half 2024 UNRATE values sum to 23.4 over 6 months. The mean is:",
        "choices": [
          "3.7%",
          "3.9%",
          "4.1%",
          "23.4%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 23.4 ÷ 6 = 3.9. (a) is January's value. (c) is June's value. (d) is the sum, not the mean."
      },
      {
        "module": 9,
        "q": "Second-half mean 4.17% minus first-half mean 3.9% is:",
        "choices": [
          "0.27 points",
          "0.17 points",
          "4.17 points",
          "8.07 points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 4.17 − 3.9 = 0.27. (b) is a subtraction error. (c) is the second-half mean itself. (d) adds the two means."
      },
      {
        "module": 9,
        "q": "When charting two series with different units, an honest fix is to:",
        "choices": [
          "Plot both on one unlabelled axis",
          "Use a dual axis with both axes labelled, or index both to 100",
          "Delete the smaller series",
          "Multiply one series until it fits"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Both fixes keep the units visible and honest. (a) hides the unit difference. (c) throws away data. (d) distorts the values."
      },
      {
        "module": 9,
        "q": "Two lines moving together prove:",
        "choices": [
          "Causation",
          "Correlation — a clue, not proof of cause",
          "Nothing at all",
          "That the data are wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Correlation is a clue for the next question. (a) is the classic error. (c) is too strong — co-movement is real information. (d) is false."
      },
      {
        "module": 10,
        "q": "A table that stands alone needs:",
        "choices": [
          "A title stating what it shows, headers with units, and a source line",
          "As many rows as possible",
          "No title, so readers focus on numbers",
          "Merged cells"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Title, units, and source let a reader understand it without the surrounding text. (b) Long tables belong in an appendix. (c) A titleless table is a puzzle. (d) Merged cells break sorting and formulas."
      },
      {
        "module": 10,
        "q": "The correct order for a data story is:",
        "choices": [
          "So what → evidence → hook → limit",
          "Hook → evidence → limit → so what",
          "Evidence → hook → so what → limit",
          "Limit → hook → evidence → so what"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hook, then evidence, then the limit, then the implication. (a) starts with the conclusion. (c) puts the hook second. (d) starts with the limit."
      },
      {
        "module": 10,
        "q": "“The index was 112” is best translated for a non-expert as:",
        "choices": [
          "The index was 112",
          "Prices were 12% above the 2020 level",
          "The CPI rose",
          "Inflation was 112"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Plain words, no jargon. (a) repeats the jargon. (c) is true but less precise. (d) confuses the index level with inflation."
      },
      {
        "module": 11,
        "q": "Showing only the months that support a claim is:",
        "choices": [
          "Seasonal adjustment",
          "Cherry-picking",
          "Indexing",
          "Cleaning"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cherry-picking hides the rest of the data. (a) Seasonal adjustment is a legitimate, disclosed method. (c) Indexing rescales. (d) Cleaning fixes errors, it does not hide data."
      },
      {
        "module": 11,
        "q": "Saying data “prove” something when they only suggest it is:",
        "choices": [
          "Overclaiming",
          "Underclaiming",
          "Describing",
          "Forecasting"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Overclaiming states more certainty than the evidence supports. (b) is the opposite. (c) Describing states what happened. (d) Forecasting is about the future."
      },
      {
        "module": 11,
        "q": "When data contradict what you hoped to find, the honest move is to:",
        "choices": [
          "Drop the awkward months",
          "Report the result plainly after one method check",
          "Switch from the mean to the median",
          "Redefine the question"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Report what you found. (a), (c), and (d) are all ways of hiding an unwelcome result."
      },
      {
        "module": 11,
        "q": "An honest disclosure line names:",
        "choices": [
          "Source, vintage, method, and limits",
          "Only the conclusion",
          "The software version only",
          "The author's opinion"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Those four let a reader check the work. (b) A conclusion alone cannot be checked. (c) Software is a detail. (d) Opinions are not disclosures."
      },
      {
        "module": 12,
        "q": "The 2024 UNRATE mean (sum 48.4 over 12 months) is:",
        "choices": [
          "4.1%",
          "4.03%",
          "3.9%",
          "48.4%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 48.4 ÷ 12 = 4.03. (a) is the median. (c) is the first-half mean. (d) is the sum, not the mean."
      },
      {
        "module": 12,
        "q": "Jan 3.7% to Dec 4.1% is a percent change of:",
        "choices": [
          "0.4%",
          "4.0%",
          "10.8%",
          "110.8%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). (4.1 − 3.7) ÷ 3.7 = 10.8%. (a) is the change in points. (b) is a wrong division. (d) is the December index, not the change."
      },
      {
        "module": 12,
        "q": "The December 2024 index with January = 100 is:",
        "choices": [
          "100",
          "104",
          "110.8",
          "4.1"
        ],
        "answer": 2,
        "explanation": "Correct: (c). (4.1 ÷ 3.7) × 100 = 110.8. (a) is January's index. (b) is a wrong value. (d) is the December rate itself."
      },
      {
        "module": 12,
        "q": "A complete analysis is finished when:",
        "choices": [
          "The chart looks good",
          "Someone who was not in the room can read it, check the source, and trust the answer",
          "The mean is computed",
          "The data are downloaded"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Reproducibility and trust are the finish line. (a) Looks are not enough. (c) A mean is one step. (d) Downloading is the start."
      },
      {
        "module": 12,
        "q": "The course workflow in order is:",
        "choices": [
          "Get, ask, clean, analyse, present",
          "Ask, get, clean, analyse, present",
          "Clean, ask, get, present, analyse",
          "Ask, clean, get, present, analyse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ask first, then get, clean, analyse, and present last. The other orders start with the wrong step."
      }
    ]
  }
};
