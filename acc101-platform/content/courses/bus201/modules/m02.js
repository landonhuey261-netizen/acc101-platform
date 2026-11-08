// bus201 - Module 2: Hardware, Software & the Cloud
module.exports = {
  "number": 2,
  "slug": "hardware-software-and-the-cloud",
  "title": "Hardware, Software & the Cloud",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the hardware a small business actually needs and what each piece does.",
    "Tell system software, application software, and SaaS apart — and say who maintains each one.",
    "Explain IaaS, PaaS, and SaaS in plain words with one example of each.",
    "Compare public, private, and hybrid cloud and say when each fits.",
    "Work a three-year total cost of ownership (TCO) comparison between on-premises and cloud."
  ],
  "sections": [
    {
      "heading": "Hardware: The Machines That Do the Work",
      "html": "\n<p><strong>Hardware</strong> is everything you can touch: laptops and desktops, phones and tablets, barcode scanners, receipt printers, routers, and the servers that store a firm's data. For most small businesses the list is short — a reliable computer per worker, a fast and secure network, and a backup device or service. The expensive mistake is buying power you will never use, or buying cheap machines that fail during the busiest week of the year.</p>\n<p>Two hardware ideas matter for decisions. <strong>Capacity</strong> is how much the machine can handle: processor speed, memory, and storage. <strong>Reliability</strong> is whether it keeps working: a cheap laptop that dies in month 11 costs more than a good one that lasts four years. Always price hardware over its whole life — purchase, repairs, and the cost of the day it is out of action — not just the sticker price.</p>\n<p>Servers deserve a special note. A server is simply a computer that serves other computers: it holds shared files, runs the database, or hosts an application. A small firm today often rents server capacity instead of owning a box in a back room, which is the cloud decision covered in section 3.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Buy hardware for the busiest day, not the average day, and price it over its full life. A machine that fails at peak season is the most expensive machine you own.</div>"
    },
    {
      "heading": "Software: Buy It, Rent It, or Build It",
      "html": "\n<p><strong>System software</strong> runs the machine itself — operating systems like Windows, macOS, and Linux. <strong>Application software</strong> does the business work: accounting, email, design, scheduling. You can buy an application outright, subscribe to it as a service, or have it built for you, and each choice moves the cost and the risk to a different place.</p>\n<p><strong>Software as a Service (SaaS)</strong> is now the default for small business: you pay monthly, the vendor hosts the software, updates it, and backs it up. Email, accounting, and customer management are usually SaaS now. The trade-off is dependence — if the vendor raises prices or closes, you must move — and a monthly bill that never ends, which is why the three-year comparison in section 4 matters.</p>\n<p><strong>Off-the-shelf vs. custom:</strong> off-the-shelf software is cheaper and proven, but you adapt your process to fit it. Custom software fits your process exactly, but it costs far more, takes months, and you own the maintenance forever. The honest rule: buy off the shelf unless the process is the very thing that makes your business different.</p>\n<div class=\"callout\"><strong>Key idea:</strong> With SaaS you are renting, not owning. That is usually the right call for standard work like accounting — and usually the wrong call for the one process your whole business depends on being different.</div>"
    },
    {
      "heading": "The Cloud: Renting Somebody Else's Computers",
      "html": "\n<p><strong>Cloud computing</strong> is on-demand computing over the internet, paid for as you use it. Instead of buying servers, you rent capacity from a provider such as Amazon Web Services, Microsoft Azure, or Google Cloud. The three service layers are worth learning precisely, because vendors use the names as sales language.</p>\n<p><strong>IaaS (Infrastructure as a Service)</strong> rents you raw machines, storage, and networking — you still install and run your own software. <strong>PaaS (Platform as a Service)</strong> rents you a ready platform to build and run applications on, without managing the machines underneath. <strong>SaaS (Software as a Service)</strong> rents you the finished application itself, ready to log into. A useful memory aid: IaaS rents the kitchen, PaaS rents the kitchen plus the ovens, SaaS serves you the meal.</p>\n<p>Cloud also comes in deployment shapes. A <strong>public cloud</strong> is shared infrastructure rented by many customers — cheap and flexible. A <strong>private cloud</strong> is dedicated to one organization — more control, higher cost. A <strong>hybrid cloud</strong> mixes the two, keeping sensitive work private and putting the rest on public capacity, for example to absorb a seasonal rush.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The cloud turns a big one-time purchase into a monthly bill and moves maintenance to the vendor. That is a cash-flow and risk decision, not just a technology one.</div>"
    },
    {
      "heading": "Cloud vs. On-Premises: Work the Three-Year Numbers",
      "html": "\n<p>Never compare cloud and on-premises on the first year alone, because the shapes are opposite: on-premises is a big purchase plus small yearly costs; cloud is a steady monthly bill. Compare <strong>total cost of ownership (TCO)</strong> over three years, including everything: purchase, installation, maintenance, power, backups, and staff time.</p>\n<p><strong>Worked example.</strong> A 12-person firm needs a file and application server. On-premises: a server and setup for $48,000, plus $9,600 a year in maintenance, power, and backup. Cloud: $1,450 a month, all included. Step 1: three-year on-premises cost = $48,000 + (3 × $9,600) = $48,000 + $28,800 = <strong>$76,800</strong>. Step 2: three-year cloud cost = $1,450 × 36 = <strong>$52,200</strong>. Step 3: the cloud is cheaper by $76,800 − $52,200 = <strong>$24,600</strong> over three years — and it also removes the risk of a failed server and the cost of replacing it in year four.</p>\n<p>But the answer flips easily. If the firm already owns the server room, has an IT person on staff, and the workload never changes, on-premises can win. If usage grows, the cloud bill grows with it, so re-run the numbers when headcount or data volumes jump. The method matters more than this one answer: list every cost, use the same three-year window, and include the cost of failure.</p>\n<div class=\"formula\">3-year TCO (on-premises) = Purchase + 3 × Annual running cost &nbsp;|&nbsp; 3-year TCO (cloud) = Monthly fee × 36</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Hardware is the machines; system software runs them; application software does the business work.</li>\n<li>SaaS means renting finished software monthly — the vendor hosts, updates, and backs it up.</li>\n<li>IaaS rents machines, PaaS rents a platform to build on, SaaS rents the finished application.</li>\n<li>Public cloud is shared and cheap; private cloud is dedicated and controlled; hybrid mixes the two.</li>\n<li>Compare cloud and on-premises on three-year TCO, including maintenance, power, backups, and failure risk.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Comparing a $1,450 monthly cloud bill with a $48,000 server and concluding the cloud is \"expensive.\" Over three years the cloud costs $52,200 and the server costs $76,800 — the monthly bill looks big only because the server's running costs are hidden in other budgets.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying \"we are moving to the cloud\" as if it were one thing. Moving email to SaaS, renting a virtual server (IaaS), and building on a platform (PaaS) are three different decisions with different costs, skills, and exit plans.</div>\n<p><strong>Next step:</strong> Module 3 looks at where the data itself lives — databases — and why a spreadsheet stops being enough.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Hardware",
      "def": "The physical components of a system: computers, phones, scanners, servers, routers, and storage devices."
    },
    {
      "term": "System software",
      "def": "Software that runs the computer itself, such as an operating system."
    },
    {
      "term": "Application software",
      "def": "Software that does business work, such as accounting, email, or scheduling."
    },
    {
      "term": "Software as a Service (SaaS)",
      "def": "Finished software rented by subscription and hosted by the vendor, accessed over the internet."
    },
    {
      "term": "Cloud computing",
      "def": "On-demand computing services — servers, storage, software — delivered over the internet and paid for as used."
    },
    {
      "term": "IaaS",
      "def": "Infrastructure as a Service: rented virtual machines, storage, and networking; the customer manages its own software."
    },
    {
      "term": "PaaS",
      "def": "Platform as a Service: a rented, ready platform for building and running applications without managing servers."
    },
    {
      "term": "Public cloud",
      "def": "Cloud infrastructure shared by many customers, rented on demand."
    },
    {
      "term": "Private cloud",
      "def": "Cloud infrastructure dedicated to a single organization, giving more control at higher cost."
    },
    {
      "term": "Hybrid cloud",
      "def": "A mix of private and public cloud, keeping sensitive work private and using public capacity for the rest."
    },
    {
      "term": "Server",
      "def": "A computer that provides services — files, databases, applications — to other computers on a network."
    },
    {
      "term": "Total cost of ownership (TCO)",
      "def": "The full cost of a system over its life: purchase, running costs, maintenance, and the cost of failure."
    },
    {
      "term": "On-premises",
      "def": "Hardware and software owned and run by the business itself, on its own site."
    },
    {
      "term": "Scalability",
      "def": "The ability of a system to handle more work by adding capacity, easily and quickly."
    }
  ],
  "video": {
    "title": "Cloud Computing For Beginners | What is Cloud Computing | Cloud Computing Explained | Simplilearn",
    "embedUrl": "https://www.youtube.com/embed/RWgW-CgdIk0",
    "note": "A beginner-friendly walk through what the cloud is, the deployment models, and the IaaS/PaaS/SaaS layers, with an AWS demo at the end. Watch for the pay-as-you-go idea — that is the heart of the Module 2 cost comparison.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A firm is choosing between a $48,000 server (plus $9,600 a year running costs) and a cloud service at $1,450 a month. Work the three-year TCO of each and state which is cheaper and by how much.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: On-premises = $48,000 + (3 × $9,600) = $48,000 + $28,800 = <strong>$76,800</strong>. Step 2: Cloud = $1,450 × 36 = <strong>$52,200</strong>. Step 3: Cloud is cheaper by $76,800 − $52,200 = <strong>$24,600</strong> over three years.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the Problem 1 example, the cloud bill rises to $1,900 a month in year 3 because the firm hires more staff. Recompute the three-year cloud TCO and say whether the cloud is still cheaper.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Years 1–2 at $1,450 = $1,450 × 24 = $34,800. Step 2: Year 3 at $1,900 = $1,900 × 12 = $22,800. Step 3: Total = $34,800 + $22,800 = <strong>$57,600</strong>. Step 4: Against on-premises $76,800, the cloud is still cheaper by $19,200 — but the gap is shrinking, so the firm should re-check if headcount keeps growing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Classify each as IaaS, PaaS, or SaaS: (a) a firm rents virtual servers and installs its own accounting system on them, (b) a developer builds an app on a hosted platform without managing servers, (c) a shop logs into an online accounting app and pays monthly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) is <strong>IaaS</strong> — raw machines rented, software managed by the customer. Step 2: (b) is <strong>PaaS</strong> — a ready platform to build on. Step 3: (c) is <strong>SaaS</strong> — the finished application, rented and ready to use.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A dental clinic keeps patient records on its own server because the law requires tight control, but runs its booking website on public cloud capacity to absorb Monday-morning demand. Name the deployment model and explain why it fits.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>hybrid cloud</strong>. Step 2: The sensitive records stay in the controlled private environment, meeting the legal duty. Step 3: The public-facing booking load, which spikes and falls, uses cheap, elastic public capacity instead of a private server sized for the worst Monday.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A retailer buys 10 laptops at $900 each and expects them to last 4 years, with $120 a year in repairs per laptop. What is the four-year TCO per laptop and for all 10?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Per laptop: $900 + (4 × $120) = $900 + $480 = <strong>$1,380</strong>. Step 2: For 10 laptops: 10 × $1,380 = <strong>$13,800</strong>. Step 3: Note this excludes the cost of a laptop being out of action — the TCO in the module adds failure cost for the same reason.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A bakery's ordering process is unique — suppliers are paid by weight delivered, not by order — and no off-the-shelf app supports it. Argue for custom software in two sentences, and name the biggest risk of that choice.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The weight-based payment rule is the process that makes this bakery's supplier relationships work, and forcing it into a standard app would mean manual workarounds every single delivery. Step 2: Custom software fits the process exactly. Step 3: The biggest risk is that the bakery owns the maintenance forever — every fix, update, and change is its bill and its problem.</p>"
    }
  ],
  "quiz": [
    {
      "q": "IaaS, PaaS, and SaaS differ mainly in:",
      "choices": [
        "How fast the internet connection is",
        "How much of the stack the vendor manages — machines, platform, or finished application",
        "Whether the software is free",
        "The size of the company using them"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IaaS rents machines, PaaS rents a platform, SaaS rents the finished app — the line is who manages what. (a) connection speed is unrelated. (c) all three are paid services. (d) company size does not define the layer."
    },
    {
      "q": "A firm logs into an online accounting app and pays monthly. That is:",
      "choices": [
        "IaaS",
        "PaaS",
        "SaaS",
        "On-premises software"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A finished application rented by subscription and hosted by the vendor is SaaS. (a) would rent raw servers. (b) would rent a platform to build on. (d) would mean the firm owns and runs the software itself."
    },
    {
      "q": "Three-year TCO of a $48,000 server plus $9,600 a year in running costs is:",
      "choices": [
        "$48,000",
        "$57,600",
        "$76,800",
        "$86,400"
      ],
      "answer": 2,
      "explanation": "Correct: (c). $48,000 + (3 × $9,600) = $48,000 + $28,800 = $76,800. (a) counts only the purchase. (b) adds only one year of running costs. (d) adds four years instead of three."
    },
    {
      "q": "A hybrid cloud is best described as:",
      "choices": [
        "Two public clouds from different vendors",
        "A mix of private and public cloud, keeping sensitive work private and using public capacity for the rest",
        "A cloud that only runs at night",
        "A server kept in the office basement"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hybrid means mixing deployment models to get control where it matters and elasticity where it pays. (a) is multi-cloud, a different idea. (c) is meaningless. (d) is on-premises hardware."
    },
    {
      "q": "The main reason to buy off-the-shelf software rather than build custom is:",
      "choices": [
        "It always fits every process perfectly",
        "It is cheaper, proven, and maintained by the vendor",
        "It never needs training",
        "It cannot be changed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Off-the-shelf software spreads its development and maintenance cost across many customers. (a) is false — you adapt your process to fit it. (c) training is still needed. (d) most packages are configurable, just not rebuilt."
    },
    {
      "q": "System software is:",
      "choices": [
        "Software that runs the computer itself, such as an operating system",
        "The accounting application",
        "A spreadsheet template",
        "A backup of customer data"
      ],
      "answer": 0,
      "explanation": "Correct: (a). System software manages the hardware and provides the platform applications run on. (b) and (c) are application software. (d) is data, not software."
    },
    {
      "q": "A cloud bill of $1,450 a month for three years totals:",
      "choices": [
        "$17,400",
        "$34,800",
        "$52,200",
        "$76,800"
      ],
      "answer": 2,
      "explanation": "Correct: (c). $1,450 × 36 months = $52,200. (a) is one year. (b) is two years. (d) is the on-premises total from the module's worked example."
    },
    {
      "q": "When pricing hardware, the TCO approach means you should include:",
      "choices": [
        "Only the sticker price",
        "Purchase, repairs, and the cost of downtime over its whole life",
        "Only the first year's costs",
        "The cost of the software license only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). TCO counts purchase plus running, repair, and failure costs across the asset's life. (a) ignores everything after purchase. (c) cuts the comparison short. (d) is a different cost entirely."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Hardware, Software &amp; the Cloud: Quick Reference</h3>\n<p><strong>Core idea:</strong> Hardware is the machines; system software runs them; application software does the work. SaaS rents the finished app monthly.</p>\n<p><strong>Cloud layers:</strong> IaaS rents machines · PaaS rents a platform to build on · SaaS rents the finished application.</p>\n<p><strong>Deployment:</strong> public = shared and cheap · private = dedicated and controlled · hybrid = both, sensitive work private, elastic work public.</p>\n<div class=\"formula\">3-year TCO (on-premises) = Purchase + 3 × Annual running cost &nbsp;|&nbsp; 3-year TCO (cloud) = Monthly fee × 36</div>\n<p><strong>Watch out:</strong> Compare the same three-year window with every cost included — purchase, maintenance, power, backups, and failure. A monthly bill looks expensive only when the on-premises running costs are hiding in other budgets.</p>\n<p><strong>Self-check:</strong> Take one app your business uses and classify it: SaaS, IaaS, PaaS, or on-premises — and say who maintains it.</p>\n"
};
