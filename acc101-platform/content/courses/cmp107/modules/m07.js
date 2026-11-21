// cmp107 - Module 7: Users, Accounts & Passwords
module.exports = {
  "number": 7,
  "slug": "users-accounts-and-passwords",
  "title": "Users, Accounts & Passwords",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between administrator and standard user accounts.",
    "Create and manage user accounts on Windows, macOS, and Linux.",
    "Create strong passwords and use a password manager.",
    "Explain multi-factor authentication and why it matters.",
    "Set up a computer for a child or a shared family member safely."
  ],
  "sections": [
    {
      "heading": "Administrator vs Standard User",
      "html": "<p>Every computer has user accounts, and each account has a level of power. An administrator account can install software, change system settings, and manage other accounts. A standard user account can use the computer and change its own files and settings, but it cannot change the system or install software without an administrator's password.</p>\n<p>The safe setup is to use a standard account for everyday work and keep the administrator account for changes. That way, if a malicious program runs while you are browsing, it cannot install itself or change the system without asking for a password first. It is a small inconvenience that stops a large class of problems.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> On Windows, go to Settings, then Accounts, then Other users to add an account and choose its type. On a Mac, go to System Settings, then Users and Groups. On Linux, use the Users settings or the command sudo adduser username in the terminal.</div></p>\n"
    },
    {
      "heading": "Strong Passwords and Password Managers",
      "html": "<p>A strong password is long, unique, and random. Length matters more than complexity: a passphrase of four random words, such as correct-horse-battery-staple, is both strong and memorable. Never reuse a password across important accounts, because one breach then opens them all.</p>\n<p>Nobody can remember a hundred unique passwords, and nobody should try. A password manager remembers them for you: you remember one strong master password, and it fills in the rest. Built-in options such as the password managers in Windows, macOS, and browsers are a good start; a dedicated manager is even better.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Never share passwords by email or chat, never write them on a sticky note on the monitor, and change a password immediately if you suspect it has been exposed.</div></p>\n"
    },
    {
      "heading": "Multi-Factor Authentication",
      "html": "<p>Multi-factor authentication, or MFA, asks for two different kinds of proof when you sign in: something you know, such as a password, and something you have, such as a code from an app on your phone, or something you are, such as a fingerprint. Even if someone steals your password, they still cannot sign in without the second factor.</p>\n<p>Turn on MFA for every important account: email first, then banking, then cloud storage, then social media. Your email account is the most important of all, because password resets for everything else go there. An authenticator app is safer than codes sent by text message, because text messages can be intercepted.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If a service offers a choice between an authenticator app and text codes, pick the app. And save the backup codes the service gives you when you turn MFA on, somewhere safe, in case you lose your phone.</div></p>\n"
    },
    {
      "heading": "Shared Computers and Children",
      "html": "<p>When more than one person uses a computer, give each person their own account. Each account keeps its own files, browser history, and settings, and one person's mistake cannot easily damage another person's work. A guest account is a good option for a visitor who just needs the browser.</p>\n<p>For a child, create a standard account with parental controls: on Windows, a Microsoft family account with screen-time limits and content filters; on a Mac, Screen Time in System Settings; on Linux, a standard account with limited permissions. Controls are a safety net, not a replacement for talking to a child about what is safe online.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Check the accounts on your computer once in a while. Remove accounts for people who no longer use the machine, and make sure at least one administrator account still exists and its password is known. Losing the only administrator account is a painful problem to fix.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain the difference between administrator and standard user accounts.</li>\n<li>Create and manage user accounts on Windows, macOS, and Linux.</li>\n<li>Create strong passwords and use a password manager.</li>\n<li>Explain multi-factor authentication and why it matters.</li>\n<li>Set up a computer for a child or a shared family member safely.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Reusing one password everywhere. One breach then opens every account, so use a password manager and unique passwords.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using an administrator account for everyday browsing. Use a standard account and keep the admin password for real changes.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "User account",
      "def": "A personal login on a computer, with its own files and settings."
    },
    {
      "term": "Administrator",
      "def": "An account that can install software and change system settings."
    },
    {
      "term": "Standard user",
      "def": "An account that can use the computer but cannot change the system."
    },
    {
      "term": "Password manager",
      "def": "A program that stores your passwords safely and fills them in for you."
    },
    {
      "term": "Passphrase",
      "def": "A long password made of several random words."
    },
    {
      "term": "Multi-factor authentication (MFA)",
      "def": "Signing in with two different kinds of proof, such as a password plus a phone code."
    },
    {
      "term": "Authenticator app",
      "def": "An app that generates sign-in codes, safer than codes sent by text message."
    },
    {
      "term": "Backup codes",
      "def": "One-time codes a service gives you in case you lose your second factor."
    },
    {
      "term": "Guest account",
      "def": "A limited account for a visitor, with no access to other users' files."
    },
    {
      "term": "Parental controls",
      "def": "Settings that limit what a child can do or see on a computer."
    },
    {
      "term": "Screen Time",
      "def": "Apple's tool for limiting a child's computer and device use."
    },
    {
      "term": "Lock screen",
      "def": "The screen that asks for a password before the computer can be used."
    },
    {
      "term": "Sign-in",
      "def": "The act of proving who you are to a computer or a service."
    }
  ],
  "video": {
    "title": "Windows Security Settings - CompTIA A+ 220-1202 - 2.2",
    "embedUrl": "https://www.youtube.com/embed/SR7tw10W5YU",
    "note": "Professor Messer on Windows security settings, Control Panel, and cloud productivity. Note how user accounts and permissions protect the system.",
    "more": [
      {
        "title": "The Windows Control Panel - CompTIA A+ 220-1202 - 1.6",
        "url": "https://www.youtube.com/watch?v=AhGWshIRcKw"
      },
      {
        "title": "Cloud Productivity Tools - CompTIA A+ 220-1202 - 1.11",
        "url": "https://www.youtube.com/watch?v=FTRbdIjK1DU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “User account” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: User account — A personal login on a computer, with its own files and settings. Step 2: It matters because it is part of: Explain the difference between administrator and standard user accounts. Step 3: An example from the module is the way user account shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Administrator” and “Standard user”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Administrator — An account that can install software and change system settings. Step 2: Standard user — An account that can use the computer but cannot change the system. Step 3: They differ because the first is about administrator while the second is about standard user; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create and manage user accounts on Windows, macOS, and Linux.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create and manage user accounts on Windows, macOS, and Linux. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Password manager” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Password manager — A program that stores your passwords safely and fills them in for you. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Passphrase — A long password made of several random words. Step 2: Multi-factor authentication (MFA) — Signing in with two different kinds of proof, such as a password plus a phone code. Step 3: Authenticator app — An app that generates sign-in codes, safer than codes sent by text message. Step 4: Backup codes — One-time codes a service gives you in case you lose your second factor. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Create strong passwords and use a password manager. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “User account” mean?",
      "choices": [
        "A personal login on a computer, with its own files and settings.",
        "An account that can install software and change system settings.",
        "An account that can use the computer but cannot change the system.",
        "A program that stores your passwords safely and fills them in for you."
      ],
      "answer": 0,
      "explanation": "Correct: (a). User account means: A personal login on a computer, with its own files and settings. (b) is the definition of Administrator, not of User account. (c) is the definition of Standard user, not of User account. (d) is the definition of Password manager, not of User account."
    },
    {
      "q": "What does the term “Administrator” mean?",
      "choices": [
        "An account that can use the computer but cannot change the system.",
        "An account that can install software and change system settings.",
        "A program that stores your passwords safely and fills them in for you.",
        "A long password made of several random words."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Administrator means: An account that can install software and change system settings. (a) is the definition of Standard user, not of Administrator. (c) is the definition of Password manager, not of Administrator. (d) is the definition of Passphrase, not of Administrator."
    },
    {
      "q": "What does the term “Standard user” mean?",
      "choices": [
        "A program that stores your passwords safely and fills them in for you.",
        "A long password made of several random words.",
        "An account that can use the computer but cannot change the system.",
        "Signing in with two different kinds of proof, such as a password plus a phone code."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Standard user means: An account that can use the computer but cannot change the system. (a) is the definition of Password manager, not of Standard user. (b) is the definition of Passphrase, not of Standard user. (d) is the definition of Multi-factor authentication (MFA), not of Standard user."
    },
    {
      "q": "What does the term “Password manager” mean?",
      "choices": [
        "A long password made of several random words.",
        "Signing in with two different kinds of proof, such as a password plus a phone code.",
        "An app that generates sign-in codes, safer than codes sent by text message.",
        "A program that stores your passwords safely and fills them in for you."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Password manager means: A program that stores your passwords safely and fills them in for you. (a) is the definition of Passphrase, not of Password manager. (b) is the definition of Multi-factor authentication (MFA), not of Password manager. (c) is the definition of Authenticator app, not of Password manager."
    },
    {
      "q": "Which term means: A long password made of several random words.",
      "choices": [
        "Passphrase",
        "Multi-factor authentication (MFA)",
        "Authenticator app",
        "Backup codes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Passphrase is the term for: A long password made of several random words. (b) Multi-factor authentication (MFA) means Signing in with two different kinds of proof, such as a password plus a phone code. (c) Authenticator app means An app that generates sign-in codes, safer than codes sent by text message. (d) Backup codes means One-time codes a service gives you in case you lose your second factor."
    },
    {
      "q": "Which term means: Signing in with two different kinds of proof, such as a password plus a phone code.",
      "choices": [
        "Authenticator app",
        "Multi-factor authentication (MFA)",
        "Backup codes",
        "Guest account"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Multi-factor authentication (MFA) is the term for: Signing in with two different kinds of proof, such as a password plus a phone code. (a) Authenticator app means An app that generates sign-in codes, safer than codes sent by text message. (c) Backup codes means One-time codes a service gives you in case you lose your second factor. (d) Guest account means A limited account for a visitor, with no access to other users' files."
    },
    {
      "q": "Which term means: An app that generates sign-in codes, safer than codes sent by text message.",
      "choices": [
        "Backup codes",
        "Guest account",
        "Authenticator app",
        "Parental controls"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Authenticator app is the term for: An app that generates sign-in codes, safer than codes sent by text message. (a) Backup codes means One-time codes a service gives you in case you lose your second factor. (b) Guest account means A limited account for a visitor, with no access to other users' files. (d) Parental controls means Settings that limit what a child can do or see on a computer."
    },
    {
      "q": "Which term means: One-time codes a service gives you in case you lose your second factor.",
      "choices": [
        "Guest account",
        "Parental controls",
        "Screen Time",
        "Backup codes"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Backup codes is the term for: One-time codes a service gives you in case you lose your second factor. (a) Guest account means A limited account for a visitor, with no access to other users' files. (b) Parental controls means Settings that limit what a child can do or see on a computer. (c) Screen Time means Apple's tool for limiting a child's computer and device use."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Users, Accounts & Passwords: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between administrator and standard user accounts.</p>\n<p><strong>Key terms:</strong> User account · Administrator · Standard user · Password manager · Passphrase · Multi-factor authentication (MFA) · Authenticator app · Backup codes.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between administrator and standard user accounts.</li>\n<li>Create and manage user accounts on Windows, macOS, and Linux.</li>\n<li>Create strong passwords and use a password manager.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
