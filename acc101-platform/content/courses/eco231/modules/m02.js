// eco231 - Module 2: Human Capital: Education, Training & Earnings
module.exports = {
  "number": 2,
  "slug": "human-capital",
  "title": "Human Capital: Education, Training & Earnings",
  "estTime": "3–4 hours",
  "objectives": [
    "Define human capital and explain how it raises a worker's marginal product and wage.",
    "Treat education and training as investments and compute their present value.",
    "Compare the human-capital and signaling explanations for why graduates earn more.",
    "Explain why people invest in education when young and why training differs by who pays for it.",
    "Use the college wage premium to judge whether a course of study is likely to pay off."
  ],
  "sections": [
    {
      "heading": "What Human Capital Is",
      "html": "<p><strong>Human capital</strong> is the stock of skills, knowledge, and health a person carries around in their head and body. Like a machine, it is built by investment — schooling, training, practice, and good health — and it pays a return: higher productivity, which the labor market rewards with higher pay. The word \"capital\" is deliberate: education is not just consumption, like a holiday; it is an asset that produces income for decades.</p>\n<p>Human capital explains much of the wage gap between workers. Two people of the same age and effort can earn very different wages because one spent years building skills the market values — a welder with a certification, a nurse with a license, a programmer with a portfolio. Their marginal products differ, so their MRPs differ, so their wages differ.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Education is an investment, not just an expense. You pay costs now — tuition and forgone earnings — for a stream of higher earnings later.</div>"
    },
    {
      "heading": "The Investment Decision: Present Value",
      "html": "<p>Because the costs of education come now and the benefits come later, the decision must compare money across time. The tool is <strong>present value (PV)</strong>: a dollar next year is worth less than a dollar today, because today's dollar can be invested. At an interest rate r, $1 in t years is worth $1 ÷ (1 + r)^t today.</p>\n<p>Example: a degree adds $10,000 a year of earnings for 30 years, and the interest rate is 5%. The present value of that stream is $10,000 × the 30-year annuity factor at 5%. The factor is [1 − (1.05)^−30] ÷ 0.05 = 15.372, so PV = $10,000 × 15.372 = <strong>$153,720</strong>. If the full cost of the degree — tuition plus the earnings given up while studying — is $80,000, the net present value is $153,720 − $80,000 = <strong>$73,720</strong>. The degree pays.</p>\n<div class=\"formula\">PV of an annuity = Annual gain × [1 − (1 + r)^−n] ÷ r &nbsp;|&nbsp; Invest if PV of gains &gt; cost</div>\n<p>Two costs matter and students often forget one. The <strong>direct cost</strong> is tuition, fees, and books. The <strong>opportunity cost</strong> is the earnings forgone while studying — often the bigger number. A four-year degree that costs $10,000 a year in tuition also costs four years of full-time pay.</p>"
    },
    {
      "heading": "Human Capital vs. Signaling",
      "html": "<p>Why do graduates earn more? The <strong>human-capital theory</strong> says college teaches skills that raise productivity — the learning itself is the payoff. The <strong>signaling theory</strong> says a degree mostly proves to employers that the graduate is smart, conscientious, and persistent — the diploma is a signal of traits the employer cannot see directly.</p>\n<p>The evidence points to both. Graduates do learn job-relevant skills, and earnings also jump on the day the diploma is handed over — the \"sheepskin effect\" — which fits signaling, because little learning happens on graduation day itself. The split matters for policy: if education is mostly signaling, subsidizing more degrees mostly helps graduates sort themselves, and the money might be better spent elsewhere; if it is mostly skill-building, education spending genuinely makes the whole economy more productive.</p>\n<p>For the individual student, the practical lesson is the same either way: finish what you start (the sheepskin effect rewards completion), and pick skills the market actually pays for (human capital rewards relevance).</p>"
    },
    {
      "heading": "When to Invest, and Who Pays for Training",
      "html": "<p>Human capital investment pays best when you are young, for two reasons. First, the payoff stream is longer — 40 years of higher earnings beats 10. Second, the opportunity cost is lower — a young worker gives up a low wage to study, while an older worker gives up a high one. That is why most schooling happens early in life and why retraining later is a harder, though still often worthwhile, decision.</p>\n<p>On-the-job training splits into two kinds. <strong>General training</strong> (say, learning to use a spreadsheet) is useful at many firms, so workers usually pay for it — through lower wages during training — because they can take the skill with them. <strong>Specific training</strong> (learning one firm's own software) is useful only at that firm, so the firm usually pays, because the worker cannot sell the skill elsewhere. If a firm paid for general training, the worker could quit and take the skill to a rival.</p>\n<p>Health is human capital too: a healthy worker misses fewer days, learns faster, and works longer. That is one reason health and earnings move together, and one reason Module 7 treats health care as an investment as well as a service.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Human capital is skills, knowledge, and health — an asset built by investment.</li>\n<li>Education pays if the present value of extra earnings beats the full cost (tuition + forgone earnings).</li>\n<li>PV of an annuity = annual gain × [1 − (1 + r)^−n] ÷ r.</li>\n<li>Graduates earn more for two reasons: skill-building (human capital) and signaling.</li>\n<li>Invest young: longer payoff, lower opportunity cost.</li>\n<li>General training is usually paid for by workers; specific training by firms.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Counting only tuition as the cost of college. Forgone earnings — the pay you give up while studying — are usually the larger cost and must be counted.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Comparing a graduate's salary with a non-graduate's salary and calling the whole gap the return to education. Part of the gap is ability and background, not the degree itself.</div>\n<p><strong>Ready-to-Work link:</strong> Before choosing a course or certificate, do the module's present-value math on it: cost (fees + forgone pay) against the extra annual pay, over the years you will actually work. If the net present value is negative, the course is a hobby, not an investment.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Human capital", "def": "The skills, knowledge, and health a person has, which raise their productivity and earnings." },
    { "term": "Investment in human capital", "def": "Spending time or money on education, training, or health to raise future productivity and earnings." },
    { "term": "Present value (PV)", "def": "What a future sum of money is worth today, after discounting at the interest rate." },
    { "term": "Net present value (NPV)", "def": "The present value of an investment's gains minus its costs; invest when NPV is positive." },
    { "term": "Discount rate", "def": "The interest rate used to convert future money into present value." },
    { "term": "Direct cost of education", "def": "Tuition, fees, and books — the money paid out to study." },
    { "term": "Opportunity cost of education", "def": "The earnings forgone while studying instead of working." },
    { "term": "College wage premium", "def": "The percentage by which college graduates' earnings exceed those of high-school graduates." },
    { "term": "Signaling theory", "def": "The view that education raises earnings mainly by signaling ability to employers, not by teaching skills." },
    { "term": "Human-capital theory", "def": "The view that education raises earnings by teaching skills that raise productivity." },
    { "term": "Sheepskin effect", "def": "The jump in earnings on completing a degree, beyond the earnings of someone with nearly as much schooling but no diploma." },
    { "term": "General training", "def": "Training useful at many firms; usually paid for by the worker." },
    { "term": "Specific training", "def": "Training useful only at one firm; usually paid for by that firm." },
    { "term": "Rate of return to education", "def": "The percentage return on the cost of an extra year of schooling, roughly the wage gain divided by the cost." },
    { "term": "Depreciation of human capital", "def": "The loss of skills through forgetting, obsolescence, or time out of work." },
    { "term": "On-the-job training", "def": "Skills learned while working, through practice, mentoring, and courses paid for by the employer or worker." }
  ],
  "video": {
    "title": "Economics of Education: Crash Course Economics #23",
    "embedUrl": "https://www.youtube.com/embed/8lPbkHVxenU",
    "note": "Crash Course weighs the costs and benefits of education — tuition, forgone earnings, the college wage premium, and the human-capital versus signaling debate. Watch it, then run the present-value math in this module on a course you are considering.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A certificate adds $10,000 a year of earnings for 30 years. The interest rate is 5% and the 30-year annuity factor at 5% is 15.372. (a) What is the present value of the extra earnings? (b) If the certificate costs $80,000 in total, what is its net present value? Is it worth it?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV = $10,000 × 15.372 = <strong>$153,720</strong>. Step 2: NPV = $153,720 − $80,000 = <strong>$73,720</strong>. Step 3: NPV is positive, so yes — the certificate is worth it on these numbers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A training course costs $2,000 now and adds $500 a year of earnings for 10 years. The interest rate is 5% and the 10-year annuity factor at 5% is 7.722. (a) What is the PV of the gains? (b) What is the NPV?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV = $500 × 7.722 = <strong>$3,861</strong>. Step 2: NPV = $3,861 − $2,000 = <strong>$1,861</strong>. Step 3: Positive NPV — the training pays for itself and leaves $1,861 of value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A degree costs $40,000 in tuition over four years. The student could otherwise earn $25,000 a year. (a) What is the total cost of the degree, counting opportunity cost? (b) Why is the answer bigger than $40,000?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Opportunity cost = 4 × $25,000 = $100,000 of forgone earnings. Step 2: Total cost = $40,000 + $100,000 = <strong>$140,000</strong>. Step 3: It is bigger than tuition alone because the four years of study also cost four years of pay — time in class is time not earning.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In your own words, explain the human-capital and signaling theories of why graduates earn more, and give one piece of evidence for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Human-capital theory — college teaches skills that raise productivity, so employers pay more for the extra output. Evidence: graduates in technical fields earn more in line with the skills they learned. Step 2: Signaling theory — a degree proves ability, persistence, and conscientiousness to employers who cannot see those traits directly. Evidence: the sheepskin effect — earnings jump when the diploma is awarded, not gradually as learning accumulates. Step 3: Most economists think both are at work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 55-year-old worker is offered a two-year retraining program that costs $15,000 and would add $4,000 a year until retirement at 65. The 10-year annuity factor at 5% is 7.722. Should they do it on money alone? Show the math.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of gains = $4,000 × 7.722 = <strong>$30,888</strong>. Step 2: NPV = $30,888 − $15,000 = <strong>$15,888</strong>. Step 3: On money alone, yes — the NPV is positive. But note the margin is thinner than for a young worker with 40 years of gains, and the forgone earnings during the two years of study are not counted here, so the real answer needs those too.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm can train its staff in (a) general spreadsheet skills or (b) its own custom ordering system. Who should pay for each, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) General training — the worker should pay, usually through a lower wage during training, because the skill is portable and the worker can take it to another employer. Step 2: (b) Specific training — the firm should pay, because the skill is useless elsewhere, so the worker would never pay for it. Step 3: If the firm paid for (a), it would be giving its rivals a free gift whenever the worker quit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Human capital is:",
      "choices": ["The machines and buildings a firm owns", "The skills, knowledge, and health a worker carries", "The money in a worker's bank account", "The number of workers in a firm"],
      "answer": 1,
      "explanation": "Correct: (b). Human capital lives in people — skills, knowledge, health. (a) is physical capital. (c) Savings are financial wealth, not productive skill. (d) Headcount is labor quantity, not the quality of each worker."
    },
    {
      "q": "An extra $10,000 a year for 30 years at 5% (annuity factor 15.372) has a present value of:",
      "choices": ["$10,000", "$153,720", "$300,000", "$80,000"],
      "answer": 1,
      "explanation": "Correct: (b). PV = $10,000 × 15.372 = $153,720. (a) is one year's gain. (c) is the undiscounted total, $10,000 × 30, which ignores that later dollars are worth less. (d) is the example's cost, not the PV of gains."
    },
    {
      "q": "The opportunity cost of going to college is:",
      "choices": ["Tuition and fees only", "The earnings forgone while studying", "The cost of textbooks only", "The interest on a student loan only"],
      "answer": 1,
      "explanation": "Correct: (b). Time in class is time not working, and the lost pay is a real cost. (a) and (c) are direct costs, part of the total but not the opportunity cost. (d) Interest is a financing cost, not the forgone earnings."
    },
    {
      "q": "The signaling theory of education says a degree raises earnings mainly because it:",
      "choices": ["Teaches skills that raise productivity", "Proves to employers that the graduate has ability and persistence", "Makes the graduate healthier", "Lowers the cost of hiring"],
      "answer": 1,
      "explanation": "Correct: (b). The diploma is a credible signal of traits employers cannot see. (a) is the human-capital theory. (c) Health is a separate channel. (d) Signaling does not lower hiring costs — it is the employer's way of screening applicants."
    },
    {
      "q": "The sheepskin effect is evidence for signaling because:",
      "choices": ["Earnings rise gradually as learning accumulates", "Earnings jump when the diploma is awarded, though little learning happens that day", "Graduates forget what they learned", "Employers never check diplomas"],
      "answer": 1,
      "explanation": "Correct: (b). A jump on graduation day fits a signal being sent, not skills being built that day. (a) would fit human capital, not signaling. (c) is about forgetting, which is depreciation, not signaling. (d) is false — employers do check, which is why the signal works."
    },
    {
      "q": "Education investment usually pays best when young because:",
      "choices": ["Young people have more money", "The payoff stream is longer and the opportunity cost is lower", "Older workers cannot learn", "Tuition is cheaper for the young"],
      "answer": 1,
      "explanation": "Correct: (b). Forty years of extra earnings beats ten, and a young worker gives up a low wage to study. (a) Young people usually have less money, not more. (c) Older workers can learn — the payoff is just shorter. (d) Tuition does not depend on age."
    },
    {
      "q": "General training is usually paid for by the worker because:",
      "choices": ["Firms are generous", "The skill is portable to other employers", "The law requires it", "General training is free"],
      "answer": 1,
      "explanation": "Correct: (b). A portable skill belongs to the worker, who keeps the return wherever they work. (a) Generosity is not the mechanism — it is who captures the return. (c) No law assigns the cost this way. (d) Training costs time and money; someone always pays."
    },
    {
      "q": "A training course has PV of gains $3,861 and costs $2,000. Its NPV is:",
      "choices": ["$5,861", "$1,861", "$3,861", "−$1,861"],
      "answer": 1,
      "explanation": "Correct: (b). NPV = $3,861 − $2,000 = $1,861, positive, so the course pays. (a) adds cost to gains. (c) is the PV of gains, not the net value. (d) subtracts the wrong way round."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Human Capital: Quick Reference</h3>\n<p><strong>Core idea:</strong> Education and training are investments: pay now, earn more later. Invest when the present value of the gains beats the full cost.</p>\n<div class=\"formula\">PV of annuity = Annual gain × [1 − (1 + r)^−n] ÷ r &nbsp;|&nbsp; NPV = PV of gains − cost</div>\n<p><strong>Worked anchor:</strong> $10,000/yr for 30 yrs at 5% (factor 15.372) → PV $153,720; cost $80,000 → NPV $73,720. Training: $500/yr × 7.722 = $3,861; cost $2,000 → NPV $1,861.</p>\n<p><strong>Full cost:</strong> Tuition + forgone earnings. Four years at $10,000 tuition + $25,000/yr forgone = $140,000.</p>\n<p><strong>Two theories:</strong> Human capital (skills raise productivity) vs. signaling (the diploma proves ability). The sheepskin effect supports signaling; both matter.</p>\n<p><strong>Who pays:</strong> General training — the worker (portable). Specific training — the firm (not portable). Invest young: longer payoff, lower opportunity cost.</p>\n<p><strong>Watch out:</strong> Never count tuition alone, and never compare graduate and non-graduate pay without remembering that ability and background explain part of the gap.</p>\n<p><strong>Self-check:</strong> Pick a certificate you are considering and compute its NPV with the annuity formula.</p>\n"
};
