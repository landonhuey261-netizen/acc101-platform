// eco231 - Module 4: Public Goods & Externalities: When Markets Need Government
module.exports = {
  "number": 4,
  "slug": "public-goods-externalities",
  "title": "Public Goods & Externalities: When Markets Need Government",
  "estTime": "3–4 hours",
  "objectives": [
    "Define public goods using non-rivalry and non-excludability, and explain the free-rider problem.",
    "Sort goods into private, public, common-resource, and club goods.",
    "Explain positive and negative externalities and how they push output away from the efficient level.",
    "Apply the Samuelson rule for the efficient quantity of a public good.",
    "Compare Pigouvian taxes, subsidies, regulation, and Coase bargaining as fixes for externalities."
  ],
  "sections": [
    {
      "heading": "What Makes a Good Public?",
      "html": "<p>Economists sort goods by two questions. Is the good <strong>rival</strong> — does one person's use leave less for others? Is it <strong>excludable</strong> — can non-payers be kept out? A sandwich is rival and excludable: a private good. National defense is neither: my safety does not reduce yours, and nobody can be excluded from it. That is a <strong>public good</strong>.</p>\n<p>The four-way sort: <strong>private goods</strong> (rival, excludable — sandwiches, shoes); <strong>public goods</strong> (non-rival, non-excludable — national defense, a lighthouse beam); <strong>common resources</strong> (rival, non-excludable — fish in the open sea, a crowded public park); and <strong>club goods</strong> (non-rival, excludable — a streaming service, a toll road with spare capacity).</p>\n<div class=\"callout\"><strong>Key idea:</strong> Markets fail on public goods because of the free-rider problem: if you cannot exclude non-payers, nobody wants to pay, so the good is under-provided — or not provided at all.</div>"
    },
    {
      "heading": "The Free-Rider Problem and the Samuelson Rule",
      "html": "<p>Suppose a town's flood siren costs $80,000. Three neighborhoods value it at $30,000, $50,000, and $20,000. Together they value it at $100,000 — more than it costs — so providing it is efficient. But each neighborhood would rather let the others pay: if the first two pay $80,000, the third still hears the siren for free. Everyone waits, nobody pays, and the siren never gets built. That is the free-rider problem, and it is why public goods are usually paid for by taxes and provided by government.</p>\n<p>The efficient rule is the <strong>Samuelson rule</strong>: provide a public good up to the point where the sum of everyone's marginal benefit equals the marginal cost. Because the good is non-rival, one unit serves everyone at once, so benefits add up across people — unlike a private good, where each person's benefit is counted separately.</p>\n<div class=\"formula\">Efficient public good: Sum of marginal benefits = Marginal cost</div>\n<p>Check the siren: total benefit $30,000 + $50,000 + $20,000 = $100,000, cost $80,000, so provide it — the total benefit beats the cost by $20,000.</p>"
    },
    {
      "heading": "Externalities: Costs and Benefits That Spill Over",
      "html": "<p>An <strong>externality</strong> is a cost or benefit of an activity that falls on someone who did not choose it. A factory that pollutes a river imposes a <strong>negative externality</strong> on downstream residents. A homeowner who plants a beautiful garden gives neighbors a <strong>positive externality</strong> for free.</p>\n<p>Externalities make markets produce the wrong amount. With a negative externality, the firm counts only its private cost and ignores the damage, so it produces too much. With a positive externality, the producer counts only their private benefit and ignores the gain to others, so they produce too little. In both cases the market quantity is not the socially efficient one.</p>\n<p>The <strong>tragedy of the commons</strong> is the same logic applied to a shared resource: each fisher takes one more fish because they get the full benefit, while the cost — a thinner stock — is shared by everyone. Each person acting rationally produces a result nobody wants.</p>"
    },
    {
      "heading": "Fixing Externalities: Four Tools",
      "html": "<p>First, the <strong>Pigouvian tax</strong>: tax the polluting activity by the amount of the external cost, so the firm faces the true social cost. If each unit of output causes $4 of damage, a $4-per-unit tax makes the firm produce the efficient amount. A <strong>Pigouvian subsidy</strong> does the mirror image for positive externalities: pay producers $4 a unit for the benefit they give others.</p>\n<p>Second, <strong>regulation</strong>: simply cap the pollution, ban the chemical, or require a filter. Regulation is direct and certain, but it ignores that some firms can cut pollution cheaply and others only at great cost — a tax lets the cheap cutters do most of the cutting.</p>\n<p>Third, <strong>tradable permits</strong>: the government caps total pollution and lets firms buy and sell permits to pollute. Firms that can cut cheaply sell their permits to firms that cannot, so the cap is met at the lowest total cost.</p>\n<p>Fourth, <strong>Coase bargaining</strong>: if property rights are clear and bargaining is cheap, the affected parties can negotiate the efficient outcome themselves, with or without government. A factory and a fishing village can agree on a payment for cleaner water. Coase's insight is that the efficient outcome does not depend on who holds the right — but it does depend on transaction costs being low, which is why it works best with few parties and clear rights.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Public goods are non-rival and non-excludable; the free-rider problem under-provides them.</li>\n<li>Four kinds of goods: private, public, common resource, club.</li>\n<li>Samuelson rule: sum of marginal benefits = marginal cost.</li>\n<li>Negative externalities → too much output; positive externalities → too little.</li>\n<li>Fixes: Pigouvian tax/subsidy, regulation, tradable permits, Coase bargaining.</li>\n<li>Tragedy of the commons: shared resources get overused because each user ignores the cost to others.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling anything the government provides a public good. A public school building is excludable (you can lock the door); a lighthouse beam is the classic public good. What matters is rivalry and excludability, not who pays.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a Pigouvian tax should equal the total damage. It should equal the <em>marginal</em> external cost — the damage from one more unit — which is $4 a unit in this module's example, not the total damage from all units.</div>\n<p><strong>Ready-to-Work link:</strong> Next time you hear a policy debate about a carbon tax, a smoking ban, or a new park, sort the good first (rival? excludable?) and name the externality. The right tool follows from the sort.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Public good", "def": "A good that is non-rival and non-excludable, such as national defense." },
    { "term": "Non-rival", "def": "One person's use does not reduce what is left for others." },
    { "term": "Non-excludable", "def": "People who do not pay cannot be prevented from using the good." },
    { "term": "Free-rider problem", "def": "People enjoy a good without paying for it, so the market under-provides it." },
    { "term": "Private good", "def": "A good that is rival and excludable, such as a sandwich." },
    { "term": "Common resource", "def": "A good that is rival but non-excludable, such as fish in the open sea." },
    { "term": "Club good", "def": "A good that is non-rival but excludable, such as a streaming service." },
    { "term": "Samuelson rule", "def": "Provide a public good until the sum of everyone's marginal benefit equals its marginal cost." },
    { "term": "Externality", "def": "A cost or benefit of an activity that falls on someone who did not choose it." },
    { "term": "Negative externality", "def": "An external cost, such as pollution, that makes the market produce too much." },
    { "term": "Positive externality", "def": "An external benefit, such as education or a garden, that makes the market produce too little." },
    { "term": "Tragedy of the commons", "def": "Overuse of a shared resource because each user ignores the cost their use imposes on others." },
    { "term": "Pigouvian tax", "def": "A tax equal to the marginal external cost, set to make the polluter face the true social cost." },
    { "term": "Pigouvian subsidy", "def": "A payment equal to the marginal external benefit, set to encourage an activity with positive spillovers." },
    { "term": "Tradable permits", "def": "A cap on total pollution with permits firms can buy and sell, meeting the cap at lowest cost." },
    { "term": "Coase theorem", "def": "With clear property rights and low transaction costs, private bargaining can reach the efficient outcome." },
    { "term": "Marginal external cost", "def": "The extra damage to third parties from one more unit of an activity." },
    { "term": "Social cost", "def": "Private cost plus external cost — the full cost of an activity to society." }
  ],
  "video": {
    "title": "Market Failures, Taxes, and Subsidies: Crash Course Economics #21",
    "embedUrl": "https://www.youtube.com/embed/13JOGWzY8kE",
    "note": "Crash Course covers market failures, the free-rider problem, the tragedy of the commons, and how taxes and subsidies can fix externalities. Watch it, then redo the flood-siren Samuelson check in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A flood siren costs $80,000. Three neighborhoods value it at $30,000, $50,000, and $20,000. (a) What is the total benefit? (b) Should the siren be provided? (c) Why might the market still fail to provide it?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total benefit = $30,000 + $50,000 + $20,000 = <strong>$100,000</strong>. Step 2: Yes — $100,000 of benefit beats $80,000 of cost, a net gain of $20,000, so the Samuelson rule says provide it. Step 3: The market may still fail because the siren is non-excludable: each neighborhood hopes the others pay, so nobody pays — the free-rider problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A factory's output causes $4 of damage per unit to a nearby river. (a) What Pigouvian tax per unit would fix this? (b) If the factory produces 1,000 units, how much tax does it pay in total?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The Pigouvian tax equals the marginal external cost: <strong>$4 per unit</strong>. Step 2: Total tax = 1,000 × $4 = <strong>$4,000</strong>. Step 3: Facing the $4 tax, the factory counts the damage as part of its cost and cuts output to the efficient level.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Sort each good into private, public, common resource, or club good, and say why: (a) a hamburger, (b) a lighthouse beam, (c) fish in the open ocean, (d) a streaming service subscription.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Hamburger — <strong>private good</strong>: rival (eaten once) and excludable (you pay or you don't eat). Step 2: (b) Lighthouse beam — <strong>public good</strong>: non-rival (one ship's use doesn't dim it) and non-excludable (you cannot stop a ship seeing it). Step 3: (c) Open-ocean fish — <strong>common resource</strong>: rival (a fish caught is gone) but non-excludable (nobody owns the open sea). Step 4: (d) Streaming service — <strong>club good</strong>: non-rival (one more viewer costs almost nothing) but excludable (no subscription, no stream).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In your own words, explain why a negative externality makes the market produce too much, and why a positive externality makes it produce too little.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With a negative externality, the producer pays only the private cost and ignores the damage to others, so the good looks cheaper to produce than it really is — output is too high. Step 2: With a positive externality, the producer earns only the private benefit and ignores the gain to others, so the activity looks less valuable than it really is — output is too low. Step 3: In both cases the market counts only private costs and benefits, while society counts social costs and benefits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two firms must cut total pollution by 100 tons. Firm A can cut a ton for $10; Firm B can cut a ton for $50. (a) If each firm must cut 50 tons, what is the total cost? (b) If Firm A cuts all 100 tons and Firm B cuts none (as under tradable permits), what is the total cost? (c) How much is saved?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Equal cuts cost 50 × $10 + 50 × $50 = $500 + $2,500 = <strong>$3,000</strong>. Step 2: Firm A cutting all 100 costs 100 × $10 = <strong>$1,000</strong>. Step 3: Saving = $3,000 − $1,000 = <strong>$2,000</strong>. Step 4: Tradable permits let the cheap cutter do the cutting, so the same environmental result costs less.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A factory and a fishing village are bargaining over river pollution. Explain, using the Coase theorem, when their private negotiation can reach the efficient outcome — and when it cannot.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It can work when property rights are clear (who owns the right to the clean river is settled) and transaction costs are low (two parties, easy to talk). Step 2: Then the two sides can agree on a payment — the factory pays for the right to pollute a little, or the village pays the factory to cut back — and the efficient amount of pollution results either way. Step 3: It fails when there are hundreds of affected people, unclear rights, or high costs of organizing — then bargaining breaks down and government action is needed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A public good is defined as a good that is:",
      "choices": ["Rival and excludable", "Non-rival and non-excludable", "Rival and non-excludable", "Non-rival and excludable"],
      "answer": 1,
      "explanation": "Correct: (b). Non-rivalry and non-excludability together define a public good, like national defense. (a) is a private good. (c) is a common resource. (d) is a club good."
    },
    {
      "q": "The free-rider problem causes public goods to be:",
      "choices": ["Over-provided by the market", "Under-provided by the market", "Provided exactly at the efficient level", "Provided only by charities"],
      "answer": 1,
      "explanation": "Correct: (b). People enjoy the good without paying, so the market supplies too little or none. (a) is the opposite of the free-rider result. (c) would require everyone to reveal and pay their true benefit. (d) Charities face the same free-rider problem."
    },
    {
      "q": "Three neighborhoods value a siren at $30,000, $50,000, and $20,000. Its cost is $80,000. The efficient decision is to:",
      "choices": ["Not provide it, because no single neighborhood values it above $80,000", "Provide it, because total benefit $100,000 exceeds cost $80,000", "Provide it only if one neighborhood pays the full cost", "Not provide it, because the total benefit is $80,000"],
      "answer": 1,
      "explanation": "Correct: (b). The Samuelson rule adds benefits across people: $100,000 > $80,000, so provide it. (a) makes the mistake of comparing one person's benefit with the whole cost. (c) is not required — the cost can be shared. (d) misadds the benefits: $30,000 + $50,000 + $20,000 = $100,000, not $80,000."
    },
    {
      "q": "A negative externality makes the market produce:",
      "choices": ["Too little, because producers ignore the external benefit", "Too much, because producers ignore the external cost", "The efficient amount", "Nothing at all"],
      "answer": 1,
      "explanation": "Correct: (b). The producer counts only private cost, so output is higher than the social optimum. (a) describes a positive externality. (c) would need the external cost to be counted. (d) Externalities reduce efficiency; they do not shut the market down."
    },
    {
      "q": "Fish in the open ocean are a common resource because they are:",
      "choices": ["Non-rival and non-excludable", "Rival and non-excludable", "Non-rival and excludable", "Rival and excludable"],
      "answer": 1,
      "explanation": "Correct: (b). A fish caught is gone (rival), but nobody can be excluded from the open sea. (a) is a public good. (c) is a club good. (d) is a private good."
    },
    {
      "q": "A Pigouvian tax should be set equal to:",
      "choices": ["The total damage caused by all pollution", "The marginal external cost of one more unit", "The firm's total profit", "Zero, because taxes always distort"],
      "answer": 1,
      "explanation": "Correct: (b). The tax must make the firm face the damage from the next unit it produces. (a) Total damage is the wrong margin — the tax is per unit. (c) Profit has nothing to do with the damage. (d) A Pigouvian tax corrects a distortion instead of creating one."
    },
    {
      "q": "Tradable permits cut the cost of meeting a pollution cap because:",
      "choices": ["They let firms pollute without limit", "They let firms that can cut pollution cheaply do most of the cutting", "They ban pollution entirely", "They set the same cut for every firm"],
      "answer": 1,
      "explanation": "Correct: (b). Permits are sold by cheap cutters to expensive cutters, so the cap is met at lowest cost. (a) The cap still limits total pollution. (c) A ban is regulation, not permits. (d) Equal cuts for all is the expensive command-and-control approach."
    },
    {
      "q": "The Coase theorem says private bargaining can reach the efficient outcome when:",
      "choices": ["Property rights are unclear and there are hundreds of parties", "Property rights are clear and transaction costs are low", "The government sets the price", "One side has all the bargaining power"],
      "answer": 1,
      "explanation": "Correct: (b). Clear rights plus cheap bargaining let the parties negotiate to efficiency. (a) is exactly when bargaining breaks down. (c) Government price-setting is not Coase bargaining. (d) Extreme bargaining power can block a deal, not guarantee efficiency."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Public Goods & Externalities: Quick Reference</h3>\n<p><strong>Core idea:</strong> Markets fail when benefits or costs spill onto people who did not choose them. Sort the good first, then pick the fix.</p>\n<p><strong>Four goods:</strong> Private (rival, excludable) · Public (non-rival, non-excludable) · Common resource (rival, non-excludable) · Club (non-rival, excludable).</p>\n<div class=\"formula\">Samuelson rule: Sum of marginal benefits = Marginal cost</div>\n<p><strong>Worked anchors:</strong> Siren: $30,000 + $50,000 + $20,000 = $100,000 > $80,000 cost → provide. Pigouvian tax = marginal external cost = $4/unit; 1,000 units → $4,000. Permits: equal cuts cost $3,000; cheap cutter does all → $1,000; saving $2,000.</p>\n<p><strong>Externalities:</strong> Negative → too much output; positive → too little. Fixes: Pigouvian tax/subsidy, regulation, tradable permits, Coase bargaining (clear rights, low transaction costs).</p>\n<p><strong>Watch out:</strong> A public good is defined by rivalry and excludability, not by who provides it. A Pigouvian tax equals marginal, not total, external cost.</p>\n<p><strong>Self-check:</strong> Name one public good, one common resource, and one externality in your own town, and say which fix fits each.</p>\n"
};
