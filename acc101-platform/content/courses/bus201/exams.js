// bus201 — Midterm and Final exams.
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
        "q": "A system costs $18,000 and saves 12 hours a week at $25 an hour, for 50 weeks a year. Its payback period is:",
        "choices": [
          "1.2 years",
          "0.8 years",
          "2.4 years",
          "1.5 years"
        ],
        "answer": 0,
        "explanation": "Correct (a): Yearly saving = 12 x $25 x 50 = $15,000; payback = $18,000 / $15,000 = 1.2 years. (b) divides the wrong way. (c) doubles the answer. (d) uses 40 weeks instead of 50."
      },
      {
        "module": 1,
        "q": "A shop records 2,400 transactions in a month. Which of these is information rather than data?",
        "choices": [
          "The list of 2,400 individual transactions",
          "The average sale of $22, calculated from those transactions",
          "The raw till receipts",
          "The unprocessed card payments"
        ],
        "answer": 1,
        "explanation": "Correct (b): Information is data that has been processed into something meaningful — the average sale. (a), (c), and (d) are raw, unprocessed data."
      },
      {
        "module": 1,
        "q": "Which system gives middle managers summarized reports from daily transactions?",
        "choices": [
          "A transaction processing system (TPS)",
          "A management information system (MIS)",
          "A decision support system (DSS)",
          "An executive support system (ESS)"
        ],
        "answer": 1,
        "explanation": "Correct (b): A MIS summarizes transaction data into reports for middle managers. (a) A TPS records the transactions themselves. (c) A DSS helps with semi-structured decisions using models. (d) An ESS serves senior executives with highly summarized views."
      },
      {
        "module": 1,
        "q": "A small business uses a system to automate invoicing, cutting billing time from 6 hours to 1 hour a week. This is best described as gaining advantage through:",
        "choices": [
          "Product differentiation",
          "Lower cost through efficiency",
          "A new market",
          "A higher price"
        ],
        "answer": 1,
        "explanation": "Correct (b): Automating a routine task lowers the cost of doing business — an efficiency advantage. (a) Differentiation means a different product, not a cheaper process. (c) No new market is entered. (d) Nothing about price changes."
      },
      {
        "module": 2,
        "q": "On-premises costs $48,000 up front plus $9,600 a year for 3 years. Cloud costs $1,450 a month for 36 months. Which is cheaper over 3 years, and by how much?",
        "choices": [
          "Cloud, by $24,600",
          "On-premises, by $24,600",
          "Cloud, by $9,600",
          "They cost the same"
        ],
        "answer": 0,
        "explanation": "Correct (a): On-premises = $48,000 + (3 x $9,600) = $76,800; cloud = $1,450 x 36 = $52,200; cloud is cheaper by $76,800 - $52,200 = $24,600. (b) reverses the comparison. (c) uses one year of maintenance as the difference. (d) ignores the arithmetic."
      },
      {
        "module": 2,
        "q": "QuickBooks Online and Gmail are examples of:",
        "choices": [
          "Infrastructure as a service (IaaS)",
          "Platform as a service (PaaS)",
          "Software as a service (SaaS)",
          "On-premises software"
        ],
        "answer": 2,
        "explanation": "Correct (c): SaaS delivers finished software over the internet, paid by subscription. (a) IaaS rents raw infrastructure such as servers. (b) PaaS rents a platform for building software. (d) On-premises software is installed and run locally."
      },
      {
        "module": 2,
        "q": "Ten laptops cost $900 each and $120 a year each to maintain. What is the 4-year total cost of ownership?",
        "choices": [
          "$9,000",
          "$13,800",
          "$10,200",
          "$4,800"
        ],
        "answer": 1,
        "explanation": "Correct (b): Per laptop $900 + (4 x $120) = $1,380; for 10 laptops $13,800. (a) counts only the purchase price. (c) adds only one year of maintenance. (d) counts only the maintenance."
      },
      {
        "module": 2,
        "q": "A business keeps sensitive customer data on its own servers and runs its public website on the public cloud. This is a:",
        "choices": [
          "Public cloud",
          "Private cloud",
          "Hybrid cloud",
          "Community cloud"
        ],
        "answer": 2,
        "explanation": "Correct (c): Hybrid cloud combines private infrastructure with public cloud services. (a) is only the public part. (b) is only the private part. (d) is shared infrastructure for a community of organizations."
      },
      {
        "module": 3,
        "q": "A shop has 2,400 customers and 18,000 orders in total. What is the average number of orders per customer?",
        "choices": [
          "7.5",
          "10",
          "6",
          "18"
        ],
        "answer": 0,
        "explanation": "Correct (a): 18,000 / 2,400 = 7.5 orders per customer. (b) is the average after excluding the 600 customers who never ordered (18,000 / 1,800 = 10). (c) and (d) come from no correct division of these numbers."
      },
      {
        "module": 3,
        "q": "In a customer table, the field that uniquely identifies each customer is the:",
        "choices": [
          "Foreign key",
          "Primary key",
          "Index",
          "Query"
        ],
        "answer": 1,
        "explanation": "Correct (b): A primary key uniquely identifies each row in a table. (a) A foreign key links to another table's primary key. (c) An index speeds up searching but does not identify rows. (d) A query is a question asked of the data."
      },
      {
        "module": 3,
        "q": "A bank's transaction system, where every transfer must be exact and consistent, is best served by a:",
        "choices": [
          "NoSQL document store",
          "Relational database",
          "Spreadsheet",
          "Flat file"
        ],
        "answer": 1,
        "explanation": "Correct (b): Relational databases enforce strict consistency and relationships, which money movement requires. (a) NoSQL trades strict consistency for flexibility and scale. (c) A spreadsheet has no enforced structure or concurrency control. (d) A flat file has no relationships or integrity rules."
      },
      {
        "module": 3,
        "q": "The same customer appears three times in a database under slightly different names, so the shop sends three catalogues to one address. This is a failure of:",
        "choices": [
          "Data security",
          "Data quality",
          "Data volume",
          "Data speed"
        ],
        "answer": 1,
        "explanation": "Correct (b): Duplicate, inconsistent records are a data quality problem — the data is not accurate or unique. (a) Security is about unauthorized access. (c) Volume is about amount, not correctness. (d) Speed is about performance, not accuracy."
      },
      {
        "module": 4,
        "q": "An ERP system cuts order processing from 45 minutes to 12 minutes per order. For 60 orders a day, how many hours a day does it save?",
        "choices": [
          "33 hours",
          "12 hours",
          "45 hours",
          "1,980 hours"
        ],
        "answer": 0,
        "explanation": "Correct (a): Saving per order = 45 - 12 = 33 minutes; 60 x 33 = 1,980 minutes = 33 hours. (b) is the new processing time per order. (c) is the old time per order. (d) is the saving in minutes, not hours."
      },
      {
        "module": 4,
        "q": "Which enterprise system manages the relationship with customers — sales, service, and marketing?",
        "choices": [
          "ERP",
          "CRM",
          "SCM",
          "TPS"
        ],
        "answer": 1,
        "explanation": "Correct (b): CRM (customer relationship management) manages the customer relationship. (a) ERP integrates the whole business's internal processes. (c) SCM manages the supply chain. (d) A TPS records transactions."
      },
      {
        "module": 4,
        "q": "The biggest risk in an ERP implementation is usually:",
        "choices": [
          "The software's colour scheme",
          "People and process change — staff not trained and processes not redesigned",
          "The price of the computers",
          "The name of the system"
        ],
        "answer": 1,
        "explanation": "Correct (b): ERP fails most often because people keep working the old way and the new processes are not adopted. (a) and (d) are cosmetic. (c) Hardware is a small, predictable part of the cost."
      },
      {
        "module": 4,
        "q": "A supply chain management (SCM) system helps a business by:",
        "choices": [
          "Tracking orders, stock, and deliveries from supplier to customer",
          "Designing the company logo",
          "Writing the annual report",
          "Hiring staff"
        ],
        "answer": 0,
        "explanation": "Correct (a): SCM coordinates the flow of goods and information from supplier to customer. (b), (c), and (d) are not supply chain functions."
      },
      {
        "module": 5,
        "q": "A product sells for $40, costs $22, carries a 15% marketplace fee and $4 shipping. What is the profit per sale, and the margin?",
        "choices": [
          "$8 profit, 20% margin",
          "$18 profit, 45% margin",
          "$6 profit, 15% margin",
          "$14 profit, 35% margin"
        ],
        "answer": 0,
        "explanation": "Correct (a): Fee = 15% of $40 = $6; profit = $40 - $22 - $6 - $4 = $8; margin = $8 / $40 = 20%. (b) ignores the fee and shipping. (c) mistakes the fee for the profit. (d) ignores the fee."
      },
      {
        "module": 5,
        "q": "With the same sale ($8 profit before advertising), the seller spends $5 on advertising per sale. What is the profit per sale now?",
        "choices": [
          "$8",
          "$3",
          "$13",
          "$0"
        ],
        "answer": 1,
        "explanation": "Correct (b): $8 - $5 = $3 per sale. (a) is the profit before advertising. (c) adds the advertising instead of subtracting it. (d) would need $8 of advertising."
      },
      {
        "module": 5,
        "q": "A subscription costs a customer $25 a month and costs the business $12 a month to serve. If the average customer stays 8 months, what is the lifetime profit per customer?",
        "choices": [
          "$104",
          "$200",
          "$96",
          "$13"
        ],
        "answer": 0,
        "explanation": "Correct (a): Profit per month = $25 - $12 = $13; over 8 months $13 x 8 = $104. (b) is the revenue, not the profit. (c) is the cost over 8 months. (d) is the monthly profit, not the lifetime profit."
      },
      {
        "module": 5,
        "q": "A dropshipped lamp sells for $60. The supplier charges $38, shipping is $7, and the payment fee is 3% of the price. What is the profit?",
        "choices": [
          "$13.20",
          "$15",
          "$22",
          "$9.20"
        ],
        "answer": 0,
        "explanation": "Correct (a): Fee = 3% of $60 = $1.80; profit = $60 - $38 - $7 - $1.80 = $13.20. (b) forgets the payment fee. (c) forgets the shipping and fee. (d) uses a 10% fee."
      },
      {
        "module": 6,
        "q": "A website gets 8,000 visitors and 240 buyers. What is the conversion rate?",
        "choices": [
          "3%",
          "30%",
          "0.3%",
          "24%"
        ],
        "answer": 0,
        "explanation": "Correct (a): 240 / 8,000 = 0.03 = 3%. (b) misplaces the decimal. (c) misplaces it further. (d) divides 240 by 1,000."
      },
      {
        "module": 6,
        "q": "Monthly revenue is $38,000 in October, $44,000 in November, and $48,000 in December. What is the average monthly growth, and the simple forecast for January?",
        "choices": [
          "$5,000 average growth; $53,000 forecast",
          "$6,000 average growth; $54,000 forecast",
          "$4,000 average growth; $52,000 forecast",
          "$10,000 average growth; $58,000 forecast"
        ],
        "answer": 0,
        "explanation": "Correct (a): Growth steps are $6,000 and $4,000; average = ($6,000 + $4,000) / 2 = $5,000; January forecast = $48,000 + $5,000 = $53,000. (b) uses only the first step. (c) uses only the second. (d) adds both steps to December."
      },
      {
        "module": 6,
        "q": "A business has revenue of $60,000 and costs of $36,000. What is its gross margin, and what is the gross profit if revenue rises 10% with the same margin?",
        "choices": [
          "40% margin; $26,400",
          "60% margin; $36,000",
          "40% margin; $24,000",
          "24% margin; $26,400"
        ],
        "answer": 0,
        "explanation": "Correct (a): Gross profit = $60,000 - $36,000 = $24,000; margin = $24,000 / $60,000 = 40%; new revenue = $66,000; new profit = $66,000 x 0.40 = $26,400. (b) mistakes cost share for margin. (c) keeps the old profit instead of scaling it. (d) miscomputes the margin."
      },
      {
        "module": 6,
        "q": "Which of these is an actionable KPI for a small online shop?",
        "choices": [
          "Total page views ever",
          "Conversion rate this week",
          "Number of followers",
          "Total visitors since launch"
        ],
        "answer": 1,
        "explanation": "Correct (b): Conversion rate this week can be acted on — a fall means the shop or the offer needs fixing. (a), (c), and (d) are vanity metrics: large numbers that do not tell the owner what to do."
      },
      {
        "module": 6,
        "q": "A shop notices that ice cream sales and sunburn cases rise together in summer. The correct conclusion is:",
        "choices": [
          "Ice cream causes sunburn",
          "Sunburn causes ice cream sales",
          "Both rise because of a third factor — hot weather — so correlation is not causation",
          "The data must be wrong"
        ],
        "answer": 2,
        "explanation": "Correct (c): Correlation does not prove causation; hot weather drives both. (a) and (b) claim a causal link the data cannot support. (d) The data is fine — the interpretation is the problem."
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
        "q": "A system costs $24,000 and saves 10 hours a week at $30 an hour, for 50 weeks a year. Its payback period is:",
        "choices": [
          "1.6 years",
          "1.2 years",
          "2.4 years",
          "0.8 years"
        ],
        "answer": 0,
        "explanation": "Correct (a): Yearly saving = 10 x $30 x 50 = $15,000; payback = $24,000 / $15,000 = 1.6 years. (b) is the payback of the midterm's $18,000 system. (c) doubles the saving error. (d) divides the wrong way."
      },
      {
        "module": 1,
        "q": "A manager asks for a system that helps with semi-structured decisions, such as choosing between three suppliers using a model. Which system fits?",
        "choices": [
          "TPS",
          "MIS",
          "DSS",
          "ESS"
        ],
        "answer": 2,
        "explanation": "Correct (c): A DSS supports semi-structured decisions with models and what-if analysis. (a) A TPS records transactions. (b) A MIS gives summarized reports. (d) An ESS gives executives highly summarized views."
      },
      {
        "module": 1,
        "q": "Which of these turns data into information?",
        "choices": [
          "Storing raw till receipts",
          "Calculating the average sale from the receipts",
          "Copying the receipts to a backup drive",
          "Deleting old receipts"
        ],
        "answer": 1,
        "explanation": "Correct (b): Processing raw data into a meaningful figure — the average sale — creates information. (a), (c), and (d) move or remove raw data without processing it."
      },
      {
        "module": 2,
        "q": "Cloud costs $1,450 a month for two years, then rises to $1,900 a month in year 3. What is the 3-year cloud cost, and how does it compare with the on-premises cost of $76,800?",
        "choices": [
          "$57,600; cheaper by $19,200",
          "$52,200; cheaper by $24,600",
          "$68,400; cheaper by $8,400",
          "$76,800; the same"
        ],
        "answer": 0,
        "explanation": "Correct (a): Two years = $1,450 x 24 = $34,800; year 3 = $1,900 x 12 = $22,800; total = $57,600; cheaper than $76,800 by $19,200. (b) is the cost if the price never rose. (c) miscomputes the year-3 cost. (d) is the on-premises figure."
      },
      {
        "module": 2,
        "q": "A developer rents virtual servers and installs her own database on them. This is:",
        "choices": [
          "SaaS",
          "PaaS",
          "IaaS",
          "On-premises"
        ],
        "answer": 2,
        "explanation": "Correct (c): IaaS rents raw infrastructure — servers, storage, networking — and the customer installs what it needs. (a) SaaS is finished software. (b) PaaS is a platform for building software. (d) On-premises means the customer's own hardware."
      },
      {
        "module": 2,
        "q": "A business stores its customer list in a cloud spreadsheet that anyone with the link can open. The main risk is:",
        "choices": [
          "The spreadsheet is too slow",
          "A data breach — sensitive data exposed through a shared link",
          "The cloud is too expensive",
          "The data is too small"
        ],
        "answer": 1,
        "explanation": "Correct (b): An open link exposes customer data to anyone who finds it — a privacy and security failure. (a) Speed is not the problem. (c) A spreadsheet is cheap. (d) Size is irrelevant to the risk."
      },
      {
        "module": 3,
        "q": "A shop has 2,400 customers and 18,000 orders, but 600 customers never ordered. What is the average orders per customer who has ordered?",
        "choices": [
          "7.5",
          "10",
          "30",
          "3"
        ],
        "answer": 1,
        "explanation": "Correct (b): 18,000 / (2,400 - 600) = 18,000 / 1,800 = 10. (a) is the average over all customers including those who never ordered. (c) divides orders by the 600. (d) divides customers by orders."
      },
      {
        "module": 3,
        "q": "A query that lists every customer who has spent more than $500 is an example of:",
        "choices": [
          "Data entry",
          "Data retrieval",
          "Data deletion",
          "Data encryption"
        ],
        "answer": 1,
        "explanation": "Correct (b): A query retrieves data that matches a condition. (a) Data entry adds data. (c) Deletion removes data. (d) Encryption scrambles data for security."
      },
      {
        "module": 3,
        "q": "A social media app stores posts, comments, and photos that do not all have the same fields. Which database type fits best?",
        "choices": [
          "A strict relational database",
          "A NoSQL document store",
          "A spreadsheet",
          "A flat file"
        ],
        "answer": 1,
        "explanation": "Correct (b): NoSQL document stores handle flexible, varied data at scale. (a) A relational database needs a fixed schema for every row. (c) A spreadsheet cannot serve an app at scale. (d) A flat file has no structure or query support."
      },
      {
        "module": 4,
        "q": "An ERP system cuts order processing from 45 to 12 minutes. For 60 orders a day, how many hours a day are saved?",
        "choices": [
          "12 hours",
          "33 hours",
          "45 hours",
          "55 hours"
        ],
        "answer": 1,
        "explanation": "Correct (b): Saving per order = 33 minutes; 60 x 33 = 1,980 minutes = 33 hours. (a) is the new processing time. (c) is the old time. (d) adds the two times together."
      },
      {
        "module": 4,
        "q": "A business's CRM shows that 20% of customers bring in 80% of revenue. The best action is to:",
        "choices": [
          "Ignore those customers",
          "Give those customers better service and attention, since they carry the business",
          "Charge those customers more",
          "Delete the other 80% of customers"
        ],
        "answer": 1,
        "explanation": "Correct (b): The CRM reveals where the value is, and those customers deserve the best service. (a) ignores the most valuable segment. (c) punishes the best customers. (d) The other customers still buy, and deleting them destroys value."
      },
      {
        "module": 4,
        "q": "Which of these is a module of a typical ERP system?",
        "choices": [
          "Finance and inventory",
          "The company logo",
          "The office lease",
          "The staff car park"
        ],
        "answer": 0,
        "explanation": "Correct (a): ERP integrates finance, inventory, HR, sales, and similar functions. (b), (c), and (d) are not system modules."
      },
      {
        "module": 5,
        "q": "A product sells for $50, costs $30, carries a 10% marketplace fee and $5 shipping. What is the profit and the margin?",
        "choices": [
          "$10 profit, 20% margin",
          "$15 profit, 30% margin",
          "$5 profit, 10% margin",
          "$20 profit, 40% margin"
        ],
        "answer": 0,
        "explanation": "Correct (a): Fee = 10% of $50 = $5; profit = $50 - $30 - $5 - $5 = $10; margin = $10 / $50 = 20%. (b) forgets the fee. (c) mistakes the fee for the profit. (d) forgets both the fee and the shipping."
      },
      {
        "module": 5,
        "q": "A subscription brings in $25 a month per customer and costs $12 a month to serve. If the average customer stays 8 months, what is the lifetime profit?",
        "choices": [
          "$104",
          "$200",
          "$13",
          "$96"
        ],
        "answer": 0,
        "explanation": "Correct (a): Monthly profit = $13; over 8 months $13 x 8 = $104. (b) is the revenue. (c) is one month's profit. (d) is the cost over 8 months."
      },
      {
        "module": 5,
        "q": "A dropshipped item sells for $60, the supplier charges $38, shipping is $7, and the payment fee is 3%. What is the profit?",
        "choices": [
          "$13.20",
          "$15",
          "$22",
          "$9.20"
        ],
        "answer": 0,
        "explanation": "Correct (a): Fee = $1.80; profit = $60 - $38 - $7 - $1.80 = $13.20. (b) forgets the fee. (c) forgets shipping and the fee. (d) uses a 10% fee."
      },
      {
        "module": 6,
        "q": "A website gets 8,000 visitors and 240 buyers. If the conversion rate rises to 4%, how many buyers would there be?",
        "choices": [
          "240",
          "320",
          "400",
          "200"
        ],
        "answer": 1,
        "explanation": "Correct (b): 4% of 8,000 = 320 buyers. (a) is the current number at 3%. (c) is 5% of 8,000. (d) is 2.5% of 8,000."
      },
      {
        "module": 6,
        "q": "Revenue is $38,000, then $44,000, then $48,000 over three months. What is the simple forecast for the next month using average growth?",
        "choices": [
          "$48,000",
          "$53,000",
          "$54,000",
          "$58,000"
        ],
        "answer": 1,
        "explanation": "Correct (b): Growth steps are $6,000 and $4,000, averaging $5,000; forecast = $48,000 + $5,000 = $53,000. (a) repeats December. (c) uses only the first step. (d) adds both steps."
      },
      {
        "module": 6,
        "q": "Revenue is $60,000 with a 40% gross margin. If revenue rises 10% with the same margin, what is the new gross profit?",
        "choices": [
          "$24,000",
          "$26,400",
          "$36,000",
          "$66,000"
        ],
        "answer": 1,
        "explanation": "Correct (b): New revenue = $66,000; profit = $66,000 x 0.40 = $26,400. (a) is the old profit. (c) is the old cost. (d) is the new revenue, not the profit."
      },
      {
        "module": 7,
        "q": "An employee receives an email that looks like it is from the bank, asking for a password. The right action is:",
        "choices": [
          "Reply with the password",
          "Click the link and log in",
          "Do not click or reply — check with the bank through a known number or address",
          "Forward it to all staff"
        ],
        "answer": 2,
        "explanation": "Correct (c): This is phishing; never click or reply, and verify through a known channel. (a) hands the password to the attacker. (b) leads to a fake login page. (d) spreads the attack."
      },
      {
        "module": 7,
        "q": "Two-factor authentication (2FA) improves security because:",
        "choices": [
          "It makes the password longer",
          "It requires a second proof of identity, so a stolen password alone is not enough",
          "It removes the need for a password",
          "It encrypts the whole internet"
        ],
        "answer": 1,
        "explanation": "Correct (b): 2FA adds something the user has (a phone or code) to something the user knows (the password). (a) Password length is a different control. (c) 2FA adds to the password, it does not replace it. (d) It protects one account, not the internet."
      },
      {
        "module": 7,
        "q": "A ransomware attack encrypts a business's files and demands payment. The best preparation is:",
        "choices": [
          "Pay immediately",
          "Regular tested backups kept separate from the main system, so the files can be restored",
          "Turn off the computers forever",
          "Delete the files"
        ],
        "answer": 1,
        "explanation": "Correct (b): Tested, separate backups let the business restore without paying. (a) Paying does not guarantee the files return and funds the attackers. (c) destroys the business. (d) destroys the data the attacker already holds."
      },
      {
        "module": 7,
        "q": "Under data privacy rules, a business collecting customer emails for a newsletter should:",
        "choices": [
          "Buy email lists and add anyone",
          "Get clear consent, explain the use, and let people opt out",
          "Share the list with other businesses",
          "Keep the emails forever, even after people leave"
        ],
        "answer": 1,
        "explanation": "Correct (b): Consent, transparency, and the right to opt out are the core of privacy rules. (a) Buying lists without consent breaks the rules. (c) Sharing without consent breaks them. (d) Keeping data longer than needed breaks the minimisation principle."
      },
      {
        "module": 8,
        "q": "In the systems development life cycle (SDLC), which phase comes first?",
        "choices": [
          "Coding",
          "Testing",
          "Requirements analysis — understanding what the system must do",
          "Maintenance"
        ],
        "answer": 2,
        "explanation": "Correct (c): Requirements come first — building before understanding the need is how systems fail. (a) Coding follows design. (b) Testing follows building. (d) Maintenance follows launch."
      },
      {
        "module": 8,
        "q": "A business needs software that no off-the-shelf product fits, and it has a skilled developer on staff. The best choice is most likely to:",
        "choices": [
          "Buy the closest product and force the business to fit it",
          "Build custom software, since the need is unique and the skill is in-house",
          "Do nothing",
          "Buy the most expensive product available"
        ],
        "answer": 1,
        "explanation": "Correct (b): A unique need plus in-house skill favours building. (a) Forcing the business to fit the software is the classic buy mistake. (c) does nothing about the need. (d) Price is not a measure of fit."
      },
      {
        "module": 8,
        "q": "During testing, a tester finds that an order total is wrong when a discount is applied. The correct response is to:",
        "choices": [
          "Launch anyway and fix it later",
          "Record the defect, fix it, and retest before launch",
          "Remove the discount feature silently",
          "Blame the tester"
        ],
        "answer": 1,
        "explanation": "Correct (b): Defects found in testing are recorded, fixed, and retested — that is what testing is for. (a) ships a known error to customers. (c) removes a feature customers were promised. (d) The tester did the job."
      },
      {
        "module": 8,
        "q": "A system goes live, and two weeks later users ask for a small change to a report. This work belongs to which SDLC phase?",
        "choices": [
          "Requirements",
          "Design",
          "Maintenance",
          "Testing"
        ],
        "answer": 2,
        "explanation": "Correct (c): Changes after launch are maintenance. (a) Requirements happened before building. (b) Design happened before building. (d) Testing happens before launch."
      },
      {
        "module": 9,
        "q": "Writing a social media post by hand takes 90 minutes. With an AI draft, the owner spends 2 minutes prompting and 5 minutes editing. How much time is saved per post?",
        "choices": [
          "83 minutes",
          "90 minutes",
          "7 minutes",
          "85 minutes"
        ],
        "answer": 0,
        "explanation": "Correct (a): AI route = 2 + 5 = 7 minutes; saved = 90 - 7 = 83 minutes. (b) is the hand-written time. (c) is the AI route time. (d) subtracts only the 5 editing minutes."
      },
      {
        "module": 9,
        "q": "If the owner writes 8 posts a month, how many hours a month does the AI route save?",
        "choices": [
          "About 11 hours",
          "About 7 hours",
          "About 83 hours",
          "About 1 hour"
        ],
        "answer": 0,
        "explanation": "Correct (a): 8 x 83 = 664 minutes, about 11 hours. (b) is roughly the AI route's total time. (c) mistakes minutes for hours. (d) is far too low."
      },
      {
        "module": 9,
        "q": "An AI tool confidently states a fact that is wrong. This is called:",
        "choices": [
          "A hallucination, and it is why AI output must be checked before it is used",
          "A bug in the user's computer",
          "A virus",
          "A feature"
        ],
        "answer": 0,
        "explanation": "Correct (a): Hallucination is confident, invented output, and it is the reason every AI draft must be checked. (b) The computer is fine. (c) It is not malware. (d) It is a limitation, not a feature."
      },
      {
        "module": 9,
        "q": "The best use of AI for a small business is to:",
        "choices": [
          "Let it make every decision",
          "Use it for routine drafts and summaries, with a human checking and deciding",
          "Feed it all customer data without thinking",
          "Replace all staff"
        ],
        "answer": 1,
        "explanation": "Correct (b): AI is a tool for routine work under human judgment. (a) AI cannot be accountable for decisions. (c) Feeding customer data without thought is a privacy risk. (d) AI cannot replace the judgment and relationships a business runs on."
      },
      {
        "module": 10,
        "q": "A weekly report takes 6 hours by hand. An automated report takes 30 minutes to check. How many hours a year are saved over 50 weeks, and what is that worth at $28 an hour?",
        "choices": [
          "275 hours; $7,700",
          "300 hours; $8,400",
          "250 hours; $7,000",
          "275 hours; $8,400"
        ],
        "answer": 0,
        "explanation": "Correct (a): Saving per week = 6 - 0.5 = 5.5 hours; over 50 weeks 5.5 x 50 = 275 hours; at $28 an hour 275 x $28 = $7,700. (b) uses 6 hours saved a week. (c) uses 5 hours saved a week. (d) gets the hours right but multiplies by the wrong rate."
      },
      {
        "module": 10,
        "q": "The automated report costs $1,500 to set up. It saves $154 a week. What is the payback period?",
        "choices": [
          "About 10 weeks",
          "About 5 weeks",
          "About 20 weeks",
          "About 1 week"
        ],
        "answer": 0,
        "explanation": "Correct (a): $1,500 / $154 = 9.7 weeks, about 10 weeks. (b) and (c) miscompute the division. (d) would need a $1,500 weekly saving."
      },
      {
        "module": 10,
        "q": "Copying orders between two systems takes 45 minutes a day, 5 days a week, 50 weeks a year, at $22 an hour. An integration costing $900 removes the work. What is the first-year saving?",
        "choices": [
          "$4,125",
          "$3,225",
          "$900",
          "$5,025"
        ],
        "answer": 1,
        "explanation": "Correct (b): Time = 0.75 x 5 x 50 = 187.5 hours; value = 187.5 x $22 = $4,125; first-year saving = $4,125 - $900 = $3,225. (a) is the saving before the integration cost. (c) is the integration cost alone. (d) adds the cost instead of subtracting it."
      },
      {
        "module": 11,
        "q": "A technology project has a fixed deadline and a fixed budget. The customer asks to add a major feature. Using the triple constraint, the project manager should:",
        "choices": [
          "Add it for free",
          "Explain that scope, time, and cost are linked — adding scope means more time, more money, or cutting something else",
          "Refuse without discussion",
          "Add it and miss the deadline silently"
        ],
        "answer": 1,
        "explanation": "Correct (b): The triple constraint makes the trade-off explicit so the customer decides. (a) pretends the trade-off does not exist. (c) refuses without offering the choice. (d) hides the impact instead of managing it."
      },
      {
        "module": 11,
        "q": "The work breakdown structure (WBS) is:",
        "choices": [
          "A list of the project team",
          "The project broken into deliverables until each piece is small enough to estimate, assign, and track",
          "The project budget",
          "The project schedule"
        ],
        "answer": 1,
        "explanation": "Correct (b): The WBS is the deliverable-based breakdown that the schedule and budget are built from. (a) is the organization chart. (c) and (d) are built from the WBS, not the WBS itself."
      },
      {
        "module": 11,
        "q": "A project to launch a new online store should start with:",
        "choices": [
          "Coding the website",
          "A charter stating the purpose, objectives, deliverables, and authority",
          "Buying advertising",
          "Hiring staff"
        ],
        "answer": 1,
        "explanation": "Correct (b): The charter authorizes the project and defines what it must deliver. (a) Coding before the scope is written is how projects fail. (c) and (d) come after the project is defined."
      },
      {
        "module": 12,
        "q": "A business pays $720 a year for a CRM and $480 a year for stock alerts, and $5,000 once for a website. What is the first-year total cost?",
        "choices": [
          "$1,200",
          "$6,200",
          "$5,000",
          "$5,720"
        ],
        "answer": 1,
        "explanation": "Correct (b): $720 + $480 + $5,000 = $6,200. (a) is only the yearly subscriptions. (c) is only the website. (d) omits the alerts."
      },
      {
        "module": 12,
        "q": "The same business saves 6 hours a week at $25 an hour over 50 weeks. How much does it save in a year, and does the first-year investment pay for itself?",
        "choices": [
          "$7,500; yes, by $1,300",
          "$7,500; no",
          "$6,000; yes",
          "$7,500; it breaks even exactly"
        ],
        "answer": 0,
        "explanation": "Correct (a): Saving = 6 x 50 x $25 = $7,500; first-year cost $6,200; benefit = $7,500 - $6,200 = $1,300. (b) ignores the arithmetic. (c) miscomputes the saving. (d) $7,500 is not equal to $6,200."
      },
      {
        "module": 12,
        "q": "When choosing the first system for a small business, the right first step is to:",
        "choices": [
          "Buy the most expensive system",
          "List the requirements and weight them before looking at options",
          "Ask the salesperson what to buy",
          "Copy what a competitor bought"
        ],
        "answer": 1,
        "explanation": "Correct (b): Requirements first — the system must be judged against what the business actually needs. (a) Price is not fit. (c) The salesperson sells, not advises. (d) The competitor's needs are not yours."
      },
      {
        "module": 12,
        "q": "A business has a working website, a CRM, and automated reports, but no backup of its customer data. What is the most urgent gap?",
        "choices": [
          "A new logo",
          "A backup and recovery plan for the customer data",
          "More social media posts",
          "A faster website"
        ],
        "answer": 1,
        "explanation": "Correct (b): Without a backup, one failure or attack destroys the customer data the whole business runs on. (a), (c), and (d) are improvements, not the urgent risk."
      }
    ]
  }
};
