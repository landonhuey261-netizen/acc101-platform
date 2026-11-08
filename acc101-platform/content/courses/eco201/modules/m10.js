// eco201 - Module 10: Information Economics: Asymmetric Information & Signals
module.exports = {
  "number": 10,
  "slug": "information-economics-asymmetric-information",
  "title": "Information Economics: Asymmetric Information & Signals",
  "estTime": "3–4 hours",
  "objectives": [
    "Define asymmetric information and explain how it breaks the competitive benchmark.",
    "Work through the lemons problem and show how a market can unravel.",
    "Explain adverse selection in insurance with a worked premium calculation.",
    "Define signaling and screening and find a separating equilibrium.",
    "Define moral hazard and the principal–agent problem and name the standard fixes."
  ],
  "sections": [
    {
      "heading": "When One Side Knows More",
      "html": "<p>Every model so far assumed perfect information: everyone knows the quality of what is traded, the risks involved, and what the other side will do. <strong>Asymmetric information</strong> breaks that assumption — one side of a deal knows something the other does not. The seller knows whether the used car is a lemon; the job applicant knows how hard they work; the person buying health insurance knows more about their own health than the insurer does. When information is one-sided, the market can shrink, distort, or disappear entirely — and the fixes (warranties, degrees, deductibles) are some of the most interesting institutions in economics.</p>\n<p>There are two kinds of information problem. <strong>Hidden information</strong> is about what someone is like before the deal: the car's quality, the applicant's ability, the insurance buyer's risk. It causes <strong>adverse selection</strong> — the wrong people select into the deal. <strong>Hidden action</strong> is about what someone does after the deal: the insured driver drives carelessly, the hired manager slacks off. It causes <strong>moral hazard</strong>. This module takes them in turn.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Information is a good like any other — and like any good, it can be scarce, unevenly held, and expensive to get. When one side has it and the other does not, prices stop telling the truth.</div>"
    },
    {
      "heading": "The Market for Lemons",
      "html": "<p>George Akerlof's <strong>market for lemons</strong> is the classic hidden-information model. Suppose used cars are of two kinds: good cars worth $10,000 and lemons worth $4,000, in equal numbers. Buyers cannot tell them apart before buying, so they will pay no more than the average value: 0.5 × $10,000 + 0.5 × $4,000 = $7,000. But a seller of a good car will not sell for $7,000 — their car is worth $10,000 to them. Good cars leave the market. Now only lemons remain, buyers know it, and the price falls to $4,000. The market for good used cars has unraveled completely, even though buyers would happily pay $10,000 for a good car if they could be sure of getting one.</p>\n<p>The unraveling is a selection effect: the price reflects the average quality, and the average quality falls because the best sellers exit. The same logic applies to any market where quality is hidden — and the real world is full of fixes: dealer warranties, certified pre-owned programs, independent inspections, and reputation. Each fix is a way of making quality visible, and each costs something — which is why the fixes themselves are an economic choice.</p>\n<div class=\"formula\">Buyers pay expected value: 0.5 × $10,000 + 0.5 × $4,000 = $7,000 &nbsp;|&nbsp; Good sellers exit → price falls to $4,000</div>"
    },
    {
      "heading": "Adverse Selection in Insurance",
      "html": "<p>Insurance is the lemons problem with risk instead of quality. Suppose 100 people want health insurance: 50 are low-risk, with a 10% chance of a $10,000 medical bill (expected loss $1,000 each), and 50 are high-risk, with a 40% chance (expected loss $4,000 each). If the insurer cannot tell them apart, it must charge one pooled premium based on the average expected loss: (50 × $1,000 + 50 × $4,000) ÷ 100 = $2,500, plus $200 of administration, for a premium of $2,700.</p>\n<p>But the low-risk people will not pay $2,700 to insure an expected loss of $1,000 — they drop out. Now the pool is all high-risk, the average expected loss is $4,000, and the premium must rise to $4,000 + $200 = $4,200. That is the <strong>adverse-selection death spiral</strong>: the price rises, the healthiest leave, the price rises again. Real insurers fight it with medical underwriting (asking health questions), waiting periods, group policies through employers (where healthy people cannot easily opt out), and mandates that everyone buys coverage — each one a way of keeping the low-risk in the pool.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A pooled price is fair on average and unfair to everyone individually. The low-risk subsidize the high-risk — and if they can leave, they will.</div>"
    },
    {
      "heading": "Signaling and Screening",
      "html": "<p>When the informed side wants to prove its quality, it <strong>signals</strong>: it takes a costly action that a low-quality type would not find worth doing. Michael Spence's model of education is the classic case. Suppose a college degree raises a worker's wage by $30,000, but getting it costs $20,000 in effort and time for a high-ability worker and $50,000 for a low-ability worker. High-ability workers get the degree ($30,000 gain &gt; $20,000 cost); low-ability workers do not ($30,000 gain &lt; $50,000 cost). Employers see the degree and know the holder is high-ability — the degree signals ability even if it teaches nothing. That is a <strong>separating equilibrium</strong>: the two types choose differently, so the signal reveals the type.</p>\n<p>The mirror image is <strong>screening</strong>: the uninformed side designs a menu that makes the informed side reveal itself. An insurer offers two policies — a cheap one with a high deductible and an expensive one with full coverage — and high-risk buyers choose the expensive one while low-risk buyers choose the cheap one. Warranties work the same way: a seller who offers a long warranty signals a good product, because a lemon seller could not afford to. For a signal to work, it must be cheaper for the good type than for the bad type — that cost difference is everything.</p>\n<div class=\"formula\">Separating equilibrium: high-ability get the degree ($30,000 &gt; $20,000) &nbsp;|&nbsp; low-ability do not ($30,000 &lt; $50,000)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Asymmetric information: one side knows more. Hidden information causes adverse selection; hidden action causes moral hazard.</li>\n<li>Lemons: good cars $10,000, lemons $4,000, 50/50 → buyers pay $7,000, good sellers exit, price falls to $4,000.</li>\n<li>Insurance: pooled premium $2,700 (average loss $2,500 + $200 admin); low-risk exit, premium rises to $4,200 — the death spiral.</li>\n<li>Signaling: a degree costing $20,000 (high-ability) vs. $50,000 (low-ability) against a $30,000 wage gain separates the types.</li>\n<li>Moral hazard: insurance and employment contracts change behavior after the deal. Fixes: deductibles and copays, performance pay, monitoring, and reputation. <strong>Principal–agent problem</strong>: the principal (owner, insurer) cannot fully observe the agent (manager, driver), so contracts must align incentives.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying education is valuable only because of what it teaches. In the signaling model, a degree can be valuable purely as a signal of ability — the wage gain comes from sorting, not from skills learned. Both effects can be real at once.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing adverse selection with moral hazard. Adverse selection is about who joins (hidden information, before the deal). Moral hazard is about what they do after joining (hidden action, after the deal).</div>\n<p><strong>Ready-to-Work link:</strong> Information failure is the second great exception to the First Welfare Theorem. The last module covers the third: when one person's choices impose costs or benefits on others.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Asymmetric information", "def": "One side of a transaction knows something the other does not." },
    { "term": "Hidden information", "def": "A characteristic one side knows before the deal and the other cannot observe — the cause of adverse selection." },
    { "term": "Hidden action", "def": "Behavior one side cannot observe after the deal — the cause of moral hazard." },
    { "term": "Adverse selection", "def": "When the people most likely to join a deal are the ones the other side least wants — the wrong types select in." },
    { "term": "Market for lemons", "def": "Akerlof's model: hidden quality drives good sellers out and the market unravels." },
    { "term": "Death spiral (insurance)", "def": "Rising premiums drive out low-risk buyers, raising average risk and premiums further." },
    { "term": "Signaling", "def": "A costly action by the informed side that reveals its type, because it is cheaper for the good type." },
    { "term": "Separating equilibrium", "def": "An outcome where different types choose differently, so their choice reveals their type." },
    { "term": "Screening", "def": "The uninformed side offers a menu of contracts that makes the informed side reveal its type." },
    { "term": "Moral hazard", "def": "When being protected from a risk (e.g., by insurance) makes someone take more risk or less care." },
    { "term": "Principal–agent problem", "def": "A principal cannot fully observe an agent's actions, so the agent may act in their own interest instead of the principal's." },
    { "term": "Deductible", "def": "The amount an insured person pays before insurance covers a loss; a tool against moral hazard." },
    { "term": "Warranty", "def": "A seller's promise to repair or replace a product; a signal of quality because lemons are expensive to warrant." },
    { "term": "Pooling equilibrium", "def": "An outcome where different types make the same choice, so the choice reveals nothing." }
  ],
  "video": {
    "title": "Asymmetric Information and Health Insurance",
    "embedUrl": "https://www.youtube.com/embed/pUkRo9COd38",
    "note": "Marginal Revolution University shows how asymmetric information drives adverse selection in health insurance — the same pooled-premium math this module works through ($2,700 rising to $4,200). Watch it, then recompute the death spiral yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Used cars are good ($10,000) or lemons ($4,000) in equal numbers, and buyers cannot tell them apart. (a) What is the most a buyer will pay? (b) What happens to the good cars? (c) What is the final price?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Expected value = 0.5 × $10,000 + 0.5 × $4,000 = $5,000 + $2,000 = $7,000. Step 2: (b) Good-car sellers will not sell for $7,000 when their car is worth $10,000, so they exit. Step 3: (c) Only lemons remain, so buyers pay $4,000. The market for good used cars unravels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Suppose instead that 80% of cars are good ($10,000) and 20% are lemons ($4,000). (a) What will buyers pay? (b) Do good cars stay in the market? Explain.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Expected value = 0.8 × $10,000 + 0.2 × $4,000 = $8,000 + $800 = $8,800. Step 2: (b) No — good-car sellers still will not sell for $8,800 when their car is worth $10,000, so they still exit. Step 3: The unraveling happens whenever the average price is below the good car's value, which is true whenever any lemons are in the pool.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> 100 people seek insurance: 50 low-risk (10% chance of a $10,000 loss) and 50 high-risk (40% chance). Admin cost is $200 per policy. (a) What pooled premium must the insurer charge? (b) What happens next?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Low-risk expected loss = 0.10 × $10,000 = $1,000. High-risk = 0.40 × $10,000 = $4,000. Step 2: (a) Average expected loss = (50 × $1,000 + 50 × $4,000) ÷ 100 = $2,500; premium = $2,500 + $200 = $2,700. Step 3: (b) Low-risk people will not pay $2,700 for $1,000 of expected loss, so they exit; the premium then rises to $4,000 + $200 = $4,200 for the remaining high-risk pool.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A degree raises wages by $30,000. It costs $20,000 for high-ability workers and $50,000 for low-ability workers. (a) Who gets the degree? (b) Is this a separating equilibrium? (c) What happens if the wage gain falls to $15,000?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) High-ability workers get it ($30,000 &gt; $20,000); low-ability workers do not ($30,000 &lt; $50,000). Step 2: (b) Yes — the two types choose differently, so the degree reveals ability. Step 3: (c) If the gain falls to $15,000, nobody gets the degree ($15,000 &lt; $20,000 even for high-ability workers) — the signal disappears and employers cannot tell the types apart.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An insurer offers two policies: full coverage for $4,200, or a $2,000-deductible policy for $1,500. (a) Which policy will a low-risk person (expected loss $1,000) prefer? (b) Which will a high-risk person (expected loss $4,000) prefer? Show the expected costs.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Low-risk: full coverage costs $4,200. The deductible policy costs $1,500 premium + expected out-of-pocket: 10% chance of paying the $2,000 deductible = $200, for a total of $1,700. They prefer the deductible policy ($1,700 &lt; $4,200). Step 2: (b) High-risk: full coverage costs $4,200. The deductible policy costs $1,500 + 40% × $2,000 = $1,500 + $800 = $2,300. They also prefer the deductible policy on expected cost alone — so this menu fails to separate them; the deductible would need to be larger, or the full-coverage premium lower, for screening to work. Step 3: The lesson: a screening menu only separates types when the terms are tuned so each type prefers a different option.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> In your own words, explain the difference between adverse selection and moral hazard, giving one example of each from insurance.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Adverse selection is hidden information before the deal — who joins. Example: people who know they are likely to get sick are more likely to buy health insurance, so the pool is riskier than average. Step 2: Moral hazard is hidden action after the deal — what people do once covered. Example: a person with full car insurance drives less carefully because the insurer pays for the damage. Step 3: Selection is about the type of the customer; moral hazard is about the customer's behavior after signing.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Asymmetric information means:",
      "choices": [
        "Nobody knows anything",
        "One side of a transaction knows something the other does not",
        "Information is free for everyone",
        "The government hides information from everyone"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One-sided knowledge is the definition. (a) Symmetric ignorance is not asymmetric information. (c) Free information would remove the problem. (d) Government secrecy is not the economic concept."
    },
    {
      "q": "In the lemons example, buyers will pay at most:",
      "choices": [
        "$10,000",
        "$4,000",
        "$7,000",
        "$14,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Expected value = 0.5 × $10,000 + 0.5 × $4,000 = $7,000. (a) is the good car's value — buyers will not pay it for an unknown car. (b) is the lemon's value, the price only after unraveling. (d) is the sum of the two values, not the average."
    },
    {
      "q": "The market for good used cars unravels because:",
      "choices": [
        "Buyers refuse to pay anything",
        "Good-car sellers will not sell at the average price of $7,000",
        "Lemons are worthless",
        "The government bans used-car sales"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The $7,000 average price is below a good car's $10,000 value, so good sellers exit and the average falls further. (a) Buyers will pay $7,000 at first. (c) Lemons are worth $4,000, not nothing. (d) No ban is involved."
    },
    {
      "q": "The pooled insurance premium in the worked example is $2,700 because:",
      "choices": [
        "Average expected loss is $2,500 and admin costs $200",
        "Low-risk expected loss is $2,700",
        "High-risk expected loss is $2,700",
        "The insurer adds a 50% markup"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (50 × $1,000 + 50 × $4,000) ÷ 100 = $2,500, plus $200 admin = $2,700. (b) Low-risk expected loss is $1,000. (c) High-risk expected loss is $4,000. (d) There is no 50% markup in the calculation."
    },
    {
      "q": "After low-risk buyers exit, the premium must rise to:",
      "choices": [
        "$2,700",
        "$4,200",
        "$1,000",
        "$1,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pool is now all high-risk: $4,000 expected loss + $200 admin = $4,200. (a) is the original pooled premium. (c) is the low-risk expected loss. (d) is the low-risk expected loss plus admin."
    },
    {
      "q": "A degree is a useful signal of ability when:",
      "choices": [
        "It costs the same for everyone",
        "It costs less for high-ability workers than for low-ability workers",
        "It costs more for high-ability workers",
        "Employers never look at degrees"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The cost difference is what separates the types: $20,000 vs. $50,000 against a $30,000 gain. (a) Equal costs would not separate anyone. (c) Reverses the needed difference. (d) If employers ignore degrees, signaling cannot work."
    },
    {
      "q": "Moral hazard is a problem of:",
      "choices": [
        "Hidden information before a deal",
        "Hidden action after a deal",
        "Too much competition",
        "Government regulation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moral hazard is about behavior after signing — the insured driver taking less care. (a) describes adverse selection. (c) Competition does not cause moral hazard. (d) Regulation can respond to moral hazard but is not its cause."
    },
    {
      "q": "A deductible reduces moral hazard because:",
      "choices": [
        "It makes the insured person pay part of any loss, so they still have reason to be careful",
        "It raises the insurer's profit directly",
        "It bans risky behavior",
        "It makes insurance free"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sharing the loss restores the incentive to take care. (b) Profit is not the mechanism. (c) Nothing is banned — the incentive changes. (d) A deductible makes insurance less complete, not free."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Information Economics Quick Reference</h3>\n<p><strong>Core idea:</strong> When one side knows more, prices stop telling the truth: good sellers exit, risky buyers flood in, and behavior changes after the deal. Signals, screening, and deductibles are the fixes.</p>\n<p><strong>Lemons anchor:</strong> good $10,000, lemon $4,000, 50/50 → buyers pay $7,000 → good sellers exit → price $4,000.</p>\n<p><strong>Insurance anchor:</strong> low-risk expected loss $1,000, high-risk $4,000 → pooled premium $2,700 ($2,500 + $200 admin) → low-risk exit → premium $4,200.</p>\n<div class=\"formula\">Expected value = probability × value &nbsp;|&nbsp; Signal works when it is cheaper for the good type</div>\n<p><strong>Signaling anchor:</strong> degree costs $20,000 (high-ability) vs. $50,000 (low-ability) against a $30,000 wage gain — only high-ability workers get it.</p>\n<p><strong>Watch out:</strong> Adverse selection is who joins (before the deal); moral hazard is what they do (after the deal).</p>\n<p><strong>Self-check:</strong> If 80% of cars are good, what do buyers pay? (Answer: $8,800 — and good sellers still exit.)</p>\n"
};
