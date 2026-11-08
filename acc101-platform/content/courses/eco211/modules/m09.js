// eco211 - Module 9: Financial Innovation: From Securitization to Crypto
module.exports = {
  "number": 9,
  "slug": "financial-innovation",
  "title": "Financial Innovation: From Securitization to Crypto",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what financial innovation is and why it happens.",
    "Describe securitization, derivatives, and how they transfer risk.",
    "Explain how fintech, mobile payments, and peer-to-peer lending change banking.",
    "Explain how blockchain and cryptocurrency work, in plain terms.",
    "Judge an innovation by two tests: does it lower costs or spread risk, and who bears the new risk?"
  ],
  "sections": [
    {
      "heading": "What Financial Innovation Is",
      "html": "<p><strong>Financial innovation</strong> is a new product, service, or way of organizing finance: the credit card, the ATM, the mortgage-backed security, the smartphone payment, the cryptocurrency. Innovations happen for the same reasons as in any industry — new technology makes something cheaper, regulation blocks an old path so a new one opens, or someone finds a way to serve customers the old system ignored.</p>\n<p>Innovation is neither good nor bad by itself. The ATM cut the cost of getting cash and spread worldwide because it helped everyone. Securitization cut the cost of mortgage lending but hid risk and helped cause the 2008 crisis. The right question about any innovation is not \"is it new?\" but \"who benefits, who bears the risk, and what breaks if it goes wrong?\"</p>\n<div class=\"callout\"><strong>Key idea:</strong> Every financial innovation moves risk somewhere. If you cannot see who bears the risk, look harder — it is usually the taxpayer, the small investor, or the next buyer in line.</div>"
    },
    {
      "heading": "Securitization and Derivatives",
      "html": "<p><strong>Securitization</strong> (Module 8) turns illiquid loans into tradable securities: bundle a thousand mortgages, sell shares of the pool. Done well, it lets a local bank lend more, because it can sell the loans and lend again. Done badly, it breaks the link between making a loan and bearing its risk. The innovation itself is neutral; the incentives around it decide the outcome.</p>\n<p>A <strong>derivative</strong> is a contract whose value derives from something else: a <strong>futures contract</strong> locks in a price today for delivery later (a farmer selling next year's wheat at today's price); an <strong>option</strong> buys the right, but not the obligation, to buy or sell at a set price; a <strong>credit default swap (CDS)</strong> is insurance against a borrower defaulting — the buyer pays a premium, the seller pays out if the borrower fails. Derivatives let firms hedge real risks: airlines hedge fuel prices, exporters hedge exchange rates. They also let speculators take huge leveraged bets, which is how CDS amplified the 2008 crisis.</p>\n<p>The test for a derivative is the same as for any tool: is it hedging a real exposure, or is it a bet? Hedging reduces risk; speculation concentrates it. The contract cannot tell you which — only the user's books can.</p>"
    },
    {
      "heading": "Fintech: Payments, Lending, and Robo-Advice",
      "html": "<p><strong>Fintech</strong> is technology applied to finance, and its biggest wins are in payments and access. Mobile money lets a farmer in a country with few bank branches receive payments on a phone. Peer-to-peer payment apps move money between friends in seconds. Online lenders use data — not just a credit score — to judge small borrowers banks used to ignore. <strong>Robo-advisers</strong> build diversified portfolios for small savers at a fraction of a human adviser's cost.</p>\n<p>The promise is lower cost and wider access. The risk is the same as in old finance, in new clothes: an online lender that grows fast by lowering standards will fail the same way a careless bank fails; a payment app that holds customer funds without insurance is a bank without a safety net. Regulators now ask fintech firms the old questions — where is the money, who bears the loss, can customers get their money back — and the firms that answer well survive.</p>\n<p>For you, the practical test is simple: before using a new financial app, ask three questions. Is my money insured or held at an insured bank? What happens if the company fails? And what fee am I really paying, including the spread and the data I give up?</p>"
    },
    {
      "heading": "Blockchain and Cryptocurrency",
      "html": "<p>A <strong>blockchain</strong> is a shared, tamper-resistant ledger: a list of transactions copied across many computers, where new entries are added in blocks that link cryptographically to earlier ones. Change one old entry and the links break, so the tampering is visible. A <strong>cryptocurrency</strong> like Bitcoin is a digital asset whose ownership and transfer are recorded on a blockchain, with no central bank or issuer — instead, a decentralized network of computers (miners or validators) agrees on the ledger.</p>\n<p>Bitcoin's design is clever: a fixed eventual supply (21 million coins), no central authority, and transactions verified by cryptography rather than by a bank. Its weaknesses are equally clear. Prices are extremely volatile — Bitcoin has repeatedly lost half its value in months — so it is a poor store of value and a poor unit of account. Transactions are slow and energy-hungry on proof-of-work chains. And because there is no lender of last resort and no deposit insurance, a failed exchange can wipe out customers, as the FTX collapse of 2022 showed.</p>\n<p><strong>Stablecoins</strong> try to fix the volatility by pegging to the dollar — each coin supposedly backed by a dollar of reserves — but the peg is only as good as the reserves and the audit behind them. Central banks are now exploring their own <strong>central bank digital currencies (CBDCs)</strong>: digital cash issued by the central bank itself. The honest summary: blockchain is a real innovation in record-keeping; cryptocurrency as money is still unproven; and the same questions — who bears the risk, who insures the loss — apply here too.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Financial innovation is a new product or process; judge it by who benefits and who bears the risk.</li>\n<li>Securitization turns loans into tradable securities; derivatives (futures, options, CDS) derive value from an underlying asset and can hedge or speculate.</li>\n<li>Fintech cuts payment and advice costs and widens access — but the old questions about insurance and failure still apply.</li>\n<li>Blockchain is a shared tamper-resistant ledger; cryptocurrency records ownership on it with no central issuer.</li>\n<li>Bitcoin's fixed supply (21 million) and decentralization are real; so are its volatility, slow transactions, and lack of a safety net. Stablecoins and CBDCs are the next chapter.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling cryptocurrency \"money\" because it can buy things. Money needs all three functions — medium of exchange, unit of account, store of value. Crypto is at best a shaky medium of exchange, a poor unit of account (prices in Bitcoin swing daily), and a volatile store of value.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a derivative is inherently dangerous. A farmer locking in a wheat price with a futures contract is reducing risk, not gambling. The danger is leverage and opacity — big bets nobody can see — not the contract form itself.</div>\n<p><strong>Ready-to-Work link:</strong> Your career will be shaped by fintech whether you work in finance or not. The two-test habit — does it lower costs or spread risk, and who bears the new risk — will keep you from being fooled by the next big thing.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Financial innovation", "def": "A new financial product, service, or way of organizing finance." },
    { "term": "Securitization", "def": "Bundling loans into tradable securities sold to investors." },
    { "term": "Derivative", "def": "A contract whose value derives from an underlying asset, rate, or event." },
    { "term": "Futures contract", "def": "An agreement to buy or sell an asset at a set price on a future date." },
    { "term": "Option", "def": "A contract giving the right, but not the obligation, to buy or sell at a set price." },
    { "term": "Credit default swap (CDS)", "def": "A contract that pays out if a named borrower defaults — insurance on a bond." },
    { "term": "Hedging", "def": "Using a financial contract to reduce exposure to a price, rate, or default risk." },
    { "term": "Speculation", "def": "Taking a leveraged bet on a price move, accepting risk in hopes of profit." },
    { "term": "Fintech", "def": "Technology applied to financial services, such as mobile payments, online lending, and robo-advice." },
    { "term": "Robo-adviser", "def": "An automated service that builds and manages a diversified portfolio for a low fee." },
    { "term": "Blockchain", "def": "A shared, tamper-resistant ledger of transactions, copied across many computers and linked by cryptography." },
    { "term": "Cryptocurrency", "def": "A digital asset whose ownership and transfer are recorded on a blockchain, with no central issuer." },
    { "term": "Bitcoin", "def": "The first and largest cryptocurrency, with a fixed eventual supply of 21 million coins." },
    { "term": "Stablecoin", "def": "A cryptocurrency designed to hold a stable value, usually pegged to the dollar and backed by reserves." },
    { "term": "Central bank digital currency (CBDC)", "def": "Digital cash issued directly by a central bank." },
    { "term": "Proof of work", "def": "The system where computers compete to solve puzzles to verify blockchain transactions, consuming large amounts of energy." }
  ],
  "video": {
    "title": "But how does bitcoin actually work?",
    "embedUrl": "https://www.youtube.com/embed/bBC-nXj3Ng4",
    "note": "3Blue1Brown explains Bitcoin from first principles: ledgers, digital signatures, hash functions, and proof of work — no hype, just the mechanism. Watch it, then decide for yourself which of money's three functions Bitcoin actually performs.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bank bundles 1,000 mortgages into a security and sells it to investors, then uses the cash to make 1,000 new mortgages. (a) What is this called? (b) Name one benefit and one risk.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) This is <strong>securitization</strong>. Step 2: (b) Benefit: the bank can lend more with the same capital, so more families get mortgages. Step 3: Risk: the bank no longer bears the loss if the mortgages default, so it may stop checking borrowers carefully — the incentive problem behind the 2008 crisis.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An airline worries jet-fuel prices will rise. (a) Which derivative lets it lock in today's fuel price for next year? (b) Is this hedging or speculation? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) A <strong>futures contract</strong> on fuel, agreeing a price today for delivery next year. Step 2: (b) This is <strong>hedging</strong>: the airline has a real exposure (it must buy fuel) and the contract reduces the risk that a price rise wrecks its budget. Step 3: It would be speculation only if the airline bought fuel futures with no need for fuel, betting on the price.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A robo-adviser charges 0.25% a year and a human adviser charges 1% a year. On a $40,000 portfolio, (a) what does each cost per year? (b) What is the saving?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Robo-adviser: 0.0025 × $40,000 = <strong>$100</strong> a year. Human adviser: 0.01 × $40,000 = <strong>$400</strong> a year. Step 2: (b) Saving = $400 − $100 = <strong>$300</strong> a year. Step 3: Over 30 years that saving, invested, is worth far more than $9,000 — which is why low fees matter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain in plain terms how a blockchain makes tampering visible. Use the idea of linked blocks.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Transactions are grouped into blocks, and each block contains a cryptographic fingerprint of the block before it. Step 2: Change one old transaction and its block's fingerprint changes, which breaks the link to every block after it. Step 3: Because thousands of computers hold copies, the changed copy disagrees with all the others and is rejected. Step 4: Tampering is not impossible — it is visible.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Test Bitcoin against money's three functions and give a verdict on each, with one reason.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Medium of exchange — <strong>weak</strong>: few sellers accept it and transactions are slow. Step 2: Unit of account — <strong>fails</strong>: prices in Bitcoin swing so much that a coffee costs a different amount of Bitcoin every hour. Step 3: Store of value — <strong>weak</strong>: Bitcoin has repeatedly lost half its value in months. Step 4: Verdict: Bitcoin is a speculative asset with an interesting ledger, not money — yet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stablecoin promises \"1 coin = $1, backed by reserves.\" (a) What two questions should you ask before trusting it? (b) Why does the answer matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Ask: what exactly are the reserves, and who has audited them? Step 2: Ask: can I redeem the coin for a dollar on demand, and what happens if everyone redeems at once? Step 3: (b) A peg is only as good as its backing — if reserves are risky loans rather than dollars, a run can break the peg and the coin can collapse. Step 4: This is the same bank-run logic as Module 8, in crypto form.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Securitization means:",
      "choices": ["Banks keeping all their loans", "Bundling loans into tradable securities sold to investors", "Banning risky loans", "Insuring deposits"],
      "answer": 1,
      "explanation": "Correct: (b). Bundling and selling is securitization. (a) is the old hold-to-maturity model. (c) is a regulation, not securitization. (d) is deposit insurance."
    },
    {
      "q": "An airline locking in next year's fuel price with a futures contract is:",
      "choices": ["Speculation", "Hedging — reducing a real risk", "Securitization", "Money creation"],
      "answer": 1,
      "explanation": "Correct: (b). The airline must buy fuel, so the contract reduces its risk. (a) Speculation is betting without an underlying exposure. (c) is bundling loans. (d) is bank lending."
    },
    {
      "q": "A credit default swap (CDS) is best described as:",
      "choices": ["Insurance against a borrower defaulting", "A government bond", "A savings account", "A stock"],
      "answer": 0,
      "explanation": "Correct: (a). The buyer pays premiums; the seller pays if the borrower defaults. (b) A bond is a loan, not insurance on one. (c) and (d) are unrelated assets."
    },
    {
      "q": "A robo-adviser charging 0.25% on a $40,000 portfolio costs per year:",
      "choices": ["$400", "$100", "$1,000", "$25"],
      "answer": 1,
      "explanation": "Correct: (b). 0.0025 × $40,000 = $100. (a) is the 1% human adviser cost. (c) is 2.5%. (d) is 0.0625%."
    },
    {
      "q": "A blockchain makes tampering visible because:",
      "choices": ["It is stored in one secret vault", "Each block links cryptographically to the one before it, so a change breaks the chain", "It uses paper records", "The government checks every transaction"],
      "answer": 1,
      "explanation": "Correct: (b). Linked fingerprints make old changes detectable. (a) The ledger is copied widely, not centralized. (c) It is digital. (d) No government verifies blockchain transactions."
    },
    {
      "q": "Bitcoin's eventual total supply is fixed at:",
      "choices": ["1 million coins", "21 million coins", "Unlimited", "100 billion coins"],
      "answer": 1,
      "explanation": "Correct: (b). 21 million is the coded cap. (a) is too small. (c) is false — the cap is the point. (d) is not the Bitcoin supply."
    },
    {
      "q": "Bitcoin is a poor unit of account mainly because:",
      "choices": ["It is digital", "Its price is extremely volatile, so prices quoted in it swing constantly", "It is backed by gold", "It is illegal everywhere"],
      "answer": 1,
      "explanation": "Correct: (b). A unit of account must be stable enough to quote prices in. (a) Digital money works fine as a unit of account. (c) Bitcoin is not backed by gold. (d) It is legal in many countries."
    },
    {
      "q": "A stablecoin's peg to the dollar is only as good as:",
      "choices": ["Its logo", "Its reserves and the audit behind them", "Its price yesterday", "The number of coins issued"],
      "answer": 1,
      "explanation": "Correct: (b). Redemption depends on real, audited backing. (a) Branding is irrelevant. (c) Past price does not guarantee redemption. (d) Issuing more coins without reserves weakens the peg, not strengthens it."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Financial Innovation: Quick Reference</h3>\n<p><strong>Core idea:</strong> Judge every innovation by two tests — does it lower costs or spread risk, and who bears the new risk?</p>\n<p><strong>Securitization:</strong> Bundle loans → sell securities → lend again. Benefit: more lending. Risk: the lender stops bearing the loss.</p>\n<p><strong>Derivatives:</strong> Futures (lock a price) · Options (right, not obligation) · CDS (insurance on default). Hedging reduces a real risk; speculation is a bet.</p>\n<p><strong>Fintech:</strong> Mobile payments, online lending, robo-advice (0.25% on $40,000 = $100 a year vs. $400 at 1%). Ask: is my money insured, what if the firm fails, what is the real fee?</p>\n<p><strong>Blockchain:</strong> Shared tamper-resistant ledger; each block links to the last, so changes are visible. Bitcoin: fixed supply of 21 million, no central issuer, extreme volatility.</p>\n<p><strong>Watch out:</strong> Crypto fails money's three-function test today — weak medium of exchange, poor unit of account, volatile store of value. Stablecoins are only as good as their reserves; CBDCs are central-bank digital cash.</p>\n<p><strong>Self-check:</strong> Pick a finance app you use and answer the three questions: insured? What if it fails? What is the real fee?</p>\n"
};
