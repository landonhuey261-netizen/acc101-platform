// eco231 - Module 8: Health Insurance & Health Policy
module.exports = {
  "number": 8,
  "slug": "health-insurance-health-policy",
  "title": "Health Insurance & Health Policy",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why insurance exists: risk pooling and the expected value of a loss.",
    "Compute a fair premium from expected losses and add a loading fee.",
    "Explain adverse selection and how it can unravel an insurance market.",
    "Explain moral hazard in health insurance and the tools that limit it.",
    "Compare the main health policy tools: mandates, subsidies, public insurance, and regulation."
  ],
  "sections": [
    {
      "heading": "Why Insurance Exists: Pooling Risk",
      "html": "<p>Health care costs are unpredictable: most people spend little in a year, a few spend a fortune. Insurance exists to turn that gamble into a certainty. A large group of people each pay a premium into a pool, and the pool pays the bills of the few who fall ill. Nobody knows who will need the money, but the group as a whole can predict its total bill quite well — that is the <strong>law of large numbers</strong>.</p>\n<p>The key number is the <strong>expected value</strong> of a loss: each possible cost multiplied by its probability, added up. Example: 90% of people in a group cost $500 in a year and 10% cost $10,500. Expected cost = 0.90 × $500 + 0.10 × $10,500 = $450 + $1,050 = <strong>$1,500</strong> per person. A <strong>fair premium</strong> — one that just covers expected payouts — is $1,500. Real premiums add a <strong>loading fee</strong> for administration and profit: with a $150 loading fee, the premium is <strong>$1,650</strong>.</p>\n<div class=\"formula\">Expected value = Σ (probability × cost) &nbsp;|&nbsp; Premium = Expected value + loading fee</div>\n<p>Insurance works because most people are <strong>risk-averse</strong>: they would rather pay a certain $1,650 than face a 10% chance of a $10,500 bill. The premium buys peace of mind, not just expected payouts.</p>"
    },
    {
      "heading": "Adverse Selection: When the Healthy Leave",
      "html": "<p>Insurance markets have a built-in trap. The insurer cannot see how sick each applicant is, but the applicant knows. So the people most likely to buy insurance are the people most likely to need it — <strong>adverse selection</strong>.</p>\n<p>Worked example: a pool of 100 people — 80 low-risk, each costing $400 a year, and 20 high-risk, each costing $6,000. Total cost = 80 × $400 + 20 × $6,000 = $32,000 + $120,000 = $152,000. Average cost = $152,000 ÷ 100 = <strong>$1,520</strong>, so the fair premium is $1,520. But the low-risk people look at a $1,520 premium for $400 of expected care and many leave. If all 80 leave, only the 20 high-risk people remain, and the premium must rise to $6,000 — which may be unaffordable even for them. The market <strong>unravels</strong> in a death spiral: higher premiums drive out the healthy, which drives premiums higher still.</p>\n<p>Policy answers to adverse selection all work the same way: get the healthy into the pool. An <strong>individual mandate</strong> requires everyone to buy insurance. <strong>Employer-based insurance</strong> pools workers whether they are sick or healthy. <strong>Public insurance</strong> (Medicare, Medicaid) pools by law. And <strong>risk adjustment</strong> pays insurers more for sicker enrollees, so insurers stop trying to attract only the healthy.</p>"
    },
    {
      "heading": "Moral Hazard: When Insurance Changes Behavior",
      "html": "<p><strong>Moral hazard</strong> happens after insurance is bought: because the insurer pays most of the bill, the insured person uses more care — and takes less care to avoid needing it — than they would if they paid full price. Recall Module 7's scan: at a $200 copayment instead of a $2,000 price, the patient says yes far more often.</p>\n<p>Insurers limit moral hazard with cost-sharing. A <strong>deductible</strong> is the amount you pay before insurance starts (say, the first $500). A <strong>copayment</strong> is a fixed amount per visit (say, $20). <strong>Coinsurance</strong> is a percentage (say, you pay 20% and the insurer pays 80%). Each makes the patient feel some of the price, which trims use — but each also makes care harder to afford for the sick, so the balance is delicate. The famous RAND Health Insurance Experiment found that cost-sharing cut use by about one-third, with no measurable harm to the health of most people — but with real harm for the poorest and sickest, who skipped needed care.</p>\n<p>There is also <strong>provider moral hazard</strong>: under fee-for-service, doctors and hospitals earn more by doing more, and insurance pays the bill. Managed care — HMOs that pay a flat amount per patient — was invented to control exactly that.</p>"
    },
    {
      "heading": "Health Policy: The Main Tools",
      "html": "<p>Governments use four broad tools. <strong>Public insurance</strong> covers groups the private market serves badly: the elderly (Medicare) and low-income households (Medicaid) in the U.S. <strong>Subsidies</strong> help people buy private insurance, usually on a sliding scale by income. <strong>Regulation</strong> sets the rules: in the U.S., the Affordable Care Act banned insurers from denying coverage for pre-existing conditions and from charging the sick more than the healthy — rules that only work alongside a mandate or subsidies, or adverse selection returns.</p>\n<p><strong>Mandates</strong> require coverage: employers of a certain size must offer it, or individuals must buy it. Each tool has a trade-off. Public insurance is simple and pools broadly but costs the budget. Subsidies preserve choice but cost the budget too. Regulation protects the sick but raises premiums for the healthy. There is no free lunch in health policy — every fix moves the cost somewhere else, and the honest debate is about who should bear it.</p>\n<p>Economists judge a health system on three tests, from Module 7: <strong>access</strong> (can people get care?), <strong>cost</strong> (what does it cost?), and <strong>quality</strong> (does it make people healthier?). No country tops all three at once; each system trades them off differently.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Insurance pools risk: premium = expected value + loading fee. Example: 0.90 × $500 + 0.10 × $10,500 = $1,500 fair premium; + $150 loading = $1,650.</li>\n<li>Adverse selection: the sick buy insurance, the healthy leave, premiums spiral up. Pool example: 80 × $400 + 20 × $6,000 = $152,000 ÷ 100 = $1,520; if the healthy leave, the premium becomes $6,000.</li>\n<li>Moral hazard: insurance lowers the price the patient faces, so use rises. Deductibles, copayments, and coinsurance limit it.</li>\n<li>Policy tools: public insurance, subsidies, regulation, mandates — each moves the cost, none removes it.</li>\n<li>Judge a system on access, cost, and quality.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a fair premium is the average cost of the sickest people. It is the expected cost across the whole pool — healthy and sick together — which is why the healthy must stay in the pool for the price to work.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating moral hazard as fraud. It is ordinary behavior: when the price you face falls, you buy more. The patient is not cheating; the incentive changed.</div>\n<p><strong>Ready-to-Work link:</strong> Read your own insurance card before you need it: deductible, copayment, coinsurance, and out-of-pocket maximum. Those four numbers decide what a hospital visit will actually cost you.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Health insurance", "def": "A contract in which a group pools premiums to pay the medical costs of members who fall ill." },
    { "term": "Risk pooling", "def": "Spreading the cost of rare, large losses across a large group so each member pays a predictable premium." },
    { "term": "Expected value", "def": "The probability-weighted average of possible costs: Σ (probability × cost)." },
    { "term": "Fair premium", "def": "A premium equal to the expected value of payouts, with no loading fee." },
    { "term": "Loading fee", "def": "The amount added to a fair premium for administration, reserves, and profit." },
    { "term": "Risk aversion", "def": "Preferring a certain payment to a gamble with the same expected value." },
    { "term": "Adverse selection", "def": "Higher-risk people being more likely to buy insurance, which raises premiums and can unravel the market." },
    { "term": "Death spiral", "def": "Rising premiums driving out healthy members, which raises premiums further until the market collapses." },
    { "term": "Moral hazard", "def": "Insured people using more care, or taking less care, because insurance pays most of the bill." },
    { "term": "Deductible", "def": "The amount a patient pays before insurance starts paying." },
    { "term": "Copayment", "def": "A fixed amount a patient pays per visit or prescription." },
    { "term": "Coinsurance", "def": "A percentage of the bill the patient pays, with the insurer paying the rest." },
    { "term": "Out-of-pocket maximum", "def": "The most a patient pays in a year; the insurer pays everything above it." },
    { "term": "Individual mandate", "def": "A rule requiring everyone to buy health insurance, to keep the healthy in the pool." },
    { "term": "Pre-existing condition", "def": "An illness a person already has when applying for insurance; U.S. law now bars denying coverage for it." },
    { "term": "Risk adjustment", "def": "Paying insurers more for sicker enrollees, so they do not profit from avoiding the sick." },
    { "term": "Affordable Care Act", "def": "The 2010 U.S. law expanding coverage through subsidies, regulation, and (originally) a mandate." },
    { "term": "Managed care / HMO", "def": "A health plan that pays providers a flat amount per patient and manages what care is given." }
  ],
  "video": {
    "title": "Asymmetric Information and Health Insurance",
    "embedUrl": "https://www.youtube.com/embed/pUkRo9COd38",
    "note": "Marginal Revolution University shows how asymmetric information drives adverse selection in health insurance — the same pooled-premium math this module works through. Watch it, then recompute the 100-person pool ($1,520 premium) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In a group, 90% of people cost $500 a year in care and 10% cost $10,500. (a) What is the expected cost per person? (b) What is the fair premium? (c) If the insurer adds a $150 loading fee, what premium does it charge?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Expected cost = 0.90 × $500 + 0.10 × $10,500 = $450 + $1,050 = <strong>$1,500</strong>. Step 2: The fair premium equals the expected cost: <strong>$1,500</strong>. Step 3: Premium charged = $1,500 + $150 = <strong>$1,650</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pool has 100 people: 80 low-risk costing $400 each and 20 high-risk costing $6,000 each. (a) What is the total cost? (b) What is the fair premium per person? (c) If all 80 low-risk people leave, what premium must the remaining 20 pay?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total cost = 80 × $400 + 20 × $6,000 = $32,000 + $120,000 = <strong>$152,000</strong>. Step 2: Fair premium = $152,000 ÷ 100 = <strong>$1,520</strong>. Step 3: If only the 20 high-risk remain, the premium is $120,000 ÷ 20 = <strong>$6,000</strong> — the death spiral in numbers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A patient's plan has a $500 deductible, then 20% coinsurance. A hospital bill is $2,500. (a) How much does the patient pay? (b) How much does the insurer pay?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The patient pays the $500 deductible first. Step 2: The remaining $2,000 is split 20/80: the patient pays 0.20 × $2,000 = $400. Step 3: Total patient payment = $500 + $400 = <strong>$900</strong>. Step 4: The insurer pays $2,500 − $900 = <strong>$1,600</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In your own words, explain adverse selection and the death spiral, using the 100-person pool from this module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Adverse selection is the sick being more likely to buy insurance, because they know they will need it and the insurer cannot tell them apart from the healthy. Step 2: In the pool, the fair premium is $1,520, but low-risk members expect only $400 of care, so many leave. Step 3: As the healthy leave, the average cost of those left rises, so the premium rises — to $6,000 if only the high-risk remain — which drives out anyone who can leave, until the market unravels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A plan charges a $20 copayment per doctor visit instead of the full $150 visit price. (a) What price does the patient face? (b) How does moral hazard show up here? (c) Name one way the insurer can limit it without raising the copayment.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The patient faces <strong>$20</strong>, not $150. Step 2: At $20, the patient visits for minor issues they would have ridden out at $150 — use rises because the price the patient faces fell. Step 3: The insurer could require a referral from a primary-care doctor, use a network of approved providers, or review whether visits are medically necessary — managed-care tools that limit use without raising the price to the patient.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A government wants to stop insurers from denying coverage for pre-existing conditions. Why might that rule alone make adverse selection worse, and what second policy is needed to make it work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: If insurers must cover the sick at the same price as the healthy, healthy people have even less reason to buy insurance — they can wait until they are sick and still get covered. Step 2: The pool gets sicker, premiums rise, and more healthy people leave — adverse selection worsens. Step 3: A second policy is needed to bring the healthy in: a mandate to buy insurance, subsidies that make it cheap, or automatic enrollment — so the pool stays broad enough for the price to work.</p>"
    }
  ],
  "quiz": [
    {
      "q": "90% of people cost $500 and 10% cost $10,500. The expected cost per person is:",
      "choices": ["$500", "$1,050", "$1,500", "$10,500"],
      "answer": 2,
      "explanation": "Correct: (c). 0.90 × $500 + 0.10 × $10,500 = $450 + $1,050 = $1,500. (a) is the low-risk cost only. (b) is the high-risk contribution only. (d) is the high-risk cost only."
    },
    {
      "q": "A fair premium of $1,500 with a $150 loading fee is charged as:",
      "choices": ["$1,350", "$1,500", "$1,650", "$3,000"],
      "answer": 2,
      "explanation": "Correct: (c). $1,500 + $150 = $1,650. (a) subtracts the fee. (b) is the fair premium before loading. (d) doubles the fair premium."
    },
    {
      "q": "Adverse selection in health insurance means:",
      "choices": ["Healthy people buy more insurance than sick people", "Sicker people are more likely to buy insurance, raising premiums", "Insurers refuse to pay any claims", "Premiums fall as the pool gets sicker"],
      "answer": 1,
      "explanation": "Correct: (b). The sick know they need cover and the insurer cannot tell them apart, so the pool is sicker than average. (a) is the opposite. (c) is a claims dispute, not selection. (d) Premiums rise as the pool gets sicker, they do not fall."
    },
    {
      "q": "In the 100-person pool (80 × $400, 20 × $6,000), the fair premium is:",
      "choices": ["$400", "$1,520", "$6,000", "$152,000"],
      "answer": 1,
      "explanation": "Correct: (b). Total $152,000 ÷ 100 = $1,520. (a) is the low-risk cost. (c) is the premium if only the high-risk remain. (d) is the total cost, not the per-person premium."
    },
    {
      "q": "If all the low-risk members leave that pool, the premium for those left becomes:",
      "choices": ["$400", "$1,520", "$6,000", "$152,000"],
      "answer": 2,
      "explanation": "Correct: (c). $120,000 ÷ 20 = $6,000. (a) is the low-risk cost. (b) is the premium with everyone in the pool. (d) is the total cost of the whole pool, not a premium."
    },
    {
      "q": "Moral hazard in health insurance is best described as:",
      "choices": ["Sick people buying insurance", "Insured people using more care because insurance lowers the price they face", "Insurers lying about coverage", "Doctors refusing to treat the uninsured"],
      "answer": 1,
      "explanation": "Correct: (b). After buying insurance, the price the patient faces falls, so use rises. (a) is adverse selection, which happens before buying. (c) is fraud, not moral hazard. (d) is an access problem, not moral hazard."
    },
    {
      "q": "A $500 deductible on a $2,500 bill with 20% coinsurance after the deductible means the patient pays:",
      "choices": ["$500", "$900", "$1,600", "$2,500"],
      "answer": 1,
      "explanation": "Correct: (b). $500 deductible + 0.20 × $2,000 = $500 + $400 = $900. (a) forgets the coinsurance on the remaining $2,000. (c) is the insurer's share. (d) is the full bill."
    },
    {
      "q": "Banning insurers from denying coverage for pre-existing conditions, on its own, can worsen adverse selection because:",
      "choices": ["Healthy people can wait until they are sick to buy insurance", "Sick people stop buying insurance", "Premiums fall for everyone", "Insurers earn more profit"],
      "answer": 0,
      "explanation": "Correct: (a). With guaranteed coverage, the healthy can wait, so the pool gets sicker and premiums rise. (b) The sick buy more, not less. (c) Premiums rise as the pool worsens. (d) Insurers face higher costs, not higher profit."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Health Insurance & Health Policy: Quick Reference</h3>\n<p><strong>Core idea:</strong> Insurance pools risk. The premium is the expected cost across the whole pool plus a loading fee — and the pool only works if the healthy stay in it.</p>\n<div class=\"formula\">Expected value = Σ (probability × cost) &nbsp;|&nbsp; Premium = Expected value + loading fee</div>\n<p><strong>Worked anchors:</strong> 0.90 × $500 + 0.10 × $10,500 = $1,500 fair premium; + $150 loading = $1,650. Pool: 80 × $400 + 20 × $6,000 = $152,000 ÷ 100 = $1,520; healthy leave → $6,000. Bill $2,500, $500 deductible, 20% coinsurance → patient pays $900, insurer $1,600.</p>\n<p><strong>Two traps:</strong> Adverse selection (sick buy, healthy leave → death spiral) and moral hazard (insurance lowers the price faced → more use). Cost-sharing — deductible, copayment, coinsurance — limits moral hazard.</p>\n<p><strong>Policy tools:</strong> Public insurance (Medicare, Medicaid), subsidies, regulation (no denial for pre-existing conditions), mandates. Each moves the cost; none removes it.</p>\n<p><strong>Watch out:</strong> The fair premium is the average across the whole pool, not the cost of the sickest. And moral hazard is ordinary behavior, not fraud.</p>\n<p><strong>Self-check:</strong> Recompute the pool premium with 60 low-risk and 40 high-risk members, and say what happens to the price.</p>\n"
};
