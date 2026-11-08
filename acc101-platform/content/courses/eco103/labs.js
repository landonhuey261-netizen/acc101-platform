module.exports = [
  {
    "id": "gdp-inflation-real-data",
    "title": "GDP & Inflation from Real Data",
    "introHtml": "<p><strong>Step 0 — The data.</strong> This lab uses a small frozen table of real U.S. data, so every answer is fixed and checkable. <strong>Source and vintage:</strong> CPI-U annual averages (series CUUR0000SA0) from the U.S. Bureau of Labor Statistics, and real GDP (chained 2017 dollars, series GDPC1) from the Federal Reserve Bank of St. Louis FRED database (Bureau of Economic Analysis data), both as published in the FRED vintage of 29 October 2026. Unemployment rates are BLS annual averages. The question: <em>was the U.S. economy growing, and how fast were prices rising, in 2022–2024?</em> Good analysis means: use the right formula, divide by the <em>starting</em> value, keep two decimals, and never confuse a level with a rate.</p><p><strong>The frozen dataset.</strong> CPI-U annual average (1982–84 = 100): 2021 = 270.970; 2022 = 292.655; 2023 = 304.702; 2024 = 313.689. Real GDP, Q4 levels (billions of chained 2017 dollars): Q4 2022 = 22,272.546; Q4 2023 = 23,033.250; Q4 2024 = 23,641.759. Unemployment rate, annual average (BLS): 2021 = 5.4%; 2022 = 3.6%; 2023 = 3.6%; 2024 = 4.0%.</p><p><strong>Worked example first — the country of Mapleton (completed for you).</strong> Mapleton's CPI was 200.000 in Year 1 and 210.000 in Year 2. Inflation = (210.000 − 200.000) ÷ 200.000 × 100 = 10.000 ÷ 200.000 × 100 = <strong>5.00%</strong>. Its real GDP was $1,000.000 billion in Q4 of Year 1 and $1,030.000 billion in Q4 of Year 2. Growth = (1,030.000 − 1,000.000) ÷ 1,000.000 × 100 = <strong>3.00%</strong>. A basket that cost $100.00 in Year 1 would cost $100.00 × (210.000 ÷ 200.000) = <strong>$105.00</strong> in Year 2. Notice the pattern you will repeat: change ÷ starting value × 100, to two decimals. Now do the real U.S. numbers yourself below.</p><p><strong>A note on the numbers:</strong> the inflation rates you compute (8.00%, 4.12%, 2.95%) match the BLS's published annual-average rates (8.0%, 4.1%, 2.9%) once rounded to one decimal. The GDP growth rates here are Q4-to-Q4 (comparing the same quarter a year apart); the BEA's annual-average growth rates for the same years (2.5% in 2022, 2.9% in 2023, 2.8% in 2024, February 2025 vintage) are a different measure — same economy, different comparison — so do not expect them to match your Q4-to-Q4 answers.</p>",
    "taskHtml": "<p><strong>Step 0 — The data.</strong> Read the dataset in the intro: CPI-U annual averages for 2021–2024, real GDP for Q4 2022–Q4 2024, and annual unemployment rates. A good analysis starts by choosing the right series for the question: the CPI for prices, real GDP for output, the unemployment rate for jobs. For each row, enter the option number or the computed value asked for, to two decimal places where a percent or dollar figure is asked. The first scored row is the framing decision: which dataset answers the question?</p><p><strong>The formulas (use these exactly):</strong> Inflation rate = ((CPI this year − CPI last year) ÷ CPI last year) × 100. Real GDP growth (Q4 to Q4) = ((Real GDP this Q4 − Real GDP last Q4) ÷ Real GDP last Q4) × 100. Basket cost in a later year = $100 × (CPI later ÷ CPI earlier). Real value of $100 in an earlier year's dollars = $100 × (CPI earlier ÷ CPI later).</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: The question is 'how fast were prices rising and was output growing in 2022–2024?' Which dataset answers it? 1) CPI-U annual averages + quarterly real GDP (GDPC1) 2) The stock market index alone 3) Last month's weather in Chicago",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_framing",
            "expected": 1,
            "hint": "Prices need a price index (the CPI) and output needs real GDP — that is option 1. The stock market (2) tracks asset prices, not consumer prices or output, and the weather (3) is not economic data at all."
          }
        ]
      },
      {
        "label": "COMPUTED — Inflation in 2022: CPI-U was 270.970 in 2021 and 292.655 in 2022. What was the inflation rate, in percent to two decimals? (Enter the number only, e.g. 8.00.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_infl_2022",
            "expected": 8.0,
            "hint": "Inflation = (292.655 − 270.970) ÷ 270.970 × 100 = 21.685 ÷ 270.970 × 100 = 8.00%. The change (21.685) goes over the starting value (270.970), not the new one."
          }
        ]
      },
      {
        "label": "COMPUTED — Inflation in 2023: CPI-U was 292.655 in 2022 and 304.702 in 2023. What was the inflation rate, in percent to two decimals?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_infl_2023",
            "expected": 4.12,
            "hint": "Inflation = (304.702 − 292.655) ÷ 292.655 × 100 = 12.047 ÷ 292.655 × 100 = 4.12%. Note this is 4.12, not 4.10 — keep two decimals."
          }
        ]
      },
      {
        "label": "COMPUTED — Inflation in 2024: CPI-U was 304.702 in 2023 and 313.689 in 2024. What was the inflation rate, in percent to two decimals?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_infl_2024",
            "expected": 2.95,
            "hint": "Inflation = (313.689 − 304.702) ÷ 304.702 × 100 = 8.987 ÷ 304.702 × 100 = 2.95%. Rounded to one decimal this is the BLS's published 2.9%."
          }
        ]
      },
      {
        "label": "COMPUTED — Real GDP growth, Q4 2022 to Q4 2023: real GDP was 22,272.546 in Q4 2022 and 23,033.250 in Q4 2023 (billions of chained 2017 dollars). What was the growth rate, in percent to two decimals?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_gdp_2023",
            "expected": 3.42,
            "hint": "Growth = (23,033.250 − 22,272.546) ÷ 22,272.546 × 100 = 760.704 ÷ 22,272.546 × 100 = 3.42%. This is Q4-to-Q4 growth, not the BEA's annual-average figure."
          }
        ]
      },
      {
        "label": "COMPUTED — Real GDP growth, Q4 2023 to Q4 2024: real GDP was 23,033.250 in Q4 2023 and 23,641.759 in Q4 2024. What was the growth rate, in percent to two decimals?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_gdp_2024",
            "expected": 2.64,
            "hint": "Growth = (23,641.759 − 23,033.250) ÷ 23,033.250 × 100 = 608.509 ÷ 23,033.250 × 100 = 2.64%. Output grew, but more slowly than the year before."
          }
        ]
      },
      {
        "label": "COMPUTED — How many billions of chained 2017 dollars did real GDP rise from Q4 2023 to Q4 2024? (Enter the dollar amount to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_gdp_level",
            "expected": 608.51,
            "hint": "23,641.759 − 23,033.250 = 608.509, which is $608.51 billion to two decimals. This is the dollar change behind the 2.64% rate above."
          }
        ]
      },
      {
        "label": "COMPUTED — The unemployment rate (annual average) was 4.0% in 2024. Enter that rate as printed in the dataset. (Enter the number only.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_unemp_2024",
            "expected": 4.0,
            "hint": "The dataset gives the 2024 annual-average unemployment rate as 4.0%. This is a reading row — no calculation needed, just match the table."
          }
        ]
      },
      {
        "label": "COMPUTED — A basket that cost $100.00 in 2021 cost how much in 2024? Use CPI 270.970 (2021) and 313.689 (2024). (Enter the dollar amount to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_basket",
            "expected": 115.77,
            "hint": "Cost in 2024 = $100 × (313.689 ÷ 270.970) = $100 × 1.157652 = $115.77. Prices rose about 15.8% over the three years combined."
          }
        ]
      },
      {
        "label": "COMPUTED — What was $100.00 in 2024 dollars worth in 2021 dollars? Use the same two CPI values. (Enter the dollar amount to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_real100",
            "expected": 86.38,
            "hint": "Value in 2021 dollars = $100 × (270.970 ÷ 313.689) = $100 × 0.863817 = $86.38. A 2024 dollar buys what about 86 cents bought in 2021."
          }
        ]
      },
      {
        "label": "DECISION — Which year had the highest inflation in this dataset? 1) 2022 2) 2023 3) 2024",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_highest_infl",
            "expected": 1,
            "hint": "2022 inflation was 8.00%, against 4.12% in 2023 and 2.95% in 2024. Prices rose fastest in 2022 and then cooled — disinflation, not deflation, since prices still rose."
          }
        ]
      },
      {
        "label": "DECISION — Real GDP grew faster in which period, Q4 2022–Q4 2023 or Q4 2023–Q4 2024? 1) Q4 2022–Q4 2023 (3.42%) 2) Q4 2023–Q4 2024 (2.64%)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_faster_gdp",
            "expected": 1,
            "hint": "3.42% beats 2.64%, so growth was faster in the earlier period. Both periods grew — this is slower growth, not a shrinking economy."
          }
        ]
      },
      {
        "label": "COMPUTED — What was the average of the three inflation rates you computed (8.00%, 4.12%, 2.95%), in percent to two decimals? (Use the two-decimal rates.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_avg_infl",
            "expected": 5.02,
            "hint": "Average = (8.00 + 4.12 + 2.95) ÷ 3 = 15.07 ÷ 3 = 5.02%. Use the two-decimal rates you computed — the one-decimal published rates would give 5.00%, which is a different (rounded) answer."
          }
        ]
      },
      {
        "label": "DECISION — Which headline best fits this dataset? 1) 'Prices rose fastest in 2022, then cooled, while output kept growing' 2) 'Prices fell in 2024' 3) 'The economy shrank in 2024'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_headline",
            "expected": 1,
            "hint": "Inflation fell from 8.00% to 2.95% while real GDP grew 2.64% in the latest year — option 1. Option 2 is wrong (prices rose 2.95% in 2024 — that is disinflation, not deflation). Option 3 is wrong (real GDP rose $608.51 billion)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "gdp-inflation-real-data.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: The question is 'how fast were prices rising and was output growing in 2022–2024?' Which dataset answers it? 1) CPI-U annual averages + quarterly real GDP (GDPC1) 2) The stock market index alone 3) Last month's weather in Chicago\",\n\"COMPUTED — Inflation in 2022: CPI-U was 270.970 in 2021 and 292.655 in 2022. What was the inflation rate, in percent to two decimals? (Enter the number only, e.g. 8.00.)\",\n\"COMPUTED — Inflation in 2023: CPI-U was 292.655 in 2022 and 304.702 in 2023. What was the inflation rate, in percent to two decimals?\",\n\"COMPUTED — Inflation in 2024: CPI-U was 304.702 in 2023 and 313.689 in 2024. What was the inflation rate, in percent to two decimals?\",\n\"COMPUTED — Real GDP growth, Q4 2022 to Q4 2023: real GDP was 22,272.546 in Q4 2022 and 23,033.250 in Q4 2023 (billions of chained 2017 dollars). What was the growth rate, in percent to two decimals?\",\n\"COMPUTED — Real GDP growth, Q4 2023 to Q4 2024: real GDP was 23,033.250 in Q4 2023 and 23,641.759 in Q4 2024. What was the growth rate, in percent to two decimals?\",\n\"COMPUTED — How many billions of chained 2017 dollars did real GDP rise from Q4 2023 to Q4 2024? (Enter the dollar amount to two decimals.)\",\n\"COMPUTED — The unemployment rate (annual average) was 4.0% in 2024. Enter that rate as printed in the dataset. (Enter the number only.)\",\n\"COMPUTED — A basket that cost $100.00 in 2021 cost how much in 2024? Use CPI 270.970 (2021) and 313.689 (2024). (Enter the dollar amount to two decimals.)\",\n\"COMPUTED — What was $100.00 in 2024 dollars worth in 2021 dollars? Use the same two CPI values. (Enter the dollar amount to two decimals.)\",\n\"DECISION — Which year had the highest inflation in this dataset? 1) 2022 2) 2023 3) 2024\",\n\"DECISION — Real GDP grew faster in which period, Q4 2022–Q4 2023 or Q4 2023–Q4 2024? 1) Q4 2022–Q4 2023 (3.42%) 2) Q4 2023–Q4 2024 (2.64%)\",\n\"COMPUTED — What was the average of the three inflation rates you computed (8.00%, 4.12%, 2.95%), in percent to two decimals? (Use the two-decimal rates.)\",\n\"DECISION — Which headline best fits this dataset? 1) 'Prices rose fastest in 2022, then cooled, while output kept growing' 2) 'Prices fell in 2024' 3) 'The economy shrank in 2024'\",\n"
  }
];
