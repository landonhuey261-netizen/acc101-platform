// bus201 - Module 9: Artificial Intelligence in Business
module.exports = {
  "number": 9,
  "slug": "artificial-intelligence-in-business",
  "title": "Artificial Intelligence in Business",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what AI does in plain words: find patterns in data and generate likely text, images, or decisions.",
    "Name four real jobs to hand to AI in a small business — and four jobs to keep with people.",
    "Explain why AI output must be checked: it can be confident, fluent, and wrong.",
    "Describe the data-privacy and bias risks of using AI with customer information.",
    "Write a short AI-use rule for a small business: what it may draft, what it may never decide."
  ],
  "sections": [
    {
      "heading": "What AI Actually Is — Without the Hype",
      "html": "\n<p><strong>Artificial intelligence</strong> is software that finds patterns in data and uses them to predict, classify, or generate. The tools a small business meets are mostly two kinds. <strong>Predictive AI</strong> learns from past data: which customers are likely to leave, which products sell together, what demand will be next month. <strong>Generative AI</strong> produces new text, images, or code that resembles what it was trained on: a draft email, a product description, a first version of a report.</p>\n<p>Neither kind understands anything the way a person does. A language model predicts the most likely next words; it does not know whether they are true. That is why its output reads so fluently even when it is wrong — it is optimized for plausible, not for correct. Keep that sentence in mind for the rest of the module: fluent is not the same as true.</p>\n<p>The value of AI does not come from asking it questions. It comes from handing it a job — a repeated, well-defined task with a clear output and a human check at the end. A business that hands AI a job with no check has automated its mistakes.</p>\n<div class=\"callout\"><strong>Key idea:</strong> AI finds patterns and generates plausible output. It does not know what is true. Fluent is not the same as true — and the check is your job.</div>"
    },
    {
      "heading": "Four Jobs to Hand to AI — and Four to Keep",
      "html": "\n<p>Good first jobs for AI in a small business: <strong>drafting</strong> — first versions of product descriptions, social posts, and replies to common questions, reviewed by a person before they go out. <strong>Summarizing</strong> — turning long documents, meeting notes, or survey responses into short briefs. <strong>Sorting and classifying</strong> — tagging support tickets, categorizing expenses, spotting which customers have gone quiet. <strong>Finding patterns</strong> — which products are bought together, which weeks are busiest, which customers are at risk of leaving.</p>\n<p>Jobs to keep with people: anything where an error harms a customer or breaks the law — final prices, contracts, tax filings, and medical or safety advice. Anything that needs a relationship — a difficult conversation, a negotiation, an apology. Anything where the business's reputation is on the line — a public statement, a response to a serious complaint. And any decision where the reasoning must be explainable to a customer, a regulator, or a court: \"the AI said so\" is not an explanation.</p>\n<p>The dividing line is simple: AI drafts, people decide. The moment AI is deciding without a human in the loop, the business has given away its judgment — and its liability.</p>\n<div class=\"callout\"><strong>Key idea:</strong> AI drafts, people decide. Hand AI the repetitive work with a clear output; keep the decisions, the relationships, and the accountability.</div>"
    },
    {
      "heading": "The Check: Why AI Output Must Be Verified",
      "html": "\n<p>AI can invent facts, numbers, and sources with complete confidence — a behavior often called <strong>hallucination</strong>. It can also reproduce errors and biases from its training data, and it can be confidently wrong about anything outside that data, including your business's own prices, policies, and history. None of this makes AI useless; it makes the human check essential.</p>\n<p><strong>Worked check:</strong> A shop uses AI to draft a weekly social post. The AI writes the post in 2 minutes; a person spends 5 minutes checking the price, the date, and the product name against the real records. Drafting by hand took 90 minutes. Step 1: time saved per post = 90 − (2 + 5) = 83 minutes. Step 2: at 8 posts a month, that is 8 × 83 = 664 minutes, or about <strong>11 hours a month</strong> saved — real value, bought by a 5-minute check. Without the check, one wrong price in a post costs more than the month's saving.</p>\n<p>Build the check into the workflow, not into good intentions: the person who checks is named, the source of truth is written down (the price list, the policy document), and nothing customer-facing goes out unchecked. If the check is skipped \"just this once,\" that is the post that will be wrong.</p>\n<div class=\"formula\">Value of AI = Time saved − Cost of checking − Cost of errors that slip through</div>"
    },
    {
      "heading": "Privacy, Bias, and the Rules of the Road",
      "html": "\n<p>Two risks deserve their own section. <strong>Privacy:</strong> what you paste into an AI tool may be stored, reviewed, or used to train future models — depending on the tool and its settings. Customer names, addresses, payment details, health information, and anything covered by a confidentiality duty must not go into a general-purpose AI tool. Use business tools with clear data terms, or strip personal details out before pasting anything in.</p>\n<p><strong>Bias:</strong> AI learns from historical data, and historical data carries historical unfairness. A hiring tool trained on past hires can quietly favor the same kinds of people the business always hired. A credit or pricing model can penalize whole groups. The fix is human review of the outcomes, not just the inputs: check who the system favors and who it rejects, and be ready to explain the pattern.</p>\n<p>Write the rules down — one page is enough. It should say what AI may draft, what it may never decide, what data may never be pasted in, and who checks output before it reaches a customer. A written rule is what turns \"we use AI carefully\" from a hope into a practice a new employee can actually follow.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Never paste customer personal data into a general AI tool, and always check who the AI's decisions favor. The business owns the outcome, even when the AI produced it.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>AI finds patterns and generates plausible output; it does not know what is true.</li>\n<li>Good AI jobs: drafting, summarizing, sorting, finding patterns — always with a human check.</li>\n<li>Keep with people: final prices, contracts, legal and safety matters, relationships, and anything that must be explainable.</li>\n<li>Check output against a named source of truth, and name the person who checks.</li>\n<li>Never paste customer personal data into a general AI tool; watch for bias in who the system favors.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Publishing AI output without checking it. One wrong price, one invented policy, or one hallucinated fact in front of a customer costs more than all the time the AI saved that month.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Handing AI the decision instead of the draft. \"The AI said so\" is not a reason, not an explanation, and not a defense — the business owns every decision it ships.</div>\n<p><strong>Next step:</strong> Module 10 brings AI and automation back to the most common tool in business — the spreadsheet — and shows how routine work graduates from manual sheets to systems.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Artificial intelligence (AI)",
      "def": "Software that finds patterns in data and uses them to predict, classify, or generate text, images, or decisions."
    },
    {
      "term": "Generative AI",
      "def": "AI that produces new text, images, audio, or code resembling what it was trained on."
    },
    {
      "term": "Predictive AI",
      "def": "AI that forecasts outcomes or classifies cases based on patterns in past data."
    },
    {
      "term": "Machine learning",
      "def": "AI built by learning patterns from examples in data, rather than by following hand-written rules."
    },
    {
      "term": "Hallucination",
      "def": "Confident, fluent AI output that is false — invented facts, numbers, or sources."
    },
    {
      "term": "Prompt",
      "def": "The instruction or question given to an AI tool, including the context it needs to do the job."
    },
    {
      "term": "Large language model (LLM)",
      "def": "An AI model trained on vast amounts of text, able to draft and answer in natural language."
    },
    {
      "term": "Chatbot",
      "def": "A program that holds text conversations with users, often answering common questions."
    },
    {
      "term": "AI agent",
      "def": "An AI system that can take multi-step actions on its own, such as checking data and sending messages."
    },
    {
      "term": "Bias (AI)",
      "def": "Systematic unfairness in AI output, usually inherited from biased training data or past decisions."
    },
    {
      "term": "Human in the loop",
      "def": "A workflow where a person reviews and approves AI output before it is used or sent."
    },
    {
      "term": "Automation",
      "def": "Using technology to perform a task without human effort, following defined rules."
    },
    {
      "term": "Training data",
      "def": "The data an AI model learns its patterns from."
    }
  ],
  "video": {
    "title": "Practical Ways to Use AI in Your Small Business | Save Time, Improve Sales & Grow",
    "embedUrl": "https://www.youtube.com/embed/r5qof4JBb_g",
    "note": "Nine practical uses of AI for a small business — chatbots, content, social media, lead qualification, and data analysis — with the warning that AI is a tool, not a replacement for judgment. Compare its list with this module's four jobs to hand over and four to keep.",
    "more": [
      {
        "title": "AI for Small Business Owners: Where to Actually Start (Explained From Zero)",
        "url": "https://www.youtube.com/watch?v=QmMFrpS_L1k"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop drafts social posts by hand in 90 minutes each. With AI, drafting takes 2 minutes and checking takes 5 minutes. (a) How many minutes are saved per post? (b) At 8 posts a month, how many hours a month are saved?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Time with AI = 2 + 5 = 7 minutes. Saving = 90 − 7 = <strong>83 minutes per post</strong>. Step 2: (b) Monthly saving = 8 × 83 = 664 minutes. Step 3: 664 ÷ 60 = 11.07 hours, about <strong>11 hours a month</strong> — saved by a 5-minute check per post.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Sort these jobs into 'hand to AI' or 'keep with people': (a) first draft of a product description, (b) the final price of a custom quote, (c) summarizing 200 survey responses, (d) apologizing to a customer whose order was lost, (e) tagging support tickets by topic, (f) signing a supplier contract.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hand to AI — (a) drafting, (c) summarizing, (e) tagging: repeated, well-defined, checked by a person. Step 2: Keep with people — (b) final price, (d) apology, (f) contract: these carry money, relationships, or legal force, and the business must own the decision and be able to explain it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An AI draft says a product costs $19.99 and is in stock. The real price is $24.99 and it is out of stock until Friday. Explain what went wrong and name the workflow fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The AI hallucinated — it generated a plausible price and stock status without knowing the real ones, because it had no access to the live price list or inventory. Step 2: The fix is a human check against a named source of truth (the price list and the stock system) before anything customer-facing goes out, plus giving the AI the real data instead of letting it guess.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A manager pastes a spreadsheet of customer names, emails, and order histories into a free online AI tool to 'find our best customers.' Name two risks and the safe alternative.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Risk one — privacy: personal data may be stored or used for training by the free tool, breaking the business's duty to its customers. Step 2: Risk two — loss of control: the data is now outside the business's systems with no record of where it went. Step 3: The safe alternative is to strip names and emails (use customer numbers), or use a business AI tool with clear data terms — and only analyze the fields the question actually needs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write a one-paragraph AI-use rule for a 10-person firm, covering: what AI may draft, what it may never decide, and who checks output.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A good rule reads like this: 'AI may draft product descriptions, social posts, and internal summaries. It may never set a final price, approve a refund, sign anything, or send a message to a customer without a named person checking it against the price list or policy first. Customer personal data must never be pasted into a general AI tool. The person who sends any AI-assisted message owns it — if it is wrong, it is their error, not the AI's.' Step 2: The rule works because it names the jobs, the limits, and the owner of the check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hiring manager wants to use an AI tool trained on the firm's past ten years of hires to screen applicants. Name the bias risk and the check that must happen before it is used.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The risk is that the tool learns the firm's historical hiring pattern — if past hires favored one kind of person, the tool will favor the same kind and reject others for reasons nobody can explain. Step 2: The check is to audit the outcomes: run the tool on past applicants, compare who it would have advanced by group, and have a person review every rejection before it stands. Step 3: If the pattern cannot be explained or defended, the tool must not be used for screening.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The most accurate plain-language description of what AI does is:",
      "choices": [
        "It understands business the way a person does",
        "It finds patterns in data and generates plausible predictions or text",
        "It stores data more cheaply than a database",
        "It replaces the need for any human check"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AI works on patterns and likelihood, not understanding. (a) overstates it — fluency is not understanding. (c) describes storage, not AI. (d) is the opposite of the module's rule: the check is essential."
    },
    {
      "q": "A shop drafts a post by hand in 90 minutes. With AI, drafting takes 2 minutes and checking takes 5 minutes. Time saved per post is:",
      "choices": [
        "83 minutes",
        "88 minutes",
        "7 minutes",
        "90 minutes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). AI workflow takes 2 + 5 = 7 minutes; 90 − 7 = 83 minutes saved. (b) forgets the check time. (c) is the AI workflow time, not the saving. (d) is the original time."
    },
    {
      "q": "Which job should stay with people, not AI?",
      "choices": [
        "First draft of a product description",
        "Summarizing survey responses",
        "Setting the final price on a custom quote",
        "Tagging support tickets by topic"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A final price carries money and accountability and must be a human decision. (a), (b), and (d) are repeated, well-defined drafting and sorting jobs that suit AI with a check."
    },
    {
      "q": "AI 'hallucination' means:",
      "choices": [
        "The AI stops working",
        "The AI produces confident, fluent output that is false",
        "The AI runs too slowly",
        "The AI refuses to answer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hallucination is invented facts, numbers, or sources delivered with complete confidence. (a), (c), and (d) are technical failures, not hallucination."
    },
    {
      "q": "Pasting customer names and emails into a free online AI tool is risky mainly because:",
      "choices": [
        "The tool will be slow",
        "Personal data may be stored or used for training, outside the business's control",
        "The tool cannot read spreadsheets",
        "The customers will receive spam from the tool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The data leaves the business's systems under terms it has not checked, breaking its duty to customers. (a) speed is not the issue. (c) the tool can read the data — that is the problem. (d) is not the mechanism of the risk."
    },
    {
      "q": "'The AI said so' is not an acceptable explanation for a decision because:",
      "choices": [
        "AI is never right",
        "The business owns the decision and must be able to explain its reasoning to a customer, regulator, or court",
        "AI decisions are always illegal",
        "Customers dislike AI"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Accountability stays with the business; explainability is a requirement for decisions that affect people. (a) AI is often right — that is not the point. (c) AI decisions are not automatically illegal. (d) customer preference is not the legal or ethical basis."
    },
    {
      "q": "A good first AI job for a small business is:",
      "choices": [
        "Signing contracts",
        "Drafting first versions of product descriptions, reviewed by a person before use",
        "Deciding who to hire",
        "Setting tax filings"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Drafting with a human check is the classic safe first job. (a), (c), and (d) all carry legal, financial, or human consequences that must stay with people."
    },
    {
      "q": "At 8 posts a month saving 83 minutes each, the monthly time saved is about:",
      "choices": [
        "83 minutes",
        "11 hours",
        "90 minutes",
        "664 hours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 8 × 83 = 664 minutes, and 664 ÷ 60 = about 11 hours. (a) is one post's saving. (c) is the original per-post time. (d) confuses minutes with hours."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Artificial Intelligence in Business: Quick Reference</h3>\n<p><strong>Core idea:</strong> AI finds patterns and generates plausible output. It does not know what is true — fluent is not the same as true, and the check is your job.</p>\n<p><strong>Hand to AI:</strong> drafting, summarizing, sorting and classifying, finding patterns — always with a human check against a named source of truth.</p>\n<p><strong>Keep with people:</strong> final prices, contracts, legal and safety matters, relationships, apologies — anything that must be explainable.</p>\n<div class=\"formula\">Value of AI = Time saved − Cost of checking − Cost of errors that slip through</div>\n<p><strong>Watch out:</strong> Never paste customer personal data into a general AI tool. Watch for bias — check who the system's decisions favor. \"The AI said so\" is not a reason.</p>\n<p><strong>Self-check:</strong> Write your one-page AI rule: what AI may draft, what it may never decide, what data may never be pasted in, and who checks output before it reaches a customer.</p>\n"
};
