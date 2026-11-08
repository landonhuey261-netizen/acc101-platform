// BUS 121 - Module 5: Probability Basics for Business Decisions
module.exports = {
  number: 5,
  slug: "probability-basics-for-business-decisions",
  title: "Probability Basics for Business Decisions",
  estTime: "3–4 hours",
  objectives: [
    "Compute probabilities from counts: favorable outcomes divided by total outcomes.",
    "Apply the complement, addition, and multiplication rules.",
    "Distinguish independent from dependent events.",
    "Compute expected value and use it to compare business options.",
    "Explain what a probability is — and what it is not."
  ],
  sections: [
    {
      heading: "Probability as a Count",
      html: `
<p>A <strong>probability</strong> is a number between 0 and 1 that measures how likely an event is: the number of favorable outcomes divided by the number of equally likely outcomes. A fair coin lands heads with probability 1 ÷ 2 = 0.5. A die shows a 5 with probability 1 ÷ 6 ≈ 0.167. In business, the "outcomes" are usually past cases: if 60 of the last 100 customers who saw a demo bought the product, the estimated probability of purchase is 60 ÷ 100 = <strong>0.60</strong>.</p>
<p>That last sentence is the bridge from textbook probability to business probability. A probability from history is an estimate, not a law of nature: it assumes the future resembles the past. When conditions change — a new price, a new competitor — the estimate must be updated, not trusted blindly.</p>
<div class="callout"><strong>Key idea:</strong> Probability is a ratio, not a promise. A 0.60 chance of a sale means that in the long run about 60 of 100 similar prospects buy — not that this particular prospect will buy with 60% certainty in any meaningful sense.</div>`
    },
    {
      heading: "Complement, Addition, Multiplication",
      html: `
<p>Three rules do most business probability work. The <strong>complement rule</strong>: P(not A) = 1 − P(A). If the chance a delivery is on time is 0.90, the chance it is late is 0.10. The <strong>addition rule</strong>: P(A or B) = P(A) + P(B) − P(A and B). If the chance a customer buys product A is 0.60 and product B is 0.50, and the chance they buy both is 0.30, then the chance they buy at least one is 0.60 + 0.50 − 0.30 = <strong>0.80</strong> — the subtraction corrects for double-counting the both-buyers.</p>
<p>The <strong>multiplication rule</strong> for independent events: P(A and B) = P(A) × P(B). Two independent events with probabilities 0.60 and 0.50 occur together with probability 0.60 × 0.50 = <strong>0.30</strong>. Independence means one event does not change the other's probability — two separate customers, two separate coin flips. When events are dependent, the multiplication needs a conditional probability instead.</p>`
    },
    {
      heading: "Independent vs. Dependent Events",
      html: `
<p>Events are <strong>independent</strong> when one does not affect the other: whether Customer A buys does not change whether Customer B buys. Events are <strong>dependent</strong> when it does: drawing a card without replacing it changes the odds for the next draw; a customer's second purchase depends on whether the first purchase went well. The test is simple: does knowing that A happened change the probability of B? If yes, they are dependent, and P(A and B) = P(A) × P(B given A).</p>
<p><strong>Worked example:</strong> A bag has 5 red and 5 blue marbles. Draw one, keep it, draw again. P(first is red) = 5 ÷ 10 = 0.50. If the first was red, 4 red and 5 blue remain, so P(second is red given first was red) = 4 ÷ 9 ≈ 0.444. P(both red) = 0.50 × 0.444 ≈ <strong>0.222</strong>. With replacement — putting the marble back — the draws are independent and P(both red) = 0.50 × 0.50 = 0.25. The difference is the dependence.</p>
<div class="callout"><strong>Key idea:</strong> Assuming independence when events are dependent is the most common probability error in business. Customers in the same household, orders from the same supplier, and days in the same promotion are rarely independent.</div>`
    },
    {
      heading: "Expected Value: Deciding Under Uncertainty",
      html: `
<p><strong>Expected value</strong> is the probability-weighted average of outcomes: multiply each outcome by its probability and add. It is the long-run average if the decision were repeated many times — the right tool for comparing options whose outcomes are uncertain.</p>
<p><strong>Worked example:</strong> A project has a 70% chance of earning $50,000 and a 30% chance of losing $10,000. Expected value = (0.70 × 50,000) + (0.30 × −10,000) = 35,000 − 3,000 = <strong>$32,000</strong>. A safe alternative pays $25,000 for certain. The risky project has the higher expected value, so a manager who can repeat such bets should take it — but a manager who can afford only one failure might still choose the safe $25,000. Expected value measures the average; it does not measure the risk. That distinction — average vs. risk — is the subject of the finance course's risk and return module.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Probability = favorable outcomes ÷ total equally likely outcomes; always between 0 and 1.</li>
<li>Complement: P(not A) = 1 − P(A). Addition: P(A or B) = P(A) + P(B) − P(A and B). Multiplication (independent): P(A and B) = P(A) × P(B).</li>
<li>Independent events do not affect each other; dependent events do, and need conditional probability.</li>
<li>Expected value = Σ (probability × outcome). It compares options on average, not on risk.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding probabilities for "or" without subtracting the overlap. P(A or B) is not P(A) + P(B) when the events can both happen — the both-cases get counted twice.</div>
<div class="callout"><strong>Common mistake:</strong> Treating a probability from history as a guarantee. A 0.60 purchase rate is an estimate from past prospects under past conditions; it is not a property of the next prospect.</div>
<p><strong>Ready-to-work link:</strong> Expected value returns in capital budgeting (ACC 102 Module 10) and in every forecast that weighs scenarios. Probability returns in Module 6's sampling and Module 7's hypothesis testing.</p>`
    }
  ],
  keyTerms: [
    { term: "Probability", def: "A number from 0 to 1 measuring how likely an event is: favorable outcomes ÷ total equally likely outcomes." },
    { term: "Event", def: "An outcome or set of outcomes whose probability is measured." },
    { term: "Complement", def: "The event that A does not happen; P(not A) = 1 − P(A)." },
    { term: "Addition rule", def: "P(A or B) = P(A) + P(B) − P(A and B)." },
    { term: "Multiplication rule", def: "For independent events, P(A and B) = P(A) × P(B)." },
    { term: "Independent events", def: "Events where one does not change the probability of the other." },
    { term: "Dependent events", def: "Events where one changes the probability of the other." },
    { term: "Conditional probability", def: "The probability of B given that A happened, written P(B|A)." },
    { term: "Expected value", def: "The probability-weighted average of outcomes: Σ (probability × outcome)." },
    { term: "Mutually exclusive events", def: "Events that cannot both happen; P(A and B) = 0." },
    { term: "Sample space", def: "The set of all possible outcomes of a random process." },
    { term: "Empirical probability", def: "A probability estimated from observed frequencies in past data." },
    { term: "Long-run frequency", def: "What a probability means in practice: the share of repetitions in which the event occurs." },
    { term: "Risk", def: "Uncertainty about outcomes; expected value measures the average, not the risk." }
  ],
  video: {
    title: "Probability explained | Independent and dependent events | Probability and Statistics | Khan Academy",
    embedUrl: "https://www.youtube.com/embed/uzkc-qNVoOk",
    note: "Khan Academy explains probability from first principles with coins and dice, then independent and dependent events. Watch it, then redo the module's marble example: without replacement, P(both red) is about 0.222, not 0.25 — dependence changes the answer.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> 60 of the last 100 customers who saw a demo bought the product. (a) What is the estimated probability of purchase? (b) If the chance a delivery is on time is 0.90, what is the chance it is late?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: P(purchase) = 60 ÷ 100 = <strong>0.60</strong>. Step 2: P(late) = 1 − 0.90 = <strong>0.10</strong> (complement rule).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> P(buys A) = 0.60, P(buys B) = 0.50, P(buys both) = 0.30. (a) What is P(buys at least one)? (b) If A and B were independent, what would P(buys both) be?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: P(at least one) = 0.60 + 0.50 − 0.30 = <strong>0.80</strong>. Step 2: If independent, P(both) = 0.60 × 0.50 = <strong>0.30</strong> — which matches the given value, so these events behave as if independent.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A bag has 5 red and 5 blue marbles. Two are drawn without replacement. Compute (a) P(first is red), (b) P(second is red given first was red), and (c) P(both red).</p>",
      solution: "<p><strong>Solution:</strong> Step 1: P(first red) = 5 ÷ 10 = <strong>0.50</strong>. Step 2: After a red draw, 4 red and 5 blue remain, so P(second red | first red) = 4 ÷ 9 ≈ <strong>0.444</strong>. Step 3: P(both red) = 0.50 × 0.444 ≈ <strong>0.222</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A project has a 70% chance of earning $50,000 and a 30% chance of losing $10,000. (a) What is its expected value? (b) A safe alternative pays $25,000 for certain. Which has the higher expected value?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: EV = (0.70 × 50,000) + (0.30 × −10,000) = 35,000 − 3,000 = <strong>$32,000</strong>. Step 2: The risky project ($32,000) has the higher expected value, though the safe $25,000 has no risk — the choice depends on whether the manager can afford the 30% loss.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A store's data show that 40% of customers buy shoes and 25% buy a bag. If the two purchases were independent, what is the probability a customer buys both? What is the probability a customer buys neither?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: P(both) = 0.40 × 0.25 = <strong>0.10</strong>. Step 2: P(at least one) = 0.40 + 0.25 − 0.10 = 0.55. Step 3: P(neither) = 1 − 0.55 = <strong>0.45</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A supplier delivers on time 80% of the time. A manager assumes two consecutive deliveries are independent and computes P(both late) = 0.20 × 0.20 = 0.04. Explain in two or three sentences why that assumption might be wrong.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Deliveries from the same supplier share causes — the same truck, the same warehouse, the same weather — so one late delivery makes the next more likely to be late. Step 2: The events are probably dependent, not independent. Step 3: If late deliveries cluster, the true P(both late) is higher than 0.04, and the manager is underestimating the risk of a stockout.</p>"
    }
  ],
  quiz: [
    {
      q: "60 of 100 demo viewers bought. The estimated probability of purchase is:",
      choices: ["0.40", "0.60", "60", "1.60"],
      answer: 1,
      explanation: "Correct: (b). 60 ÷ 100 = 0.60. (a) is the non-purchase rate. (c) is the count, not the probability. (d) exceeds 1, which no probability can."
    },
    {
      q: "If P(on time) = 0.90, then P(late) is:",
      choices: ["0.90", "0.10", "1.90", "0.45"],
      answer: 1,
      explanation: "Correct: (b). Complement rule: 1 − 0.90 = 0.10. (a) is P(on time). (c) exceeds 1. (d) is half of 0.90, which has no meaning here."
    },
    {
      q: "P(A) = 0.60, P(B) = 0.50, P(both) = 0.30. P(A or B) is:",
      choices: ["1.10", "0.80", "0.30", "0.10"],
      answer: 1,
      explanation: "Correct: (b). 0.60 + 0.50 − 0.30 = 0.80. (a) adds without subtracting the overlap. (c) is P(both). (d) is P(both) divided by 3, meaningless."
    },
    {
      q: "Two independent events with probabilities 0.60 and 0.50 occur together with probability:",
      choices: ["1.10", "0.30", "0.10", "0.80"],
      answer: 1,
      explanation: "Correct: (b). 0.60 × 0.50 = 0.30. (a) adds the probabilities. (c) is the difference. (d) is the addition-rule result for these values."
    },
    {
      q: "A bag has 5 red and 5 blue marbles. P(both red) without replacement is about:",
      choices: ["0.25", "0.222", "0.50", "0.444"],
      answer: 1,
      explanation: "Correct: (b). (5/10) × (4/9) = 0.50 × 0.444 ≈ 0.222. (a) is the with-replacement value, 0.50 × 0.50. (c) is P(first red). (d) is P(second red given first red)."
    },
    {
      q: "A project has a 70% chance of +$50,000 and a 30% chance of −$10,000. Expected value is:",
      choices: ["$40,000", "$32,000", "$25,000", "$50,000"],
      answer: 1,
      explanation: "Correct: (b). (0.70 × 50,000) + (0.30 × −10,000) = 35,000 − 3,000 = $32,000. (a) ignores the probabilities. (c) is the safe alternative's value. (d) is the best outcome alone."
    },
    {
      q: "Events are independent when:",
      choices: ["They cannot both happen", "One does not change the probability of the other", "They have the same probability", "They happen at the same time"],
      answer: 1,
      explanation: "Correct: (b). Independence is about probability, not timing or equality. (a) defines mutually exclusive events. (c) is irrelevant. (d) is irrelevant — simultaneous events can be dependent."
    },
    {
      q: "Expected value is best described as:",
      choices: ["The most likely single outcome", "The probability-weighted average of outcomes — the long-run average", "The maximum possible outcome", "A guarantee of what will happen"],
      answer: 1,
      explanation: "Correct: (b). Expected value averages outcomes by their probabilities. (a) is the mode of the outcomes. (c) is the best case. (d) is false — expected value says nothing about any single trial."
    }
  ],
  studyGuide: `
<h3>Module 5 — Probability Basics for Business Decisions: Quick Reference</h3>
<p><strong>Probability:</strong> Favorable outcomes ÷ total equally likely outcomes. Always between 0 and 1.</p>
<div class="formula">P(not A) = 1 − P(A) &nbsp;|&nbsp; P(A or B) = P(A) + P(B) − P(A and B) &nbsp;|&nbsp; P(A and B) = P(A) × P(B) if independent</div>
<p><strong>Anchors:</strong> 60 of 100 buy → 0.60. P(A)=0.60, P(B)=0.50, P(both)=0.30 → P(at least one)=0.80. Marbles without replacement: P(both red) ≈ 0.222 (vs. 0.25 with replacement).</p>
<div class="formula">Expected value = Σ (probability × outcome). Project anchor: 0.70 × $50,000 + 0.30 × (−$10,000) = $32,000.</div>
<p><strong>Watch out:</strong> Subtract the overlap in "or"; check independence before multiplying; and remember expected value measures the average, not the risk.</p>
<p><strong>Self-check:</strong> Given any two business probabilities, compute P(at least one), P(both), P(neither), and the expected value of a simple gamble — by hand, with the rules named at each step.</p>
`
};
