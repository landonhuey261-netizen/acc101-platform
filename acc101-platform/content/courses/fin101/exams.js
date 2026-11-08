// FIN101 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "Choosing how to pay for a new machine — savings or a loan — is the:",
        "choices": [
          "Investment decision",
          "Financing decision",
          "Working capital decision",
          "Accounting decision"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Financing is how assets are paid for. (a) The investment decision is whether to buy the machine. (c) Working capital is day-to-day cash, inventory, and receivables. (d) Accounting records the choice; it does not make it."
      },
      {
        "module": 1,
        "q": "The goal of financial management is to maximize:",
        "choices": [
          "This year's profit, whatever the risk",
          "The value of the firm",
          "Sales revenue",
          "The number of employees"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Value counts timing and risk, not just this year's number. (a) This year's profit can be raised by destroying future value. (c) Revenue ignores costs entirely. (d) Headcount is not a financial goal."
      },
      {
        "module": 1,
        "q": "The treasurer's job covers:",
        "choices": [
          "Bookkeeping and tax returns",
          "Cash management, borrowing, and investing spare cash",
          "Hiring staff",
          "Designing products"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The treasurer handles outside-facing money. (a) Bookkeeping and taxes are the controller's work. (c) Hiring is HR. (d) Product design is operations and marketing."
      },
      {
        "module": 1,
        "q": "A corporation differs from a sole proprietorship mainly because:",
        "choices": [
          "It has more employees",
          "It is a separate legal person and shareholders are liable only for what they invested",
          "It pays no taxes",
          "It cannot borrow money"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Limited liability and separate legal status define a corporation. (a) Size is not the defining difference. (c) Corporations do pay taxes. (d) Corporations can borrow, and often borrow more easily."
      },
      {
        "module": 2,
        "q": "The balance sheet shows:",
        "choices": [
          "Profit over a period",
          "Assets, liabilities, and equity at one moment in time",
          "Where cash came from and went",
          "Only the firm's debts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The balance sheet is a snapshot. (a) Profit over a period is the income statement. (c) Cash sources and uses are the cash flow statement. (d) Debts are only the liabilities side."
      },
      {
        "module": 2,
        "q": "Current assets $240,000 and current liabilities $120,000 give a current ratio of:",
        "choices": [
          "0.5",
          "1.0",
          "2.0",
          "2.5"
        ],
        "answer": 2,
        "explanation": "Correct: (c). $240,000 ÷ $120,000 = 2.0. (a) 0.5 inverts the ratio. (b) 1.0 would need equal assets and liabilities. (d) 2.5 would need $300,000 of current assets."
      },
      {
        "module": 2,
        "q": "Net income $60,000 on total assets $500,000 gives ROA of:",
        "choices": [
          "6.0%",
          "12.0%",
          "10.0%",
          "20.0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $60,000 ÷ $500,000 = 12.0%. (a) 6.0% would need $30,000 of income. (c) 10.0% would need $50,000. (d) 20.0% would need $100,000."
      },
      {
        "module": 2,
        "q": "A firm can be profitable and still run out of cash because:",
        "choices": [
          "Profit counts revenue when earned, not when cash arrives, and cash can leave for equipment or debt repayment",
          "Profit is always wrong",
          "Cash is not real money",
          "The balance sheet is broken"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Credit sales, inventory, and investing outflows separate profit from cash. (b) Profit is a real measure of earning, just not of cash. (c) Cash is the most real money there is. (d) The balance sheet still balances; the issue is timing."
      },
      {
        "module": 3,
        "q": "A dollar today is worth more than a dollar next year mainly because:",
        "choices": [
          "Dollars are printed in limited numbers",
          "It can be invested and earn, it is certain, and inflation erodes future dollars",
          "Banks prefer it",
          "It weighs more"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Earning power, certainty, and inflation are the three reasons. (a) Money supply is not the reason for an individual's time value. (c) Bank preference is not the mechanism. (d) Weight is irrelevant."
      },
      {
        "module": 3,
        "q": "$5,000 invested at 6% compounded annually for 5 years becomes about:",
        "choices": [
          "$5,300.00",
          "$6,500.00",
          "$6,691.13",
          "$8,000.00"
        ],
        "answer": 2,
        "explanation": "Correct: (c). $5,000 × (1.06)^5 = $5,000 × 1.338226 = $6,691.13. (a) $5,300.00 is one year's growth. (b) $6,500.00 understates the compounding. (d) $8,000.00 would need about 9.9% compounded."
      },
      {
        "module": 3,
        "q": "A promise of $10,000 in 5 years at a 5% discount rate is worth today about:",
        "choices": [
          "$10,000.00",
          "$7,835.26",
          "$12,762.82",
          "$5,000.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $10,000 ÷ (1.05)^5 = $10,000 ÷ 1.276282 = $7,835.26. (a) $10,000.00 ignores discounting. (c) $12,762.82 compounds the wrong way. (d) $5,000.00 is half the future amount, not its present value."
      },
      {
        "module": 3,
        "q": "Compounding differs from simple interest because compounding:",
        "choices": [
          "Pays interest only on the original amount",
          "Pays interest on the original amount and on interest already earned",
          "Charges a fee",
          "Only applies to banks"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Compounding earns interest on interest. (a) That is simple interest. (c) Fees are separate from interest. (d) Compounding applies to any investment or loan."
      },
      {
        "module": 4,
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
        "module": 4,
        "q": "An investment returns 30% (p=0.25), 10% (p=0.50), and -10% (p=0.25). Its expected return is:",
        "choices": [
          "5%",
          "10%",
          "15%",
          "30%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0.25 × 30% + 0.50 × 10% + 0.25 × (−10%) = 7.5% + 5% − 2.5% = 10%. (a) 5% mis-weights the outcomes. (c) 15% averages the three returns without probabilities. (d) 30% is the best case, not the average."
      },
      {
        "module": 4,
        "q": "Risk-free rate 4%, market return 10%, beta 1.2. The required return under CAPM is:",
        "choices": [
          "10.0%",
          "11.2%",
          "7.2%",
          "4.0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4% + 1.2 × (10% − 4%) = 4% + 7.2% = 11.2%. (a) 10.0% is the market return. (c) 7.2% is only the beta times the premium. (d) 4.0% is the risk-free rate alone."
      },
      {
        "module": 4,
        "q": "Diversification cannot remove:",
        "choices": [
          "A factory fire at one firm",
          "A bad product launch",
          "Systematic risk — a recession that hits the whole market",
          "A key employee leaving"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Market-wide risk hits everything at once. (a), (b), and (d) are firm-specific, unsystematic risks that diversification does reduce."
      },
      {
        "module": 5,
        "q": "A bond is:",
        "choices": [
          "A share of ownership in a firm",
          "A standardized loan promising fixed coupons and repayment of face value at maturity",
          "A bank account",
          "A type of insurance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A bond is debt with fixed, scheduled payments. (a) A share of ownership is stock. (c) A bank account is a deposit, not a traded security. (d) Insurance transfers risk; a bond lends money."
      },
      {
        "module": 5,
        "q": "When interest rates rise, bond prices:",
        "choices": [
          "Rise",
          "Fall",
          "Stay the same",
          "Double"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fixed coupons discounted at a higher rate are worth less. (a) Prices and rates move in opposite directions. (c) Prices change with the discount rate. (d) Prices fall, they do not double."
      },
      {
        "module": 5,
        "q": "A stock will pay a dividend of $3.00 next year. The required return is 12% and dividends grow at 5% a year. Its value under the Gordon model is:",
        "choices": [
          "$25.00",
          "$42.86",
          "$60.00",
          "$36.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $3.00 ÷ (0.12 − 0.05) = $3.00 ÷ 0.07 = $42.86. (a) $25.00 is $3.00 ÷ 0.12, ignoring growth. (c) $60.00 is $3.00 ÷ 0.05, using growth as the denominator. (d) $36.00 has no basis in the numbers."
      },
      {
        "module": 5,
        "q": "Debt differs from equity for the firm because debt:",
        "choices": [
          "Must be paid even in a bad year, while dividends can be cut",
          "Gives lenders a vote in management",
          "Never has to be repaid",
          "Is free"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Interest is a fixed obligation; dividends are discretionary. (b) Lenders do not vote; shareholders do. (c) Debt must be repaid at maturity. (d) Debt costs interest."
      },
      {
        "module": 6,
        "q": "A firm borrows at 8% and pays 25% tax. Its after-tax cost of debt is:",
        "choices": [
          "8.0%",
          "6.0%",
          "2.0%",
          "10.0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 8% × (1 − 0.25) = 6.0%. (a) 8.0% is the before-tax cost. (c) 2.0% is the tax saving. (d) 10.0% would be the rate grossed up, not reduced."
      },
      {
        "module": 6,
        "q": "70% equity at 10%, 30% debt at 8% before tax, 25% tax. WACC is:",
        "choices": [
          "8.8%",
          "10.0%",
          "7.0%",
          "9.4%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). After-tax debt is 6.0%; 0.70 × 10% + 0.30 × 6.0% = 7.0% + 1.8% = 8.8%. (b) 10.0% is the cost of equity alone. (c) 7.0% is only the equity part. (d) 9.4% would use the before-tax debt cost."
      },
      {
        "module": 6,
        "q": "A project earning 7% when WACC is 8.8% should be:",
        "choices": [
          "Taken, because 7% is a good return",
          "Rejected, because it earns less than the cost of the money funding it",
          "Taken, because profit is profit",
          "Rejected, because 7% is below the tax rate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A project below its hurdle destroys value. (a) 7% is good only against a hurdle below 7%. (c) Profit in dollars ignores what the money cost. (d) The tax rate is irrelevant to this decision."
      },
      {
        "module": 6,
        "q": "Equity costs more than debt mainly because:",
        "choices": [
          "Shareholders are paid first",
          "Shareholders are paid last and bear the most risk",
          "Equity has no tax shield",
          "Equity must be repaid monthly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Shareholders bear the residual risk, so they demand a higher return. (a) Lenders are paid first, not shareholders. (c) The missing tax shield is part of the story, but the risk order is the main reason. (d) Equity has no repayment schedule."
      },
      {
        "module": 6,
        "q": "The cost of equity under CAPM with a 4% risk-free rate, 10% market return, and beta 1.2 is:",
        "choices": [
          "10.0%",
          "11.2%",
          "6.0%",
          "4.0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4% + 1.2 × 6% = 11.2%. (a) 10.0% is the market return. (c) 6.0% is the market risk premium. (d) 4.0% is the risk-free rate alone."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "passPercent": 70,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "The three financial management decisions are:",
        "choices": [
          "Marketing, sales, and advertising",
          "Investment, financing, and working capital",
          "Hiring, training, and firing",
          "Buying, selling, and merging"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The three decisions are what to buy, how to pay for it, and how to manage day-to-day cash. (a) Marketing, sales, and advertising are marketing decisions. (c) Hiring and training are HR decisions. (d) Buying and selling are transactions, not the three decisions."
      },
      {
        "module": 1,
        "q": "Finance differs from accounting because finance:",
        "choices": [
          "Records what happened",
          "Decides what to do next with the firm's money",
          "Only works with taxes",
          "Never uses numbers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Finance is forward-looking decision making. (a) Recording what happened is accounting. (c) Taxes are one part of the controller's work. (d) Finance is built on numbers."
      },
      {
        "module": 2,
        "q": "Current assets $150,000, inventory $30,000, current liabilities $75,000. The quick ratio is:",
        "choices": [
          "2.0",
          "1.6",
          "0.4",
          "1.2"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ($150,000 − $30,000) ÷ $75,000 = $120,000 ÷ $75,000 = 1.6. (a) 2.0 is the current ratio. (c) 0.4 divides inventory by liabilities. (d) 1.2 has no basis in the numbers."
      },
      {
        "module": 2,
        "q": "Debt $200,000 and equity $400,000 give a debt-to-equity ratio of:",
        "choices": [
          "0.5",
          "1.0",
          "2.0",
          "4.0"
        ],
        "answer": 0,
        "explanation": "Correct: (a). $200,000 ÷ $400,000 = 0.5. (b) 1.0 would need equal debt and equity. (c) 2.0 inverts the ratio. (d) 4.0 has no basis in the numbers."
      },
      {
        "module": 3,
        "q": "$8,000 invested at 7% compounded annually for 10 years becomes about:",
        "choices": [
          "$8,560.00",
          "$15,737.21",
          "$13,600.00",
          "$10,000.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $8,000 × (1.07)^10 = $8,000 × 1.967151 = $15,737.21. (a) $8,560.00 is one year's growth. (c) $13,600.00 understates the compounding. (d) $10,000.00 is a round guess."
      },
      {
        "module": 3,
        "q": "A promise of $5,000 in 10 years at a 6% discount rate is worth today about:",
        "choices": [
          "$5,000.00",
          "$2,791.97",
          "$8,954.24",
          "$3,000.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $5,000 ÷ (1.06)^10 = $5,000 ÷ 1.790848 = $2,791.97. (a) $5,000.00 ignores discounting. (c) $8,954.24 compounds the wrong way. (d) $3,000.00 is a rough guess above the true value."
      },
      {
        "module": 4,
        "q": "An investment returns 25% (p=0.20), 10% (p=0.60), and 0% (p=0.20). Its expected return is:",
        "choices": [
          "8%",
          "11%",
          "15%",
          "25%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0.20 × 25% + 0.60 × 10% + 0.20 × 0% = 5% + 6% + 0% = 11%. (a) 8% mis-weights the outcomes. (c) 15% averages the three returns without probabilities. (d) 25% is the best case."
      },
      {
        "module": 4,
        "q": "Unsystematic risk is:",
        "choices": [
          "Market-wide risk that cannot be diversified away",
          "Firm-specific risk that can be reduced by diversification",
          "The same as systematic risk",
          "Risk that does not exist"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Firm-specific events can be spread across holdings. (a) That is systematic risk. (c) The two kinds differ exactly on diversification. (d) Unsystematic risk is very real."
      },
      {
        "module": 5,
        "q": "A $1,000 bond, 6% coupon, 5 years, market rate 6% is worth:",
        "choices": [
          "$1,000.00 — at par",
          "$926.40",
          "$1,074.00",
          "$500.00"
        ],
        "answer": 0,
        "explanation": "Correct: (a). When the coupon equals the market rate, the bond sells at par, $1,000. (b) $926.40 is the Module 5 bond, whose coupon was below the market rate. (c) $1,074.00 would be a premium bond. (d) $500.00 is half the face value."
      },
      {
        "module": 5,
        "q": "Gordon growth model: dividend $1.50 next year, required return 9%, growth 3%. Value is:",
        "choices": [
          "$16.67",
          "$25.00",
          "$50.00",
          "$12.50"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $1.50 ÷ (0.09 − 0.03) = $1.50 ÷ 0.06 = $25.00. (a) $16.67 is $1.50 ÷ 0.09, ignoring growth. (c) $50.00 is $1.50 ÷ 0.03, using growth as the denominator. (d) $12.50 is $1.50 ÷ 0.12, adding the rates."
      },
      {
        "module": 6,
        "q": "50% equity at 14%, 50% debt at 10% before tax, 20% tax. WACC is:",
        "choices": [
          "11.0%",
          "12.0%",
          "7.0%",
          "9.0%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). After-tax debt is 8.0%; 0.50 × 14% + 0.50 × 8.0% = 7.0% + 4.0% = 11.0%. (b) 12.0% would use the before-tax debt cost. (c) 7.0% is only the equity part. (d) 9.0% has no basis in the numbers."
      },
      {
        "module": 6,
        "q": "The cost of equity under CAPM with a 5% risk-free rate, 11% market return, and beta 0.8 is:",
        "choices": [
          "11.0%",
          "9.8%",
          "6.0%",
          "5.0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 5% + 0.8 × (11% − 5%) = 5% + 4.8% = 9.8%. (a) 11.0% is the market return. (c) 6.0% is the market risk premium. (d) 5.0% is the risk-free rate alone."
      },
      {
        "module": 7,
        "q": "A project costs $60,000 and returns $18,000 a year for 5 years at 10%. Its NPV is about:",
        "choices": [
          "$8,234.16",
          "$30,000.00",
          "$0.00",
          "-$6,000.00"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PV of inflows = $18,000 × 3.7908 = $68,234.16; NPV = $68,234.16 − $60,000 = $8,234.16. (b) $30,000.00 is total inflows minus cost without discounting. (c) $0.00 would be the NPV at the IRR. (d) The NPV is positive, not negative."
      },
      {
        "module": 7,
        "q": "The same project's simple payback is:",
        "choices": [
          "5.00 years",
          "3.33 years",
          "4.26 years",
          "1.14 years"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $60,000 ÷ $18,000 = 3.33 years. (a) 5.00 years is the project's life. (c) 4.26 years is Project A's discounted payback. (d) 1.14 is Project A's profitability index."
      },
      {
        "module": 7,
        "q": "A sunk cost should be ignored in capital budgeting because:",
        "choices": [
          "It is small",
          "It is already spent and cannot be recovered whatever the firm decides",
          "It is not real money",
          "Accountants say so"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Only incremental cash flows count. (a) Sunk costs can be large. (c) Sunk costs were real money when spent. (d) The reason is economic logic, not an accounting rule."
      },
      {
        "module": 8,
        "q": "CCC = DIO + DSO − DPO. With DIO 30, DSO 20, DPO 15, the CCC is:",
        "choices": [
          "25 days",
          "35 days",
          "65 days",
          "45 days"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 + 20 − 15 = 35 days. (a) 25 days would need DPO of 25. (c) 65 days adds DPO instead of subtracting it. (d) 45 days adds DIO and DSO and subtracts only 5."
      },
      {
        "module": 8,
        "q": "At $8,000 of daily sales and a 35-day cycle, cash tied up is:",
        "choices": [
          "$280,000",
          "$28,000",
          "$2,800,000",
          "$8,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). $8,000 × 35 = $280,000. (b) $28,000 is $800 a day. (c) $2,800,000 is ten times too large. (d) $8,000 is one day's sales."
      },
      {
        "module": 8,
        "q": "Terms of 2/10, net 30 mean:",
        "choices": [
          "Pay in 2 days or 10 days",
          "A 2% discount if paid within 10 days, otherwise the full amount due in 30 days",
          "2% interest per month",
          "A $30 fee"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The first number is the discount, the second is the discount period, net 30 is the due date. (a) The numbers are a discount and a period, not two due dates. (c) It is a discount, not an interest rate. (d) There is no $30 fee."
      },
      {
        "module": 9,
        "q": "The five Cs of credit are:",
        "choices": [
          "Cash, Credit, Collateral, Cost, Chance",
          "Character, Capacity, Capital, Collateral, Conditions",
          "Capital, Cash, Credit, Customers, Competition",
          "Cost, Capacity, Character, Collateral, Cash"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Character, Capacity, Capital, Collateral, Conditions. The other options mix in words that are not among the five Cs."
      },
      {
        "module": 9,
        "q": "A line of credit is the right tool for:",
        "choices": [
          "Buying a building",
          "Covering a short-term seasonal cash gap, drawing only what is needed",
          "Funding a 10-year project",
          "Paying dividends"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A line of credit is short-term, flexible, and charged only on what is drawn. (a) and (c) are long-term needs suited to a term loan. (d) Dividends are paid from profits, not borrowed."
      },
      {
        "module": 9,
        "q": "Debt's main advantage over equity is that it is:",
        "choices": [
          "Never repaid",
          "Cheaper, tax-deductible, and the owners keep control",
          "Risk-free for the firm",
          "Available to anyone"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Debt costs less, its interest is deductible, and lenders get no vote. (a) Debt must be repaid on schedule. (c) Debt is riskier for the firm because it must be repaid in bad years too. (d) Banks lend on evidence, not to anyone."
      },
      {
        "module": 10,
        "q": "The four responses to risk are:",
        "choices": [
          "Buy, sell, hold, trade",
          "Avoid, reduce, retain, transfer",
          "Ignore, deny, blame, hope",
          "Insure, insure, insure, insure"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Avoid, reduce, retain, and transfer cover every response. (a) Buy, sell, hold, and trade are investment actions. (c) Ignoring and hoping are not risk management. (d) Insurance is only one response — transfer."
      },
      {
        "module": 10,
        "q": "A 1-in-200 chance of a $100,000 loss gives an expected loss of:",
        "choices": [
          "$100,000",
          "$500",
          "$5,000",
          "$50"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $100,000 × 0.005 = $500 a year. (a) $100,000 is the loss if it happens. (c) $5,000 would be a 1-in-20 chance. (d) $50 would be a 1-in-2,000 chance."
      },
      {
        "module": 10,
        "q": "A deductible is:",
        "choices": [
          "The total premium paid in a year",
          "The amount the insured pays first on each claim",
          "The most the insurer will pay",
          "A type of insurance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The deductible is the customer's first share of each claim. (a) The premium is the price of coverage. (c) The most the insurer pays is the coverage limit. (d) A deductible is a feature of a policy, not a type of insurance."
      },
      {
        "module": 11,
        "q": "The 50/30/20 rule splits after-tax income into:",
        "choices": [
          "50% saving, 30% needs, 20% wants",
          "50% needs, 30% wants, 20% saving and extra debt repayment",
          "50% wants, 30% saving, 20% needs",
          "50% taxes, 30% needs, 20% wants"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Needs 50%, wants 30%, saving and extra debt 20%. The other orders put saving or wants in the wrong place."
      },
      {
        "module": 11,
        "q": "Take-home pay of $4,000 a month gives a 20% saving amount of:",
        "choices": [
          "$400",
          "$800",
          "$1,200",
          "$2,000"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 20% × $4,000 = $800. (a) $400 is 10%. (c) $1,200 is the 30% wants share. (d) $2,000 is the 50% needs share."
      },
      {
        "module": 11,
        "q": "An emergency fund should cover:",
        "choices": [
          "One week of spending",
          "Three to six months of essential expenses",
          "A year's holidays",
          "The cost of a new car"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Three to six months of essentials, in a savings account. (a) One week is too little for a lost job or a major repair. (c) Holidays are wants, not essentials. (d) A car is a separate savings goal."
      },
      {
        "module": 12,
        "q": "A finance dashboard is:",
        "choices": [
          "A yearly tax return",
          "The small set of numbers a finance manager watches every month, each with a target and a trend",
          "A list of all the firm's customers",
          "A bank statement"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dashboard is a set of tripwires watched monthly. (a) A tax return is an annual filing. (c) A customer list is a sales tool. (d) A bank statement is one input, not the dashboard."
      },
      {
        "module": 12,
        "q": "Cash falling while profit rises most likely means:",
        "choices": [
          "The firm is losing money",
          "Sales are consuming working capital — inventory and receivables grow before cash arrives",
          "The firm has no customers",
          "Profit is always wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Profit counts revenue when earned; cash arrives later, after inventory and receivables. (a) Profit is rising, not falling. (c) Rising profit implies customers exist. (d) Profit is a real measure; it is just not cash."
      },
      {
        "module": 12,
        "q": "The financial plan relates to the business plan as:",
        "choices": [
          "A replacement for it",
          "The chapter where every other chapter is tested in numbers",
          "A document written after the business closes",
          "A tax return"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The financial plan tests marketing, operations, and staffing in numbers. (a) It is part of the business plan, not a replacement. (c) It is written before the business acts. (d) A tax return reports the past; the financial plan forecasts the future."
      },
      {
        "module": 7,
        "q": "Payback's main weakness is that it:",
        "choices": [
          "Is hard to calculate",
          "Ignores cash flows after the payback date and (in simple form) the time value of money",
          "Always gives the wrong answer",
          "Requires a discount rate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Payback stops counting once the cost is repaid. (a) Payback is the easiest tool to calculate. (c) Payback is often right as a liquidity check; it is wrong as a value measure. (d) Simple payback needs no discount rate — that is part of its weakness."
      },
      {
        "module": 7,
        "q": "When two projects compete for the same money, the tie-breaker should be:",
        "choices": [
          "Payback, because it is simplest",
          "IRR, because it is a percentage",
          "NPV, because it measures value in dollars",
          "The project the manager likes best"
        ],
        "answer": 2,
        "explanation": "Correct: (c). NPV measures the dollars of value created, which is the firm's goal. (a) Payback ignores value after the payback date. (b) IRR can mislead when projects differ in size or timing. (d) Preference is not a financial criterion."
      },
      {
        "module": 8,
        "q": "Working capital is:",
        "choices": [
          "Total assets",
          "Current assets minus current liabilities",
          "Cash in the bank only",
          "Long-term debt"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Working capital is the money tied up in day-to-day operations. (a) Total assets include long-term assets. (c) Cash is only one current asset. (d) Long-term debt is a liability, not working capital."
      },
      {
        "module": 9,
        "q": "A credit history is evidence of which C?",
        "choices": [
          "Capacity",
          "Character",
          "Capital",
          "Collateral"
        ],
        "answer": 1,
        "explanation": "Correct: (b). History and honesty are character. (a) Capacity is cash flow. (c) Capital is the owner's own investment. (d) Collateral is assets the bank can claim."
      },
      {
        "module": 11,
        "q": "The avalanche method pays off debt in this order:",
        "choices": [
          "Smallest balance first",
          "Highest interest rate first",
          "Largest balance first",
          "Oldest debt first"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Highest rate first saves the most money. (a) Smallest balance first is the snowball method. (c) Largest balance first is not a standard method. (d) Age of the debt is not the criterion."
      },
      {
        "module": 2,
        "q": "Ratios should be judged by:",
        "choices": [
          "Their absolute value alone",
          "Comparison with the firm's past, similar firms, and the direction of change",
          "The largest ratio in the set",
          "Whether they are above 2.0"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ratio is a clue judged by comparison and trend. (a) Absolute values differ by industry. (c) The largest ratio is not the most important. (d) 2.0 is a rule of thumb for the current ratio only, not for all ratios."
      },
      {
        "module": 3,
        "q": "A higher discount rate makes a future amount worth:",
        "choices": [
          "More today",
          "Less today",
          "The same today",
          "Nothing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A higher rate means the alternative use of money is more attractive, so the future amount is worth less now. (a) A lower rate would make it worth more. (c) The value changes with the rate. (d) It is worth less, not nothing."
      },
      {
        "module": 5,
        "q": "When interest rates rise, a firm's borrowing cost:",
        "choices": [
          "Falls",
          "Rises, because lenders demand more for the higher risk and the higher market rate",
          "Stays the same",
          "Becomes zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rising market rates raise what lenders charge. (a) Borrowing costs move with rates, not against them. (c) Costs change with the market rate. (d) Borrowing is never free."
      },
      {
        "module": 3,
        "q": "Saving $1,000 a year at 6% for 10 years grows to about:",
        "choices": [
          "$10,000.00",
          "$13,180.79",
          "$16,000.00",
          "$6,000.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The annuity factor is 13.1808, so $1,000 × 13.1808 = $13,180.79. (a) $10,000.00 is the total paid in, with no interest. (c) $16,000.00 would need a higher rate. (d) $6,000.00 is less than the total paid in."
      },
      {
        "module": 5,
        "q": "A bond's coupon is 7% and the market requires 7%. Its price relative to its $1,000 face value is:",
        "choices": [
          "Below par",
          "At par — $1,000",
          "Above par",
          "Zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). When the coupon equals the market rate, the bond sells at par. (a) Below par needs a coupon below the market rate. (c) Above par needs a coupon above the market rate. (d) A bond with a 7% coupon is worth about $1,000, not zero."
      }
    ]
  }
};
