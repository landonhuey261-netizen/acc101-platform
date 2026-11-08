// Economics Capstone — Module 11: Comprehensive Review I: Microeconomics
module.exports = {
  "number": 11,
  "slug": "comprehensive-review-microeconomics",
  "title": "Comprehensive Review I: Microeconomics",
  "estTime": "3–4 hours",
  "objectives": [
    "Recompute equilibrium price and quantity from supply and demand, and predict the effect of a shift.",
    "Compute price elasticity of demand and use it to predict revenue.",
    "Compare market structures (perfect competition, monopoly, oligopoly, monopolistic competition) by price, output, and efficiency.",
    "Apply externality analysis: private vs. social cost, and the Pigouvian fix.",
    "Drill the microeconomics core under exam conditions (assignment = exam-style drills, not a paper section)."
  ],
  "sections": [
    {
      "heading": "Supply, Demand, and Equilibrium — The Engine",
      "html": "<p>Everything in microeconomics runs on one machine: supply and demand. Demand slopes down (higher price, lower quantity demanded); supply slopes up (higher price, higher quantity supplied); equilibrium is where they cross, and the market clears there. A shift in demand (income, tastes, substitutes) moves the equilibrium; a shift in supply (input costs, technology, taxes) does the same; a movement along a curve is a change in price, not a shift. The worked example for this module: demand Qd = 100 − 2P and supply Qs = 20 + 2P. Set them equal: 100 − 2P = 20 + 2P → 80 = 4P → P = $20, and Q = 100 − 40 = 60 units. If demand rises to Qd = 120 − 2P, the new equilibrium is 120 − 2P = 20 + 2P → 100 = 4P → P = $25, Q = 70. Price up $5, quantity up 10 — demand shifts raise both price and quantity; supply shifts raise one and lower the other.</p><p>Two traps to retire before the exam. First, a price ceiling below equilibrium creates a shortage (quantity demanded exceeds quantity supplied) — rent control is the classic case — and a price floor above equilibrium creates a surplus (minimum wage is the classic case, with the surplus being unemployment among the lowest-skilled). Second, a tax wedge: a $4 per-unit tax splits the price buyers pay from the price sellers receive, the gap is $4, and the side that bears more of it is the side that is less elastic. The deadweight loss is the trades the tax kills — the triangle between the old and new quantities.</p><div class=\"callout\"><strong>Key idea:</strong> Shifts move curves; price changes move you along them. If you can say which curve moved and which way, you can predict price and quantity every time.</div>"
    },
    {
      "heading": "Elasticity: How Much Do They Respond?",
      "html": "<p>Elasticity is responsiveness in percentage terms: price elasticity of demand = % change in quantity demanded ÷ % change in price. The worked example: price rises 10% and quantity demanded falls 20%, so elasticity = −20% ÷ 10% = <strong>−2.0</strong> — elastic demand (absolute value above 1). Revenue falls when price rises under elastic demand, because the quantity lost outweighs the higher price: at $10 and 100 units revenue is $1,000; at $11 (up 10%) quantity falls to 80 units (down 20%) and revenue is $880 — down $120. Under inelastic demand the reverse holds: price up, revenue up, because buyers barely respond. That is why the total-revenue test works: if a price rise raises revenue, demand is inelastic; if it lowers revenue, demand is elastic.</p><p>Income elasticity sorts goods: positive for normal goods, negative for inferior goods. Cross-price elasticity sorts relationships: positive for substitutes (butter and margarine), negative for complements (cars and gasoline). Supply elasticity is usually positive and grows with time — in the very short run supply is nearly fixed (elasticity near zero), in the long run firms can build new plants and it is much higher. The exam loves one fact: the more elastic side of a market bears less of a tax, because it can walk away.</p>"
    },
    {
      "heading": "Costs, Competition, and Market Power",
      "html": "<p>Firms decide by comparing marginal revenue with marginal cost: produce while MR &gt; MC, stop where MR = MC. In <strong>perfect competition</strong> the firm is a price taker, MR = price, and in the long run economic profit is zero (price = minimum average total cost) — the efficient benchmark. In <strong>monopoly</strong> the firm faces the whole downward-sloping demand curve, MR &lt; price, so it produces less and charges more than the competitive outcome, creating deadweight loss. <strong>Monopolistic competition</strong> (many sellers, differentiated products — restaurants, clothing) gives zero long-run profit like competition, but with excess capacity and a markup. <strong>Oligopoly</strong> (few sellers — airlines, mobile networks) is decided by strategy: game theory, Nash equilibrium (each firm doing its best given what rivals do), and the prisoner's dilemma (both firms would be better off cooperating, but each has an incentive to cheat).</p><p>The worked numbers: a competitive firm with price $20 and marginal cost MC = 2 + Q produces where 20 = 2 + Q, so Q = 18. A monopolist facing demand P = 40 − Q has marginal revenue MR = 40 − 2Q; with the same MC = 2 + Q, set 40 − 2Q = 2 + Q → 38 = 3Q → Q ≈ 12.67, P = 40 − 12.67 = $27.33. Less output, higher price — the monopoly cost, visible in one calculation. Remember the pattern, not just the numbers: competition maximizes total surplus; monopoly transfers some to the firm and destroys some outright.</p><div class=\"callout\"><strong>Key idea:</strong> MR = MC is the firm's rule in every market structure. What changes is what MR is: price under competition, below price under monopoly.</div>"
    },
    {
      "heading": "Market Failure: Externalities and Public Goods",
      "html": "<p>Markets fail in four classic ways. <strong>Externalities:</strong> a cost or benefit that falls on a third party — pollution (negative), education (positive). The fix is to price the externality: a Pigouvian tax equal to the marginal external cost (pollution: tax the polluter by the damage per unit), or a subsidy equal to the marginal external benefit. The worked example: a factory's private marginal cost is $10 a unit, the pollution damage is $4 a unit, so social marginal cost is $14; the efficient output is where demand meets $14, not $10, and a $4 tax moves the market there. <strong>Public goods</strong> (non-excludable, non-rival — national defense, lighthouses) are underprovided by markets because of free riding. <strong>Common resources</strong> (rival but non-excludable — fisheries, the atmosphere) are overused: the tragedy of the commons. <strong>Information problems</strong> (adverse selection, moral hazard) break markets where one side knows more — the used-car \"lemons\" problem, or insurance where the insured take more risks.</p><p>The exam's favorite distinction: a public good is non-rival (my use does not reduce yours) while a common resource is rival (my catch reduces yours). Free riding kills the first; overuse kills the second. And the Coase theorem's point — that with clear property rights and low transaction costs, private bargaining can fix an externality without government — is true in theory and rare in practice, because transaction costs are usually high.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> equilibrium from Qd = 100 − 2P, Qs = 20 + 2P is P = $20, Q = 60 (demand shift to 120 − 2P gives P = $25, Q = 70); elasticity −2.0 (price +10%, quantity −20%) is elastic, so a price rise cuts revenue ($1,000 → $880); MR = MC everywhere — competition gives Q = 18 at P = $20, monopoly gives Q ≈ 12.67 at P ≈ $27.33 with the same costs; externalities are fixed by a Pigouvian tax equal to marginal external cost ($4 in the example). <strong>Review drills:</strong> this module's assignment is exam-style drills, not a paper section — the paper is complete.</p><div class=\"callout\"><strong>Common mistake:</strong> Confusing a shift with a movement along the curve. A price change never shifts demand or supply — it moves you along them. Only income, tastes, substitutes, costs, technology, and expectations shift the curves.</div><div class=\"callout\"><strong>Common mistake:</strong> Saying elasticity −2.0 is \"inelastic\" because the number is negative. Elasticity is judged by absolute value: |−2.0| = 2.0 &gt; 1, so demand is elastic. The minus sign just says demand slopes down.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Equilibrium", "def": "Where supply meets demand and the market clears. From Qd = 100 − 2P and Qs = 20 + 2P: P = $20, Q = 60." },
    { "term": "Shift vs. movement", "def": "A shift moves the whole curve (income, costs, technology); a movement along the curve is caused by a price change alone." },
    { "term": "Price elasticity of demand", "def": "% change in quantity demanded ÷ % change in price. −20% ÷ 10% = −2.0 (elastic)." },
    { "term": "Elastic vs. inelastic", "def": "Elastic: |elasticity| > 1 (quantity responds strongly). Inelastic: |elasticity| < 1. Judged by absolute value." },
    { "term": "Total-revenue test", "def": "If a price rise raises revenue, demand is inelastic; if it lowers revenue, demand is elastic. Here $1,000 → $880, so elastic." },
    { "term": "Marginal revenue (MR)", "def": "The extra revenue from selling one more unit. Under competition MR = price; under monopoly MR < price." },
    { "term": "Marginal cost (MC)", "def": "The extra cost of producing one more unit. Firms produce while MR > MC and stop where MR = MC." },
    { "term": "Perfect competition", "def": "Many sellers, identical products, price takers; long-run economic profit is zero and output is efficient." },
    { "term": "Monopoly", "def": "One seller facing the whole demand curve; produces less and charges more than competition, creating deadweight loss." },
    { "term": "Monopolistic competition", "def": "Many sellers with differentiated products; zero long-run profit, but with excess capacity and a markup." },
    { "term": "Oligopoly / Nash equilibrium", "def": "Few sellers deciding strategically; a Nash equilibrium is where each firm does its best given what rivals do." },
    { "term": "Deadweight loss", "def": "Surplus destroyed when output is below the efficient level — by monopoly, taxes, or price controls." },
    { "term": "Externality", "def": "A cost or benefit falling on a third party — pollution (negative), education (positive) — not priced by the market." },
    { "term": "Pigouvian tax", "def": "A tax equal to the marginal external cost, moving the market to the efficient output. Here $4 a unit." },
    { "term": "Public good", "def": "Non-excludable and non-rival (national defense). Markets underprovide it because of free riding." },
    { "term": "Common resource", "def": "Rival but non-excludable (fisheries). Markets overuse it — the tragedy of the commons." },
    { "term": "Consumer / producer surplus", "def": "Consumer surplus is what buyers would have paid minus what they paid; producer surplus is what sellers received minus their cost." }
  ],
  "video": {
    "title": "Supply and Demand: Crash Course Economics #4",
    "embedUrl": "https://www.youtube.com/embed/g9aDizJpd_s",
    "note": "Crash Course Economics with Adriene Hill and Jacob Clifford: supply and demand with strawberries — the market model that everything in microeconomics is built on. Watch it, then redo the module's equilibrium calculation yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Drill 1 — Equilibrium.</strong> Demand: Qd = 100 − 2P. Supply: Qs = 20 + 2P. (a) Find equilibrium P and Q. (b) Demand rises to Qd = 120 − 2P. Find the new P and Q. (c) Is the new price higher or lower, and why?</p>",
      "solution": "<p><strong>Solution:</strong> (a) Set 100 − 2P = 20 + 2P → 80 = 4P → P = <strong>$20</strong>; Q = 100 − 2(20) = <strong>60</strong>. (b) Set 120 − 2P = 20 + 2P → 100 = 4P → P = <strong>$25</strong>; Q = 120 − 2(25) = <strong>70</strong>. (c) Higher — a demand shift right raises both price and quantity. (A supply shift right would raise quantity but lower price.)</p>"
    },
    {
      "prompt": "<p><strong>Drill 2 — Elasticity and revenue.</strong> Price rises 10%, quantity demanded falls 20%. (a) Compute the price elasticity of demand. (b) Is demand elastic or inelastic? (c) At $10 and 100 units revenue is $1,000; at $11 quantity is 80 units. Compute the new revenue and say whether it rose or fell.</p>",
      "solution": "<p><strong>Solution:</strong> (a) Elasticity = −20% ÷ 10% = <strong>−2.0</strong>. (b) Elastic — |−2.0| = 2.0 &gt; 1. (c) New revenue = $11 × 80 = <strong>$880</strong>, down $120 from $1,000. Under elastic demand a price rise cuts revenue — the quantity lost outweighs the higher price.</p>"
    },
    {
      "prompt": "<p><strong>Drill 3 — MR = MC.</strong> A competitive firm faces price $20 and marginal cost MC = 2 + Q. (a) How much does it produce? (b) A monopolist faces demand P = 40 − Q (so MR = 40 − 2Q) with the same MC = 2 + Q. How much does it produce, and at what price? (c) Which produces more, and why?</p>",
      "solution": "<p><strong>Solution:</strong> (a) Competition: MR = price = $20; set 20 = 2 + Q → Q = <strong>18</strong>. (b) Monopoly: set MR = MC → 40 − 2Q = 2 + Q → 38 = 3Q → Q = <strong>12.67</strong>; price P = 40 − 12.67 = <strong>$27.33</strong>. (c) Competition produces more (18 vs. 12.67) because the monopolist's MR is below price, so it stops earlier — producing less and charging more, which is the monopoly deadweight loss.</p>"
    },
    {
      "prompt": "<p><strong>Drill 4 — Externality.</strong> A factory's private marginal cost is $10 a unit; pollution damage is $4 a unit. (a) What is the social marginal cost? (b) What Pigouvian tax moves the market to the efficient output? (c) Who pays the tax in the first instance, and who bears it in the end?</p>",
      "solution": "<p><strong>Answer:</strong> (a) Social marginal cost = $10 + $4 = <strong>$14</strong> a unit. (b) A Pigouvian tax of <strong>$4</strong> a unit — equal to the marginal external cost — makes the firm face the full $14. (c) The firm pays the tax to the government in the first instance; who bears it in the end depends on elasticities — the less elastic side (usually consumers, if demand is inelastic) bears more of it through the higher price.</p>"
    },
    {
      "prompt": "<p><strong>Drill 5 — Market structures.</strong> For each, name the structure and its long-run profit: (a) many sellers, identical products, price takers; (b) one seller, no close substitutes; (c) many sellers, differentiated products; (d) three airlines on one route.</p>",
      "solution": "<p><strong>Answer:</strong> (a) Perfect competition — zero long-run economic profit (price = minimum average total cost). (b) Monopoly — positive profit, protected by barriers to entry. (c) Monopolistic competition — zero long-run profit, but with excess capacity and a markup over marginal cost. (d) Oligopoly — profit depends on strategy; cooperation would raise it, but each firm has an incentive to undercut (prisoner's dilemma).</p>"
    },
    {
      "prompt": "<p><strong>Drill 6 — Price controls.</strong> Equilibrium rent is $1,000 a month. The city caps rent at $800. (a) What happens to quantity demanded and supplied? (b) What is the result called? (c) Who gains and who loses?</p>",
      "solution": "<p><strong>Answer:</strong> (a) At $800, quantity demanded rises (more people want flats) and quantity supplied falls (fewer landlords offer them) — a shortage. (b) The result is a <strong>shortage</strong> (excess demand), with deadweight loss from the flats never rented. (c) Sitting tenants who keep a flat gain ($200 a month cheaper); landlords lose; and people who cannot find a flat at all lose the most — the control helps insiders and hurts outsiders.</p>"
    }
  ],
  "quiz": [
    {
      "q": "From Qd = 100 − 2P and Qs = 20 + 2P, equilibrium is:",
      "choices": [
        "P = $25, Q = 70",
        "P = $20, Q = 60",
        "P = $10, Q = 80",
        "P = $40, Q = 20"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 − 2P = 20 + 2P → P = $20; Q = 100 − 40 = 60. (a) is wrong: that is the equilibrium after demand rises to 120 − 2P. (c) is wrong: at P = $10, Qd = 80 but Qs = 40 — a shortage, not equilibrium. (d) is wrong: at P = $40, Qd = 20 and Qs = 100 — a surplus."
    },
    {
      "q": "Price rises 10% and quantity demanded falls 20%. Elasticity is:",
      "choices": [
        "−0.5 (inelastic)",
        "−2.0 (elastic)",
        "+2.0",
        "−20"
      ],
      "answer": 1,
      "explanation": "Correct: (b). −20% ÷ 10% = −2.0, and |−2.0| > 1, so elastic. (a) is wrong: −0.5 would be a 5% quantity fall. (c) is wrong: the sign is negative — demand slopes down. (d) is wrong: −20 is the percentage quantity change, not the elasticity."
    },
    {
      "q": "Under elastic demand, a price rise:",
      "choices": [
        "Raises revenue",
        "Lowers revenue ($1,000 → $880 in the example)",
        "Leaves revenue unchanged",
        "Raises quantity demanded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The quantity lost (20%) outweighs the higher price (10%). (a) is wrong: that happens under inelastic demand. (c) is wrong: that happens at unit elasticity (|e| = 1). (d) is wrong: a price rise lowers quantity demanded, always, along the demand curve."
    },
    {
      "q": "A firm produces where:",
      "choices": [
        "Price = average total cost",
        "Marginal revenue = marginal cost",
        "Total revenue is highest",
        "Marginal cost is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MR = MC is the profit-maximizing rule in every market structure. (a) is wrong: that is the long-run zero-profit condition under competition, not the output rule. (c) is wrong: highest revenue ignores costs. (d) is wrong: MC is rarely zero, and zero MC is not the rule."
    },
    {
      "q": "The monopolist in the worked example produces 12.67 units at $27.33, while competition produces 18 at $20, because:",
      "choices": [
        "The monopolist's costs are higher",
        "The monopolist's marginal revenue is below price, so it stops earlier",
        "The monopolist faces no demand",
        "Competition has higher fixed costs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MR = 40 − 2Q falls twice as fast as demand, so MR = MC comes at lower output. (a) is wrong: costs are the same (MC = 2 + Q) in both cases. (c) is wrong: the monopolist faces the whole demand curve. (d) is wrong: fixed costs do not decide output — marginal costs do."
    },
    {
      "q": "A Pigouvian tax on pollution should equal:",
      "choices": [
        "The firm's total profit",
        "The marginal external cost ($4 a unit in the example)",
        "The price of the product",
        "Zero — taxes never fix externalities"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Taxing the damage per unit makes the firm face the full social cost of $14. (a) is wrong: profit is not the damage. (c) is wrong: the price is $10–$14 depending on the market, not the tax. (d) is wrong: a tax equal to marginal external cost is the textbook fix."
    },
    {
      "q": "National defense is a public good because it is:",
      "choices": [
        "Provided by the government",
        "Non-excludable and non-rival",
        "Expensive",
        "Rival but non-excludable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Non-excludable (you cannot stop someone benefiting) and non-rival (my protection does not reduce yours). (a) is wrong: government provision is a consequence, not the definition. (c) is wrong: price is not the test. (d) is wrong: that describes a common resource, like a fishery."
    },
    {
      "q": "A price ceiling set below equilibrium creates:",
      "choices": [
        "A surplus",
        "A shortage, with deadweight loss",
        "Higher quantity supplied",
        "Market clearing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At $800 rent, quantity demanded exceeds quantity supplied — a shortage, and the flats never rented are deadweight loss. (a) is wrong: a surplus comes from a price floor above equilibrium. (c) is wrong: a lower price reduces quantity supplied. (d) is wrong: the market does not clear below equilibrium."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Comprehensive Review I: Microeconomics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Supply and demand is the engine; elasticity says how much they respond; MR = MC is the firm's rule in every market; market failure has four classic forms.</p>\n<div class=\"formula\">Qd = 100 − 2P, Qs = 20 + 2P → P = $20, Q = 60 &nbsp;|&nbsp; Elasticity: −20% ÷ 10% = −2.0 (elastic) &nbsp;|&nbsp; Revenue: $1,000 → $880</div>\n<p><strong>MR = MC:</strong> competition Q = 18 at P = $20 · monopoly Q ≈ 12.67 at P ≈ $27.33 (same MC = 2 + Q). <strong>Externality:</strong> private MC $10 + damage $4 = social MC $14; Pigouvian tax $4. <strong>Structures:</strong> competition (zero long-run profit) · monopoly (less output, higher price) · monopolistic competition (zero profit, excess capacity) · oligopoly (strategy, Nash).</p>\n<p><strong>Review drills:</strong> This module's assignment is exam-style drills, not a paper section — the paper is complete.</p>\n<p><strong>Self-check:</strong> Redo the equilibrium, elasticity, MR = MC, and Pigouvian tax calculations without looking. If you can, you are ready for the micro half of both comprehensive exams.</p>\n"
};
