module.exports = {
  "number": 3,
  "slug": "probability-the-language-of-uncertainty",
  "title": "Probability: The Language of Uncertainty",
  "estTime": "3–4 hours",
  "objectives": [
    "Define probability and compute it from equally likely outcomes.",
    "Use the addition and multiplication rules, including the complement rule.",
    "Compute conditional probabilities from a two-way table and test for independence.",
    "Apply Bayes' rule to reverse a conditional probability.",
    "Use the binomial formula to find the probability of a count of successes."
  ],
  "sections": [
    {
      "heading": "What Probability Means",
      "html": "<p><strong>Probability</strong> is a number between 0 and 1 that measures how likely an event is: 0 means impossible, 1 means certain, and 0.5 means a coin toss. When outcomes are equally likely, the probability of an event is the number of outcomes in the event divided by the total number of outcomes. Roll two dice: there are 36 equally likely pairs, and 6 of them add to 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), so P(sum of 7) = 6 ÷ 36 = <strong>1/6 ≈ 0.1667</strong>.</p><p>Economists live in probability. A 20% chance of recession, a 4.2% unemployment rate, a 1-in-4 chance a new business survives five years — these are all probability statements about an uncertain future. The rest of this course is built on this one idea: we cannot know what will happen, but we can measure how likely each outcome is, and make decisions with those numbers in hand.</p><div class=\"callout\"><strong>Key idea:</strong> Probability = (outcomes you want) ÷ (all possible outcomes), when outcomes are equally likely. Everything else in this module is a shortcut for counting those outcomes.</div>"
    },
    {
      "heading": "Adding and Multiplying: The Rules That Do the Counting",
      "html": "<p>Two rules do most of the work. The <strong>addition rule</strong>: P(A or B) = P(A) + P(B) − P(A and B). Draw one card from a deck: P(heart or face card) = 13/52 + 12/52 − 3/52 = 22/52 ≈ <strong>0.4231</strong>. The 3 subtracted are the face cards that are also hearts — counted twice if you forget them.</p><p>The <strong>multiplication rule</strong>: P(A and B) = P(A) × P(B given A). And the <strong>complement rule</strong> is the most useful shortcut in statistics: P(not A) = 1 − P(A). The probability of at least 8 heads in 10 fair coin tosses is a miserable sum to do directly — but it is just (45 + 10 + 1) ÷ 1,024 = <strong>0.0547</strong>, since there are C(10,8) = 45 ways to get exactly 8, C(10,9) = 10 ways to get 9, and 1 way to get 10.</p><div class=\"formula\">P(A or B) = P(A) + P(B) &#8722; P(A and B) &nbsp;|&nbsp; P(A and B) = P(A) &times; P(B|A) &nbsp;|&nbsp; P(not A) = 1 &#8722; P(A)</div>"
    },
    {
      "heading": "Conditional Probability and a Two-Way Table",
      "html": "<p><strong>Conditional probability</strong> asks: how does the chance change when we know something? P(employed | has a degree) reads “the probability of being employed, given a college degree.” A survey of 200 workers gives this table: of 120 degree holders, 96 are employed; of 80 workers without a degree, 48 are employed.</p><p>So P(employed) = 144 ÷ 200 = <strong>0.72</strong> overall, but P(employed | degree) = 96 ÷ 120 = <strong>0.80</strong>, while P(employed | no degree) = 48 ÷ 80 = <strong>0.60</strong>. Knowing about the degree changes the probability — a lot. And the reverse question is different again: P(degree | employed) = 96 ÷ 144 = <strong>0.6667</strong>. Never swap the two sides of the “given” bar; they are different numbers answering different questions.</p><p>Two events are <strong>independent</strong> when knowing one tells you nothing about the other: P(A and B) = P(A) × P(B). Here P(employed) × P(degree) = 0.72 × 0.60 = 0.432, but P(employed and degree) = 96 ÷ 200 = 0.48. They are not equal, so employment and having a degree are <strong>not independent</strong> — exactly what the conditional probabilities already told us.</p><div class=\"callout\"><strong>Key idea:</strong> P(A|B) is not P(B|A). “The chance an employed worker has a degree” (0.6667) is not “the chance a degree holder is employed” (0.80). Read the “given” bar like a filter: it shrinks the world to the group after the bar.</div>"
    },
    {
      "heading": "Bayes' Rule: Reversing the Question",
      "html": "<p><strong>Bayes' rule</strong> turns P(B|A) into P(A|B): P(A|B) = P(B|A) × P(A) ÷ P(B). Suppose 40% of job applicants have a degree, 85% of degree holders are employed, and 60% of non-degree holders are employed. Then P(employed) = 0.40 × 0.85 + 0.60 × 0.60 = 0.34 + 0.36 = 0.70, and P(degree | employed) = 0.34 ÷ 0.70 = <strong>0.4857</strong>.</p><p>That last step is the whole point of Bayes: you start with a base rate (40% have degrees), you learn something new (this person is employed), and you update. The answer, about 49%, is higher than the base rate of 40% — employment is evidence of a degree — but it is nowhere near 85%, the number people usually grab by mistake. Bayes' rule is the formal version of “update your beliefs when new information arrives,” and it is the engine behind everything from spam filters to medical testing.</p><div class=\"formula\">P(A|B) = P(B|A) &times; P(A) &divide; P(B) &nbsp;|&nbsp; P(B) = P(B|A)P(A) + P(B|not A)P(not A)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Probability = wanted outcomes ÷ all outcomes (when equally likely). P(sum of 7 on two dice) = 0.1667.</li><li>Addition rule subtracts the overlap; multiplication rule conditions; complement rule (1 − P(A)) is the shortcut.</li><li>Conditional probability filters the world: P(employed | degree) = 0.80 vs. P(employed | no degree) = 0.60.</li><li>Independence means P(A and B) = P(A) × P(B). Here 0.48 ≠ 0.432, so degree and employment are dependent.</li><li>Bayes' rule reverses a conditional: P(degree | employed) = 0.4857.</li><li>Binomial counts: P(exactly 6 heads in 10 tosses) = 0.2051; P(at least 8) = 0.0547.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Swapping P(A|B) and P(B|A). “The chance a degree holder is employed” (0.80) and “the chance an employed worker has a degree” (0.6667) are different questions with different answers.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting to subtract the overlap in the addition rule. P(heart or face card) is 22/52, not 25/52 — the three heart face cards were counted twice.</div><p><strong>Ready-to-Work link:</strong> Every risk decision — lending, hiring, insuring, investing — is a conditional probability. “Given what I know about this borrower, what is the chance they repay?” is Bayes' rule in a suit.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Probability",
      "def": "A number from 0 to 1 measuring how likely an event is."
    },
    {
      "term": "Sample space",
      "def": "The set of all possible outcomes of an experiment, such as the 36 pairs when rolling two dice."
    },
    {
      "term": "Event",
      "def": "A set of outcomes from the sample space, such as rolling a sum of 7."
    },
    {
      "term": "Complement",
      "def": "The event “A does not happen”; P(not A) = 1 − P(A)."
    },
    {
      "term": "Addition rule",
      "def": "P(A or B) = P(A) + P(B) − P(A and B)."
    },
    {
      "term": "Multiplication rule",
      "def": "P(A and B) = P(A) × P(B|A)."
    },
    {
      "term": "Conditional probability",
      "def": "P(A|B): the probability of A given that B has happened."
    },
    {
      "term": "Independent events",
      "def": "Events where P(A and B) = P(A) × P(B); knowing one tells you nothing about the other."
    },
    {
      "term": "Dependent events",
      "def": "Events where knowing one changes the probability of the other."
    },
    {
      "term": "Mutually exclusive events",
      "def": "Events that cannot happen together, such as rolling a 2 and rolling a 5 on one die."
    },
    {
      "term": "Bayes' rule",
      "def": "The formula that reverses a conditional probability: P(A|B) = P(B|A)P(A) ÷ P(B)."
    },
    {
      "term": "Base rate",
      "def": "The overall probability of an event before new information, such as the 40% of applicants with degrees."
    },
    {
      "term": "Law of total probability",
      "def": "P(B) = P(B|A)P(A) + P(B|not A)P(not A); the denominator of Bayes' rule."
    },
    {
      "term": "Binomial distribution",
      "def": "The distribution of the number of successes in n independent trials with the same success probability."
    },
    {
      "term": "Combination",
      "def": "C(n, k): the number of ways to choose k successes out of n trials, n! ÷ (k!(n − k)!)."
    },
    {
      "term": "Odds",
      "def": "The ratio of the probability an event happens to the probability it does not: p ÷ (1 − p)."
    }
  ],
  "video": {
    "title": "An Introduction to Conditional Probability",
    "embedUrl": "https://www.youtube.com/embed/bgCMjHzXTXs",
    "note": "jbstatistics builds conditional probability from scratch with clear worked examples — the exact skill this module's two-way table practices.",
    "more": [
      {
        "title": "Independent Events (Basics of Probability: Independence of Two Events) — jbstatistics",
        "url": "https://www.youtube.com/watch?v=1wuRV5z0PPE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fair coin is tossed 10 times. (a) What is the probability of exactly 6 heads? (b) What is the probability of at least 8 heads?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: There are 2^10 = 1,024 equally likely sequences. Step 2: Exactly 6 heads can happen in C(10,6) = 210 ways, so P = 210 ÷ 1,024 = <strong>0.2051</strong>. Step 3: At least 8 heads means 8, 9, or 10 heads: C(10,8) + C(10,9) + C(10,10) = 45 + 10 + 1 = 56 ways, so P = 56 ÷ 1,024 = <strong>0.0547</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the 200-worker survey (120 degree holders, 96 employed; 80 without a degree, 48 employed): (a) What is P(employed)? (b) What is P(employed | degree)? (c) Are employment and having a degree independent? Show the check.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(employed) = (96 + 48) ÷ 200 = 144 ÷ 200 = <strong>0.72</strong>. Step 2: P(employed | degree) = 96 ÷ 120 = <strong>0.80</strong>. Step 3: Independence needs P(employed and degree) = P(employed) × P(degree). P(employed and degree) = 96 ÷ 200 = 0.48, but 0.72 × 0.60 = 0.432. They differ, so <strong>not independent</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Draw one card from a standard 52-card deck. (a) What is P(heart or face card)? (b) What is P(not a heart)? (c) What is P(heart and face card)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(heart or face) = 13/52 + 12/52 − 3/52 = 22/52 = <strong>0.4231</strong> — subtract the 3 heart face cards counted twice. Step 2: P(not a heart) = 1 − 13/52 = 39/52 = <strong>0.75</strong>. Step 3: P(heart and face) = 3 ÷ 52 = <strong>0.0577</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Use Bayes' rule on the job-applicant numbers: 40% of applicants have a degree; 85% of degree holders are employed; 60% of non-degree holders are employed. (a) What is P(employed)? (b) What is P(degree | employed)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(employed) = 0.40 × 0.85 + 0.60 × 0.60 = 0.34 + 0.36 = <strong>0.70</strong>. Step 2: P(degree | employed) = P(employed | degree) × P(degree) ÷ P(employed) = 0.85 × 0.40 ÷ 0.70 = 0.34 ÷ 0.70 = <strong>0.4857</strong>. Step 3: Employment raises the chance of a degree from 40% to about 49% — real evidence, but far from 85%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A store's customers: 30% pay cash, 50% pay by card, 20% pay by phone. Of cash payers, 10% buy a warranty; of card payers, 25% buy one; of phone payers, 40% buy one. (a) What fraction of all customers buy a warranty? (b) Given a customer bought a warranty, what is the probability they paid by phone?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(warranty) = 0.30 × 0.10 + 0.50 × 0.25 + 0.20 × 0.40 = 0.03 + 0.125 + 0.08 = <strong>0.235</strong>. Step 2: By Bayes, P(phone | warranty) = P(warranty | phone) × P(phone) ÷ P(warranty) = 0.40 × 0.20 ÷ 0.235 = 0.08 ÷ 0.235 = <strong>0.3404</strong>. Step 3: Phone payers are only 20% of customers but about 34% of warranty buyers — they buy warranties at twice the average rate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fair die is rolled twice. (a) What is P(two 6s)? (b) What is P(at least one 6)? (c) What is P(sum greater than 10)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The rolls are independent, so P(two 6s) = (1/6) × (1/6) = <strong>1/36 ≈ 0.0278</strong>. Step 2: Use the complement: P(no 6) = (5/6) × (5/6) = 25/36, so P(at least one 6) = 1 − 25/36 = 11/36 ≈ <strong>0.3056</strong>. Step 3: Sums above 10 are 11 (5+6, 6+5) and 12 (6+6): 3 outcomes out of 36, so P = 3 ÷ 36 = <strong>1/12 ≈ 0.0833</strong>.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Rolling two fair dice, the probability the sum is 7 is:",
      "choices": [
        "1/36",
        "1/6",
        "7/36",
        "1/12"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Six of the 36 pairs add to 7, so 6 ÷ 36 = 1/6 ≈ 0.1667. (a) 1/36 is the chance of one specific pair. (c) 7/36 counts 7 pairs — there are only 6. (d) 1/12 is the chance the sum is 11 or 12."
    },
    {
      "q": "P(A or B) equals:",
      "choices": [
        "P(A) + P(B)",
        "P(A) × P(B)",
        "P(A) + P(B) − P(A and B)",
        "1 − P(A and B)"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The overlap P(A and B) is counted in both P(A) and P(B), so it must be subtracted once. (a) is right only when A and B are mutually exclusive. (b) is the multiplication rule for independent events. (d) is the complement of the overlap."
    },
    {
      "q": "In the 200-worker survey, P(employed | degree) is:",
      "choices": [
        "0.48",
        "0.60",
        "0.72",
        "0.80"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 96 of the 120 degree holders are employed: 96 ÷ 120 = 0.80. (a) 0.48 is P(employed and degree). (b) 0.60 is P(employed | no degree). (c) 0.72 is P(employed) overall."
    },
    {
      "q": "Events A and B are independent when:",
      "choices": [
        "They cannot happen together",
        "P(A and B) = P(A) × P(B)",
        "P(A|B) = 1",
        "They have the same probability"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Independence is defined by the multiplication rule holding. (a) describes mutually exclusive events. (c) would mean B guarantees A. (d) Equal probabilities say nothing about independence."
    },
    {
      "q": "Bayes' rule on the applicant numbers gives P(degree | employed) ≈ 0.49. The common error is to answer:",
      "choices": [
        "0.40",
        "0.70",
        "0.85",
        "0.49"
      ],
      "answer": 2,
      "explanation": "Correct: (c). People grab 0.85, which is P(employed | degree) — the reverse conditional. (a) 0.40 is the base rate P(degree). (b) 0.70 is P(employed). (d) 0.49 is the correct answer, rounded."
    },
    {
      "q": "The probability of exactly 6 heads in 10 fair coin tosses is about:",
      "choices": [
        "0.0547",
        "0.2051",
        "0.5000",
        "0.1172"
      ],
      "answer": 1,
      "explanation": "Correct: (b). C(10,6) = 210 ways out of 1,024: 210 ÷ 1,024 = 0.2051. (a) 0.0547 is P(at least 8 heads). (c) 0.5000 is far too high — P(exactly 5 heads) is 0.2461. (d) 0.1172 is P(exactly 3 heads)."
    },
    {
      "q": "The complement rule says:",
      "choices": [
        "P(A) + P(B) = 1",
        "P(not A) = 1 − P(A)",
        "P(A|B) = P(B|A)",
        "P(A and B) = P(A) + P(B)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An event either happens or it does not, so the two probabilities add to 1. (a) holds only if B is the complement of A. (c) is false in general — that is the classic swap error. (d) adds instead of multiplying."
    },
    {
      "q": "A card is drawn from a deck. P(heart or face card) = 22/52 because:",
      "choices": [
        "13 + 12 = 25, minus 3 heart face cards counted twice",
        "There are 22 hearts",
        "Face cards are 22 of the deck",
        "Hearts and face cards are mutually exclusive"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 13 hearts + 12 face cards = 25, but the 3 heart face cards sit in both groups, so subtract them: 22. (b) There are 13 hearts. (c) There are 12 face cards. (d) They overlap — that is the whole point."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Probability: Quick Reference</h3>\n<p><strong>Basic rule:</strong> P(event) = wanted outcomes ÷ all outcomes (equally likely).</p>\n<div class=\"formula\">P(A or B) = P(A) + P(B) &#8722; P(A and B) &nbsp;|&nbsp; P(A and B) = P(A) &times; P(B|A) &nbsp;|&nbsp; P(not A) = 1 &#8722; P(A) &nbsp;|&nbsp; P(A|B) = P(B|A)P(A) &divide; P(B)</div>\n<p><strong>Conditional:</strong> P(A|B) filters to the B group. P(employed | degree) = 0.80; P(degree | employed) = 0.6667 — different numbers.</p>\n<p><strong>Independence:</strong> P(A and B) = P(A) × P(B). Here 0.48 ≠ 0.432, so degree and employment are dependent.</p>\n<p><strong>Binomial counts:</strong> P(exactly 6 heads in 10 tosses) = 0.2051; P(at least 8) = 0.0547.</p>\n<p><strong>Watch out:</strong> Never swap P(A|B) and P(B|A), and always subtract the overlap in the addition rule.</p>\n<p><strong>Self-check:</strong> Build a two-way table from any survey you find online and compute all four conditional probabilities from it.</p>\n"
};
