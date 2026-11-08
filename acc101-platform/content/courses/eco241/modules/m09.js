// eco241 - Module 9: Natural Resources & Sustainability
module.exports = {
  "number": 9,
  "slug": "natural-resources-sustainability",
  "title": "Natural Resources & Sustainability",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish renewable from non-renewable resources and explain why the distinction matters.",
    "Compute a sustainable harvest from a simple fishery model and a reserve lifetime for an exhaustible resource.",
    "Explain Hotelling's rule: the price of an exhaustible resource should rise with the interest rate.",
    "Use discounting to compare costs and benefits that arrive in different years.",
    "Define sustainability in economic terms and explain the roles of substitution and technology."
  ],
  "sections": [
    {
      "heading": "Two Kinds of Resources",
      "html": "<p>A <strong>renewable resource</strong> regrows: fish, forests, sunlight, wind. A <strong>non-renewable (exhaustible) resource</strong> does not, on any human timescale: oil, coal, copper, natural gas. The distinction decides the problem. With a renewable resource the question is the harvest rate: take less than the regrowth and the stock lasts forever; take more and it shrinks toward collapse. With an exhaustible resource the question is the extraction path: the stock only falls, so the choice is how fast to use it up and what to leave for the future.</p>\n<p>Both kinds are governed by the same economics: a resource left in the ground (or in the sea) is an asset, and its owner compares the return from using it now against the return from waiting. That comparison — formalized in this module as Hotelling's rule and discounting — is what turns geology into economics.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Renewables are a flow problem (harvest vs. regrowth); exhaustibles are a stock problem (how fast to drain a fixed tank). The economics of each starts from that difference.</div>"
    },
    {
      "heading": "Renewables: The Sustainable Harvest",
      "html": "<p>Worked anchor — a fishery with a carrying capacity of 100,000 tons: the largest stock the habitat supports. The stock grows fastest in the middle, so the growth formula used here is growth = 0.2 × stock × (1 − stock ÷ 100,000). At a stock of 50,000 tons, growth is 0.2 × 50,000 × (1 − 0.5) = 10,000 × 0.5 = <strong>5,000 tons a year</strong>. Harvesting exactly 5,000 tons a year keeps the stock steady at 50,000 forever — that is the <strong>maximum sustainable yield</strong> in this simple model, the largest harvest that can be taken year after year without shrinking the stock.</p>\n<p>Harvest more than 5,000 and the stock falls; as it falls, growth slows, and the sustainable harvest shrinks with it — a spiral toward collapse. Harvest less and the stock grows toward carrying capacity, where growth itself falls to zero because the habitat is full. Open access makes the bad outcome likely: each boat takes fish now and leaves the shrinking stock to everyone (Module 7's tragedy of the commons). The fixes are the same as before: catch limits, individual quotas that give each fisher a secure share, or ownership that makes conservation pay.</p>\n<div class=\"formula\">Sustainable harvest = regrowth at the current stock &nbsp;|&nbsp; Growth here = 0.2 × stock × (1 − stock ÷ carrying capacity)</div>"
    },
    {
      "heading": "Exhaustibles: Hotelling's Rule and Reserve Lifetimes",
      "html": "<p>Worked anchor — an oil field with reserves of 1,000,000 barrels, extracted at 50,000 barrels a year. Its reserve lifetime is 1,000,000 ÷ 50,000 = <strong>20 years</strong> at the current rate — a simple division, but a useful discipline: every extraction plan implies a lifetime, and a plan that ignores it is not a plan. If extraction grows 5% a year instead, the field lasts far less than 20 years, because each year's take is bigger than the last.</p>\n<p><strong>Hotelling's rule</strong> says the price of an exhaustible resource, net of extraction cost, should rise at the rate of interest. The logic is arbitrage: if the price were going to rise faster than interest, owners would hold oil in the ground as an investment and sell less today, pushing today's price up; if it were going to rise more slowly, they would pump now and put the money in the bank, pushing today's price down. In practice, new discoveries and new technology keep breaking the rule — oil prices have not risen steadily for a century — but the rule is the benchmark that explains why owners sometimes leave valuable resources untouched: the ground can be a better bank than the bank.</p>"
    },
    {
      "heading": "Discounting and Sustainability",
      "html": "<p>Resource decisions span decades, so economists <strong>discount</strong> the future: a dollar next year is worth less than a dollar today, because today's dollar can be invested. At a 5% discount rate, $1,000 received in 10 years is worth $1,000 ÷ 1.05<sup>10</sup> = $1,000 ÷ 1.6289 = <strong>$613.91</strong> today. The discount rate is therefore a moral choice disguised as arithmetic: a high rate makes the future cheap and justifies using resources now; a low rate makes the future dear and justifies conservation.</p>\n<p>That is the heart of the sustainability debate. <strong>Weak sustainability</strong> says what matters is the total stock of capital — natural, human, and built — so using up oil is fine if the proceeds build schools and machines of equal value. <strong>Strong sustainability</strong> says some natural capital cannot be replaced — a stable climate, a living reef — and must be preserved in its own right. Technology and substitution are the tie-breakers: when copper gets dear, engineers switch to aluminium or fibre; when oil gets dear, they build wind turbines. The pessimists of the 1970s predicted resource exhaustion by now; they were wrong mainly because prices drove substitution and discovery. But substitution has limits, and the resources with no substitute — a stable climate above all — are the ones that need the strongest protection.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Discounting makes the distant future cheap — $1,000 in ten years is worth $613.91 today at 5%. Every sustainability argument is, in part, an argument about the right discount rate.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Renewables regrow (harvest vs. regrowth); exhaustibles do not (how fast to drain a fixed stock).</li>\n<li>Fishery anchor: carrying capacity 100,000 tons; at a stock of 50,000, growth is 5,000 tons a year — the maximum sustainable yield.</li>\n<li>Oil anchor: 1,000,000 barrels ÷ 50,000 a year = 20 years of reserves at the current rate.</li>\n<li>Hotelling's rule: the net price of an exhaustible resource should rise at the interest rate — the ground as a bank.</li>\n<li>Discounting: $1,000 in 10 years is worth $613.91 today at 5%. Weak sustainability allows substitution; strong sustainability protects irreplaceable natural capital.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a reserve lifetime of 20 years means the resource runs out in 20 years. It means 20 years at the current extraction rate — if extraction grows, it lasts less; if prices rise and new reserves are found, it lasts more. A lifetime is a snapshot, not a prophecy.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the maximum sustainable yield as a target to hit exactly. Harvesting at the maximum leaves no buffer for a bad year, a disease, or a measurement error. Real fisheries set the catch below the maximum — prudence is part of the economics.</div>\n<p><strong>Ready-to-Work link:</strong> Discounting is the same arithmetic as a loan or an investment decision: any time you compare money today with money later — a pension, a mortgage, a business investment — you are choosing a discount rate, whether you know it or not.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Renewable resource",
      "def": "A resource that regrows, such as fish, forests, sunlight, and wind."
    },
    {
      "term": "Non-renewable resource",
      "def": "An exhaustible resource that does not regrow on a human timescale, such as oil or copper."
    },
    {
      "term": "Carrying capacity",
      "def": "The largest stock of a renewable resource its habitat can support."
    },
    {
      "term": "Maximum sustainable yield",
      "def": "The largest harvest that can be taken year after year without shrinking the stock."
    },
    {
      "term": "Reserve lifetime",
      "def": "Reserves divided by the annual extraction rate — how long a resource lasts at the current rate."
    },
    {
      "term": "Hotelling's rule",
      "def": "The principle that the net price of an exhaustible resource should rise at the rate of interest."
    },
    {
      "term": "Discounting",
      "def": "Reducing future amounts to present value using a discount (interest) rate."
    },
    {
      "term": "Present value",
      "def": "What a future amount is worth today after discounting."
    },
    {
      "term": "Discount rate",
      "def": "The rate used to convert future values to present values; it reflects how much the future is valued against today."
    },
    {
      "term": "Weak sustainability",
      "def": "The view that what matters is total capital, so natural capital may be used up if replaced by other capital of equal value."
    },
    {
      "term": "Strong sustainability",
      "def": "The view that some natural capital is irreplaceable and must be preserved in its own right."
    },
    {
      "term": "Substitution",
      "def": "Replacing a scarce resource with a cheaper or more plentiful alternative."
    },
    {
      "term": "Individual transferable quota",
      "def": "A secure, tradable share of a total catch limit, giving fishers an incentive to conserve the stock."
    },
    {
      "term": "Natural capital",
      "def": "The stock of natural assets — minerals, forests, fisheries, a stable climate — that yields services to people."
    }
  ],
  "video": {
    "title": "Y1 27) Common Access Resources - Tragedy of the Commons",
    "embedUrl": "https://www.youtube.com/embed/iBQ0-DzeoIM",
    "note": "EconplusDal on common access resources and the tragedy of the commons — the fisheries and forests version of this module's problem. Apply its logic to the module's fishery: why does open access push the harvest past the 5,000-ton sustainable yield?",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fishery has a carrying capacity of 100,000 tons and growth follows 0.2 × stock × (1 − stock ÷ 100,000). (a) What is the growth (and sustainable harvest) at a stock of 50,000 tons? (b) What is the growth at a stock of 80,000 tons?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At 50,000 tons, growth is 0.2 × 50,000 × (1 − 0.5) = 10,000 × 0.5 = <strong>5,000 tons a year</strong>. Step 2: At 80,000 tons, growth is 0.2 × 80,000 × (1 − 0.8) = 16,000 × 0.2 = <strong>3,200 tons a year</strong>. Step 3: Growth is highest in the middle (50,000) and falls as the stock nears carrying capacity — the sustainable harvest is smaller at 80,000 than at 50,000.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An oil field holds 1,000,000 barrels and produces 50,000 barrels a year. (a) What is its reserve lifetime? (b) If production rises to 100,000 barrels a year, what is the new lifetime?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Lifetime is 1,000,000 ÷ 50,000 = <strong>20 years</strong>. Step 2: At 100,000 a year, lifetime is 1,000,000 ÷ 100,000 = <strong>10 years</strong>. Step 3: Doubling the extraction rate halves the lifetime — the arithmetic is linear when the rate is constant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At a 5% discount rate, (a) what is the present value of $1,000 received in 10 years? (Use 1.05<sup>10</sup> = 1.6289.) (b) What is the present value of $1,000 received in 20 years? (Use 1.05<sup>20</sup> = 2.6533.)</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: In 10 years, present value is $1,000 ÷ 1.6289 = <strong>$613.91</strong>. Step 2: In 20 years, present value is $1,000 ÷ 2.6533 = <strong>$376.89</strong>. Step 3: The further away the money, the less it is worth today — and the fall is steep: twenty years out, $1,000 is worth barely more than a third of its face value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A mine owner can sell copper today for $100 a ton net of costs, or wait a year when the price will be $104. The interest rate is 5%. (a) Should the owner sell now or wait, by Hotelling's logic? (b) What price rise would make waiting exactly as good as selling now?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Selling now and banking $100 earns 5%, giving <strong>$105</strong> in a year. Step 2: Waiting gives only $104, so the owner should <strong>sell now</strong>. Step 3: Waiting would be exactly as good if the price rose to $100 × 1.05 = <strong>$105</strong> — a 5% rise, matching the interest rate, which is Hotelling's rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A forest is cut for timber worth $1 million today, but the timber could be replanted and the forest would yield $1 million of timber plus $200,000 of recreation and water benefits every 30 years forever. Explain in one paragraph why weak and strong sustainability give different answers about cutting it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Weak sustainability asks whether the total capital stock is preserved: cutting is fine if the $1 million is invested in something of equal value, such as a school. Step 2: Strong sustainability asks whether the natural capital itself is preserved: the forest's recreation and water services cannot be replaced by a school, so cutting fails the test. Step 3: The two views disagree because one treats natural and built capital as substitutes and the other treats some natural capital as irreplaceable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fishery's total catch limit is 5,000 tons and each fisher holds a tradable share. Explain how tradable shares change a fisher's incentive compared with open access.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under open access, a fisher gains by catching one more fish today and bears only a tiny share of the stock's decline. Step 2: With a tradable share, the fisher owns a slice of the future catch — conserving the stock raises the value of the share itself. Step 3: The fisher can also sell the share, so conservation has a market price. Ownership turns the fisher from a raider of the commons into a steward of an asset.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A renewable resource differs from a non-renewable one because it:",
      "choices": [
        "Never runs out no matter how much is taken",
        "Regrows, so the question is the harvest rate versus regrowth",
        "Is always free",
        "Cannot be owned"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fish regrow, so harvesting below regrowth sustains the stock. (a) A renewable can be exhausted by overharvesting. (c) Renewables have real costs. (d) Renewables can be owned — a private forest, for example."
    },
    {
      "q": "In the fishery model (carrying capacity 100,000 tons), the sustainable harvest at a stock of 50,000 tons is:",
      "choices": [
        "10,000 tons",
        "5,000 tons",
        "2,500 tons",
        "50,000 tons"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.2 × 50,000 × 0.5 = 5,000 tons. (a) is 0.2 × 50,000 before the (1 − stock/capacity) factor. (c) halves the right answer. (d) is the whole stock, not the growth."
    },
    {
      "q": "An oil field with 1,000,000 barrels producing 50,000 a year has a reserve lifetime of:",
      "choices": [
        "10 years",
        "20 years",
        "50 years",
        "100 years"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1,000,000 ÷ 50,000 = 20 years. (a) would be the lifetime at 100,000 a year. (c) divides by 20,000. (d) divides by 10,000."
    },
    {
      "q": "Hotelling's rule says the net price of an exhaustible resource should rise at:",
      "choices": [
        "The rate of inflation",
        "The rate of interest",
        "Zero — prices should stay flat",
        "The rate of population growth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). If the price rose faster than interest, owners would hold the resource; if slower, they would sell now. (a) Inflation is about the general price level, not the resource's relative price. (c) A flat price would make selling now always better. (d) Population growth does not set the arbitrage condition."
    },
    {
      "q": "At a 5% discount rate, $1,000 received in 10 years is worth today:",
      "choices": [
        "$1,000",
        "$613.91",
        "$500",
        "$1,628.90"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $1,000 ÷ 1.05^10 = $1,000 ÷ 1.6289 = $613.91. (a) ignores discounting. (c) would be the value at a much higher rate. (d) is $1,000 × 1.6289 — the future value of $1,000 today, not the present value."
    },
    {
      "q": "Weak sustainability differs from strong sustainability in that weak sustainability:",
      "choices": [
        "Forbids using any natural resources",
        "Allows natural capital to be used up if replaced by other capital of equal value",
        "Ignores the future entirely",
        "Applies only to forests"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Total capital is what matters under weak sustainability. (a) That is closer to strong sustainability for irreplaceable assets. (c) Discounting, not weak sustainability, is what can undervalue the future. (d) The distinction applies to all natural capital."
    },
    {
      "q": "Open access to a fishery most likely leads to:",
      "choices": [
        "Harvesting below the sustainable yield",
        "Harvesting above the sustainable yield, shrinking the stock",
        "No fishing at all",
        "A stock exactly at carrying capacity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each fisher takes the full benefit and shares the cost, so the harvest exceeds regrowth. (a) would need secure ownership or limits. (c) Open access invites fishing, it does not prevent it. (d) The stock falls below carrying capacity as it is overfished."
    },
    {
      "q": "A high discount rate makes conservation:",
      "choices": [
        "More attractive, because the future is valued highly",
        "Less attractive, because future benefits are worth little today",
        "Irrelevant to the decision",
        "Free"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At a high rate, $1,000 in ten years is worth little now, so using the resource today wins. (a) describes a low discount rate. (c) The discount rate is central to the decision. (d) Conservation always has an opportunity cost."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Natural Resources Quick Reference</h3>\n<p><strong>Core idea:</strong> Renewables are a flow problem (harvest vs. regrowth); exhaustibles are a stock problem (how fast to drain the tank).</p>\n<div class=\"formula\">Fishery: growth = 0.2 × stock × (1 − stock ÷ 100,000) → at 50,000 tons, growth = 5,000 tons (maximum sustainable yield) &nbsp;|&nbsp; Oil: 1,000,000 ÷ 50,000 = 20 years</div>\n<p><strong>Hotelling's rule:</strong> the net price of an exhaustible resource should rise at the interest rate — otherwise owners would sell now or hold, until it does.</p>\n<p><strong>Discounting:</strong> $1,000 in 10 years at 5% = $1,000 ÷ 1.6289 = $613.91 today; in 20 years = $376.89. A high discount rate makes the future cheap.</p>\n<p><strong>Sustainability:</strong> weak = total capital matters, substitution allowed; strong = some natural capital is irreplaceable.</p>\n<p><strong>Watch out:</strong> A reserve lifetime is a snapshot at today's extraction rate, not a prophecy — and the maximum sustainable yield is a ceiling, not a target to hit exactly.</p>\n<p><strong>Self-check:</strong> A coal reserve of 500,000 tons is mined at 25,000 tons a year. What is its lifetime, and what happens to it if mining doubles?</p>\n"
};
