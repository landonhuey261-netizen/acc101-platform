module.exports = [
  {
    "id": "fred-data-analysis",
    "title": "FRED Data Analysis — Chart and Interpret a Real Economic Series",
    "introHtml": "<p><strong>The dataset (real, frozen so every answer is gradeable).</strong> U.S. unemployment rate, monthly, seasonally adjusted, January–December 2024. Source: U.S. Bureau of Labor Statistics, Current Population Survey, via FRED (Federal Reserve Bank of St. Louis), series <strong>UNRATE</strong>. Vintage: values as published and retrieved in November 2026. The 12 values are: Jan 3.7, Feb 3.9, Mar 3.8, Apr 3.9, May 4.0, Jun 4.1, Jul 4.3, Aug 4.2, Sep 4.1, Oct 4.1, Nov 4.2, Dec 4.1 (all in percent). Your question: did U.S. unemployment rise in 2024? A good analysis answers it with the mean, the median, the range, the January-to-December change, an index with January = 100, and a comparison of the first and second halves — and states the source and the limit (national figures only).</p><p><strong>Worked example first — a tiny example dataset (labelled EXAMPLE, not real data).</strong> Four monthly rates: 4.0, 4.2, 4.4, 4.6. Sum = 4.0 + 4.2 + 4.4 + 4.6 = 17.2; mean = 17.2 ÷ 4 = 4.3%. Median = (4.2 + 4.4) ÷ 2 = 4.3%. Range = 4.6 − 4.0 = 0.6 points. Change from first to last = 4.6 − 4.0 = +0.6 points; percent change = 0.6 ÷ 4.0 = 15.0%. Index with the first month = 100: last month = (4.6 ÷ 4.0) × 100 = 115.0. Notice the pattern you will repeat below: sum, divide for the mean, sort for the median, subtract for the range and the change, and divide by the base for the index. Now do the real 2024 series yourself below. Where an answer is not a whole number, the row tells you the scale to enter (for example, “enter the mean × 100” means 4.03% is entered as 403).</p>",
    "taskHtml": "<p><strong>Step 0 — The data.</strong> You have one series: FRED UNRATE, U.S. unemployment rate, monthly, seasonally adjusted, Jan–Dec 2024 (values listed in the introduction). The question is: did unemployment rise in 2024? A good analysis does not stop at one number — it checks the centre (mean and median), the spread (range), the change (points and percent), the index (January = 100), the two halves of the year, and the seasonal context (January's unadjusted rate was 4.1% against 3.7% adjusted). For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: what is the right first question?</p><p><strong>The dataset again, for the rows:</strong> Jan 3.7 · Feb 3.9 · Mar 3.8 · Apr 3.9 · May 4.0 · Jun 4.1 · Jul 4.3 · Aug 4.2 · Sep 4.1 · Oct 4.1 · Nov 4.2 · Dec 4.1. First half (Jan–Jun) sums to 23.4; second half (Jul–Dec) sums to 25.0; the full-year sum is 48.4.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What is the right first question for this dataset? 1) Did the U.S. unemployment rate rise or fall between January and December 2024? 2) What will unemployment be in 2030? 3) Which state had the lowest unemployment in 2024?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_framing",
            "expected": 1,
            "hint": "The dataset is one national series for one year — it can answer whether the rate rose or fell in 2024 (1). It cannot forecast 2030 (2), and it has no state breakdown (3)."
          }
        ]
      },
      {
        "label": "COMPUTED — Add all 12 monthly values. What is the sum? (Enter the sum × 10, so 48.4 is entered as 484.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_sum",
            "expected": 484,
            "hint": "Add them in order: 3.7 + 3.9 + 3.8 + 3.9 + 4.0 + 4.1 = 23.4 for the first half, and 4.3 + 4.2 + 4.1 + 4.1 + 4.2 + 4.1 = 25.0 for the second half. Total 23.4 + 25.0 = 48.4, entered × 10 as 484."
          }
        ]
      },
      {
        "label": "COMPUTED — The 12 values sum to 48.4. What is the mean unemployment rate for 2024? (Enter the mean × 100, so 4.03% is entered as 403.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_mean",
            "expected": 403,
            "hint": "Mean = sum ÷ count = 48.4 ÷ 12 = 4.0333…%, about 4.03%. Entered × 100 that is 403."
          }
        ]
      },
      {
        "label": "COMPUTED — Sort the 12 values: 3.7, 3.8, 3.9, 3.9, 4.0, 4.1, 4.1, 4.1, 4.1, 4.2, 4.2, 4.3. What is the median? (Enter the median × 10, so 4.1% is entered as 41.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_median",
            "expected": 41,
            "hint": "With 12 values, the median is the average of the 6th and 7th sorted values: (4.1 + 4.1) ÷ 2 = 4.1%. Entered × 10 that is 41."
          }
        ]
      },
      {
        "label": "COMPUTED — The highest monthly rate in 2024 was 4.3% (July) and the lowest was 3.7% (January). What is the range? (Enter the range × 10, so 0.6 points is entered as 6.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_range",
            "expected": 6,
            "hint": "Range = largest − smallest = 4.3 − 3.7 = 0.6 percentage points. Entered × 10 that is 6."
          }
        ]
      },
      {
        "label": "COMPUTED — January was 3.7% and December was 4.1%. What is the change in percentage points? (Enter the change × 10, so 0.4 points is entered as 4.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_change_pp",
            "expected": 4,
            "hint": "Change in points = 4.1 − 3.7 = 0.4 percentage points. Entered × 10 that is 4. The rate rose — but by less than half a point."
          }
        ]
      },
      {
        "label": "COMPUTED — January was 3.7% and December was 4.1%. What is the percent change from January to December, rounded to the nearest whole percent? (Enter the whole percent, e.g. 11 for 11%.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_change_pct",
            "expected": 11,
            "hint": "Percent change = (4.1 − 3.7) ÷ 3.7 = 0.4 ÷ 3.7 = 0.1081 = 10.8%, which rounds to 11%. This is different from the 0.4-point change — always say which one you mean."
          }
        ]
      },
      {
        "label": "COMPUTED — Build an index with January 2024 = 100. What is the index for December 2024, rounded to the nearest whole number? (Enter the whole index number, e.g. 111.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_index_dec",
            "expected": 111,
            "hint": "Index = (4.1 ÷ 3.7) × 100 = 110.81, which rounds to 111. December's rate was about 11% above January's."
          }
        ]
      },
      {
        "label": "COMPUTED — With January = 100, what is the index for July 2024 (the peak month, 4.3%), rounded to the nearest whole number? (Enter the whole index number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_index_jul",
            "expected": 116,
            "hint": "Index = (4.3 ÷ 3.7) × 100 = 116.22, which rounds to 116. July was the year's peak, about 16% above January."
          }
        ]
      },
      {
        "label": "COMPUTED — The first-half (Jan–Jun) values sum to 23.4. What is the first-half mean? (Enter the mean × 10, so 3.9% is entered as 39.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_h1_mean",
            "expected": 39,
            "hint": "First-half mean = 23.4 ÷ 6 = 3.9%. Entered × 10 that is 39."
          }
        ]
      },
      {
        "label": "COMPUTED — The second-half (Jul–Dec) values sum to 25.0. What is the second-half mean, entered × 100 (so 4.17% is entered as 417)?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_h2_mean",
            "expected": 417,
            "hint": "Second-half mean = 25.0 ÷ 6 = 4.1667%, about 4.17%. Entered × 100 that is 417."
          }
        ]
      },
      {
        "label": "COMPUTED — Second-half mean 4.17% minus first-half mean 3.9% is how many percentage points, entered × 100 (so 0.27 points is entered as 27)?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_h_diff",
            "expected": 27,
            "hint": "Difference = 4.17 − 3.9 = 0.27 percentage points. Entered × 100 that is 27. The second half averaged higher than the first — the rise was a drift, not a jump."
          }
        ]
      },
      {
        "label": "COMPUTED — The 3-month moving average for Jan–Mar is (3.7 + 3.9 + 3.8) ÷ 3. What is it, entered × 10 (so 3.8% is entered as 38)?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_ma",
            "expected": 38,
            "hint": "(3.7 + 3.9 + 3.8) = 11.4; 11.4 ÷ 3 = 3.8%. Entered × 10 that is 38. The moving average smooths the month-to-month wiggles."
          }
        ]
      },
      {
        "label": "DECISION — January's unadjusted rate was 4.1% but its seasonally adjusted rate was 3.7%. What does the 0.4-point gap show? 1) The usual January seasonal effect (holiday jobs ending) 2) A sudden economic collapse in January 3) An error in the data",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_seasonal",
            "expected": 1,
            "hint": "January unemployment always jumps in the raw data because holiday jobs end — that is the seasonal effect (1). The seasonally adjusted 3.7% removes it. It is not a collapse (2) or an error (3)."
          }
        ]
      },
      {
        "label": "DECISION — You have the numbers: the rate rose from 3.7% to 4.1% over the year. What is the honest one-sentence finding? 1) Unemployment rose modestly through 2024, from 3.7% in January to 4.1% in December 2) Unemployment exploded in 2024 3) Unemployment fell in 2024",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_finding",
            "expected": 1,
            "hint": "The rise was 0.4 points over 12 months — a modest drift up (1). “Exploded” (2) exaggerates a 0.4-point move, and (3) contradicts the data: December (4.1%) is above January (3.7%)."
          }
        ]
      },
      {
        "label": "DECISION — What is the main limit of this analysis? 1) It uses national figures only, so it says nothing about any single state or city 2) It uses too many months 3) It uses the wrong source — FRED is not a real database",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fred_limit",
            "expected": 1,
            "hint": "UNRATE is a national series, so the finding is national only (1). Twelve months is the right span for the question (2 is wrong), and FRED is the St. Louis Fed's real database of BLS data (3 is wrong)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "fred-data-analysis.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What is the right first question for this dataset? 1) Did the U.S. unemployment rate rise or fall between January and December 2024? 2) What will unemployment be in 2030? 3) Which state had the lowest unemployment in 2024?\",\n\"COMPUTED — Add all 12 monthly values. What is the sum? (Enter the sum × 10, so 48.4 is entered as 484.)\",\n\"COMPUTED — The 12 values sum to 48.4. What is the mean unemployment rate for 2024? (Enter the mean × 100, so 4.03% is entered as 403.)\",\n\"COMPUTED — Sort the 12 values: 3.7, 3.8, 3.9, 3.9, 4.0, 4.1, 4.1, 4.1, 4.1, 4.2, 4.2, 4.3. What is the median? (Enter the median × 10, so 4.1% is entered as 41.)\",\n\"COMPUTED — The highest monthly rate in 2024 was 4.3% (July) and the lowest was 3.7% (January). What is the range? (Enter the range × 10, so 0.6 points is entered as 6.)\",\n\"COMPUTED — January was 3.7% and December was 4.1%. What is the change in percentage points? (Enter the change × 10, so 0.4 points is entered as 4.)\",\n\"COMPUTED — January was 3.7% and December was 4.1%. What is the percent change from January to December, rounded to the nearest whole percent? (Enter the whole percent, e.g. 11 for 11%.)\",\n\"COMPUTED — Build an index with January 2024 = 100. What is the index for December 2024, rounded to the nearest whole number? (Enter the whole index number, e.g. 111.)\",\n\"COMPUTED — With January = 100, what is the index for July 2024 (the peak month, 4.3%), rounded to the nearest whole number? (Enter the whole index number.)\",\n\"COMPUTED — The first-half (Jan–Jun) values sum to 23.4. What is the first-half mean? (Enter the mean × 10, so 3.9% is entered as 39.)\",\n\"COMPUTED — The second-half (Jul–Dec) values sum to 25.0. What is the second-half mean, entered × 100 (so 4.17% is entered as 417)?\",\n\"COMPUTED — Second-half mean 4.17% minus first-half mean 3.9% is how many percentage points, entered × 100 (so 0.27 points is entered as 27)?\",\n\"COMPUTED — The 3-month moving average for Jan–Mar is (3.7 + 3.9 + 3.8) ÷ 3. What is it, entered × 10 (so 3.8% is entered as 38)?\",\n\"DECISION — January's unadjusted rate was 4.1% but its seasonally adjusted rate was 3.7%. What does the 0.4-point gap show? 1) The usual January seasonal effect (holiday jobs ending) 2) A sudden economic collapse in January 3) An error in the data\",\n\"DECISION — You have the numbers: the rate rose from 3.7% to 4.1% over the year. What is the honest one-sentence finding? 1) Unemployment rose modestly through 2024, from 3.7% in January to 4.1% in December 2) Unemployment exploded in 2024 3) Unemployment fell in 2024\",\n\"DECISION — What is the main limit of this analysis? 1) It uses national figures only, so it says nothing about any single state or city 2) It uses too many months 3) It uses the wrong source — FRED is not a real database\",\n"
  }
];
