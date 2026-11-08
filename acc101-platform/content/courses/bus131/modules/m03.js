// bus131 - Module 3: Contracts II: Performance, Breach & Remedies
module.exports = {
  "number": 3,
  "slug": "contracts-performance-breach-remedies",
  "title": "Contracts II: Performance, Breach & Remedies",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what performance means and when it is complete.",
    "Describe the difference between a material and a minor breach.",
    "Compute compensatory damages using a cover-price example.",
    "Explain consequential damages, liquidated damages, and when each applies.",
    "Describe equitable remedies: specific performance and injunctions."
  ],
  "sections": [
    {
      "heading": "Performance: Doing What You Promised",
      "html": "<p><strong>Performance</strong> is carrying out what the contract requires. <strong>Complete performance</strong> means doing everything promised, exactly as promised. <strong>Substantial performance</strong> means doing the essential work with only minor, fixable deviations — a house painter who finishes every room but misses one small patch of trim has substantially performed, and is owed the price minus the cost of fixing the patch. The distinction matters because it decides whether the other side must pay.</p>\n<p>Some duties depend on a <strong>condition</strong>: an event that must happen before performance is due. \"I will buy your car if my loan is approved\" makes the loan approval a condition. If the condition fails, the duty never arises — the buyer does not have to buy, and the seller cannot complain. Conditions are the contract's \"if\" clauses, and they should always be written in plain words, because a disputed condition is a lawsuit waiting to happen.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Complete performance is the goal; substantial performance is the safety net. A party who substantially performs is owed payment minus the cost of the shortfall — not nothing.</div>"
    },
    {
      "heading": "Breach: Material vs. Minor",
      "html": "<p>A <strong>breach</strong> is a failure to perform as promised. A <strong>minor breach</strong> (also called partial breach) is a small deviation: the goods arrive a day late, or the paint color is slightly off. The non-breaching party can claim damages for the shortfall but must still perform their own side — they cannot walk away. A <strong>material breach</strong> is a failure so serious that it defeats the purpose of the contract: the supplier never delivers, or the builder uses the wrong structural material. The non-breaching party may treat the contract as ended, stop their own performance, and sue for damages.</p>\n<p>Courts weigh several factors to decide materiality: how much benefit the non-breaching party already received, whether the shortfall can be fixed, whether the breaching party acted in good faith, and how likely full performance is. A one-day delay on a wedding cake is material — the wedding cannot wait. The same delay on a warehouse delivery may be minor.</p>"
    },
    {
      "heading": "Money Remedies: Compensatory and Consequential Damages",
      "html": "<p>The main remedy for breach is money. <strong>Compensatory damages</strong> put the injured party in the position they would have been in if the contract had been performed — the benefit of the bargain. If a supplier fails to deliver goods priced at $12,000 and the buyer must buy the same goods elsewhere for $14,500, the compensatory damages are $14,500 − $12,000 = <strong>$2,500</strong> — the extra cost of <strong>cover</strong>, the substitute purchase.</p>\n<p><strong>Consequential damages</strong> cover foreseeable losses that flow from the breach beyond the contract price itself: the factory that had to shut down for a day because the parts never arrived loses a day's production. They are recoverable only if the breaching party could foresee them when the contract was made — the famous rule from the 1854 case Hadley v. Baxendale. If the buyer's cover cost $2,500 and the shutdown lost another $300 of profit that the supplier could have foreseen, total damages are $2,500 + $300 = <strong>$2,800</strong>.</p>\n<p><strong>Liquidated damages</strong> are an amount the parties agree in advance will be paid if the contract is breached: $100 a day for each day a construction project runs late, for example. They must be a reasonable estimate of the likely harm when the contract is made — a penalty designed to punish is unenforceable. Twelve days late at $100 a day is 12 × $100 = <strong>$1,200</strong> of liquidated damages, no proof of actual loss needed.</p>\n<div class=\"formula\">Compensatory damages = Cover price − Contract price &nbsp;|&nbsp; Liquidated damages = Daily rate × Days late</div>"
    },
    {
      "heading": "Beyond Money: Specific Performance and Injunctions",
      "html": "<p>Money does not fix every breach. When the subject matter is unique — a one-of-a-kind painting, a specific piece of land — courts may order <strong>specific performance</strong>: the breaching party must actually do what they promised, not just pay for failing to do it. Courts will not order specific performance of personal services, though: a singer cannot be forced to perform, because forced labor is not a remedy the law will impose.</p>\n<p>An <strong>injunction</strong> is a court order to do or stop doing something: stop using a stolen trade secret, stop building on disputed land. And sometimes a contract is <strong>rescinded</strong> — unwound, with each side returning what it received, as if the contract had never been made. Rescission is the remedy when the contract was formed by fraud or serious mistake.</p>\n<p>Finally, every injured party has a <strong>duty to mitigate</strong>: they must take reasonable steps to limit their own losses. A buyer whose supplier fails to deliver cannot sit idle for a month and then claim a month of losses — they must buy cover promptly. Damages the injured party could reasonably have avoided are not recoverable.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Complete performance: everything as promised. Substantial performance: the essentials done, minor deviations fixed by a price reduction.</li>\n<li>Minor breach: claim damages but keep performing. Material breach: the contract can be treated as ended.</li>\n<li>Compensatory damages = cover price − contract price. Consequential damages cover foreseeable knock-on losses.</li>\n<li>Liquidated damages are an agreed estimate made in advance; a penalty is unenforceable.</li>\n<li>Specific performance fits unique goods; injunctions stop harmful acts; the injured party must mitigate losses.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Claiming every loss after a breach. Only foreseeable consequential losses count, and losses you could have avoided by covering promptly do not count at all.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Writing a huge \"penalty\" clause to scare the other side. Courts strike penalties down; a reasonable estimate of real harm is what survives.</div>\n<p><strong>Ready-to-Work link:</strong> The course lab is built on exactly this module: a contract with a weak remedies clause is the first thing you will learn to spot and fix.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Performance",
      "def": "Carrying out what a contract requires."
    },
    {
      "term": "Complete performance",
      "def": "Doing everything the contract promised, exactly as promised."
    },
    {
      "term": "Substantial performance",
      "def": "Doing the essential work with only minor, fixable deviations; the price is reduced by the cost of the shortfall."
    },
    {
      "term": "Condition",
      "def": "An event that must happen before a party's duty to perform arises."
    },
    {
      "term": "Breach",
      "def": "A failure to perform a contract as promised."
    },
    {
      "term": "Minor breach",
      "def": "A small deviation; the other party can claim damages but must still perform."
    },
    {
      "term": "Material breach",
      "def": "A failure so serious it defeats the contract's purpose; the other party may treat the contract as ended."
    },
    {
      "term": "Compensatory damages",
      "def": "Money that puts the injured party in the position they would have been in if the contract had been performed."
    },
    {
      "term": "Cover",
      "def": "A substitute purchase made after the other party breaches, used to measure damages."
    },
    {
      "term": "Consequential damages",
      "def": "Foreseeable losses beyond the contract price that flow from the breach."
    },
    {
      "term": "Liquidated damages",
      "def": "An amount agreed in advance to be paid if the contract is breached; must be a reasonable estimate, not a penalty."
    },
    {
      "term": "Specific performance",
      "def": "A court order requiring a party to actually perform the contract, used when the subject is unique."
    },
    {
      "term": "Injunction",
      "def": "A court order requiring a party to do or stop doing something."
    },
    {
      "term": "Rescission",
      "def": "Unwinding a contract, with each side returning what it received."
    },
    {
      "term": "Duty to mitigate",
      "def": "The injured party's duty to take reasonable steps to limit their own losses after a breach."
    }
  ],
  "video": {
    "title": "Contract Law: Remedies in 5 mins. Great for bar prep",
    "embedUrl": "https://www.youtube.com/embed/sWaBizSRXmM",
    "note": "A fast tour of contract remedies — damages, cover, and equitable relief. After watching, match each remedy in the video to the worked numbers in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A painter finishes every room of a house but misses one small patch of trim. (a) Is this complete or substantial performance? (b) Is the painter owed the full price? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>substantial performance</strong> — the essential work is done with a minor, fixable deviation. Step 2: The painter is owed the contract price <strong>minus the cost of fixing the patch</strong>. Step 3: The homeowner cannot refuse to pay anything over a small patch; the remedy is a price reduction, not a free paint job.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A supplier fails to deliver goods priced at $12,000. The buyer buys the same goods elsewhere for $14,500 and loses $300 of profit from a one-day shutdown the supplier could have foreseen. (a) What are the compensatory damages? (b) What are the total damages including consequential losses?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Compensatory damages = cover price − contract price = $14,500 − $12,000 = <strong>$2,500</strong>. Step 2: Consequential damages are the foreseeable $300 of lost profit. Step 3: Total damages = $2,500 + $300 = <strong>$2,800</strong>. Step 4: The $300 counts only because it was foreseeable when the contract was made.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A construction contract sets liquidated damages of $100 a day for late completion. The project finishes 12 days late. (a) What are the liquidated damages? (b) Must the owner prove the actual loss? (c) What if the clause had said $10,000 a day?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 12 × $100 = <strong>$1,200</strong>. Step 2: No — liquidated damages are the agreed estimate, so no proof of actual loss is needed. Step 3: $10,000 a day would almost certainly be struck down as a <strong>penalty</strong>, because it is not a reasonable estimate of the daily harm; the owner would have to prove actual losses instead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A wedding cake arrives one day late. A warehouse delivery of the same cake arrives one day late. Which delay is a material breach, and why does the same delay have different answers?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The wedding cake delay is <strong>material</strong> — the wedding cannot wait a day, so the breach defeats the contract's purpose. Step 2: The warehouse delay is likely <strong>minor</strong> — a day's delay can be absorbed and the goods are still usable. Step 3: Materiality depends on the purpose of the contract and the harm caused, not only on the size of the deviation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A seller agrees to sell a one-of-a-kind painting, then refuses to hand it over. (a) Why is money damages a poor remedy here? (b) What remedy should the buyer seek?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Money is a poor remedy because the painting is <strong>unique</strong> — the buyer cannot buy an identical one elsewhere, so cover is impossible. Step 2: The buyer should seek <strong>specific performance</strong> — a court order requiring the seller to hand over the painting itself. Step 3: Specific performance is reserved for unique subject matter; it is not used for ordinary goods or personal services.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A buyer's supplier fails to deliver, and the buyer waits a month before buying cover, losing $5,000 of sales in the meantime — although cover was available on day one for $500 more than the contract price. How much can the buyer recover, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The buyer can recover the <strong>$500</strong> cover difference, which was the real cost of the breach. Step 2: The $5,000 of lost sales is not recoverable, because the buyer had a <strong>duty to mitigate</strong> — cover was available on day one. Step 3: Losses a party could reasonably have avoided are their own, not the breacher's.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Substantial performance means:",
      "choices": [
        "Nothing was done at all",
        "The essential work is done with only minor, fixable deviations",
        "The work was done perfectly",
        "The contract was never signed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The essentials are done; the price is reduced by the cost of the shortfall. (a) is non-performance. (c) is complete performance. (d) means no contract exists."
    },
    {
      "q": "A material breach allows the non-breaching party to:",
      "choices": [
        "Claim damages only and keep performing",
        "Treat the contract as ended and sue for damages",
        "Do nothing at all",
        "Change the price unilaterally"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A material breach defeats the contract's purpose, so the injured party may stop performing. (a) is the response to a minor breach. (c) wastes the remedy. (d) No party can rewrite the price alone."
    },
    {
      "q": "Cover price $14,500 minus contract price $12,000 gives compensatory damages of:",
      "choices": [
        "$2,000",
        "$2,500",
        "$2,800",
        "$14,500"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $14,500 − $12,000 = $2,500. (a) is a $500 error. (c) adds the $300 of consequential losses to the compensatory figure. (d) is the cover price itself."
    },
    {
      "q": "Consequential damages are recoverable only if they were:",
      "choices": [
        "Large",
        "Foreseeable when the contract was made",
        "Caused by a third party",
        "Written in the contract's title"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Hadley v. Baxendale rule limits recovery to foreseeable losses. (a) Size does not decide recoverability. (c) Third-party causes are usually not the breacher's fault. (d) The title is irrelevant."
    },
    {
      "q": "Liquidated damages of $100 a day for 12 days late total:",
      "choices": [
        "$100",
        "$1,000",
        "$1,200",
        "$12,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 12 × $100 = $1,200. (a) is one day. (b) is ten days. (d) is a hundred days."
    },
    {
      "q": "A liquidated damages clause that is really a penalty is:",
      "choices": [
        "Enforceable as written",
        "Unenforceable — courts strike penalties down",
        "Doubled by the court",
        "Ignored only if the breacher asks nicely"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Liquidated damages must be a reasonable estimate of likely harm. (a) reverses the rule. (c) Courts do not increase penalties. (d) Courts strike penalties as a matter of law."
    },
    {
      "q": "Specific performance is the right remedy when the subject matter is:",
      "choices": [
        "Ordinary goods available anywhere",
        "Unique, such as a one-of-a-kind painting",
        "A personal service",
        "A loan of money"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Unique goods cannot be replaced by money because cover is impossible. (a) Ordinary goods are remedied with money. (c) Courts will not order personal services. (d) Money is remedied with money."
    },
    {
      "q": "The duty to mitigate means the injured party must:",
      "choices": [
        "Wait as long as possible before acting",
        "Take reasonable steps to limit their own losses",
        "Sue immediately no matter what",
        "Accept whatever the breacher offers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Losses that could reasonably have been avoided are not recoverable. (a) Waiting increases unrecoverable losses. (c) Suing is a right, not a duty to rush. (d) The injured party need not accept an unfair offer."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Contracts II: Performance, Breach & Remedies: Quick Reference</h3>\n<p><strong>Performance:</strong> Complete = everything as promised. Substantial = essentials done, price reduced by the cost of the shortfall. A condition is an \"if\" that must happen before performance is due.</p>\n<p><strong>Breach:</strong> Minor = claim damages, keep performing. Material = defeats the purpose; the contract can be treated as ended.</p>\n<p><strong>Damages:</strong> Compensatory = cover price − contract price. Worked anchor: $14,500 − $12,000 = $2,500; plus $300 foreseeable consequential loss = $2,800 total.</p>\n<p><strong>Liquidated damages:</strong> agreed estimate in advance. Anchor: $100/day × 12 days = $1,200. A penalty is unenforceable.</p>\n<p><strong>Equitable remedies:</strong> Specific performance for unique goods; injunctions to stop harmful acts; rescission to unwind. The injured party must mitigate losses.</p>\n<p><strong>Watch out:</strong> Only foreseeable consequential losses count, and losses you could have avoided by covering promptly do not count.</p>\n<p><strong>Self-check:</strong> Take any service you buy regularly and write down: what would a material breach look like, and what would your cover cost be?</p>\n"
};
