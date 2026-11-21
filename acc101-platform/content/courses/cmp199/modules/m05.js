module.exports = {
  "number": 5,
  "slug": "a-plus-core-2-review-security",
  "title": "A+ Core 2 Review: Security",
  "estTime": "3–4 hours",
  "objectives": [
    "Identify malware types — virus, worm, Trojan, ransomware, spyware, rootkit, keylogger — and their symptoms.",
    "Explain social engineering attacks: phishing, vishing, whaling, pretexting, tailgating, shoulder surfing.",
    "Compare authentication: passwords, MFA, biometrics, smart cards, and access control.",
    "Secure a SOHO network: WPA3, firewall, firmware updates, guest networks, and disabling unused services.",
    "Explain data destruction, encryption, and security best practices for users and technicians."
  ],
  "sections": [
    {
      "heading": "Malware: Know the Enemy by Name",
      "html": "<p><strong>Malware</strong> is any software designed to harm. A <strong>virus</strong> attaches to a file and spreads when the file runs. A <strong>worm</strong> spreads by itself across a network with no file to run. A <strong>Trojan</strong> pretends to be useful software and opens a back door once installed. <strong>Ransomware</strong> encrypts the victim's files and demands payment — the correct response is to restore from backup, not to pay, because payment does not guarantee the files back. <strong>Spyware</strong> watches what the user does and steals data; a <strong>keylogger</strong> records keystrokes to steal passwords. A <strong>rootkit</strong> hides deep in the system so security software cannot see it.</p>\n<p>Symptoms of infection: the PC slows down, pop-ups appear, the browser homepage changes, files are renamed or encrypted, the fan runs hard at idle, or the machine sends spam. The exam's malware-removal order is: <strong>1.</strong> identify the symptoms, <strong>2.</strong> quarantine the system (disconnect it from the network), <strong>3.</strong> disable System Restore (so malware cannot hide in restore points), <strong>4.</strong> remediate with anti-malware tools in Safe Mode, <strong>5.</strong> schedule scans and run updates, <strong>6.</strong> enable System Restore and create a new restore point, <strong>7.</strong> educate the user. If removal fails, the safe answer is a clean install from known-good media.</p>"
    },
    {
      "heading": "Social Engineering: The Human Weakness",
      "html": "<p>Most breaches start with a person, not a firewall. <strong>Phishing</strong> is a fake email or message that tricks the user into clicking a link or giving up credentials — check the sender address and hover over links before clicking. <strong>Spear phishing</strong> targets one person with personal details; <strong>whaling</strong> targets a senior executive. <strong>Vishing</strong> is phishing by voice call; <strong>smishing</strong> is phishing by text message. <strong>Pretexting</strong> is inventing a story ('I am from IT, I need your password') to get information.</p>\n<p>Physical tricks count too: <strong>tailgating</strong> is following someone through a secure door; <strong>shoulder surfing</strong> is watching someone type a password or PIN; <strong>dumpster diving</strong> is searching rubbish for documents; <strong>baiting</strong> is leaving an infected USB stick where someone will plug it in. The defence is training and procedure: verify the caller's identity through a known number, never share passwords, lock the screen when you walk away, and shred sensitive paper. The exam often asks which attack a scenario describes — learn the names and the one-line difference between them.</p>"
    },
    {
      "heading": "Authentication and Access Control",
      "html": "<p><strong>Authentication</strong> proves who you are. The three factors are <strong>something you know</strong> (a password or PIN), <strong>something you have</strong> (a phone, a smart card, a token), and <strong>something you are</strong> (a fingerprint, face, or iris — biometrics). <strong>Multi-factor authentication (MFA)</strong> uses two or more factors, and it is the single most effective defence against stolen passwords. A strong password is long and unique; a <strong>password manager</strong> is how a real person keeps dozens of them. Never reuse a password, never write it on a sticky note, and never share it — not even with IT.</p>\n<p><strong>Access control</strong> decides what an authenticated user may do. The <strong>principle of least privilege</strong> says give each user only the access they need for their job — no more. <strong>ACLs (access control lists)</strong> set permissions on files and folders. A <strong>smart card</strong> is a physical card with a chip used with a PIN. <strong>Biometrics</strong> are convenient but cannot be changed if stolen — a fingerprint cannot be reset like a password. On Windows, <strong>BitLocker</strong> encrypts the whole drive, so a stolen laptop's data stays unreadable; <strong>EFS</strong> encrypts individual files. Encryption protects data at rest; a VPN protects data in transit.</p>"
    },
    {
      "heading": "Securing a SOHO Network and Good Habits",
      "html": "<p>Lock the network down in order: change the router's default admin password, use <strong>WPA3</strong> (or WPA2 at minimum) with a strong Wi-Fi password, turn off <strong>WPS</strong> (it has a known weakness), keep the <strong>firmware updated</strong>, and put visitors on a <strong>guest network</strong> so they cannot see office computers. Disable remote administration unless it is needed, and disable services and ports you do not use. A <strong>firewall</strong> blocks unwanted incoming traffic; the <strong>Windows Firewall</strong> does the same on the PC itself.</p>\n<p>Good habits are half the exam. <strong>Patch</strong> the OS and apps — most malware uses known holes that already have fixes. <strong>Back up</strong> regularly and test the restore. <strong>Data destruction:</strong> delete is not enough — use a wipe tool for a drive you are reusing, and physically destroy a drive holding sensitive data before disposal. <strong>End-of-life</strong> software gets no more security patches, so replace it. For a technician: never plug an unknown USB stick into a customer's PC, always verify a caller's identity before resetting a password, and document what you changed.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Malware: virus attaches, worm self-spreads, Trojan pretends, ransomware encrypts, spyware watches, rootkit hides. Removal order: quarantine, disable System Restore, clean in Safe Mode, rescan, re-enable, educate.</li><li>Social engineering: phishing (email), vishing (voice), smishing (text), whaling (executive), tailgating (follow through a door), shoulder surfing (watch typing).</li><li>Authentication: know + have + are; MFA is the strongest defence; least privilege; BitLocker encrypts the drive.</li><li>SOHO security: change the admin password, WPA3, guest network, firmware updates, firewall on, WPS off.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Paying ransomware — the correct answer is restore from backup; payment does not guarantee the files back.</div><div class=\"callout\"><strong>Common mistake:</strong> Confusing phishing and vishing — phishing is email or message, vishing is a voice call.</div>\n<p><strong>Ready-to-Work link:</strong> If you can name the malware, spot the social engineering attack, and lock down a SOHO network in order, you have this module. Module 6 is software troubleshooting and the operational procedures that keep an IT job running.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Malware",
      "def": "Software designed to harm: viruses, worms, Trojans, ransomware, spyware, rootkits, and keyloggers."
    },
    {
      "term": "Virus",
      "def": "Malware that attaches to a file and spreads when the file is run."
    },
    {
      "term": "Worm",
      "def": "Malware that spreads by itself across a network without a file to run."
    },
    {
      "term": "Trojan",
      "def": "Malware that pretends to be useful software and opens a back door once installed."
    },
    {
      "term": "Ransomware",
      "def": "Malware that encrypts the victim's files and demands payment; restore from backup, do not pay."
    },
    {
      "term": "Spyware",
      "def": "Malware that secretly watches the user and steals data."
    },
    {
      "term": "Rootkit",
      "def": "Malware that hides deep in the system so security software cannot see it."
    },
    {
      "term": "Keylogger",
      "def": "Malware or hardware that records keystrokes to steal passwords."
    },
    {
      "term": "Phishing",
      "def": "A fake email or message that tricks the user into clicking a link or giving up credentials."
    },
    {
      "term": "Whaling",
      "def": "Phishing aimed at a senior executive."
    },
    {
      "term": "Vishing",
      "def": "Phishing by voice call."
    },
    {
      "term": "Pretexting",
      "def": "Inventing a false story to trick someone into giving up information."
    },
    {
      "term": "Tailgating",
      "def": "Following an authorised person through a secure door without badging in."
    },
    {
      "term": "Shoulder surfing",
      "def": "Watching someone type a password or PIN over their shoulder."
    },
    {
      "term": "MFA",
      "def": "Multi-factor authentication: two or more factors (know, have, are) to prove identity."
    },
    {
      "term": "Least privilege",
      "def": "Giving each user only the access they need for their job — no more."
    },
    {
      "term": "BitLocker",
      "def": "Windows whole-drive encryption; a stolen laptop's data stays unreadable."
    },
    {
      "term": "WPS",
      "def": "Wi-Fi Protected Setup: a quick-connect feature with a known weakness — turn it off."
    }
  ],
  "video": {
    "title": "Malware — CompTIA A+ 220-1202 (Professor Messer)",
    "embedUrl": "https://www.youtube.com/embed/lB5VwnsUG3E",
    "note": "Professor Messer explains every malware type with examples. As you watch, write the one-line difference between a virus, a worm, and a Trojan in your own words.",
    "more": [
      {
        "title": "Social Engineering — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=9xtzpbY1n9I"
      },
      {
        "title": "Securing a SOHO Network — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=pq_CKhYYYVQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A user's files are all renamed with a strange extension and a message demands payment to unlock them. What has happened, and what should the user do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is ransomware — the files are encrypted. Step 2: Do not pay; payment does not guarantee the files back. Step 3: Disconnect the machine from the network so the ransomware cannot spread. Step 4: Restore the files from a clean backup. Step 5: If there is no backup, a clean install is the safe answer, and the files are lost.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An email claims to be from the user's bank and asks them to click a link and log in. List three checks that show it is phishing.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the sender address — it will not match the bank's real domain. Step 2: Hover over the link — it goes to a different address than the one shown. Step 3: Look for urgency and threats ('your account will close today') — banks do not do that by email. Step 4: The safe move is to delete it and log in by typing the bank's address yourself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A company wants to protect against stolen passwords. What is the single most effective change, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Turn on multi-factor authentication (MFA). Step 2: A stolen password alone is then useless — the attacker also needs the phone, token, or fingerprint. Step 3: Combine it with unique passwords (ideally via a password manager) and least privilege. Step 4: Train staff to recognise phishing, which is how most passwords are stolen.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A technician finds a USB stick in the office car park labelled 'Salary list'. What should they do with it, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not plug it in — this is baiting, and the stick may carry malware. Step 2: Hand it to IT or security so it can be checked safely. Step 3: Report where it was found. Step 4: Remind colleagues never to plug in unknown drives.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A small office router still has the default admin password 'admin', WPS is on, and the firmware is three years old. List the fixes in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Change the admin password to a strong, unique one. Step 2: Turn WPS off. Step 3: Update the firmware. Step 4: Set WPA3 Wi-Fi with a strong password and a guest network for visitors. Step 5: Disable remote administration unless it is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A company is throwing away old laptops that held customer records. What must happen to the drives first, and why is delete not enough?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drives must be wiped with a proper wipe tool, or physically destroyed. Step 2: Delete only removes the file's address, not the data — recovery software can bring it back. Step 3: For highly sensitive data, physical destruction is the safest option. Step 4: Record what was destroyed and when, for the audit trail.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is ransomware?",
      "choices": [
        "Software that watches the user",
        "Malware that encrypts files and demands payment",
        "A fake email",
        "A hardware fault"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ransomware encrypts files and demands payment; restore from backup, do not pay. (a) is wrong: that describes spyware. (c) is wrong: a fake email is phishing. (d) is wrong: ransomware is software, not hardware."
    },
    {
      "q": "What is the difference between phishing and vishing?",
      "choices": [
        "Phishing is by email or message; vishing is by voice call",
        "Phishing is by phone; vishing is by email",
        "There is no difference",
        "Phishing targets executives only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Phishing uses email or messages; vishing uses a voice call. (b) is wrong: that is backwards. (c) is wrong: the channel is the difference the exam tests. (d) is wrong: phishing aimed at executives is whaling."
    },
    {
      "q": "What is the strongest defence against a stolen password?",
      "choices": [
        "A longer password",
        "Multi-factor authentication (MFA)",
        "Changing the password monthly",
        "Writing it down"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MFA means a stolen password alone is useless — the attacker also needs the second factor. (a) is wrong: a long password still works if stolen. (c) is wrong: frequent changes do not help if the password is stolen. (d) is wrong: writing a password down is a security failure."
    },
    {
      "q": "In malware removal, what comes BEFORE cleaning with anti-malware tools?",
      "choices": [
        "Enabling System Restore",
        "Quarantining the system and disabling System Restore",
        "Educating the user",
        "Scheduling scans"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Quarantine the machine and disable System Restore first, so malware cannot spread or hide in restore points. (a) is wrong: System Restore is re-enabled after cleaning, with a new restore point. (c) is wrong: educating the user is the last step. (d) is wrong: scans are scheduled after the cleaning."
    },
    {
      "q": "What is tailgating?",
      "choices": [
        "A type of malware",
        "Following an authorised person through a secure door",
        "A phishing email",
        "A weak password"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tailgating is walking through a secure door behind someone who badged in. (a) is wrong: tailgating is a physical social-engineering attack, not software. (c) is wrong: a phishing email is phishing. (d) is wrong: a weak password is an authentication problem."
    },
    {
      "q": "What does BitLocker do?",
      "choices": [
        "Speeds up the PC",
        "Encrypts the whole drive so a stolen laptop's data stays unreadable",
        "Blocks pop-up ads",
        "Backs up files to the cloud"
      ],
      "answer": 1,
      "explanation": "Correct: (b). BitLocker is whole-drive encryption. (a) is wrong: encryption does not speed anything up. (c) is wrong: pop-ups are blocked by a browser or ad blocker. (d) is wrong: backup is a separate job."
    },
    {
      "q": "Why should WPS be turned off on a router?",
      "choices": [
        "It slows down Wi-Fi",
        "It has a known weakness attackers can exploit",
        "It uses too much power",
        "It blocks guests"
      ],
      "answer": 1,
      "explanation": "Correct: (b). WPS has a known weakness that lets an attacker in; turn it off and use WPA3. (a) is wrong: WPS does not slow Wi-Fi. (c) is wrong: power use is not the issue. (d) is wrong: guests are handled by the guest network."
    },
    {
      "q": "Why is delete not enough when disposing of a drive with sensitive data?",
      "choices": [
        "Delete is too slow",
        "Delete only removes the file's address; recovery software can bring the data back",
        "Delete damages the drive",
        "Delete only works on SSDs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Deleted data stays on the disk until overwritten, so use a wipe tool or physical destruction. (a) is wrong: speed is not the issue. (c) is wrong: delete does not damage the drive. (d) is wrong: delete works the same on HDDs and SSDs."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — A+ Core 2 Review: Security: Quick Reference</h3>\n<p><strong>Core idea:</strong> Most attacks start with a person; the best defences are MFA, patching, backups, and training.</p>\n<p><strong>Malware:</strong> Virus attaches · worm self-spreads · Trojan pretends · ransomware encrypts (restore, do not pay) · spyware watches · rootkit hides.</p>\n<p><strong>Removal order:</strong> Identify → quarantine → disable System Restore → clean in Safe Mode → rescan/update → re-enable System Restore → educate.</p>\n<p><strong>Social engineering:</strong> Phishing email · vishing voice · smishing text · whaling executive · pretexting false story · tailgating door · shoulder surfing.</p>\n<p><strong>Auth:</strong> Know + have + are · MFA strongest · least privilege · BitLocker whole-drive encryption.</p>\n<p><strong>SOHO:</strong> Change admin password · WPA3 · guest network · firmware updates · WPS off · firewall on.</p>\n<p><strong>Watch out:</strong> Paying ransomware; confusing phishing and vishing; delete is not destruction.</p>\n<p><strong>Self-check:</strong> Name the malware from a symptom, spot the social engineering attack in a scenario, and lock down a router in order, without looking. If you can, you have this module.</p>\n"
};
