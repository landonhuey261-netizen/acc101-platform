// eco241 - Module 1: Trade Theory: Comparative Advantage & Gains from Trade
module.exports = {
  "number": 1,
  "slug": "trade-theory-comparative-advantage",
  "title": "Trade Theory: Comparative Advantage & Gains from Trade",
  "estTime": "3–4 hours",
  "objectives": [
    "Define absolute advantage and comparative advantage, and explain why they are different.",
    "Compute opportunity costs from a production table and identify each country's comparative advantage.",
    "Show how specialization and trade let both countries consume beyond their own production possibilities.",
    "Find the range of mutually beneficial terms of trade for a given example.",
    "Explain why even a country that is better at everything still gains from trade."
  ],
  "sections": [
    {
      "heading": "Why Countries Trade at All",
      "html": "<p>Every country could, in principle, try to make everything it needs. None does, because no country is equally good at everything, and because trading lets each country focus on what it does relatively best and swap for the rest. Trade is not charity and it is not a contest with one winner: when trade is voluntary, both sides expect to end up better off, or they would not trade.</p>\n<p>The key insight, first set out by David Ricardo in 1817, is that what matters is not who is best in absolute terms, but who gives up least. A country may be worse at making both cloth and wine than its trading partner, and still gain by specializing in the good where its disadvantage is smallest. That is the difference between <strong>absolute advantage</strong> (producing more with the same resources) and <strong>comparative advantage</strong> (producing at a lower opportunity cost).</p>\n<div class=\"callout\"><strong>Key idea:</strong> Trade is driven by comparative advantage, not absolute advantage. A country gains by doing what it gives up least to do, and importing the rest.</div>"
    },
    {
      "heading": "Opportunity Cost: The Price of Doing One Thing Instead of Another",
      "html": "<p><strong>Opportunity cost</strong> is the value of the best alternative you give up when you choose something. If a worker can make either 100 units of cloth or 50 units of wine in a day, then making 1 unit of cloth costs 50 ÷ 100 = <strong>0.5 units of wine</strong>, and making 1 unit of wine costs 100 ÷ 50 = <strong>2 units of cloth</strong>. The two opportunity costs are reciprocals: if 1 cloth costs 0.5 wine, then 1 wine costs 1 ÷ 0.5 = 2 cloth.</p>\n<p>Worked anchor for this module — two example countries, Alpha and Beta, each with one worker-day of labour:</p>\n<ul>\n<li>Alpha can make <strong>100 cloth or 50 wine</strong>. Alpha's opportunity cost of 1 cloth is 0.5 wine; of 1 wine, 2 cloth.</li>\n<li>Beta can make <strong>40 cloth or 80 wine</strong>. Beta's opportunity cost of 1 cloth is 80 ÷ 40 = <strong>2 wine</strong>; of 1 wine, 40 ÷ 80 = <strong>0.5 cloth</strong>.</li>\n</ul>\n<p>Alpha is better at cloth in absolute terms (100 vs 40) and Beta is better at wine (80 vs 50). But the comparative advantage question is about cost: Alpha's cloth costs 0.5 wine against Beta's 2 wine, so <strong>Alpha has the comparative advantage in cloth</strong>. Beta's wine costs 0.5 cloth against Alpha's 2 cloth, so <strong>Beta has the comparative advantage in wine</strong>.</p>\n<div class=\"formula\">Opportunity cost of 1 unit of X = (amount of Y given up) ÷ (amount of X gained)</div>"
    },
    {
      "heading": "Specialization and the Gains from Trade",
      "html": "<p>Suppose Alpha specializes fully in cloth (100 cloth, 0 wine) and Beta specializes fully in wine (0 cloth, 80 wine). Together they make 100 cloth and 80 wine — more of both than they could make if each split its time. Before trade, suppose Alpha made 60 cloth and 20 wine, and Beta made 20 cloth and 40 wine: combined, 80 cloth and 60 wine. Specialization raises the total to 100 cloth and 80 wine. That extra 20 cloth and 20 wine is the gain from specialization, waiting to be shared.</p>\n<p>Now let them trade: Alpha gives Beta <strong>30 cloth for 20 wine</strong>. Alpha ends with 70 cloth and 20 wine. On its own, 70 cloth would have cost Alpha 35 wine (70 × 0.5), leaving only 15 wine — so trade gives Alpha 5 extra wine for the same cloth. Beta ends with 30 cloth and 60 wine. On its own, 60 wine would have cost Beta 30 cloth (60 × 0.5), leaving only 10 cloth — so trade gives Beta 20 extra cloth. Both countries consume beyond what they could produce alone. That is the gain from trade, and it is real even though nothing new was invented: the gain comes from each country doing what it does cheapest.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The gains from trade are measured by comparing what each country consumes after trade with what it could have produced on its own. If both end up with more of at least one good and no less of the other, both gain.</div>"
    },
    {
      "heading": "The Terms of Trade: What Exchange Rates of Goods Work?",
      "html": "<p>The <strong>terms of trade</strong> are the rate at which one good exchanges for another — here, how many units of wine one unit of cloth buys. Trade benefits both sides only if the terms of trade lie between the two countries' opportunity costs. Alpha will not give up cloth for less than 0.5 wine per cloth (its own cost of making cloth), and Beta will not pay more than 2 wine per cloth (its own cost). So a mutually beneficial trade needs <strong>0.5 &lt; wine per cloth &lt; 2</strong>.</p>\n<p>Our trade — 30 cloth for 20 wine — is 20 ÷ 30 = <strong>0.67 wine per cloth</strong>, inside the range, so both gain. If instead the price were 0.4 wine per cloth, Alpha would refuse: it could make wine more cheaply itself. If it were 2.5 wine per cloth, Beta would refuse. The exact terms inside the range decide how the gains are split: the closer the price is to Alpha's cost, the more Beta gains, and vice versa. Bargaining power, market size, and demand decide where inside the range the price lands — the theory only says the range must hold for both to gain.</p>\n<div class=\"formula\">Mutually beneficial terms of trade: OC of the exporter &lt; price &lt; OC of the importer (in the same units)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Absolute advantage is who produces more; comparative advantage is who produces at lower opportunity cost. Trade follows comparative advantage.</li>\n<li>Opportunity cost of 1 unit of X = Y given up ÷ X gained. The two goods' opportunity costs are reciprocals.</li>\n<li>Alpha (100 cloth or 50 wine) has the comparative advantage in cloth at 0.5 wine per cloth; Beta (40 cloth or 80 wine) has it in wine at 0.5 cloth per wine.</li>\n<li>Specialization plus trade at 30 cloth for 20 wine leaves Alpha with 5 extra wine and Beta with 20 extra cloth versus producing alone.</li>\n<li>Mutually beneficial terms of trade lie strictly between the two opportunity costs: here, between 0.5 and 2 wine per cloth.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a country that is better at everything has nothing to gain from trade. It still gains, because its time is scarce: every hour spent making the good it is only slightly better at is an hour not spent making the good it is much better at. Comparative advantage, not absolute advantage, decides the pattern of trade.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Computing opportunity cost upside down. If 100 cloth costs 50 wine, then 1 cloth costs 50 ÷ 100 = 0.5 wine — the amount given up goes on top, the amount gained underneath. Always check: the two opportunity costs must multiply to 1 (0.5 × 2 = 1).</div>\n<p><strong>Ready-to-Work link:</strong> The same logic runs a business: a firm that is good at everything still outsources the task where its advantage is smallest, because its own staff's time is worth more elsewhere. Comparative advantage is the economist's version of \"do what you do best, buy the rest.\"</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Absolute advantage",
      "def": "The ability to produce more of a good than another producer using the same resources."
    },
    {
      "term": "Comparative advantage",
      "def": "The ability to produce a good at a lower opportunity cost than another producer."
    },
    {
      "term": "Opportunity cost",
      "def": "The value of the best alternative given up when a choice is made."
    },
    {
      "term": "Specialization",
      "def": "Concentrating production on the good in which a producer has a comparative advantage."
    },
    {
      "term": "Gains from trade",
      "def": "The extra consumption each trading partner enjoys compared with producing everything alone."
    },
    {
      "term": "Terms of trade",
      "def": "The rate at which one good exchanges for another in trade, for example units of wine per unit of cloth."
    },
    {
      "term": "Production possibilities frontier (PPF)",
      "def": "A curve showing the maximum combinations of two goods an economy can produce with its resources."
    },
    {
      "term": "Autarky",
      "def": "A situation in which a country produces everything it consumes and does not trade."
    },
    {
      "term": "Free trade",
      "def": "Trade between countries without tariffs, quotas, or other government restrictions."
    },
    {
      "term": "Exports",
      "def": "Goods and services sold to buyers in other countries."
    },
    {
      "term": "Imports",
      "def": "Goods and services bought from sellers in other countries."
    },
    {
      "term": "Trade balance",
      "def": "Exports minus imports; positive is a surplus, negative is a deficit."
    },
    {
      "term": "Ricardo",
      "def": "David Ricardo, the economist who in 1817 set out the theory of comparative advantage."
    },
    {
      "term": "Mutually beneficial trade",
      "def": "Trade whose terms lie between the two partners' opportunity costs, so both can gain."
    }
  ],
  "video": {
    "title": "Comparative Advantage and the Tragedy of Tasmania",
    "embedUrl": "https://www.youtube.com/embed/cwx9fZOL81c",
    "note": "Don Boudreaux (Marginal Revolution University) tells the story of comparative advantage through Tasmania — what happens when trade is cut off, and why specialization makes everyone richer. Compare his island example with the Alpha and Beta numbers in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Alpha can make 100 cloth or 50 wine in a worker-day; Beta can make 40 cloth or 80 wine. (a) What is Alpha's opportunity cost of 1 unit of cloth? (b) What is Beta's opportunity cost of 1 unit of cloth? (c) Which country has the comparative advantage in cloth, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Alpha gives up 50 wine to make 100 cloth, so 1 cloth costs 50 ÷ 100 = <strong>0.5 wine</strong>. Step 2: Beta gives up 80 wine to make 40 cloth, so 1 cloth costs 80 ÷ 40 = <strong>2 wine</strong>. Step 3: Alpha's cost (0.5) is lower than Beta's (2), so <strong>Alpha has the comparative advantage in cloth</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the same numbers, (a) what is each country's opportunity cost of 1 unit of wine? (b) Which country has the comparative advantage in wine?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Alpha gives up 100 cloth for 50 wine, so 1 wine costs 100 ÷ 50 = <strong>2 cloth</strong>. Step 2: Beta gives up 40 cloth for 80 wine, so 1 wine costs 40 ÷ 80 = <strong>0.5 cloth</strong>. Step 3: Beta's cost (0.5) is lower, so <strong>Beta has the comparative advantage in wine</strong>. Step 4: Check — the opportunity costs are reciprocals: 0.5 × 2 = 1 for each country.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Before trade, Alpha makes 60 cloth and 20 wine and Beta makes 20 cloth and 40 wine. After specialization Alpha makes 100 cloth and Beta makes 80 wine. How much extra cloth and wine does specialization create in total?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Before trade the two countries together make 60 + 20 = <strong>80 cloth</strong> and 20 + 40 = <strong>60 wine</strong>. Step 2: After specialization they make 100 cloth and 80 wine. Step 3: The gain is 100 − 80 = <strong>20 extra cloth</strong> and 80 − 60 = <strong>20 extra wine</strong>, with no extra resources used.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Alpha trades 30 cloth for 20 wine with Beta. Show that Alpha gains, by comparing what Alpha ends up with against what it could have produced alone with the same cloth.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: After trade Alpha has 100 − 30 = <strong>70 cloth and 20 wine</strong>. Step 2: Producing 70 cloth alone would cost Alpha 70 × 0.5 = 35 wine, leaving only 50 − 35 = 15 wine from its 50-wine capacity. Step 3: Trade gives Alpha 20 wine instead of 15 — a gain of <strong>5 wine</strong> with the same 70 cloth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Show that Beta also gains from the same trade (30 cloth for 20 wine).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: After trade Beta has <strong>30 cloth and 80 − 20 = 60 wine</strong>. Step 2: Producing 60 wine alone would cost Beta 60 × 0.5 = 30 cloth, leaving only 40 − 30 = 10 cloth from its 40-cloth capacity. Step 3: Trade gives Beta 30 cloth instead of 10 — a gain of <strong>20 cloth</strong> with the same 60 wine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What range of prices (wine per cloth) would make trade mutually beneficial for Alpha and Beta? Would a price of 0.4 wine per cloth work? Would 2.5 wine per cloth work? Explain both.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Alpha's cost of cloth is 0.5 wine, Beta's is 2 wine, so the price must satisfy <strong>0.5 &lt; wine per cloth &lt; 2</strong>. Step 2: At 0.4, Alpha would refuse — it can make cloth for 0.5 wine itself, so selling at 0.4 loses. Step 3: At 2.5, Beta would refuse — it can make cloth for 2 wine itself, so buying at 2.5 loses. Step 4: The module's trade at 20 ÷ 30 = 0.67 wine per cloth sits inside the range, so both gain.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Comparative advantage means a country can produce a good:",
      "choices": [
        "In larger quantities than any other country",
        "At a lower opportunity cost than another country",
        "With no resources at all",
        "Only if it is the best at everything"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Comparative advantage is about lower opportunity cost, not output size. (a) describes absolute advantage. (c) is impossible — production always uses resources. (d) is backwards: even a country that is best at everything trades on comparative advantage."
    },
    {
      "q": "Alpha can make 100 cloth or 50 wine. Its opportunity cost of 1 unit of cloth is:",
      "choices": [
        "2 wine",
        "0.5 wine",
        "50 wine",
        "100 wine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 50 wine given up ÷ 100 cloth gained = 0.5 wine per cloth. (a) is the opportunity cost of 1 wine, not 1 cloth. (c) is the total wine given up for all 100 cloth. (d) is the total cloth, not a cost."
    },
    {
      "q": "Beta can make 40 cloth or 80 wine. Beta has the comparative advantage in:",
      "choices": [
        "Cloth, because it makes fewer cloth",
        "Wine, because its opportunity cost of wine is 0.5 cloth versus Alpha's 2 cloth",
        "Cloth, because its opportunity cost of cloth is 2 wine",
        "Neither good"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Beta's wine costs 0.5 cloth, cheaper than Alpha's 2 cloth. (a) Making fewer cloth is not an advantage. (c) Beta's cloth cost of 2 wine is higher than Alpha's 0.5, so Beta is worse at cloth. (d) Every country has a comparative advantage in something."
    },
    {
      "q": "If Alpha specializes in cloth and Beta in wine, total world output:",
      "choices": [
        "Falls, because each country makes only one good",
        "Stays the same as before trade",
        "Rises — in the module example, from 80 cloth and 60 wine to 100 cloth and 80 wine",
        "Rises only for Alpha"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Specialization by comparative advantage raises total output with the same resources. (a) Making one good each is exactly what raises output. (b) Output rises by 20 cloth and 20 wine. (d) Both countries' totals rise; the gain is shared through trade."
    },
    {
      "q": "After trading 30 cloth for 20 wine, Alpha's gain is:",
      "choices": [
        "20 extra cloth",
        "5 extra wine for the same 70 cloth",
        "30 extra wine",
        "No gain, because it gave away cloth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Alpha ends with 70 cloth and 20 wine; making 70 cloth alone would leave only 15 wine, so trade adds 5 wine. (a) is Beta's kind of gain, and the number is wrong for Alpha. (c) Alpha receives 20 wine in total, not 20 extra. (d) Giving away cloth is the point — it buys wine more cheaply than making it."
    },
    {
      "q": "Trade at a price of 0.67 wine per cloth is mutually beneficial because:",
      "choices": [
        "It is below both countries' opportunity costs",
        "It lies between Alpha's cost of 0.5 and Beta's cost of 2 wine per cloth",
        "It is above both countries' opportunity costs",
        "It equals Alpha's opportunity cost exactly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A price between the two costs beats making the good at home for both sides. (a) Below both costs, the seller (Alpha) would lose. (c) Above both costs, the buyer (Beta) would lose. (d) At exactly 0.5, Alpha would be indifferent and gain nothing."
    },
    {
      "q": "A country that is better at making everything than its trading partner:",
      "choices": [
        "Has nothing to gain from trade",
        "Still gains from trade, because its time is scarce and comparative advantage still applies",
        "Should only export and never import",
        "Has a comparative advantage in every good"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Scarcity of time means even the best producer gains by specializing where its advantage is largest. (a) Confuses absolute with comparative advantage. (c) Imports are how it gets the goods it stops making. (d) No country has a comparative advantage in everything — opportunity costs always differ."
    },
    {
      "q": "The opportunity costs of the two goods in one country are reciprocals. If 1 cloth costs 0.5 wine, then 1 wine costs:",
      "choices": [
        "0.5 cloth",
        "2 cloth",
        "50 cloth",
        "0.25 cloth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 ÷ 0.5 = 2 cloth per wine. (a) Repeats the cloth cost instead of inverting it. (c) Uses the total wine figure. (d) Squares 0.5 instead of inverting it."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Trade Theory Quick Reference</h3>\n<p><strong>Core idea:</strong> Trade follows comparative advantage — who gives up least — not absolute advantage.</p>\n<p><strong>Opportunity cost:</strong> 1 unit of X costs (Y given up) ÷ (X gained). The two goods' costs are reciprocals.</p>\n<div class=\"formula\">Alpha: 100 cloth or 50 wine → 1 cloth = 0.5 wine; 1 wine = 2 cloth &nbsp;|&nbsp; Beta: 40 cloth or 80 wine → 1 cloth = 2 wine; 1 wine = 0.5 cloth</div>\n<p><strong>Pattern:</strong> Alpha specializes in cloth, Beta in wine. Trade 30 cloth for 20 wine: Alpha gains 5 wine, Beta gains 20 cloth.</p>\n<p><strong>Terms of trade:</strong> mutually beneficial only between the two opportunity costs — here between 0.5 and 2 wine per cloth (0.67 works).</p>\n<p><strong>Watch out:</strong> Do not flip the fraction — amount given up on top, amount gained underneath — and do not confuse being best (absolute) with being cheapest (comparative).</p>\n<p><strong>Self-check:</strong> Make up your own two-country table, compute both opportunity costs, and find one trade that leaves both better off.</p>\n"
};
