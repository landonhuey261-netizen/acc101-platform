// eco211 - Module 8: Banking Regulation & Financial Crises
module.exports = {
  "number": 8,
  "slug": "banking-regulation-and-financial-crises",
  "title": "Banking Regulation & Financial Crises",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why banks are fragile: maturity transformation, leverage, and bank runs.",
    "Describe deposit insurance and how it stops runs — and the moral hazard it creates.",
    "Explain capital requirements, stress tests, and the lender of last resort as safeguards.",
    "Trace the 2008 financial crisis from subprime mortgages through securitization to the freeze.",
    "Explain the Silicon Valley Bank failure of 2023 as a bond-price and run story."
  ],
  "sections": [
    {
      "heading": "Why Banks Are Fragile",
      "html": "<p>Banks are fragile by design. They borrow short and lend long — <strong>maturity transformation</strong>: deposits can be withdrawn tomorrow, while mortgages run 30 years. They are also highly <strong>leveraged</strong>: a bank with $10 of assets for every $1 of its owners' capital loses all its capital if its assets fall just 10% in value. A normal company with little debt can survive a bad year; a bank often cannot.</p>\n<p>The classic fragility is the <strong>bank run</strong>. If depositors fear a bank will fail, each has reason to withdraw first — and the rush itself makes the bank fail, because it cannot sell long-term loans fast enough to pay everyone at once. Runs are self-fulfilling: a healthy bank can be killed by rumor alone. That is why the panic of 1907, the Great Depression bank failures, and the 2023 run on Silicon Valley Bank all followed the same script: fear, withdrawals, collapse.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A bank run is a coordination problem, not a verdict on the bank's loans. If everyone stays calm, the bank survives; if everyone runs, it dies. Regulation exists to break that logic.</div>"
    },
    {
      "heading": "The Safety Net: Insurance, Capital, and the Lender of Last Resort",
      "html": "<p>The first safeguard is <strong>deposit insurance</strong>. The FDIC, created in 1933, insures deposits up to $250,000 per depositor per bank. An insured depositor has no reason to run: the money is safe even if the bank fails. Insurance is why ordinary bank runs have nearly vanished in the United States — and why the 2023 runs hit banks whose deposits were mostly <em>above</em> the $250,000 limit and therefore uninsured.</p>\n<p>The second safeguard is <strong>capital requirements</strong>: regulators require banks to fund part of their assets with their owners' money. More capital means the bank can absorb bigger losses before depositors are at risk. After 2008, the largest banks also face annual <strong>stress tests</strong> — the Fed models a severe recession and checks whether each bank would still have enough capital to keep lending. The third safeguard is the Fed as <strong>lender of last resort</strong> (Module 5): a solvent bank short of cash can borrow at the discount window instead of selling assets at fire-sale prices.</p>\n<p>Every safeguard has a cost. Deposit insurance creates <strong>moral hazard</strong>: if depositors are protected, they stop watching their bank, and bankers may take bigger risks knowing losses will be covered. Capital rules and supervision are the answer to that hazard — the price of the safety net is that banks accept being watched.</p>"
    },
    {
      "heading": "The 2008 Financial Crisis, Step by Step",
      "html": "<p>The 2008 crisis began with housing. In the early 2000s, low rates and rising house prices encouraged heavy mortgage borrowing, including <strong>subprime mortgages</strong> — loans to borrowers with weak credit and little proof of income. Lenders then used <strong>securitization</strong>: thousands of mortgages were bundled into <strong>mortgage-backed securities (MBS)</strong> and sold to investors worldwide, sliced into tranches, and blessed with high credit ratings. Because lenders sold the loans onward, they had little reason to check whether borrowers could repay.</p>\n<p>When house prices stopped rising in 2006 and then fell, subprime borrowers defaulted in large numbers. The MBS built on their mortgages lost value — but nobody knew which banks held how much of the bad paper, so banks stopped lending to each other. In September 2008, Lehman Brothers failed, the largest bankruptcy in U.S. history, and the freeze became a panic. The government responded with the Troubled Asset Relief Program (TARP), Fed emergency lending, and near-zero rates; the economy still fell into the Great Recession, the deepest downturn since the 1930s.</p>\n<p>The crisis taught three lessons that shape regulation today: securitization spreads risk but also hides it; leverage turns small losses into insolvency; and when every bank doubts every other bank, only the central bank can restart lending. The Dodd-Frank Act of 2010 raised capital requirements, created stress tests, and gave regulators power to wind down failing giants.</p>"
    },
    {
      "heading": "Silicon Valley Bank, 2023: A Bond-Price Run",
      "html": "<p>The 2023 failure of Silicon Valley Bank (SVB) replayed the old script with a new trigger: bond prices. SVB had taken in huge deposits from tech startups and invested them in long-term Treasury bonds when rates were near zero. When the Fed raised rates sharply in 2022, those bonds fell in value — exactly the seesaw from Module 4: a long bond bought at a low yield is worth much less when yields rise. SVB had not hedged that risk, and its losses were large enough to wipe out much of its capital.</p>\n<p>When SVB announced it had sold bonds at a loss and needed to raise capital, depositors — mostly startups with balances far above the $250,000 insurance limit — rushed to withdraw. In one day, depositors tried to pull $42 billion. The bank failed within 48 hours. The FDIC, Treasury, and Fed stepped in with an emergency guarantee of all deposits, even above the limit, to stop the run from spreading to other banks.</p>\n<p>SVB's lesson is Module 4 made real: interest-rate risk is bank risk. A bank that funds long-term bonds with deposits that can leave tomorrow is betting that rates will not rise and depositors will not run. In 2023, both bets lost at once.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Banks are fragile: they borrow short, lend long, and run on thin capital — so runs can be self-fulfilling.</li>\n<li>Safety net: FDIC insurance up to $250,000 per depositor per bank; capital requirements and stress tests; the Fed as lender of last resort.</li>\n<li>2008: subprime mortgages → securitization into MBS → housing fall → defaults → interbank freeze → Lehman failure → Great Recession → Dodd-Frank reforms.</li>\n<li>SVB 2023: long bonds bought at low rates fell when rates rose; uninsured depositors ran; $42 billion left in a day.</li>\n<li>Moral hazard: safety nets protect depositors but can encourage risk-taking — which is why supervision exists.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the 2008 crisis was caused by \"greedy bankers\" alone. Greed was present, but the mechanism was specific: securitization broke the link between making a loan and bearing its risk, ratings overstated safety, and leverage turned a housing dip into a banking collapse. Fix the mechanism, not just the motives.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking deposit insurance makes bank risk disappear. It protects depositors up to $250,000; it does not protect shareholders, bondholders, or uninsured depositors — and it does not stop a bank from failing. It stops the failure from becoming a panic.</div>\n<p><strong>Ready-to-Work link:</strong> Check your own deposits against the $250,000 FDIC limit per bank, and ask what your bank does with its money. The crisis modules are not history lessons — they are a checklist for judging any bank you trust with your savings.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Maturity transformation", "def": "A bank's business of funding long-term loans with short-term deposits that can be withdrawn at any time." },
    { "term": "Leverage", "def": "Using borrowed money to hold assets; a bank with $10 of assets per $1 of capital is leveraged 10-to-1." },
    { "term": "Bank run", "def": "A rush of depositors withdrawing cash at once, which can kill even a solvent bank." },
    { "term": "Deposit insurance", "def": "A government guarantee of bank deposits, up to $250,000 per depositor per bank in the U.S. (FDIC)." },
    { "term": "FDIC", "def": "The Federal Deposit Insurance Corporation, created in 1933, which insures deposits and resolves failed banks." },
    { "term": "Moral hazard", "def": "The tendency to take bigger risks when someone else bears the cost of failure." },
    { "term": "Capital requirements", "def": "Rules requiring banks to hold a minimum amount of their owners' money against their assets." },
    { "term": "Stress test", "def": "A Fed simulation of a severe recession to check whether large banks would keep enough capital to lend." },
    { "term": "Subprime mortgage", "def": "A home loan to a borrower with weak credit or little proof of income, carrying high default risk." },
    { "term": "Securitization", "def": "Bundling many loans into securities sold to investors, spreading the loans' risk — and hiding it." },
    { "term": "Mortgage-backed security (MBS)", "def": "A bond backed by a pool of home mortgages, paying investors from homeowners' monthly payments." },
    { "term": "Tranche", "def": "A slice of a securitized pool, ranked by who is paid first and who bears losses first." },
    { "term": "Systemic risk", "def": "The risk that one institution's failure spreads through the whole financial system." },
    { "term": "Too big to fail", "def": "The idea that a giant bank's failure would damage the whole economy, so the government must rescue it." },
    { "term": "Dodd-Frank Act", "def": "The 2010 U.S. law that raised capital requirements, created stress tests, and strengthened bank supervision after 2008." },
    { "term": "Interest-rate risk", "def": "The risk that a bank's long-term bonds lose value when interest rates rise." }
  ],
  "video": {
    "title": "How it Happened - The 2008 Financial Crisis: Crash Course Economics #12",
    "embedUrl": "https://www.youtube.com/embed/GPOv72Awo68",
    "note": "Crash Course Economics with Jacob Clifford walks the 2008 crisis step by step: mortgages, mortgage-backed securities, CDOs, the freeze, Lehman, and the government response. Watch it, then retell the chain in five sentences without notes.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bank holds $100 million of assets funded by $95 million of deposits and $5 million of capital. (a) What is its leverage ratio (assets ÷ capital)? (b) If its assets fall 5% in value, what happens to its capital?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Leverage = $100 million ÷ $5 million = <strong>20-to-1</strong>. Step 2: A 5% fall in assets is 0.05 × $100 million = <strong>$5 million</strong>. Step 3: That wipes out all $5 million of capital — the bank is insolvent. Step 4: This is why leverage is dangerous: a small asset fall destroys a thinly capitalized bank.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain how FDIC deposit insurance stops bank runs, and name the limit. Then explain the moral hazard it creates.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The FDIC insures deposits up to <strong>$250,000</strong> per depositor per bank. Step 2: An insured depositor loses nothing if the bank fails, so there is no reason to join a run — and without the run, the bank survives. Step 3: The moral hazard: depositors stop monitoring their bank, and bankers may take bigger risks knowing depositors are protected. Step 4: Capital requirements and supervision exist to counter that hazard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Trace the 2008 crisis in five steps, from subprime mortgages to the interbank freeze.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lenders made subprime mortgages to weak borrowers as house prices rose. Step 2: Mortgages were securitized into mortgage-backed securities and sold worldwide. Step 3: House prices fell, subprime borrowers defaulted, and MBS lost value. Step 4: Nobody knew which banks held the bad paper, so banks stopped lending to each other. Step 5: Lehman Brothers failed in September 2008, and the freeze became a full panic and the Great Recession.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bank holds $10 million of long-term Treasury bonds bought when yields were 2%. Yields rise to 5% and the bonds' market value falls to $8 million. (a) What is the loss? (b) If the bank's capital was $1.5 million, what happens? (c) What is this risk called?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Loss = $10 million − $8 million = <strong>$2 million</strong>. Step 2: (b) The $2 million loss exceeds the $1.5 million of capital — the bank is <strong>insolvent</strong> on a mark-to-market basis. Step 3: (c) This is <strong>interest-rate risk</strong>: long bonds fall in value when rates rise (Module 4's seesaw). Step 4: This is essentially the SVB story of 2023.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why did securitization make the 2008 crisis worse rather than safer, even though spreading risk is supposed to help?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Securitization did spread risk — but it also broke the link between making a loan and bearing its loss, so lenders stopped checking borrowers. Step 2: The bundles were sliced into tranches with high ratings that overstated their safety, so buyers underestimated the risk. Step 3: Because the bad loans were scattered worldwide in complex securities, no one could tell who held them, so trust between banks collapsed. Step 4: Spreading risk helps only when the risk is measured honestly and someone still bears it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A depositor has $400,000 in one bank. (a) How much is FDIC-insured? (b) What two simple steps could fully insure the money?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Only <strong>$250,000</strong> is insured; $150,000 is uninsured and at risk if the bank fails. Step 2: (b) Move $150,000 to a <strong>different bank</strong>, where it gets its own $250,000 limit — or hold the money in a different ownership category at the same bank (for example, a joint account), which carries its own limit. Step 3: This is why SVB's depositors — mostly businesses with balances far above $250,000 — ran first.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A bank with $100 million of assets and $5 million of capital is leveraged:",
      "choices": ["5-to-1", "20-to-1", "95-to-1", "2-to-1"],
      "answer": 1,
      "explanation": "Correct: (b). $100 million ÷ $5 million = 20-to-1. (a) is the capital share, not leverage. (c) divides deposits by capital. (d) would need $10 million of capital."
    },
    {
      "q": "If that bank's assets fall 5% in value, its capital becomes:",
      "choices": ["$5 million — unchanged", "$0 — wiped out", "$10 million", "$95 million"],
      "answer": 1,
      "explanation": "Correct: (b). A 5% fall is $5 million, exactly the capital. (a) ignores the loss. (c) would be a gain. (d) is the deposits, not the capital."
    },
    {
      "q": "FDIC deposit insurance covers up to:",
      "choices": ["$25,000 per depositor", "$100,000 per depositor", "$250,000 per depositor per bank", "Unlimited amounts"],
      "answer": 2,
      "explanation": "Correct: (c). $250,000 per depositor per bank. (a) and (b) are old or wrong limits. (d) Insurance is capped — SVB's uninsured depositors are the proof."
    },
    {
      "q": "Moral hazard in banking means:",
      "choices": ["Bankers are immoral people", "Insured depositors and protected banks may take bigger risks because others bear the cost", "Banks never take risks", "Depositors always lose money"],
      "answer": 1,
      "explanation": "Correct: (b). Protection dulls the incentive to be careful. (a) is a judgment about people, not an incentive. (c) is false — banks take risks constantly. (d) is false — insurance protects depositors."
    },
    {
      "q": "Securitization in the 2008 crisis meant:",
      "choices": ["Banks kept all their mortgages", "Mortgages were bundled into securities and sold to investors", "The government banned mortgages", "Borrowers paid off their loans early"],
      "answer": 1,
      "explanation": "Correct: (b). Bundling and selling is securitization. (a) is the opposite — the old hold-to-maturity model. (c) never happened. (d) Defaults, not payoffs, drove the crisis."
    },
    {
      "q": "Lehman Brothers failed in:",
      "choices": ["September 2008", "March 2020", "October 1929", "March 2023"],
      "answer": 0,
      "explanation": "Correct: (a). Lehman's September 2008 failure turned the freeze into a panic. (b) is the COVID crash. (c) is the 1929 stock market crash. (d) is the SVB failure."
    },
    {
      "q": "Silicon Valley Bank failed in 2023 mainly because:",
      "choices": ["It made too many subprime mortgages", "Its long-term bonds lost value when rates rose, and uninsured depositors ran", "The Fed closed it for fraud", "It had no deposits at all"],
      "answer": 1,
      "explanation": "Correct: (b). Interest-rate risk plus a run by uninsured depositors — $42 billion in a day. (a) is the 2008 story. (c) There was no fraud finding. (d) SVB had very large deposits — that was the problem."
    },
    {
      "q": "A stress test checks whether a bank:",
      "choices": ["Can survive a severe recession and still have enough capital to lend", "Has the fastest computers", "Charges the lowest fees", "Has the most branches"],
      "answer": 0,
      "explanation": "Correct: (a). The Fed models a deep downturn and measures capital afterward. (b), (c), and (d) are business features, not safety checks."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Banking Regulation & Financial Crises: Quick Reference</h3>\n<p><strong>Core idea:</strong> Banks borrow short, lend long, and run on thin capital — so fear alone can kill a solvent bank. Regulation breaks that logic.</p>\n<p><strong>Fragility math:</strong> Leverage = assets ÷ capital. A bank with $100M of assets and $5M of capital is leveraged 20-to-1; a 5% asset fall ($5M) wipes out all its capital.</p>\n<p><strong>Safety net:</strong> FDIC insurance up to $250,000 per depositor per bank · Capital requirements · Stress tests · Fed as lender of last resort.</p>\n<p><strong>2008 chain:</strong> Subprime mortgages → securitization into MBS → house prices fall → defaults → nobody knows who holds the bad paper → interbank freeze → Lehman fails (Sept 2008) → Great Recession → Dodd-Frank (2010).</p>\n<p><strong>SVB 2023:</strong> Long bonds bought at low rates fell when rates rose; uninsured depositors ran; $42 billion left in one day.</p>\n<p><strong>Watch out:</strong> Insurance stops runs, it does not stop failures — and it creates moral hazard, which is why supervision exists.</p>\n<p><strong>Self-check:</strong> Your bank has $200,000 of your money in one account. Is it all insured? (Yes — under the $250,000 limit. At $400,000, only $250,000 would be.)</p>\n"
};
