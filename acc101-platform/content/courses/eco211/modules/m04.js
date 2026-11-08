// eco211 - Module 4: Bond Markets & Bond Pricing
module.exports = {
  "number": 4,
  "slug": "bond-markets-and-bond-pricing",
  "title": "Bond Markets & Bond Pricing",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a bond as a loan with a face value, coupon, and maturity date.",
    "Price a bond as the present value of its coupon payments plus its face value.",
    "Explain why bond prices fall when interest rates rise, and compute the change.",
    "Distinguish coupon rate, current yield, and yield to maturity.",
    "Explain how credit ratings and default risk affect bond prices and yields."
  ],
  "sections": [
    {
      "heading": "What a Bond Is",
      "html": "<p>A <strong>bond</strong> is a borrower's IOU sold to investors. When you buy a bond, you lend money to the issuer — a government or a company — and the issuer promises to pay you back on a schedule. Three numbers define every bond. The <strong>face value</strong> (or par value) is the amount repaid at maturity, usually $1,000. The <strong>coupon</strong> is the annual interest payment, set by the <strong>coupon rate</strong> times the face value: a $1,000 bond with a 5% coupon rate pays $50 a year. The <strong>maturity date</strong> is when the face value is repaid and the bond ends.</p>\n<p>Bonds are the largest financial market in the world — bigger than the stock market — because governments and companies borrow far more than they raise by selling shares. The U.S. Treasury alone issues bills (under one year), notes (2–10 years), and bonds (up to 30 years). Companies issue <strong>corporate bonds</strong>; cities and states issue <strong>municipal bonds</strong>. The bond market is where mortgages get their rates, governments fund deficits, and pension funds park their safest money.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A bond is a loan with a price tag that changes daily. You can hold it to maturity and collect the promised payments, or sell it early — but the sale price depends on interest rates that day.</div>"
    },
    {
      "heading": "Pricing a Bond: Present Value of Its Payments",
      "html": "<p>A bond's price is the present value of everything it will pay: the coupons, year by year, plus the face value at maturity. If <em>C</em> is the annual coupon, <em>F</em> is the face value, <em>r</em> is the market interest rate (yield), and <em>n</em> is the years to maturity, the price is the sum of each payment discounted at <em>r</em>.</p>\n<div class=\"formula\">Bond price = C ÷ (1+r) + C ÷ (1+r)² + … + (C + F) ÷ (1+r)<sup>n</sup></div>\n<p>Work an example. A $1,000 bond pays a 5% coupon, so C = $50 a year, for 3 years, and the market yield is 4%. Price = $50 ÷ 1.04 + $50 ÷ (1.04)² + $1,050 ÷ (1.04)³ = $48.08 + $46.23 + $933.44 = <strong>$1,027.75</strong>. Because the coupon (5%) beats the market yield (4%), the bond sells above face value — at a <strong>premium</strong>.</p>\n<p>Try a longer bond. A $1,000 bond with a 6% coupon (C = $60) for 5 years at a 5% yield: $60 ÷ 1.05 + $60 ÷ 1.05² + $60 ÷ 1.05³ + $60 ÷ 1.05⁴ + $1,060 ÷ 1.05⁵ = $57.14 + $54.42 + $51.83 + $49.36 + $830.54 = <strong>$1,043.29</strong>. Again a premium, because 6% beats 5%. A <strong>zero-coupon bond</strong> pays no coupons at all — only the face value at maturity: a $1,000 zero-coupon bond maturing in 2 years at a 6% yield costs $1,000 ÷ (1.06)² = $1,000 ÷ 1.1236 = <strong>$890.00</strong>.</p>"
    },
    {
      "heading": "Why Prices Fall When Rates Rise",
      "html": "<p>The iron rule of bonds: <strong>when interest rates rise, bond prices fall — and when rates fall, prices rise.</strong> The logic is present value. A bond's coupons are fixed; when the market rate rises, those fixed payments are discounted more heavily, so they are worth less today.</p>\n<p>Numbers make it vivid. Take a $1,000 bond with an 8% coupon (C = $80) for 10 years. At a 10% market yield its price is $80 ÷ 1.10 + $80 ÷ 1.10² + … + $1,080 ÷ 1.10¹⁰ = <strong>$877.11</strong> — below face value, a <strong>discount</strong>, because its 8% coupon loses to the market's 10%. If the yield fell to 8%, the same bond would sell at exactly $1,000 (par), because its coupon matches the market. And a 5% coupon bond ($50 a year) for 4 years at a 6% yield costs $50 ÷ 1.06 + $50 ÷ 1.06² + $50 ÷ 1.06³ + $1,050 ÷ 1.06⁴ = $47.17 + $44.50 + $41.98 + $831.70 = <strong>$965.35</strong>.</p>\n<p>Longer bonds swing harder. A 30-year bond's payments stretch far into the future, so a rate change discounts them heavily; a 1-year bond barely moves. That is why long-term bondholders lost the most when rates rose sharply — and gained the most when rates fell. Duration, the formal measure of this sensitivity, is covered in the study guide.</p>"
    },
    {
      "heading": "Coupon Rate, Current Yield, Yield to Maturity",
      "html": "<p>Three yields, three meanings — do not mix them up. The <strong>coupon rate</strong> is fixed at issue: coupon ÷ face value. A $1,000 bond paying $60 a year has a 6% coupon rate, forever. The <strong>current yield</strong> is coupon ÷ current price: if that bond sells for $1,200, its current yield is $60 ÷ $1,200 = <strong>5%</strong>. The <strong>yield to maturity (YTM)</strong> is the single interest rate that makes the present value of all the bond's remaining payments equal its current price — the true return if you hold to maturity and all payments arrive.</p>\n<p>When a bond sells at par ($1,000), all three are equal: coupon rate 6%, current yield 6%, YTM 6%. Above par, current yield and YTM fall below the coupon rate; below par, they rise above it. A <strong>perpetuity</strong> — a bond that pays forever, with no maturity — has a simple price: annual payment ÷ yield. A perpetuity paying $100 a year at a 5% yield is worth $100 ÷ 0.05 = <strong>$2,000</strong>.</p>\n<p>YTM is the yield quoted in the news when reporters say \"the 10-year Treasury yield.\" It is the market's verdict on what lending to the government for 10 years should earn — and it moves every second the market is open.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A bond is a loan: face value repaid at maturity, coupons paid along the way.</li>\n<li>Bond price = present value of coupons plus face value, discounted at the market yield.</li>\n<li>Rates up → prices down; rates down → prices up. Longer bonds move more.</li>\n<li>Coupon rate is fixed; current yield = coupon ÷ price; YTM is the return if held to maturity.</li>\n<li>At par, coupon rate = current yield = YTM. Above par, yields are below the coupon rate; below par, above it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a bond that falls in price has \"lost money\" for a holder who keeps it to maturity. If the issuer pays as promised, the holder still collects every coupon plus the $1,000 face value. The price fall matters only if you sell early — or if you are a bank holding bonds it must sell, which is how Silicon Valley Bank got into trouble in 2023 (Module 8).</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a bond's yield is its coupon rate. The coupon rate never changes; the yield changes every day with the price. A $60 coupon on a $1,200 bond is a 5% current yield, not 6%.</div>\n<p><strong>Ready-to-Work link:</strong> The lab for this course prices bonds and reads the yield curve. If you can price a bond, you can read the bond market — and the bond market sets your mortgage rate.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Bond", "def": "A borrower's IOU sold to investors: coupons paid over time and face value repaid at maturity." },
    { "term": "Face value (par value)", "def": "The amount a bond repays at maturity, usually $1,000." },
    { "term": "Coupon", "def": "The annual interest payment on a bond, equal to the coupon rate times the face value." },
    { "term": "Coupon rate", "def": "The annual coupon divided by the face value, fixed when the bond is issued." },
    { "term": "Maturity date", "def": "The date when a bond's face value is repaid and the bond ends." },
    { "term": "Treasury security", "def": "A bond, note, or bill issued by the U.S. federal government." },
    { "term": "Corporate bond", "def": "A bond issued by a company to borrow from investors." },
    { "term": "Municipal bond", "def": "A bond issued by a state or local government, usually tax-exempt at the federal level." },
    { "term": "Zero-coupon bond", "def": "A bond that pays no coupons; it sells below face value and repays only the face value at maturity." },
    { "term": "Premium", "def": "A bond selling above its face value, because its coupon beats the market yield." },
    { "term": "Discount", "def": "A bond selling below its face value, because its coupon is below the market yield." },
    { "term": "Current yield", "def": "A bond's annual coupon divided by its current market price." },
    { "term": "Yield to maturity (YTM)", "def": "The interest rate that makes the present value of a bond's remaining payments equal its current price." },
    { "term": "Perpetuity", "def": "A bond that pays a fixed amount forever, with no maturity date; price = payment ÷ yield." },
    { "term": "Credit rating", "def": "An agency's opinion of a bond issuer's ability to repay, from AAA (safest) down to junk." },
    { "term": "Default risk", "def": "The chance a bond issuer fails to pay interest or principal as promised." },
    { "term": "Junk bond", "def": "A bond with a low credit rating and high default risk, which must pay a high yield to attract buyers." },
    { "term": "Duration", "def": "A measure of how sensitive a bond's price is to interest-rate changes; longer bonds have higher duration." }
  ],
  "video": {
    "title": "Bonds, Explained With a Library Book",
    "embedUrl": "https://www.youtube.com/embed/PILQ226RjF4",
    "note": "Penny E explains bonds with a library analogy: lend your $1,000 'book,' collect rent (coupons), get it back on the due date — and see why the book is worth less when rates rise. Compare her $1,000 → about $923 example with the bond prices computed in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A $1,000 bond pays a 5% coupon for 3 years and the market yield is 4%. (a) What is the annual coupon? (b) Compute the bond's price step by step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Coupon C = 0.05 × $1,000 = <strong>$50</strong> a year. Step 2: Price = $50 ÷ 1.04 + $50 ÷ 1.04² + $1,050 ÷ 1.04³. Step 3: = $48.08 + $46.23 + $933.44 = <strong>$1,027.75</strong>. Step 4: The bond sells at a premium because its 5% coupon beats the 4% market yield.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A $1,000 bond pays a 6% coupon for 5 years and the market yield is 5%. Compute its price step by step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Coupon C = 0.06 × $1,000 = <strong>$60</strong> a year. Step 2: Price = $60 ÷ 1.05 + $60 ÷ 1.05² + $60 ÷ 1.05³ + $60 ÷ 1.05⁴ + $1,060 ÷ 1.05⁵. Step 3: = $57.14 + $54.42 + $51.83 + $49.36 + $830.54 = <strong>$1,043.29</strong>. Step 4: A premium again — the 6% coupon beats the 5% yield.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A zero-coupon bond repays $1,000 in 2 years and the market yield is 6%. (a) What is its price? (b) Why is it so far below $1,000?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Price = $1,000 ÷ (1.06)² = $1,000 ÷ 1.1236 = <strong>$890.00</strong>. Step 2: The buyer gets no coupons for two years, so the only way to earn 6% a year is to buy at a deep discount. Step 3: Check: $890.00 × 1.1236 = $1,000.00 — the discount is exactly the interest earned.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A $1,000 bond with an 8% coupon for 10 years sells for $877.11 when the yield is 10%. (a) Is it at a premium or a discount? (b) What would its price be if the yield fell to 8%?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: $877.11 is below $1,000, so it is at a <strong>discount</strong> — its 8% coupon loses to the market's 10%. Step 2: If the yield fell to 8%, the coupon would match the market exactly. Step 3: Price would be <strong>$1,000</strong> (par) — each payment discounted at its own coupon rate returns the face value. Step 4: This is the seesaw: yield down 2 points, price up $122.89.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bond pays a $60 coupon and sells for $1,200. (a) What is its current yield? (b) A perpetuity pays $100 a year and the yield is 5%. What is its price?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Current yield = $60 ÷ $1,200 = 0.05 = <strong>5%</strong>. Step 2: The coupon rate on a $1,000 face would be 6%, but the current yield is only 5% because the price is above par. Step 3: Perpetuity price = $100 ÷ 0.05 = <strong>$2,000</strong>. Step 4: A payment stream that never ends is worth 20 times its annual payment at a 5% yield.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two bonds each pay $50 a year for 4 years plus $1,000 at maturity. Bond X's yield is 5%; Bond Y's yield is 6%. (a) Which costs more, and why? (b) Compute Bond Y's price (Bond X's price is $1,000, since its coupon equals its yield).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Bond X costs more — its payments are discounted at the lower rate, so they are worth more today. Step 2: Bond Y price = $50 ÷ 1.06 + $50 ÷ 1.06² + $50 ÷ 1.06³ + $1,050 ÷ 1.06⁴. Step 3: = $47.17 + $44.50 + $41.98 + $831.70 = <strong>$965.35</strong>. Step 4: One extra point of yield cuts the price by $34.65 — the seesaw in numbers.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A $1,000 bond with a 5% coupon pays how much interest each year?",
      "choices": ["$5", "$50", "$500", "$1,000"],
      "answer": 1,
      "explanation": "Correct: (b). Coupon = 0.05 × $1,000 = $50. (a) is 0.5%. (c) is 50%. (d) is the face value, repaid only at maturity."
    },
    {
      "q": "A $1,000 bond, 5% coupon, 3 years, yield 4%, costs about:",
      "choices": ["$1,000.00", "$1,027.75", "$890.00", "$965.35"],
      "answer": 1,
      "explanation": "Correct: (b). $50 ÷ 1.04 + $50 ÷ 1.04² + $1,050 ÷ 1.04³ = $1,027.75. (a) would be the price if the yield equaled the coupon, 5%. (c) is a 2-year zero-coupon price at 6%. (d) is a 4-year 5% bond at a 6% yield."
    },
    {
      "q": "A $1,000 zero-coupon bond maturing in 2 years at a 6% yield costs:",
      "choices": ["$1,000.00", "$1,123.60", "$890.00", "$940.00"],
      "answer": 2,
      "explanation": "Correct: (c). $1,000 ÷ (1.06)² = $1,000 ÷ 1.1236 = $890.00. (a) ignores discounting. (b) is $1,000 grown at 6% for two years — the reverse operation. (d) is $1,000 discounted one year at 6%."
    },
    {
      "q": "When the market interest rate rises, an existing bond's price:",
      "choices": ["Rises, because its coupons are worth more", "Falls, because its fixed payments are discounted more heavily", "Stays the same — coupons are fixed", "Becomes zero"],
      "answer": 1,
      "explanation": "Correct: (b). Higher discount rates shrink present value. (a) reverses the relationship. (c) Confuses fixed coupons with a fixed price — the price is the present value, which moves. (d) The price falls but stays positive."
    },
    {
      "q": "A $1,000 bond with an 8% coupon for 10 years sells for $877.11 at a 10% yield. It is selling at a:",
      "choices": ["Premium, because the price is high", "Discount, because the coupon is below the market yield", "Par, because the price equals $1,000", "Loss, because the issuer will default"],
      "answer": 1,
      "explanation": "Correct: (b). $877.11 < $1,000, and 8% < 10%, so it is a discount bond. (a) A premium is a price above $1,000. (c) Par is exactly $1,000. (d) A discount reflects the yield gap, not a default."
    },
    {
      "q": "A bond pays a $60 coupon and sells for $1,200. Its current yield is:",
      "choices": ["6%", "5%", "10%", "12%"],
      "answer": 1,
      "explanation": "Correct: (b). $60 ÷ $1,200 = 5%. (a) is the coupon rate on a $1,000 face, not the yield at this price. (c) would need a $120 coupon. (d) would need a $144 coupon."
    },
    {
      "q": "A perpetuity pays $100 a year forever. At a 5% yield it is worth:",
      "choices": ["$500", "$1,000", "$2,000", "$5,000"],
      "answer": 2,
      "explanation": "Correct: (c). $100 ÷ 0.05 = $2,000. (a) divides by 20%. (b) is the price at a 10% yield. (d) is the price at a 2% yield."
    },
    {
      "q": "Which bond's price moves most when interest rates change?",
      "choices": ["A 1-year bond", "A 30-year bond", "They move exactly the same", "A bond that has already matured"],
      "answer": 1,
      "explanation": "Correct: (b). Long bonds have payments far in the future, so discounting hits them hardest. (a) A 1-year bond barely moves. (c) Maturity is the key difference. (d) A matured bond has no price — it has been repaid."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Bond Markets & Bond Pricing: Quick Reference</h3>\n<p><strong>Core idea:</strong> A bond's price is the present value of its coupons plus its face value, discounted at the market yield.</p>\n<div class=\"formula\">Bond price = C ÷ (1+r) + C ÷ (1+r)² + … + (C + F) ÷ (1+r)<sup>n</sup></div>\n<p><strong>Key terms:</strong> C = annual coupon, F = face value ($1,000), r = market yield, n = years to maturity.</p>\n<p><strong>Worked anchors:</strong> 5% coupon, 3 years, 4% yield → $1,027.75. 6% coupon, 5 years, 5% yield → $1,043.29. Zero-coupon $1,000 in 2 years at 6% → $890.00. 8% coupon, 10 years, 10% yield → $877.11.</p>\n<p><strong>The seesaw:</strong> Yield up → price down. Yield down → price up. Coupon = yield → price = par ($1,000). Coupon &gt; yield → premium. Coupon &lt; yield → discount.</p>\n<p><strong>Yields:</strong> Coupon rate = coupon ÷ face (fixed). Current yield = coupon ÷ price. YTM = the rate that equates price to the present value of all payments. Perpetuity price = payment ÷ yield ($100 ÷ 0.05 = $2,000).</p>\n<p><strong>Watch out:</strong> A price fall hurts only if you sell early. Held to maturity, a bond that pays as promised returns every coupon plus $1,000.</p>\n<p><strong>Self-check:</strong> Price a $1,000 bond with a $40 coupon for 1 year at a 3% yield. (Answer: $1,040 ÷ 1.03 = $1,009.71.)</p>\n"
};
