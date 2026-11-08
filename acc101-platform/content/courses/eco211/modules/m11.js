// eco211 - Module 11: The Yield Curve & What It Predicts
module.exports = {
  "number": 11,
  "slug": "the-yield-curve",
  "title": "The Yield Curve & What It Predicts",
  "estTime": "3–4 hours",
  "objectives": [
    "Define the yield curve as yields plotted against maturity for the same borrower.",
    "Identify the three shapes: normal (upward), inverted (downward), and flat.",
    "Explain the expectations theory of why the curve slopes as it does.",
    "Explain why an inverted curve has predicted recessions, and why it is not a guarantee.",
    "Read a yield curve: compute spreads and state what the shape implies."
  ],
  "sections": [
    {
      "heading": "What the Yield Curve Is",
      "html": "<p>The <strong>yield curve</strong> is a picture of interest rates across time: for bonds from the same borrower — usually the U.S. Treasury — plot the yield on the vertical axis and the time to maturity on the horizontal axis. Each point is a different bond: 3 months, 2 years, 10 years, 30 years. Join the points and you have the curve.</p>\n<p>Read an example. On a normal day, the curve might read: 3-month yield 2.00%, 2-year yield 3.00%, 10-year yield 4.50%. The <strong>spread</strong> between the 10-year and the 3-month yield is 4.50% − 2.00% = <strong>2.50 percentage points, or 250 basis points</strong> (one basis point is 0.01%). That spread is the single number markets watch most.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The yield curve is the bond market's forecast, written in prices. Short rates reflect what the Fed is doing now; long rates reflect what investors expect the Fed and the economy to do for years.</div>"
    },
    {
      "heading": "Three Shapes: Normal, Inverted, Flat",
      "html": "<p>Most of the time the curve slopes <strong>upward (normal)</strong>: longer maturities pay higher yields. Investors demand extra return for tying money up longer and facing more inflation and rate risk. The example above — 2.00%, 3.00%, 4.50% — is normal.</p>\n<p>Sometimes the curve slopes <strong>downward (inverted)</strong>: short yields exceed long yields. Example: 3-month 5.00%, 2-year 4.50%, 10-year 4.00%. The 10-year yield is 1.00 percentage point — <strong>100 basis points</strong> — <em>below</em> the 3-month yield. Investors are piling into long bonds, pushing their prices up and yields down, because they expect the economy to weaken and the Fed to cut rates later. A <strong>flat</strong> curve has roughly equal yields at all maturities — often a transition between normal and inverted.</p>\n<p>Shape is read from the spread. Normal: 10-year minus 3-month is positive (here +250 basis points). Inverted: the spread is negative (here −100 basis points). Flat: the spread is near zero. The lab for this course has you compute these spreads and name the shape.</p>"
    },
    {
      "heading": "Why the Curve Slopes: Expectations and Risk",
      "html": "<p>The <strong>expectations theory</strong> says long-term rates are the average of the short-term rates investors expect over the bond's life. A 10-year yield of 4.50% means investors expect short rates to average about 4.50% over the next decade. If they expect the Fed to cut rates soon, the average falls — and the long yield falls below today's short rate. That is the mechanical reason inversion happens: the market expects lower rates ahead.</p>\n<p>Two more forces shape the curve. The <strong>liquidity premium</strong>: investors usually demand extra yield for long bonds because they are riskier, which tilts the curve upward in normal times. And <strong>segmented demand</strong>: pension funds must hold long bonds no matter the yield, and banks must hold short ones, so supply and demand in each maturity segment push yields around independently. Together, the three theories explain why the curve is usually upward, sometimes flat, and occasionally inverted.</p>\n<p>One more concept: the <strong>term spread</strong> (10-year minus 3-month) is the curve's headline number. When it turns negative, headlines follow — which is the next section.</p>"
    },
    {
      "heading": "The Curve as a Recession Predictor",
      "html": "<p>Here is the yield curve's claim to fame: every U.S. recession since the late 1970s was preceded by an inverted yield curve, usually within about two years. The logic is the expectations story: investors expect a slowdown, so they buy long bonds, long yields fall below short yields, and the inversion records their expectation. It has been the most reliable recession signal in economics — which is why the financial press treats each inversion as a warning siren.</p>\n<p>But the record needs honesty. First, inversion predicts a slowdown, not its date — recessions have arrived anywhere from months to about two years after inversion. Second, there have been false alarms and near-misses, and the signal has weakened when the Fed itself distorts long yields through quantitative easing. Third, inversion does not cause the recession; it reflects investors' expectations, which can be wrong. A prudent reading: an inverted curve means recession risk has risen and it is time to prepare — not that a recession is guaranteed next month.</p>\n<p>The curve also predicts in the other direction. A steep normal curve — a wide positive spread — usually accompanies recovery: the Fed has cut short rates, long rates stay higher on growth hopes, and borrowing is cheap at the short end. The curve's slope is a summary of the economy's direction, not a crystal ball.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Yield curve: yields of one borrower's bonds plotted against maturity. The key spread is 10-year minus 3-month.</li>\n<li>Normal (upward): long yields above short; inverted (downward): short above long; flat: roughly equal.</li>\n<li>Expectations theory: long rates average expected future short rates; inversion means the market expects rate cuts and slower growth.</li>\n<li>Every U.S. recession since the late 1970s was preceded by an inversion, usually within about two years — a strong signal, not a guarantee.</li>\n<li>Spreads in basis points: normal example +250 bp; inverted example −100 bp (short exceeds long by 100 bp).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying an inverted curve \"causes\" a recession. It does not — it records investors' expectations. Blaming the signal for the slowdown is like blaming a thermometer for a fever.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Comparing yields from different borrowers. A corporate 10-year yield and a Treasury 3-month yield differ by credit risk as well as maturity. The yield curve only makes sense for one borrower at a time — normally the U.S. Treasury.</div>\n<p><strong>Ready-to-Work link:</strong> The lab prices bonds and reads the curve from real-shaped numbers. If you can compute a spread and name the shape, you can read the single chart that every central banker, investor, and business planner checks first.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Yield curve", "def": "A plot of bond yields against time to maturity for bonds from the same borrower." },
    { "term": "Term spread", "def": "The difference between a long-term yield and a short-term yield, usually 10-year minus 3-month." },
    { "term": "Basis point", "def": "One-hundredth of a percentage point (0.01%); 250 basis points = 2.50 percentage points." },
    { "term": "Normal (upward-sloping) yield curve", "def": "A curve where longer maturities pay higher yields than shorter ones." },
    { "term": "Inverted yield curve", "def": "A curve where short-term yields exceed long-term yields." },
    { "term": "Flat yield curve", "def": "A curve where short- and long-term yields are roughly equal." },
    { "term": "Expectations theory", "def": "The theory that long-term rates equal the average of the short-term rates investors expect over the bond's life." },
    { "term": "Liquidity premium", "def": "The extra yield investors demand for holding longer, riskier bonds." },
    { "term": "Term premium", "def": "The extra return for lending long rather than rolling over short loans, reflecting risk and uncertainty." },
    { "term": "Recession", "def": "A sustained decline in economic activity, usually measured as falling real GDP." },
    { "term": "Leading indicator", "def": "A variable that tends to move before the economy does, such as the yield curve's slope." },
    { "term": "Federal funds rate", "def": "The overnight interbank rate the Fed targets; the anchor of the short end of the curve." },
    { "term": "Treasury yield", "def": "The return on a U.S. government bond of a given maturity." },
    { "term": "Steepening", "def": "The yield curve's slope increasing, as long yields rise relative to short yields." },
    { "term": "Flattening", "def": "The yield curve's slope shrinking toward zero as short and long yields converge." }
  ],
  "video": {
    "title": "The chart that predicts recessions",
    "embedUrl": "https://www.youtube.com/embed/xiiHjrewXNI",
    "note": "Vox visualizes the yield curve over four decades: what it is, why it inverts, and why an inversion has preceded every U.S. recession in the last 50 years. Watch it, then compute the spreads in this module's examples yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A yield curve reads: 3-month 2.00%, 2-year 3.00%, 10-year 4.50%. (a) What is the 10-year minus 3-month spread in percentage points and in basis points? (b) What shape is the curve?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Spread = 4.50% − 2.00% = <strong>2.50 percentage points</strong>. Step 2: In basis points, 2.50 × 100 = <strong>250 basis points</strong>. Step 3: (b) The curve slopes upward, so it is <strong>normal</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A yield curve reads: 3-month 5.00%, 2-year 4.50%, 10-year 4.00%. (a) By how many basis points does the 3-month yield exceed the 10-year yield? (b) What shape is the curve, and what does it signal?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 5.00% − 4.00% = 1.00 percentage point = <strong>100 basis points</strong>. Step 2: (b) The curve slopes downward, so it is <strong>inverted</strong>. Step 3: It signals that investors expect slower growth and lower rates ahead — recession risk has risen, though a recession is not guaranteed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Use the expectations theory: investors expect short-term rates to average 3% over the next 10 years, and the liquidity premium on 10-year bonds is 0.50%. (a) What 10-year yield does the theory predict? (b) If the current 3-month rate is 5%, is the curve inverted?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 10-year yield ≈ expected average short rate + liquidity premium = 3% + 0.50% = <strong>3.50%</strong>. Step 2: (b) The 3-month rate is 5% and the 10-year yield is 3.50%, so short exceeds long — the curve is <strong>inverted</strong>. Step 3: Investors expect the Fed to cut rates from 5% toward 3% over time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bond's price is $1,027.23 today: a $1,000 bond with a 6% coupon for 3 years at a 5% yield. (a) Show the pricing steps. (b) If the yield rose to 6%, what would the price be, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Coupon = $60 a year. Price = $60 ÷ 1.05 + $60 ÷ 1.05² + $1,060 ÷ 1.05³ = $57.14 + $54.42 + $915.67 = <strong>$1,027.23</strong>. Step 2: (b) At a 6% yield the coupon equals the yield, so the price is <strong>$1,000</strong> (par). Step 3: The yield rose, so the price fell — the Module 4 seesaw, now read through the curve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A yield curve reads: 3-month 5.25%, 2-year 4.75%, 10-year 4.25%. (a) By how many basis points is the 2-year yield above the 10-year yield? (b) What shape is this, and what should a borrower conclude?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 4.75% − 4.25% = 0.50 percentage points = <strong>50 basis points</strong>. Step 2: (b) Short yields exceed long yields, so the curve is <strong>inverted</strong>. Step 3: A borrower should conclude that markets expect rate cuts — but should not count on them; locking in a long rate now may still be wise if the business cannot bear rate risk.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in two or three sentences why an inverted yield curve has predicted recessions but does not cause them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Inversion happens because investors expect slower growth and Fed rate cuts, so they buy long bonds and push long yields down. Step 2: Their expectation is often right — the slowdown follows — which is why the signal has worked. Step 3: But the curve is a record of expectations, not a cause: it no more causes the recession than a weather forecast causes rain.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The yield curve plots yields against maturity for bonds from:",
      "choices": ["Many different borrowers mixed together", "The same borrower, usually the U.S. Treasury", "Only corporate junk bonds", "Only foreign governments"],
      "answer": 1,
      "explanation": "Correct: (b). One borrower, so only maturity differs. (a) Mixing borrowers mixes in credit risk. (c) and (d) are too narrow — the standard curve is Treasuries."
    },
    {
      "q": "Yields are 3-month 2.00%, 2-year 3.00%, 10-year 4.50%. The 10-year minus 3-month spread is:",
      "choices": ["250 basis points", "100 basis points", "50 basis points", "0 basis points"],
      "answer": 0,
      "explanation": "Correct: (a). 4.50% − 2.00% = 2.50 percentage points = 250 basis points. (b) would be a 1.00-point spread. (c) would be 0.50 points. (d) would be a flat curve."
    },
    {
      "q": "Yields are 3-month 5.00%, 2-year 4.50%, 10-year 4.00%. The curve is:",
      "choices": ["Normal", "Inverted", "Flat", "Not a yield curve"],
      "answer": 1,
      "explanation": "Correct: (b). Short yields exceed long yields — downward-sloping. (a) needs long yields above short. (c) needs roughly equal yields. (d) It is a textbook yield curve."
    },
    {
      "q": "In the inverted example above, the 3-month yield exceeds the 10-year yield by:",
      "choices": ["250 basis points", "100 basis points", "50 basis points", "500 basis points"],
      "answer": 1,
      "explanation": "Correct: (b). 5.00% − 4.00% = 1.00 point = 100 basis points. (a) is the normal example's spread. (c) is half a point. (d) is five points."
    },
    {
      "q": "The expectations theory says a 10-year yield reflects:",
      "choices": ["Only today's short rate", "The average of the short rates investors expect over the next 10 years", "The government's budget deficit alone", "The stock market's return"],
      "answer": 1,
      "explanation": "Correct: (b). Long rates average expected future short rates (plus a premium). (a) ignores the future. (c) Deficits matter but are not the theory. (d) Stocks are a different market."
    },
    {
      "q": "An inverted yield curve has historically meant:",
      "choices": ["A guaranteed recession next month", "Recession risk has risen — every U.S. recession since the late 1970s was preceded by one", "The economy will boom forever", "Interest rates will never change again"],
      "answer": 1,
      "explanation": "Correct: (b). The record is strong but the timing varies and it is a signal, not a guarantee. (a) No signal guarantees timing. (c) and (d) are the opposite of what inversion means."
    },
    {
      "q": "A $1,000 bond with a 6% coupon for 3 years at a 5% yield costs about:",
      "choices": ["$1,000.00", "$1,027.23", "$963.33", "$890.00"],
      "answer": 1,
      "explanation": "Correct: (b). $60 ÷ 1.05 + $60 ÷ 1.05² + $1,060 ÷ 1.05³ = $57.14 + $54.42 + $915.67 = $1,027.23. (a) would be the price at a 6% yield. (c) is a 4% 2-year bond at 6%. (d) is a 2-year zero-coupon bond at 6%."
    },
    {
      "q": "One basis point equals:",
      "choices": ["1 percentage point", "0.01 percentage points", "10 percentage points", "0.1% of a bond's price"],
      "answer": 1,
      "explanation": "Correct: (b). 1 bp = 0.01%. (a) is 100 basis points. (c) is 1,000 basis points. (d) confuses a rate unit with a price share."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — The Yield Curve: Quick Reference</h3>\n<p><strong>Core idea:</strong> The yield curve plots one borrower's yields against maturity. Short rates show what the Fed is doing now; long rates show what investors expect next.</p>\n<p><strong>Worked anchors:</strong> Normal: 3-mo 2.00%, 2-yr 3.00%, 10-yr 4.50% → spread 4.50 − 2.00 = 2.50 points = <strong>250 bp</strong>. Inverted: 3-mo 5.00%, 2-yr 4.50%, 10-yr 4.00% → short exceeds long by <strong>100 bp</strong>. DIY: 3-mo 5.25%, 2-yr 4.75%, 10-yr 4.25% → 2-yr above 10-yr by <strong>50 bp</strong>.</p>\n<p><strong>Shapes:</strong> Normal = upward (long &gt; short). Inverted = downward (short &gt; long). Flat = roughly equal.</p>\n<p><strong>Expectations theory:</strong> Long yield ≈ average expected future short rates + liquidity premium. Inversion means the market expects rate cuts and slower growth.</p>\n<p><strong>Record:</strong> Every U.S. recession since the late 1970s was preceded by an inversion, usually within about two years. A strong signal, not a guarantee — and it does not cause the recession.</p>\n<p><strong>Bond link:</strong> $1,000 bond, 6% coupon, 3 years, 5% yield → $1,027.23. At a 6% yield it is worth $1,000 (par).</p>\n<p><strong>Watch out:</strong> Compare yields from one borrower only, and read the spread in basis points (1 bp = 0.01%).</p>\n<p><strong>Self-check:</strong> 3-mo 4.00%, 10-yr 4.00%. What shape? (Flat — spread 0.)</p>\n"
};
