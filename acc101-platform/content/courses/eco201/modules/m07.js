// eco201 - Module 7: Oligopoly & Game Theory: Strategy in Markets
module.exports = {
  "number": 7,
  "slug": "oligopoly-game-theory",
  "title": "Oligopoly & Game Theory: Strategy in Markets",
  "estTime": "3–4 hours",
  "objectives": [
    "Define an oligopoly and explain why each firm's choice depends on its rivals' choices.",
    "Read a payoff matrix, find best responses, and identify a Nash equilibrium.",
    "Explain dominant strategies and the prisoner's dilemma.",
    "Solve a Cournot duopoly with reaction functions and compare it with collusion.",
    "Compare Cournot, Stackelberg, and Bertrand outcomes with worked numbers."
  ],
  "sections": [
    {
      "heading": "Oligopoly: A Few Firms, Each Watching the Others",
      "html": "<p>An <strong>oligopoly</strong> is a market with a few large firms whose decisions affect each other — airlines, phone makers, car companies. Each firm knows that its price or output changes its rivals' profits, and its rivals will react. That mutual dependence is what makes oligopoly different from both competition (too many firms to watch) and monopoly (no rivals at all).</p>\n<p><strong>Game theory</strong> is the tool for thinking about mutual dependence. A game has <strong>players</strong> (the firms), <strong>strategies</strong> (their choices, like High price or Low price), and <strong>payoffs</strong> (the profit each player earns from each combination of choices). A <strong>payoff matrix</strong> lays out all four combinations for two players. Our worked example has two coffee chains, North Roast and South Bean, each choosing a High or Low price, with weekly profits in thousands of dollars:</p>\n<p>Both High: (90, 90) &nbsp;|&nbsp; North High, South Low: (50, 120) &nbsp;|&nbsp; North Low, South High: (120, 50) &nbsp;|&nbsp; Both Low: (70, 70)</p>\n<p>Both firms would love (High, High) at $90,000 each. But watch what each one is tempted to do — that temptation is the whole story of oligopoly.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In an oligopoly, the best choice depends on what the rival does. There is no single \"best price\" — only a best response to the rival's price.</div>"
    },
    {
      "heading": "Best Responses and Nash Equilibrium",
      "html": "<p>A <strong>best response</strong> is the strategy that gives a player the highest payoff given the other player's strategy. Check North Roast. If South Bean charges High, North earns 90 by charging High and 120 by charging Low — Low is the best response. If South charges Low, North earns 50 by charging High and 70 by charging Low — Low is again the best response. Low is North's <strong>dominant strategy</strong>: it is best no matter what South does. The game is symmetric, so Low is South's dominant strategy too.</p>\n<p>A <strong>Nash equilibrium</strong> is a pair of strategies where each player is playing a best response to the other — nobody wants to move alone. Here it is (Low, Low), paying (70, 70). Each firm earns less than the (90, 90) they could have had by both charging High, yet neither will switch alone: switching to High while the rival stays Low drops a firm's payoff from 70 to 50. That is the <strong>prisoner's dilemma</strong>: individually rational choices produce a collectively worse outcome. The firms would both prefer to cooperate, but each has an incentive to cheat on the deal — which is why cartels are unstable and why antitrust law exists.</p>\n<div class=\"formula\">Nash equilibrium: each player's strategy is a best response to the other's &nbsp;|&nbsp; Here: (Low, Low) = (70, 70)</div>"
    },
    {
      "heading": "Cournot Duopoly: Competing on Quantity",
      "html": "<p>When firms choose quantities, the standard model is <strong>Cournot competition</strong>. Each firm picks its output taking the rival's output as given, and the Nash equilibrium is where both firms are on their <strong>reaction functions</strong> — each firm's best output given the other's output. Work it with market demand P = 90 − Q (where Q = q<sub>1</sub> + q<sub>2</sub>) and marginal cost MC = $30 for both firms.</p>\n<p>Step 1: Firm 1's residual demand is P = 90 − q<sub>1</sub> − q<sub>2</sub>, so its marginal revenue is MR<sub>1</sub> = 90 − 2q<sub>1</sub> − q<sub>2</sub>. Setting MR<sub>1</sub> = MC gives 90 − 2q<sub>1</sub> − q<sub>2</sub> = 30, so firm 1's reaction function is q<sub>1</sub> = (60 − q<sub>2</sub>) ÷ 2. Step 2: by symmetry, q<sub>2</sub> = (60 − q<sub>1</sub>) ÷ 2. Step 3: solve together: substituting gives q<sub>1</sub> = (60 − (60 − q<sub>1</sub>)/2) ÷ 2, which solves to q<sub>1</sub> = 20 and q<sub>2</sub> = 20. Step 4: total output Q = 40, price P = 90 − 40 = $50, and each firm's profit is (50 − 30) × 20 = $400.</p>\n<p>Compare with collusion: the two firms acting as one monopolist would set MR = MC on total demand: 90 − 2Q = 30 gives Q = 30 and P = $60, for total profit (60 − 30) × 30 = $900, or $450 each — more than the $400 Cournot profit. But collusion is not a Nash equilibrium: if firm 2 sticks to 15 units, firm 1's reaction function says to produce (60 − 15) ÷ 2 = 22.5 units and earn more. The temptation to cheat is exactly the prisoner's dilemma again.</p>\n<div class=\"formula\">Cournot reaction: q<sub>1</sub> = (60 − q<sub>2</sub>) ÷ 2 &nbsp;|&nbsp; Equilibrium: q<sub>1</sub> = q<sub>2</sub> = 20, P = $50, profit $400 each</div>"
    },
    {
      "heading": "Stackelberg and Bertrand: Who Moves First, and What They Compete On",
      "html": "<p>Change the timing and the outcome changes. In the <strong>Stackelberg model</strong>, one firm (the leader) chooses output first and the follower reacts. The leader knows the follower's reaction function, q<sub>2</sub> = (60 − q<sub>1</sub>) ÷ 2, and plugs it into the price: P = 90 − q<sub>1</sub> − (60 − q<sub>1</sub>)/2 = 60 − q<sub>1</sub>/2. The leader's marginal revenue is 60 − q<sub>1</sub>; setting it equal to MC = 30 gives q<sub>1</sub> = 30. The follower then produces q<sub>2</sub> = (60 − 30) ÷ 2 = 15. Total output is 45, price is 90 − 45 = $45, leader profit is (45 − 30) × 30 = $450, and follower profit is (45 − 30) × 15 = $225. Moving first pays: the leader earns more than in Cournot ($450 vs. $400) and the follower earns less ($225 vs. $400).</p>\n<p>In the <strong>Bertrand model</strong>, firms compete on price instead of quantity, selling identical products. Each firm can steal the whole market by undercutting the rival by a cent, so the only Nash equilibrium is price equal to marginal cost: P = $30 here, with zero profit — the competitive outcome, even with just two firms. That is the <strong>Bertrand paradox</strong>. In practice, products differ, capacity is limited, or firms compete repeatedly, so real oligopoly prices sit between the Bertrand and collusive extremes. <strong>Repeated games</strong> help explain why: when firms meet every week, cheating today can be punished tomorrow, so cooperation can survive — the logic behind tacit collusion and price-matching guarantees.</p>\n<div class=\"formula\">Stackelberg: leader q<sub>1</sub> = 30, follower q<sub>2</sub> = 15, P = $45, profits $450 and $225 &nbsp;|&nbsp; Bertrand: P = MC = $30</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Oligopoly means mutual dependence: each firm's best choice depends on its rivals' choices.</li>\n<li>Payoff table: (High, High) = (90, 90), (Low, Low) = (70, 70), undercutting pays 120. Low is a dominant strategy for both; Nash equilibrium is (Low, Low) — a prisoner's dilemma.</li>\n<li>Cournot (P = 90 − Q, MC = $30): each firm produces 20, price $50, profit $400 each. Collusion would give 30 total units, price $60, $450 each — but it is not a Nash equilibrium.</li>\n<li>Stackelberg: leader 30 units ($450 profit), follower 15 units ($225), price $45. Bertrand: price = MC = $30.</li>\n<li>Repeated interaction can sustain cooperation through the threat of future punishment.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling (High, High) the Nash equilibrium because both firms prefer it. A Nash equilibrium is about best responses, not preferences: each firm would unilaterally switch to Low and gain (120 instead of 90), so (High, High) is not an equilibrium.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking Cournot firms split the monopoly output. They do not: Cournot total output (40) exceeds the monopoly output (30) because each firm ignores the harm its output does to the rival's price.</div>\n<p><strong>Ready-to-Work link:</strong> The lab for this course is this module in action: you will work the North Roast / South Bean payoff table decision by decision, finding best responses, dominant strategies, and the Nash equilibrium yourself.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Oligopoly", "def": "A market with a few large firms whose decisions affect each other." },
    { "term": "Game theory", "def": "The study of strategic interaction: how players choose when each player's payoff depends on the others' choices." },
    { "term": "Players", "def": "The decision-makers in a game — here, the firms." },
    { "term": "Strategies", "def": "The choices available to a player, such as High price or Low price." },
    { "term": "Payoffs", "def": "What each player earns from each combination of strategies." },
    { "term": "Payoff matrix", "def": "A table showing every player's payoff for every combination of strategies." },
    { "term": "Best response", "def": "The strategy that gives a player the highest payoff given the other player's strategy." },
    { "term": "Dominant strategy", "def": "A strategy that is best for a player no matter what the other player does." },
    { "term": "Nash equilibrium", "def": "A combination of strategies where each player is playing a best response to the others — nobody wants to move alone." },
    { "term": "Prisoner's dilemma", "def": "A game where individually rational choices lead to a worse outcome for everyone than cooperation would." },
    { "term": "Cournot competition", "def": "Oligopoly competition on quantity: each firm chooses output taking the rival's output as given." },
    { "term": "Reaction function", "def": "A firm's best output as a function of its rival's output." },
    { "term": "Stackelberg model", "def": "Oligopoly where one firm (the leader) chooses output first and the other (the follower) reacts." },
    { "term": "Bertrand competition", "def": "Oligopoly competition on price with identical products; the Nash equilibrium is price equal to marginal cost." },
    { "term": "Tacit collusion", "def": "Cooperation without an explicit agreement, sustained by repeated interaction and the threat of retaliation." },
    { "term": "Cartel", "def": "A group of firms that explicitly agree to limit output and raise prices; unstable because each member wants to cheat." }
  ],
  "video": {
    "title": "Game Theory and Oligopoly: Crash Course Economics #26",
    "embedUrl": "https://www.youtube.com/embed/PCcVODWm-oY",
    "note": "Crash Course explains game theory and oligopoly with the prisoner's dilemma and payoff matrices — the same tools this module uses on North Roast and South Bean. Watch it, then find the (Low, Low) Nash equilibrium in the module's table yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In the North Roast / South Bean game, payoffs are: both High (90, 90); North High, South Low (50, 120); North Low, South High (120, 50); both Low (70, 70). Find North's best response to South charging High, and to South charging Low.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: If South charges High, North earns 90 (High) or 120 (Low) — best response is Low. Step 2: If South charges Low, North earns 50 (High) or 70 (Low) — best response is Low. Step 3: Low is best in both cases, so Low is North's dominant strategy.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same game, (a) what is the Nash equilibrium? (b) What is each firm's payoff there? (c) Is there an outcome both firms prefer? Why don't they choose it?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Low is dominant for both firms, so the Nash equilibrium is (Low, Low). Step 2: Each firm earns 70 ($70,000). Step 3: Both prefer (High, High) at 90 each. Step 4: They don't choose it because each firm can gain by cheating: if South charges High, North earns 120 by charging Low instead of 90 by charging High. The cooperative outcome is not a Nash equilibrium.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Cournot duopoly: demand P = 90 − Q, MC = $30 for both firms. (a) Write firm 1's reaction function. (b) Find the Cournot equilibrium outputs, price, and each firm's profit.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MR1 = 90 − 2q1 − q2; set equal to MC 30: q1 = (60 − q2) ÷ 2. Step 2: By symmetry q2 = (60 − q1) ÷ 2; solving together gives q1 = q2 = 20. Step 3: Total Q = 40, P = 90 − 40 = $50. Step 4: Each firm's profit = (50 − 30) × 20 = $400.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In the same Cournot market, the firms collude and act as a single monopolist. (a) What total output and price result? (b) What is total profit and each firm's share? (c) Show that one firm would want to cheat.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Monopoly: MR = 90 − 2Q = 30 gives Q = 30, P = $60. Step 2: Total profit = (60 − 30) × 30 = $900, or $450 each. Step 3: If firm 2 keeps 15 units, firm 1's reaction function says q1 = (60 − 15) ÷ 2 = 22.5, earning (P − 30) × 22.5 where P = 90 − 37.5 = $52.50, so profit = 22.5 × 22.5 = $506.25 — more than the $450 collusive share. Cheating pays.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Stackelberg duopoly with the same demand and costs, firm 1 as leader. (a) Find the leader's output, the follower's output, the price, and each firm's profit. (b) Who gains from moving first, and by how much versus Cournot?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Follower's reaction: q2 = (60 − q1) ÷ 2. Step 2: Leader's price: P = 90 − q1 − (60 − q1)/2 = 60 − q1/2; MR1 = 60 − q1 = 30 gives q1 = 30. Step 3: q2 = (60 − 30) ÷ 2 = 15; total Q = 45, P = $45. Step 4: Leader profit = (45 − 30) × 30 = $450; follower profit = (45 − 30) × 15 = $225. Step 5: The leader gains $50 over Cournot ($450 vs. $400); the follower loses $175 ($225 vs. $400).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two firms sell identical products and compete on price (Bertrand) with MC = $30. (a) What is the Nash equilibrium price? (b) What is each firm's profit? (c) In one sentence, why does price fall all the way to marginal cost?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The Nash equilibrium price is $30, equal to marginal cost. Step 2: Each firm's profit is zero. Step 3: Any price above $30 invites the rival to undercut by a cent and take the whole market, so undercutting continues until no profit is left to steal.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An oligopoly is a market with:",
      "choices": [
        "One seller",
        "Many small sellers of identical products",
        "A few large firms whose decisions affect each other",
        "One buyer and many sellers"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Mutual dependence is the defining feature of oligopoly. (a) is a monopoly. (b) is perfect competition. (d) is a monopsony, a single buyer."
    },
    {
      "q": "In the North Roast / South Bean game, North's best response when South charges High is:",
      "choices": [
        "High, earning 90",
        "Low, earning 120",
        "High, earning 50",
        "Low, earning 70"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Against High, North earns 90 from High and 120 from Low, so Low is best. (a) is the worse option against High. (c) and (d) are the payoffs against Low, not High."
    },
    {
      "q": "The Nash equilibrium of the game is:",
      "choices": [
        "(High, High) paying (90, 90)",
        "(High, Low) paying (50, 120)",
        "(Low, High) paying (120, 50)",
        "(Low, Low) paying (70, 70)"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Low is a dominant strategy for both, so (Low, Low) is the Nash equilibrium. (a) Both prefer it, but each would cheat and earn 120. (b) and (c) are not equilibria — the High player would switch to Low and earn 70 instead of 50."
    },
    {
      "q": "The game is a prisoner's dilemma because:",
      "choices": [
        "Both firms earn zero profit",
        "Each firm's dominant strategy leads to an outcome both would rather avoid",
        "There is no Nash equilibrium",
        "The firms never meet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Individually rational play gives (70, 70) although (90, 90) is available by cooperation. (a) Profits are positive (70 each). (c) There is a Nash equilibrium: (Low, Low). (d) The dilemma is about incentives, not about meeting."
    },
    {
      "q": "In the Cournot duopoly (P = 90 − Q, MC = $30), each firm's equilibrium output and profit are:",
      "choices": [
        "15 units and $450",
        "20 units and $400",
        "30 units and $450",
        "40 units and $0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reaction functions q = (60 − rival) ÷ 2 solve to q1 = q2 = 20; P = $50; profit = (50 − 30) × 20 = $400. (a) is the collusive output per firm. (c) is the Stackelberg leader's output and profit. (d) is the total Cournot output with the wrong profit."
    },
    {
      "q": "If the Cournot firms collude, total profit is $900. The collusion is not a Nash equilibrium because:",
      "choices": [
        "Each firm earns less than under Cournot",
        "A firm can earn more by producing 22.5 units while the other keeps 15",
        "The price falls below marginal cost",
        "The government bans all cooperation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cheating earns $506.25 versus the $450 collusive share, so the deal unravels. (a) Collusion earns more ($450 each vs. $400). (c) The collusive price is $60, well above MC of $30. (d) The instability is in the incentives, not in the law."
    },
    {
      "q": "In the Stackelberg model with firm 1 as leader, the outputs and profits are:",
      "choices": [
        "Leader 20 ($400), follower 20 ($400)",
        "Leader 30 ($450), follower 15 ($225)",
        "Leader 15 ($225), follower 30 ($450)",
        "Leader 40 ($0), follower 0 ($0)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The leader produces 30, the follower reacts with 15, price is $45, and profits are $450 and $225. (a) is the Cournot outcome. (c) swaps leader and follower. (d) is not an equilibrium of this model."
    },
    {
      "q": "Under Bertrand competition with identical products and MC = $30, the Nash equilibrium price is:",
      "choices": [
        "$60",
        "$50",
        "$45",
        "$30"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Undercutting continues until price equals marginal cost. (a) is the collusive price. (b) is the Cournot price. (c) is the Stackelberg price."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Oligopoly & Game Theory Quick Reference</h3>\n<p><strong>Core idea:</strong> With a few firms, each firm's best choice depends on its rivals'. Find best responses, and the Nash equilibrium is where every player is best-responding.</p>\n<p><strong>Payoff table (North Roast, South Bean):</strong> (High, High) = (90, 90); (High, Low) = (50, 120); (Low, High) = (120, 50); (Low, Low) = (70, 70). Low is dominant for both; Nash is (Low, Low) — a prisoner's dilemma.</p>\n<div class=\"formula\">Cournot: q<sub>1</sub> = (60 − q<sub>2</sub>) ÷ 2 → q<sub>1</sub> = q<sub>2</sub> = 20, P = $50, profit $400 each</div>\n<p><strong>Collusion:</strong> Q = 30, P = $60, $450 each — but cheating pays $506.25, so it unravels. <strong>Stackelberg:</strong> leader 30 ($450), follower 15 ($225), P = $45. <strong>Bertrand:</strong> P = MC = $30.</p>\n<p><strong>Watch out:</strong> The outcome both firms prefer is not the Nash equilibrium — check best responses, not preferences.</p>\n<p><strong>Self-check:</strong> If South charges Low, what is North's best response and payoff? (Answer: Low, 70.)</p>\n"
};
