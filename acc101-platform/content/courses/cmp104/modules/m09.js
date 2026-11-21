// cmp104 - Module 9: Screens, Navigation & User Accounts
module.exports = {
  "number": 9,
  "slug": "screens-navigation-user-accounts",
  "title": "Screens, Navigation & User Accounts",
  "estTime": "3–4 hours",
  "objectives": [
    "Plan an app as a set of screens and the paths between them.",
    "Explain what a good login screen does and does not do.",
    "Explain why passwords must be stored safely and never in plain text.",
    "Describe what a user profile holds and who can see it.",
    "Explain why apps ask for permissions and how to ask well."
  ],
  "sections": [
    {
      "heading": "Planning Screens Like Rooms in a House",
      "html": "<p>Before you build, draw the screens as boxes on paper and draw arrows for the paths between them: home to detail, detail back to home, login to home, home to settings. If a screen has no arrow in or out, nobody can reach it. If a path needs five taps, users will give up. Most small apps need only four to seven screens, and the map fits on one page.</p>\n<p>Each screen has one job. A login screen logs you in; it is not also the place for news and settings. A list screen lists things; tapping one opens the detail screen. When a screen tries to do three jobs, split it. Clear screens make clear apps.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Each screen has one job, and every screen needs a way in and a way back.</div></p>\n"
    },
    {
      "heading": "Login: The Front Door",
      "html": "<p>A login screen asks for two things: who you are (usually an email address) and proof it is you (a password). It should say plainly what went wrong — “wrong password” is more helpful than “error” — without telling a stranger whether the account exists. It should offer a “forgot password” path, because people forget, and it should never show the password on screen as you type it.</p>\n<p>Behind the screen, the app checks the password against a stored value and, if it matches, gives the browser or phone a session: a temporary pass that says “this person is logged in” until they log out or it expires. Sessions are why you stay logged in when you come back tomorrow.</p>\n"
    },
    {
      "heading": "Passwords Must Never Be Stored in Plain Text",
      "html": "<p>This is the most important safety rule in this course. A password must never be saved as the words the user typed. Instead, the server runs it through a one-way process called hashing, which turns it into a scrambled value that cannot be turned back. When the user logs in, the server hashes what they typed and compares the scrambled values. If the database is ever stolen, the thieves get scrambled values, not passwords.</p>\n<p>Two more rules follow from this. Never show a password in an error message, a log, or an email. And never build your own login system for a real app until you understand hashing — use a trusted sign-in service instead. Getting login wrong hurts real people.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Never store a password as typed. Hash it, compare the hashes, and never show it anywhere.</div></p>\n"
    },
    {
      "heading": "Profiles, Privacy, and Permissions",
      "html": "<p>A user profile holds the facts the app needs to do its job: a name, an email address, maybe a photo. It should hold nothing the app does not need. Users should be able to see what is stored about them, change it, and delete their account. That is not only polite — in many places it is the law, and it is the right way to treat people's information.</p>\n<p>Permissions follow the same rule: ask only for what the app needs, only when it needs it, and say why. A torch app has no business asking for your contacts. A photo app asks for the camera when you tap “take a photo”, not the moment it opens. People trust apps that ask little and explain clearly.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Plan screens as boxes with arrows: every screen needs a way in and a way back.</li>\n<li>Login checks who you are and gives a session that keeps you signed in.</li>\n<li>Passwords are hashed, never stored as typed, and never shown.</li>\n<li>Store only the profile facts the app needs, and ask for permissions only when needed.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Storing passwords in plain text — the single most dangerous beginner mistake.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Asking for every permission the moment the app opens, with no explanation.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Screen",
      "def": "One view inside an app, such as a login screen or a home screen."
    },
    {
      "term": "Navigation",
      "def": "How a user moves between screens in an app."
    },
    {
      "term": "Login",
      "def": "Signing in to an app with an account name and password so it knows who you are."
    },
    {
      "term": "Password",
      "def": "A secret word or phrase that proves an account belongs to you."
    },
    {
      "term": "Hashing",
      "def": "A one-way process that turns a password into a scrambled value that cannot be turned back."
    },
    {
      "term": "Session",
      "def": "A temporary pass that keeps a user signed in until they log out or it expires."
    },
    {
      "term": "Profile",
      "def": "The facts an app holds about a user, such as a name and email address."
    },
    {
      "term": "Permission",
      "def": "A user's yes or no to an app using the camera, location, or notifications."
    },
    {
      "term": "Sign-up",
      "def": "Creating a new account in an app for the first time."
    },
    {
      "term": "Forgot password",
      "def": "The path that lets a user reset a password they cannot remember, usually by email."
    },
    {
      "term": "Privacy",
      "def": "A user's right to control what is stored about them and who can see it."
    },
    {
      "term": "Two-factor",
      "def": "A second check at login, such as a code sent to the user's phone, as well as the password."
    },
    {
      "term": "Logout",
      "def": "Ending a session so the app no longer knows who is using it."
    },
    {
      "term": "Account",
      "def": "A user's identity inside an app, holding their profile, settings, and data."
    },
    {
      "term": "Back button",
      "def": "The control that returns the user to the previous screen."
    }
  ],
  "video": {
    "title": "Let's wireframe an app using #Mockup on #iPad !",
    "embedUrl": "https://www.youtube.com/embed/miomrKOEuDY",
    "note": "Watch how a designer moves from sketches to screens, and notice how few screens a good app really needs.",
    "more": [
      {
        "title": "Sketch, wireframe, and prototype—all in one app! 👌",
        "url": "https://www.youtube.com/watch?v=gNsC5n2jxLg"
      },
      {
        "title": "My 5-Step UX/UI Design Process — From Start to Deliver",
        "url": "https://www.youtube.com/watch?v=aoFMyMYhKCM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Screen” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Screen — One view inside an app, such as a login screen or a home screen. Step 2: It matters because it is part of: Plan an app as a set of screens and the paths between them. Step 3: An example from the module is the way screen shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Navigation” and “Login”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Navigation — How a user moves between screens in an app. Step 2: Login — Signing in to an app with an account name and password so it knows who you are. Step 3: They differ because the first is about navigation while the second is about login; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain what a good login screen does and does not do.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what a good login screen does and does not do. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Password” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Password — A secret word or phrase that proves an account belongs to you. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hashing — A one-way process that turns a password into a scrambled value that cannot be turned back. Step 2: Session — A temporary pass that keeps a user signed in until they log out or it expires. Step 3: Profile — The facts an app holds about a user, such as a name and email address. Step 4: Navigation — How a user moves between screens in an app. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why passwords must be stored safely and never in plain text. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Screen” mean?",
      "choices": [
        "One view inside an app, such as a login screen or a home screen.",
        "How a user moves between screens in an app.",
        "Signing in to an app with an account name and password so it knows who you are.",
        "A secret word or phrase that proves an account belongs to you."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Screen means: One view inside an app, such as a login screen or a home screen. (b) is the definition of Navigation, not of Screen. (c) is the definition of Login, not of Screen. (d) is the definition of Password, not of Screen."
    },
    {
      "q": "What does the term “Navigation” mean?",
      "choices": [
        "One view inside an app, such as a login screen or a home screen.",
        "How a user moves between screens in an app.",
        "Signing in to an app with an account name and password so it knows who you are.",
        "A secret word or phrase that proves an account belongs to you."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Navigation means: How a user moves between screens in an app. (a) is the definition of Screen, not of Navigation. (c) is the definition of Login, not of Navigation. (d) is the definition of Password, not of Navigation."
    },
    {
      "q": "What does the term “Login” mean?",
      "choices": [
        "One view inside an app, such as a login screen or a home screen.",
        "How a user moves between screens in an app.",
        "Signing in to an app with an account name and password so it knows who you are.",
        "A secret word or phrase that proves an account belongs to you."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Login means: Signing in to an app with an account name and password so it knows who you are. (a) is the definition of Screen, not of Login. (b) is the definition of Navigation, not of Login. (d) is the definition of Password, not of Login."
    },
    {
      "q": "What does the term “Password” mean?",
      "choices": [
        "One view inside an app, such as a login screen or a home screen.",
        "How a user moves between screens in an app.",
        "Signing in to an app with an account name and password so it knows who you are.",
        "A secret word or phrase that proves an account belongs to you."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Password means: A secret word or phrase that proves an account belongs to you. (a) is the definition of Screen, not of Password. (b) is the definition of Navigation, not of Password. (c) is the definition of Login, not of Password."
    },
    {
      "q": "Which term means: A one-way process that turns a password into a scrambled value that cannot be turned back.",
      "choices": [
        "Hashing",
        "Screen",
        "Navigation",
        "Login"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hashing is the term for: A one-way process that turns a password into a scrambled value that cannot be turned back. (b) Screen means One view inside an app, such as a login screen or a home screen. (c) Navigation means How a user moves between screens in an app. (d) Login means Signing in to an app with an account name and password so it knows who you are."
    },
    {
      "q": "Which term means: A temporary pass that keeps a user signed in until they log out or it expires.",
      "choices": [
        "Screen",
        "Session",
        "Navigation",
        "Login"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Session is the term for: A temporary pass that keeps a user signed in until they log out or it expires. (a) Screen means One view inside an app, such as a login screen or a home screen. (c) Navigation means How a user moves between screens in an app. (d) Login means Signing in to an app with an account name and password so it knows who you are."
    },
    {
      "q": "Which term means: The facts an app holds about a user, such as a name and email address.",
      "choices": [
        "Screen",
        "Navigation",
        "Profile",
        "Login"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Profile is the term for: The facts an app holds about a user, such as a name and email address. (a) Screen means One view inside an app, such as a login screen or a home screen. (b) Navigation means How a user moves between screens in an app. (d) Login means Signing in to an app with an account name and password so it knows who you are."
    },
    {
      "q": "Which term means: A user's yes or no to an app using the camera, location, or notifications.",
      "choices": [
        "Screen",
        "Navigation",
        "Login",
        "Permission"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Permission is the term for: A user's yes or no to an app using the camera, location, or notifications. (a) Screen means One view inside an app, such as a login screen or a home screen. (b) Navigation means How a user moves between screens in an app. (c) Login means Signing in to an app with an account name and password so it knows who you are."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Screens, Navigation & User Accounts: Quick Reference</h3>\n<p><strong>Core idea:</strong> Plan an app as a set of screens and the paths between them.</p>\n<p><strong>Key terms:</strong> Screen · Navigation · Login · Password · Hashing · Session · Profile · Permission.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Plan an app as a set of screens and the paths between them.</li>\n<li>Explain what a good login screen does and does not do.</li>\n<li>Explain why passwords must be stored safely and never in plain text.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
