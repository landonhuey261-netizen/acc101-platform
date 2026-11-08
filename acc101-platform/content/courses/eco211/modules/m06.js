// eco211 - Module 6: The Money Supply Process: How Money Gets Created
module.exports = {
  "number": 6,
  "slug": "the-money-supply-process",
  "title": "The Money Supply Process: How Money Gets Created",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how banks create money by lending, not by printing it.",
    "Use a bank T-account to trace a deposit, a loan, and the reserves left behind.",
    "Compute the simple money multiplier as 1 divided by the required reserve ratio.",
    "Explain the difference between the monetary base and the money supply.",
    "Explain why the simple multiplier is a ceiling, not a promise — banks, borrowers, and cash drain limit it."
  ],
  "sections": [
    {
      "heading": "Banks Create Money When They Lend",
      "html": "<p>Most people think money is created when the government prints it. In fact, most money in a modern economy is created by <strong>commercial banks when they make loans</strong>. Here is how. You deposit $1,000 in a bank. The bank does not put your $1,000 in a vault and wait. It keeps a fraction as <strong>reserves</strong> and lends the rest to a borrower — say, $900 to a shop owner. The shop owner spends the $900, and the seller deposits it in another bank, which lends most of it onward. Your original $1,000 now shows up as deposits in two banks at once: your $1,000 and the seller's $900. Money has been created — not by printing, but by lending.</p>\n<p>The key insight: a loan creates a deposit. When a bank approves a loan, it credits the borrower's account with new money. The borrower's deposit is new purchasing power that did not exist before the loan. When the loan is repaid, that money disappears again. Banks are not warehouses for money; they are factories for it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Banks lend first and find reserves later — the loan creates the deposit. The limit is not the cash in the vault; it is the bank's reserves, its capital, and whether creditworthy borrowers want to borrow.</div>"
    },
    {
      "heading": "Reading a Bank T-Account",
      "html": "<p>Economists track this with a <strong>T-account</strong>: assets on the left, liabilities on the right. For a bank, assets are reserves, loans, and securities; liabilities are deposits (what the bank owes depositors) plus the bank's own capital.</p>\n<p>Walk through $1,000 deposited at Bank A with a 10% required reserve ratio. Assets: reserves +$1,000. Liabilities: deposits +$1,000. The bank must hold 10% of the deposit as required reserves ($100) and may lend the other $900. After lending: assets are reserves $100 + loans $900 = $1,000; liabilities are deposits $1,000. The books balance. The borrower spends the $900; it lands in Bank B as a new deposit. Bank B keeps $90 (10%) and lends $810. Bank C keeps $81 and lends $729. Each round shrinks by 10%, and the chain continues.</p>\n<div class=\"formula\">Required reserves = Required reserve ratio × Deposits &nbsp;|&nbsp; Excess reserves = Total reserves − Required reserves</div>\n<p>Reserves are the constraint. A bank can lend only its <strong>excess reserves</strong> — reserves above what it must hold. If a bank has $1,000 of reserves and $100 of required reserves, it can lend $900. That is the whole mechanism in one sentence.</p>"
    },
    {
      "heading": "The Simple Money Multiplier",
      "html": "<p>If every loan is redeposited and banks lend all their excess reserves, the chain from the last section converges to a neat formula. The <strong>simple money multiplier</strong> is 1 divided by the required reserve ratio (rr): the maximum amount of deposits one dollar of new reserves can support.</p>\n<div class=\"formula\">Simple money multiplier = 1 ÷ Required reserve ratio &nbsp;|&nbsp; Maximum new money = New reserves × Multiplier</div>\n<p>Run the numbers. With a 10% reserve ratio, the multiplier is 1 ÷ 0.10 = <strong>10</strong>. A $10,000 deposit of new reserves can support up to $10,000 × 10 = <strong>$100,000</strong> of total money. With a 20% ratio, the multiplier is 1 ÷ 0.20 = <strong>5</strong>, and a $5,000 deposit supports at most $5,000 × 5 = <strong>$25,000</strong>. With a 5% ratio, the multiplier is 1 ÷ 0.05 = <strong>20</strong>. The lower the reserve ratio, the more money each dollar of reserves can create.</p>\n<p>Check the chain for the 10% case starting from $1,000: Bank A lends $900, Bank B lends $810, Bank C lends $729, and so on — the deposits sum to $1,000 + $900 + $810 + $729 + … = <strong>$10,000</strong>, exactly the multiplier result. The formula is the chain, added up.</p>"
    },
    {
      "heading": "The Monetary Base vs. the Money Supply",
      "html": "<p>Two aggregates anchor this story. The <strong>monetary base</strong> (or high-powered money) is currency in circulation plus bank reserves at the Fed — the money the Fed directly controls. The <strong>money supply</strong> (M1 or M2) is the base multiplied through the banking system: currency plus deposits. The Fed controls the base; the banking system, through lending, determines how much money the base becomes.</p>\n<p>That is why the Fed's open market purchases matter: when the Fed buys $100 million of Treasury bonds, it pays with new reserves, so the base rises by $100 million. If the multiplier were 10, the money supply could rise by up to $1,000 million. In practice it rises by less — which is the next section.</p>\n<p>One more fact: since March 2020, the Fed has set the required reserve ratio at <strong>0%</strong> for checking deposits. The simple multiplier formula would then divide by zero — a sign the formula is a teaching tool, not a law of nature. With no reserve requirement, the real limits on lending are banks' capital, their appetite for risk, and borrowers' demand for loans. The multiplier still teaches the right intuition — reserves constrain lending — but the modern constraint is capital and caution, not a reserve ratio.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Banks create money by lending: a loan creates a deposit.</li>\n<li>A bank can lend only its excess reserves: total reserves minus required reserves.</li>\n<li>Simple money multiplier = 1 ÷ required reserve ratio; maximum new money = new reserves × multiplier.</li>\n<li>Monetary base = currency + reserves (Fed-controlled). Money supply = base multiplied through bank lending.</li>\n<li>The multiplier is a ceiling: cash drain, banks holding excess reserves, and weak loan demand all shrink it. Since March 2020 the required reserve ratio is 0%.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying banks lend out depositors' money. In the modern system a bank creates a new deposit when it lends — it does not wait for a depositor to hand over cash first, and it does not reduce anyone's balance to make the loan. Reserves settle payments between banks afterward.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the multiplier as exact. After 2008, banks held huge excess reserves and lending stayed weak, so the money supply grew far less than the multiplier predicted. The formula shows the maximum; reality depends on banks' and borrowers' choices.</div>\n<p><strong>Ready-to-Work link:</strong> Every loan you take — mortgage, car, business — is a small act of money creation. Understanding the chain explains why credit booms expand the money supply and why credit freezes shrink it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Reserves", "def": "Banks' deposits at the Federal Reserve plus vault cash; the funds banks use to settle payments and meet withdrawals." },
    { "term": "Required reserve ratio", "def": "The share of deposits a bank must hold as reserves, set by the central bank." },
    { "term": "Required reserves", "def": "Reserves a bank must hold, equal to the required reserve ratio times its deposits." },
    { "term": "Excess reserves", "def": "Reserves above the required amount; the funds a bank can lend out." },
    { "term": "Simple money multiplier", "def": "1 divided by the required reserve ratio — the maximum deposits one dollar of reserves can support." },
    { "term": "Monetary base", "def": "Currency in circulation plus bank reserves — the money the Fed directly controls." },
    { "term": "Money supply", "def": "The total money in the economy (M1 or M2): currency plus deposits." },
    { "term": "T-account", "def": "A simplified balance sheet showing a bank's assets on the left and liabilities on the right." },
    { "term": "Fractional reserve banking", "def": "A system where banks hold only a fraction of deposits as reserves and lend the rest." },
    { "term": "Cash drain", "def": "Money that leaks out of the deposit chain when people hold cash instead of redepositing it, shrinking the multiplier." },
    { "term": "Deposit", "def": "Money a customer places in a bank, which the bank owes back on demand or at maturity." },
    { "term": "Loan", "def": "Funds a bank lends to a borrower, recorded as an asset on the bank's balance sheet." },
    { "term": "Bank capital", "def": "The bank owners' own money in the bank — assets minus liabilities — which absorbs losses first." },
    { "term": "Open market operations", "def": "The Fed's buying and selling of Treasury securities to change bank reserves and the monetary base." },
    { "term": "Vault cash", "def": "Physical currency held in a bank's vaults, counted as part of its reserves." }
  ],
  "video": {
    "title": "Banking 3: Fractional Reserve Banking",
    "embedUrl": "https://www.youtube.com/embed/nH2-37rTA8U",
    "note": "Khan Academy builds a bank from scratch on an island of farmers: deposits, reserves, loans, and the multiplier, one T-account at a time. Follow along with a pencil — pause and redo the reserve math before Sal does.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bank receives a $1,000 deposit and the required reserve ratio is 10%. (a) How much must it hold as required reserves? (b) How much can it lend?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Required reserves = 0.10 × $1,000 = <strong>$100</strong>. Step 2: The bank can lend its excess reserves = $1,000 − $100 = <strong>$900</strong>. Step 3: After lending, its T-account shows reserves $100 + loans $900 = $1,000 in assets against $1,000 of deposits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The required reserve ratio is 10%. (a) What is the simple money multiplier? (b) If $10,000 of new reserves enters the banking system, what is the maximum new money created?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Multiplier = 1 ÷ 0.10 = <strong>10</strong>. Step 2: Maximum new money = $10,000 × 10 = <strong>$100,000</strong>. Step 3: This is a ceiling: it assumes every loan is redeposited and banks lend all excess reserves.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The required reserve ratio is 20%. (a) What is the multiplier? (b) A $5,000 deposit of new reserves arrives. What is the maximum money it supports? (c) Trace the first three loans in the chain.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Multiplier = 1 ÷ 0.20 = <strong>5</strong>. Step 2: Maximum money = $5,000 × 5 = <strong>$25,000</strong>. Step 3: Bank A keeps $1,000 (20% of $5,000) and lends <strong>$4,000</strong>. Step 4: Bank B keeps $800 and lends <strong>$3,200</strong>. Step 5: Bank C keeps $640 and lends <strong>$2,560</strong>. Step 6: The chain sums to $25,000.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bank has $2,000 in total reserves and $10,000 in deposits with a 10% required reserve ratio. (a) What are its required reserves? (b) What are its excess reserves? (c) How much can it lend?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Required reserves = 0.10 × $10,000 = <strong>$1,000</strong>. Step 2: Excess reserves = $2,000 − $1,000 = <strong>$1,000</strong>. Step 3: It can lend <strong>$1,000</strong> — only the excess, not the full $2,000, because $1,000 must stay to back deposits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The Fed buys $100 million of Treasury bonds from banks. (a) What happens to the monetary base? (b) If the multiplier is 10, what is the maximum increase in the money supply? (c) Name two reasons the actual increase would be smaller.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The Fed pays with new reserves, so the monetary base rises by <strong>$100 million</strong>. Step 2: Maximum money increase = $100 million × 10 = <strong>$1,000 million ($1 billion)</strong>. Step 3: Reality is smaller if (i) people hold some of the money as cash instead of redepositing it (cash drain), or (ii) banks choose to hold excess reserves instead of lending, or (iii) creditworthy borrowers do not want more loans.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in two or three sentences why the money supply can shrink even when the Fed does nothing.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Money is created when banks lend and destroyed when loans are repaid. Step 2: If borrowers repay loans faster than new loans are made — in a recession, when banks tighten and households pay down debt — deposits shrink. Step 3: The money supply falls through the banking system alone, with no change in the monetary base.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Most money in a modern economy is created when:",
      "choices": ["The government prints paper currency", "Commercial banks make loans, creating new deposits", "People deposit cash in a vault", "The Fed collects taxes"],
      "answer": 1,
      "explanation": "Correct: (b). A loan creates a deposit — new money. (a) Paper currency is a small share of the money supply. (c) Depositing cash moves money, it does not create it. (d) Taxes move money to the government; they do not create it."
    },
    {
      "q": "A bank receives a $1,000 deposit with a 10% required reserve ratio. The most it can lend is:",
      "choices": ["$1,000", "$900", "$100", "$10,000"],
      "answer": 1,
      "explanation": "Correct: (b). Required reserves are $100, so excess reserves are $900. (a) ignores the reserve requirement. (c) is the required reserve, which must stay. (d) is the whole system's maximum, not one bank's loan."
    },
    {
      "q": "With a 10% required reserve ratio, the simple money multiplier is:",
      "choices": ["0.1", "5", "10", "100"],
      "answer": 2,
      "explanation": "Correct: (c). 1 ÷ 0.10 = 10. (a) is the ratio itself. (b) is the multiplier at a 20% ratio. (d) is the multiplier at a 1% ratio."
    },
    {
      "q": "With a 20% reserve ratio, a $5,000 deposit of new reserves can support at most:",
      "choices": ["$5,000", "$10,000", "$25,000", "$100,000"],
      "answer": 2,
      "explanation": "Correct: (c). Multiplier is 1 ÷ 0.20 = 5; $5,000 × 5 = $25,000. (a) is just the deposit. (b) would be a multiplier of 2. (d) would be a multiplier of 20."
    },
    {
      "q": "The monetary base is:",
      "choices": ["M2", "Currency in circulation plus bank reserves", "All bank loans", "The Fed's gold holdings"],
      "answer": 1,
      "explanation": "Correct: (b). Base = currency + reserves — the money the Fed directly controls. (a) M2 is the broad money supply, much larger. (c) Loans are bank assets, not base money. (d) The Fed holds little gold; gold is not the base."
    },
    {
      "q": "A bank has $2,000 of reserves and $10,000 of deposits at a 10% ratio. Its excess reserves are:",
      "choices": ["$2,000", "$1,000", "$100", "$0"],
      "answer": 1,
      "explanation": "Correct: (b). Required reserves are 0.10 × $10,000 = $1,000; excess = $2,000 − $1,000 = $1,000. (a) is total reserves. (c) is 10% of $1,000, not of deposits. (d) would mean reserves exactly equal required reserves."
    },
    {
      "q": "Which of these shrinks the actual money multiplier below the simple formula?",
      "choices": ["Banks lending all their excess reserves", "People holding cash instead of redepositing loans", "A lower reserve ratio", "More deposits entering the system"],
      "answer": 1,
      "explanation": "Correct: (b). Cash drain breaks the redeposit chain. (a) is what the formula assumes. (c) raises the multiplier. (d) raises the base, not the multiplier."
    },
    {
      "q": "When a borrower repays a bank loan, the money supply:",
      "choices": ["Rises by the loan amount", "Falls, because the deposit created by the loan is extinguished", "Stays the same", "Doubles"],
      "answer": 1,
      "explanation": "Correct: (b). Repayment destroys the deposit the loan created. (a) reverses the effect — lending creates money, repayment destroys it. (c) ignores the deposit's disappearance. (d) has no basis."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — The Money Supply Process: Quick Reference</h3>\n<p><strong>Core idea:</strong> Banks create money by lending — a loan creates a deposit. Repayment destroys money.</p>\n<div class=\"formula\">Required reserves = reserve ratio × deposits &nbsp;|&nbsp; Excess reserves = total reserves − required reserves</div>\n<div class=\"formula\">Simple money multiplier = 1 ÷ reserve ratio &nbsp;|&nbsp; Max new money = new reserves × multiplier</div>\n<p><strong>Worked anchors:</strong> $1,000 deposit at 10% → hold $100, lend $900. Multiplier at 10% = 10; $10,000 of reserves → up to $100,000. At 20% the multiplier is 5; $5,000 → up to $25,000. At 5% the multiplier is 20.</p>\n<p><strong>Base vs. supply:</strong> Monetary base = currency + reserves (Fed-controlled). Money supply = base multiplied through bank lending.</p>\n<p><strong>Watch out:</strong> The multiplier is a ceiling, not a promise — cash drain, excess reserves, and weak loan demand shrink it. Since March 2020 the required reserve ratio is 0%, so capital and caution, not reserves, are the modern constraint.</p>\n<p><strong>Self-check:</strong> A bank has $3,000 of reserves and $20,000 of deposits at a 10% ratio. How much can it lend? (Required $2,000; excess $1,000 — it can lend $1,000.)</p>\n"
};
