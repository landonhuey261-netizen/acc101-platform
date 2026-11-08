module.exports = {
  "number": 10,
  "slug": "monetary-policy-depth",
  "title": "Monetary Policy in Depth: Rules vs. Discretion",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the central bank's tools: open market operations, the policy rate, and reserve requirements.",
    "Trace the transmission mechanism from the policy rate to output and inflation.",
    "Use the Taylor rule to compute a recommended policy rate.",
    "Explain the time-inconsistency problem and the case for rules over discretion.",
    "Compare inflation targeting with other monetary frameworks."
  ],
  "sections": [
    {
      "heading": "The Tools: How a Central Bank Moves Rates",
      "html": "<p>A modern central bank has three classic tools. <strong>Open market operations</strong> — buying or selling government bonds — are the workhorse: buying bonds injects reserves, raises the money supply, and pushes the short-term interest rate down (Module 3's LM shift). The <strong>policy rate</strong> is the rate the central bank charges banks to borrow reserves, or pays them on reserves held at the central bank; it anchors the whole structure of short-term rates. <strong>Reserve requirements</strong> set the fraction of deposits banks must hold, changing the money multiplier — powerful, but blunt, so it is used rarely.</p><p>Worked example: the central bank buys $10 billion of bonds with a 10% reserve ratio. Reserves rise $10 billion and the money supply can rise by up to 10 × $10 billion = <strong>$100 billion</strong> (Module 3). The extra money pushes the policy rate down — say from 5% to 4% — and banks pass the cut on to borrowers. After the 2008 crisis, central banks added a fourth tool, <strong>quantitative easing</strong>: buying long-term bonds to push down long-term rates when the short-term rate was already at zero. Same logic, longer maturity.</p><div class=\"formula\">Buy bonds → reserves up → money up → rates down &nbsp;|&nbsp; Sell bonds → reserves down → money down → rates up</div>\n<p>Cutting the policy rate is only the first link in a chain — the <strong>transmission mechanism</strong>. Step 1: the policy rate falls, so banks' funding costs fall and market rates follow. Step 2: cheaper borrowing raises investment (I = 500 − 50r: at r = 4%, I = 300; at r = 6%, I = 200) and lifts consumption of durable goods bought on credit. Step 3: higher spending raises output through the multiplier. Step 4: with a lag of a year or two, higher demand raises inflation. There is also an <strong>exchange-rate channel</strong>: lower rates make domestic assets less attractive, the currency depreciates, and net exports rise (Module 11).</p><p>Every link can break. Banks may not pass the cut on if they are repairing their own balance sheets. Firms may not borrow if they expect no customers, however cheap the loan — the “pushing on a string” problem. And households may save the extra cash rather than spend it. That is why central bankers watch credit conditions, not just their own rate: the policy rate is a lever, not a guarantee.</p><div class=\"callout\"><strong>Key idea:</strong> Monetary policy works through borrowing, spending, and the exchange rate — with long and variable lags. A rate cut today moves inflation in a year or two, not next week.</div>"
    },
    {
      "heading": "The Taylor Rule: A Recipe for the Policy Rate",
      "html": "<p>How should the central bank set the rate? The <strong>Taylor rule</strong> is a simple recipe: policy rate = equilibrium real rate + inflation + 0.5 × (inflation − target) + 0.5 × (output gap). In symbols: i = r* + π + 0.5(π − π*) + 0.5 × [(Y − Y*) ÷ Y* × 100]. The logic is plain: raise the rate more than one-for-one with inflation (so the real rate rises and cools demand), and cut it when output is below potential.</p><p>Worked example: equilibrium real rate r* = 2%, inflation π = 4%, target π* = 2%, output gap = −4% (output 4% below potential). Then i = 2 + 4 + 0.5 × (4 − 2) + 0.5 × (−4) = 2 + 4 + 1 − 2 = <strong>5%</strong>. The real rate is i − π = 5 − 4 = 1%, below the 2% equilibrium — policy is expansionary, as it should be with a negative output gap, even though inflation is above target. Check a second case: π = 2%, gap = 0%: i = 2 + 2 + 0 + 0 = <strong>4%</strong>, a neutral stance. The Taylor rule is a guide, not a law — no central bank follows it mechanically — but it is the benchmark every policy decision is judged against.</p><div class=\"formula\">Taylor rule: i = r* + π + 0.5(π − π*) + 0.5 × (output gap %) &nbsp;|&nbsp; Example: 2 + 4 + 1 − 2 = 5%</div>"
    },
    {
      "heading": "Rules vs. Discretion: The Time-Inconsistency Problem",
      "html": "<p>Here is the trap. A central bank that promises low inflation gains credibility — people set wages expecting 2%, and the Phillips curve stays put. But once wages are set, the bank is tempted to create a surprise burst of inflation to push unemployment below the natural rate for a while. People anticipate the temptation, raise their inflation expectations, and the bank ends up with higher inflation and no gain in jobs — the <strong>time-inconsistency problem</strong>. The promise was optimal to make and suboptimal to keep, and everyone knows it.</p><p>The solutions all tie the bank's hands in advance. A <strong>rule</strong> (such as the Taylor rule, or a fixed money-growth rule) removes the temptation by removing the choice. <strong>Central bank independence</strong> — giving the bank a clear mandate and a long term, insulated from elections — makes the promise credible because the people making it do not benefit from breaking it. <strong>Inflation targeting</strong> (a public 2% target, with the bank explaining every miss) makes breaking the promise visible and costly. The evidence favours the constrained bank: countries with independent central banks have had lower inflation without obviously worse output.</p><div class=\"callout\"><strong>Key idea:</strong> Credibility is a central bank's most valuable asset, and it is earned by visibly refusing to do the tempting thing. A rule is not red tape — it is the mechanism that makes the promise believable.</div>"
    },
    {
      "heading": "Inflation Targeting — and Its Rivals",
      "html": "<p><strong>Inflation targeting</strong> is the dominant framework today: the central bank announces a target (commonly 2%), sets rates to hit it over the medium term, and explains itself in public. Its strengths are transparency and anchored expectations — when π<sup>e</sup> stays at 2%, the Phillips curve does not shift, and disinflation is cheaper. Its weakness showed in 2008 and after: a bank that watches only consumer-price inflation can miss a housing bubble or a financial crisis brewing underneath stable prices.</p><p>The rivals each fix one weakness and create another. <strong>Nominal GDP targeting</strong> aims at the growth of nominal spending (real growth plus inflation), so it automatically eases more in a recession and tightens more in a boom — but nominal GDP is revised often and is harder to explain to the public. A <strong>price-level target</strong> promises to make up past misses (if inflation undershoots this year, it must overshoot next year), which anchors expectations powerfully but forces the bank to create inflation after a deflationary shock. A <strong>money-growth rule</strong> (Friedman's k-percent rule) is simple and transparent, but velocity proved too unstable for it to work in practice. There is no perfect framework — only trade-offs, chosen in public, and judged by results.</p><div class=\"callout\"><strong>Common mistake:</strong> Thinking inflation targeting means the central bank ignores jobs. A 2% target with a medium-term horizon lets the bank ease in a recession and tighten in a boom — the target disciplines the <em>average</em>, not every month's decision.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Tools: open market operations, the policy rate, reserve requirements; QE at the zero lower bound.</li><li>Transmission: policy rate → market rates → investment and consumption → output → inflation, with lags.</li><li>Taylor rule: i = r* + π + 0.5(π − π*) + 0.5 × gap; example gives i = 5%.</li><li>Time inconsistency: the temptation to inflate after wages are set destroys credibility.</li><li>Frameworks: inflation targeting (dominant), nominal GDP targeting, price-level targeting, money-growth rules.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Expecting a rate cut to work instantly. Transmission takes a year or two, and a bank that chases last month's inflation is always steering by the rear-view mirror.</div><div class=\"callout\"><strong>Common mistake:</strong> Reading the Taylor rule as a law. It is a benchmark: a bank that sets rates far from the rule owes the public an explanation, and sometimes the explanation is a good one.</div><p><strong>Ready-to-Work link:</strong> When the central bank moves, run the Taylor rule yourself: plug in inflation, the target, and the output gap, and see whether the move matches the recipe — or whether the bank is telling you something the recipe does not know.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Open market operations",
      "def": "The central bank buying or selling government bonds to change reserves and rates."
    },
    {
      "term": "Policy rate",
      "def": "The central bank's key short-term interest rate, anchoring market rates."
    },
    {
      "term": "Reserve requirements",
      "def": "The fraction of deposits banks must hold as reserves."
    },
    {
      "term": "Quantitative easing (QE)",
      "def": "Buying long-term bonds to lower long-term rates when the short rate is at zero."
    },
    {
      "term": "Transmission mechanism",
      "def": "The chain from the policy rate to market rates, spending, output, and inflation."
    },
    {
      "term": "Zero lower bound",
      "def": "The floor near zero below which the policy rate cannot usefully fall."
    },
    {
      "term": "Taylor rule",
      "def": "i = r* + π + 0.5(π − π*) + 0.5 × (output gap); a benchmark policy-rate recipe."
    },
    {
      "term": "Equilibrium real rate (r*)",
      "def": "The real rate when output is at potential and inflation is at target; 2% in the example."
    },
    {
      "term": "Time inconsistency",
      "def": "A policy that is optimal to promise but tempting to break once people believe it."
    },
    {
      "term": "Central bank independence",
      "def": "Insulating the central bank from electoral pressure to make low-inflation promises credible."
    },
    {
      "term": "Inflation targeting",
      "def": "A public inflation target (commonly 2%) with the bank accountable for hitting it."
    },
    {
      "term": "Nominal GDP targeting",
      "def": "Aiming at the growth of nominal spending (real growth plus inflation)."
    },
    {
      "term": "Price-level targeting",
      "def": "Aiming at a price path, making up past misses with future overshoots."
    },
    {
      "term": "Money-growth rule",
      "def": "Friedman's proposal to grow the money supply at a fixed rate each year."
    },
    {
      "term": "Credibility",
      "def": "The public's belief that the central bank will do what it promises."
    },
    {
      "term": "Lags",
      "def": "The delays between a policy change and its effect on output and inflation."
    }
  ],
  "video": {
    "title": "Monetary policy tools | Financial sector | AP Macroeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/C8Eb4-Wz27A",
    "note": "The central bank's toolkit — open market operations, the discount rate, and reserve requirements — and how each moves the money supply. After watching, trace a bond purchase through to investment using I = 500 − 50r.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The central bank buys $10bn of bonds and the reserve ratio is 10%. (a) By how much can the money supply rise? (b) If the policy rate falls from 5% to 4%, what happens to investment in I = 500 − 50r?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Multiplier = 1 ÷ 0.10 = 10, so the money supply can rise by 10 × $10bn = <strong>$100bn</strong>. Step 2: (b) At r = 5%, I = 500 − 250 = 250. At r = 4%, I = 500 − 200 = 300. Investment <strong>rises by 50</strong> (in $bn).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Use the Taylor rule i = r* + π + 0.5(π − π*) + 0.5 × (output gap). r* = 2%, π = 4%, π* = 2%, output gap = −4%. (a) What policy rate does the rule recommend? (b) What is the implied real rate, and is policy expansionary or contractionary?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: i = 2 + 4 + 0.5 × (4 − 2) + 0.5 × (−4) = 2 + 4 + 1 − 2 = <strong>5%</strong>. Step 2: Real rate = 5 − 4 = <strong>1%</strong>, below the 2% equilibrium rate, so policy is <strong>expansionary</strong> — right for an economy 4% below potential.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Same rule, but now inflation is 2% and the output gap is 0%. (a) What is the recommended rate? (b) What if inflation rises to 6% with the gap still 0%? Show the rate and explain the “more than one-for-one” principle.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) i = 2 + 2 + 0.5 × 0 + 0 = <strong>4%</strong> — neutral. Step 2: (b) i = 2 + 6 + 0.5 × (6 − 2) + 0 = 2 + 6 + 2 = <strong>10%</strong>. Inflation rose 4 points and the policy rate rose 6 points — more than one-for-one — so the real rate rises from 2% to 4% and cools demand. That over-reaction is the point of the rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain the time-inconsistency problem in four steps, starting with the central bank promising 2% inflation and ending with inflation higher than 2% and no jobs gained.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The bank promises 2%; workers set wages expecting 2%. Step 2: With wages fixed, the bank is tempted to inflate a little to cut unemployment. Step 3: Workers anticipate this and set wages expecting higher inflation instead. Step 4: The bank must then deliver the higher inflation just to hold unemployment at the natural rate — higher inflation, no jobs gained.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A central bank cuts its policy rate today. (a) Name three links in the transmission chain. (b) Why might output not respond for a year? (c) Which link is most likely to break in a banking crisis?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Policy rate → market rates → borrowing and spending → output → inflation. Step 2: (b) Spending decisions take time, contracts are fixed, and the multiplier rounds take quarters to play out. Step 3: (c) The bank-lending link: in a crisis, banks may hoard the cheaper funding instead of passing it on, so market rates for borrowers barely fall.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Compare inflation targeting with nominal GDP targeting in two sentences each: one strength and one weakness of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Inflation targeting is transparent and anchors expectations, but it can miss asset bubbles brewing under stable consumer prices. Step 2: Nominal GDP targeting eases automatically in recessions and tightens in booms, but nominal GDP is revised often and is harder for the public to understand than a 2% inflation number.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The central bank buys bonds. The money supply ___ and the policy rate ___.",
      "choices": [
        "Falls, rises",
        "Rises, falls",
        "Rises, rises",
        "Falls, falls"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Buying bonds injects reserves, so money rises and rates fall. (a) is what selling bonds does. (c) gets the rate backwards. (d) gets both backwards."
    },
    {
      "q": "With a 10% reserve ratio, a $10bn bond purchase can raise the money supply by up to:",
      "choices": [
        "$1bn",
        "$10bn",
        "$100bn",
        "$1,000bn"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Multiplier 10 × $10bn = $100bn. (a) divides instead of multiplying. (b) is the purchase itself, before multiplication. (d) uses a multiplier of 100."
    },
    {
      "q": "Taylor rule: r* = 2%, π = 4%, π* = 2%, gap = −4%. The recommended rate is:",
      "choices": [
        "4%",
        "5%",
        "6%",
        "10%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 + 4 + 1 − 2 = 5%. (a) is the neutral rate when inflation is at target and the gap is zero. (c) forgets the −2 from the output gap. (d) is the answer when inflation is 6% and the gap is zero."
    },
    {
      "q": "In that example, the implied real rate is 1%, which means policy is:",
      "choices": [
        "Contractionary",
        "Neutral",
        "Expansionary",
        "Impossible"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A real rate below the 2% equilibrium rate stimulates spending. (a) would need a real rate above 2%. (b) would need a real rate of 2%. (d) A 1% real rate is perfectly possible."
    },
    {
      "q": "The time-inconsistency problem is that a central bank:",
      "choices": [
        "Cannot change rates at all",
        "Is tempted to break its low-inflation promise once wages are set",
        "Always keeps its promises",
        "Sets rates by voting every day"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The promise is optimal to make and tempting to break, and the public knows it. (a) is false — banks move rates regularly. (c) is the opposite of the problem. (d) describes no real central bank."
    },
    {
      "q": "Central bank independence helps credibility because:",
      "choices": [
        "It lets politicians set rates before elections",
        "It insulates rate-setters from electoral pressure to inflate",
        "It removes the need for any target",
        "It makes money growth fixed forever"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rate-setters who do not benefit from surprise inflation can credibly promise low inflation. (a) is what independence prevents. (c) Independence needs a mandate, not the absence of one. (d) describes a money-growth rule, not independence."
    },
    {
      "q": "Monetary transmission is slow mainly because:",
      "choices": [
        "The central bank meets rarely",
        "Spending, contracts, and multiplier rounds take time",
        "Interest rates never change",
        "Fiscal policy blocks it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The lags between a rate cut and higher output and inflation run to a year or two. (a) Meeting frequency is not the binding lag. (c) Rates change often. (d) Fiscal policy does not block transmission."
    },
    {
      "q": "Quantitative easing is used when:",
      "choices": [
        "Inflation is too high",
        "The short-term policy rate is already near zero",
        "The government runs a surplus",
        "Banks have too much capital"
      ],
      "answer": 1,
      "explanation": "Correct: (b). QE buys long-term bonds to push long rates down when the short rate cannot fall further. (a) calls for tightening, not QE. (c) is a fiscal position, not a monetary trigger. (d) is not the problem QE addresses."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Monetary Policy in Depth: Quick Reference</h3>\n<p><strong>Core idea:</strong> The central bank moves short rates, the economy responds with a lag, and credibility — earned by tying its own hands — is what makes the whole thing work.</p>\n<div class=\"formula\">Buy bonds → money up → rates down &nbsp;|&nbsp; Taylor: i = r* + π + 0.5(π − π*) + 0.5 × gap &nbsp;|&nbsp; I = 500 − 50r</div>\n<p><strong>Worked anchors:</strong> $10bn bond purchase, 10% reserves → money up to <strong>$100bn</strong>. Taylor: r* 2%, π 4%, target 2%, gap −4% → i = <strong>5%</strong>, real rate <strong>1%</strong> (expansionary). Neutral case (π 2%, gap 0) → i = <strong>4%</strong>. Inflation 6%, gap 0 → i = <strong>10%</strong>.</p>\n<p><strong>Watch out:</strong> The Taylor rule is a benchmark, not a law; transmission takes a year or two and can break at the bank-lending link.</p>\n<p><strong>Self-check:</strong> Plug π = 3%, target 2%, gap = +2%, r* = 2% into the Taylor rule. (i = 2 + 3 + 0.5 + 1 = 6.5%.)</p>\n"
};
