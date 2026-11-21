module.exports = {
  "number": 5,
  "slug": "two-factor-authentication",
  "title": "Two-Factor Authentication: A Second Lock",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what two-factor authentication is.",
    "Describe the three kinds of second factors.",
    "Explain why authenticator apps beat text codes.",
    "Describe how backup codes work and why they matter.",
    "Turn on two-factor authentication for your important accounts."
  ],
  "sections": [
    {
      "heading": "Two Locks Are Better Than One",
      "html": "<p>Two-factor authentication, or 2FA, means logging in needs two things: something you know (your password) and something you have or are (a code from your phone, or your fingerprint). If someone steals your password, they still cannot get in without the second factor. It is the single most effective step most people can take.</p>\n<p>Think of it like a house with two locks. A thief who picks one still faces the second. Turn 2FA on first for your email, your bank, and your password manager — those three protect everything else.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A stolen password alone should never be enough to open your account. 2FA makes sure it is not.</div>"
    },
    {
      "heading": "Three Kinds of Second Factors",
      "html": "<p>Second factors come in three kinds. Something you know: a PIN or an answer. Something you have: a code from an authenticator app, a text message, or a small security key you plug in. Something you are: your fingerprint or your face. Apps and security keys are stronger than text codes, because text messages can be intercepted or tricked away from you.</p>\n<p>Most services offer more than one option. Choose an authenticator app when it is offered — it works even without phone signal — and keep a security key or backup codes as a spare for your most important accounts.</p>"
    },
    {
      "heading": "Authenticator Apps and Text Codes",
      "html": "<p>An authenticator app on your phone generates a new six-digit code every thirty seconds for each account you add. You type the current code when logging in. The code never travels over the internet, so it cannot be intercepted the way a text message can. Setting one up takes a few minutes: the site shows a QR code, you scan it with the app, and you type the first code to confirm.</p>\n<p>Text codes are better than no second factor at all, but they have a weakness: a scammer can trick a phone company into moving your number to their SIM card, and then your codes go to them. That is rare, but it is why apps and security keys are the better choice where they are offered.</p>"
    },
    {
      "heading": "Backup Codes: Your Spare Key",
      "html": "<p>When you turn on 2FA, the service usually offers backup codes — one-time codes to use if you lose your phone. Save them somewhere safe, such as printed on paper in a drawer or in your password manager. Never store them in the same place as your passwords on an unprotected note.</p>\n<p>If you lose your phone, backup codes are how you get back in. Without them, recovery can take days and may need identity checks. Test your backup plan before you need it: make sure you know where the codes are and that they work.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>2FA needs your password plus a second factor, such as a code from your phone.</li>\n<li>Authenticator apps are stronger than text codes; security keys are strongest of all.</li>\n<li>Turn 2FA on first for email, banking, and your password manager.</li>\n<li>Backup codes are your spare key if you lose your phone — store them safely.</li>\n<li>A stolen password alone should never open an account with 2FA on.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Turning on 2FA and never saving the backup codes. Lose the phone and you can be locked out for days.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking 2FA means you can use a weak password. You still need a strong, unique password as the first factor.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain 2FA, set up an authenticator app, and say where your backup codes live, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Two-factor authentication (2FA)",
      "def": "Logging in with your password plus a second check, such as a code from your phone."
    },
    {
      "term": "Second factor",
      "def": "The extra check in 2FA, such as a code, a security key, or a fingerprint."
    },
    {
      "term": "Authenticator app",
      "def": "An app that generates new login codes every thirty seconds for your accounts."
    },
    {
      "term": "Security key",
      "def": "A small physical device you plug in or tap to prove it is really you logging in."
    },
    {
      "term": "Text code",
      "def": "A login code sent by text message, weaker than an app code because texts can be intercepted."
    },
    {
      "term": "Backup codes",
      "def": "One-time codes given when 2FA is set up, used to get back in if you lose your phone."
    },
    {
      "term": "QR code",
      "def": "A square barcode a phone camera can scan to open a website or form."
    },
    {
      "term": "SIM swap",
      "def": "A trick where a scammer moves your phone number to their SIM card to receive your texts."
    },
    {
      "term": "Biometric",
      "def": "A login check based on your body, such as a fingerprint or face scan."
    },
    {
      "term": "One-time code",
      "def": "A code that works once and then expires, used for a single login."
    },
    {
      "term": "Account recovery",
      "def": "The process of proving who you are to regain access to a locked account."
    },
    {
      "term": "Something you have",
      "def": "A factor you physically hold, such as your phone or a security key."
    }
  ],
  "video": {
    "title": "What is Two-Factor Authentication? (2FA)",
    "embedUrl": "https://www.youtube.com/embed/0mvCeNsTa1g",
    "note": "A plain explanation of two-factor authentication. As you watch, note the difference between app codes and text codes — and which one you will use.",
    "more": [
      {
        "title": "Two Factor Authentication Explained in 3 Minutes",
        "url": "https://www.youtube.com/watch?v=sPxAHV3P4IU"
      },
      {
        "title": "Passwords, 2FA, and Passkeys Explained (In Plain English)",
        "url": "https://www.youtube.com/watch?v=xSGJQWxeflk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Two-factor authentication (2FA)” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two-factor authentication (2FA) — Logging in with your password plus a second check, such as a code from your phone. Step 2: It matters because it is part of: Explain what two-factor authentication is. Step 3: An example from the module is the way two-factor authentication (2fa) shows up in everyday work, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Second factor” and “Authenticator app”. How are they different, and when would you use each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Second factor — The extra check in 2FA, such as a code, a security key, or a fingerprint. Step 2: Authenticator app — An app that generates new login codes every thirty seconds for your accounts. Step 3: They differ because the first is about second factor while the second is about authenticator app; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe the three kinds of second factors.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe the three kinds of second factors. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Security key” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Security key — A small physical device you plug in or tap to prove it is really you logging in. Step 3: The fix follows from that definition and from the module's accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Text code — A login code sent by text message, weaker than an app code because texts can be intercepted. Step 2: Backup codes — One-time codes given when 2FA is set up, used to get back in if you lose your phone. Step 3: QR code — A square barcode a phone camera can scan to open a website or form. Step 4: SIM swap — A trick where a scammer moves your phone number to their SIM card to receive your texts. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why authenticator apps beat text codes. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Two-factor authentication (2FA)” mean?",
      "choices": [
        "An app that generates new login codes every thirty seconds for your accounts.",
        "Logging in with your password plus a second check, such as a code from your phone.",
        "A small physical device you plug in or tap to prove it is really you logging in.",
        "A factor you physically hold, such as your phone or a security key."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two-factor authentication (2FA) means: Logging in with your password plus a second check, such as a code from your phone.. (a) is the definition of Authenticator app, not of Two-factor authentication (2FA). (c) is the definition of Security key, not of Two-factor authentication (2FA). (d) is the definition of Something you have, not of Two-factor authentication (2FA)."
    },
    {
      "q": "What does the term “Second factor” mean?",
      "choices": [
        "The extra check in 2FA, such as a code, a security key, or a fingerprint.",
        "A code that works once and then expires, used for a single login.",
        "A factor you physically hold, such as your phone or a security key.",
        "Logging in with your password plus a second check, such as a code from your phone."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Second factor means: The extra check in 2FA, such as a code, a security key, or a fingerprint.. (b) is the definition of One-time code, not of Second factor. (c) is the definition of Something you have, not of Second factor. (d) is the definition of Two-factor authentication (2FA), not of Second factor."
    },
    {
      "q": "What does the term “Authenticator app” mean?",
      "choices": [
        "A small physical device you plug in or tap to prove it is really you logging in.",
        "The extra check in 2FA, such as a code, a security key, or a fingerprint.",
        "Logging in with your password plus a second check, such as a code from your phone.",
        "An app that generates new login codes every thirty seconds for your accounts."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Authenticator app means: An app that generates new login codes every thirty seconds for your accounts.. (a) is the definition of Security key, not of Authenticator app. (b) is the definition of Second factor, not of Authenticator app. (c) is the definition of Two-factor authentication (2FA), not of Authenticator app."
    },
    {
      "q": "What does the term “Security key” mean?",
      "choices": [
        "One-time codes given when 2FA is set up, used to get back in if you lose your phone.",
        "A login code sent by text message, weaker than an app code because texts can be intercepted.",
        "A small physical device you plug in or tap to prove it is really you logging in.",
        "A trick where a scammer moves your phone number to their SIM card to receive your texts."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Security key means: A small physical device you plug in or tap to prove it is really you logging in.. (a) is the definition of Backup codes, not of Security key. (b) is the definition of Text code, not of Security key. (d) is the definition of SIM swap, not of Security key."
    },
    {
      "q": "Which term means: A login code sent by text message, weaker than an app code because texts can be intercepted.",
      "choices": [
        "Biometric",
        "Text code",
        "One-time code",
        "QR code"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Text code is the term for: A login code sent by text message, weaker than an app code because texts can be intercepted.. (a) Biometric means A login check based on your body, such as a fingerprint or face scan. (c) One-time code means A code that works once and then expires, used for a single login. (d) QR code means A square barcode a phone camera can scan to open a website or form."
    },
    {
      "q": "Which term means: One-time codes given when 2FA is set up, used to get back in if you lose your phone.",
      "choices": [
        "Authenticator app",
        "Security key",
        "Second factor",
        "Backup codes"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Backup codes is the term for: One-time codes given when 2FA is set up, used to get back in if you lose your phone.. (a) Authenticator app means An app that generates new login codes every thirty seconds for your accounts. (b) Security key means A small physical device you plug in or tap to prove it is really you logging in. (c) Second factor means The extra check in 2FA, such as a code, a security key, or a fingerprint."
    },
    {
      "q": "Which term means: A square barcode a phone camera can scan to open a website or form.",
      "choices": [
        "Authenticator app",
        "QR code",
        "One-time code",
        "SIM swap"
      ],
      "answer": 1,
      "explanation": "Correct: (b). QR code is the term for: A square barcode a phone camera can scan to open a website or form.. (a) Authenticator app means An app that generates new login codes every thirty seconds for your accounts. (c) One-time code means A code that works once and then expires, used for a single login. (d) SIM swap means A trick where a scammer moves your phone number to their SIM card to receive your texts."
    },
    {
      "q": "Which term means: A trick where a scammer moves your phone number to their SIM card to receive your texts.",
      "choices": [
        "Something you have",
        "Biometric",
        "Security key",
        "SIM swap"
      ],
      "answer": 3,
      "explanation": "Correct: (d). SIM swap is the term for: A trick where a scammer moves your phone number to their SIM card to receive your texts.. (a) Something you have means A factor you physically hold, such as your phone or a security key. (b) Biometric means A login check based on your body, such as a fingerprint or face scan. (c) Security key means A small physical device you plug in or tap to prove it is really you logging in."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Two-Factor Authentication: A Second Lock: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what two-factor authentication is.</p>\n<p><strong>Key terms:</strong> Two-factor authentication (2FA) · Second factor · Authenticator app · Security key · Text code · Backup codes · QR code · SIM swap.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what two-factor authentication is.</li>\n<li>Describe the three kinds of second factors.</li>\n<li>Explain why authenticator apps beat text codes.</li>\n</ul>\n<p><strong>Watch out:</strong> Save your backup codes somewhere safe the day you turn on 2FA — not after you lose your phone.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
