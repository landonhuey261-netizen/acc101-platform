// eco201 - Module 9: General Equilibrium & Welfare Economics
module.exports = {
  "number": 9,
  "slug": "general-equilibrium-welfare-economics",
  "title": "General Equilibrium & Welfare Economics",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish partial equilibrium from general equilibrium and explain why markets are linked.",
    "Use an Edgeworth box to find Pareto-efficient allocations and the contract curve.",
    "State the First and Second Fundamental Theorems of Welfare Economics and their conditions.",
    "Explain efficiency in production and in the product mix with MRTS and MRT.",
    "Discuss the efficiency–equity trade-off and the limits of the welfare theorems."
  ],
  "sections": [
    {
      "heading": "From One Market to All Markets",
      "html": "<p>So far we have studied one market at a time — <strong>partial equilibrium</strong>. But markets are linked: a tax on coffee shifts tea demand, a wage rise shifts the cost of everything, and a new technology in steel changes car prices. <strong>General equilibrium</strong> studies all markets at once, asking whether there is a set of prices that clears every market simultaneously. The answer, first proved in the 1950s, is yes under reasonable conditions: a competitive equilibrium exists. The deeper question is whether that equilibrium is any good — and that is welfare economics.</p>\n<p>The simplest general-equilibrium model is a <strong>pure exchange economy</strong>: two people, Ana and Ben, and two goods, apples (X) and oranges (Y), with fixed total amounts — 60 apples and 40 oranges — to be divided between them. There is no production yet, just allocation. The question is which divisions are efficient, and whether trading can get Ana and Ben there.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Partial equilibrium is a zoomed-in photo; general equilibrium is the whole picture. A policy that looks good in one market can look different once every linked market adjusts.</div>"
    },
    {
      "heading": "The Edgeworth Box and Pareto Efficiency",
      "html": "<p>An <strong>Edgeworth box</strong> draws the exchange economy as a rectangle 60 apples wide and 40 oranges tall. Ana's origin is the bottom-left corner; Ben's is the top-right. Any point in the box is an allocation: Ana's bundle is measured from her corner, Ben's from his, and the two always add up to the totals. Ana's indifference curves bow toward her corner; Ben's bow toward his. Where an Ana curve and a Ben curve cross, the allocation is inefficient — the lens between the curves contains allocations both prefer. Where the curves touch (are tangent), there is no lens: no trade can make one better off without making the other worse off. That is a <strong>Pareto-efficient</strong> allocation.</p>\n<p>Work it with numbers. Suppose Ana and Ben each hold (30, 20) — 30 apples and 20 oranges each. Ana's MRS is 2 (she would give 2 apples for 1 orange) and Ben's MRS is 1 (he would give 1 apple for 1 orange). They are not equal, so the allocation is not Pareto efficient. Trade at a rate of 1.5 apples per orange: Ana gives 1.5 apples and gets 1 orange — she values an orange at 2 apples, so she gains the equivalent of 0.5 apples. Ben gives 1 orange and gets 1.5 apples — he values an orange at 1 apple, so he also gains 0.5 apples. Both are better off, and they keep trading until their MRS values are equal. The set of all tangency points is the <strong>contract curve</strong>: every Pareto-efficient allocation lies on it, and the market's job is to land somewhere on it.</p>\n<div class=\"formula\">Pareto efficiency in exchange: MRS<sub>A</sub> = MRS<sub>B</sub> &nbsp;|&nbsp; Here: trade at 1.5 apples per orange until MRS values meet</div>"
    },
    {
      "heading": "The Two Fundamental Theorems of Welfare Economics",
      "html": "<p>The <strong>First Fundamental Theorem</strong> says that any competitive equilibrium is Pareto efficient. It is the formal version of Adam Smith's invisible hand: people chasing their own interests, trading at market prices, end up at an allocation nobody can improve without hurting someone. The proof runs through the tangency conditions: in equilibrium, every consumer's MRS equals the price ratio, so all consumers' MRS values are equal; every firm's MRTS equals the input price ratio, so all firms' MRTS values are equal; and the <strong>marginal rate of transformation</strong> (MRT) — how much Y the economy must give up to make one more X — equals the price ratio too. Every margin lines up, so no improvement is left on the table.</p>\n<p>The <strong>Second Fundamental Theorem</strong> says the reverse: any Pareto-efficient allocation can be reached as a competitive equilibrium, provided the government first redistributes endowments (lump-sum transfers) appropriately. Together the theorems separate efficiency from equity: markets deliver efficiency, and society can in principle choose which efficient point it wants by redistributing wealth first and then letting markets work. The catch is in the conditions — the theorems need complete markets, no externalities, no market power, and perfect information. Modules 6, 10, and 11 are a catalog of what happens when those conditions fail.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The First Theorem says markets are efficient. The Second says any efficient outcome is reachable through markets plus redistribution. Neither says the market outcome is fair — efficiency and fairness are different questions.</div>"
    },
    {
      "heading": "Efficiency in Production and in the Product Mix",
      "html": "<p>Efficiency has three margins, not one. <strong>Efficiency in exchange</strong> is MRS<sub>A</sub> = MRS<sub>B</sub>, from the last section. <strong>Efficiency in production</strong> requires that the marginal rate of technical substitution be equal across firms: MRTS must be the same in every firm, or output could be rearranged to produce more with the same inputs. In a competitive equilibrium this holds because every firm sets MRTS equal to the same input price ratio, w ÷ r.</p>\n<p><strong>Efficiency in the product mix</strong> requires that the marginal rate of transformation equal consumers' marginal rate of substitution: MRT = MRS. The MRT is the slope of the <strong>production possibilities frontier</strong> (PPF): if producing one more apple costs 2 oranges of forgone production, MRT = 2. If consumers are willing to give up only 1 orange for an apple (MRS = 1), the economy is making too many apples — shifting resources toward oranges would make everyone better off. In competitive equilibrium, MRT equals the price ratio and MRS equals the price ratio, so MRT = MRS and the product mix is right.</p>\n<div class=\"formula\">Full efficiency: MRS<sub>A</sub> = MRS<sub>B</sub> = MRT &nbsp;and&nbsp; MRTS equal across all firms</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>General equilibrium studies all markets at once; partial equilibrium studies one market holding the rest fixed.</li>\n<li>Edgeworth box (60 apples, 40 oranges): at (30, 20) each with MRS 2 vs. 1, trading at 1.5 apples per orange makes both better off by 0.5 apples each.</li>\n<li>Pareto efficiency: no one can be made better off without making someone worse off. The contract curve is the set of efficient allocations.</li>\n<li>First Theorem: competitive equilibrium is Pareto efficient. Second Theorem: any efficient allocation can be a competitive equilibrium after lump-sum redistribution.</li>\n<li>Full efficiency needs MRS equal across consumers, MRTS equal across firms, and MRT = MRS for the product mix.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a Pareto-efficient allocation is fair. Pareto efficiency says nothing about distribution — an allocation where Ana gets everything and Ben gets nothing can be Pareto efficient, because any transfer to Ben would make Ana worse off.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the First Theorem proves real markets are efficient. It proves competitive equilibria are efficient under strict conditions — complete markets, no externalities, no market power, perfect information. Real markets fail those conditions often, which is why Modules 10 and 11 exist.</div>\n<p><strong>Ready-to-Work link:</strong> The next two modules are the failure modes. Module 10 breaks the perfect-information condition; Module 11 breaks the no-externality condition. Each failure has its own fix — and its own new trade-off.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Partial equilibrium", "def": "Analysis of one market at a time, holding conditions in other markets fixed." },
    { "term": "General equilibrium", "def": "Analysis of all markets simultaneously, finding prices that clear every market at once." },
    { "term": "Pure exchange economy", "def": "A model with fixed total quantities of goods to be divided among consumers, with no production." },
    { "term": "Edgeworth box", "def": "A rectangle showing every possible allocation of two goods between two people." },
    { "term": "Pareto efficiency", "def": "An allocation where no one can be made better off without making someone else worse off." },
    { "term": "Pareto improvement", "def": "A change that makes at least one person better off and nobody worse off." },
    { "term": "Contract curve", "def": "The set of Pareto-efficient allocations in an Edgeworth box, where indifference curves are tangent." },
    { "term": "First Fundamental Theorem of Welfare Economics", "def": "Any competitive equilibrium is Pareto efficient." },
    { "term": "Second Fundamental Theorem of Welfare Economics", "def": "Any Pareto-efficient allocation can be a competitive equilibrium after lump-sum redistribution of endowments." },
    { "term": "Marginal rate of transformation (MRT)", "def": "How much of good Y the economy must give up to produce one more unit of good X — the slope of the PPF." },
    { "term": "Production possibilities frontier (PPF)", "def": "The combinations of two goods the economy can produce with its resources." },
    { "term": "Efficiency in exchange", "def": "MRS equal across all consumers." },
    { "term": "Efficiency in production", "def": "MRTS equal across all firms." },
    { "term": "Efficiency in the product mix", "def": "MRT equal to consumers' MRS." },
    { "term": "Lump-sum transfer", "def": "A redistribution of wealth that does not depend on behavior, so it does not distort choices." },
    { "term": "Social welfare function", "def": "A rule for ranking allocations that weighs both efficiency and equity, such as the sum of utilities." }
  ],
  "video": {
    "title": "(M8E1) [Microeconomics] General Equilibrium: Introduction to Pure Exchange Economy",
    "embedUrl": "https://www.youtube.com/embed/oMjhRcXl5NE",
    "note": "Selcuk Ozyurt introduces the pure exchange economy — the same two-person, two-good setup this module draws as an Edgeworth box. Watch it, then rework the (30, 20) allocation and the 1.5-apples-per-orange trade yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Ana and Ben share 60 apples and 40 oranges. Each holds (30, 20). Ana's MRS is 2 apples per orange; Ben's is 1. (a) Is this allocation Pareto efficient? (b) At what exchange rate could they both gain? (c) Show each person's gain from trading 1 orange at that rate.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) No — MRS values differ (2 vs. 1), so a mutually beneficial trade exists. Step 2: (b) Any rate between 1 and 2 apples per orange works; use 1.5. Step 3: (c) Ana gives 1.5 apples for 1 orange; she values the orange at 2 apples, so she gains 0.5 apples' worth. Ben gives 1 orange for 1.5 apples; he values the orange at 1 apple, so he gains 0.5 apples' worth. Both gain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Suppose Ana's MRS is 3 and Ben's MRS is 3 at some allocation. (a) Is it Pareto efficient in exchange? (b) Does that mean the allocation is fair? Explain.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Yes — equal MRS values mean the indifference curves are tangent, so no mutually beneficial trade remains. Step 2: (b) No — Pareto efficiency says nothing about fairness. Ana could hold 59 apples and 39 oranges while Ben holds 1 and 1, and it could still be Pareto efficient if their MRS values match there.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In your own words, state the First Fundamental Theorem of Welfare Economics and name the three margin conditions that make it work.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The First Theorem says any competitive equilibrium is Pareto efficient. Step 2: It works because (i) every consumer sets MRS equal to the same price ratio, so MRS is equal across consumers; (ii) every firm sets MRTS equal to the same input price ratio, so MRTS is equal across firms; (iii) MRT equals the price ratio, so MRT = MRS and the product mix is right. Step 3: With every margin lined up, no Pareto improvement remains.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A society wants the Pareto-efficient allocation where Ana gets (50, 30) and Ben gets (10, 10). (a) What does the Second Fundamental Theorem say about reaching it? (b) What must the government do first, and why must the transfer be lump-sum?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The Second Theorem says any Pareto-efficient allocation can be reached as a competitive equilibrium after redistributing endowments. Step 2: (b) The government must first give Ana and Ben the endowments (50, 30) and (10, 10) — or the wealth to buy them — and then let markets trade to the tangency. Step 3: The transfer must be lump-sum (not based on income or behavior) so it does not distort prices and choices; a distorting tax could break the efficiency the market would deliver.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An economy's MRT is 2 oranges per apple (making one more apple costs 2 oranges), but consumers' MRS is 1 orange per apple. (a) Is the product mix efficient? (b) Which good is overproduced, and what should change?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) No — MRT (2) does not equal MRS (1). Step 2: (b) Apples are overproduced: each apple costs 2 oranges to make but consumers value it at only 1 orange. Step 3: Shift resources from apples to oranges until MRT falls to 1 and equals MRS.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two firms have MRTS of 4 and 2 (units of capital per unit of labor). (a) Is production efficient? (b) Describe a rearrangement that raises total output, and explain why it works.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) No — MRTS differs across firms, so production is inefficient. Step 2: (b) Move 1 unit of labor from the firm with MRTS 2 to the firm with MRTS 4, and move 3 units of capital the other way: the first firm gains 1 worker (worth 4 capital) and loses 3 capital, a net gain; the second firm loses 1 worker (worth 2 capital) and gains 3 capital, also a net gain. Step 3: Total output rises because labor is more valuable where its MRTS is higher — equalizing MRTS removes the free lunch.</p>"
    }
  ],
  "quiz": [
    {
      "q": "General equilibrium analysis differs from partial equilibrium because it:",
      "choices": [
        "Studies one market in isolation",
        "Studies all markets at once, with prices clearing every market",
        "Ignores prices entirely",
        "Only applies to monopolies"
      ],
      "answer": 1,
      "explanation": "Correct: (b). General equilibrium accounts for links between markets. (a) describes partial equilibrium. (c) Prices are the center of general equilibrium. (d) It applies to competitive markets first and foremost."
    },
    {
      "q": "An allocation is Pareto efficient when:",
      "choices": [
        "Everyone has the same amount of everything",
        "No one can be made better off without making someone else worse off",
        "Total output is maximized regardless of distribution",
        "The government has redistributed everything"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is the definition of Pareto efficiency. (a) Equality is not required — very unequal allocations can be Pareto efficient. (c) Maximizing output is not the same as efficiency in allocation. (d) Redistribution is a policy tool, not the definition."
    },
    {
      "q": "Ana's MRS is 2 and Ben's MRS is 1. Trading at 1.5 apples per orange:",
      "choices": [
        "Makes Ana worse off and Ben better off",
        "Makes both better off by 0.5 apples' worth each",
        "Makes both worse off",
        "Changes nothing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ana values an orange at 2 apples and pays 1.5 (gains 0.5); Ben values an orange at 1 apple and receives 1.5 (gains 0.5). (a) reverses Ana's outcome. (c) contradicts the MRS gap, which guarantees a gain. (d) A trade at a rate between the two MRS values always helps both."
    },
    {
      "q": "The First Fundamental Theorem of Welfare Economics says:",
      "choices": [
        "Any competitive equilibrium is Pareto efficient",
        "Any Pareto-efficient allocation is fair",
        "Governments should set all prices",
        "Monopolies are Pareto efficient"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Competitive equilibria are Pareto efficient under the theorem's conditions. (b) Efficiency is not fairness. (c) The theorem is about markets, not government pricing. (d) Monopolies violate the theorem's conditions and are not efficient."
    },
    {
      "q": "The Second Fundamental Theorem says any Pareto-efficient allocation can be reached as a competitive equilibrium if:",
      "choices": [
        "The government sets prices directly",
        "Endowments are first redistributed with lump-sum transfers",
        "All firms are monopolies",
        "Trade is banned"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Redistribute endowments first, then let markets work. (a) Price-setting breaks the mechanism. (c) Monopoly power breaks efficiency. (d) Banning trade prevents reaching any allocation."
    },
    {
      "q": "Efficiency in production requires MRTS to be:",
      "choices": [
        "Zero in every firm",
        "Equal across all firms",
        "Higher in large firms than in small firms",
        "Equal to the price of output"
      ],
      "answer": 1,
      "explanation": "Correct: (b). If MRTS differs, moving inputs between firms raises total output. (a) MRTS of zero would mean labor is worthless. (c) Size does not set MRTS. (d) MRTS equals the input price ratio (w/r), not the output price."
    },
    {
      "q": "MRT is 2 oranges per apple and consumers' MRS is 1 orange per apple. The economy should:",
      "choices": [
        "Produce more apples",
        "Produce more oranges and fewer apples",
        "Stop producing both goods",
        "Keep the product mix unchanged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Apples cost 2 oranges to make but are valued at 1 orange, so resources should shift toward oranges until MRT = MRS = 1. (a) would make the mismatch worse. (c) is not an improvement. (d) leaves a Pareto improvement on the table."
    },
    {
      "q": "An allocation where Ana gets everything and Ben gets nothing can be Pareto efficient because:",
      "choices": [
        "It is fair",
        "Any transfer to Ben would make Ana worse off",
        "Ben does not want anything",
        "Total output is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pareto efficiency only asks whether someone can gain without another losing — with Ben at zero, giving him anything takes from Ana. (a) Efficiency is not fairness. (c) Ben would want goods if offered. (d) Output need not be zero."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — General Equilibrium & Welfare Quick Reference</h3>\n<p><strong>Core idea:</strong> Competitive markets line up every margin — MRS, MRTS, and MRT — so the equilibrium is Pareto efficient. Which efficient point society gets is a separate, equity question.</p>\n<p><strong>Edgeworth anchor:</strong> 60 apples, 40 oranges; at (30, 20) each with MRS 2 vs. 1, trade at 1.5 apples per orange gains each 0.5 apples' worth. Efficiency when MRS<sub>A</sub> = MRS<sub>B</sub>.</p>\n<div class=\"formula\">Full efficiency: MRS<sub>A</sub> = MRS<sub>B</sub> = MRT &nbsp;|&nbsp; MRTS equal across firms</div>\n<p><strong>First Theorem:</strong> competitive equilibrium is Pareto efficient. <strong>Second Theorem:</strong> any efficient allocation is reachable with lump-sum redistribution first, then markets.</p>\n<p><strong>Watch out:</strong> Pareto efficient does not mean fair — Ana holding everything can be efficient. And the theorems need complete markets, no externalities, no market power, perfect information.</p>\n<p><strong>Self-check:</strong> If MRT = 3 and MRS = 2, which good is overproduced? (Answer: the good on the MRT's numerator side — too much of the good that costs 3 to make but is valued at 2.)</p>\n"
};
