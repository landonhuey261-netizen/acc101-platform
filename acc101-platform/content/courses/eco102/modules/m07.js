// eco102 - Module 7: Monopolistic Competition & Oligopoly: Real-World Markets
module.exports = {
  "number": 7,
  "slug": "monopolistic-competition-and-oligopoly",
  "title": "Monopolistic Competition & Oligopoly: Real-World Markets",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain monopolistic competition and why free entry wipes out its profits in the long run.",
    "Explain oligopoly and why each firm's decision depends on its rivals.",
    "Solve a prisoner's dilemma payoff table and find the Nash equilibrium.",
    "Explain collusion, cartels, and why they usually break down.",
    "Compare all four market structures on firms, product, price control, and long-run profit."
  ],
  "sections": [
    {
      "heading": "Monopolistic Competition: Many Sellers, Different Products",
      "html": "<p><strong>Monopolistic competition</strong> is the market most of us shop in every day: many sellers, products that are similar but not identical, and free entry and exit. Restaurants, coffee shops, clothing brands, and hair salons all fit. Each seller has a little monopoly over its own version — your favorite café can charge a bit more than the one next door, because its coffee, location, and atmosphere are different — but not much more, because customers can walk next door.</p>\n<p>In the short run a successful café can earn a profit. In the long run, free entry does its work: new cafés open, each one takes a few customers, and every café's demand curve shifts left until price equals average total cost and economic profit is zero. The café survives, but it produces less than the cheapest possible output — that gap is called <strong>excess capacity</strong>. The trade-off is variety: we get dozens of different cafés instead of one cheapest possible cup of coffee, and most consumers think that is a good deal.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Monopolistic competition mixes both worlds: a downward-sloping demand curve like a monopoly (because the product is differentiated) and zero long-run economic profit like perfect competition (because entry is free).</div>"
    },
    {
      "heading": "Oligopoly: A Few Giants Watching Each Other",
      "html": "<p>An <strong>oligopoly</strong> is a market dominated by a few large firms: mobile phone networks, airlines on one route, car makers, breakfast cereals. The product may be identical or differentiated, but the defining feature is <strong>interdependence</strong> — each firm's profit depends on what its rivals do. If one airline cuts its fare, the others must decide whether to match it or lose their passengers.</p>\n<p>That is why oligopoly has no single tidy model. Sometimes firms compete fiercely on price; sometimes they compete on advertising and branding instead; sometimes they quietly match each other's prices (the <strong>kinked demand curve</strong> idea: rivals match price cuts but not price rises, so prices get stuck). The tool economists use to think about all of it is <strong>game theory</strong>: the study of strategic decisions, where the best move depends on the other player's move.</p>"
    },
    {
      "heading": "The Prisoner's Dilemma",
      "html": "<p>Two coffee chains, A and B, each earn $100 a day if both keep prices high. If A cuts its price while B keeps prices high, A earns $150 and B earns $40. If B cuts while A keeps prices high, the numbers reverse. If both cut, each earns $60. The payoff table (A's profit first) is: both high (100, 100); A cuts, B high (150, 40); A high, B cuts (40, 150); both cut (60, 60).</p>\n<p>Solve it from A's side. If B keeps prices high, A earns 100 by keeping high and 150 by cutting — cut. If B cuts, A earns 40 by keeping high and 60 by cutting — cut. Cutting is A's <strong>dominant strategy</strong>: best whatever B does. B reasons the same way. So both cut and each earns $60 — even though both would earn $100 if they could trust each other to keep prices high. That outcome, where neither player can do better by changing alone, is the <strong>Nash equilibrium</strong>. It explains price wars, advertising wars, and why competitors who would both be better off cooperating often cannot.</p>\n<div class=\"formula\">Nash equilibrium: each player's choice is the best reply to the other's choice &nbsp;|&nbsp; Both cut: (60, 60) beats both high (100, 100) for no one — yet it is the equilibrium</div>"
    },
    {
      "heading": "Collusion, Cartels, and Why They Break Down",
      "html": "<p>Firms in an oligopoly would love to act like a monopoly: agree on a high price and split the profit. An explicit agreement to do that is a <strong>cartel</strong>, and in most countries it is illegal. Even where it is not policed, cartels usually break down for the same reason as the prisoner's dilemma: each member earns more by secretly cheating. If the cartel price earns each member $100 and cheating earns the cheater $150 while the loyal members earn $40, someone cheats — and once one cheats, the rest follow.</p>\n<p>That is also why <strong>tacit collusion</strong> — no agreement, just everyone quietly matching prices — is fragile. It works best when there are few firms, the product is identical, and cheating is easy to spot. Add many firms, secret discounts, or a firm that is desperate for cash, and the quiet agreement falls apart. Antitrust authorities watch for the signs: identical prices that move together, and markets where a new entrant is somehow always blocked.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Monopolistic competition: many firms, differentiated products, free entry → short-run profit, long-run zero economic profit, excess capacity, lots of variety.</li>\n<li>Oligopoly: few firms, interdependence, no single model — price wars, advertising, kinked demand, game theory.</li>\n<li>Prisoner's dilemma payoffs: both high (100, 100); one cuts (150, 40); both cut (60, 60). Cutting is the dominant strategy; Nash equilibrium is both cut at $60 each.</li>\n<li>Cartels promise monopoly profits but break down because cheating pays: $150 beats $100 for the cheater.</li>\n<li>Four structures compared: perfect competition (many, identical, no price control, zero long-run profit); monopolistic competition (many, differentiated, some control, zero long-run profit); oligopoly (few, identical or differentiated, strong control, profit possible); monopoly (one, no substitutes, full control, profit persists).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the prisoner's dilemma outcome is the best for everyone. It is not — (100, 100) is better for both than (60, 60). The dilemma is exactly that rational individual choices lead to a worse outcome for both.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling every market with a few big firms a monopoly. An oligopoly has several firms that watch each other; a monopoly has one. The policy answers are different, so the label matters.</div>\n<p><strong>Ready-to-Work link:</strong> If you run a small business in a monopolistically competitive street — a café row, a row of salons — your edge is differentiation, not price. In an oligopoly, your edge is anticipating the rival's next move.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Monopolistic competition", "def": "A market with many sellers, differentiated products, and free entry and exit." },
    { "term": "Product differentiation", "def": "Making a product different from rivals' — by quality, branding, location, or service." },
    { "term": "Excess capacity", "def": "Producing below the cheapest output level, as monopolistically competitive firms do in the long run." },
    { "term": "Oligopoly", "def": "A market dominated by a few large firms whose decisions depend on each other." },
    { "term": "Interdependence", "def": "Each firm's profit depends on its rivals' choices, not just its own." },
    { "term": "Game theory", "def": "The study of strategic decisions where the best choice depends on what others do." },
    { "term": "Payoff table", "def": "A table showing each player's earnings for every combination of choices." },
    { "term": "Dominant strategy", "def": "A choice that is best no matter what the other player does." },
    { "term": "Nash equilibrium", "def": "An outcome where no player can do better by changing their choice alone." },
    { "term": "Prisoner's dilemma", "def": "A game where rational individual choices lead to a worse outcome for both players." },
    { "term": "Collusion", "def": "Firms cooperating to set prices or output instead of competing." },
    { "term": "Cartel", "def": "An explicit agreement among firms to fix prices or limit output." },
    { "term": "Tacit collusion", "def": "Cooperation without an explicit agreement, such as quietly matching prices." },
    { "term": "Kinked demand curve", "def": "The idea that rivals match price cuts but not price rises, making oligopoly prices sticky." },
    { "term": "Non-price competition", "def": "Competing on advertising, branding, quality, or service instead of price." },
    { "term": "Market concentration", "def": "How much of a market is controlled by its largest firms." }
  ],
  "video": {
    "title": "Game Theory and Oligopoly: Crash Course Economics #26",
    "embedUrl": "https://www.youtube.com/embed/PCcVODWm-oY",
    "note": "Crash Course covers the four market structures, oligopoly, and game theory — including the prisoner's dilemma. Watch it, then solve the coffee-chain payoff table in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A coffee shop in a street of 20 cafés earns a profit this year. Explain step by step what happens in the long run under monopolistic competition.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Profit attracts new cafés — entry is free. Step 2: Each new café takes some customers, so the original café's demand curve shifts left. Step 3: Price falls toward average total cost. Step 4: Entry stops when P = ATC and economic profit is <strong>$0</strong>. Step 5: The café survives with excess capacity — it could produce more cheaply, but variety is what customers pay for.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Two coffee chains: both keep prices high → (100, 100). A cuts, B high → (150, 40). A high, B cuts → (40, 150). Both cut → (60, 60). From A's point of view, show that cutting is the dominant strategy.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: If B keeps prices high, A earns 100 by keeping high and <strong>150</strong> by cutting — cut wins. Step 2: If B cuts, A earns 40 by keeping high and <strong>60</strong> by cutting — cut wins. Step 3: Cutting is better whatever B does, so it is A's <strong>dominant strategy</strong>. Step 4: B reasons identically, so both cut.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the Nash equilibrium of the coffee-chain game, and why is it not the best outcome for the two firms?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The Nash equilibrium is <strong>both cut, (60, 60)</strong> — neither firm can do better by changing alone (changing alone to high would earn 40). Step 2: It is not the best outcome: both keeping prices high would earn (100, 100), which is $40 more each. Step 3: But (100, 100) is not an equilibrium, because either firm gains $50 by cheating. Step 4: That gap is the prisoner's dilemma.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A cartel of three oil producers agrees to limit output so each earns $100 a day. One member secretly raises output and earns $150 while the others earn $40 each. Explain why the cartel is likely to break down.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Cheating pays the cheater $150 instead of $100 — a $50 gain. Step 2: The loyal members earn only $40, so they now have the same incentive to cheat. Step 3: Once one cheats, the others follow to avoid being the only loyal one. Step 4: Output rises, price falls, and the cartel collapses to the competitive-style outcome.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A town has 40 hair salons, each with its own style and prices, and new salons open every year. Which market structure is this, and what are its two key features?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: This is <strong>monopolistic competition</strong>. Step 2: Feature 1: many sellers with <strong>differentiated products</strong> — each salon's style and service differ, so each has a little pricing power. Step 3: Feature 2: <strong>free entry</strong> — new salons keep opening, which holds long-run economic profit at zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Complete the comparison: (a) Which structure has the most firms? (b) Which has a downward-sloping demand curve for the firm but zero long-run profit? (c) Which has one firm and persistent profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) <strong>Perfect competition</strong> has the most firms — and monopolistic competition is close behind. Step 2: (b) <strong>Monopolistic competition</strong>: the firm faces a downward-sloping curve because its product is differentiated, but free entry wipes out long-run profit. Step 3: (c) <strong>Monopoly</strong>: one firm protected by barriers keeps its profit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Monopolistic competition is best described as:",
      "choices": ["One firm, no substitutes", "Many firms selling differentiated products with free entry", "A few firms selling identical products", "Many firms selling identical products"],
      "answer": 1,
      "explanation": "Correct: (b). Many sellers, differentiated products, free entry. (a) is monopoly. (c) is oligopoly. (d) is perfect competition."
    },
    {
      "q": "In the long run, a monopolistically competitive firm earns:",
      "choices": ["Large monopoly profits", "Zero economic profit, because entry pushes price to ATC", "Negative profit forever", "Profit equal to its fixed costs"],
      "answer": 1,
      "explanation": "Correct: (b). Free entry shifts demand left until P = ATC. (a) Profits attract entrants who erase them. (c) Firms would exit rather than lose money forever. (d) Profit is revenue minus all costs, not fixed costs."
    },
    {
      "q": "Excess capacity means a monopolistically competitive firm:",
      "choices": ["Produces more than the cheapest output", "Produces less than the output that minimizes ATC", "Has too many workers", "Charges a price below MC"],
      "answer": 1,
      "explanation": "Correct: (b). Its demand curve touches ATC on the falling part, below minimum ATC. (a) reverses it. (c) is a staffing issue, not excess capacity. (d) Price is above MC in this structure."
    },
    {
      "q": "The defining feature of oligopoly is:",
      "choices": ["Free entry", "Identical products only", "Interdependence — each firm's profit depends on rivals' choices", "A flat demand curve for each firm"],
      "answer": 2,
      "explanation": "Correct: (c). A few firms watching each other is what makes oligopoly different. (a) is a feature of competition, not oligopoly. (b) Oligopoly products can be differentiated too. (d) is the competitive firm's curve."
    },
    {
      "q": "In the coffee-chain game, if B keeps prices high, A earns 100 by keeping high and 150 by cutting. A's best move is:",
      "choices": ["Keep prices high", "Cut prices", "Exit the market", "Raise prices further"],
      "answer": 1,
      "explanation": "Correct: (b). 150 beats 100. (a) earns less. (c) earns zero. (d) would lose customers to B."
    },
    {
      "q": "The Nash equilibrium of the coffee-chain game is:",
      "choices": ["Both keep prices high (100, 100)", "Both cut prices (60, 60)", "A cuts and B keeps high (150, 40)", "Both exit"],
      "answer": 1,
      "explanation": "Correct: (b). Both cut: neither can do better alone (switching to high alone earns 40). (a) is better for both but unstable — either gains $50 by cheating. (c) is not stable either — B would then cut too. (d) earns nothing."
    },
    {
      "q": "A cartel usually breaks down because:",
      "choices": ["Members earn too little by cooperating", "Each member gains by secretly cheating", "Demand becomes perfectly elastic", "The government always sets the price"],
      "answer": 1,
      "explanation": "Correct: (b). Cheating pays $150 against $100 for cooperating, so members cheat. (a) Cooperation pays well — that is the problem. (c) Demand elasticity does not break cartels. (d) Governments do not set most prices."
    },
    {
      "q": "Which market structure has few firms and the possibility of long-run profit?",
      "choices": ["Perfect competition", "Monopolistic competition", "Oligopoly", "None of them"],
      "answer": 2,
      "explanation": "Correct: (c). Barriers keep oligopoly profits alive, unlike the free-entry structures. (a) and (b) have free entry, so long-run profit is zero. (d) is wrong — oligopoly and monopoly both can keep profits."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Monopolistic Competition & Oligopoly: Quick Reference</h3>\n<p><strong>Monopolistic competition:</strong> Many firms, differentiated products, free entry. Short-run profit → long-run P = ATC, zero economic profit, excess capacity. The payoff is variety.</p>\n<p><strong>Oligopoly:</strong> Few firms, interdependence. Tools: game theory, kinked demand, advertising, collusion — and cartels that break down because cheating pays.</p>\n<p><strong>Prisoner's dilemma (coffee chains):</strong> Both high (100, 100) · one cuts (150, 40) · both cut (60, 60). Cutting is the dominant strategy; Nash equilibrium is both cut at $60 each — worse for both than (100, 100).</p>\n<p><strong>Four structures:</strong> Perfect competition (many, identical, no control, zero long-run profit) · monopolistic competition (many, differentiated, some control, zero long-run profit) · oligopoly (few, either, strong control, profit possible) · monopoly (one, no substitutes, full control, profit persists).</p>\n<p><strong>Watch out:</strong> The Nash equilibrium is stable, not best. A cartel's problem is not that cooperation pays badly — it is that cheating pays better.</p>\n<p><strong>Self-check:</strong> Two firms: both advertise → (50, 50); one advertises → (80, 20); neither advertises → (70, 70). Find the Nash equilibrium. (Check: advertising is dominant for both — if the rival advertises, 50 beats 20; if the rival does not, 80 beats 70 — so both advertise, (50, 50), though (70, 70) would be better for both.)</p>\n"
};
