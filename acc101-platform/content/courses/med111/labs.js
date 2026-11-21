// med111 — Scenario labs.
// Each row is checked on a single numeric input in column 1: a computed calorie, fiber, or sodium value, or a decision option number.
module.exports = [
  {
    "id": "food-labels-meal-planning",
    "title": "Food Labels & Meal Planning — Build a Balanced Day",
    "introHtml": "<p><strong>Job ticket #5001 — Plan a day of eating, training kitchen.</strong> Customer: a healthy adult who wants a balanced day of about 2,000 calories built from ordinary foods. The setting: a table with food labels for every item on the menu. Your task: read each label, do the calorie math, add up fiber and sodium, and check the day against the inverted food pyramid and the Dietary Guidelines for Americans 2025–2030. Read the menu in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=G7WN0AkE5XU\" target=\"_blank\" rel=\"noopener\">How to Read a Nutrition Label — % Daily Value (FDA)</a> — watch the FDA explain percent Daily Value and the 5% / 20% rule before you start the math below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any food work: wash your hands with soap and water; check the allergy labels on every package (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, sesame); check the expiration dates; and store perishable foods cold — refrigerate milk, yogurt, and fish right away, and never leave cooked food at room temperature for more than two hours. If a label is missing, a package is damaged, or a food has passed its date, do not use it. Food safety comes before any meal plan.</p><p><strong>The menu and its labels:</strong> Breakfast — oatmeal, 150 kcal and 4 g fiber per serving, 2 servings; milk, 100 kcal per cup, 1 cup. Snack — an apple, 95 kcal and 4 g fiber. Lunch — a bean wrap, 320 kcal, 6 g fiber, and 480 mg sodium. Snack — yogurt, 150 kcal and 80 mg sodium; almonds, 160 kcal and 3 g fiber per ounce, 1 ounce. Dinner — salmon, 200 kcal and 350 mg sodium; brown rice, 220 kcal and 4 g fiber per cup, 1 cup; broccoli, 55 kcal and 5 g fiber; olive oil, 120 kcal per tablespoon, 1 tablespoon; whole-wheat bread, 80 kcal, 4 g fiber, and 280 mg sodium per slice, 2 slices.</p><p><strong>For each row, enter the computed value or the option number asked for.</strong></p>",
    "headers": [
      "Calculation or decision",
      "Your answer"
    ],
    "rows": [
      {
        "label": "COMPUTED — Breakfast oatmeal: 150 kcal per serving, 2 servings. How many calories? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_oatmeal_kcal",
            "expected": 300,
            "hint": "150 × 2 = 300 kcal. Always multiply the per-serving number by how many servings you actually eat."
          }
        ]
      },
      {
        "label": "COMPUTED — Breakfast milk: 100 kcal per cup, 1 cup. How many calories? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_milk_kcal",
            "expected": 100,
            "hint": "100 × 1 = 100 kcal. One cup is one serving."
          }
        ]
      },
      {
        "label": "COMPUTED — The apple snack is 95 kcal. How many calories is the whole day's fruit so far if the apple is the only fruit? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_apple_kcal",
            "expected": 95,
            "hint": "The apple is 95 kcal, and it is the only fruit on the menu, so the day's fruit calories are 95. the current guidance calls for fruit at least twice a day — this day has fruit only once."
          }
        ]
      },
      {
        "label": "COMPUTED — Lunch wrap: 320 kcal. Yogurt snack: 150 kcal. Almonds: 160 kcal per ounce, 1 ounce. How many calories are the two snacks plus lunch together? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_lunch_snacks_kcal",
            "expected": 630,
            "hint": "320 + 150 + 160 = 630 kcal. Add the foods one at a time and keep the units straight."
          }
        ]
      },
      {
        "label": "COMPUTED — Dinner salmon is 200 kcal, brown rice is 220 kcal, broccoli is 55 kcal, olive oil is 120 kcal. How many calories is dinner without the bread? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_dinner_kcal",
            "expected": 595,
            "hint": "200 + 220 + 55 + 120 = 595 kcal. The bread is counted separately in the next row."
          }
        ]
      },
      {
        "label": "COMPUTED — Whole-wheat bread: 80 kcal per slice, 2 slices. How many calories? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_bread_kcal",
            "expected": 160,
            "hint": "80 × 2 = 160 kcal. Two slices is two servings."
          }
        ]
      },
      {
        "label": "COMPUTED — Add up the whole day: oatmeal 300, milk 100, apple 95, wrap 320, yogurt 150, almonds 160, salmon 200, brown rice 220, broccoli 55, olive oil 120, bread 160. How many calories is the day? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_day_kcal",
            "expected": 1880,
            "hint": "300 + 100 + 95 + 320 + 150 + 160 + 200 + 220 + 55 + 120 + 160 = 1,880 kcal. Add them in groups: breakfast 400, snacks and lunch 725, dinner 755."
          }
        ]
      },
      {
        "label": "COMPUTED — The goal is about 2,000 calories for the day, and the menu adds up to 1,880. How many more calories are needed to reach 2,000? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_kcal_gap",
            "expected": 120,
            "hint": "2,000 − 1,880 = 120 kcal. A small snack — a piece of fruit with peanut butter, or a glass of milk — closes the gap."
          }
        ]
      },
      {
        "label": "COMPUTED — Fiber: oatmeal 4 g per serving × 2 servings = 8 g; apple 4 g; wrap 6 g; almonds 3 g; brown rice 4 g; broccoli 5 g; bread 4 g per slice × 2 slices = 8 g. How many grams of fiber is the day? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_day_fiber",
            "expected": 38,
            "hint": "8 + 4 + 6 + 3 + 4 + 5 + 8 = 38 g of fiber. The recommendation is about 14 g per 1,000 calories, so about 28 g on a 2,000-calorie day — this day beats it."
          }
        ]
      },
      {
        "label": "COMPUTED — Sodium: wrap 480 mg; yogurt 80 mg; salmon 350 mg; bread 280 mg per slice × 2 slices = 560 mg. How many milligrams of sodium is the day? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_day_sodium",
            "expected": 1470,
            "hint": "480 + 80 + 350 + 560 = 1,470 mg. The daily limit is below 2,300 mg, so this day is comfortably under it."
          }
        ]
      },
      {
        "label": "COMPUTED — The day's sodium is 1,470 mg and the daily limit is 2,300 mg. How many milligrams of sodium are left before the limit? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_sodium_left",
            "expected": 830,
            "hint": "2,300 − 1,470 = 830 mg left. That is room for a salty snack or a restaurant meal without blowing the day."
          }
        ]
      },
      {
        "label": "DECISION — The wrap has 480 mg of sodium per serving. The daily limit is 2,300 mg. Is the wrap high or low in sodium by the 5% / 20% rule? 1) High — over 20% DV 2) Low — under 5% DV 3) Moderate — between 5% and 20% DV",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_wrap_dv",
            "expected": 1,
            "hint": "480 ÷ 2,300 = about 21% of the daily limit — just over 20%, so it is high in sodium by the 5% / 20% rule. One wrap is a fifth of the day's sodium."
          }
        ]
      },
      {
        "label": "DECISION — Check the day against the inverted food pyramid: the menu has vegetables (broccoli), a fruit (apple), whole grains (oatmeal, brown rice, whole-wheat bread), protein (yogurt, almonds, salmon, beans in the wrap), and dairy (milk, yogurt). What is missing or short? 1) Nothing — all five groups appear 2) The day has fruit only once — the guidance calls for fruit at least twice a day 3) The day has no protein 4) The day has no grains",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_myplate_check",
            "expected": 2,
            "hint": "All five food groups appear, but fruit appears only once — the apple. A healthy day should have fruit at least twice, so the fix is a second fruit, which also closes the 120-calorie gap."
          }
        ]
      },
      {
        "label": "DECISION — A friend looks at the day and says, \"1,880 calories is under 2,000, so I should add a candy bar to reach the goal.\" What is the better call? 1) Add the candy bar — calories are calories 2) Add a nutrient-dense snack such as fruit with peanut butter — it closes the gap and adds fiber, protein, and vitamins 3) Skip the extra calories entirely 4) Replace dinner with the candy bar",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_gap_snack",
            "expected": 2,
            "hint": "Calories are not all equal: a nutrient-dense snack closes the 120-calorie gap and adds fiber, protein, and vitamins, while a candy bar adds sugar with almost nothing else. Nutrient density is the point."
          }
        ]
      },
      {
        "label": "COMPUTED — The day has 38 g of fiber and the recommendation is about 28 g on a 2,000-calorie day. How many grams over the recommendation is the day? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fl_fiber_over",
            "expected": 10,
            "hint": "38 − 28 = 10 g over the recommendation. More fiber than the recommendation is fine when it comes from whole foods and water intake is adequate."
          }
        ]
      }
    ],
    "passing": 70
  }
];
