// bus201 - Module 7: Cybersecurity & Data Privacy for Business
module.exports = {
  "number": 7,
  "slug": "cybersecurity-and-data-privacy",
  "title": "Cybersecurity & Data Privacy for Business",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main threats a small business faces: phishing, ransomware, and credential theft.",
    "Explain the NIST Cybersecurity Framework's five functions in plain words.",
    "Apply the 3-2-1 backup rule and explain why backups must be tested.",
    "Explain what personal data is and what a business must do to handle it lawfully.",
    "Write a one-page incident response: who does what in the first hour of a breach."
  ],
  "sections": [
    {
      "heading": "The Threats That Actually Hit Small Businesses",
      "html": "\n<p>Small businesses are targeted precisely because they are small: attackers assume their defenses are weaker, and they are often right. The three threats that do the most damage are <strong>phishing</strong> (fake emails or messages that trick someone into clicking, paying, or handing over a password), <strong>ransomware</strong> (malicious software that locks your files and demands payment), and <strong>credential theft</strong> (stolen passwords reused across systems).</p>\n<p>Notice what these have in common: they enter through people, not through broken firewalls. An employee who clicks a fake invoice email can do more damage than any hacker breaking through a network. That is why training and simple habits matter more than expensive tools — a team that stops, checks the sender, and reports the message is the best defense a small business has.</p>\n<p>The cost is not only the ransom. A business that loses its customer list, its accounts, or a week of orders also loses trust, and trust is slower to rebuild than files. The question is never \"will we be targeted?\" — every connected business is scanned constantly — it is \"when something gets through, how bad will it be?\"</p>\n<div class=\"callout\"><strong>Key idea:</strong> Attackers enter through people. The most valuable security purchase is often not software — it is ten minutes of training and a habit of checking before clicking.</div>"
    },
    {
      "heading": "The NIST Framework: Five Verbs",
      "html": "\n<p>The <strong>NIST Cybersecurity Framework</strong> organizes security into five functions — five verbs a business should be able to do. <strong>Identify:</strong> know what you have — which devices, data, and accounts matter, and what would hurt if it were lost. <strong>Protect:</strong> put safeguards in place — strong passwords, multi-factor authentication, updates, and access limited to who needs it. <strong>Detect:</strong> notice when something is wrong — unusual logins, files changing, systems slowing down.</p>\n<p><strong>Respond:</strong> act quickly and in the right order when an incident happens — contain it, stop the spread, tell the right people. <strong>Recover:</strong> restore normal work from backups and learn from what happened. The five functions are a loop, not a ladder: recovering teaches you what to identify better next time.</p>\n<p>For a small business, \"identify\" is the step most often skipped — and the most useful. A one-page list of the systems, the data, and who can reach them turns an abstract worry into a concrete list of protections. You cannot protect what you have not listed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Identify, Protect, Detect, Respond, Recover. If you can do those five things even simply, you are ahead of most businesses your size.</div>"
    },
    {
      "heading": "Backups: The 3-2-1 Rule and the Test That Matters",
      "html": "\n<p><strong>Backups</strong> are the single control that turns ransomware from a disaster into an inconvenience. The <strong>3-2-1 rule</strong> is the standard: keep <strong>3</strong> copies of important data, on <strong>2</strong> different kinds of storage, with <strong>1</strong> copy off-site (or offline). One copy is the live data; the second might be an external drive; the third is in the cloud or in a safe place away from the building.</p>\n<p>The rule's point is that one failure must never take everything. Ransomware encrypts what it can reach — including a backup drive left plugged in. That is why at least one copy must be offline or in a separate cloud account that the infected machine cannot touch. A backup that the attacker can reach is not a backup.</p>\n<p>And the test that matters: <strong>restore from the backup before you need to.</strong> A backup nobody has ever restored from is a hope, not a plan. Once a quarter, pick a file or a folder, restore it, and check it opens. The five minutes it takes is the cheapest insurance a business can buy.</p>\n<div class=\"formula\">3-2-1 backup: 3 copies · 2 different media · 1 copy off-site or offline — and test the restore</div>"
    },
    {
      "heading": "Personal Data and Privacy: The Rules Are Real",
      "html": "\n<p><strong>Personal data</strong> is any information that identifies a person: names, emails, addresses, payment details, health information, and location. A business that holds customer data has duties over it, and those duties are set by law — in the United States by a patchwork of state laws and sector rules, and for European customers by the GDPR. The details vary by place, but the principles are the same everywhere.</p>\n<p>The principles: collect only what you need, say why you collect it, keep it only as long as needed, protect it, and let people see and correct their own data. A mailing list that a customer never joined, a customer file kept for ten years \"just in case,\" and a spreadsheet of card numbers emailed around the office all break these principles — and all are common in small businesses.</p>\n<p>Privacy is also a business asset. Customers who trust you with their data stay; a breach notice to every customer is the fastest way to lose them. Treat personal data the way you would want your own handled: minimum collection, clear purpose, strong protection, and a quick, honest response if something goes wrong.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Collect only what you need, say why, keep it only as long as needed, protect it, and be ready to show it to the person it belongs to. That is the whole of privacy in one sentence.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The main threats to a small business are phishing, ransomware, and credential theft — and they enter through people.</li>\n<li>NIST's five functions: Identify, Protect, Detect, Respond, Recover.</li>\n<li>Backups follow 3-2-1: three copies, two media, one off-site or offline — and test the restore.</li>\n<li>Personal data must be collected for a stated purpose, kept only as long as needed, and protected.</li>\n<li>An incident plan names who does what in the first hour; a plan written during a breach is too late.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Believing \"we are too small to be targeted.\" Attackers automate their scanning and prefer small targets precisely because defenses are weaker. Size is not protection — backups and multi-factor authentication are.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Keeping a backup drive plugged into the same computer it backs up. Ransomware encrypts everything it can reach, including that drive. One copy must be offline or in a separate account the infected machine cannot touch.</div>\n<p><strong>Next step:</strong> Module 8 is about choosing systems in the first place — systems analysis, requirements, and the implementation choices that decide whether a new system succeeds.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Phishing",
      "def": "Fake emails, texts, or messages that trick someone into clicking a malicious link, paying a fake invoice, or revealing credentials."
    },
    {
      "term": "Ransomware",
      "def": "Malicious software that encrypts a victim's files and demands payment for the key to unlock them."
    },
    {
      "term": "Credential theft",
      "def": "Stealing usernames and passwords, often by phishing or by reusing passwords leaked from another service."
    },
    {
      "term": "Multi-factor authentication (MFA)",
      "def": "Requiring two or more proofs of identity — such as a password plus a code from a phone — to log in."
    },
    {
      "term": "NIST Cybersecurity Framework",
      "def": "A widely used framework organizing security into five functions: Identify, Protect, Detect, Respond, Recover."
    },
    {
      "term": "Backup",
      "def": "A copy of data kept so work can be restored after loss, damage, or attack."
    },
    {
      "term": "3-2-1 backup rule",
      "def": "Keep 3 copies of important data, on 2 different kinds of storage, with 1 copy off-site or offline."
    },
    {
      "term": "Personal data",
      "def": "Information that identifies a person, such as name, email, address, or payment details."
    },
    {
      "term": "GDPR",
      "def": "The European Union's General Data Protection Regulation, setting strict rules for handling personal data."
    },
    {
      "term": "Incident response plan",
      "def": "A written plan naming who does what, in which order, when a security incident occurs."
    },
    {
      "term": "Access control",
      "def": "Limiting who can reach which systems and data, to what each person actually needs."
    },
    {
      "term": "Patching",
      "def": "Applying software updates that fix known security weaknesses."
    },
    {
      "term": "Social engineering",
      "def": "Tricking people, rather than breaking technology, to gain access — phishing is the commonest form."
    },
    {
      "term": "Encryption",
      "def": "Scrambling data so it can only be read with the right key."
    }
  ],
  "video": {
    "title": "NIST Cybersecurity Framework Explained",
    "embedUrl": "https://www.youtube.com/embed/q0tBR0Iv-kE",
    "note": "Breaks down the NIST framework's five functions — Identify, Protect, Detect, Respond, Recover — with small-business examples and a real-world case. Use it to test your own one-page incident plan against each function.",
    "more": [
      {
        "title": "Ransomware Explained + How to Protect Your Company (Step by Step)",
        "url": "https://www.youtube.com/watch?v=EDyN1QYdsFw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An employee receives an email from 'the boss' asking for gift cards to be bought urgently. List the three checks the employee should make before doing anything, and state what to do with the email.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the sender's real address — display names can be faked, so look at the full address. Step 2: Check the request itself — urgent gift-card purchases are a classic fraud pattern, and a real boss does not ask for them by email. Step 3: Verify through a different channel — call or message the boss on a known number. Step 4: Do not click or reply; report the message to whoever handles IT and delete it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A firm's only backup is an external drive plugged into the office computer. Explain, using the 3-2-1 rule, what is wrong and what the firm should change.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The firm has two copies (live data plus the drive) on two media, but no off-site copy — it fails the '1' in 3-2-1. Step 2: Worse, the drive is plugged in, so ransomware on the computer can encrypt the backup too. Step 3: The fix: add a cloud backup or a second drive stored off-site and rotated weekly, keep one copy offline, and test a restore once a quarter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Map each action to a NIST function (Identify, Protect, Detect, Respond, Recover): (a) listing every system and who can access it, (b) turning on multi-factor authentication, (c) noticing logins from another country at 3 a.m., (d) disconnecting an infected computer from the network, (e) restoring files from backup.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) is <strong>Identify</strong> — knowing what you have. Step 2: (b) is <strong>Protect</strong> — a safeguard. Step 3: (c) is <strong>Detect</strong> — noticing something wrong. Step 4: (d) is <strong>Respond</strong> — containing the incident. Step 5: (e) is <strong>Recover</strong> — restoring normal work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shop collects customer emails 'for receipts' and then uses them for marketing, keeps them forever, and stores them in a shared spreadsheet. Name three privacy principles this breaks and the fix for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Purpose — emails collected for receipts are used for marketing without consent; fix: ask separately for marketing permission and keep the two lists apart. Step 2: Retention — 'forever' is not a retention policy; fix: delete marketing addresses after a set period of inactivity, such as two years. Step 3: Protection — a shared spreadsheet is not protected; fix: store the list in the proper system with access limited to the staff who need it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write the first-hour plan for a ransomware attack in four steps: who is told first, what is disconnected, what is NOT done, and what happens to customers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Tell the owner (or incident lead) immediately — one person decides, not a committee. Step 2: Disconnect the infected machines from the network and switch off Wi-Fi to stop the spread, but do not switch the machines off if an expert needs the evidence. Step 3: Do NOT pay the ransom and do NOT delete anything — call the IT provider or insurer first. Step 4: Customers: tell affected customers honestly what happened and what you are doing, once the facts are known — silence loses more trust than the breach itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A business has 40 staff and one shared password for the ordering system, changed once a year. Explain the risk in two sentences and name the two cheapest fixes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One shared password means a single leak — or a single departing employee — gives full access to everyone who ever knew it, and nobody can tell who did what. Step 2: The cheapest fixes are individual accounts for each person and multi-factor authentication — both cost little, and both turn an invisible shared risk into named, traceable access.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Phishing is best described as:",
      "choices": [
        "A virus that deletes files",
        "Fake messages that trick people into clicking, paying, or revealing credentials",
        "A broken firewall",
        "A power cut"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Phishing is social engineering by message — it targets people, not technology. (a) describes malware generally. (c) is a network failure. (d) is an infrastructure failure."
    },
    {
      "q": "The 3-2-1 backup rule requires:",
      "choices": [
        "3 backups a day, 2 staff, 1 manager",
        "3 copies of data, on 2 different kinds of storage, with 1 copy off-site or offline",
        "3 passwords, 2 computers, 1 printer",
        "3 years of records, 2 servers, 1 cloud"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Three copies, two media, one off-site or offline — so one failure cannot take everything. (a), (c), and (d) invent numbers that match nothing in the rule."
    },
    {
      "q": "In the NIST framework, noticing logins from another country at 3 a.m. is:",
      "choices": [
        "Identify",
        "Protect",
        "Detect",
        "Recover"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Detect is noticing that something is wrong. (a) is knowing what you have. (b) is putting safeguards in place. (d) is restoring normal work after an incident."
    },
    {
      "q": "Why must a backup be tested by restoring from it?",
      "choices": [
        "To use up storage space",
        "Because a backup nobody has restored from is a hope, not a plan — it may be corrupt or incomplete",
        "Because the law requires a weekly test",
        "To slow down the network"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Untested backups commonly fail when needed — wrong files, corrupt copies, or missing data. (a) is nonsense. (c) no such weekly legal rule is stated. (d) testing is brief and does not exist to slow anything."
    },
    {
      "q": "Personal data is:",
      "choices": [
        "Any file on a company computer",
        "Information that identifies a person, such as name, email, address, or payment details",
        "Only medical records",
        "Public information from a website"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Personal data is defined by identifiability. (a) is too broad — business files are not all personal data. (c) is too narrow — health data is one kind among many. (d) public information can still be personal data if it identifies someone."
    },
    {
      "q": "A backup drive left plugged into the computer it backs up is a problem because:",
      "choices": [
        "It uses electricity",
        "Ransomware can reach and encrypt it too, so it is not a separate copy",
        "It is too slow",
        "It cannot store enough"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A backup the attacker can reach is not a backup — at least one copy must be offline or in a separate account. (a) power use is trivial. (c) speed is not the issue. (d) capacity is unrelated to the risk."
    },
    {
      "q": "Multi-factor authentication means:",
      "choices": [
        "Using a longer password",
        "Requiring two or more proofs of identity, such as a password plus a code from a phone",
        "Changing passwords monthly",
        "Having two administrators"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MFA combines something you know with something you have (or are). (a) is just a stronger single factor. (c) is password rotation, not MFA. (d) is staffing, not authentication."
    },
    {
      "q": "A small business's most effective first security step is usually:",
      "choices": [
        "Buying the most expensive firewall",
        "Listing what systems and data it has, and turning on MFA and backups",
        "Hiring a security guard",
        "Disconnecting from the internet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Identify what matters, protect it with MFA, and back it up — the highest-value, lowest-cost combination. (a) expensive tools without the basics do not help. (c) a guard does not stop phishing. (d) is not a viable way to run a business."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Cybersecurity &amp; Data Privacy: Quick Reference</h3>\n<p><strong>Core idea:</strong> Attackers enter through people — phishing, ransomware, and credential theft. Training, MFA, and backups beat expensive tools.</p>\n<p><strong>NIST five functions:</strong> Identify (know what you have) · Protect (safeguards, MFA, updates) · Detect (notice what is wrong) · Respond (contain it) · Recover (restore and learn).</p>\n<div class=\"formula\">3-2-1 backup: 3 copies · 2 different media · 1 copy off-site or offline — and test the restore</div>\n<p><strong>Privacy principles:</strong> collect only what you need, say why, keep it only as long as needed, protect it, and let people see and correct their own data.</p>\n<p><strong>Watch out:</strong> \"Too small to be targeted\" is false — small targets are preferred. A backup drive left plugged in is not a backup. Paying a ransom does not guarantee your files back.</p>\n<p><strong>Self-check:</strong> Write your one-page incident plan: who decides, what gets disconnected, who is called, and what customers are told — in the first hour.</p>\n"
};
