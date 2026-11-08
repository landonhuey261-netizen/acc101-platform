// FIN101 - Module 4: Risk & Return: The Trade-Off at the Heart of Finance
module.exports = {
  "number": 4,
  "slug": "risk-return-trade-off",
  "title": "Risk & Return: The Trade-Off at the Heart of Finance",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the risk-return trade-off and why higher returns demand higher risk.",
    "Distinguish systematic from unsystematic risk and explain diversification.",
    "Compute expected return and standard deviation for a simple investment.",
    "Explain beta and the capital asset pricing model (CAPM).",
    "Use a worked CAPM example to compute a required return."
  ],
  "sections": [
    {
      "heading": "The Trade-Off: No Free Return",
      "html": "\n<p>The central fact of finance is the <strong>risk-return trade-off</strong>: to earn a higher expected return, you must accept higher risk. A government savings account pays little because it is safe; a new business venture might pay a great deal or nothing at all. There is no investment that pays a high return with no risk — anyone offering one is either mistaken or dishonest. The finance manager's job is not to avoid risk (a business that avoids all risk earns nothing) but to take risks that are worth their return, and to avoid risks that are not.</p>\n<strong>Risk</strong> in finance means uncertainty about the outcome — the range of possible returns, not just the chance of loss. A project that might return 5% or 15% is riskier than one that will return 9% or 11%, even though both average 10%. The standard measure of that spread is the <strong>standard deviation</strong> of returns: a wider spread means a riskier investment. Expected return is the average outcome, weighted by probability; risk is how far the actual outcome might land from that average.\n<div class=\"callout\"><strong>Key idea:</strong> Higher expected return demands higher risk. There is no high return with no risk — the finance manager's job is to take risks worth their return.</div>\n"
    },
    {
      "heading": "Two Kinds of Risk — and Why Diversification Works",
      "html": "\n<strong>Unsystematic risk</strong> is specific to one firm or project: a factory fire, a bad product launch, a key employee leaving. It can be reduced by <strong>diversification</strong> — holding many different investments, so one firm's bad luck is offset by another's good luck. <strong>Systematic risk</strong> affects the whole market: recessions, interest rate changes, wars, pandemics. It cannot be diversified away, because it hits everything at once. The market only rewards the risk that cannot be diversified away — systematic risk — because unsystematic risk is a choice the investor could have avoided by diversifying.\n<p>For a business, the same logic applies to projects. A firm that bets everything on one product carries unsystematic risk it could have spread; a firm whose products all depend on one customer's spending carries systematic risk it cannot spread. The finance manager asks, for every project: is this risk one we are paid to take, or one we could have avoided?</p>\n<ul>\n<li><strong>Unsystematic risk:</strong> firm-specific — diversifiable.</li>\n<li><strong>Systematic risk:</strong> market-wide — not diversifiable.</li>\n<li><strong>Diversification:</strong> spreading holdings so one bad outcome is offset by others.</li>\n<li><strong>Only systematic risk is rewarded</strong> — unsystematic risk could have been diversified away.</li>\n</ul>\n"
    },
    {
      "heading": "Measuring Risk and Return: A Worked Example",
      "html": "\n<p>Consider an investment with three possible returns: 20% with probability 0.25, 10% with probability 0.50, and 0% with probability 0.25. Its <strong>expected return</strong> is 0.25 × 20% + 0.50 × 10% + 0.25 × 0% = 5% + 5% + 0% = 10%. Its <strong>variance</strong> is the probability-weighted squared distance from that average: 0.25 × (20 − 10)<sup>2</sup> + 0.50 × (10 − 10)<sup>2</sup> + 0.25 × (0 − 10)<sup>2</sup> = 0.25 × 100 + 0 + 0.25 × 100 = 50. Its <strong>standard deviation</strong> is the square root of the variance: √50 = 7.07%. The investment averages 10% with a typical swing of about 7 percentage points — that swing is its risk, in one number.</p>\n<p>Two investments with the same expected return can have very different standard deviations, and the one with the smaller spread is the better deal at the same return. That comparison — return per unit of risk — is the whole discipline of investment choice, and it is why finance managers do not ask “what will it earn?” but “what will it earn, and how sure are we?”</p>\n<div class=\"formula\">Worked example: returns 20% (p=0.25), 10% (p=0.50), 0% (p=0.25) → expected return 10%, variance 50, standard deviation 7.07%.</div>\n"
    },
    {
      "heading": "Beta and CAPM: Pricing Systematic Risk",
      "html": "\n<strong>Beta</strong> measures how much an investment moves with the market: a beta of 1.0 moves with the market, a beta of 1.4 moves 40% more than the market (up and down), and a beta of 0.5 moves half as much. The <strong>capital asset pricing model (CAPM)</strong> turns beta into a required return: Required return = Risk-free rate + Beta × (Market return − Risk-free rate). The term in parentheses is the <strong>market risk premium</strong> — the extra return investors demand for bearing market risk instead of holding a safe asset.\n<p>Worked example: the risk-free rate is 3%, the market return is 9%, and a stock's beta is 1.4. The market risk premium is 9% − 3% = 6%. The required return is 3% + 1.4 × 6% = 3% + 8.4% = 11.4%. That 11.4% is the return investors require to hold this stock — and it is the rate the firm should use when judging whether a project funded by such investors is worth doing. A project that earns less than its required return destroys value, however large its profit looks in dollars.</p>\n<div class=\"callout\"><strong>Key idea:</strong> CAPM: Required return = Risk-free rate + Beta × (Market return − Risk-free rate). A beta of 1.4 with a 3% risk-free rate and a 9% market return requires 11.4%.</div>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p><ul>\n<li>Higher expected return demands higher risk; there is no high return with no risk.</li>\n<li>Unsystematic risk is firm-specific and diversifiable; systematic risk is market-wide and is the only risk the market rewards.</li>\n<li>Expected return is the probability-weighted average; standard deviation measures the spread around it.</li>\n<li>CAPM: required return = risk-free rate + beta × market risk premium. Worked example: 3% + 1.4 × 6% = 11.4%.</li>\n<li>Worked numbers: expected return 10%, variance 50, standard deviation 7.07%.</li>\n</ul>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Judging an investment by its expected return alone. Two investments averaging 10% can have very different risk — the standard deviation is the other half of the judgment.</div>\n<div class=\"callout\"><strong>Key idea:</strong> <strong>Common mistake:</strong> Thinking diversification removes all risk. It removes unsystematic risk; systematic risk — recessions, rate changes — hits everything and cannot be diversified away.</div>\n<p><strong>Ready-to-Work link:</strong> Module 6's cost of capital uses CAPM as the cost of equity — the 11.4% computed here becomes the price of the firm's equity money.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Risk-return trade-off",
      "def": "Higher expected return demands accepting higher risk; there is no high return with no risk."
    },
    {
      "term": "Risk",
      "def": "Uncertainty about an investment's outcome — the range of possible returns."
    },
    {
      "term": "Expected return",
      "def": "The probability-weighted average of an investment's possible returns."
    },
    {
      "term": "Standard deviation",
      "def": "A measure of how far returns typically spread from their expected value."
    },
    {
      "term": "Variance",
      "def": "The probability-weighted average squared distance of returns from their expected value."
    },
    {
      "term": "Unsystematic risk",
      "def": "Risk specific to one firm or project; it can be reduced by diversification."
    },
    {
      "term": "Systematic risk",
      "def": "Risk that affects the whole market; it cannot be diversified away."
    },
    {
      "term": "Diversification",
      "def": "Spreading investments so one bad outcome is offset by others."
    },
    {
      "term": "Beta",
      "def": "How much an investment moves with the market: 1.0 moves with it, above 1.0 moves more, below 1.0 moves less."
    },
    {
      "term": "Capital asset pricing model (CAPM)",
      "def": "Required return = risk-free rate + beta × (market return − risk-free rate)."
    },
    {
      "term": "Risk-free rate",
      "def": "The return on an investment with (effectively) no risk, such as a short-term government security."
    },
    {
      "term": "Market risk premium",
      "def": "The extra return investors demand for bearing market risk: market return minus the risk-free rate."
    },
    {
      "term": "Required return",
      "def": "The return investors demand to hold an investment, given its risk."
    },
    {
      "term": "Market return",
      "def": "The average return of the whole market."
    },
    {
      "term": "Risk premium",
      "def": "The extra return demanded for bearing risk, above the risk-free rate."
    }
  ],
  "video": {
    "title": "Finance Lecture - Risk, Return and CAPM",
    "embedUrl": "https://www.youtube.com/embed/3BIIiUyr3-w",
    "note": "A lecture on risk, return, and the capital asset pricing model. Follow the CAPM example and compare its inputs with the worked example in Section 4.",
    "more": [
      {
        "title": "Risk and Return Explained Simply | FINANCE EMPIRE",
        "url": "https://www.youtube.com/watch?v=rIDtcx8Bizo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An investment returns 20% with probability 0.25, 10% with probability 0.50, and 0% with probability 0.25. (a) What is its expected return? (b) What is its variance and standard deviation?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Expected return = 0.25 × 20% + 0.50 × 10% + 0.25 × 0% = 5% + 5% + 0% = <strong>10%</strong>. Step 2: Variance = 0.25 × (20 − 10)<sup>2</sup> + 0.50 × (10 − 10)<sup>2</sup> + 0.25 × (0 − 10)<sup>2</sup> = 25 + 0 + 25 = <strong>50</strong>. Step 3: Standard deviation = √50 = <strong>7.07%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The risk-free rate is 3%, the market return is 9%, and a stock's beta is 1.4. (a) What is the market risk premium? (b) What is the stock's required return under CAPM?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Market risk premium = 9% − 3% = <strong>6%</strong>. Step 2: Required return = 3% + 1.4 × 6% = 3% + 8.4% = <strong>11.4%</strong>. Step 3: Investors require 11.4% to hold this stock — a project funded by such investors must earn at least that to create value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Two investments both average 10%. Investment A has a standard deviation of 3%; Investment B has a standard deviation of 12%. Which is the better deal at the same return, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Investment A is the better deal — the same expected return with a much smaller spread. Step 2: B's returns swing far more widely, so the investor bears more risk for the same average. Step 3: Finance judges return per unit of risk, not return alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A firm's factory burns down (its only factory). A second firm owns ten factories in different states and one burns down. Name the type of risk in each case, and explain why diversification helps the second firm.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Both are unsystematic risk — firm-specific events. Step 2: The single-factory firm loses everything; the ten-factory firm loses a tenth of its capacity and keeps operating. Step 3: Diversification spreads firm-specific risk so one bad event is offset by the rest — which is why the market does not reward bearing risk you could have diversified away.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A recession hits and every firm's sales fall. Name the type of risk, and explain why diversification cannot remove it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is systematic risk — market-wide. Step 2: Diversification spreads holdings across firms, but a recession hits all of them at once, so there is no offsetting good luck. Step 3: Only systematic risk is rewarded by the market, because it is the risk investors cannot avoid.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stock has a beta of 0.5. The market rises 10%. Roughly how much would the stock be expected to rise, and what does that tell you about its risk?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A beta of 0.5 means the stock moves about half as much as the market — roughly a 5% rise. Step 2: It also falls about half as much when the market falls. Step 3: A beta below 1.0 means lower systematic risk — and, by CAPM, a lower required return.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The risk-return trade-off says:",
      "choices": [
        "Higher returns come with lower risk",
        "Higher expected return demands higher risk",
        "Risk and return are unrelated",
        "Safe investments pay the most"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Return is the payment for bearing risk. (a) Reverses the trade-off. (c) Risk and return are directly related. (d) Safe investments pay the least, precisely because they are safe."
    },
    {
      "q": "An investment returns 20% (p=0.25), 10% (p=0.50), 0% (p=0.25). Its expected return is:",
      "choices": [
        "5%",
        "10%",
        "15%",
        "20%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.25 × 20% + 0.50 × 10% + 0.25 × 0% = 10%. (a) 5% counts only the first outcome. (c) 15% averages the three returns without probabilities. (d) 20% is the best case, not the average."
    },
    {
      "q": "The standard deviation of the investment in the previous question is about:",
      "choices": [
        "3.5%",
        "7.07%",
        "10%",
        "50%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Variance is 50, so standard deviation is √50 = 7.07%. (a) 3.5% is half the true spread. (c) 10% is the expected return, not the spread. (d) 50 is the variance, not the standard deviation."
    },
    {
      "q": "Unsystematic risk is:",
      "choices": [
        "Market-wide risk that cannot be diversified away",
        "Firm-specific risk that can be reduced by diversification",
        "The same as systematic risk",
        "Risk that does not exist"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Firm-specific events can be spread across holdings. (a) That is systematic risk. (c) The two kinds differ exactly on diversification. (d) Unsystematic risk is very real — it is the risk diversification removes."
    },
    {
      "q": "Risk-free rate 3%, market return 9%, beta 1.4. The required return under CAPM is:",
      "choices": [
        "9.0%",
        "11.4%",
        "6.0%",
        "3.0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. (a) 9.0% is the market return, ignoring the stock's higher beta. (c) 6.0% is the market risk premium alone. (d) 3.0% is the risk-free rate alone."
    },
    {
      "q": "A beta of 1.4 means the investment:",
      "choices": [
        "Is risk-free",
        "Moves about 40% more than the market, up and down",
        "Moves half as much as the market",
        "Never changes in value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Beta above 1.0 amplifies market moves in both directions. (a) No stock is risk-free. (c) A beta of 0.5 moves half as much. (d) A beta of 1.4 moves more, not less."
    },
    {
      "q": "The market risk premium is:",
      "choices": [
        "The risk-free rate",
        "Market return minus the risk-free rate",
        "Beta times the risk-free rate",
        "The market return alone"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The premium is the extra return for bearing market risk: 9% − 3% = 6%. (a) The risk-free rate is the base, not the premium. (c) Beta times the risk-free rate has no meaning in CAPM. (d) The market return alone includes the risk-free rate."
    },
    {
      "q": "Diversification cannot remove:",
      "choices": [
        "A factory fire at one firm",
        "A bad product launch",
        "Systematic risk — a recession that hits the whole market",
        "A key employee leaving"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Market-wide risk hits everything at once, so there is no offsetting holding. (a), (b), and (d) are all firm-specific, unsystematic risks that diversification does reduce."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Risk &amp; Return: Quick Reference</h3>\n<p><strong>Core idea:</strong> Higher expected return demands higher risk. Judge an investment by return per unit of risk, not by return alone.</p>\n<p><strong>Two risks:</strong> unsystematic (firm-specific, diversifiable) and systematic (market-wide, not diversifiable — and the only risk the market rewards).</p>\n<div class=\"formula\">Expected return = Σ (probability × return) &nbsp;|&nbsp; Standard deviation = √variance &nbsp;|&nbsp; CAPM: Required return = Rf + Beta × (Rm − Rf)</div>\n<p><strong>Worked numbers:</strong> returns 20% / 10% / 0% with probabilities 0.25 / 0.50 / 0.25 → expected return 10%, variance 50, standard deviation 7.07%. CAPM: 3% + 1.4 × 6% = 11.4%.</p>\n<p><strong>Watch out:</strong> Two investments averaging 10% can have very different risk. And diversification removes firm-specific risk, never market-wide risk.</p>\n<p><strong>Self-check:</strong> Name one risk your own business or employer faces that is systematic, and one that is unsystematic — and which one diversification could actually help with.</p>\n"
};
