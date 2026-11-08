module.exports = [
  {
    "id": "statistics-in-spreadsheets",
    "title": "Statistics in Spreadsheets — Mean, Spread & Confidence Intervals from Real Data",
    "introHtml": "<p><strong>The data: the U.S. unemployment rate, January–June 2025.</strong> The Bureau of Labor Statistics (BLS) publishes the national unemployment rate every month in its Employment Situation news release. The frozen table below gives the seasonally adjusted U-3 unemployment rate (percent of the labor force) as first reported in the monthly BLS releases: January 4.0%, February 4.1%, March 4.2%, April 4.2%, May 4.2%, June 4.1%. Source: U.S. Bureau of Labor Statistics, Employment Situation news releases, January–June 2025 (first-reported values). The question: what was the typical unemployment rate over those six months, how much did it move, and what range plausibly contains the true average rate for that period?</p><p><strong>What good analysis looks like:</strong> first look at the data and state the question, then compute a center (the mean), a spread (the sample standard deviation), and an interval (the 95% confidence interval for the mean) — and always say which standard deviation you used and what the interval does and does not mean. A good answer reports the mean with its margin of error, not the mean alone.</p><p><strong>Worked example first — a practice dataset (completed for you).</strong> Take four illustrative monthly rates: 3.9, 4.0, 4.1, 4.2%. Step 1: the sum is 16.2, so the mean is 16.2 ÷ 4 = <strong>4.05%</strong>. Step 2: the squared deviations from the mean add to 0.05, so the sample variance is 0.05 ÷ 3 = 0.0167 and the sample SD is <strong>0.13%</strong>. Step 3: the standard error is 0.13 ÷ √4 = <strong>0.06%</strong>. Step 4: with df = 3, t* = 3.182, so the margin of error is 3.182 × 0.06 = <strong>0.21%</strong>. Step 5: the 95% confidence interval is 4.05 ± 0.21 = <strong>(3.84%, 4.26%)</strong>. Notice the pattern you will repeat for the BLS data: mean, then sample SD, then standard error, then t* times the standard error, then the interval. Now do the real six months yourself below — enter each value rounded to two decimal places.</p>",
    "taskHtml": "<p><strong>Step 0 — The data.</strong> You have six monthly unemployment rates from the BLS (seasonally adjusted U-3, first-reported values, January–June 2025): 4.0, 4.1, 4.2, 4.2, 4.2, 4.1 percent. The question is what the typical rate was over those six months, how much it moved month to month, and what range plausibly contains the true average rate for the period. A good analysis starts by looking at the data (the rates sit in a narrow band, 4.0% to 4.2%), computes a center and a spread, and finishes with a confidence interval — never a single number on its own. For each row, enter the option number or the computed value asked for, rounded to two decimal places. The first scored row is the framing decision: what do you do first?</p><p><strong>Your spreadsheet, step by step:</strong> (1) Add the six rates. (2) Divide by 6 for the mean. (3) Find the median of the six ordered rates. (4) Find the range. (5) Find the sample standard deviation (divide by n − 1 = 5, because these six months are a sample of the year's rates). (6) Divide the SD by √6 for the standard error. (7) Look up t* for df = 5 at 95% confidence. (8) Multiply t* by the standard error for the margin of error. (9) Subtract the margin from the mean for the lower limit. (10) Add it for the upper limit. (11) Decide whether 4.0% is inside the interval. (12) State what the interval means.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What should you do first with the six BLS rates? 1) Plot or list the rates, look at them, and state the question before computing 2) Report the June rate (4.1%) as the average 3) Average the rates without checking the source or the units",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_framing",
            "expected": 1,
            "hint": "Good analysis starts by looking at the data and stating the question — the rates sit in a narrow 4.0–4.2% band, and the question is about the typical rate over six months. (2) mistakes one month for the average. (3) skips the source check that tells you these are seasonally adjusted first-reported values."
          }
        ]
      },
      {
        "label": "COMPUTED — Add the six monthly rates (4.0 + 4.1 + 4.2 + 4.2 + 4.2 + 4.1). What is the sum? (Enter the value, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_sum",
            "expected": 24.8,
            "hint": "The sum is 4.0 + 4.1 + 4.2 + 4.2 + 4.2 + 4.1 = 24.80. Add them in pairs: 4.0 + 4.1 = 8.1, plus 4.2 = 12.3, plus 4.2 = 16.5, plus 4.2 = 20.7, plus 4.1 = 24.80."
          }
        ]
      },
      {
        "label": "COMPUTED — The sum is 24.80 and there are 6 months. What is the mean unemployment rate? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_mean",
            "expected": 4.13,
            "hint": "Mean = 24.80 ÷ 6 = 4.1333, which rounds to 4.13%. The typical monthly rate over January–June 2025 was about 4.13%."
          }
        ]
      },
      {
        "label": "COMPUTED — Ordered, the six rates are 4.0, 4.1, 4.1, 4.2, 4.2, 4.2. What is the median? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_median",
            "expected": 4.15,
            "hint": "With 6 values the median is the average of the 3rd and 4th: (4.1 + 4.2) ÷ 2 = 4.15%. It sits just above the mean, because the lowest value (4.0) pulls the mean down slightly."
          }
        ]
      },
      {
        "label": "COMPUTED — The lowest rate is 4.0% and the highest is 4.2%. What is the range? (Enter the value in percentage points, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_range",
            "expected": 0.2,
            "hint": "Range = 4.2 − 4.0 = 0.20 percentage points. The whole six months fit inside a 0.20-point band — the rate barely moved."
          }
        ]
      },
      {
        "label": "COMPUTED — The squared deviations from the mean add to 0.0333. What is the sample standard deviation? (Divide by n − 1 = 5. Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_sd",
            "expected": 0.08,
            "hint": "Sample variance = 0.0333 ÷ 5 = 0.0067, so the sample SD = √0.0067 = 0.0816%, which rounds to 0.08%. A typical month sat about 0.08 points from the mean."
          }
        ]
      },
      {
        "label": "COMPUTED — The sample SD is 0.08% and n = 6. What is the standard error of the mean? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_se",
            "expected": 0.03,
            "hint": "SE = 0.0816 ÷ √6 = 0.0816 ÷ 2.449 = 0.0333%, which rounds to 0.03%. The sample mean is much more precise than any single month's rate."
          }
        ]
      },
      {
        "label": "COMPUTED — For a 95% confidence interval with df = n − 1 = 5, what is the t* critical value? (Enter the value, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_tstar",
            "expected": 2.57,
            "hint": "From the t-table (or software), t* for df = 5 at 95% confidence is 2.5706, which rounds to 2.57. It is larger than 1.96 because the sample is small and σ is estimated."
          }
        ]
      },
      {
        "label": "COMPUTED — t* is 2.57 and the standard error is 0.03%. What is the margin of error? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_moe",
            "expected": 0.09,
            "hint": "Margin of error = t* × SE = 2.571 × 0.0333 = 0.0857%, which rounds to 0.09%. The interval will be the mean plus or minus about 0.09 points."
          }
        ]
      },
      {
        "label": "COMPUTED — The mean is 4.13% and the margin of error is 0.09%. What is the lower limit of the 95% confidence interval? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_ci_lo",
            "expected": 4.05,
            "hint": "Lower limit = 4.1333 − 0.0857 = 4.0476%, which rounds to 4.05%."
          }
        ]
      },
      {
        "label": "COMPUTED — The mean is 4.13% and the margin of error is 0.09%. What is the upper limit of the 95% confidence interval? (Enter the value in percent, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_ci_hi",
            "expected": 4.22,
            "hint": "Upper limit = 4.1333 + 0.0857 = 4.2190%, which rounds to 4.22%. The full interval is (4.05%, 4.22%)."
          }
        ]
      },
      {
        "label": "DECISION — Does the 95% confidence interval (4.05%, 4.22%) include 4.0%? 1) No — 4.0% is below the lower limit 2) Yes — 4.0% is inside the interval",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_includes",
            "expected": 1,
            "hint": "4.0% is below the lower limit of 4.05%, so it is outside the interval. The data are consistent with a true average rate above 4.0% for this period — though only just, since the lower limit is 4.05%."
          }
        ]
      },
      {
        "label": "DECISION — What does the interval (4.05%, 4.22%) mean? 1) 95% of the months had rates in this range 2) The procedure captures the true mean in about 95% of repeated samples 3) There is a 95% chance the June rate is in the interval",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_interp",
            "expected": 2,
            "hint": "95% describes the procedure over many samples, not this one interval and not the individual months. (1) is about the months, not the mean — only the six observed rates are in the data, and they are all between 4.0% and 4.2%. (3) is the classic misreading: the true mean is fixed, not random."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "statistics-in-spreadsheets.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What should you do first with the six BLS rates? 1) Plot or list the rates, look at them, and state the question before computing 2) Report the June rate (4.1%) as the average 3) Average the rates without checking the source or the units\",\n\"COMPUTED — Add the six monthly rates (4.0 + 4.1 + 4.2 + 4.2 + 4.2 + 4.1). What is the sum? (Enter the value, to two decimal places.)\",\n\"COMPUTED — The sum is 24.80 and there are 6 months. What is the mean unemployment rate? (Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — Ordered, the six rates are 4.0, 4.1, 4.1, 4.2, 4.2, 4.2. What is the median? (Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — The lowest rate is 4.0% and the highest is 4.2%. What is the range? (Enter the value in percentage points, to two decimal places.)\",\n\"COMPUTED — The squared deviations from the mean add to 0.0333. What is the sample standard deviation? (Divide by n − 1 = 5. Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — The sample SD is 0.08% and n = 6. What is the standard error of the mean? (Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — For a 95% confidence interval with df = n − 1 = 5, what is the t* critical value? (Enter the value, to two decimal places.)\",\n\"COMPUTED — t* is 2.57 and the standard error is 0.03%. What is the margin of error? (Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — The mean is 4.13% and the margin of error is 0.09%. What is the lower limit of the 95% confidence interval? (Enter the value in percent, to two decimal places.)\",\n\"COMPUTED — The mean is 4.13% and the margin of error is 0.09%. What is the upper limit of the 95% confidence interval? (Enter the value in percent, to two decimal places.)\",\n\"DECISION — Does the 95% confidence interval (4.05%, 4.22%) include 4.0%? 1) No — 4.0% is below the lower limit 2) Yes — 4.0% is inside the interval\",\n\"DECISION — What does the interval (4.05%, 4.22%) mean? 1) 95% of the months had rates in this range 2) The procedure captures the true mean in about 95% of repeated samples 3) There is a 95% chance the June rate is in the interval\",\n"
  }
];
