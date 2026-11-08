module.exports = [
  {
    "id": "interest-rates-yield-curve",
    "title": "Interest Rates & the Yield Curve",
    "introHtml": "<p><strong>Case: The Harper Family Office.</strong> You are the junior analyst at a small family office that manages a retired couple's savings. The office holds three Treasury bonds and watches the yield curve every morning to decide whether to buy, hold, or sell. Your task: price the bonds, read the curve, and recommend what the office should do. All numbers below are example numbers for this case — not real market data. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Bond W and a normal curve (completed for you).</strong> Bond W: $1,000 face value, $100 coupon, 1 year to maturity, market yield 10%. Its price is ($100 + $1,000) ÷ 1.10 = $1,100 ÷ 1.10 = <strong>$1,000</strong> — exactly par, because its coupon rate (10%) equals the yield (10%). Now the curve. On a normal day the yields read: 3-month 2.00%, 2-year 3.00%, 10-year 4.50%. The 10-year minus 3-month spread is 4.50% − 2.00% = 2.50 percentage points, and 2.50 × 100 = <strong>250 basis points</strong>. Long yields are above short yields, so the curve is <strong>normal (upward-sloping)</strong> — investors expect growth to continue and short rates to rise, not fall. Notice the two skills you will repeat below: price a bond by discounting its payments, and read the curve by computing the spread and naming the shape. Now do the Harper bonds yourself.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> The Harper Family Office holds three bonds. Bond A: $1,000 face value, $210 coupon, 1 year to maturity, market yield 10%. Bond B: $1,000 face value, $260 coupon, 1 year to maturity, market yield 5%. Bond C: a zero-coupon bond, $1,331 face value, 3 years to maturity, market yield 10%. The office also watches two yield curves. Curve 1 (last year): 3-month 2.00%, 2-year 3.00%, 10-year 4.50%. Curve 2 (today): 3-month 5.00%, 2-year 4.50%, 10-year 4.00%. And a third curve for your own read: 3-month 5.25%, 2-year 4.75%, 10-year 4.25%. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: what should the analyst do first?</p><p><strong>The tools (for the decision rows):</strong> (1) Bond price = present value of all payments: for a 1-year bond, price = (coupon + face value) ÷ (1 + yield). For a zero-coupon bond, price = face value ÷ (1 + yield)<sup>years</sup>. (2) Spread in basis points = (long yield − short yield) × 100; one basis point is 0.01%. (3) Curve shape: long above short = normal (upward); short above long = inverted (downward); roughly equal = flat. (4) Current yield = annual coupon ÷ price. (5) Yield on a 1-year bond = (payoff ÷ price) − 1, as a percent.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What should the analyst do first with the Harper bonds? 1) Price each bond and plot the yields by maturity before deciding anything 2) Sell everything immediately 3) Buy the bond with the biggest coupon without checking its price",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_framing",
            "expected": 1,
            "hint": "Price first, decide second: you cannot judge a bond without its price, and you cannot read the curve without plotting yields by maturity. Selling everything (2) and buying on coupon alone (3) both decide before measuring."
          }
        ]
      },
      {
        "label": "COMPUTED — Bond A: $1,000 face, $210 coupon, 1 year, yield 10%. What is its price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_bond_a",
            "expected": 1100,
            "hint": "Price = ($210 + $1,000) ÷ 1.10 = $1,210 ÷ 1.10 = $1,100. Check: $1,100 × 1.10 = $1,210, exactly the payoff."
          }
        ]
      },
      {
        "label": "COMPUTED — Bond B: $1,000 face, $260 coupon, 1 year, yield 5%. What is its price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_bond_b",
            "expected": 1200,
            "hint": "Price = ($260 + $1,000) ÷ 1.05 = $1,260 ÷ 1.05 = $1,200. Check: $1,200 × 1.05 = $1,260, exactly the payoff."
          }
        ]
      },
      {
        "label": "COMPUTED — Bond C: zero-coupon, $1,331 face, 3 years, yield 10%. What is its price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_bond_c",
            "expected": 1000,
            "hint": "Price = $1,331 ÷ (1.10)³ = $1,331 ÷ 1.331 = $1,000. Check: $1,000 × 1.331 = $1,331, exactly the face value."
          }
        ]
      },
      {
        "label": "COMPUTED — Curve 1 (last year): 3-month 2.00%, 10-year 4.50%. What is the 10-year minus 3-month spread, in basis points? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_spread_normal",
            "expected": 250,
            "hint": "Spread = 4.50% − 2.00% = 2.50 percentage points; 2.50 × 100 = 250 basis points. One basis point is 0.01%."
          }
        ]
      },
      {
        "label": "DECISION — Curve 1's shape: 1) Normal (upward-sloping) 2) Inverted (downward-sloping) 3) Flat",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_shape_normal",
            "expected": 1,
            "hint": "Long yields (4.50%) are above short yields (2.00%), so the curve slopes upward — normal. Inverted (2) would need short above long, and flat (3) would need roughly equal yields."
          }
        ]
      },
      {
        "label": "COMPUTED — Curve 2 (today): 3-month 5.00%, 10-year 4.00%. By how many basis points is the 3-month yield ABOVE the 10-year yield? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_spread_inverted",
            "expected": 100,
            "hint": "5.00% − 4.00% = 1.00 percentage point = 100 basis points, with short above long. The spread the other way (10-year minus 3-month) would be −100 basis points."
          }
        ]
      },
      {
        "label": "DECISION — Curve 2's shape: 1) Normal (upward-sloping) 2) Inverted (downward-sloping) 3) Flat",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_shape_inverted",
            "expected": 2,
            "hint": "Short yields (5.00%) are above long yields (4.00%), so the curve slopes downward — inverted. Normal (1) would need long above short, and flat (3) would need roughly equal yields."
          }
        ]
      },
      {
        "label": "COMPUTED — A 1-year bond costs $880 today and pays $1,100 in one year. What is its yield, as a percent? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_yield",
            "expected": 25,
            "hint": "Yield = ($1,100 ÷ $880) − 1 = 1.25 − 1 = 0.25 = 25%. Check: $880 × 1.25 = $1,100."
          }
        ]
      },
      {
        "label": "COMPUTED — A bond pays a $60 coupon and costs $1,200. What is its current yield, as a percent? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_current_yield",
            "expected": 5,
            "hint": "Current yield = coupon ÷ price = $60 ÷ $1,200 = 0.05 = 5%. Note this is not the same as the coupon rate on a $1,000 face (6%) — the price is above par, so the yield is below the coupon rate."
          }
        ]
      },
      {
        "label": "COMPUTED — DIY curve: 2-year 4.75%, 10-year 4.25%. By how many basis points is the 2-year yield ABOVE the 10-year yield? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_spread_diy",
            "expected": 50,
            "hint": "4.75% − 4.25% = 0.50 percentage points = 50 basis points, with the shorter maturity above the longer one — the curve is inverted at this stretch too."
          }
        ]
      },
      {
        "label": "DECISION — DIY bond: $1,000 face, $20 coupon, 1 year, yield 20%. What is its price? 1) $850 2) $1,000 3) $1,200",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_bond_diy",
            "expected": 1,
            "hint": "Price = ($20 + $1,000) ÷ 1.20 = $1,020 ÷ 1.20 = $850. Check: $850 × 1.20 = $1,020. (2) would be par, which needs the coupon rate to equal the yield; (3) would need a much bigger coupon."
          }
        ]
      },
      {
        "label": "DECISION — Curve 2 is inverted. What does that mean for the Harpers? 1) Recession risk has risen; expect slower growth and possible rate cuts — prepare, but do not panic 2) A recession is guaranteed next month 3) Nothing at all — the curve means nothing",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_signal",
            "expected": 1,
            "hint": "Inversion has preceded every U.S. recession since the late 1970s, usually within about two years — a strong warning, not a guarantee or a date. (2) overstates it: no signal guarantees timing. (3) ignores the best recession signal in economics."
          }
        ]
      },
      {
        "label": "DECISION — With the curve inverted, what should the office do first? 1) Review the portfolio's risk, keep cash ready, and avoid new long-term bets until the picture clears 2) Borrow heavily to buy long-term bonds on margin 3) Ignore the curve and sell all bonds at once",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "yc_action",
            "expected": 1,
            "hint": "An inverted curve calls for caution and preparation, not panic or leverage. Borrowing on margin (2) doubles the risk exactly when risk is rising, and selling everything at once (3) locks in losses and abandons the plan."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "interest-rates-yield-curve.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What should the analyst do first with the Harper bonds? 1) Price each bond and plot the yields by maturity before deciding anything 2) Sell everything immediately 3) Buy the bond with the biggest coupon without checking its price\",\n\"COMPUTED — Bond A: $1,000 face, $210 coupon, 1 year, yield 10%. What is its price? (Enter the dollar amount.)\",\n\"COMPUTED — Bond B: $1,000 face, $260 coupon, 1 year, yield 5%. What is its price? (Enter the dollar amount.)\",\n\"COMPUTED — Bond C: zero-coupon, $1,331 face, 3 years, yield 10%. What is its price? (Enter the dollar amount.)\",\n\"COMPUTED — Curve 1 (last year): 3-month 2.00%, 10-year 4.50%. What is the 10-year minus 3-month spread, in basis points? (Enter the number.)\",\n\"DECISION — Curve 1's shape: 1) Normal (upward-sloping) 2) Inverted (downward-sloping) 3) Flat\",\n\"COMPUTED — Curve 2 (today): 3-month 5.00%, 10-year 4.00%. By how many basis points is the 3-month yield ABOVE the 10-year yield? (Enter the number.)\",\n\"DECISION — Curve 2's shape: 1) Normal (upward-sloping) 2) Inverted (downward-sloping) 3) Flat\",\n\"COMPUTED — A 1-year bond costs $880 today and pays $1,100 in one year. What is its yield, as a percent? (Enter the number.)\",\n\"COMPUTED — A bond pays a $60 coupon and costs $1,200. What is its current yield, as a percent? (Enter the number.)\",\n\"COMPUTED — DIY curve: 2-year 4.75%, 10-year 4.25%. By how many basis points is the 2-year yield ABOVE the 10-year yield? (Enter the number.)\",\n\"DECISION — DIY bond: $1,000 face, $20 coupon, 1 year, yield 20%. What is its price? 1) $850 2) $1,000 3) $1,200\",\n\"DECISION — Curve 2 is inverted. What does that mean for the Harpers? 1) Recession risk has risen; expect slower growth and possible rate cuts — prepare, but do not panic 2) A recession is guaranteed next month 3) Nothing at all — the curve means nothing\",\n\"DECISION — With the curve inverted, what should the office do first? 1) Review the portfolio's risk, keep cash ready, and avoid new long-term bets until the picture clears 2) Borrow heavily to buy long-term bonds on margin 3) Ignore the curve and sell all bonds at once\",\n"
  }
];
