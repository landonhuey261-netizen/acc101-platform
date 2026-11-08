// FIN101 - Module 5: Stocks, Bonds & How Markets Price Them
module.exports = {
  "number": 5,
  "slug": "stocks-bonds-how-markets-price-them",
  "title": "Stocks, Bonds & How Markets Price Them",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what stocks and bonds are and how they differ.",
    "Describe how a bond is valued: coupons, face value, and yield to maturity.",
    "Explain how a stock is valued with the dividend discount model.",
    "Explain the inverse relationship between bond prices and interest rates.",
    "Use worked valuation examples for a bond and a stock."
  ],
  "sections": [
    {
      "heading": "Stocks and Bonds: Two Ways to Fund a Business",
      "html": "\n<p>A business that needs money has two main sources. <strong>Debt</strong> is borrowed money: the firm promises to pay interest and to repay the principal on a schedule. A <strong>bond</strong> is a standardized loan — the firm borrows from many lenders at once, promising a fixed <strong>coupon</strong> (interest payment) and repayment of the <strong>face value</strong> at <strong>maturity</strong>. <strong>Equity</strong> is ownership: the firm sells <strong>shares of stock</strong>, and shareholders own a piece of the business, share its profits as <strong>dividends</strong>, and bear its losses. Debt must be paid even in a bad year; dividends can be cut. That difference is why debt is riskier for the firm and safer for the investor, and why equity is the opposite.</p>\n<p>Markets price both by the same principle as Module 3: a security is worth the present value of the cash it will pay. A bond's cash flows are fixed and scheduled, so its value can be computed exactly from its coupon, face value, maturity, and the market's required return. A stock's cash flows are uncertain — dividends can grow, shrink, or stop — so its value depends on a forecast, and two investors can honestly disagree about it. That disagreement is what makes stock markets move.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A security is worth the present value of the cash it will pay. Bonds pay fixed, scheduled cash; stocks pay uncertain cash — which is why stocks are harder to value and riskier to hold.</div>\n"
    },
    {
      "heading": "Valuing a Bond",
      "html": "\n<p>A bond's value is the present value of its coupons plus the present value of its face value, discounted at the market's required return — the <strong>yield to maturity (YTM)</strong>. Worked example: a $1,000 bond paying a 5% coupon ($50 a year) for 10 years, when the market requires 6%. The coupons are an annuity: $50 × 7.3601 (the 10-year, 6% annuity factor) = $368.01. The face value discounted is $1,000 ÷ (1.06)<sup>10</sup> = $558.39. The bond's value is $368.01 + $558.39 = $926.40 — below its $1,000 face value, because its 5% coupon is below the market's 6% requirement. A bond that pays less than the market demands sells at a <strong>discount</strong>; one that pays more sells at a <strong>premium</strong>; one that pays exactly the market rate sells at <strong>par</strong> ($1,000).</p>\n<p>That arithmetic explains the most important fact about bonds: <strong>when interest rates rise, bond prices fall</strong>. A bond's coupons are fixed, so when the market's required return rises, the present value of those fixed payments falls. A bondholder who must sell before maturity loses money when rates rise — and gains when rates fall. The longer the bond's maturity, the bigger the swing: a 30-year bond's price moves far more than a 1-year bond's when rates change.</p>\n<div class=\"formula\">Bond value = PV of coupons + PV of face value &nbsp;|&nbsp; $50 × 7.3601 + $1,000 ÷ (1.06)<sup>10</sup> = $368.01 + $558.39 = $926.40</div>\n"
    },
    {
      "heading": "Valuing a Stock: The Dividend Discount Model",
      "html": "\n<p>A stock's value is the present value of its future dividends. The simplest version, the <strong>Gordon growth model</strong>, assumes dividends grow at a constant rate forever: Value = D<sub>1</sub> ÷ (r − g), where D<sub>1</sub> is next year's dividend, r is the required return, and g is the dividend growth rate. Worked example: next year's dividend is $2.20, the required return is 10%, and dividends grow at 4% a year. Value = $2.20 ÷ (0.10 − 0.04) = $2.20 ÷ 0.06 = $36.67. The model is simple and brutally sensitive: if growth were 5% instead of 4%, the value would be $2.20 ÷ 0.05 = $44.00 — a one-point change in a forecast moves the value by 20%.</p>\n<p>That sensitivity is the honest lesson of stock valuation. A stock's price is a forecast, and small changes in the forecast move the price a great deal. The finance manager uses the model to test whether a price is reasonable, not to compute a price to the cent: if the market price implies a growth rate the firm cannot plausibly sustain, the stock is probably overvalued — and the same logic applies when the firm judges its own projects in Module 7.</p>\n<div class=\"formula\">Gordon growth model: Value = D<sub>1</sub> ÷ (r − g) &nbsp;|&nbsp; $2.20 ÷ (0.10 − 0.04) = $36.67</div>\n"
    },
    {
      "heading": "Markets, Efficiency, and What Prices Mean",
      "html": "\n<p>Financial markets exist to move money from savers to businesses that can use it, and to let investors buy and sell securities. The <strong>efficient market hypothesis</strong> says prices reflect all available information — so beating the market consistently requires information nobody else has, or luck. The hypothesis is debated, but its practical lesson is solid: for most investors, and most businesses, the market price is the best available estimate of value, and the cheapest way to invest is usually a diversified fund rather than picking individual winners.</p>\n<p>For the finance manager, the market price is also a report card. A firm's share price reflects investors' judgment of its future cash flows, discounted at a rate that reflects its risk. When the price falls, investors are saying the future looks worse or riskier than before — and the manager's job is to find out whether they are right, not to argue with the price. The same discipline applies to the bond market: a firm's borrowing cost rises when lenders judge it riskier, and that rising cost is information the firm should heed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The market price is the best available estimate of value — and a report card. When it falls, ask what investors learned, not how to argue with them.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Debt (bonds) must be paid on schedule; equity (stock) shares profits and losses with no fixed payment.</li>\n<li>Bond value = present value of coupons + present value of face value. Worked example: $926.40 — a discount, because the 5% coupon is below the 6% market rate.</li>\n<li>Gordon growth model: Value = D<sub>1</sub> ÷ (r − g). Worked example: $2.20 ÷ 0.06 = $36.67.</li>\n<li>When interest rates rise, bond prices fall — and longer bonds fall further.</li>\n<li>Market prices reflect available information; treat them as the best estimate of value and a report card on the firm.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Thinking a bond's price and its interest rate move together. They move in opposite directions: higher rates mean lower bond prices, because the fixed coupons are worth less when discounted harder.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Treating a stock valuation as exact. The Gordon model is brutally sensitive — a one-point change in the growth forecast moved the worked example from $36.67 to $44.00.</div>\n<p><strong>Ready-to-Work link:</strong> Module 6 uses the required return from Module 4 and the bond pricing from this module to compute what the firm's money actually costs.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Bond",
      "def": "A standardized loan: the issuer promises fixed coupon payments and repayment of face value at maturity."
    },
    {
      "term": "Coupon",
      "def": "The fixed interest payment a bond pays, usually annually or semi-annually."
    },
    {
      "term": "Face value",
      "def": "The amount a bond repays at maturity, usually $1,000."
    },
    {
      "term": "Maturity",
      "def": "The date a bond's face value is repaid."
    },
    {
      "term": "Yield to maturity (YTM)",
      "def": "The return a bond earns if held to maturity — the discount rate that equates its price to its cash flows."
    },
    {
      "term": "Discount (bond)",
      "def": "A bond selling below its face value, because its coupon is below the market rate."
    },
    {
      "term": "Premium (bond)",
      "def": "A bond selling above its face value, because its coupon is above the market rate."
    },
    {
      "term": "Par",
      "def": "A bond selling at its face value, because its coupon equals the market rate."
    },
    {
      "term": "Stock (share)",
      "def": "A unit of ownership in a corporation."
    },
    {
      "term": "Dividend",
      "def": "A payment a corporation makes to its shareholders from its profits."
    },
    {
      "term": "Gordon growth model",
      "def": "Stock value = next year's dividend ÷ (required return − dividend growth rate)."
    },
    {
      "term": "Required return",
      "def": "The return investors demand to hold a security, given its risk."
    },
    {
      "term": "Efficient market hypothesis",
      "def": "The idea that security prices reflect all available information."
    },
    {
      "term": "Primary market",
      "def": "Where new securities are first sold by the issuer."
    },
    {
      "term": "Secondary market",
      "def": "Where existing securities are bought and sold between investors."
    },
    {
      "term": "Stock exchange",
      "def": "An organized market for buying and selling stocks, such as the NYSE or Nasdaq."
    },
    {
      "term": "Market capitalization",
      "def": "A firm's total stock value: share price times shares outstanding."
    }
  ],
  "video": {
    "title": "Introduction to bonds | Stocks and bonds | Finance & Capital Markets | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/Qh-M3_L4xYk",
    "note": "Khan Academy introduces bonds and how they relate to stocks. It covers the bond side of this module in depth; the stock side is in Sections 1 and 3.",
    "more": [
      {
        "title": "What's the Difference Between Bonds and Stocks?",
        "url": "https://www.youtube.com/watch?v=3pohu_IpN2I"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A $1,000 bond pays a 5% coupon ($50 a year) for 10 years. The market requires 6%. (a) What is the present value of the coupons? (b) What is the present value of the face value? (c) What is the bond's value, and is it at a discount or a premium?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of coupons = $50 × 7.3601 = <strong>$368.01</strong>. Step 2: PV of face value = $1,000 ÷ (1.06)<sup>10</sup> = $1,000 ÷ 1.7908 = <strong>$558.39</strong>. Step 3: Bond value = $368.01 + $558.39 = <strong>$926.40</strong> — below the $1,000 face value, so it sells at a <strong>discount</strong>, because its 5% coupon is below the 6% market rate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A stock will pay a dividend of $2.20 next year. The required return is 10% and dividends grow at 4% a year. What is the stock's value under the Gordon growth model?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Value = D<sub>1</sub> ÷ (r − g) = $2.20 ÷ (0.10 − 0.04). Step 2: $2.20 ÷ 0.06 = <strong>$36.67</strong>. Step 3: Check the sensitivity: if growth were 5%, the value would be $2.20 ÷ 0.05 = $44.00 — one point of growth changes the value by about 20%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Interest rates rise from 6% to 7%. A bondholder must sell a 10-year bond paying $50 a year. Will the bond sell for more or less than before, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Less — bond prices fall when interest rates rise. Step 2: The bond's $50 coupons are fixed, and at a 7% discount rate their present value is smaller. Step 3: The buyer can now buy a new bond paying 7%, so the old 5% bond must sell cheaper to compete.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A firm must raise $100,000. It can borrow it (interest must be paid even in a bad year) or sell shares (dividends can be cut). State one advantage of each choice for the firm.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Debt's advantage — interest is a fixed, known cost, and the owners keep full control; the lenders get no vote. Step 2: Equity's advantage — no fixed payment, so in a bad year the firm can cut dividends instead of defaulting on a loan. Step 3: The trade-off is risk versus control, and Module 9 weighs it in full.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bond's coupon is 8% and the market requires 8%. What is its price relative to its $1,000 face value, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The bond sells at par — $1,000. Step 2: Its coupon equals the market's required return, so the present value of its cash flows is exactly the face value. Step 3: No discount or premium is needed to make it competitive with a new bond.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stock's market price implies dividends will grow at 8% a year forever, but the firm has grown dividends at 3% a year for a decade. What should an investor conclude?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The market price implies growth the firm has never achieved — the price is probably too high. Step 2: Either the firm's prospects have genuinely changed, or the market is over-optimistic. Step 3: The investor should check whether anything real justifies 8% growth before buying at that price.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A bond is:",
      "choices": [
        "A share of ownership in a firm",
        "A standardized loan promising fixed coupons and repayment of face value at maturity",
        "A bank account",
        "A type of insurance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A bond is debt with fixed, scheduled payments. (a) A share of ownership is stock. (c) A bank account is a deposit, not a traded security. (d) Insurance transfers risk; a bond lends money."
    },
    {
      "q": "The coupon on a bond is its:",
      "choices": [
        "Face value",
        "Fixed interest payment",
        "Maturity date",
        "Market price"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The coupon is the periodic interest payment. (a) Face value is the amount repaid at maturity. (c) Maturity is the repayment date. (d) Market price is what the bond sells for now."
    },
    {
      "q": "A $1,000 bond, 5% coupon, 10 years, market rate 6% is worth about:",
      "choices": [
        "$926.40",
        "$1,000.00",
        "$1,074.00",
        "$500.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). PV of coupons $368.01 + PV of face $558.39 = $926.40. (b) $1,000.00 is par, which would need a 6% coupon. (c) $1,074.00 would be a premium bond with a coupon above 6%. (d) $500.00 is half the face value and far below the coupons alone."
    },
    {
      "q": "The bond in the previous question sells at a discount because:",
      "choices": [
        "Its coupon is below the market rate",
        "Its coupon is above the market rate",
        "It has no maturity date",
        "It pays no interest"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A 5% coupon in a 6% market must sell below face value to compete. (b) A coupon above the market rate sells at a premium. (c) The bond has a 10-year maturity. (d) It pays $50 a year."
    },
    {
      "q": "When interest rates rise, bond prices:",
      "choices": [
        "Rise",
        "Fall",
        "Stay the same",
        "Double"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fixed coupons discounted at a higher rate are worth less. (a) Prices and rates move in opposite directions. (c) Prices change with the discount rate. (d) Prices fall, they do not double."
    },
    {
      "q": "Gordon growth model: dividend $2.20 next year, required return 10%, growth 4%. Value is:",
      "choices": [
        "$36.67",
        "$22.00",
        "$44.00",
        "$55.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). $2.20 ÷ (0.10 − 0.04) = $36.67. (b) $22.00 is $2.20 ÷ 0.10, ignoring growth. (c) $44.00 is the value if growth were 5%. (d) $55.00 is $2.20 ÷ 0.04, using growth as the denominator."
    },
    {
      "q": "Debt differs from equity for the firm because debt:",
      "choices": [
        "Must be paid even in a bad year, while dividends can be cut",
        "Gives lenders a vote in management",
        "Never has to be repaid",
        "Is free"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Interest is a fixed obligation; dividends are discretionary. (b) Lenders do not vote; shareholders do. (c) Debt must be repaid at maturity. (d) Debt costs interest."
    },
    {
      "q": "A stock's value under the Gordon model is very sensitive to the growth rate because:",
      "choices": [
        "The formula ignores dividends",
        "Growth is in the denominator, so a small change moves the value a great deal",
        "The required return is irrelevant",
        "Stocks never grow"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Value = D1 ÷ (r − g), so a one-point change in g moves the value sharply. (a) The formula is built on dividends. (c) The required return is in the denominator too. (d) Many stocks do grow their dividends."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Stocks, Bonds &amp; Valuation: Quick Reference</h3>\n<p><strong>Core idea:</strong> A security is worth the present value of the cash it will pay. Bonds pay fixed cash; stocks pay uncertain cash.</p>\n<div class=\"formula\">Bond value = PV of coupons + PV of face value &nbsp;|&nbsp; Gordon: Value = D<sub>1</sub> ÷ (r − g)</div>\n<p><strong>Worked bond:</strong> $1,000 face, 5% coupon ($50/yr), 10 years, market 6% → coupons $368.01 + face $558.39 = $926.40 (discount, because 5% &lt; 6%).</p>\n<p><strong>Worked stock:</strong> D<sub>1</sub> $2.20, r 10%, g 4% → $2.20 ÷ 0.06 = $36.67. At 5% growth the value would be $44.00.</p>\n<p><strong>Watch out:</strong> Rates up, bond prices down. And a stock valuation is a forecast — small changes in the growth assumption move the price a great deal.</p>\n<p><strong>Self-check:</strong> A bond's coupon is 8% and the market rate is 8%. What is its price? (Par — $1,000.) Now what if the market rate rises to 9%? (Below par — a discount.)</p>\n"
};
